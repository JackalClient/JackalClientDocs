# PlayerList
玩家列表
分类：Render，位于 MCDisplay 下方。
描述：显示 Minecraft 玩家头像、名称、被你击杀的次数与生存状态。

## 需求
- 版本属性：专业版独有
- 权限需求：无
- 驱动依赖：否
- 联网需求：列表识别不需要联网，在线头像首次获取需要联网。

## 介绍
开启后自动开启 MinecraftUtils 和 Log Parser Utilities。通过 Minecraft 日志中的加入和离开提示维护名单，名称统一 normalize 并按不区分大小写的名称去重。默认还会通过死亡检测补充缺失的死者，并通过普通发言检测补充缺失的发言者，两项可以分别关闭；不主动查询服务器在线名单。发言补充只处理 Game Chat，不依赖 AutoL 开关或 Detect Speak 模式，新名字遵守人数上限并替换相应未知占位行，已有玩家不会因发言而重置死亡状态或加入顺序。切换到另一个 Minecraft 实例时显示该实例的名单，切换服务器或断线后清空。

默认每行依次显示头像、名称、被我击杀次数、状态。无法获取头像时使用 `steve.png`；本人的击杀次数列留空，其他玩家击杀次数未知或为零时显示 `-`。已存在的 AutoL 玩家击杀缓存用于初始化次数，之后本实例识别到本人击杀时更新，即使 AutoL 关闭或 Detect Kills 不是 Killed by me 也生效。

Filter Player Names 默认开启，复用 MinecraftUtils 的系统消息、保留词等无效玩家名称判断，作用于加入、发言、死亡补充及已有名单的显示；始终保留本人，不应用 AutoL 的发送目标排除及黑名单。关闭后仍执行基础姓名格式校验。服务器报告的人数不会因名称过滤减少，开启 Fill Missing Players 时仍以未知占位行补齐。

其中日志包含词、玩家名包含词和完整名称排除词来自 `MinecraftPlayerFilters.json` 云控。MinecraftUtils 开启时在客户端启动或重新开启模块后异步更新，失败保留有效缓存与规则；尚无有效云控或缓存时使用旧内置列表。缓存使用 deflate256 japanese 加密，新规则完整加载后即用于已有名单的显示过滤。

新加入玩家显示 Alive。死亡检测复用 AutoL 的普通死亡检测及 `assets/KILL_PATTERNS.txt`，不受其 Detect Kills、Detect Speak、死亡类别过滤和自动发送设置影响；显示死亡消息中的死因，例如 `slain by xxx`，无法提取时显示 Dead。被本人击杀的死亡状态使用独立颜色。再次检测到加入时恢复 Alive，清除旧死因和死亡去重信息，并刷新加入顺序，保留累计被我击杀次数；没有复活日志时不会猜测复活时间。PrivacyProtect 的 StringFilter 开启时过滤显示名称和死因中的敏感内容，不影响内部识别、排序或头像查询。

列表尺寸、位置和行排序带缓动，新行渐入。支持 Hud Editor 拖拽位置和缩放。

## 直播捣乱防护
Stream Sabotage Protection 可选择 On、Only Streamer Enabled、Off，默认 Only Streamer Enabled，即仅在 PlayerList 与 Streamer 都开启时启用；On 不要求开启 Streamer。检查进退服、发言和死亡检测到的规范化名称，包括击杀者；启用时也检查已有及缓存恢复的真实名单，与场景筛选或 HUD 是否聚焦无关，不检查 `?` 占位行。

严重词汇容器为源文件 `JackalClient/HudPlayerList.cpp` 的 `kPlayerListSeverelyInappropriateWords`，目前为空。自行在初始化列表中添加字符串，每个字符串一个词条；按不区分大小写的子串匹配，忽略空词条。该容器独立于一般聊天非法词汇，修改后需要重新编译。

触发后先执行保护动作，再发送固定内容 `Severely Inappropriate Name Detected`（按界面语言翻译），不包含违规姓名，避免通知或真弹幕再次传播姓名。默认动作 Black Capture，即启用黑屏捕获模块；Disable Streamer 调用 Streamer 模块的正常关闭流程，是否同步停播遵循该模块原有设置，Off 不执行动作。黑屏捕获不会自动恢复，也不绕过模块已有兼容性限制。

通知支持 Off、Notify、Chatter、Title、WinToast、Real Chatter，默认红色 Title；Notify 使用错误通知，Chatter 使用红色。WinToast 使用系统警告提示，Real Chatter 使用已有直播间弹幕队列，需要有效的已缓存直播间 ID。通知 Off 不影响动作，动作 Off 不影响通知。相同规范化姓名在一次保护启用期间只提示一次，关闭保护后或调整保护/通知/动作设置会重新检查。

