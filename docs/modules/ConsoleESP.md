# ConsoleESP
控制台透视
分类：Window
描述：监控任意应用程序的控制台内容。

## 需求
- 安全级别：常规模块
- 恶意属性：否
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
ConsoleESP 会周期性扫描 `conhost.exe` 的拥有者进程，并在“创建/退出”事件发生时按你指定的通知渠道输出。
内容监控采用外部监视子进程回传的方式：你需要先选定目标进程，模块才会开始接收该控制台的文本内容。

## 配置项
- Check Cooldown (ms)（检查冷却 (毫秒)）
  类型：数值；默认：500U。控制拥有者扫描频率；越小越实时，但进程枚举频率更高。
- Monitor Console Created（监视 控制台 已新建）
  类型：布尔；默认：true。开启后会在检测到新控制台拥有者时输出“新建”事件。
- Monitor Console Destroyed（监视 控制台 Destroyed）
  类型：布尔；默认：true。开启后会在拥有者退出时输出“销毁”事件。
- Monitor Console Content（监视 控制台 内容）
  类型：布尔；默认：true。当前版本里内容采集主要取决于目标进程选择与监视子进程回传，这个开关更偏兼容保留项。
- Process Blacklist (Sep With Semicolon)（进程 黑名单 (Sep With Semicolon)）
  类型：文本；默认："cmd.exe;git.exe;..."。匹配到黑名单的进程会被过滤，不再输出创建/退出和内容通知。
- Notify Mode (Created/Destroyed)（通知 模式 (已新建/Destroyed)）
  类型：组合框；默认："Console Output"。控制创建/销毁事件输出渠道。
  可选：Off（关闭）；Console Output（控制台输出）；Notify（通知）；Chatter（弹幕）；Actionbar（行为栏）；Title（标题）；Speak（讲述）。
- Notify Mode (Content)（通知 模式 (内容)）
  类型：组合框；默认："Console Output"。控制内容事件输出渠道。
  可选：Off（关闭）；Console Output（控制台输出）；File Output（文件输出）；Notify（通知）；Chatter（弹幕）；Actionbar（行为栏）；Title（标题）；Speak（讲述）。
- Actionbar Color (Created)（行为栏 颜色 (已新建)）
  类型：组合框；默认："Dark Green"。Created 事件在 Actionbar 模式下的颜色。
  可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)。
- Actionbar Color (Destroyed)（行为栏 颜色 (Destroyed)）
  类型：组合框；默认："Red"。Destroyed 事件在 Actionbar 模式下的颜色。
  可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)。
- Actionbar Color (Content)（行为栏 颜色 (内容)）
  类型：组合框；默认："Colorful"。内容事件在 Actionbar 模式下的颜色。
  可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)。
- Chatter Color (Created)（弹幕 颜色 (已新建)）
  类型：组合框；默认："Dark Green"。Created 事件在 Chatter 模式下的颜色。
  可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)。
- Chatter Color (Destroyed)（弹幕 颜色 (Destroyed)）
  类型：组合框；默认："Red"。Destroyed 事件在 Chatter 模式下的颜色。
  可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)。
- Chatter Color (Content)（弹幕 颜色 (内容)）
  类型：组合框；默认："Gray"。内容事件在 Chatter 模式下的颜色。
  可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)。
- Title Color (Created)（标题 颜色 (已新建)）
  类型：组合框；默认："Dark Green"。Created 事件在 Title 模式下的颜色。
  可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)。
- Title Color (Destroyed)（标题 颜色 (Destroyed)）
  类型：组合框；默认："Red"。Destroyed 事件在 Title 模式下的颜色。
  可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)。
- Title Color (Content)（标题 颜色 (内容)）
  类型：组合框；默认："Gray"。内容事件在 Title 模式下的颜色。
  可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)。
- Target Mode (Content)（目标 模式 (内容)）
  类型：组合框；默认："Single"。保留的内容目标模式配置，当前版本主流程仍以 `Target Single Process (Content)` 为实际入口。
  可选：Single（单个）；All（所有）。
- Target Single Process (Content)（目标 单个 进程 (内容)）
  类型：组合框；默认：""。选择要监听内容的控制台拥有者；未选中时不会启动内容监视回传。

## 历史更新
- 5. 添加新模块：ConsoleESP（控制台透视）。
- 20. 现在不允许 Console ESP 监视自己的控制台，防止客户端卡死。

## 备注
建议先把 `Notify Mode (Content)` 设为 `Console Output` 或 `File Output`，稳定后再切到 Notify/Title 等更显眼模式。
如果你看到创建/销毁事件正常、但内容一直为空，先检查是否已正确选择 `Target Single Process (Content)`。

## 相关命令
无

## 相关模块
- [WindowTags (窗口标签)](./WindowTags.md)
- [WindowHighlight (窗口高亮)](./WindowHighlight.md)
- [WindowESP (窗口透视)](./WindowESP.md)

## 相关资料
无