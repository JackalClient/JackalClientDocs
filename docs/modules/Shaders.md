# Shaders
着色器
分类：Render
描述：暂无描述

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
Shaders（着色器）用于暂无描述。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Screen Mode Update Cooldown、Screen Mode Redraw Client Texture。

## 配置项
- Apply Area（应用区域）
 类型：枚举；默认："Client Only"
 说明：这是选项型配置。默认值 Client Only 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Client Only（仅客户端）；Screen（屏幕）
- Style（风格）
 类型：枚举；默认："bloom"
 说明：这是选项型配置。默认值 bloom 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：bloom（泛光）；bloom_time（泛光_time）；blur（模糊）；cross_hatching（未收录）；cross_stitching（未收录）；dispersion（未收录）；dream_vision（未收录）；flash_shake（flash_抖动）；mvp（未收录）；old（老版）；pixelizer_time（未收录）；shadow_glitch（阴影_glitch）；sobel（未收录）
- Blur Strength（模糊强度）
 类型：数值；默认：2.0f
 说明：这是数值型配置。默认值 2.0f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Blur Samples（模糊取样数）
 类型：数值；默认：5
 说明：这是数值型配置。默认值 5 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Bloom Samples（泛光采样数）
 类型：数值；默认：1.0f
 说明：这是数值型配置。默认值 1.0f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Bloom Quality（泛光质量）
 类型：数值；默认：0.2f
 说明：这是数值型配置。默认值 0.2f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Bloom Intensity（泛光强度）
 类型：数值；默认：0.3f
 说明：这是数值型配置。默认值 0.3f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Screen Mode Update Cooldown（屏幕模式更新冷却）
 类型：数值；默认：33U
 说明：用于控制检测/刷新/动画节奏。默认值 33U 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Screen Mode Redraw Client Texture（屏幕模式重绘客户端贴图）
 类型：布尔；默认：true
 说明：这是该模块的核心行为开关。默认值 true 通常更稳，建议先验证默认策略再尝试其他模式。
- Screen Compensation Faster（让屏幕补偿更快）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Flow Text Theme Period (s)（流动文本主题周期（秒））
 类型：数值；默认：300L
 说明：用于控制检测/刷新/动画节奏。默认值 300L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Flow Text Speed（流动文本速率）
 类型：数值；默认：1.0f
 说明：这是数值型配置。默认值 1.0f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Flow Text Scale（流动文本缩放）
 类型：数值；默认：6.0f
 说明：这是数值型配置。默认值 6.0f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Flow Text Noise Amount（流动文本噪音数量）
 类型：数值；默认：0.6f
 说明：这是数值型配置。默认值 0.6f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Flow Text Brightness（流动文本亮度）
 类型：数值；默认：1.2f
 说明：这是数值型配置。默认值 1.2f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Flow Text Depth（流动文本深度）
 类型：数值；默认：0.6f
 说明：这是数值型配置。默认值 0.6f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
## 历史更新
- 4. 在 Shader 模块 (bloom模式) 开启后，LiveStream 的观众头像亮度将会降低。
- 30. 修复 Screen 范围的其他 Shader 无法生效的问题。
- 5. 为模块 Shader 添加配置：

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
