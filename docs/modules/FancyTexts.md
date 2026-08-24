# FancyTexts
花式文字
分类：Render
描述：显示一些带有动画和特效的花哨文字。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
FancyTexts（花式文字）用于显示一些带有动画和特效的花哨文字。
模仿 PV 效果。
如果你想实现 `实时PV` ，可以参考底部的视频，配合 `BetterLyrics 更好的歌词` 模块使用。

## 配置项
- Dedicated Font（独立字体）
 类型：布尔；默认：true
 说明：为 FancyText 单独建立高分辨率字体图集，不提高全局字体的导入大小；关闭后回退到全局字体。
- Dedicated Font Import Size（独立字体导入大小）
 类型：数值；默认：128
 说明：控制 FancyText 专用字体图集的导入尺寸。调大可减少大字号文字的模糊，但会增加该专用图集的显存占用。
- Dedicated Font Max Codepoints（独立字体最大码点数）
 类型：数值；默认：400
 说明：限制 FancyText 专用图集缓存的动态码点数量。超过上限时会淘汰最久未使用的字符；正在入场、显示、退场或等待预布局播放的文字会保留到动画结束，弹跳物理退场也会继续使用对应语言字体。
- Dedicated Font Strict Character Language（独立字体严格字符语言判定）
 类型：布尔；默认：true
 说明：开启时按字符编码分别使用中文、英文或日文字体；关闭时按整句中占比最高的语言选择字体，并保持每句歌词在显示期间使用同一字体。
- Japanese Song Detection（日语歌曲判定）
 类型：布尔；默认：true
 说明：开启后，整首歌的假名占比大于 30% 时视为日语歌；单句假名占比大于 50% 时也视为日语歌词。日语歌或日语歌词中的汉字优先使用日文字体。歌曲判定只用于歌词自动生成的 FancyText，手动触发的文字始终按自身内容判定。
