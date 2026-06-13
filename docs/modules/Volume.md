# Volume
音量
分类：Misc
描述：暂无描述

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
Volume（音量）用于控制系统和进程的音量。

## 配置项
- Auto Mute（自动静音）
 类型：枚举；默认："Off"
 说明：在特定场景自动打开静音模块。
 可选：Off（关闭）；Once On Launch（Once 开启 Launch）；Output Device Changed（未收录）；Output Device Name Keyword When Changed（Output Device 名称 Keyword 何时 Changed）
- Off（关闭）
 类型：文本；默认："Once On Launch", "Output Device Changed", "Output Device Name Keyword When Changed"
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Auto Mute Output Device Name Keyword (Include)（自动静音、输出设备名称关键词（包含））
 类型：文本；默认：""
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Auto Mute Output Device Name Keyword (Exclude)（自动静音、输出设备名称关键词（排除））
 类型：文本；默认："耳机"
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Auto Mute Notify（自动静音通知）
 类型：枚举；默认："Title"
 说明：用于选择结果反馈方式。默认值 Title 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：Off（关闭）；Title（标题）；Notify（通知）；Chatter（弹幕）；Actionbar（行为栏）；WinToast（系统通知）
- Vol+ (System)（音量+（系统））
 类型：按键/复合；默认：`{ { "Keybind", {VK_LCONTROL, VK_LSHIFT, VK_UP } }`}
 说明：触发后调高系统音量。
- Vol- (System)（音量-（系统））
 类型：按键/复合；默认：`{ { "Keybind", {VK_LCONTROL, VK_LSHIFT, VK_DOWN } }`}
 说明：触发后调低系统音量。
- Mute (System)（静音（系统））
 类型：按键/复合；默认：`{ { "Keybind", {VK_LCONTROL, VK_LSHIFT, 'M' } }`}
 说明：触发后切换系统静音状态，不会把系统音量数值改成 0。
- Vol+ (Process)（音量+（进程））
 类型：按键/复合；默认：未绑定
 说明：触发后调高当前前台窗口对应进程的音量。
- Vol- (Process)（音量-（进程））
 类型：按键/复合；默认：未绑定
 说明：触发后调低当前前台窗口对应进程的音量。
- Mute (Process)（静音（进程））
 类型：按键/复合；默认：未绑定
 说明：触发后优先切换当前前台窗口对应进程的静音状态；若系统未提供进程静音状态，则临时记录该进程音量并设为 0，再次触发时恢复记录的音量。
- Hide HUD When Menu On（打开菜单时隐藏HUD）
 类型：布尔；默认：false
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- System Volume HUD（系统音量HUD）
 类型：枚举；默认："Temp"
 说明：这是选项型配置。默认值 Temp 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Off（关闭）；Temp（临时）；Always（总是）
- System Volume HUD Style（系统音量HUD风格）
 类型：枚举；默认："Bottom"
 说明：这是选项型配置。默认值 Bottom 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Bottom（底部）；Bottom Big（底部，大号）；Giant（巨型）；Rainbow Giant（彩虹巨型）
- Process Volume HUD（进程音量HUD）
 类型：枚举；默认："Temp"
 说明：用于指定模块实际作用对象。建议先对单个目标测试通过，再扩大到多目标，降低误操作风险。
 可选：Off（关闭）；Temp（临时）；Always（总是）
- Process Volume HUD Style（进程音量HUD风格）
 类型：枚举；默认："Bottom"
 说明：用于指定模块实际作用对象。建议先对单个目标测试通过，再扩大到多目标，降低误操作风险。
 可选：Bottom（底部）；Giant（巨型）；Rainbow Giant（彩虹巨型）
- iOS System Volume X Rate（iOS 系统音量横坐标比例）
 类型：数值；默认：0.9f
 说明：控制 iOS 样式系统音量 HUD 的屏幕横坐标比例，锚点为 HUD 中心。
- iOS Process Volume X Rate（iOS 进程音量横坐标比例）
 类型：数值；默认：0.1f
 说明：控制 iOS 样式进程音量 HUD 的目标窗口横坐标比例，锚点为 HUD 中心。
- iOS HUD Scale（iOS HUD 缩放）
 类型：数值；默认：1.0f
 说明：控制 iOS 样式音量 HUD 的整体缩放。
