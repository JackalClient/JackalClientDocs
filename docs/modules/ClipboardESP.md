ClipboardESP
剪贴板透视
分类：Control
描述：暂无描述

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
ClipboardESP（剪贴板透视）用于暂无描述。
适合键鼠行为控制、输入增强和自动化操作场景。
初次使用可优先调整：Font Size、Line Gap、Max Lines Shown。

配置项
- Font Size（字号）
 类型：数值；默认：20
 说明：用于控制文本可读性。默认字号 20 适合多数分辨率；高分屏可适当加大，低分辨率建议减少以免拥挤。
- Line Gap（行距）
 类型：数值；默认：3
 说明：用于细调显示样式和间距。默认值 3 通常是平衡视觉效果与紧凑度的设置，建议小步调整并实时观察。
- Max Lines Shown（最多显示的行数）
 类型：数值；默认：25
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Text Background（文本背景）
 类型：布尔；默认：false
 说明：这是开关型配置。默认值 false 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Background（背景）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Background Round Corners（背景圆角）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Background Roundness（背景圆滑程度）
 类型：数值；默认：0.2f
 说明：用于细调显示样式和间距。默认值 0.2f 通常是平衡视觉效果与紧凑度的设置，建议小步调整并实时观察。
- Background Opacity (0~1)（背景不透明度 (0~1)）
 类型：数值；默认：0.5f
 说明：用于控制透明度。默认值 0.5f 兼顾可见性和遮挡；如果你觉得挡视线可小幅下调，若看不清可小幅上调。
- Background Shadow（背景阴影）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Background Shadow Thickness（背景阴影厚度）
 类型：数值；默认：24.0f
 说明：用于细调显示样式和间距。默认值 24.0f 通常是平衡视觉效果与紧凑度的设置，建议小步调整并实时观察。
- Background Shadow Opacity (0~1)（背景阴影不透明度 (0~1)）
 类型：数值；默认：0.45f
 说明：用于控制透明度。默认值 0.45f 兼顾可见性和遮挡；如果你觉得挡视线可小幅下调，若看不清可小幅上调。
- Background Color（背景颜色）
 类型：枚举；默认："Black"
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
 可选：Flow（流动）；Transparent（透明）；其余颜色见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Background Shadow Color（背景阴影颜色）
 类型：枚举；默认："Black"
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Text Color（文本颜色）
 类型：枚举；默认："Gold"
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Show Bitmap Preview（显示位图预览）
 类型：布尔；默认：true
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Bitmap Preview Max Width（位图预览最大宽度）
 类型：数值；默认：420
 说明：这是数值型配置。默认值 420 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Bitmap Preview Max Height（位图预览最大高度）
 类型：数值；默认：260
 说明：这是数值型配置。默认值 260 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Bitmap Preview Border（位图预览边框）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Bitmap Preview Border Width（位图预览边框宽度）
 类型：数值；默认：2.0f
 说明：这是数值型配置。默认值 2.0f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Bitmap Preview Border Color（位图预览边框颜色）
 类型：枚举；默认："White"
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Show Format（显示格式）
 类型：布尔；默认：true
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Show Line Number（显示行号）
 类型：布尔；默认：true
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Show Text Stats（显示文本统计）
 类型：布尔；默认：true
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Give Way to Mouse（给鼠标让道）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Hide When Menu On（菜单打开时不显示）
 类型：布尔；默认：true
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- X Rate（横坐标比例）
 类型：数值；默认：0.16
 说明：用于控制界面元素在屏幕中的相对位置。默认值 0.16 一般是作者调过的稳定布局；建议每次只改一个轴，避免元素跑出可视区域。
- Mid Y Rate（中心纵坐标比例）
 类型：数值；默认：0.3
 说明：用于控制界面元素在屏幕中的相对位置。默认值 0.3 一般是作者调过的稳定布局；建议每次只改一个轴，避免元素跑出可视区域。
历史更新
- 6. 修复 ClipboardESP 文件路径显示的问题，现在还会标注额外信息。对于文件，会标注文件大小。
- 25. 修复 Clipboard ESP 的崩溃问题。
- 29. 修复 Clipboard ESP 的还有几行未显示文本的错位问题。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令

/clipboard &lt;args...&gt;
剪贴板相关命令。

/clipboard show
读取并显示剪贴板。

/clipboard get
获取并存储剪贴板内容到变量 it。

/clipboard store text &lt;text...&gt;
/clipboard store file &lt;path...&gt;
/clipboard store movefile &lt;path...&gt;
写入剪贴板。

/clipboard clear
清空剪贴板。

相关模块
- [AntiAFK (反挂机)](./AntiAFK.md)
- [AutoClicker (连点器)](./AutoClicker.md)
- [MouseWatcher (鼠标监视)](./MouseWatcher.md)
- [MouseSwap (鼠标交换)](./MouseSwap.md)
- [MouseDisabler (禁用鼠标)](./MouseDisabler.md)
- [MouseTeleport (鼠标传送)](./MouseTeleport.md)
- [MouseTrails (鼠标轨迹)](./MouseTrails.md)
- [MouseESP (鼠标透视)](./MouseESP.md)

相关资料
无

