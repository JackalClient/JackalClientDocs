OpacityChanger
透明度调节
分类：Window
描述：改变目标窗口不透明度。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
OpacityChanger（透明度调节）支持对目标窗口进行快捷透明度调整，并提供临时HUD反馈。建议把步长控制在中等范围，获得更平滑的交互体验。
配置项
- HUD（是否显示HUD。）
 类型：枚举；默认："Giant"
 说明：调节时HUD样式。
 可选：Off（关闭）；Giant（巨型）；Rainbow Giant（彩虹巨型）
- Shortcut（快捷键）
 类型：枚举；默认："Wheel on Side"
 说明：快捷交互方式（滚轮等）。日常建议选最顺手的输入设备。
 可选：Wheel on Side（在边缘滚轮）；HotKey Wheel（热键 滚轮）
- Wheel Side（在哪个边缘滚轮）
 类型：枚举；默认："Left"
 说明：滚轮调节触发区域。
 可选：Left（左侧）；Top（顶端）；Right（右侧）；Bottom（底部）
- Wheel Detect Only If Cursor Visible（仅在光标可见时检测滚轮）
 类型：布尔；默认：true
 说明：该项会影响模块行为，建议基于默认值小步调整。
- Target Window（目标窗口）
 类型：枚举；默认："Foreground"
 说明：指定透明度调节作用窗口。
 可选：Foreground（前端）；PointAt（指向）
- Wheel Hotkey（滚轮热键）
 类型：按键/复合；默认：`{ { "Keybind", {VK_LMENU } }`}
 说明：该快捷键用于即时触发功能。建议避免与系统或常用软件冲突。
- Hide HUD When Menu On（打开菜单时隐藏HUD）
 类型：布尔；默认：false
 说明：菜单打开时隐藏调节HUD。
- Temp HUD Duration (ms)（临时HUD持续时间(毫秒)）
 类型：数值；默认：3000L
 说明：临时HUD停留时长。
- Temp HUD Animation Duration (ms)（临时显示的淡入淡出动画时长（毫秒）。）
 类型：数值；默认：300L
 说明：临时HUD动画时长。
- Step (%%)（差值 (%%)）
 类型：数值；默认：10U
 说明：该值控制强度/时序。建议以默认值为中心小步调整，避免一次跨度过大。
历史更新
- 15. 为 Volume 和 Opacity Changer 添加配置：
- 60. 修复了 OpacityChanger 直接对客户端窗口进行透明度修改后被客户端 GUI 配置里的 Opacity (0~1) 调回去的问题。现在会直接同步。
- 67. 为 OpacityChanger 添加配置：

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [WindowTags (窗口标签)](./WindowTags.md)
- [WindowHighlight (窗口高亮)](./WindowHighlight.md)
- [WindowESP (窗口透视)](./WindowESP.md)
- [Tracers (追踪线)](./Tracers.md)
- [TargetESP (目标透视)](./TargetESP.md)
- [TargetHUD (目标显示)](./TargetHUD.md)
- [WindowMaster (窗口大师)](./WindowMaster.md)
- [PrivateWindow (隐私窗口)](./PrivateWindow.md)

相关资料
无


HUD 样式补充
- OpacityChanger HUD 新增 Text 与 Modern (PRO) 样式；Text 为免费版默认样式，Modern (PRO) 为专业版默认样式。
- Volume 的 System Volume HUD Style 与 Process Volume HUD Style 新增 Text、Modern (PRO)、iOS 样式；Modern (PRO) 带图标、卡片与数字翻动效果，iOS 使用方形音量面板。
