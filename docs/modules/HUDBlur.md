# HUDBlur
HUD模糊
分类：Render
描述：应用模糊效果到HUD。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
HUDBlur（HUD模糊）用于应用模糊效果到HUD。
适合在日常管理与自动化场景中按需启用。
默认使用 Legacy 后端；初次使用可优先调整 Screen Capture Cooldown (ms)。也可切换到 Experimental 试用系统局部背景模糊。
退出客户端时，Experimental 覆盖层会先于主窗口隐藏同步销毁；直接进入卸载流程时也会在耗时的退出清理之前销毁，避免主窗口消失后模糊覆盖层仍短暂留在桌面。

## 后端选择
Custom HUD 的 Apply HUD Blur 可多选 Text Background 与 Image Areas，默认全选；对文字背景矩形、半透明图片及组合预设中的相应区域使用当前后端模糊。配置面板中，所有子项都因可见性规则或搜索过滤而隐藏的分组会同步隐藏；正常折叠但仍有可用选项的分组保持标题可见。

Arraylist 开启 Background 时自动接入 HUD Blur；启用 Neverlose GUI Background (PRO) 且 GUI Blur 未开启时，Neverlose 主窗口区域也接入 HUD Blur，跟随窗口圆角与菜单动画。两处均需启用 HUD Blur，支持 Legacy / Experimental，不会自行开启该模块。Neverlose 已有背景模糊路径不会重复叠加；未使用图片或着色器背景时，可通过 NL Background Overlay Opacity 调整覆盖颜色透明度，避免不透明底色挡住模糊。

- Backend 默认 Legacy，可选择 Legacy 或 Experimental，旧配置缺少该项时仍使用 Legacy。
- Experimental 后端开启或关闭时不会自动启停 ScreenCapture、AntiCapture 等模块，也不会改变用户已开启的这些模块。
- Legacy 保持原有自动启停行为：开启时自动启动所需屏幕捕获，关闭时关闭由 HUD Blur 自动开启的 ScreenCapture / AntiCapture，不关闭原本已开启的模块。保留普通模糊和专业版 Liquid Glass，模糊参数继续随 Style 切换显示。ScreenCapture 自身的 Exclude Client / Keep 防捕获策略不变。
- Experimental 使用 Windows Composition HostBackdropBrush，通过主窗口下方的一个鼠标穿透背景窗口承载多个局部模糊区域，不会为每个 HUD 创建窗口，也不再为 HUD Blur 请求屏幕截图或运行旧版模糊 shader。
- Experimental 下，Opacity (0~1)、Dropdown GUI Background (PRO) 与 Neverlose GUI Background (PRO) 保持可见；Backend 始终可见。系统模糊强度由 Windows 管理，不提供旧版强度、采样数、亮度或 Liquid Glass 参数。
- Notification 的各 Metro 样式也可接入 HUD Blur，模糊区域跟随实际通知形状与动画，通知的 Blur Opacity 控制该模糊层。Notification 的 Background Opacity 为 1 时始终跳过模糊，需将其调低才能显示；Text Opacity 不影响模糊。
- Island 开启 Background 时，灵动岛主体、常驻 Idle/歌词扩展区域和外置音频波形面板也接入 HUD Blur。Island 的 Blur Opacity (0~1) 默认 0.9，可独立控制模糊层，随灵动岛整体透明度及鼠标避让一起衰减；背景图片模糊与切换模糊不受该项影响。
- 实验后端面向 Windows 10 2004（19041）及以上系统与 Windows 11。Windows 10 的 HostBackdrop 路径依赖系统内部接口，实际兼容性仍需在目标机器验证。
- 模糊针对窗口后方的桌面内容，不会模糊客户端自身前景；当前只跟随主窗口，不覆盖多窗口复制输出，也不参与客户端自身 shader、运动模糊等后处理。
- 背景窗口跟随主窗口位置、大小、透明度及截图保护；HUD 区域支持圆角、显隐与现有裁剪/菜单缩放平移。截图工具或暂停模块更新时暂时隐藏实验模糊。
- 实验背景窗口始终保持鼠标穿透；关闭 ClickGUI 后，点击和滚轮可传递给桌面及其他应用，不受是否与客户端同进程或同线程影响。打开 ClickGUI 时仍由主窗口正常接收交互。
- 初始化或绘制失败会通知一次并停止重试，不会悄悄回退到 Legacy。可切换到 Legacy 恢复旧效果，再重新选择 Experimental 重试。

## 配置项
> 配置界面说明：旧版参数仅在 Backend 为 Legacy 时显示；其中普通模糊与 Liquid Glass 参数还会随 Style 切换，并分别归入对应分组。

- Backend（后端）
 类型：枚举；默认："Legacy"
 可选：Legacy（旧版）；Experimental（实验性）。

