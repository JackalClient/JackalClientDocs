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
在线数据：使用 Ricochesta `data` 中的 `MinecraftScenePatterns.txt`、`MinecraftWorldJoinPatterns.txt`、`MinecraftWorldLeavePatterns.txt`、`MinecraftModuleToggleMessageTemplates.txt`、`MinecraftLogChatKeywordColors.txt`，每次客户端启动均尝试更新至 `output/Cache/ModuleMetadata`；内容未变化时不重复写入，断网或更新失败时继续使用已有有效缓存。以后优先修改并发布云控文件，不要恢复旧 assets 副本。本地下载缓存采用 deflate256 `japanese` 字母表和 `JP:` 标记保护，客户端自动解码，旧明文缓存自动迁移并保留修改时间；云端源文件仍维护为 UTF-8 明文，不要直接编辑本地密文缓存。

MinecraftUtils（MC功能）用于一些MC上的实用功能。
支持 Exhibobo/Novia 等省略 `--gameDir`、`--version`、`--username` 的启动方式：从 `游戏目录\jdk\bin\javaw.exe`（也支持 `jre`、`java.exe`）推导游戏目录，检查 `logs\latest.log` 中的 Minecraft 日志特征后识别实例，自定义窗口标题同样适用。日志在午夜轮转后，即使没有启动记录，也可按 `GuiNewChat`、`Minecraft`、`Client thread`、`Render thread` 等 Minecraft 专用日志前缀中的 `[CHAT]` 记录确认实例；普通 Java 日志或仅在正文中提及这些名称不会通过校验。用户名读取非聊天日志中的 `Setting user:`，版本读取 `Loading Minecraft` 或 OptiFine 版本记录；识别 1.8.9 后使用 LWJGL2 按键解析。已有日志仅限量读取身份信息和日志特征，不重放历史聊天或自动操作；之后继续增量解析，也支持 `[Minecraft/INFO]` 的连接日志。缺少日志或没有可信游戏日志特征时不采用此目录回退。版本和用户名暂时未知不影响实例识别，不从历史压缩日志或聊天正文猜测；需要时可用 `/mclog setname` 指定用户名。`/mclog test` 失败时会输出具体错误代码及相关日志路径。
专业版的 PlayerList 启用时会自动启用 MinecraftUtils 和 Log Parser Utilities，从同一日志解析流程追踪玩家加入、离开和死亡。名单按 Minecraft 实例隔离，切换服务器或断开连接时清空；死亡检测复用 AutoL 的普通检测规则，但不要求 AutoL 开启，也不受 Detect Kills 或 Detect Speak 模式影响。
适合键鼠行为控制、输入增强和自动化操作场景。
首次附加到已在世界中的游戏时，还会限量检查 latest.log 最后 256 KiB 的进出世界及连接记录，仅恢复连接状态，不重放历史聊天、胜负通知、音乐或自动操作。已保存的实例直接恢复原状态并从已处理日志位置续读。渲染线程的 Stopping worker threads 仅表示渲染工作线程停止，不再当作断线或离开世界。
PlayerList 的 Filter Player Names 默认开启，复用本模块的无效名称判断，排除系统提示等误识别项；保留本人，也不使用 AutoL 专属的发送目标排除或黑名单。疑似作弊者名称判断则读取 Ricochesta 的 `data/MinecraftHackerNamePatterns.json` 正则列表，启动时更新；失败保留有效缓存，无有效数据才使用旧版判断。
初次使用可优先调整：Key Input Method、Log Parser Notify、Log Parser Update Cooldown (ms)。

SessionHUD 的 Minecraft 模式会自动启用本模块和 Log Parser Utilities，并使用检测到的玩家名及服务器连接状态累计进服时长。胜利、失败和连胜统计复用 Notify Game Results 的识别和冷却逻辑，即使通知方式为 Off 也会累计；胜利增加连胜，失败将连胜归零。击杀、胜利、失败与连胜自动缓存，可按玩家区分或显示共享统计，超过 30 天未登录的玩家缓存会清理。
会话击杀统计由本模块的普通死亡检测独立维护，免费版和专业版均支持，不依赖 AutoL 及其 Detect Kills 模式。AutoL 的玩家击杀缓存与会话计数分别去重，不会因两个功能同时开启而重复增加会话击杀数。

[KillEffects](./KillEffects.md) 同样自动启用本模块及日志解析，在免费版和专业版中独立检测本人击杀。其连杀按实例隔离，加入或离开世界、同服务器重进世界、断线、胜利、失败和本人死亡时重置；检测到胜负即清零，不受通知开关和冷却影响。连杀音效与会话累计击杀数各自计数，不会重复增加会话统计。