- Dedicated Font Path (Default)（独立字体路径（默认））
 类型：文本；默认："GoogleSans.ttf"
 说明：无法明确判断语言时使用的 FancyText 专用字体。只写文件名时先从 assets 目录查找，再从 `C:\Windows\Fonts` 查找；包含 `/` 或 `\` 时按填写的绝对或相对路径查找。
- Dedicated Font Path (Chinese)（独立字体路径（中文））
 类型：文本；默认："GoogleSans.ttf"
 说明：明显中文歌词使用的 FancyText 专用字体。路径规则同 Dedicated Font Path (Default)。
- Dedicated Font Path (English)（独立字体路径（英文））
 类型：文本；默认："GoogleSans.ttf"
 说明：明显英文歌词使用的 FancyText 专用字体。路径规则同 Dedicated Font Path (Default)。
- Dedicated Font Path (Japanese)（独立字体路径（日文））
 类型：文本；默认："GoogleSans.ttf"
 说明：明显日文歌词使用的 FancyText 专用字体。ORBIT 布局只会用于 CJK 字符占比大于 90% 且至少包含一个平假名或片假名的日文文本。

BetterLyrics 使用 Fancy 显示模式时，手动触发的 FancyText 不会被后续歌词自动退场，会按自身动画时长显示。

FancyText 还会随机使用短句收拢/展开、左对齐镜像竖排运镜，以及逐字不同速度的横向字符雨入场与下坠退场效果。

文字可低概率叠加纵向翻转倒影或缓慢漂移的虚影。方块遮罩只覆盖部分字符，并以 EaseOutCubic 展开后从另一侧收缩。中文或日文内容有 5% 概率附带小字号英文单词装饰，其中 20% 使用大字距，宽度会自动限制在屏幕范围内。

- English Decoration Chance (0~1)（英文装饰概率（0~1））
 类型：小数；默认：0.05
 说明：控制中文或日文内容生成英文单词装饰的概率。
- English Decoration Scale（英文装饰缩放）
 类型：小数；默认：1.0
 说明：控制英文单词装饰的字号缩放，运行时限制在 0.1 到 3.0。
- Async（异步）
 类型：布尔；默认：true
 说明：用于控制是否异步处理。默认值 true 通常能减少主线程卡顿；若你遇到并发相关问题，可回退到更保守设置测试。
- Hide When Menu On（菜单打开时不显示）
 类型：布尔；默认：false
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Module Status Auto Switch（模块状态自动切换）
 类型：布尔；默认：true
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Show Duration (ms)（显示时长（毫秒））
 类型：数值；默认：3000L
 说明：用于控制检测/刷新/动画节奏。默认值 3000L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Scale（比例）
 类型：数值；默认：100
 说明：这是数值型配置。默认值 100 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Fixed Text（固定文本）
 类型：文本；默认："阿诺头顶怎么尖尖的"
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Cut Words（分词）
 类型：枚举；默认："Single"
 说明：这是选项型配置。默认值 Single 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Single（单个）；Double（两个）；Bili Suggestion（哔哩建议）；API（未收录）；API 2（未收录）
- Single（单个）
 类型：文本；默认："Double", "Bili Suggestion", "API", "API 2"
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Color（颜色）
 类型：枚举；默认："Colorful"
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
 可选：Flow（流动）；其余颜色见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Flow（流动）
 类型：通用；默认：NAMED_COLOR_BASE_LIST
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Random Rotation（随机旋转）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Random Rotation Start Coefficient（随机旋转起始系数）
 类型：数值；默认：1.0f
 说明：这是数值型配置。默认值 1.0f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Random Rotation End Coefficient（随机旋转结束系数）
 类型：数值；默认：1.0f
 说明：这是数值型配置。默认值 1.0f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Fog Enabled（启用雾效果）
 类型：布尔；默认：false
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Fog Opacity (0~1)（雾不透明度 (0~1)）
 类型：数值；默认：0.6f
 说明：用于控制透明度。默认值 0.6f 兼顾可见性和遮挡；如果你觉得挡视线可小幅下调，若看不清可小幅上调。
- Fog Color（雾颜色）
 类型：枚举；默认："Black"
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
 可选：Transparent（透明）；其余颜色见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Parallax Intensity（视差强度）
 类型：数值；默认：0.8f
 说明：这是数值型配置。默认值 0.8f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Fade In Duration (ms)（淡入时长（毫秒））
 类型：数值；默认：500L
 说明：用于控制检测/刷新/动画节奏。默认值 500L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Fade Out Duration (ms)（淡出时长（毫秒））
 类型：数值；默认：800L
 说明：用于控制检测/刷新/动画节奏。默认值 800L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Opacity Min (0~1)（不透明度最小值 (0~1)）
 类型：数值；默认：0.7f
 说明：用于控制透明度。默认值 0.7f 兼顾可见性和遮挡；如果你觉得挡视线可小幅下调，若看不清可小幅上调。
- Opacity Max (0~1)（不透明度最大值 (0~1)）
 类型：数值；默认：0.9f
 说明：用于控制透明度。默认值 0.9f 兼顾可见性和遮挡；如果你觉得挡视线可小幅下调，若看不清可小幅上调。
- Opacity Period (ms)（不透明度周期（毫秒））
 类型：数值；默认：6000L
 说明：用于控制透明度。默认值 6000L 兼顾可见性和遮挡；如果你觉得挡视线可小幅下调，若看不清可小幅上调。
## 历史更新
- v1.1.6：独立字体默认最大码点数调整为 400，降低大字号字体图集因字符过多而显示异常的风险；BiliVideoHelper 字幕使用 Fancy 时，视频暂停或结束后文字与背景会正常淡出。
- 35. 改良 Fancy Text 的渲染，添加了三种新布局: 阻止元素超出屏幕范围
- 36. 为 Fancy Text 添加配置：
- 32. 添加新模块：FancyTexts，显示花哨的文字。

## 备注
配合更好的歌词模块使用更佳。

## 相关命令
- `/fancytext [content...]`
- 显示花式文字。

## 相关模块
- [BetterLyrics (更好的歌词)](./BetterLyrics.md)
- [AudioVisualizer (音频可视化)](./AudioVisualizer.md)
- [LyricsPhysics (物理歌词)](./LyricsPhysics.md)

## 相关资料
视频演示：[C++根据音乐实时生成文字PV (?)](https://www.bilibili.com/video/BV15b9GB8EX5)
视频演示：[【实时PV】Credits EX - Frums](https://www.bilibili.com/video/BV1Rw9uBnEdQ)
视频演示：[【C++实时PV】サイエンス (科学) /MIMI feat.重音テトSV](https://www.bilibili.com/video/BV1MY536nEFp)