- Notify Type（通知类型）
 类型：枚举；默认："Off"
 说明：用于选择结果反馈方式。默认值 Off 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：Off（关闭）；Console Output（控制台输出）；Notify（通知）
- Wheel System Volume Adjust（系统音量滚轮调节）
 类型：枚举；默认："Mouse On Taskbar"
 说明：选择 Mouse On Taskbar 后，在任务栏上滚轮就能调节系统音量。
 可选：Off（关闭）；LAlt（未收录）；RAlt（未收录）；Mouse On Taskbar（鼠标在任务栏上）
- Wheel Process Volume Adjust（进程音量滚轮调节）
 类型：枚举；默认："Mouse On Caption"
 说明：
 可选：Off（关闭）；LAlt（未收录）；RAlt（未收录）；Mouse On Caption（鼠标在标题栏上）
- Process Volume Smart ID Infer（进程音量智能ID推断）
 类型：布尔；默认：true
 说明：用于指定模块实际作用对象。建议先对单个目标测试通过，再扩大到多目标，降低误操作风险。
- Wheel Detect Only If Cursor Visible（仅在光标可见时检测滚轮）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Wheel Volume Step (%%)（音量滚轮差值 (%%)）
 类型：数值；默认：5U
 说明：每次滚轮调节系统或进程音量时的百分比步长。
- Hotkey Volume Step (%%)（快捷键音量差值 (%%)）
 类型：数值；默认：5U
 说明：每次按键绑定调节系统或进程音量时的百分比步长。
- Temp HUD Duration (ms)（临时HUD持续时间(毫秒)）
 类型：数值；默认：3000L
 说明：用于控制检测/刷新/动画节奏。默认值 3000L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Temp HUD Animation Duration (ms)（临时显示的淡入淡出动画时长（毫秒）。）
 类型：数值；默认：300L
 说明：用于控制检测/刷新/动画节奏。默认值 300L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Limit System Volume（限制系统音量）
 类型：布尔；默认：false
 说明：打开后，会保证系统音量在 [System Volume Min, System Volume Max] 之间。
- System Volume Min（系统音量最小值）
 类型：数值；默认：1
 说明：
- System Volume Max（系统音量最大值）
 类型：数值；默认：50
 说明：
## 历史更新
- 175. 静音状态下 Volume HUD 显示为 0，带图标样式会使用静音图标；静音时调节音量会先解除静音并提示，不会同时改变音量数值。
- 172. 系统音量与进程音量快捷键分开配置，进程快捷键默认不绑定；移除 Volume Mode，并重命名滚轮与快捷键步长配置。
- 173. 系统静音快捷键改为切换静音状态；进程静音快捷键优先切换进程静音状态，不支持时会记录音量并再次按键恢复。
- 1. 修复 Volume 模块内的按键绑定错误的问题。
- 17. 将 Volume 模块的三个按键改成自定义。
- 10. 添加模块 Volume ，用于辅助调节音量。

## 备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

## 相关命令

/volume get [pid]
如果不指定pid，则获取系统音量。否则获取指定进程音量。

/volume enum/show/display/list
展示系统混音器。包括系统音量和各个进程音量。

/volume set &lt;volume&gt;
设置系统音量 (0~100)

/volume set &lt;pid&gt; &lt;volume&gt;
设置某进程音量 (0~100)

## 相关模块
- [Mute (静音)](./Mute.md)
- [AntiMicrophone (反麦克风)](./AntiMicrophone.md)

## 相关资料
无


HUD 样式补充
- OpacityChanger HUD 新增 Text 与 Modern (PRO) 样式；Text 为免费版默认样式，Modern (PRO) 为专业版默认样式。
- Volume 的 System Volume HUD Style 与 Process Volume HUD Style 新增 Text、Modern (PRO)、iOS 样式；Modern (PRO) 带图标、卡片与数字翻动效果，iOS 使用方形音量面板。

Volume HUD iOS 样式补充
- iOS：新版 iPhone 风格侧边纵向胶囊 HUD；系统音量默认显示在屏幕右侧，进程音量默认显示在目标窗口左侧，可通过 iOS System Volume X Rate、iOS Process Volume X Rate 和 iOS HUD Scale 调整中心锚点横向位置与缩放，带滑入/滑出、宽度收缩、坐标缓动和调节晃动。
- iOS Old：保留旧版居中方形面板样式。