## 玩家聊天格式

聊天解析支持 `Akyedgamer <1> › text`：识别出的玩家名为 `Akyedgamer`，消息正文为 `text`，`<1>` 仅视为玩家等级。支持多位数字等级、`›` / `»` 分隔符、等级与分隔符之间的空格或制表符，以及原有时间戳、频道和方括号头衔前缀；没有等级的 `Player › text` 也可识别。原有 `<Player> text`、`Player: text` 等格式保持兼容。

此解析供发言检测、玩家名称识别及聊天内容过滤共用，不需要修改云端聊天规则或额外启用配置。

## 玩家名称过滤

玩家名称过滤的日志包含词、玩家名包含词和完整名称排除词统一由 Ricochesta `data/MinecraftPlayerFilters.json` 提供，分别为 `line_keywords`、`name_keywords`、`exact_names`，沿用不区分英文大小写的匹配规则。MinecraftUtils 开启时，每次客户端启动或重新开启模块均异步刷新一次；其他模块自动开启 MinecraftUtils 时同样刷新，关闭时不启动新请求，快速切换会合并待处理刷新。

缓存位于 `output/Cache/ModuleMetadata/MinecraftPlayerFilters.json`，使用 deflate256 的 japanese 字母表加密。后台先加载可用缓存，再下载完整规则；更新失败保留已有数据，尚无有效缓存或云控时使用旧内置列表。合法空数组表示清空对应列表。该规则供 AutoL 与开启 Filter Player Names 的 PlayerList 共用，其他名称校验、本人保留和 AutoL 自定义黑名单行为不变。日志查看 CLIENT.LOG 的 `[MinecraftPlayerFilters]` 记录；云控文件需发布至 Gitee `main` 后生效。

## 结算赢家识别

单行胜负判定不再维护硬编码格式，统一使用 Ricochesta `data/MinecraftGameResultPatterns.txt`。`[Win]`、`[Lose]` 每行是一条字面模板，去掉颜色及首尾空白后匹配整行，英文不区分大小写；支持 `{player}`（本人）、`{others}`（其他玩家）、`{name}`（任意玩家），以及 `{text}`（任意长度文本，可为空）。例如 `[Win]` 中的 `{player} defeated {others}!` 和 `[Lose]` 中的 `{others} defeated {player}!` 可描述单挑结果。未知本人名称时不匹配含 `{player}` 或 `{others}` 的规则；名称按实际用户名完整比较，不会把其他玩家的同名前缀当成本人。空行与 `#` 开头的注释忽略，分节与占位符大小写精确匹配。

可选 `[End]` 使用相同模板，只确认结束、不增加胜负。可选 `[Winners]` 每行使用正则表达式，恰好一个捕获组提取完整赢家名单，保留 `Winner - 玩家` 等格式。判定优先级为 Winners、Lose、Win、End，同一分节按行顺序匹配。文件每次客户端启动刷新，断网复用有效加密缓存；没有文件时不回退硬编码规则或本地 assets，但仍保留原有多行结算名单解析。修改云端源文件后需另行提交、推送至 Gitee `main`，客户端下次正常启动才会下载。

结算区块先读取击杀榜之前的获胜名单，例如 `Green - [MVP++] Wormwaker(wormWaker), RubyPearl`；也支持直接出现的 `Winner - 玩家`、`Winner: 玩家`。识别时去掉头衔、颜色格式与 IRC 昵称后，按实际用户名不区分大小写精确比较：名单包含本人为胜利，否则为失败。`1st Killer` 仅代表击杀榜第一名，不代表获胜者；没有可靠名单或无法确定本人用户名时只记为未知结束，不再依赖 Developer 的强制胜利选项。

SessionHUD 战绩、音乐盒和 AutoGG 共用同一判定。多行区块按 Minecraft 实例分别暂存，最多等待 15 秒、读取 32 行；只处理新日志，不重放历史结算。

## 世界与场景模板

