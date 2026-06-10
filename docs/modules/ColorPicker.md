# ColorPicker
取色器
分类：Control
描述：显示和复制鼠标位置的颜色。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
ColorPicker（取色器）用于显示和复制鼠标位置的颜色。
适合键鼠行为控制、输入增强和自动化操作场景。
初次使用可优先调整：HUD、HUD Font Size、Mode。

## 配置项
- Exclude Client（排除客户端）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- HUD（是否显示HUD。）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- HUD Font Size（HUD 字号）
 类型：数值；默认：25
 说明：用于控制文本可读性。默认字号 25 适合多数分辨率；高分屏可适当加大，低分辨率建议减少以免拥挤。
- Mode（模式）
 类型：枚举；默认："Tool"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 Tool ，确认稳定后再逐项切换比较效果。
 可选：Instant（瞬间）；Tool（工具）
- Format（格式）
 类型：枚举；默认："R
 说明：这是选项型配置。默认值 R 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
- Copy Hotkey（复制快捷键）
 类型：按键/复合；默认：`{ { "Keybind", {VK_LCONTROL, VK_LMENU, 'C' } }`}
 说明：用于设置快捷键触发。建议避免与系统或常用软件冲突，优先使用组合键提高可控性。
- Copy Hotkey (Inverted Color)（复制快捷键（反转色））
 类型：按键/复合；默认：`{ { "Keybind", {VK_LCONTROL, VK_LMENU, 'I' } }`}
 说明：用于设置快捷键触发。建议避免与系统或常用软件冲突，优先使用组合键提高可控性。
## 历史更新
- 13. 添加模块：Color Picker 取色器。

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
