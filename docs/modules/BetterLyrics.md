# BetterLyrics
更好的歌词
分类：Render
描述：识别歌词并以更好的方式显示。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
BetterLyrics（更好的歌词）用于识别歌词并以更好的方式显示。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Basic Mode、Notify Music Change、Lyrics Fetch Attempt Cooldown (s)。

## 配置项
- Async（异步）
 类型：布尔；默认：true
 说明：用于控制是否异步处理。默认值 true 通常能减少主线程卡顿；若你遇到并发相关问题，可回退到更保守设置测试。
- Basic Mode（基本模式）
 类型：枚举；默认："Hook Render"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 Hook Render ，确认稳定后再逐项切换比较效果。
 可选：Hook Render（挂钩渲染）；OCR（未收录）
- Unload DLL When Quit（退出时自动卸载DLL）
 类型：布尔；默认：false
 说明：这是开关型配置。默认值 false 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Line Index（行号）
 类型：数值；默认：0
 说明：这是数值型配置。默认值 0 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Exclude Non-lyrics Content（排除非歌词内容）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Skip If Includes Enabled（是否启用如果包含则跳过）
 类型：布尔；默认：true
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Skip If Includes（如果包含则跳过）
 类型：文本；默认："<>[]{}%@#\\`"
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Skip If Similarity Greater Than（相似度大于多少则跳过）
 类型：数值；默认：0.7f
 说明：这是数值型配置。默认值 0.7f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Remove Letters（移除字母）
 类型：布尔；默认：false
 说明：这是开关型配置。默认值 false 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Remove Extra Characters（移除的额外字符）
 类型：文本；默认："=."
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Pause When Menu On（打开菜单时暂停）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Notify Music Change（通知音乐变化）
 类型：枚举；默认："Actionbar"
 说明：用于选择结果反馈方式。默认值 Actionbar 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：Off（关闭）；Actionbar（行为栏）；Notify（通知）；Chatter（弹幕）；Title（标题）；WinToast（系统通知）
- Music Player Preset（音乐播放器预设）
 类型：枚举；默认："Netease Music"
 说明：这是选项型配置。默认值 Netease Music 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Netease Music（网易云音乐）；Kugou Music（酷狗音乐）；QQ Music（QQ音乐）；Custom（自定义）
- Kugou Use Taskbar Lyrics（酷狗使用任务栏歌词）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Window Title（窗口标题）
 类型：文本；默认："桌面歌词"
 说明：用于指定模块实际作用对象。建议先对单个目标测试通过，再扩大到多目标，降低误操作风险。
- Window Class Name（窗口类名）
 类型：文本；默认："DesktopLyrics"
 说明：用于指定模块实际作用对象。建议先对单个目标测试通过，再扩大到多目标，降低误操作风险。
- Lyrics Auto Correct（歌词自动纠正）
 类型：布尔；默认：true
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Lyrics Fetch Attempt Cooldown (s)（歌词抓取尝试冷却 (秒)）
 类型：数值；默认：10
 说明：用于控制检测/刷新/动画节奏。默认值 10 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Lyrics Correction Min Similarity (0~1)（歌词纠正最小相似度 (0~1)）
 类型：数值；默认：0.8f
 说明：这是数值型配置。默认值 0.8f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- X Offset（横坐标偏移）
 类型：数值；默认：0
 说明：这是数值型配置。默认值 0 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Y Offset（纵坐标偏移）
 类型：数值；默认：70
 说明：这是数值型配置。默认值 70 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Display Mode（展示模式）
 类型：枚举；默认："Fancy"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 Fancy ，确认稳定后再逐项切换比较效果。
 可选：Title（标题）；Chatter（弹幕）；Notify（通知）；Actionbar（行为栏）；WinToast（系统通知）；Fancy（优美）；Speak（讲述）；Mixed（混合）；MessageBox（消息框）；Island（岛）；Bar Graph（柱状图）