- `output/Cache/ModuleMetadata/MinecraftWorldJoinPatterns.txt`：每行一个正则表达式，匹配完整日志。`[SinglePlayer]` 与 `[MultiPlayer]` 段决定进入的世界类型；命中时清空 PlayerList 的名单、当前人数与容量。默认识别集成服务器登录和客户端 Connecting to 日志。
- `output/Cache/ModuleMetadata/MinecraftWorldLeavePatterns.txt`：每行一个正则表达式，匹配完整日志；命中时清空 PlayerList、清除场景、暂停会话连接，并进入无世界状态。默认覆盖服务器停止、工作线程停止、断线页面及世界清理等日志。
- `output/Cache/ModuleMetadata/MinecraftScenePatterns.txt`：`[场景名称]` 后每行一个正则表达式，优先匹配 Game Chat，无法提取聊天时匹配完整日志。首次命中确定当前场景；没有新匹配时保留原场景，切换或离开世界时清除。场景改变本身不会清空玩家列表。场景匹配忽略零长度结果，文本中的竖线应写成 `\|`，例如 `\| SkyWars Solo \|`，避免空分支匹配无关消息。

已有聊天事件会自动校正场景，并优先于同一条日志的场景模板：接受 Hypixel 条款设为 Lobby，进入 Limbo 设为 Limbo；起床开始、使用蠹虫、团队保护/效率/锋利/摔落保护升级、失去隐身、终杀奖励，以及原有商店购买黑曜石、末影珍珠、永久钻石盔甲和钻石剑事件设为 Bedwars。团队等级升级仍需带有效的 I～IV 等级。通用倒计时、重生、组队、语言和配置事件不改变场景。此过程不依赖专业版、事件通知开关或聊天输出方式；scene 变化会标记玩家列表缓存并记录调试日志，重复识别相同场景不会重复记录。

场景模板匹配的是提取后的聊天正文，不是调试日志中带缩进的整行。提取会删除 `[CHAT]` 后的全部行首空格和制表符，并删除行尾 CR/LF；正文通常没有尾随空格。因此不要用 `\s+` 强制要求正文两端有空白，应使用 `^\s*...\s*$`。例如 `^\s*island in order to eliminate every other (?:team|player)\.\s*$` 可同时识别两种空岛说明，无缩进、不同缩进或无尾随空格均可。云端另包含 `^\s*SkyWars\s*$` 直接识别开局标题，MinecraftGameStartPatterns.txt 使用 `\[CHAT\]\s*island in order to eliminate every other (?:team|player)\.\s*$` 匹配开局说明日志以清除上一局冷却，不使用结算时也会出现的 SkyWars 标题，避免只依赖部分服务器才有的 Cages opened! FIGHT! 提示。

PlayerList 可按当前场景筛选显示，默认显示 Skywars、LuckyIslands、PillarOfFortune；未识别的场景为 Unknown。可选场景还包括 Lobby、Bedwars、EggWars、FFA，段名需与对应名称一致。没有模板的游戏需要自行补充正则；筛选不影响收集玩家。PlayerList 数据另存于 `output/Cache/minecraft_player_list.json`，支持重启 Jackal Client 后恢复仍在运行的同一 Minecraft 实例名单与场景，不会恢复到新游戏进程。

以上文件均支持空行、UTF-8 BOM 和 `#` 注释，约每 3 秒重读；正则使用不区分大小写的 ECMAScript 语法，非法表达式记录警告并跳过，不影响其他有效规则。资源文件找不到时使用内置默认规则。规则优先在 Ricochesta 的 data 目录维护并发布，客户端每次启动均尝试下载已发布更新；不要再编辑 assets 中的旧资源文件。运行中仍约每 3 秒重读实际缓存，但不会后台联网更新。

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
检测到封禁时还会关联当前玩家名，供 SessionHUD 在用户名后绘制红色 BANNED；Notify Disconnection 为 Off 时也会记录。默认开启 Clear Username On Ban，记录封禁后会清空当前实例的玩家名，不再显示该实例的旧名字；关闭该项可保留原显示行为。封禁标记只保留本次运行的检测结果，不主动查询解封状态。
用户名还可通过 `/mclog setname <name>` 手动指定给最近的实例，或通过下面的 IRC 名称检测补充识别；更新后立即用于 SessionHUD、头像和统计归属。

## 配置项
AutoL、KillEffects 与本模块的死亡日志解析统一使用云控 `MinecraftAutoLPatterns.txt`。原 KillPatterns 模板及 Nonfinal Kills 分节已合并到 `[General]`，死亡玩家占位符统一为 `{player}`；严格本人击杀必须由同一条含 `{killer}` 的模板提取双方名字。模板还支持 `{sep_count}` 匹配纯数字或 `5,371` 这样的千位逗号数字，目前不直接影响统计。

