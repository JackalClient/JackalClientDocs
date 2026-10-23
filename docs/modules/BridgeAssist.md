# BridgeAssist

搭路辅助，用于按节奏切换潜行与放置操作。Free/Pro 均可使用，Standard HUD 仅限专业版。

## 触发与停止

- Trigger Condition 是开始条件，多选 Backward / Left / Right / Sneak / Place；默认 Backward、Right、Sneak、Place，必须全部按住才开始。
- Keep Condition 是保持条件，候选项相同，默认 Backward、Right；运行时全部满足才继续。未勾选的潜行键、放置键在开始后可松开，空选保持条件时持续运行直到中断。
- 条件来自真实键鼠输入，不会把模块自己的模拟按下或松开误判为用户操作。
- Interrupt Key 1/2/3/4 默认 E、Esc、T、/。操作期间按任意一个立即中断；打开客户端 ClickGUI、切换窗口或关闭模块也会停止。
- 中断后需要先松开开始组合，再重新按下，避免中断键松开后立即重启。
- Check Window 默认开启，复用 Minecraft 严格识别，检查游戏进程、窗口标题和 Java 启动参数，不再只检查 javaw.exe。关闭仅取消游戏识别，不取消菜单中断及运行期间的目标窗口保护。

## 速度与输入

- Speed Preset 始终置顶：Speed / Regular / Slow / Sneak，默认 Regular。仅在选择时从云控数据套用一次 BPS；之后可以手动修改 BPS，加载 Profile 不会覆盖保存的自定义数值。
- 初始参考值：Speed 3.0、Regular 2.29、Slow 1.65、Sneak 1.3 BPS；这些值可由 Ricochesta `data/BridgeAssistSpeedList.json` 调整，并非适用于所有服务器的保证值。
- BPS 默认 2.29。输入间隔、渲染帧率或服务器延迟可能使实际放置速率低于目标。
- Input Method：SendInput / WMessage / Simulation，默认 SendInput，与 Minecraft Utils 使用同一输入接口。
- Backward Key / Left Key / Right Key 默认 S / A / D，Sneak Key 默认左 Shift，Place Key 默认鼠标右键；支持自定义组合键。Minecraft Utils 自动读取游戏键位时同步以上方向键、潜行键及放置键。
- Mode：Simple / Sneak，默认 Sneak。Sneak 模式在放置后重新进入潜行；Simple 模式按节奏点击潜行及放置。
- Sneak Internal Gap 默认 100 ms，Place Internal Gap 默认 10 ms，Sneak Reshift Gap 默认 50 ms（仅 Sneak 模式）。旧 Shift Internal Gap / Right Internal Gap 配置会保留数值迁移到对应新名称。
- Place Sound 默认开启。旧 S / S & A / S & D 触发条件转换为对应方向的多选条件。

## HUD

HUD 默认开启，仅在触发运行时显示，显示和隐藏均有 200 ms 淡入淡出；停止后保留本次计数完成淡出，下一次开始归零。

- HUD Style：Text 显示模块文本；Count 显示本次放置次数；Standard (PRO) 显示方块贴图及右侧次数，图文共用圆角矩形背景和阴影。Free 默认 Text，Pro 默认 Standard (PRO)。
- 计数表示模块已发出的放置操作次数，不能验证服务器是否成功放下方块。
- HUD Text Color 默认 White；HUD Scale 默认 1.0；HUD X Rate / HUD Y Rate 默认 0.5 / 0.65，定位 HUD 中心。
- HUD Opacity (0~1) 默认 0.6，控制文字、贴图、背景和阴影整体透明度。
- HUD Background 默认关闭；选择 Standard 时自动开启一次，之后手动关闭不会被每帧强制恢复。
- HUD Background Opacity (0~1) 默认 0.5。
- HUD Background Shadow 默认开启；HUD Background Shadow Opacity (0~1) 默认 0.5，Thickness 默认 10.0，Color 默认 Black。背景关闭时不绘制阴影。
- 背景、阴影等附属选项随对应开关隐藏，配置按功能分组。

## 在线资源与缓存

速度预设启动时读取 `output/Cache/ModuleMetadata/BridgeAssistSpeedList.json`，应用代理后刷新；缓存使用 deflate256 japanese 编码。云控下载失败保留旧数据，完全不可用时仍能手动设置 BPS，不阻断客户端启动。

Standard 方块贴图来自 Ricochesta `img/runtime/cube.png`，缺失时后台自动下载到 `output/Cache/BridgeAssist/cube.png`，不阻塞渲染。失败时仍显示计数，间隔 60 秒重试。下载启用 TLS 校验和超时。

本地云控修改需发布到 Gitee main 后才会被客户端下载；客户端仓库不维护云控 JSON 副本。

## 相关模块

Minecraft Utils（输入方式及自动读取游戏键位）。本模块没有新增 shell 命令。
