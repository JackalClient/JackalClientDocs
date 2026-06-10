# MCDisplay
MC显示
分类：Render
描述：显示 Minecraft 的 HUD 元素。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
MCDisplay（MC显示）用于显示 Minecraft 的 HUD 元素。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Hand Left Click Action、Hand Wield Action Rotation Changes (Degrees)、Hand Left Click Action Duration (ms)。

## 配置项
- Crosshair（准星）
 类型：枚举；默认："Vanilla"
 说明：这是选项型配置。默认值 Vanilla 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Off（关闭）；Vanilla（原版）
- Crosshair Color（准星颜色）
 类型：枚举；默认："Smart"
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
 可选：Smart（智能）；其余颜色见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Crosshair Scale（准星缩放）
 类型：数值；默认：1.0f
 说明：这是数值型配置。默认值 1.0f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Crosshair Opacity (0~1)（准星不透明度 (0~1)）
 类型：数值；默认：1.0f
 说明：用于控制透明度。默认值 1.0f 兼顾可见性和遮挡；如果你觉得挡视线可小幅下调，若看不清可小幅上调。
- Hide When In Minecraft（在MC中隐藏）
 类型：布尔；默认：false
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Hand Enabled（启用手部）
 类型：布尔；默认：true
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Hand Scale（手部缩放）
 类型：数值；默认：6.0f
 说明：这是数值型配置。默认值 6.0f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Hand Texture Name（手部贴图名称）
 类型：文本；默认："iron_sword.png"
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Hand X Addition（手部X额外增加）
 类型：数值；默认：0.0f
 说明：这是数值型配置。默认值 0.0f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Hand Y Addition（手部Y额外增加）
 类型：数值；默认：0.0f
 说明：这是数值型配置。默认值 0.0f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Hand Move X Range（手部移动X范围）
 类型：数值；默认：400.0f
 说明：这是数值型配置。默认值 400.0f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Hand Move Y Range（手部移动Y范围）
 类型：数值；默认：1000.0f
 说明：这是数值型配置。默认值 1000.0f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Hand Rotation Base (Degrees)（手部旋转基础值（度））
 类型：数值；默认：-150.0f
 说明：这是数值型配置。默认值 -150.0f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Hand Rotation Turn Coefficient (0~1)（手部旋转变向系数 (0~1)）
 类型：数值；默认：0.35f
 说明：这是数值型配置。默认值 0.35f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Hand Opacity (0~1)（手部不透明度 (0~1)）
 类型：数值；默认：1.0f
 说明：用于控制透明度。默认值 1.0f 兼顾可见性和遮挡；如果你觉得挡视线可小幅下调，若看不清可小幅上调。
- Hand Left Click Action（手部左键行为）
 类型：枚举；默认："Wield"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 Wield ，确认稳定后再逐项切换比较效果。
 可选：Off（关闭）；Wield（挥动）
- Hand Wield Action Rotation Changes (Degrees)（手部挥动动作旋转角度变化（度））
 类型：数值；默认：25.0f
 说明：这是该模块的核心行为开关。默认值 25.0f 通常更稳，建议先验证默认策略再尝试其他模式。
- Hand Left Click Action Duration (ms)（手部左键行为持续时间（毫秒））
 类型：数值；默认：400L
 说明：用于控制检测/刷新/动画节奏。默认值 400L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Hand Right Click Action（手部右键行为）
 类型：枚举；默认："Block"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 Block ，确认稳定后再逐项切换比较效果。
 可选：Off（关闭）；Block（格挡）
- Hand Block Action Rotation Changes (Degrees)（手部格挡动作旋转角度变化（度））
 类型：数值；默认：-45.0f
 说明：这是该模块的核心行为开关。默认值 -45.0f 通常更稳，建议先验证默认策略再尝试其他模式。
## 历史更新
- 33. 为 MC Display 添加配置：
- 60. 修复 MC Display 模块名称少了一个空格导致无法访问配置的问题。
- 7. 将之前的 Minecraft 重命名为 MCDisplay

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
