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
初次使用可优先调整：Mode、Classic Night Enabled、Show Key Names。

## 配置项
- Mode（模式）
 类型：枚举；默认："Classic"
 说明：Classic 会打开 GUI 进入 HUD 编辑界面，鼠标经过 HUD 即可预览，按住鼠标左键可直接拖动，按 Esc 或关闭菜单即可完成编辑。Old 保留旧版 HUD 形式，需要使用 Old Preview Key 和 Old Drag Key。
 可选：Classic（经典）；Old（老版）
- Classic Night Enabled（经典模式启用夜幕）
 类型：布尔；默认：true
 说明：Classic 模式下是否自动开启 Night 遮罩。若 Night 原本未开启，退出 HudEditor 后会自动关闭；若 Night 原本已开启，则不会被 HudEditor 退出流程关闭。
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
- Rectangle Opacity (0~1)（矩形不透明度 (0~1)）
 类型：数值；默认：0.7f
 说明：用于控制透明度。默认值 0.7f 兼顾可见性和遮挡；如果你觉得挡视线可小幅下调，若看不清可小幅上调。
- Old Preview Key（旧版预览键）
 类型：按键/复合；默认：`{ { "Keybind", {VK_LCONTROL } }`}
 说明：Old 模式下按住该键时预览 HUD 可拖拽区域；Classic 模式不使用该配置。
- Old Drag Key（旧版拖拽键）
 类型：按键/复合；默认：`{ { "Keybind", {VK_MBUTTON } }`}
 说明：Old 模式下按住该键拖动 HUD；Classic 模式使用鼠标左键直接拖动。
## 历史更新
- v1.1.4：新增 Classic 模式，启用后进入 GUI 编辑界面，可直接用鼠标左键拖动 HUD，并可联动 Night 遮罩；旧版按键配置重命名为 Old Preview Key / Old Drag Key。
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
