# MinecraftUtils
MC功能
分类：Control
描述：一些MC上的实用功能。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
MinecraftUtils（MC功能）用于一些MC上的实用功能。
支持 Exhibobo/Novia 等省略 `--gameDir`、`--version`、`--username` 的启动方式：从 `游戏目录\jdk\bin\javaw.exe`（也支持 `jre`、`java.exe`）推导游戏目录，检查 `logs\latest.log` 中的 Minecraft 日志特征后识别实例，自定义窗口标题同样适用。日志在午夜轮转后，即使没有启动记录，也可按 `GuiNewChat`、`Minecraft`、`Client thread`、`Render thread` 等 Minecraft 专用日志前缀中的 `[CHAT]` 记录确认实例；普通 Java 日志或仅在正文中提及这些名称不会通过校验。用户名读取非聊天日志中的 `Setting user:`，版本读取 `Loading Minecraft` 或 OptiFine 版本记录；识别 1.8.9 后使用 LWJGL2 按键解析。已有日志仅限量读取身份信息和日志特征，不重放历史聊天或自动操作；之后继续增量解析，也支持 `[Minecraft/INFO]` 的连接日志。缺少日志或没有可信游戏日志特征时不采用此目录回退。版本和用户名暂时未知不影响实例识别，不从历史压缩日志或聊天正文猜测；需要时可用 `/mclog setname` 指定用户名。`/mclog test` 失败时会输出具体错误代码及相关日志路径。
专业版的 PlayerList 启用时会自动启用 MinecraftUtils 和 Log Parser Utilities，从同一日志解析流程追踪玩家加入、离开和死亡。名单按 Minecraft 实例隔离，切换服务器或断开连接时清空；死亡检测复用 AutoL 的普通检测规则，但不要求 AutoL 开启，也不受 Detect Kills 或 Detect Speak 模式影响。
适合键鼠行为控制、输入增强和自动化操作场景。
PlayerList 的 Filter Player Names 默认开启，复用本模块的无效名称判断，排除系统提示等误识别项；保留本人，也不使用 AutoL 专属的发送目标排除或黑名单。疑似作弊者名称判断则读取 Ricochesta 的 `data/MinecraftHackerNamePatterns.json` 正则列表，启动时更新；失败保留有效缓存，无有效数据才使用旧版判断。
初次使用可优先调整：Key Input Method、Log Parser Notify、Log Parser Update Cooldown (ms)。

SessionHUD 的 Minecraft 模式会自动启用本模块和 Log Parser Utilities，并使用检测到的玩家名及服务器连接状态累计进服时长。胜利、失败和连胜统计复用 Notify Game Results 的识别和冷却逻辑，即使通知方式为 Off 也会累计；胜利增加连胜，失败将连胜归零。击杀、胜利、失败与连胜自动缓存，可按玩家区分或显示共享统计，超过 30 天未登录的玩家缓存会清理。
会话击杀统计由本模块的普通死亡检测独立维护，免费版和专业版均支持，不依赖 AutoL 及其 Detect Kills 模式。AutoL 的玩家击杀缓存与会话计数分别去重，不会因两个功能同时开启而重复增加会话击杀数。

[KillEffects](./KillEffects.md) 同样自动启用本模块及日志解析，在免费版和专业版中独立检测本人击杀。其连杀按实例隔离，加入或离开世界、同服务器重进世界、断线、胜利、失败和本人死亡时重置；检测到胜负即清零，不受通知开关和冷却影响。连杀音效与会话累计击杀数各自计数，不会重复增加会话统计。

## 玩家名称过滤

玩家名称过滤的日志包含词、玩家名包含词和完整名称排除词统一由 Ricochesta `data/MinecraftPlayerFilters.json` 提供，分别为 `line_keywords`、`name_keywords`、`exact_names`，沿用不区分英文大小写的匹配规则。MinecraftUtils 开启时，每次客户端启动或重新开启模块均异步刷新一次；其他模块自动开启 MinecraftUtils 时同样刷新，关闭时不启动新请求，快速切换会合并待处理刷新。

缓存位于 `output/Cache/ModuleMetadata/MinecraftPlayerFilters.json`，使用 deflate256 的 japanese 字母表加密。后台先加载可用缓存，再下载完整规则；更新失败保留已有数据，尚无有效缓存或云控时使用旧内置列表。合法空数组表示清空对应列表。该规则供 AutoL 与开启 Filter Player Names 的 PlayerList 共用，其他名称校验、本人保留和 AutoL 自定义黑名单行为不变。日志查看 CLIENT.LOG 的 `[MinecraftPlayerFilters]` 记录；云控文件需发布至 Gitee `main` 后生效。