## 缓存与场景显示
玩家头像与 Minecraft 模式 SessionHUD 共用 `output/Cache/mcavatar_*.png`，按文件最后修改时间清理超过一天的头像。启动约十分钟后首次清理，之后每小时检查；仅删除磁盘缓存，不影响已加载的头像纹理。

疑似作弊者名称规则由 Ricochesta `data/MinecraftHackerNamePatterns.json` 的正则字符串数组提供，使用区分大小写的 ECMAScript 正则匹配整个名称。每次启动更新，全部校验成功后替换；下载失败保留有效规则及缓存，没有有效云控或缓存才使用旧版名称判断。`[]` 表示主动关闭判断，不触发旧版 fallback。运行时缓存位于 `output/Cache/ModuleMetadata/`，不在客户端资源中保存云控副本。
本地云控缓存使用受保护格式保存，读取时自动解码；已有明文缓存会自动转换。

名单、状态、累计击杀次数、加入顺序、人数上限、当前场景及日志读取位置保存在 `output/Cache/minecraft_player_list.json`。重启 Jackal Client 后，仍在运行的同一 Minecraft 实例恢复数据，并继续处理停机期间的新日志；按日志路径、PID 和进程创建时间隔离实例，避免新游戏进程误用旧名单。关闭 PlayerList 只停止显示和收集，不清空名单；切换世界、断线或日志截断仍清空。

默认仅在 Skywars、LuckyIslands、PillarOfFortune 显示玩家表格。其他场景默认只显示标题，也可以改为在表格位置用粉色显示当前场景，或隐藏整个 HUD。未知场景使用 Unknown。场景筛选仅影响显示，不停止收集，也不清空名单。场景名称来自 `assets/MINECRAFT_SCENE_PATTERNS.txt` 的段名；未配置识别规则的游戏需自行补充模板。Hud Editor 编辑时忽略场景筛选、焦点隐藏和鼠标淡出，便于预览拖拽。

## 进退服模板
- 加入模板：`assets/PLAYERLIST_JOIN_PATTERNS.txt`
- 离开模板：`assets/PLAYERLIST_LEAVE_PATTERNS.txt`

每行一个模板，空行与 `#` 开头的注释行忽略。默认分别为：

```text
{player} joined the game
{player} left the game
```

模板正文按普通文本匹配，不是正则表达式。`{player}` 捕获玩家名及可选的 IRC 括号后缀，之后统一 normalize，因此 `DraftySpore7295(wormWaker)` 加入的是 `DraftySpore7295`。不要求日志的前缀或后缀固定。默认同时提供 `joined the game / joined your game`、`left the game / left your game` 的普通模板及人数模板：

```text
{player} joined your game ({count}/{max_count})
{player} left your game ({count}/{max_count})
```

`{count}` 是服务器上报的当前人数，`{max_count}` 是名单容量上限；两者均捕获非负整数。多个模板同时命中时，带人数信息的模板优先。已识别的姓名行数超过当前人数或容量时，删除最早加入的记录；当前人数本身也不得超过容量。已知名单不足校正人数时，默认在真实玩家之后补齐名称为 `?` 的占位行，使用 `steve.png`、击杀数 `-`、状态 `?`，不猜测其生死。占位行不参与姓名识别、排序置顶、头像查询、击杀统计或真实名单缓存，真实玩家加入或退出后自动调整占位数量。关闭 Fill Missing Players 后，标题人数和表格行数都按实际已知玩家数显示；原始校正人数保留，再次开启时可以恢复补齐。没有人数信息的退出消息会递减最近报告的人数。

仍支持不写占位符、只填写名称后的匹配短语。模板约每 3 秒热重读，支持 UTF-8 BOM、空行及 `#` 注释；文件找不到时使用内置默认规则。编辑正在运行的客户端实际资源目录，仓库 assets 与构建产物中的 assets 是不同目录。

MinecraftUtils 的世界加入、离开规则命中时，自动清空名单、当前人数与容量；场景识别只更新场景，不会因为 Skywars 倒计时而清空已经收集的玩家。详见 MinecraftUtils 的世界与场景模板。