- Chatter Color（弹幕颜色）
 类型：枚举；默认："Rainbow"
 说明：用于选择结果反馈方式。默认值 Rainbow 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Chatter Type（弹幕类型）
 类型：枚举；默认："Top"
 说明：用于选择结果反馈方式。默认值 Top 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：Scroll（滚动）；Top（顶端）；Bottom（底部）；Reverse（颠倒）；Horizontal（横向）；Vertical（纵向）；Random（随机）
- Actionbar Color（行为栏颜色）
 类型：枚举；默认："Colorful"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 Colorful ，确认稳定后再逐项切换比较效果。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Language（语言）
 类型：枚举；默认："Infer From Music Name"
 说明：这是选项型配置。默认值 Infer From Music Name 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：AI Decide（人工智能决定）；Infer From Music Name（从歌名推断）；chi_sim（未收录）；eng（未收录）；jpn（未收录）；osd（未收录）；Custom（自定义）
- Language Candidates (Sep With Semicolon)（语言候选（用分号分隔））
 类型：文本；默认："chi_sim;jpn;eng"
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Custom Language（自定义语言）
 类型：文本；默认："chi_sim"
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Capture Cooldown (ms)（捕获冷却（毫秒））
 类型：数值；默认：700L
 说明：用于控制检测/刷新/动画节奏。默认值 700L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Capture Mode（捕获模式）
 类型：枚举；默认："PrintWindow"
 说明：这是该模块的核心行为开关。默认值 PrintWindow 通常更稳，建议先验证默认策略再尝试其他模式。
- Translation（翻译）
 类型：枚举；默认："Off"
 说明：这是选项型配置。默认值 Off 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Off（关闭）；Chinese（中文）；English（英语）；Japanese（日语）
- Off（关闭）
 类型：文本；默认："Chinese", "English", "Japanese"
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- MessageBox Mode（对话框模式）
 类型：枚举；默认："Background"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 Background ，确认稳定后再逐项切换比较效果。
 可选：Background（背景）；Foreground（前端）
- MessageBox Duration Coefficient（对话框时长系数）
 类型：数值；默认：1.0f
 说明：用于控制检测/刷新/动画节奏。默认值 1.0f 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- MessageBox Set As Tool Window（将对话框设为工具窗口）
 类型：布尔；默认：false
 说明：用于指定模块实际作用对象。建议先对单个目标测试通过，再扩大到多目标，降低误操作风险。
- Bar Graph Lyrics Color（柱状图歌词颜色）
 类型：枚举；默认："Blue"
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Bar Graph Lyrics Color Jitter（柱形图歌词颜色抖动）
 类型：数值；默认：0.05f
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
- Bar Graph Lyrics Font Size（柱状图歌词字号）
 类型：数值；默认：80
 说明：用于控制文本可读性。默认字号 80 适合多数分辨率；高分屏可适当加大，低分辨率建议减少以免拥挤。
- Bar Graph Lyrics Char Extra Gap（柱状图歌词字符额外间距）
 类型：数值；默认：5
 说明：这是数值型配置。默认值 5 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Bar Graph Lyrics Opacity (0~1)（柱状图歌词不透明度 (0~1)）
 类型：数值；默认：0.9f
 说明：用于控制透明度。默认值 0.9f 兼顾可见性和遮挡；如果你觉得挡视线可小幅下调，若看不清可小幅上调。
## 历史更新
- 36. 为 BetterLyrics 的 Display Mode 显示模式添加一个 Island 灵动岛上显示。带动画。没有歌词时会采用歌名。
- 37. 为 BetterLyrics 的 Exclude Non-lyrics Content 排除非歌词内容添加对特定前缀的检查（例如“作曲：”）
- 29. 添加模块： BetterLyrics，更好的桌面歌词。目前只支持网易云音乐。

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
- [MusicOverlay (音乐信息)](./MusicOverlay.md)

## 相关资料
无