## 世界与场景模板

- `assets/MINECRAFT_WORLD_JOIN_PATTERNS.txt`：每行一个正则表达式，匹配完整日志。`[SinglePlayer]` 与 `[MultiPlayer]` 段决定进入的世界类型；命中时清空 PlayerList 的名单、当前人数与容量。默认识别集成服务器登录和客户端 Connecting to 日志。
- `assets/MINECRAFT_WORLD_LEAVE_PATTERNS.txt`：每行一个正则表达式，匹配完整日志；命中时清空 PlayerList、清除场景、暂停会话连接，并进入无世界状态。默认覆盖服务器停止、工作线程停止、断线页面及世界清理等日志。
- `assets/MINECRAFT_SCENE_PATTERNS.txt`：`[场景名称]` 后每行一个正则表达式，优先匹配 Game Chat，无法提取聊天时匹配完整日志。首次命中确定当前场景；没有新匹配时保留原场景，切换或离开世界时清除。场景改变本身不会清空玩家列表。场景匹配忽略零长度结果，文本中的竖线应写成 `\|`，例如 `\| SkyWars Solo \|`，避免空分支匹配无关消息。

已有聊天事件会自动校正场景，并优先于同一条日志的场景模板：接受 Hypixel 条款设为 Lobby，进入 Limbo 设为 Limbo；起床开始、使用蠹虫、团队保护/效率/锋利/摔落保护升级、失去隐身、终杀奖励，以及原有商店购买黑曜石、末影珍珠、永久钻石盔甲和钻石剑事件设为 Bedwars。团队等级升级仍需带有效的 I～IV 等级。通用倒计时、重生、组队、语言和配置事件不改变场景。此过程不依赖专业版、事件通知开关或聊天输出方式；scene 变化会标记玩家列表缓存并记录调试日志，重复识别相同场景不会重复记录。

PlayerList 可按当前场景筛选显示，默认显示 Skywars、LuckyIslands、PillarOfFortune；未识别的场景为 Unknown。可选场景还包括 Lobby、Bedwars、EggWars、FFA，段名需与对应名称一致。没有模板的游戏需要自行补充正则；筛选不影响收集玩家。PlayerList 数据另存于 `output/Cache/minecraft_player_list.json`，支持重启 Jackal Client 后恢复仍在运行的同一 Minecraft 实例名单与场景，不会恢复到新游戏进程。

以上文件均支持空行、UTF-8 BOM 和 `#` 注释，约每 3 秒重读；正则使用不区分大小写的 ECMAScript 语法，非法表达式记录警告并跳过，不影响其他有效规则。资源文件找不到时使用内置默认规则。编辑正在运行的客户端的实际 assets 目录；从仓库修改资源后，需要同步到当前构建的资源目录。

规则在匹配阶段触发 `regex_error`（包括复杂度超限）时，日志会标明具体资源文件和表达式，并暂停该条规则，其他规则继续处理；修改该模板文件后重新加载规则。进退服普通文本模板还会先检查固定短语，避免对无关的长聊天进行复杂匹配。聊天时间戳前缀不再重复匹配可为空的后缀，减少回溯；其他解析正则异常仅跳过对应日志条目，不中断同一批次的后续日志。

默认场景规则：

```text
[Lobby]
You have [0-9]+ unclaimed rewards!
A chest has been hidden somewhere in the lobby with some goodies inside!

[Skywars]
SkyWars is starting in [0-9]+ seconds\.
```

当前场景可通过 `/mclog list` 的 Scene 字段查看，也会在场景变化时记录到调试日志。可用 `/mclog simulate <完整日志>` 注入示例，再查看名单和场景。首次收到 Game Chat 但尚未识别世界时，也会建立多人世界状态；普通聊天不再被误判为单人世界。
断线检测支持包含时间与线程前缀的 `Client disconnected with reason:` 日志，包括 Render thread/WARN 中的临时或永久封禁。多行原因首先按断线首行分类，非聊天日志同样会按 Notify Disconnection 输出通知，不再要求包含 `[CHAT]`。断线通知沿用去重冷却，并暂停进服计时。
检测到封禁时还会关联当前玩家名，供 SessionHUD 在用户名后绘制红色 BANNED；Notify Disconnection 为 Off 时也会记录。封禁标记只保留本次运行的检测结果，不主动查询解封状态。
用户名还可通过 `/mclog setname <name>` 手动指定给最近的实例，或通过下面的 IRC 名称检测补充识别；更新后立即用于 SessionHUD、头像和统计归属。