- Style（风格）
 类型：枚举；默认："Blur"
 说明：这是选项型配置。默认值 Blur 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Blur（模糊）；Liquid Glass (PRO)（液体玻璃（专业版））
- Screen Capture Cooldown (ms)（屏幕捕获冷却（毫秒））
 类型：数值；默认：100L
 说明：用于控制检测/刷新/动画节奏。默认值 100L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Opacity (0~1)（不透明度 (0~1））
 类型：数值；默认：1.0f
 说明：用于控制透明度。默认值 1.0f 兼顾可见性和遮挡；如果你觉得挡视线可小幅下调，若看不清可小幅上调。
- Blur Strength（模糊强度）
 类型：数值；默认：20.0f
 说明：这是数值型配置。默认值 20.0f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Blur Taps（模糊采样数）
 类型：数值；默认：32
 说明：这是数值型配置。默认值 32 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Dropdown GUI Background (PRO)（下拉式 GUI 背景（专业版））
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Neverlose GUI Background (PRO)（Neverlose GUI 背景（专业版））
 类型：布尔；默认：true（PRO）/ false（免费版）
 说明：HUD Blur 开启且 GUI Blur 未开启时，控制是否对 Neverlose GUI 主窗口矩形绘制 HUD Blur；跟随窗口圆角和菜单动画，不会自动开启 HUD Blur。
- Liquid Blur（液体模糊）
 类型：布尔；默认：false
 说明：用于指定模块实际作用对象。建议先对单个目标测试通过，再扩大到多目标，降低误操作风险。
- Liquid Corner Roundness Rate（液体角落圆角率）
 类型：数值；默认：0.6f
 说明：用于细调显示样式和间距。默认值 0.6f 通常是平衡视觉效果与紧凑度的设置，建议小步调整并实时观察。
- Liquid Thickness Rate（液体厚度占比）
 类型：数值；默认：0.2f
 说明：用于细调显示样式和间距。默认值 0.2f 通常是平衡视觉效果与紧凑度的设置，建议小步调整并实时观察。
- Liquid Edge Width Rate（液体边缘宽度占比）
 类型：数值；默认：0.45f
 说明：用于指定模块实际作用对象。建议先对单个目标测试通过，再扩大到多目标，降低误操作风险。
- Liquid Distortion (px)（液体扭曲（像素））
 类型：数值；默认：10.0f
 说明：用于指定模块实际作用对象。建议先对单个目标测试通过，再扩大到多目标，降低误操作风险。
- Liquid Highlight（液体高光）
 类型：通用；默认：8.f
 说明：用于指定模块实际作用对象。建议先对单个目标测试通过，再扩大到多目标，降低误操作风险。
- Liquid IOR（液体折射率）
 类型：数值；默认：1.5f
 说明：用于指定模块实际作用对象。建议先对单个目标测试通过，再扩大到多目标，降低误操作风险。
- Liquid Scatter Size (px)（液体散射大小（像素））
 类型：数值；默认：1.0f
 说明：用于指定模块实际作用对象。建议先对单个目标测试通过，再扩大到多目标，降低误操作风险。
- Liquid Scatter Directions（液体散射方向数）
 类型：数值；默认：5
 说明：用于指定模块实际作用对象。建议先对单个目标测试通过，再扩大到多目标，降低误操作风险。
- Liquid Scatter Quality（液体散射质量）
 类型：数值；默认：2.0f
 说明：用于指定模块实际作用对象。建议先对单个目标测试通过，再扩大到多目标，降低误操作风险。
- Liquid Flow Strength（液体流动强度）
 类型：数值；默认：0.2f
 说明：用于指定模块实际作用对象。建议先对单个目标测试通过，再扩大到多目标，降低误操作风险。
- Liquid Flow Scale（液体流动比例）
 类型：数值；默认：14.0f
 说明：用于指定模块实际作用对象。建议先对单个目标测试通过，再扩大到多目标，降低误操作风险。
- Liquid Speed（液体速率）
 类型：数值；默认：0.8f
 说明：用于指定模块实际作用对象。建议先对单个目标测试通过，再扩大到多目标，降低误操作风险。
- Liquid Brightness（液体亮度）
 类型：数值；默认：0.8f
 说明：用于指定模块实际作用对象。建议先对单个目标测试通过，再扩大到多目标，降低误操作风险。
## 历史更新
- 35. 为 HUD Blur 添加配置项：
- 58. 添加 HUD Blur 模块，为 HUD 背景添加模糊或者【PRO】液体玻璃效果。需要实时屏幕捕获，会降低性能，但是可以调低频率。

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
[Windows 美丽的窗口局部毛玻璃（非DWM）](https://www.bilibili.com/video/BV1FSiMBUEQd)
