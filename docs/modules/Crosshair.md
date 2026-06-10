# Crosshair
准星线
分类：Control
描述：暂无描述

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
Crosshair（准星线）用于暂无描述。
适合键鼠行为控制、输入增强和自动化操作场景。
初次使用可优先调整：Advanced Mode、Advanced Mode Show HUD、Advanced Mode Hotkey。

## 配置项
- Advanced Mode（高级模式）
 类型：布尔；默认：false
 说明：这是该模块的核心行为开关。默认值 false 通常更稳，建议先验证默认策略再尝试其他模式。
- Advanced Mode Show HUD（高级模式显示文本）
 类型：布尔；默认：true
 说明：这是该模块的核心行为开关。默认值 true 通常更稳，建议先验证默认策略再尝试其他模式。
- Advanced Mode Hotkey（高级模式快捷键）
 类型：按键/复合；默认：`Keybind(VK_LMENU, VK_RMENU)`
 说明：这是该模块的核心行为开关。默认值 `Keybind(VK_LMENU, VK_RMENU)` 通常更稳，建议先验证默认策略再尝试其他模式。
- Advanced Mode Allow No Focus（高级模式允许没有焦点）
 类型：布尔；默认：false
 说明：这是该模块的核心行为开关。默认值 false 通常更稳，建议先验证默认策略再尝试其他模式。
- Crosshair Line Width（准星线宽）
 类型：数值；默认：2
 说明：这是数值型配置。默认值 2 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Crosshair Line Opacity (0~1)（准星线不透明度）
 类型：数值；默认：0.9f
 说明：用于控制透明度。默认值 0.9f 兼顾可见性和遮挡；如果你觉得挡视线可小幅下调，若看不清可小幅上调。
- Crosshair Hollow Enabled（鼠标周围不绘制准星线）
 类型：布尔；默认：true
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Crosshair Hollow Radius（鼠标周围准星不绘制的半径）
 类型：数值；默认：80
 说明：用于细调显示样式和间距。默认值 80 通常是平衡视觉效果与紧凑度的设置，建议小步调整并实时观察。
- Crosshair Line Color（准星线颜色）
 类型：枚举；默认："Rainbow"
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
 可选：White（白色）；Red（红色）；Green（绿色）；Blue（蓝色）；Magenta（品红色）；Colorful（缤纷）；Rainbow（彩虹色）
- Crosshair Line Wave Color（准星线颜色闪烁）
 类型：布尔；默认：true
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
- Crosshair Line Combination Type（准星线组合类型）
 类型：枚举；默认："Plus"
 说明：这是选项型配置。默认值 Plus 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Horizontal（横向）；Vertical（纵向）；Plus（加号）；X（未收录）；Plus & X（米字型）
- Horizontal（横向）
 类型：文本；默认："Vertical", "Plus", "X", "Plus & X"
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Coord Font Size（坐标字号）
 类型：数值；默认：30
 说明：用于控制文本可读性。默认字号 30 适合多数分辨率；高分屏可适当加大，低分辨率建议减少以免拥挤。
- HUD Font Size（HUD 字号）
 类型：数值；默认：25
 说明：用于控制文本可读性。默认字号 25 适合多数分辨率；高分屏可适当加大，低分辨率建议减少以免拥挤。
- HUD Line Gap（HUD 行距）
 类型：数值；默认：5
 说明：用于细调显示样式和间距。默认值 5 通常是平衡视觉效果与紧凑度的设置，建议小步调整并实时观察。
- HUD Opacity (0~1)（HUD 不透明度）
 类型：数值；默认：0.9f
 说明：用于控制透明度。默认值 0.9f 兼顾可见性和遮挡；如果你觉得挡视线可小幅下调，若看不清可小幅上调。
- Hide When Menu On（菜单打开时不显示）
 类型：布尔；默认：false
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
## 历史更新
- 2. 为 Crosshair 准星模块添加：
- 23. 为 Crosshair 模块添加配置：
- 24. 现在 Crosshair 模块高级模式的坐标不会出屏幕了。

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