## 配置项
- Get Username By IRC Name（通过 IRC 名称获取玩家名）
 类型：布尔；默认：false；仅在 Log Parser Utilities 开启时显示。
 说明：每行 GameChat 都检查 `name(IRCName)` 格式。当括号内内容与 Client IRC Name 完整相符时，将括号前的玩家名作为当前实例用户名；每个实例仅在首次识别成功时通知。免费版和专业版均支持，不需要开启 IRC 模块或聊天输出。
- Client IRC Name（客户端 IRC 名称）
 类型：文本；默认：空；仅在日志解析和 Get Username By IRC Name 都开启时显示。
 说明：填写括号内的 IRC 名称，不包括括号；留空不会触发检测。检测会清理玩家名装饰，并验证名称格式。
- Auto Sprint (Forward)（自动疾跑 (前进)）
 类型：布尔；默认：true
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Auto Sprint (Attack)（自动疾跑 (攻击)）
 类型：布尔；默认：true
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- In Game Detection（游戏中检测方式）
 类型：枚举；默认："Auto"
 说明：这是选项型配置。默认值 Auto 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Auto（自动）；Cursor Visibility（光标可见性）；Mouse Capture（鼠标捕获）；Window Center（窗口中心）
- Window Center Radius（窗口中心半径）
 类型：数值；默认：100.0f
 说明：用于细调显示样式和间距。默认值 100.0f 通常是平衡视觉效果与紧凑度的设置，建议小步调整并实时观察。
- Key Input Method（按键输入方式）
 类型：枚举；默认："SendInput"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 SendInput ，确认稳定后再逐项切换比较效果。
 可选：SendInput（未收录）；WMessage（窗口消息）；Simulation（模拟）
- Save Move Keys (PRO)（保存移动按键 （专业版））
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Save Move Keys Release Interval (ms)（保存移动按键释放间隔（毫秒））
 类型：数值；默认：10L
 说明：用于控制检测/刷新/动画节奏。默认值 10L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Log Parser Utilities（日志解析功能）
 类型：布尔；默认：true
 说明：控制日志解析相关功能；关闭后，解析参数、游戏聊天输出与相关通知配置会一并隐藏。
- Log Parser UTF-8（日志解析使用UTF-8编码）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Log Parser Notify（日志解析通知）
 类型：布尔；默认：false
 说明：用于选择结果反馈方式。默认值 false 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Log Parser Save Data（保存日志解析数据）
 类型：布尔；默认：true
 说明：开启后会把日志解析得到的游戏实例数据保存到 Records.json，客户端重启后会按仍在运行的游戏进程 PID 校验并恢复服务器地址等信息。
- Log Parser Update Cooldown (ms)（日志解析更新冷却（毫秒））
 类型：数值；默认：300L
 说明：用于控制检测/刷新/动画节奏。默认值 300L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Log Cache Max Lines（日志缓存最大行数）
 类型：数值；默认：32L
 说明：这是数值型配置。默认值 32L 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Log Game Chat Output Mode (PRO)（日志游戏聊天输出模式（专业版））
 类型：枚举；默认："Island"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。选择 Chat Bar 时会按社交媒体格式自动染色，并对内置关键词使用特殊颜色；如果多个 Minecraft 会话连续输出完全相同的最后一条消息，会自动合并对应 PID 组以避免重复刷屏，并最多每分钟提示一次警告通知。
 可选：Off（关闭）；Notify（通知）；Chatter（弹幕）；Title（标题）；Speak（讲述）；Island（岛）；Real Chatter（真弹幕）；Console Output（控制台输出）；Log（日志）；Chat Bar（聊天栏）；Actionbar（行为栏）
- Sync Chat Module Toggle Notification (PRO)（同步聊天模块启停通知（专业版））
 类型：枚举；默认："Off"
 说明：专业版功能。开启后会识别聊天栏中的模块启停格式，例如 `[Myau] Scaffold Enabled`、`Scaffold Disabled` 或 `Enabled Scaffold`，并按客户端当前通知样式同步显示模块启停消息；Notification 输出为 Minecraft 标题的通知，Island 输出为灵动岛临时消息。
 可选：Off（关闭）；Notification（通知）；Island（岛）
- Log Game Chat Chatter Type（日志游戏聊天弹幕类型）
 类型：枚举；默认："Top"
 说明：用于选择结果反馈方式。默认值 Top 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：Scroll（滚动）；Top（顶端）；Bottom（底部）；Reverse（颠倒）；Horizontal（横向）；Vertical（纵向）；Random（随机）
