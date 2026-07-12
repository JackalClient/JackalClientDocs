# Mute
静音
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
Mute（静音）用于暂无描述。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Hide HUD When Menu On、Volume Mode、System Volume HUD。

## 配置项
- Keybind（未收录）
 类型：按键/复合；默认：{VK_LCONTROL, VK_LSHIFT, 'M'}}}
 说明：用于设置快捷键触发。建议避免与系统或常用软件冲突，优先使用组合键提高可控性。
- Hide HUD When Menu On（打开菜单时隐藏HUD）
 类型：布尔；默认：false
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Volume Mode（音量模式）
 类型：枚举；默认："System"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 System ，确认稳定后再逐项切换比较效果。
 可选：System（系统）；Process（进程）
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
- Notify Type（通知类型）
 类型：枚举；默认："Off"
 说明：用于选择结果反馈方式。默认值 Off 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：Off（关闭）；Console Output（控制台输出）；Notify（通知）
- Wheel System Volume Adjust（系统音量滚轮调节）
 类型：枚举；默认："Mouse On Taskbar"
 说明：这是选项型配置。默认值 Mouse On Taskbar 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Off（关闭）；LAlt（未收录）；RAlt（未收录）；Mouse On Taskbar（鼠标在任务栏上）
- Wheel Process Volume Adjust（进程音量滚轮调节）
 类型：枚举；默认："Mouse On Caption"
 说明：用于指定模块实际作用对象。建议先对单个目标测试通过，再扩大到多目标，降低误操作风险。
 可选：Off（关闭）；LAlt（未收录）；RAlt（未收录）；Mouse On Caption（鼠标在标题栏上）
- Process Volume Smart ID Infer（进程音量智能ID推断）
 类型：布尔；默认：true
 说明：用于指定模块实际作用对象。建议先对单个目标测试通过，再扩大到多目标，降低误操作风险。
- Wheel Detect Only If Cursor Visible（仅在光标可见时检测滚轮）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Wheel Volume Step（音量滚轮差值）
 类型：数值；默认：5U
 说明：这是数值型配置。默认值 5U 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Step (%%)（差值 (%%)）
 类型：数值；默认：5U
 说明：这是数值型配置。默认值 5U 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Temp HUD Duration (ms)（临时HUD持续时间(毫秒)）
 类型：数值；默认：3000L
 说明：用于控制检测/刷新/动画节奏。默认值 3000L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Temp HUD Animation Duration (ms)（临时显示的淡入淡出动画时长（毫秒）。）
 类型：数值；默认：300L
 说明：用于控制检测/刷新/动画节奏。默认值 300L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Limit System Volume（限制系统音量）
 类型：布尔；默认：false
 说明：这是开关型配置。默认值 false 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- System Volume Min（系统音量最小值）
 类型：数值；默认：1
 说明：这是数值型配置。默认值 1 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- System Volume Max（系统音量最大值）
 类型：数值；默认：50
 说明：这是数值型配置。默认值 50 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
## 历史更新
无（HISTORY 中暂无明确记录）

## 备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

## 相关命令
无

## 相关模块
- [Active (活动)](./Active.md)
- [AutoSpeak (自动讲述)](./AutoSpeak.md)
- [AntiMicrophone (反麦克风)](./AntiMicrophone.md)
- [Console (控制台)](./Console.md)
- [Shell (命令行)](./Shell.md)
- [QuickCommand (快速命令)](./QuickCommand.md)
- [ForceTopmost (强制置顶)](./ForceTopmost.md)
- [MemeTrigger (梗触发)](./MemeTrigger.md)

## 相关资料
视频介绍：[更加便利的 Windows 音量调节【ft.Jackal】](https://www.bilibili.com/video/BV1PFJH6HEWJ)