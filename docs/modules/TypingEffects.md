# TypingEffects
打字效果
分类：Control
描述：打字时展示一些特效。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
TypingEffects（打字效果）用于打字时展示一些特效。
适合键鼠行为控制、输入增强和自动化操作场景。
初次使用可优先调整：Caret Update Cooldown (ms)、Selected Text Indicator Mode。

## 配置项
- Not As Debuggee（被调试时禁用）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- IME Indicator（输入法指示器）
 类型：枚举；默认："Temp"
 说明：这是选项型配置。默认值 Temp 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Off（关闭）；Temp（临时）；Always（总是）
- IME Indicator Style（输入法指示器风格）
 类型：枚举；默认："1"
 说明：这是选项型配置。默认值 1 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：1（未收录）；2（未收录）；3（未收录）；4（未收录）；5（未收录）
- IME Indicator Size（输入法指示器大小）
 类型：数值；默认：50
 说明：这是数值型配置。默认值 50 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- IME Indicator Temp Duration (ms)（输入法指示器临时时长（毫秒））
 类型：数值；默认：3000L
 说明：用于控制检测/刷新/动画节奏。默认值 3000L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Caret Indicator（插入符指示器）
 类型：枚举；默认："Temp"
 说明：这是选项型配置。默认值 Temp 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Off（关闭）；Temp（临时）；Always（总是）
- Caret Indicator Temp Duration (ms)（插入符指示器临时时长（毫秒））
 类型：数值；默认：5000L
 说明：用于控制检测/刷新/动画节奏。默认值 5000L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Caret Indicator Style（插入符指示器风格）
 类型：枚举；默认："Capture"
 说明：这是选项型配置。默认值 Capture 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Arrow（未收录）；Box（方框）；Crosshair（准星）；Capture（未收录）
- Caret Indicator Size（插入符指示器大小）
 类型：数值；默认：40
 说明：这是数值型配置。默认值 40 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Caret Indicator Capture Scale（插入符指示器捕获缩放）
 类型：数值；默认：4.0f
 说明：这是数值型配置。默认值 4.0f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Caret Indicator Capture Rotation Speed（插入符指示器捕获旋转速率）
 类型：数值；默认：4.0f
 说明：这是数值型配置。默认值 4.0f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Caret Particles（插入符粒子）
 类型：枚举；默认："Moving"
 说明：这是选项型配置。默认值 Moving 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Off（关闭）；Moving（正在移动）；Continuous（连续）
- Caret Particles Amount（插入符粒子量）
 类型：数值；默认：1.0f
 说明：这是数值型配置。默认值 1.0f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Caret Particles Color Jitter（插入符粒子颜色抖动）
 类型：数值；默认：0.2f
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
- Caret Particles Color（插入符粒子颜色）
 类型：枚举；默认："Rainbow"
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Caret Indicator Arrow Style（插入符指示器箭头风格）
 类型：枚举；默认："Up"
 说明：这是选项型配置。默认值 Up 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Up（向上）；Down（向下）；Up & Down（向上 & 向下）
- Caret Indicator Opacity (0~1)（插入符指示器不透明度 (0~1)）
 类型：数值；默认：0.8f
 说明：用于控制透明度。默认值 0.8f 兼顾可见性和遮挡；如果你觉得挡视线可小幅下调，若看不清可小幅上调。
- Caret Indicator Color（插入符指示器颜色）
 类型：枚举；默认："Rainbow"
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
 可选：Flow（流动）；其余颜色见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Caret Update Cooldown (ms)（Caret 更新窗口 冷却 (ms)）
 类型：数值；默认：500L
 说明：用于控制检测/刷新/动画节奏。默认值 500L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Caret Easing（Caret 缓动）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Caret Easing Speed (0~1)（Caret 缓动 速率 (0~1)）
 类型：数值；默认：0.05f
 说明：这是数值型配置。默认值 0.05f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Area Indicator（区域指示器）
 类型：枚举；默认："Off"
 说明：这是选项型配置。默认值 Off 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Off（关闭）；Temp（临时）；Always（总是）
- Area Indicator Easing（区域指示器缓动）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Area Indicator Easing Speed (0~1)（区域指示器缓动速率 (0~1)）
 类型：数值；默认：0.2f
 说明：这是数值型配置。默认值 0.2f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Area Indicator Color（区域指示器颜色）
 类型：枚举；默认："Red"
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Selected Text Indicator（选中文本指示器）
 类型：枚举；默认："Off"
 说明：这是选项型配置。默认值 Off 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Off（关闭）；Temp（临时）；Always（总是）
- Selected Text Indicator Mode（选中文本指示器模式）
 类型：枚举；默认："Translation"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 Translation ，确认稳定后再逐项切换比较效果。
 可选：Raw（原始）；Translation（翻译）
- Selected Text Indicator Translation Exclude Characters（选中文本指示器翻译排除字符）
 类型：文本；默认："^#{}<>\\/*|"
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Selected Text Indicator Translation Max Length（选中文本指示器翻译最大长度）
 类型：数值；默认：300
 说明：这是数值型配置。默认值 300 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Selected Text Indicator Color（选中文本指示器颜色）
 类型：枚举；默认："Blue"
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
 可选：Flow（流动）；其余颜色见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Selected Text Indicator Opacity (0~1)（选中文本指示器不透明度 (0~1)）
 类型：数值；默认：0.75f
 说明：用于控制透明度。默认值 0.75f 兼顾可见性和遮挡；如果你觉得挡视线可小幅下调，若看不清可小幅上调。
- Selected Text Indicator Size（选中文本指示器大小）
 类型：数值；默认：30
 说明：这是数值型配置。默认值 30 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Selected Text Indicator Temp Duration (ms)（选中文本指示器临时时长（毫秒））
 类型：数值；默认：5000L
 说明：用于控制检测/刷新/动画节奏。默认值 5000L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
## 历史更新
- 20. 修复 TypingEffects 显示的 % 占位符注入导致崩溃的问题。
- 20. 添加模块：Typing Effects，打字特效
- 22. 为 Speaker / Typing Effects 添加配置项：

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
