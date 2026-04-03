Ambience
环境气氛
分类：Render
描述：模拟环境，如天气和光照。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
Ambience（环境气氛）用于模拟环境，如天气和光照。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Mouse Camera Mode。

配置项
- Weather（天气）
 类型：枚举；默认："Rainy"
 说明：这是选项型配置。默认值 Rainy 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Off（关闭）；Rainy（雨天）；Thundery（雷雨天）
- Weather Cycle（天气循环）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Lightning Display（闪电展示）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Lightning Display Duration (ms)（闪电展示时长（毫秒））
 类型：数值；默认：5000L
 说明：用于控制检测/刷新/动画节奏。默认值 5000L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Precipitation Display Position（降水展示位置）
 类型：枚举；默认："Screen"
 说明：这是选项型配置。默认值 Screen 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Screen（屏幕）；Foreground（前端）；Background（背景）
- Precipitation Amount Scale（降水量比例）
 类型：数值；默认：1.0f
 说明：这是数值型配置。默认值 1.0f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Precipitation Fall Speed（降水下落速率）
 类型：数值；默认：1.0f
 说明：这是数值型配置。默认值 1.0f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Precipitation Angle (rad)（降水角（弧度））
 类型：数值；默认：8.168f
 说明：这是数值型配置。默认值 8.168f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Precipitation Increase Speed（降水增多速率）
 类型：数值；默认：10.0f
 说明：这是数值型配置。默认值 10.0f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Precipitation Decrease Speed（降水减少速率）
 类型：数值；默认：5.0f
 说明：这是数值型配置。默认值 5.0f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Precipitation Sound Volume（降水音效音量）
 类型：数值；默认：30
 说明：用于选择结果反馈方式。默认值 30 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Thunder Sound Volume（雷声音量）
 类型：数值；默认：100
 说明：用于选择结果反馈方式。默认值 100 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Rain Shape（雨形状）
 类型：文本；默认："/"
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Mouse Camera Mode（鼠标相机模式）
 类型：布尔；默认：false
 说明：这是该模块的核心行为开关。默认值 false 通常更稳，建议先验证默认策略再尝试其他模式。
- Mouse Camera X Rate（鼠标相机 X 比率）
 类型：数值；默认：1.0f
 说明：用于控制界面元素在屏幕中的相对位置。默认值 1.0f 一般是作者调过的稳定布局；建议每次只改一个轴，避免元素跑出可视区域。
- Mouse Camera Y Rate（鼠标相机 Y 比率）
 类型：数值；默认：1.0f
 说明：用于控制界面元素在屏幕中的相对位置。默认值 1.0f 一般是作者调过的稳定布局；建议每次只改一个轴，避免元素跑出可视区域。
- Precipitation Mouse Circle（降水鼠标圆圈）
 类型：枚举；默认："Off"
 说明：这是选项型配置。默认值 Off 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Off（关闭）；Hide（隐藏）；Fade（淡入淡出）；Lighten（未收录）；Darken（未收录）
- Precipitation Mouse Circle Radius（降水鼠标圆圈半径）
 类型：数值；默认：200.0f
 说明：用于细调显示样式和间距。默认值 200.0f 通常是平衡视觉效果与紧凑度的设置，建议小步调整并实时观察。
- Rain Color（雨颜色）
 类型：枚举；默认："Blue"
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
历史更新
- 50. 添加模块：Ambience。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [Arraylist (模块列表)](./Arraylist.md)
- [AutoDanmaku (自动弹幕)](./AutoDanmaku.md)
- [AutoTitle (自动标题)](./AutoTitle.md)
- [AutoTotem (自动图腾)](./AutoTotem.md)
- [AudioVisualizer (音频可视化)](./AudioVisualizer.md)
- [LyricsPhysics (物理歌词)](./LyricsPhysics.md)
- [BetterLyrics (更好的歌词)](./BetterLyrics.md)
- [MusicOverlay (音乐信息)](./MusicOverlay.md)

相关资料
[夏天到了 我的电脑一直下雨](https://www.bilibili.com/video/BV1TSEAzHEsf)

