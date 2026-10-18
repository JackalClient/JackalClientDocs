# SessionHUD
会话显示
分类：Render
描述：显示当前用户的信息。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
SessionHUD（会话显示）支持 Windows 与 Minecraft 两种会话信息。
Minecraft 模式会自动启用 MinecraftUtils 和日志解析。获取服务器地址后开始计时，断开连接或游戏退出时暂停。时长默认跨玩家共享，可选择按用户名分别累计；重连继续累计，多个实例同时在线不会重复累计共享时长，同一用户名的多个实例也不会重复累计该玩家的时长。游玩时长仅在本次客户端运行内有效。
击杀、连胜、胜利、失败默认按玩家分别统计，也可显示跨玩家共享统计；两种统计都会保留，切换配置不会丢失已有数据。未知用户名时不因身份缺失而重置计数，继续使用最近已知的统计归属，首次未识别到玩家时使用匿名统计。统计自动保存到 `output/Cache/minecraft_session_stats.json`，重启后恢复；旧缓存缺少的连胜和失败计数按 0 读取。玩家条目记录最近登录时间，超过 30 天未登录的非活跃玩家数据会在加载和定期维护时清理，共享总计和匿名统计保留。
统计行顺序固定为 `kills / streak / wins / losses`，开启的项目以空格分隔。击杀、胜利和失败在数量为 0 或 1 时使用 `kill / win / loss`，大于 1 时使用复数。Classic 风格的用户名、游玩时长与统计行分别维护连续滚动位置，不再与其他滚动文字或阴影共用位移。
MinecraftUtils 检测到当前账号封禁后，绘制用户名时会在其后显示红色 `BANNED`，与用户名一起滚动，并且不受 Flow 文字着色影响。封禁状态按玩家名区分，不依赖 Statistics Per Player，也不要求断线通知开启；切换已识别的账号不会混用标记。未知用户名不显示标记，在同一实例后续识别到用户名时再关联。标记仅保存本次 Jackal Client 运行中检测到的状态，不写入战绩缓存，也不主动查询封禁是否到期。隐藏用户名时不单独显示标记，Rise 风格保留原有隐藏用户名的布局。
Minecraft 头像通过当前玩家名查询正版 UUID，再从 Crafatar 获取，缓存到 `output/Cache/mcavatar_<uuid>.png`。无法获取玩家名或头像时不显示头像，也不会替换成 Windows 头像或占位图；首次加载头像需要联网。Rise 风格仍保留隐藏头像和用户名的原有布局。
头像磁盘缓存与 PlayerList 共用，最后修改时间超过一天时自动删除；启动约十分钟后首次清理，之后每小时检查，不影响已加载的头像纹理。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：X Rate、Y Rate、Hide When Menu On。

## 配置项
- Mode（模式）
 类型：枚举；默认：Windows；可选：Windows、Minecraft。
 说明：Windows 显示系统用户名与开机时间；Minecraft 显示当前检测玩家名与累计进服时长。
- Hide HUD Condition（HUD 隐藏条件）
 类型：枚举；默认：No Minecraft Instance；可选：Never、No Minecraft Instance、Unknown Username；仅在 Minecraft 模式显示。
 说明：Never 不按实例或用户名隐藏；No Minecraft Instance 在没有检测到 Minecraft 实例时隐藏；Unknown Username 在无法识别当前玩家名时隐藏。焦点隐藏是独立条件，因此 Never 不会关闭 Hide When Minecraft Not Focused。隐藏和恢复沿 HUD 位置最近的屏幕边缘缓动滑出、滑入，与 MusicOverlay 的侧边动画一致。Hud Editor 开启时保留 HUD，便于编辑位置；Windows 模式不受此项影响。
- Hide When Minecraft Not Focused（未聚焦 Minecraft 时隐藏）
 类型：布尔；默认：true；仅在 Minecraft 模式显示并生效。
 说明：当前 Minecraft 实例不在前台时从最近屏幕边缘缓动隐藏，重新聚焦时滑入。与 Hide HUD Condition 独立判断；Hud Editor 开启时不隐藏。
- Show Kills（显示击杀数）
 类型：布尔；默认：true；仅在 Minecraft 模式显示和绘制。
 说明：在时长下方显示 `x kill(s)`。MinecraftUtils 使用普通死亡规则独立识别本人作为击杀者的事件，免费版与专业版均可计数，不要求 AutoL 开启，也不受其 Detect Kills、Detect Speak 或死亡类别过滤设置限制。使用与 AutoL 共用的 `assets/KILL_PATTERNS.txt`，识别名称时清理 IRC 昵称后缀；同一事件短时间重复输出不会重复计数。AutoL 的关键词检测与玩家击杀缓存不再额外增加会话击杀数。若旧配置曾被自动关闭 Show Kills，需要手动重新开启该显示项。
- Show Win Streak（显示连胜数）
 类型：布尔；默认：false；仅在 Minecraft 模式显示和绘制。
 说明：在统计行的击杀数之后显示 `x streak`。每次检测到胜利加 1，检测到失败归零，复用 MinecraftUtils 的对局结果检测与去重冷却，不要求 AutoL 开启。
- Show Wins（显示胜利数）
 类型：布尔；默认：true；仅在 Minecraft 模式显示和绘制。
 说明：在时长下方显示 `x win(s)`，与其他统计同时开启时同一行以空格分隔。复用 MinecraftUtils 的对局结果检测，Notify Game Results 设为 Off 仍可计数，无需启用 AutoL。
