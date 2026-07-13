# AutoClicker
连点器
分类：Control
描述：自动帮助你飞快地点击鼠标。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
AutoClicker（连点器）用于自动帮助你飞快地点击鼠标。
请在合法合规的情况下使用。如使用该模块造成游戏账号封禁，与作者无关。

## 配置项
- CPS Transition Speed（CPS 过渡速度）
 类型：数值；默认：0.2f
 说明：这是数值型配置。默认值 0.2f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- CPS Fast Stop（CPS 快速停止）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Left CPS Min（左键 CPS 最小值）
 类型：数值；默认：7U
 说明：这是数值型配置。默认值 7U 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Left CPS Max（左键 CPS 最大值）
 类型：数值；默认：14U
 说明：这是数值型配置。默认值 14U 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Left Blatant Mode（左键暴力模式）
 类型：布尔；默认：false
 说明：这是该模块的核心行为开关。默认值 false 通常更稳，建议先验证默认策略再尝试其他模式。
- Left Sound（左键音效）
 类型：文本；默认："jclick.wav"
 说明：用于选择结果反馈方式。默认值 jclick.wav 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Right CPS Min（右键 CPS 最小值）
 类型：数值；默认：6U
 说明：这是数值型配置。默认值 6U 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Right CPS Max（右键 CPS 最大值）
 类型：数值；默认：11U
 说明：这是数值型配置。默认值 11U 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Right Blatant Mode（右键暴力模式）
 类型：布尔；默认：false
 说明：这是该模块的核心行为开关。默认值 false 通常更稳，建议先验证默认策略再尝试其他模式。
- Right Sound（右键音效）
 类型：文本；默认："nclick.wav"
 说明：用于选择结果反馈方式。默认值 nclick.wav 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Extra Key CPS Min（额外键 CPS 最小值）
 类型：数值；默认：8U
 说明：这是数值型配置。默认值 8U 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Extra Key CPS Max（额外键 CPS 最大值）
 类型：数值；默认：15U
 说明：这是数值型配置。默认值 15U 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Extra Key Blatant Mode（额外键暴力模式）
 类型：布尔；默认：false
 说明：这是该模块的核心行为开关。默认值 false 通常更稳，建议先验证默认策略再尝试其他模式。
- Extra Key Sound（额外键音效）
 类型：文本；默认："kbhit_2.wav"
 说明：用于选择结果反馈方式。默认值 kbhit_2.wav 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Gap Random Deviation (%%)（间隔随机偏差 (%%)）
 类型：数值；默认：10U
 说明：这是数值型配置。默认值 10U 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Click Internal Gap（点击内部间隔）
 类型：数值；默认：5U
 说明：这是数值型配置。默认值 5U 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Left Mouse Button Enabled（鼠标左键是否启用）
 类型：布尔；默认：true
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Right Mouse Button Enabled（鼠标右键是否启用）
 类型：布尔；默认：true
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Extra Key Enabled（额外键是否启用）
 类型：布尔；默认：false
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Extra Target Key（额外目标键）
 类型：枚举；默认："Custom"
 说明：用于指定模块实际作用对象。建议先对单个目标测试通过，再扩大到多目标，降低误操作风险。
 可选：Left Button（左键）；Right Button（右键）；Middle Button（中键）；Custom（自定义）
- Extra Custom Key Code（额外键自定义键码）
 类型：数值；默认：32
 说明：这是数值型配置。默认值 32 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Keep Target Window Active（保持目标窗口活动）
 类型：布尔；默认：false
 说明：用于指定模块实际作用对象。建议先对单个目标测试通过，再扩大到多目标，降低误操作风险。
- Left Hotkey（左键快捷键）
 类型：按键/复合；默认：`{ { "Keybind", {VK_XBUTTON2 } }`}
 说明：用于设置快捷键触发。建议避免与系统或常用软件冲突，优先使用组合键提高可控性。
- Right Hotkey（右键快捷键）
 类型：按键/复合；默认：`{ { "Keybind", {VK_XBUTTON1 } }`}
 说明：用于设置快捷键触发。建议避免与系统或常用软件冲突，优先使用组合键提高可控性。
- Extra Key Hotkey（额外快捷键）
 类型：按键/复合；默认：`{ { "Keybind", {0 } }`}
 说明：用于设置快捷键触发。建议避免与系统或常用软件冲突，优先使用组合键提高可控性。
