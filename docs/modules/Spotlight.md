# Spotlight
聚光灯
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
Spotlight（聚光灯）用于暂无描述。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Mask Alpha (0~1)、Circle Alpha (0~1)、Animation Duration (ms)。

## 配置项
- Mask Alpha (0~1)（遮罩不透明度 (0~1)）
 类型：数值；默认：0.75f
 说明：这是数值型配置。默认值 0.75f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Circle Alpha (0~1)（圆圈不透明度 (0~1)）
 类型：数值；默认：0.7f
 说明：这是数值型配置。默认值 0.7f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Animation Duration (ms)（动画持续时间 (毫秒)）
 类型：数值；默认：700L
 说明：用于控制检测/刷新/动画节奏。默认值 700L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Circle Radius（圆圈半径）
 类型：数值；默认：75.0f
 说明：用于细调显示样式和间距。默认值 75.0f 通常是平衡视觉效果与紧凑度的设置，建议小步调整并实时观察。
- Mask Color（遮罩颜色）
 类型：枚举；默认："Black"
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Circle Color（圆圈颜色）
 类型：枚举；默认："White"
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
## 历史更新
- 27. 为 Spotlight 模块添加配置：
- 2. Spotlight 模块现在只能通过双击左Ctrl触发。

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
