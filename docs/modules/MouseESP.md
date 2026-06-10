# MouseESP
鼠标透视
分类：Control
描述：高亮鼠标指针的位置。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
MouseESP（鼠标透视）用于高亮鼠标指针的位置。
适合键鼠行为控制、输入增强和自动化操作场景。
初次使用可优先调整：Visibility Check、Circle、Circle Radius。

## 配置项
- Visibility Check（可见性检查）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Circle（圆圈）
 类型：布尔；默认：false
 说明：这是开关型配置。默认值 false 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Circle Radius（圆圈半径）
 类型：数值；默认：25.0f
 说明：用于细调显示样式和间距。默认值 25.0f 通常是平衡视觉效果与紧凑度的设置，建议小步调整并实时观察。
- Circle Opacity (0~1)（圆圈不透明度 (0~1)）
 类型：数值；默认：0.3f
 说明：用于控制透明度。默认值 0.3f 兼顾可见性和遮挡；如果你觉得挡视线可小幅下调，若看不清可小幅上调。
- Box（方框）
 类型：布尔；默认：false
 说明：这是开关型配置。默认值 false 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Box Easing（方框缓动）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Box Easing Speed (0~1)（方框缓动高速率 (0~1)）
 类型：数值；默认：0.2f
 说明：这是数值型配置。默认值 0.2f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Box Line Width（框线宽）
 类型：数值；默认：2
 说明：这是数值型配置。默认值 2 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Box Width Rate（方框宽度比例）
 类型：数值；默认：1.0f
 说明：这是数值型配置。默认值 1.0f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Box Height Rate（方框高度比例）
 类型：数值；默认：1.2f
 说明：这是数值型配置。默认值 1.2f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Box Opacity (0~1)（方框不透明度 (0~1)）
 类型：数值；默认：0.8f
 说明：用于控制透明度。默认值 0.8f 兼顾可见性和遮挡；如果你觉得挡视线可小幅下调，若看不清可小幅上调。
- Box Rounded Corners（方框圆角）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Coordinates（坐标）
 类型：布尔；默认：false
 说明：这是开关型配置。默认值 false 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Coordinates Font Size（坐标字号）
 类型：数值；默认：30
 说明：用于控制文本可读性。默认字号 30 适合多数分辨率；高分屏可适当加大，低分辨率建议减少以免拥挤。
- Coordinates Opacity (0~1)（坐标不透明度 (0~1)）
 类型：数值；默认：0.5f
 说明：用于控制透明度。默认值 0.5f 兼顾可见性和遮挡；如果你觉得挡视线可小幅下调，若看不清可小幅上调。
- Coordinates X Offset（横坐标偏移）
 类型：数值；默认：5
 说明：这是数值型配置。默认值 5 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Coordinates Y Offset（纵坐标偏移）
 类型：数值；默认：5
 说明：这是数值型配置。默认值 5 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Particles（粒子）
 类型：枚举；默认："Both"
 说明：这是选项型配置。默认值 Both 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Off（关闭）；Click（未收录）；Continuous（连续）；Both（两者）
- Particles Amount (Continuous)（粒子数量（持续性））
 类型：数值；默认：1.0f
 说明：这是数值型配置。默认值 1.0f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Particles Amount (Click)（粒子数量（点击））
 类型：数值；默认：20.0f
 说明：这是数值型配置。默认值 20.0f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Particles Color (Continuous)（粒子颜色（持续性））
 类型：枚举；默认："Rainbow"
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Particles Color (Click)（粒子颜色（点击）（）
 类型：枚举；默认："Colorful"
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Particles Color Jitter（粒子颜色抖动）
 类型：数值；默认：0.8f
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
- CPS Display（CPS 显示）
 类型：枚举；默认："Off"
 说明：这是选项型配置。默认值 Off 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Off（关闭）；CPS Left | Right（每秒点击次数。 左侧 | 右侧）；Left | Right（左侧 | 右侧）；Left（左侧）；Right（右侧）
- CPS Opacity (0~1)（CPS 不透明度 (0~1)）
 类型：数值；默认：0.5f
 说明：用于控制透明度。默认值 0.5f 兼顾可见性和遮挡；如果你觉得挡视线可小幅下调，若看不清可小幅上调。
- CPS Font Size（CPS 字号）
 类型：数值；默认：30
 说明：用于控制文本可读性。默认字号 30 适合多数分辨率；高分屏可适当加大，低分辨率建议减少以免拥挤。
- Box Color（方框颜色）
 类型：枚举；默认："Rainbow"
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Circle Color（圆圈颜色）
 类型：枚举；默认："Yellow"
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Circle Color (Left Click)（圆圈颜色（左键））
 类型：枚举；默认："Blue"
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Circle Color (Right Click)（圆圈颜色（右键））
 类型：枚举；默认："Pink"
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Circle Color (Middle Click)（圆圈颜色（中键））
 类型：枚举；默认："Red"
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Coordinates Color（坐标颜色）
 类型：枚举；默认："Rainbow"
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- CPS Color（CPS 颜色）
 类型：枚举；默认："Aqua-Pink"
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
## 历史更新
- 28. 为 Mouse ESP 添加配置：
- 2. 为 Mouse ESP 添加配置：

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
- [Crosshair (准星线)](./Crosshair.md)

## 相关资料
无
