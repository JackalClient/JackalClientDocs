# AutoTitle
自动标题
分类：Render
描述：根据规则自动启用标题模块。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
AutoTitle（自动标题）用于根据规则自动启用标题模块。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Mode、Smart Mode Speed。

## 配置项
- Mode（模式）
 类型：枚举；默认："Periodic"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 Periodic ，确认稳定后再逐项切换比较效果。
 可选：Periodic（周期性）；Random（随机）；Smart（智能）
- Periodic Interval (ms)（周期性间隔 (毫秒)）
 类型：数值；默认：10000L
 说明：用于控制检测/刷新/动画节奏。默认值 10000L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Random Min Interval (ms)（最小随机间隔 (毫秒)）
 类型：数值；默认：20000L
 说明：用于控制检测/刷新/动画节奏。默认值 20000L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Random Max Interval (ms)（最大随机间隔 (毫秒)）
 类型：数值；默认：120000L
 说明：用于控制检测/刷新/动画节奏。默认值 120000L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Smart Mode Speed（智能模式速率）
 类型：数值；默认：1.0f
 说明：这是该模块的核心行为开关。默认值 1.0f 通常更稳，建议先验证默认策略再尝试其他模式。
## 历史更新
- 25. 现在 Auto Title 每次调用 Title 将不会出现通知。

## 备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

## 相关命令
无

## 相关模块
- [Arraylist (模块列表)](./Arraylist.md)
- [Ambience (环境气氛)](./Ambience.md)
- [AutoDanmaku (自动弹幕)](./AutoDanmaku.md)
- [AutoTotem (自动图腾)](./AutoTotem.md)
- [AudioVisualizer (音频可视化)](./AudioVisualizer.md)
- [LyricsPhysics (物理歌词)](./LyricsPhysics.md)
- [BetterLyrics (更好的歌词)](./BetterLyrics.md)
- [MusicOverlay (音乐信息)](./MusicOverlay.md)

## 相关资料
无
