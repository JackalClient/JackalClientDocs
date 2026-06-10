# Tint
染色
分类：Render
描述：应用全局颜色到客户端纹理。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
Tint（染色）用于应用全局颜色到客户端纹理。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Mode、Screen Capture Cooldown (ms)。

## 配置项
- Mode（模式）
 类型：枚举；默认："Preset"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 Preset ，确认稳定后再逐项切换比较效果。
 可选：Static（静态）；Preset（预设）
- (Current Color)（(当前颜色)）
 类型：文本；默认："255;255;255"
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
- Static Color（静态颜色）
 类型：文本；默认："200;210;255"
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
- Preset Color（预设颜色）
 类型：枚举；默认："Aqua-Pink"
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Screen Capture Cooldown (ms)（屏幕捕获冷却（毫秒））
 类型：数值；默认：1000L
 说明：用于控制检测/刷新/动画节奏。默认值 1000L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Screen Samples（屏幕采样数）
 类型：数值；默认：1024
 说明：这是数值型配置。默认值 1024 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Coefficient（系数）
 类型：数值；默认：1.0f
 说明：这是数值型配置。默认值 1.0f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
## 历史更新
无（HISTORY 中暂无明确记录）

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
