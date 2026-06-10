# Typewriter
打字机
分类：Control
描述：自动帮你输入段落。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
Typewriter（打字机）用于自动帮你输入段落。
适合键鼠行为控制、输入增强和自动化操作场景。
初次使用可优先调整：HUD、HUD Font Size、HUD Progress Style。

## 配置项
- HUD（是否显示HUD。）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- HUD Font Size（HUD 字号）
 类型：数值；默认：45
 说明：用于控制文本可读性。默认字号 45 适合多数分辨率；高分屏可适当加大，低分辨率建议减少以免拥挤。
- HUD Progress Style（进度条 HUD 风格）
 类型：枚举；默认："Bottom Bar"
 说明：这是选项型配置。默认值 Bottom Bar 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Off（关闭）；Bottom Bar（底部条）；Mouse Percentage（鼠标百分数）；Rainbow Giant（彩虹巨型）
- HUD Window Highlight（窗口高亮 HUD）
 类型：布尔；默认：true
 说明：用于指定模块实际作用对象。建议先对单个目标测试通过，再扩大到多目标，降低误操作风险。
- Hide HUD When Menu On（打开菜单时隐藏HUD）
 类型：布尔；默认：true
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Keep Disabling IME（保持禁用输入法）
 类型：布尔；默认：true
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Focus Window（聚焦窗口）
 类型：布尔；默认：true
 说明：用于指定模块实际作用对象。建议先对单个目标测试通过，再扩大到多目标，降低误操作风险。
- Init/Stop Hotkey（初始化/停止快捷键）
 类型：按键/复合；默认：`{ { "Keybind", {VK_LMENU, '1' } }`}
 说明：用于设置快捷键触发。建议避免与系统或常用软件冲突，优先使用组合键提高可控性。
- Pause/Resume Hotkey（暂停/继续快捷键）
 类型：按键/复合；默认：`{ { "Keybind", {VK_LMENU, '2' } }`}
 说明：用于设置快捷键触发。建议避免与系统或常用软件冲突，优先使用组合键提高可控性。
- Source（来源）
 类型：枚举；默认："Clipboard"
 说明：这是选项型配置。默认值 Clipboard 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Fixed（固定）；Clipboard（剪贴板）；File（文件）；AI Answer（人工智能回答）
- Clipboard Tweaks Module Text Processor（剪贴板功能模块文本处理器）
 类型：布尔；默认：false
 说明：用于指定模块实际作用对象。建议先对单个目标测试通过，再扩大到多目标，降低误操作风险。
- Accelerate Space Typing（瞬间输入空格类字符。）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Display On Send（发送时展示要发送的内容。）
 类型：枚举；默认："Off"
 说明：这是选项型配置。默认值 Off 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Off（关闭）；Notify（通知）；Chatter（弹幕）；Title（标题）；Actionbar（行为栏）；Fancy（优美）；WinToast（系统通知）
- Display Chatter Color（显示 弹幕 颜色）
 类型：枚举；默认："Rainbow"
 说明：用于选择结果反馈方式。默认值 Rainbow 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Display Chatter Type（显示 弹幕 类型）
 类型：枚举；默认："Top"
 说明：用于选择结果反馈方式。默认值 Top 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：Scroll（滚动）；Top（顶端）；Bottom（底部）；Reverse（颠倒）；Horizontal（横向）；Vertical（纵向）；Random（随机）
- Source Fixed（固定来源）
 类型：文本；默认："An apple a day keeps the doctor away."
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Source File Path（文件来源路径）
 类型：文本；默认：""
 说明：用于指定文件/目录路径。建议使用稳定的绝对路径并确认权限可访问，避免因路径变化导致功能失效。
- Source AI Ask（人工智能来源问题）
 类型：文本；默认："Please tell me Li Bai's famous poem in Chinese."
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Timing Mode（节奏模式）
 类型：枚举；默认："Smart"
 说明：这是该模块的核心行为开关。默认值 Smart 通常更稳，建议先验证默认策略再尝试其他模式。
- Timer（变速）
 类型：数值；默认：1.0f
 说明：这是数值型配置。默认值 1.0f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Fixed Delay（固定延迟）
 类型：数值；默认：100U
 说明：这是数值型配置。默认值 100U 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Key Internal Gap（按键按下和松开之间的间隙。）
 类型：数值；默认：10U
 说明：这是数值型配置。默认值 10U 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Auto Send（自动发送）
 类型：枚举；默认："Off"
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Auto Send Key（自动发送键）
 类型：枚举；默认："Ctrl + Enter"
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
 可选：Enter（进入）；Ctrl Enter（Ctrl 进入）
- Auto Send Method（自动发送方式）
 类型：枚举；默认："Simulation"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 Simulation ，确认稳定后再逐项切换比较效果。
 可选：Simulation（模拟）；WMessage（窗口消息）
- Send Fixed Length（发送固定长度）
 类型：数值；默认：10U
 说明：这是数值型配置。默认值 10U 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Send Period (ms)（发送周期（毫秒））
 类型：数值；默认：1000U
 说明：用于控制检测/刷新/动画节奏。默认值 1000U 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
## 历史更新
- 22. Typewriter 修复了无法打出 Tab 的问题。
- 9. 为 Typewriter 添加配置：HUD Font Size
- 9. 添加模块 Typewriter，用于自动帮你打字（甚至可以帮你发送）

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
[\[ft.Jackal\] 热情的卖课骗子协助我测试刷屏器模块。](https://www.bilibili.com/video/BV1yfRvYQEMe)
[时隔数月再次测试 Typewriter 刷屏器 - BalancedTimer Bypass 180bps](https://www.bilibili.com/video/BV19Jn8zCEri)
