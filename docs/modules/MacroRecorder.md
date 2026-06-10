# MacroRecorder
宏录制
分类：Control
描述：录制键盘和鼠标操作的宏。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
观看视频 [\[ft.Jackal\] 使用「宏」在丝之歌进行自动刷念珠操作](https://www.bilibili.com/video/BV1VWpdz9EWp)
MacroRecorder（宏录制）用于录制键盘和鼠标操作的宏。
适合键鼠行为控制、输入增强和自动化操作场景。
初次使用可优先调整：Recording HUD、Recording HUD Font Size、Recording HUD X Rate。

## 配置项
- Output Format（输出格式）
 类型：枚举；默认："Jackal Macro"
 说明：这是选项型配置。默认值 Jackal Macro 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Jackal Macro（Jackal 宏）；Jackal Batch（Jackal 批处理）
- First Perspective Mouse Offset（第一视角鼠标偏移）
 类型：布尔；默认：false
 说明：这是开关型配置。默认值 false 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- First Perspective Mouse Offset Scale X（第一人称视角鼠标偏移 X 缩放）
 类型：数值；默认：5.0f
 说明：这是数值型配置。默认值 5.0f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- First Perspective Mouse Offset Scale Y（第一人称视角鼠标偏移 Y 缩放）
 类型：数值；默认：1.0f
 说明：这是数值型配置。默认值 1.0f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Recording HUD（录制中HUD）
 类型：枚举；默认："Off"
 说明：这是选项型配置。默认值 Off 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Off（关闭）；Rec（未收录）；Red Rectangle（红色矩形）
- Recording HUD Font Size（录制中HUD字号）
 类型：数值；默认：50
 说明：用于控制文本可读性。默认字号 50 适合多数分辨率；高分屏可适当加大，低分辨率建议减少以免拥挤。
- Recording HUD X Rate（录制中HUD X比例）
 类型：数值；默认：0.05f
 说明：用于控制界面元素在屏幕中的相对位置。默认值 0.05f 一般是作者调过的稳定布局；建议每次只改一个轴，避免元素跑出可视区域。
- Recording HUD Y Rate（录制中HUD Y比例）
 类型：数值；默认：0.12f
 说明：用于控制界面元素在屏幕中的相对位置。默认值 0.12f 一般是作者调过的稳定布局；建议每次只改一个轴，避免元素跑出可视区域。
- Notify File Path（通知文件路径）
 类型：布尔；默认：true
 说明：用于选择结果反馈方式。默认值 true 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Notify Actions (Chatter)（通知动作 (弹幕)）
 类型：布尔；默认：false
 说明：用于选择结果反馈方式。默认值 false 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Notify Mouse Pos (Chatter)（通知鼠标坐标 (弹幕)）
 类型：布尔；默认：false
 说明：用于选择结果反馈方式。默认值 false 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Record Window Assertions（记录窗口断言）
 类型：布尔；默认：false
 说明：用于指定模块实际作用对象。建议先对单个目标测试通过，再扩大到多目标，降低误操作风险。
- bind (Enable)（绑定 (启用)）
 类型：按键/复合；默认：`{ { "Keybind", {0 } }`}
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- bind (Disable)（绑定 (关闭)）
 类型：按键/复合；默认：`{ { "Keybind", {0 } }`}
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
## 历史更新
- 10. 添加模块： MacroRecorder（宏录制）

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
无