- Show Losses（显示失败数）
 类型：布尔；默认：false；仅在 Minecraft 模式显示和绘制。
 说明：在统计行末尾显示 `x loss(es)`。复用 MinecraftUtils 的失败结果检测，Notify Game Results 设为 Off 仍可计数，无需启用 AutoL。
- Statistics Per Player（按玩家分别统计战绩）
 类型：布尔；默认：true；仅在 Minecraft 模式显示。
 说明：开启后读取当前用户名对应的缓存击杀、连胜、胜利和失败；关闭后显示所有玩家及匿名事件的共享统计，连胜按共享对局结果序列计算。无法识别用户名时不因身份缺失清零。
- Playtime Per Player（按玩家分别累计游玩时长）
 类型：布尔；默认：false；仅在 Minecraft 模式显示。
 说明：关闭时显示本次客户端运行中所有 Minecraft 实例的共享进服时长；开启时显示当前玩家名对应的累计进服时长。两种时长都在断线后暂停，不包含开机时间。
- X Rate（横坐标比例）
 类型：数值；默认：0.1f
 说明：用于控制界面元素在屏幕中的相对位置。默认值 0.1f 一般是作者调过的稳定布局；建议每次只改一个轴，避免元素跑出可视区域。
- Y Rate（纵坐标比例）
 类型：数值；默认：0.2f
 说明：用于控制界面元素在屏幕中的相对位置。默认值 0.2f 一般是作者调过的稳定布局；建议每次只改一个轴，避免元素跑出可视区域。
- Scale（整体缩放）
 类型：数值；默认：1.0f
 说明：统一缩放 SessionHUD 的背景、头像和文字；该尺寸不再跟随 ClickGUI Global Scale，建议按 HUD 实际遮挡情况小步调整。
- Text Opacity (0~1)（文字不透明度）
 类型：数值；默认：1.0f
 说明：统一控制经典与 Rise 样式中文字的不透明度，范围为 0 到 1。
- Hide When Menu On（菜单打开时不显示）
 类型：布尔；默认：false
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Give Way to Mouse（给鼠标让道）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Avatar Scale（头像缩放）
 类型：数值；默认：1.0f
 说明：这是数值型配置。默认值 1.0f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Avatar Circle（圆形头像）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Avatar Opacity (0~1)（头像不透明度 (0~1)）
 类型：数值；默认：1.0f
 说明：用于控制透明度。默认值 1.0f 兼顾可见性和遮挡；如果你觉得挡视线可小幅下调，若看不清可小幅上调。
- Width（宽度）
 类型：数值；默认：300
 说明：这是数值型配置。默认值 300 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Background（背景）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Background Opacity (0~1)（背景不透明度 (0~1)）
 类型：数值；默认：0.5f
 说明：用于控制透明度。默认值 0.5f 兼顾可见性和遮挡；如果你觉得挡视线可小幅下调，若看不清可小幅上调。
- Background Round Corners（背景圆角）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Background Roundness（背景圆滑程度）
 类型：数值；默认：0.6f
 说明：用于细调显示样式和间距。默认值 0.6f 通常是平衡视觉效果与紧凑度的设置，建议小步调整并实时观察。
- Background Shadow（背景阴影）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Background Shadow Thickness（背景阴影厚度）
 类型：数值；默认：60.0f
 说明：用于细调显示样式和间距。默认值 60.0f 通常是平衡视觉效果与紧凑度的设置，建议小步调整并实时观察。
- Background Shadow Opacity (0~1)（背景阴影不透明度 (0~1)）
 类型：数值；默认：0.6f
 说明：用于控制透明度。默认值 0.6f 兼顾可见性和遮挡；如果你觉得挡视线可小幅下调，若看不清可小幅上调。
- Background Color（背景颜色）
 类型：枚举；默认："Flow"
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
 可选：Transparent（透明）；Flow（流动）；其余颜色见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Background Shadow Color（背景阴影颜色）
 类型：枚举；默认："Black"
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
 可选：Transparent（透明）；Flow（流动）；其余颜色见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Text Font Size（文本字号）
 类型：数值；默认：30
 说明：用于控制文本可读性。默认字号 30 适合多数分辨率；高分屏可适当加大，低分辨率建议减少以免拥挤。
- Text Color（文本颜色）
 类型：枚举；默认："White"
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
 可选：Flow（流动）；其余颜色见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Time Info（时间信息）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
## 历史更新
- 19. 修复了 SessionHUD 在 HudEditor 启用时仍能为鼠标让位的问题。
- 1. 添加模块：Session HUD，显示当前 Windows 用户信息，模仿挂端设计。还会有当前的游玩时间，实际是开机时间。

## 备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

## 相关命令
无

## 相关模块
- [Arraylist (模块列表)](./Arraylist.md)
- [Ambience (环境气氛)](./Ambience.md)
- [AutoDanmaku (自动弹幕)](./AutoDanmaku.md)
- [AutoTitle (自动标题)](./AutoTitle.md)
- [AutoTotem (自动图腾)](./AutoTotem.md)
- [AudioVisualizer (音频可视化)](./AudioVisualizer.md)
- [LyricsPhysics (物理歌词)](./LyricsPhysics.md)
- [BetterLyrics (更好的歌词)](./BetterLyrics.md)

## 相关资料
无

## 全屏窗口隐藏

- `Hide In Fullscreen Window`（全屏窗口时隐藏）：布尔，默认 `true`。
- 开启后，前台窗口为无边框全屏或独占全屏时自动隐藏显示；退出全屏或切换到普通窗口后恢复。普通带标题栏的最大化窗口不会触发，支持多显示器。
- 此选项只隐藏画面，不关闭模块或停止后台功能；HUD Editor 开启时保留显示，便于编辑布局。