- Clear Username On Ban（封禁后清空用户名）
 类型：布尔；默认：true；位于 Username Detection 分组，仅在 Log Parser Utilities 开启时显示，免费版和专业版均支持。
 说明：识别到临时、永久、客服或反作弊封禁时，先记录原玩家名的封禁状态，再清空当前实例的用户名并恢复为未识别状态；清空成功时单独通知原用户名，不受 Notify Disconnection 设置或其通知冷却影响。重复封禁日志不会对已清空的名字重复通知。不会删除历史战绩、AutoL 击杀统计或原用户名的封禁标记，也不影响其他 Minecraft 实例。清空过期 AutoL 匹配语录，重新识别时仍遵循已有用户名检测配置，也可用 `/mclog setname` 手动设置。
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
 说明：开启后把实例数据保存到 Records.json，包括玩家名、服务器地址、世界、场景、连接状态及已处理日志进度。重启时校验 PID、进程创建时间和日志路径，自动恢复仍在运行的实例，无需重新切回游戏前台，并从保存位置继续解析后续日志和触发事件。已退出或 PID 被复用的实例不恢复。首次需要使用更新后的客户端正常保存一次，旧记录没有完整恢复信息。
- Music Box Enabled (PRO)（启用音乐盒，专业版）
 类型：布尔；默认：false。依赖 Log Parser Utilities，独立于 Notify Game Results 的通知方式；免费版不执行音乐播放。
- Music Box Stop Mode（音乐停止模式）
 类型：单选；默认：Fade。Instant 立即停止，Fade 只对当前音乐盒音轨淡出，不改变系统、其他程序或其他客户端音频的音量。
- Music Box Fade Duration (ms)（淡出时长）
 类型：整数；默认：3000。仅在停止模式为 Fade 时显示，单位为毫秒，0 表示立即停止。
- Music Box Stop Conditions（停止条件）
 类型：多选。默认选择 Scene Changed（场景变化）、Leave World（退出世界）、Join World（加入世界）、Disconnect（断开连接或封禁）；Game Start（游戏开始）、Respawn（重生）、Not Foreground Window（前台窗口不再是 Minecraft）和 Press ESC（按下 ESC）默认不选。任一选中条件触发即可按 Instant / Fade 停止。Game Start 使用云端 MinecraftGameStartPatterns.txt，每行一条正则，# 开头为注释，初始规则为 Cages opened! FIGHT!；仅匹配新日志，恢复实例时的历史扫描不触发，沿用每次启动刷新、加密读写与离线复用。Respawn 匹配 You have respawned! 提示，不依赖其他事件通知开关。ESC 仅在选中该条件且音乐正在播放时逐帧检测，不要求客户端窗口处于前台。关闭音乐盒、解析器、MinecraftUtils 或退出游戏时始终立即停止。
- Music Box Max Duration Enabled（启用最长播放时限）
 类型：布尔；默认：true。只在音乐盒开启时显示，关闭后不按时长停止，其他停止条件仍生效。
- Music Box Max Duration (s)（最长播放时长）
 类型：整数；默认：20。只在最长播放时限开启时显示，从实际开始播放计时，到期立即执行 Instant / Fade，不依赖停止条件多选列表。淡出时长另算，例如 20 秒上限与 3000 毫秒淡出表示播放到第 20 秒开始淡出，第 23 秒左右结束；零或负数在开始播放后立即执行停止。
- Treat Death In Certain Minigames As Loss（指定小游戏死亡判负）
 已识别自身用户名时，若通用死亡检测确认死亡玩家为本人，或收到明确的自身死亡提示，且同一行含 `FINAL KILL`、`Final Kill` 或“最终击杀”，会直接判定失败；此规则不受本项小游戏选择限制，取消所有选择也不会关闭。其他玩家被最终击杀、本人作为击杀者或用户名尚未识别时，不会触发此规则。沿用现有失败统计、连胜重置、音乐和重复结果保护；普通死亡后紧接到达的最终击杀日志也可补充判负，不重复播放死亡音乐。
 类型：多选；候选和默认选择均为 Skywars、LuckyIslands、PillarOfFortune。依据当前已识别场景，在所选小游戏中自己死亡视为失败，使用与普通失败相同的统计和重复结果保护，更新 SessionHUD 的 losses 并清零 streak。无需开启音乐盒或结果通知，取消所有选择即可关闭。死亡识别复用通用死亡模板与自身死亡提示，支持 Wormwaker(wormWaker) fell into the void. 这类带 IRC 后缀的名称，按括号前的真实玩家名核对本人，不会将其他玩家的死亡计入自己的失败。
 检测到 MinecraftGameStartPatterns.txt 中的游戏开始提示时，会清除上一局的结果冷却、自身死亡去重及待播放的结束音乐，避免在三十秒内快速开始下一局后吞掉死亡判负。此处理不依赖 Game Start 停止条件是否勾选，免费版同样生效；是否停止正在播放的音乐仍由停止条件控制。
 排查音乐未播放时，可开启开发者模式及 Developer → MC Log Lines，日志中的 [MCUtils/Death] 显示原始和归一化玩家名，[MCUtils/SelfDeath] 显示当前场景与是否判负，[MCUtils/GameResult] 和 [MCUtils/MusicBox] 显示结果冷却、空音频路径、已有音乐播放等跳过原因，[MCUtils/GameStart] 表示已识别新对局并清除旧冷却。