- Left Trigger Mode（左键触发模式）
 类型：枚举；默认："Assist (PRO
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 Assist (PRO ，确认稳定后再逐项切换比较效果。
 可选：Hotkey Toggle（快捷键切换）；Hotkey Hold（快捷键按住）；TargetKey Toggle（目标键切换）；TargetKey Hold（目标键按住）；Assist (PRO)（辅助（专业版））
- Right Trigger Mode（右键触发模式）
 类型：枚举；默认："Assist (PRO
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 Assist (PRO ，确认稳定后再逐项切换比较效果。
 可选：Hotkey Toggle（快捷键切换）；Hotkey Hold（快捷键按住）；TargetKey Toggle（目标键切换）；TargetKey Hold（目标键按住）；Assist (PRO)（辅助（专业版））
- Extra Key Trigger Mode（额外键触发模式）
 类型：枚举；默认："Hotkey Hold"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 Hotkey Hold ，确认稳定后再逐项切换比较效果。
 可选：Hotkey Toggle（快捷键切换）；Hotkey Hold（快捷键按住）；TargetKey Toggle（目标键切换）；TargetKey Hold（目标键按住）
- Click Point Setting（点击位置设定）
 类型：枚举；默认："Manual"
 说明：这是选项型配置。默认值 Manual 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Manual（手动）；Locked（锁定）；Shake（抖动）；Shake Locked（锁定并抖动）
- Click Shake Max Radius（点击抖动最大距离）
 类型：数值；默认：8
 说明：用于细调显示样式和间距。默认值 8 通常是平衡视觉效果与紧凑度的设置，建议小步调整并实时观察。
- Pause Shake While Not Moving（未移动时暂停抖动）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Click Method（点击方式）
 类型：枚举；默认："WMessage"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 WMessage ，确认稳定后再逐项切换比较效果。
 可选：Simulation（模拟）；WMessage（窗口消息）；SendInput（未收录）
- Window Message Cancel Left Up（窗口消息取消左键抬起）
 类型：布尔；默认：false
 说明：用于指定模块实际作用对象。建议先对单个目标测试通过，再扩大到多目标，降低误操作风险。
- Window Message Cancel Right Up（窗口消息取消右键抬起）
 类型：布尔；默认：false
 说明：用于指定模块实际作用对象。建议先对单个目标测试通过，再扩大到多目标，降低误操作风险。
- Window Message Cancel Extra Up（窗口消息取消其他键抬起）
 类型：布尔；默认：false
 说明：用于指定模块实际作用对象。建议先对单个目标测试通过，再扩大到多目标，降低误操作风险。
- TargetKey Hold Threshold Time（目标键按住阈值时间）
 类型：数值；默认：700U
 说明：用于指定模块实际作用对象。建议先对单个目标测试通过，再扩大到多目标，降低误操作风险。
- Assist Mode CPS Threshold（辅助模式 CPS 阈值）
 类型：数值；默认：5
 说明：这是该模块的核心行为开关。默认值 5 通常更稳，建议先验证默认策略再尝试其他模式。
- Assist Interrupt Cooldown (ms)（辅助模式中断冷却（毫秒））
 类型：数值；默认：3000L
 说明：用于控制检测/刷新/动画节奏。默认值 3000L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Notify Mode（通知模式）
 类型：枚举；默认："Notify"
 说明：用于选择结果反馈方式。默认值 Notify 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：Off（关闭）；Chatter（弹幕）；Notify（通知）
- Stop When Menu On（开启菜单时停下）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Only Trigger While Moving（仅移动时触发）
 类型：布尔；默认：false
 说明：这是开关型配置。默认值 false 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Only Window Center（仅窗口客户区中心）
 类型：布尔；默认：false
 说明：用于指定模块实际作用对象。建议先对单个目标测试通过，再扩大到多目标，降低误操作风险。
- Only Window Center Radius（仅窗口客户区中心半径）
 类型：数值；默认：100.0
 说明：用于细调显示样式和间距。默认值 100.0 通常是平衡视觉效果与紧凑度的设置，建议小步调整并实时观察。
- Only In Minecraft Window（只在MC窗口触发）
 类型：布尔；默认：false
 说明：用于指定模块实际作用对象。建议先对单个目标测试通过，再扩大到多目标，降低误操作风险。
- Only When Cursor Hidden（仅在光标隐藏时触发）
 类型：布尔；默认：false
 说明：这是开关型配置。默认值 false 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Interrupt Key 1（中断键 1）
 类型：按键/复合；默认：`{ { "Keybind", {'E' } }`}
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Interrupt Key 2（中断键 2）
 类型：按键/复合；默认：`{ { "Keybind", {'T' } }`}
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Interrupt Key 3（中断键 3）
 类型：按键/复合；默认：`{ { "Keybind", {VK_ESCAPE } }`}
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Interrupt Key 4（中断键 4）
 类型：按键/复合；默认：`{ { "Keybind", {VK_OEM_2 } }`}
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
## 历史更新
- 8. 大幅度升级 AutoClicker 连点器模块，将左键、右键和额外键分开来，独立设置CPS（范围）、触发方式。
- 27. 为 Auto Clicker 连点器增加配置：
- 1. Auto Clicker: 连点器功能。

## 备注
仅为简单实现，不能取代专业连点器。

## 相关命令
无

## 相关模块
- [MouseWatcher (鼠标监视)](./MouseWatcher.md)
- [MouseSwap (鼠标交换)](./MouseSwap.md)
- [MouseDisabler (禁用鼠标)](./MouseDisabler.md)
- [MouseTeleport (鼠标传送)](./MouseTeleport.md)
- [MouseTrails (鼠标轨迹)](./MouseTrails.md)
- [MouseESP (鼠标透视)](./MouseESP.md)
- [Crosshair (准星线)](./Crosshair.md)

## 相关资料
无
