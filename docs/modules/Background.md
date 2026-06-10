# Background
背景
分类：Render
描述：客户端背景设置。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
Background（背景）用于客户端背景设置。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Screen Mode Redraw Client Texture、Screen Compensation Cooldown (ms)。

## 配置项
- Filter Type（滤镜类型）
 类型：枚举；默认："Flow"
 说明：用于限定作用范围，避免误触发。建议先用小样本验证规则，再逐步扩展；涉及正则时优先从简单规则开始。
 可选：Off（关闭）；Shader Offline（离线着色器）；Shader Online（在线着色器）；Flow（流动）；其余颜色见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Filter Opacity (0~1)（滤镜不透明度 (0~1)）
 类型：数值；默认：0.5f
 说明：用于控制透明度。默认值 0.5f 兼顾可见性和遮挡；如果你觉得挡视线可小幅下调，若看不清可小幅上调。
- Filter Shader Offline Path（滤镜离线着色器路径）
 类型：文本；默认：""
 说明：用于限定作用范围，避免误触发。建议先用小样本验证规则，再逐步扩展；涉及正则时优先从简单规则开始。
- Filter Shader Online Name（滤镜在线着色器名称）
 类型：文本；默认：""
 说明：用于限定作用范围，避免误触发。建议先用小样本验证规则，再逐步扩展；涉及正则时优先从简单规则开始。
- Lightness (0~1)（亮度 (0~1)）
 类型：数值；默认：0.8f
 说明：这是数值型配置。默认值 0.8f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Hide Filter When No Focus（无焦点时隐藏滤镜）
 类型：布尔；默认：true
 说明：用于限定作用范围，避免误触发。建议先用小样本验证规则，再逐步扩展；涉及正则时优先从简单规则开始。
- When to Apply Filter（何时应用滤镜）
 类型：枚举；默认："Menu On"
 说明：用于限定作用范围，避免误触发。建议先用小样本验证规则，再逐步扩展；涉及正则时优先从简单规则开始。
 可选：Always（总是）；Menu On（打开菜单）；Menu Off（关闭菜单）
- Screen Compensation（屏幕补偿）
 类型：布尔；默认：false
 说明：这是开关型配置。默认值 false 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Screen Compensation Faster（让屏幕补偿更快）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Screen Mode Redraw Client Texture（屏幕模式重绘客户端贴图）
 类型：布尔；默认：true
 说明：这是该模块的核心行为开关。默认值 true 通常更稳，建议先验证默认策略再尝试其他模式。
- When to Apply Screen Compensation（何时应用屏幕补偿）
 类型：枚举；默认："Always"
 说明：这是选项型配置。默认值 Always 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Always（总是）；Menu On（打开菜单）；Menu Off（关闭菜单）
- Screen Compensation Cooldown (ms)（屏幕补偿冷却(毫秒)）
 类型：数值；默认：250U
 说明：用于控制检测/刷新/动画节奏。默认值 250U 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
## 历史更新
- 45. 修复了 Background 的滤镜。之前那个太不明显了。
- 34. 将 GUI 选项中的 Enabled Module Color 重命名为 Module Background Color (Enabled)
- 9. 为未启用的模块的背景颜色添加GUI选项：Module Background Color。颜色可选：

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
