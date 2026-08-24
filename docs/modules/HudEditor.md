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
初次使用可优先调整：Mode、Enable Selection、Keyboard Move Step、Selection Opacity (0~1)。

Classic 模式下，左键单击 HUD 可选中并显示淡灰色矩形，随后可拖动或使用方向键微调，方向键支持长按连续移动。具有缩放配置的 HUD 会在选框四角显示白色圆点，可拖动圆点以元素中心为锚点等比缩放；CustomHUD Text 会通过字号进行缩放。CustomHUD Text 与 Image 的选框下方还会显示独立白色旋转圆点，按住拖动即可旋转。可分别调整背景宽高且选框尺寸足够的 HUD 还会显示四个边中点，分别调整宽度或高度，所有缩放操作均保持中心不变。Arraylist 也可像普通 HUD 一样选择和移动。Tab / Shift+Tab 可依次选择下一个 / 上一个 HUD，Home 可将选中 HUD 居中，Ctrl+D 或单击空白处可取消选择。Delete 会先详细提示实际操作，再关闭对应模块或删除对应 CustomHUD 元素。

鼠标悬停 HUD 时会显示黄色预览框，并使用约 100 毫秒的淡入淡出。HudEditor 对位置、缩放或不透明度的修改会在拖动、缩放或连续按键结束后，使用最终值触发一次统一的配置变化通知，避免调整过程中连续刷屏。CustomHUD 通知会显示元素编号、类型、字段与最终值。

选中 HUD 后，仅在其矩形内右键才会打开 HUD 操作菜单，可设置位置、缩放、不透明度或移除。未满足该条件时右键会打开空白区域菜单，用于新建文本/图像、启停或查看 CustomHUD，以及退出编辑器。没有整体缩放或不透明度配置的 HUD 不显示对应菜单项。

CustomHUD Text 的右键菜单支持直接编辑文本、复制和按固定角度旋转，留空时会恢复为示例文本；CustomHUD Image 支持重新选择图像文件、复制、横纵翻转和按固定角度旋转。复制后可在空白区域粘贴副本或引用，Ctrl+C、Ctrl+V 和 Ctrl+Shift+V 分别执行复制、粘贴副本和粘贴引用。引用选中时会在右键菜单上方用红色文字提示修改将作用于源对象。空白区域菜单新建图像时会通过独立进程异步打开文件选择器，不会阻塞 HUD 渲染；选择完成后再创建或更新元素。FPS、客户端水印和 Performance HUD 支持直接调整缩放与不透明度，Session HUD 支持调整文字不透明度。缩放圆点不能越过元素中心进行反向缩放。

## 配置项
- Mode（模式）
 类型：枚举；默认："Classic"
 说明：Classic 会打开 GUI 进入 HUD 编辑界面，先单击选择 HUD，再用鼠标拖动或键盘调整。Old 保留旧版 HUD 形式，需要使用 Old Preview Key 和 Old Drag Key。
 可选：Classic（经典）；Old（老版）
- Classic Night Enabled（经典模式启用夜幕）
 类型：布尔；默认：true
 说明：Classic 模式下是否自动开启 Night 遮罩。若 Night 原本未开启，退出 HudEditor 后会自动关闭；若 Night 原本已开启，则不会被 HudEditor 退出流程关闭。
- Enable Selection（启用选择功能）
 类型：布尔；默认：true
 说明：控制 Classic 模式的 HUD 选择、键盘操作和选中矩形。
- Enable Context Menu（启用右键菜单）
 类型：布尔；默认：true
 说明：控制 HUD 与空白区域的动画右键菜单。
- Keyboard Move Step（键盘移动步长）
 类型：数值；默认：1.0
 说明：选中 HUD 后，每次按方向键移动的屏幕像素数。
- Selection Opacity (0~1)（选中矩形不透明度 (0~1)）
 类型：数值；默认：0.18
 说明：控制选中 HUD 上方淡灰色矩形的透明度。
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
- v1.1.6：Classic 模式新增 HUD 选择、方向键移动、Tab 切换、Home 居中、确认移除及动画右键菜单，并支持长按移动、选框圆点等比缩放、CustomHUD 图片翻转、图片与文本旋转、Arraylist 选择、悬停预览动画、调整结束通知和快速编辑 CustomHUD 文本或图像；修复 CustomHUD 文本缩小时选框高度异常增大的问题。
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
