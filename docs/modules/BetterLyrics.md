# BetterLyrics
更好的歌词
分类：Render
描述：识别歌词并以更好的方式显示。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否，这里面的驱动的含义不是 `Windows 驱动`
- 联网需求：获取第三方歌词以及翻译需要
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
BetterLyrics（更好的歌词）用于识别歌词并以更好的方式显示。


## Driver (PRO) 与 Island 显示
Driver (PRO) 模式会按当前歌曲 ID 与歌曲标题维护独立歌词时间轴；当切歌、Hook 曲目变化或当前歌曲没有可用歌词时，会清空旧时间轴和 Island/Karaoke 运行态，避免上一首歌的歌词继续按时间轴重播。
从 OCR、Hook Render 或 SMTC 切换到 Driver (PRO) 时，会主动刷新当前歌曲信息；如果暂时没有歌曲 ID，会后台解析当前歌名并在解析完成后继续拉取歌词。
当 Island/Karaoke 使用 Manual 或 Driver+ 译文来源时，BetterLyrics 会后台预取缺失译文；网络异常时会自动限制并发和重试频率，避免反复请求翻译接口。
Display Mode 选择 Mixed 且 Island 模块开启时，BetterLyrics 会同时维护灵动岛的正常歌词显示；Mixed 的标题、弹幕、通知、Fancy 等原有混合输出保持不变。

## 配置项
- Async（异步）
 类型：布尔；默认：true
 说明：用于控制是否异步处理。默认值 true 通常能减少主线程卡顿；若你遇到并发相关问题，可回退到更保守设置测试。

- Basic Mode（基本模式）
 类型：枚举；默认："Hook Render"
 说明：基本模式，决定歌词获取方式。
 可选：Driver (PRO) （驱动（专业版））；Hook Render（挂钩渲染）；SMTC；OCR

- Unload DLL When Quit（退出时自动卸载DLL）
 类型：布尔；默认：false
 说明：`Hook Render 挂钩渲染` 模式下，是否在客户端退出时自动卸载 DLL。
- Line Index（行号）
 类型：数值；默认：0
 说明：OCR 模式识别的结果，歌词取哪一行。0 表示第一行。
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
 说明：切歌时的通知。
 可选：Off（关闭）；Actionbar（行为栏）；Notify（通知）；Chatter（弹幕）；Title（标题）；WinToast（系统通知）
- Music Player Preset（音乐播放器预设）
 类型：枚举；默认："Netease Music"
 说明：`OCR 模式`的播放器预设。
 可选：Netease Music（网易云音乐）；Kugou Music（酷狗音乐）；QQ Music（QQ音乐）；Custom（自定义）
- Kugou Use Taskbar Lyrics（酷狗使用任务栏歌词）
 类型：布尔；默认：true
 说明：`OCR 模式` 如果选择酷狗音乐，是否是任务栏歌词。
- Window Title（窗口标题）
 类型：文本；默认："桌面歌词"
 说明：桌面歌词窗口标题。
- Window Class Name（窗口类名）
 类型：文本；默认："DesktopLyrics"
 说明：桌面歌词窗口类名。
- Lyrics Auto Correct（歌词自动纠正）
 类型：布尔；默认：true
 说明：`OCR 模式` 下是否自动利用第三方歌词校正识别的歌词。不是很好用。
- Lyrics Fetch Attempt Cooldown (s)（歌词抓取尝试冷却 (秒)）
 类型：数值；默认：10
 说明：给 `Lyrics Auto Correct（歌词自动纠正）` 用的。
- Lyrics Correction Min Similarity (0~1)（歌词纠正最小相似度 (0~1)）
 类型：数值；默认：0.8f
 说明：给 `Lyrics Auto Correct（歌词自动纠正）` 用的。
- X Offset（横坐标偏移）
 类型：数值；默认：0
 说明：`OCR 模式` 下开始识别的区域距离左上角的横坐标起始点。
- Y Offset（纵坐标偏移）
 类型：数值；默认：70
 说明：`OCR 模式` 下开始识别的区域距离左上角的纵坐标起始点。70 是因为跳过网易云音乐的第一排按钮。如果异常，请改为 0
- Display Mode（展示模式）
 类型：枚举；默认："Fancy"
 说明：歌词获取后，客户端的展示模式。
 可选：Title（标题）；Chatter（弹幕）；Notify（通知）；Actionbar（行为栏）；WinToast（系统通知）；Fancy（优美）；Speak（讲述）；Mixed（混合）；MessageBox（消息框）；Island（岛）；Bar Graph（柱状图）
- Chatter Color（弹幕颜色）
 类型：枚举；默认："Rainbow"
 说明：选择弹幕时，弹幕颜色。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Chatter Type（弹幕类型）
 类型：枚举；默认："Top"
 说明：选择弹幕时，弹幕的类型。
 可选：Scroll（滚动）；Top（顶端）；Bottom（底部）；Reverse（颠倒）；Horizontal（横向）；Vertical（纵向）；Random（随机）
- Actionbar Color（行为栏颜色）
 类型：枚举；默认："Colorful"
 说明：选择行为栏的时候，行为栏文本的颜色。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Language（语言）
 类型：枚举；默认："Infer From Music Name"
 说明：`OCR 模式` 下的语言选择。
 可选：AI Decide（人工智能决定）；Infer From Music Name（从歌名推断）；chi_sim（未收录）；eng（未收录）；jpn（未收录）；osd（未收录）；Custom（自定义）
