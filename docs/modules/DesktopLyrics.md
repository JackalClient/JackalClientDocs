# Desktop Lyrics
桌面歌词
分类：Render（位于 Karaoke 上方）
描述：显示 Better Lyrics 的滚动桌面歌词。

## 需求
- 安全级别：常规模块
- 权限需求：无；歌词来源需在 Better Lyrics 或 Bili Video Helper 中配置
- 驱动依赖：本模块无需驱动；歌词来源的依赖以所选模式为准
- 联网需求：取决于歌词、字幕及翻译来源
- 开发状态：稳定/常规
- 版本属性：普通可用；带 PRO 标记的来源或效果需要 PRO

## 介绍
Desktop Lyrics 是 Better Lyrics 的桌面歌词输出组件。可直接启用本模块，自动在 Better Lyrics 的 Display Components 中勾选 Desktop Lyrics 并保留其他组件，也可先从 Better Lyrics 选择该组件；位置、动画、逐字效果、颜色和译文布局始终在本模块调节。Driver (PRO) 与 SMTC 模式会提供历史句和后续句；OCR 与 Hook Render 仅显示当前句和历史句。HudEditor 可拖动位置并缩放。

Bili Video Helper 的 Subtitles Display 也可选择 Desktop Lyrics，无需开启 Better Lyrics，视频助手会自动启用本模块，并按视频 SMTC 时间轴显示字幕原文、译文及前后句。提供视频歌词时，可在 Better Lyrics 的 Display Components 中选择 Desktop Lyrics，获得同样的时间轴显示。视频暂停时沿用 Pause Behavior，跳转会直接重建对应句及前后句；字幕空档不残留上一句。仅当前句索引或视频来源变化时触发滚动，刷新进度或译文不会重置动画。退出视频来源后恢复歌曲输出。

Bili Video Helper 的 Island 字幕与歌曲桌面歌词互相独立，字幕刷新不会重复添加歌曲当前句，也不会重置歌曲桌面歌词的滚动时间。

Background 选择 All、Current 或 Seperate 时，背景矩形会接入 HUD Blur，兼容 Legacy 与 Experimental 后端；需要开启 HUD Blur 模块才会生效。模糊区域跟随背景尺寸缓动和 Background Roundness；模糊层使用独立的 Background Blur Opacity (0~1)，默认 1，不再乘以背景填充不透明度，但仍受 HUD Blur 模块的全局透明度影响。逐行模式下，模糊层与填充层均保留既有阶梯透明度衰减；Background 为 Off 时不申请背景模糊。此效果模糊背景，不改变 Blur 分组控制的歌词文字模糊。

Background 分组新增 Background Color，使用统一颜色选择器，默认 Black，支持固定颜色和 Sin 颜色；Background Opacity (0~1) 只控制该颜色的填充透明度。Background Blur Opacity (0~1) 与 Background Color 都仅在 Background 不为 Off 时显示。旧配置缺少新项时，分别按模糊层透明度 1 和黑色背景处理。

Pause Behavior 为 Hide 时，歌词文字、All / Current / Seperate 背景填充、阴影与 HUD Blur 会一起淡出，完全隐藏后不再绘制背景或申请背景模糊。Only Show Current 模式下，非当前行的逐行背景与模糊也会随对应歌词一起隐藏。

## 鼠标避让

Opacity 分组新增 `Give Way to Mouse`，默认开启；`Give Way to Mouse Mode` 仅在避让开启时显示，默认 `Fade Partial`，也可选择 `Fade All`。

- `Fade Partial`：只淡出鼠标经过的那一句歌词及其译文，其他句子保持原透明度。鼠标经过 Above / Below 译文时也会命中所属歌词句；Current / Seperate 的对应行背景填充、阴影和 HUD Blur 同步淡出。All 共用背景保持不变，避免影响其他句子。
- `Fade All`：鼠标经过任一句歌词、译文或可见背景时，全部歌词和译文一起淡出，包括背景填充、阴影和 HUD Blur。

避让按当前动画位置判断，不改变布局、滚动、逐字进度或原透明度配置。淡出平滑过渡到原不透明度的 20%，移开鼠标后平滑恢复；关闭避让或开启 HUD Editor 时恢复正常显示，便于拖动和缩放。切换歌词来源时清除旧的避让状态。