- Log Game Chat Chatter Color（日志游戏聊天弹幕颜色）
 类型：枚举；默认："Colorful"
 说明：用于选择结果反馈方式。默认值 Colorful 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Log Game Chat Speak Translator（日志游戏聊天讲述翻译）
 类型：布尔；默认：false
 说明：仅在 Log Game Chat Output Mode (PRO) 选择 Speak 时显示，用于控制讲述前是否翻译聊天内容。
- Log Game Chat Output Filter（日志游戏聊天输出过滤）
 类型：布尔；默认：true
 说明：用于限定作用范围，避免误触发。建议先用小样本验证规则，再逐步扩展；涉及正则时优先从简单规则开始。
- Log Game Chat Output Filter Mode（日志游戏聊天输出过滤模式）
 类型：枚举；默认："Warn & Block"
 说明：用于限定作用范围，避免误触发。建议先用小样本验证规则，再逐步扩展；涉及正则时优先从简单规则开始。
 可选：Block（格挡）；Replace（替换）；Warn（警告）；Warn & Block（警告并阻止）
- Input Method (Game)（输入法（游戏时））
 类型：枚举；默认："Ignore"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 Ignore ，确认稳定后再逐项切换比较效果。
 可选：Ignore（忽略）；Off（关闭）
- Input Method (Chat)（输入法（聊天栏））
 类型：枚举；默认："Ignore"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 Ignore ，确认稳定后再逐项切换比较效果。
 可选：Ignore（忽略）；Off（关闭）；On（开启）
- Auto Read Keybinds（自动读取按键绑定）
 类型：布尔；默认：true
 说明：用于设置快捷键触发。建议避免与系统或常用软件冲突，优先使用组合键提高可控性。
- Auto Read Cooldown (ms)（自动读取冷却（毫秒））
 类型：数值；默认：60000L
 说明：用于控制检测/刷新/动画节奏。默认值 60000L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Attack Key（攻击键）
 类型：按键/复合；默认：`{ { "Keybind", {VK_LBUTTON } }`}
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Use Key（使用键）
 类型：按键/复合；默认：`{ { "Keybind", {VK_RBUTTON } }`}
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Forward Key（前进键）
 类型：按键/复合；默认：`{ { "Keybind", {'W' } }`}
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Left Key（向左键）
 类型：按键/复合；默认：`{ { "Keybind", {'A' } }`}
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Backward Key（后退键）
 类型：按键/复合；默认：`{ { "Keybind", {'S' } }`}
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Right Key（向右键）
 类型：按键/复合；默认：`{ { "Keybind", {'D' } }`}
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Jump Key（跳跃键）
 类型：按键/复合；默认：`{ { "Keybind", {VK_SPACE } }`}
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Sneak Key（潜行键）
 类型：按键/复合；默认：`{ { "Keybind", {VK_LSHIFT } }`}
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Sprint Key（疾跑键）
 类型：按键/复合；默认：`{ { "Keybind", {VK_LCONTROL } }`}
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Inventory Key（背包键）
 类型：按键/复合；默认：`{ { "Keybind", {'E' } }`}
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Chat Key（聊天键）
 类型：按键/复合；默认：`{ { "Keybind", {'T' } }`}
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Command Key（命令键）
 类型：按键/复合；默认：`{ { "Keybind", {VK_OEM_2 } }`}
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
## 历史更新
- v1.1.7：配置项按输入、检测、日志解析、聊天输出、通知和移动按键分组，并根据主开关与输出模式隐藏无关选项。
- 52. 为 Minecraft Utils 添加配置：
- 13. 修复 MinecraftUtils 的 Log Parser Utilities 尝试对基岩版启动解析的问题。
- 8. 添加模块：MinecraftUtils，关于MC的合法功能

## 备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

## 相关命令
无

## 相关模块
- [AntiAFK (反挂机)](./AntiAFK.md)
- [AutoClicker (连点器)](./AutoClicker.md)
- [MouseWatcher (鼠标监视)](./MouseWatcher.md)
- [MouseSwap (鼠标交换)](./MouseSwap.md)
- [MouseDisabler (禁用鼠标)](./MouseDisabler.md)
- [MouseTeleport (鼠标传送)](./MouseTeleport.md)
- [MouseTrails (鼠标轨迹)](./MouseTrails.md)
- [MouseESP (鼠标透视)](./MouseESP.md)

## 相关资料
无