- Language Candidates (Sep With Semicolon)（语言候选（用分号分隔））
 类型：文本；默认："chi_sim;jpn;eng"
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Custom Language（自定义语言）
 类型：文本；默认："chi_sim"
 说明：语言选择自定义时，采用的语言。chi_sim 表示简体中文。前提是你需要有相应的 Tesseract OCR 模型文件。
- Capture Cooldown (ms)（捕获冷却（毫秒））
 类型：数值；默认：700
 说明：`OCR 模式` 下的截图冷却，单位毫秒。
- Capture Mode（捕获模式）
 类型：枚举；默认：PrintWindow
 说明：`OCR 模式` 下的截图方式。`PrintWindow` 表示获取窗口图片，即使窗口有一部分离开屏幕也可以获取完整图像，建议使用。`BitBlt` 是全屏截图并截取，如果窗口离开屏幕就会出问题。
- Translation（翻译）
 类型：枚举；默认："Off"
 说明：开启后会自动翻译歌词。
 可选：Off（关闭）；Chinese（中文）；English（英语）；Japanese（日语）
- Translation Cache Entry Limit（翻译缓存条目上限）
 类型：数值；默认：500L
 说明：控制 BetterLyrics 歌词翻译持久缓存的最大条目数。译文会保存到 output/Cache/lyricsTranslation.txt，重启后可复用；设为 0 时不会读取或写入缓存文件。切换 Translation 目标语言时，会自动清空内存和文件中的旧译文缓存。
- Off（关闭）
 类型：文本；默认："Chinese", "English", "Japanese"
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- MessageBox Mode（对话框模式）
 类型：枚举；默认："Background"
 说明：对话框模式下，对话框的风格。`Foreground` 会抢占焦点，不建议在使用计算机的时候使用。`Background` 则不会，但是可能会被当前窗口遮挡。
 可选：Background（背景）；Foreground（前端）
- MessageBox Duration Coefficient（对话框时长系数）
 类型：数值；默认：1.0f
 说明：这个系数值越大，对话框显示的时间越长。每个对话框显示的基准值和歌词长度有关。如果是驱动模式，则是这一句歌词的实际时长。
- MessageBox Set As Tool Window（将对话框设为工具窗口）
 类型：布尔；默认：false
 说明：对话框是否设为工具窗口。工具窗口不具有任务栏图标，你无法通过任务栏关闭。好处是不占任务栏位置。
- Bar Graph Lyrics Color（柱状图歌词颜色）
 类型：枚举；默认："Blue"
 说明：柱状图模式下歌词的颜色。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Bar Graph Lyrics Color Jitter（柱形图歌词颜色抖动）
 类型：数值；默认：0.05f
 说明：柱状图模式下歌词颜色的抖动值，值越大颜色差异越大。
- Bar Graph Lyrics Font Size（柱状图歌词字号）
 类型：数值；默认：80
 说明：柱状图模式下歌词的字号。
- Bar Graph Lyrics Char Extra Gap（柱状图歌词字符额外间距）
 类型：数值；默认：5
 说明：柱状图模式下歌词字距额外值。
- Bar Graph Lyrics Opacity (0~1)（柱状图歌词不透明度 (0~1)）
 类型：数值；默认：0.9f
 说明：柱状图模式下歌词的不透明度。越小越透明。

## 历史更新
- 36. 为 BetterLyrics 的 Display Mode 显示模式添加一个 Island 灵动岛上显示。带动画。没有歌词时会采用歌名。
- 37. 为 BetterLyrics 的 Exclude Non-lyrics Content 排除非歌词内容添加对特定前缀的检查（例如“作曲：”）
- 38. 修复 Mixed 显示模式下灵动岛歌词可能短暂消失并回到 Idle 信息的问题。
- 29. 添加模块： BetterLyrics，更好的桌面歌词。目前只支持网易云音乐。

## 备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

## 相关命令

`/betterlyrics status/stat/st`
输出更好的歌词的状态。下面是一个输出示例：

```bash
 BetterLyrics Status
==============================================================================
  Enabled: On
  Mode: Hook Render
  Display: Island
  Translation: Chinese
  Pause On Menu: No
  Current Lyric: 我不想欠别人人情
  Island Main: 我不想欠别人人情
  Island Trans: -
  Island Status: 3 / pending 2
------------------------------------------------------------------------------
  Hook PID: 78728
  Hook Ready: Ready
  DLL Present: Yes
  Injectee PID: 78728
  Shared Lyric: 我不想欠别人人情
==============================================================================
```

## 相关模块
- [MusicOverlay (音乐信息)](./MusicOverlay.md)
- [Island (灵动岛)](./Island.md)
- [LyricsPhysics (物理歌词)](./LyricsPhysics.md)
- [AudioVisualizer (音频可视化)](./AudioVisualizer.md)

## 相关资料
这里面有教程：[BetterLyrics 更好的歌词专题](/betterlyrics)

视频：[实时显示B站视频歌词的 Windows 灵动岛？ Jackal v1.1迎来神秘更新！](https://www.bilibili.com/video/BV1pmLk6NEJK/)
历史视频：[能显示歌词的 Windows 灵动岛？ Jackal 0.7a 更新](https://www.bilibili.com/video/BV1Xxx9zsEC4)