## 高级语素高亮（PRO）

所有设置集中在 `Advanced Highlight` 分组，默认不勾选语素，不改变现有显示。免费版不会执行高级高亮；勾选后才显示统一模式和译文高亮开关。

- `Advanced Highlight (PRO)` 支持多选 Keywords、Chinese Word、CJK Sentence、Japanese Hiragana、Japanese Katakana、Punctuation、Parentheses、Square Brackets、Quotes。
- Keywords 复用灵动岛的 `IslandLyricsKeywordColors.txt`，包含相同的大小写、整词匹配和长词优先规则，不要求开启 Island 或岛内关键词开关。
- Chinese Word 只在本地判断为中文、且不包含假名或韩文的文本中使用 Jieba 分词；不调用在线语言识别。纯汉字的日文无法仅凭字符与中文可靠区分。
- CJK Sentence 按空格、制表符、全角空格等 Unicode 空白分段，仅处理包含中日韩或其他无空格书写字符的片段，不给纯英文片段分句着色。平假名、片假名各自按连续字符形成语素。
- Punctuation 处理国际标点；Parentheses / Square Brackets 将匹配括号及其内部视为整体，至少支持 `()` / `（）`、`[]` / `【】`；Quotes 支持国际单双引号、`「」` 和 `『』`。必须按配置正确配对，忽略转义，`it's`、`don’t` 内部撇号不被误当作引语。
- `Advanced Highlight Strength (0~1)` 默认 0.5，仅在统一模式不为 Off 时显示并生效；0 不改变原色，1 完全使用目标颜色或透明度。
- `Advanced Highlight Unified Mode` 默认 Jitter，可选 Off、Jitter、Colorful、Rainbow、Darken、Brighten、Custom。Custom 才显示统一颜色，默认 Flow，可选 RGBA 和 Sin；Flow 使用实际流动着色器，并在着色器中按力度与原色混合。
- 统一模式为 Off 时，仅显示已勾选语素的 `XXX Highlight Mode` 和 `XXX Highlight Strength (0~1)`，包括 Keywords 在内的全部九类均可独立设置。模式默认 Jitter，支持 Jitter、Colorful、Rainbow、Fade、Darken、Brighten、Custom；力度默认 0.5，不受隐藏的统一力度影响。独立模式选择 Custom 才显示对应颜色，默认 RGBA 金色，支持自定义 Alpha。关键词匹配继续复用灵动岛词典，着色由所选模式控制。
- Jitter 在原色附近稳定抖色；Colorful 生成明显不同的色相；紧邻的相同语素会保持同色而非逐字闪烁。Rainbow 按下一可见语素推进色相；Fade、Darken、Brighten 为不同语素分配稳定的不同强度，不逐帧随机跳色。

`Advanced Highlight Affects Translation` 默认开启，控制 Above / Below 独立译文与 Override 替换译文是否参与高级高亮，也覆盖译文的逐字与临时退场绘制。关闭后译文保留原本颜色，原文、历史句和未来句仍可高亮；不改变 `Per-Char Affects Translation` 的逐字动画行为。逐字 Tint / Fade / Karaoke、入场动画、文字模糊、鼠标避让和现有透明度仍生效；不重置歌词进度。重叠时，关键词优先；成对内容优先于其中的普通分词与标点，嵌套时较内层优先。

字符集统一维护在 Ricochesta `data/TextHighlightRules.json`，不带 DesktopLyrics 名称，供其他文字组件复用。文件包含 `Punctuation`、`Apostrophes`、`Parentheses`、`Square Brackets`、`Quotes`，完整校验后整体替换，仅启动时刷新，下载失败保留有效缓存。不在客户端 assets 保存副本；首次离线且无缓存时仍可使用分词、假名和关键词高亮。云控本地改动需要另行发布后才能被客户端下载。

## 配置分组
文字模糊开启时，历史、未来歌词及译文的重叠字形会正确合成透明边缘，避免相邻字符出现缺口或异常像素；无需调整字距、字号或现有布局。