## 配置项
- HUD Background：是否显示背景，默认 true。
- HUD Background Opacity (0~1)：背景不透明度，默认 0.3。
- HUD Background Round Corners：背景是否圆角，默认 true。
- HUD Background Roundness (0~1)：背景圆角程度，默认 0.5。
- HUD Background Color：统一 Color 类型，默认 Black，支持预设、RGBA 和 Sin。
- HUD Shadow：是否显示阴影，默认 true；可独立于背景显示。
- HUD Shadow Opacity (0~1)：阴影不透明度，默认 0.5，不与背景不透明度相乘。
- HUD Shadow Thickness：阴影厚度，默认 20.0，跟随整体缩放。
- HUD Scale：整体缩放，默认 1.0，不跟随 ClickGUI 缩放。
- HUD Text Opacity (0~1)：文字与图标不透明度，默认 1.0。
- HUD Title：显示标题，默认 true；左侧图标为 `newplayers.png`。
- HUD Title Text：标题文字，默认 `Players ({count})`；`{count}` 在开启未知玩家补齐时使用校正人数（包括占位行），关闭时使用实际已知玩家数；`{max_count}` 替换为已检测到的人数上限，未知上限显示 `-`。未收到人数信息时使用已识别姓名行数。
- HUD Title Color：统一 Color 类型，默认 White。
- HUD Table Data：多选 combobox，可选 Avatar、Name、Kills by me、Status，默认全部开启；列按此固定顺序排列。
- Fill Missing Players：补齐未知玩家，默认 true。已知名单不足校正人数时补齐 `?` 占位行；关闭后只显示实际掌握的玩家及相应人数。占位行与真实玩家共用列选择、整体缩放、鼠标淡出、场景筛选及布局缓动。
- Filter Player Names：过滤无效玩家名称，默认 true；保留本人，不应用 AutoL 黑名单，对已有名单也即时生效。
- Cheater Name Detection：使用 IsMinecraftHackerName 的云控正则识别疑似作弊者名称，默认 true；无有效云控或缓存时使用旧版规则。只按名称规则判断，不代表反作弊检测结论。
- Player Name Color：普通玩家名称颜色，默认 Gray。
- Your Name Color：本人名称颜色，默认 Green，优先于作弊者名称颜色。
- Cheater Name Color：疑似作弊者名称颜色，默认 Red。
- Status Alive Color：存活状态颜色，默认 Dark Green。
- Status Dead Color：普通死亡状态颜色，默认 Red。
- Status Killed Color：被本人击杀的死亡状态颜色，默认 Gold。
- Easing Speed (0~1)：布局及新行的缓动速率，默认 0.15；0 关闭缓动，1 立即到达目标。
- Give Way to Mouse：默认 true，鼠标进入 HUD 实际区域时整体平滑淡出到 20% 不透明度，离开后恢复，不移动 HUD。文字、图标、背景、阴影和背景模糊同步淡出，背景与阴影的不透明度仍独立。
- Hide When Minecraft Not Focused：默认 true，当前 Minecraft 实例未聚焦时向最近屏幕边缘缓动隐藏，聚焦后恢复；Hud Editor 编辑时不隐藏。
- Sort By：Join Order、Kills by me、Name、Name Length，默认 Join Order；名称长度相同时按名称排序，名称排序不区分大小写。
- Sort Order：Ascending、Descending，默认 Ascending。
- Sort Topmost Cheaters：疑似作弊者置顶，默认 true；置顶组内部仍遵循排序设置。
- Sort Topmost Yourself：本人置顶，默认 true；优先级高于作弊者置顶。
- Vertical Anchor：Top、Center、Bottom，默认 Top；列表高度变化时从纵向锚点向外伸缩。
- Horizontal Anchor：Left、Center、Right，默认 Left；列表宽度变化时从横向锚点向外伸缩。
- X Rate、Y Rate：HUD 锚点位置占屏幕的比例，默认分别为 0.3、0.1。
- Add Players from Death Detection：默认 true，通过普通死亡检测补充缺失死者，记录死因与被本人击杀状态；补充时仍遵守人数上限，超过上限移除最早加入的玩家。
- Add Players from Chat Detection：默认 true，通过普通发言检测补充缺失发言者，已有玩家保持原生死状态与加入顺序；补充遵守人数上限并保存到真实名单缓存。
- Stream Sabotage Protection：On、Only Streamer Enabled、Off，默认 Only Streamer Enabled。
- Stream Sabotage Notify：Off、Notify、Chatter、Title、WinToast、Real Chatter，默认 Title，使用红色提示。
- Stream Sabotage Actions：Off、Black Capture、Disable Streamer，默认 Black Capture。
- Visible Scenes：多选 combobox，可选 Unknown、Lobby、Skywars、Bedwars、LuckyIslands、PillarOfFortune、EggWars、FFA；默认选中 Skywars、LuckyIslands、PillarOfFortune，可以取消全部选择。
- Outside Selected Scenes：Hide Table、Hide Table and Show Scene、Hide HUD，默认 Hide Table。Hide Table 仅显示标题，关闭标题时隐藏 HUD；Hide Table and Show Scene 在表格位置用粉色显示当前场景；Hide HUD 完全隐藏。

选项按布局、背景、阴影、标题、玩家名称、状态、排序、场景筛选、直播捣乱防护分组，相关颜色与附属项仅在对应开关或数据列开启时显示；保护关闭时隐藏通知与动作选项。
