# HudEditor
HUD编辑器
分类：Render
描述：帮助你编辑 HUD 元素的属性。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
HudEditor（HUD编辑器）用于帮助你编辑 HUD 元素的属性。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Show Key Names、Show Old Values、Show New Values。

## 配置项
- Show Key Names（显示键名）
 类型：布尔；默认：true
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Show Old Values（显示旧值）
 类型：布尔；默认：false
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Show New Values（显示新值）
 类型：布尔；默认：true
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Show Status（显示状态）
 类型：布尔；默认：true
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Show Rectangle（显示矩形）
 类型：布尔；默认：true
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Show Line（显示线条）
 类型：布尔；默认：true
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Rectangle Opacity (0~1)（矩形不透明度 (0~1)）
 类型：数值；默认：0.7f
 说明：用于控制透明度。默认值 0.7f 兼顾可见性和遮挡；如果你觉得挡视线可小幅下调，若看不清可小幅上调。
- Line Opacity (0~1)（线条不透明度 (0~1)）
 类型：数值；默认：0.9f
 说明：用于控制透明度。默认值 0.9f 兼顾可见性和遮挡；如果你觉得挡视线可小幅下调，若看不清可小幅上调。
- Preview Key（预览键）
 类型：按键/复合；默认：`{ { "Keybind", {VK_LCONTROL } }`}
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Drag Key（拖拽键）
 类型：按键/复合；默认：`{ { "Keybind", {VK_MBUTTON } }`}
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
## 历史更新
- 33. 实装了 HudEditor 的功能，打开后可以按住左Ctrl预览各 HUD 元素，默认按 Ctrl+鼠标中键 直接拖拽 HUD 元素。打开后，所有 Give Way to Mouse 选项将不生效。
- 44. 在 GUI 右下角添加 Hud Editor 的按钮。
- 15. 添加模块： HudEditor，编辑 HUD 元素属性。暂时还没做好。

## 备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

## 相关命令
无

## 相关模块
- [Arraylist (模块列表)](./Arraylist.md)
- [Ambience (环境气氛)](./Ambience.md)
- [AutoDanmaku (自动弹幕)](./AutoDanmaku.md)
- [AutoTitle (自动标题)](./AutoTitle.md)
- [AutoTotem (自动图腾)](./AutoTotem.md)
- [AudioVisualizer (音频可视化)](./AudioVisualizer.md)
- [LyricsPhysics (物理歌词)](./LyricsPhysics.md)
- [BetterLyrics (更好的歌词)](./BetterLyrics.md)

## 相关资料
无