- Layout：对齐、每侧行数、最大宽度、字体大小、缩放、行距与屏幕位置。
- `Same Lines Per Side` 默认开启，沿用 `Lines Per Side (1~8)` 同时设置历史与未来行数。关闭后隐藏该项，改为分别显示 `Lines (Future)` 与 `Lines (History)`，默认分别为 2 和 1，范围均为 1～8。
- `Line Spacing (0~40)` 表示相邻歌词块之间的空隙。每句会按实际显示的 Above / Below 译文自动扩展占用高度，空隙从译文边缘计算；无译文时恢复普通行距，Override 不额外占行，无需按每句是否有译文手动调节。
- Blur：Blur Mode (PRO) 为专业版独有，默认 Off；专业版支持 Off、Temp、Stepped 和 Global，免费版仅提供 Off，并在加载配置及绘制时强制关闭，导入专业版配置也不能启用文字模糊。旧 Blur Mode 及更早的 Desktop Lyrics Blur Mode 会自动迁移到新名称，专业版保留原选择，不覆盖已保存的新配置。Blur Intensity (0~1) 控制模糊强度，Blur Enhancement Passes (1~16) 控制模糊叠加强度，两项仅在模糊模式不为 Off 时显示。Temp 只对最下方入场行和最上方出场行按平滑过渡进度模糊，入场同时由透明渐显，出场同时渐隐；Stepped 让当前歌词向两侧逐级增强模糊；Global 以相同强度模糊全部歌词及译文。模糊开启时，当前句的 Tint/Fade 逐字效果仍然生效。本次版本限制仅针对歌词文字模糊，不影响 Background 分组的 HUD Blur 背景接入。
- Animation：Garble Slide、Garble Dissolved、Unfold、Slide In (PRO) 入场效果及时长；Position Easing 控制歌词行纵向过渡。专业版新增默认开启的 `Future Scroll Lag (PRO)`，只让 Future 歌词在向上滚动时逐行滞后，当前句和历史句不等待。`Future Scroll Delay (ms) (PRO)` 默认 80，范围 0～500 毫秒，表示每行递增延迟：下方第一行等待 80 毫秒、第二行等待 160 毫秒，以此类推；译文跟随所属行。两项位于 Animation 分组，Position Easing 为 Off 时隐藏并停用，关闭滞后时隐藏延迟设置；免费版即使导入专业版配置也不会启用滞后。延迟不改变时间轴、逐字进度，倒退跳转和切换来源不会沿用上次的等待。
- Per-Character：Animation、Tint、Fade 和 Karaoke (PRO) 统一优先跟随 Driver、SMTC 或视频歌词/字幕的句内进度；没有时间轴时，按 `Per-Char Update Interval (ms)` 乘以原始整句字符数推算，不依赖入场动画是否开启。Animation 模式使用逐字进度控制所选入场效果，需将 Animation 设为非 Off；此时动画时长设置隐藏。Tint 不再提前整句染色，Fade 的未读字符透明度默认为 0.5，正在读取的字符渐显；Karaoke 保留连续扫色。逐字绘制统一补齐字距并保留浮点字宽，避免正文与译文的对齐偏差；入场变换按完整文本宽度定位，避免未展开或乱码文本改变对齐基准。
- Opacity：统一、阶梯或当前/其他歌词透明度，以及暂停时的显示行为和鼠标避让设置。
- Lyrics Colors：当前、历史和未来歌词分别设置颜色。
- Translation：Override、Above、Below 布局；可选显示其他行译文，并分别设置当前、历史和未来译文颜色。新到达的译文会淡入。
- SMTC：Desktop Lyrics SMTC Progress Rate (0~2) 用于校准 SMTC 每句歌词的进度，默认 1.0。

SMTC 倍率大于 1.0 会让逐句进度更快，小于 1.0 会让进度更慢；它只影响 SMTC，不改变按动画时长运行的入场动画。

## 全屏窗口隐藏

- `Hide In Fullscreen Window`（全屏窗口时隐藏）：布尔，默认 `true`。
- 开启后，前台窗口为无边框全屏或独占全屏时自动隐藏显示；退出全屏或切换到普通窗口后恢复。普通带标题栏的最大化窗口不会触发，支持多显示器。
- 此选项只隐藏画面，不关闭模块或停止后台功能；HUD Editor 开启时保留显示，便于编辑布局。