- Music Box (Win Phase 1) ～ Music Box (Win Phase 5)（连胜阶段音乐）
 类型：字符串；默认均为空。阶段使用 SessionHUD 的 streak 连胜数，记录本次胜利后再选曲，不使用累计 wins；失败后的下一次胜利重新从阶段1开始，五连胜及以上均使用阶段5。空阶段沿用之前最近的非空音频路径，例如仅填写1和3时，两连胜使用1，五连胜使用3；此前全为空则不播放。阶段1非空才显示阶段2～5，旧 Music Box (Win) 配置自动迁移为阶段1。
- Music Box (Lose) / Music Box (Over)（失败 / 游戏结束音乐）
 类型：字符串；默认均为空。所有音乐路径均支持 WAV、MP3 文件或随机选曲文件夹。Lose 对应明确失败；仅检测到对局结束时短暂等待 1.5 秒，仍无法判断输赢才播放 Over，不增加胜负统计。重复结束日志不会重复播放，音乐盒正在播放或淡出时不叠加或排队新曲目。
- Music Box (Death)（死亡音乐）
 类型：字符串；默认为空，支持 WAV、MP3 或随机选曲文件夹。仅自己死亡时播放；前一秒内已触发其他音乐盒音轨则跳过，同次死亡先处理明确胜负或所选小游戏的死亡判负，再尝试死亡音乐，因此优先播放已配置的胜负音乐。仍遵循不叠加、不排队和最长播放时限规则。
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
- Log Game Chat Output Filter Types（日志游戏聊天输出过滤类型）
 类型：多选 combobox；默认全选。
 可选：Insult（辱骂）、Politics（政治）、Porn（色情）、Advertisement（广告）、Other（其他，保留类型，当前没有独立规则）。只扫描选中的类别，同时适用于 Block、Replace、Warn、Warn & Block；取消某一类不会遮挡同一消息中其他已选类别的检测。清空选择表示不匹配任何类别。仅在启用 Log Parser Utilities 与 Log Game Chat Output Filter 时显示。
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
### 通过 AutoL 推断玩家名

`Infer Username By AutoL` 位于 Username Detection 分组，仅在 Log Parser Utilities 开启时显示，默认 `Only Unknown`：

- `Off`：不启用这项推断，其他已有用户名识别与纠正逻辑保持不变。
- `Only Unknown`：仅当前实例的玩家名尚未识别时启用。
- `Always`：允许覆盖已经识别的玩家名。

用户名推断独立使用本地聊天格式解析，不受 AutoL 的 Detect Speak（Pattern / AI / Mixed）、联网状态或其他聊天事件拦截影响。消息与当前 Minecraft 实例上一句 AutoL 生成的语录逐字完全匹配，不使用包含或忽略大小写匹配。比较前清理 Minecraft 颜色代码和首尾空白；`/title`、`/tellraw`、`/shout`、`/pc`、actionbar 等命令包装不计入语录，`@` 和 Custom 直接添加的非命令前缀则保留，与实际显示的消息一致。Custom 若以 `/` 开头，仍按命令包装处理，不把该前缀计入语录。

必须实际发送语录并在 Minecraft 日志收到可解析的玩家发言，单纯生成、复制、显示通知或收到击杀提示不会推断用户名。匹配且发言者是合法玩家名时，将其设置为当前用户名；名称确实发生变化或由未知变为已知时显示检测成功通知，已是同一名称不会重复弹窗。后续聊天处理仍按原流程执行，不同 Minecraft 实例不会共享匹配语录。普通发言检测在离线时也使用本地格式解析，不会因 AI 请求失败而忽略发言。

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
