# ParticleLyrics
粒子歌词
分类：Render
描述：将 BetterLyrics 当前歌词拼成大量粒子，换句时旧句打散退场并在新位置汇聚新句。

## 需求
- 版本：专业版（PRO）
- 权限：无需管理员权限或 Windows 驱动
- 配合模块：BetterLyrics；联网需求取决于歌词来源

## 使用

开启 BetterLyrics 后，在 Display Components 中选择 **Particle Lyrics (PRO)**，会自动开启本模块；也可以直接开启 ParticleLyrics，自动勾选该组件并保留其他展示方式。取消组件选择或关闭本模块即可停止粒子显示。Display Mixed Mode 开启时沿用混合输出。

本模块位于 Render 分类的 DesktopLyrics 之后。默认显示歌词原文，在 BetterLyrics 的 Components Translation 中勾选 **Particle Lyrics (PRO)** 后显示对应译文，沿用 Translation Language 与 Components Translation Source。粒子沿真实字形排布；新句到达时独立汇聚，旧句完成入场与短暂停留后再打散退场，连续短句可以同时出现而不会被立即替换；跳转进度时会重新对齐时间轴。空歌词或切歌清理时，旧粒子散开并淡出。打开普通 GUI 保留当前动画与歌词位置。

## 位置与排版

| 配置 | 默认 | 说明 |
| --- | --- | --- |
| Position Mode | Center Drift | Fixed 固定中心；Center Drift 每句围绕中心随机偏移；Random 在全屏随机放置 |
| Center X Rate / Center Y Rate | 0.7 / 0.5 | 屏幕宽、高的中心位置比例；Random 模式下隐藏 |
| Center Drift Radius (0~1) | 0.18 | 中心偏移范围，分别相对于屏幕宽、高 |
| Font Size (16~160) | 160 | 字号；过大的歌词块会自动缩小以适应屏幕 |
| Max Line Width Rate (0~1) | 0.3 | 每行最大宽度比例，长句自动换行；最低有效比例为 0.05 |
| Line Spacing (0~80) | 30 | 自动换行及原文换行后的额外行距 |
| Multi-line Alignment | Center | 换行后的各行居中、左对齐或右对齐，可选 Center / Left / Right |
| Rotation Mode | Random | Off 保持水平；Random 每句随机选择一次角度 |
| Rotation Range (0~180) | 3 | 在 -3° 至 +3° 内随机，调整后按对应正负范围取值 |
| Relative Rotation Mode | Off | Off 跟随整句旋转；Phrase 按词语、Character 按字符叠加固定的随机相对角度 |
| Relative Rotation Range (0~180) | 5 | 相对角度的正负上限，默认 -5° 至 +5°；相对旋转开启时显示 |
| Hide In Fullscreen Window | false | 可选择在前台窗口全屏时隐藏 |

每句的位置和角度保持到下一句；刷新字体不会重新随机。位置范围按换行、旋转后的整个歌词块计算，避免超出屏幕，粒子移动与晃动也受屏幕边界限制。

开启 HUD Editor 后，可拖动歌词区域或中心十字，修改 Center X Rate / Center Y Rate，也可通过编辑器调整字号。编辑期间按设定中心展示，方便定位；退出编辑器后恢复 Position Mode。Random 模式使用全屏随机位置，设定中心用于 Fixed 和 Center Drift。暂无歌词时，开启 HUD Editor 预览可使用示例文字定位。

Phrase 复用 DesktopLyrics 高级高亮的语素识别：中文按词语划分，英文按单词划分，日语按汉字、平假名、片假名的连续片段划分。中文分词依赖 CppJieba 扩展，下载期间沿用临时分词，扩展就绪后自动刷新。各单元的相对角度在本句内保持稳定，旋转后的完整字形仍计入屏幕边界。

## 文本过滤

| 配置 | 默认 | 说明 |
| --- | --- | --- |
| Remove Punctuation | true | 将标点替换为空格，保留「」、“”等引号 |
| Remove Parentheses And Brackets | true | 删除成对的 ()、（）、[]、【】等括号及其中内容，支持嵌套 |

过滤在排版前进行，对当前选中的原文或译文生效。标点集合、引号及括号配对复用 DesktopLyrics 高级高亮的在线规则；未配对的括号不删除其后的正文。

## 颜色与粒子

| 配置 | 默认 | 说明 |
| --- | --- | --- |
| Color Mode | Gradient | Default 使用 Color 1；Gradient 使用双色渐变 |
| Color 1 | White | 第一种颜色，使用统一颜色选择器 |
| Color 2 | Aqua | 渐变的第二种颜色，仅 Gradient 显示 |
| Gradient Direction (-180~180) | 45 | Color 1 到 Color 2 的屏幕方向；0 向右，90 向上，45 向右上 |
| Particle Density (0~1) | 0.13 | 从稀疏轮廓到密集字形，最高 24000 个粒子 |
| Particle Size (0.4~3) | 2.0 | 单个粒子半径 |
| Particle Base Opacity (0~1) | 1.0 | 粒子基准不透明度 |
| Particle Opacity Mode | Fixed | Fixed 统一；Radial 每个字符外淡内浓；Random 随机分布；Flicker 在随机分布上正弦闪烁 |
| Particle Opacity Amplitude (0~1) | 0.5 | 随机不透明度与正弦闪烁的振幅；为 0 时不随机变化、不闪烁，在 Random 或 Flicker 显示 |
| Particle Flicker Speed (0~1) | 0.5 | 正弦闪烁速度，各粒子相位独立，仅 Flicker 显示 |

Random 为每个粒子分配固定的不透明度；Flicker 在此基础上乘以平滑的正弦明暗变化，各粒子错相闪烁。两者的变化幅度均由 Particle Opacity Amplitude 控制，振幅为 0 时保持基准不透明度；基准不透明度为 0 时全部透明。可降低密度改善性能，也可提高字号并适当减小粒子半径，让字形更清晰。

## 动画与晃动

| 配置 | 默认 | 说明 |
| --- | --- | --- |
| Adaptive Lyric Timing | true | 已知当前句时长时加快短句粒子转场，保留各字符设定的入场时长 |
| Particle Scatter Speed (0~1) | 0.8 | 打散速度，越高越快 |
| Particle Gather Speed (0~1) | 0.55 | 汇聚速度，越高越快；开启入场动画时，每个字符的汇聚至少持续其入场时长 |
| Particle Motion Randomness (0~1) | 0.9 | 越高路径越曲折，越低越接近直接移动 |
| Enter Animation | Fade | Off 关闭；Fade 重叠淡入；Alternating Slide 上下交错滑入；Blink 阻尼闪烁；Enlarge 锚点放大 |
| Enter Animation Duration (ms) | 500 | 每个字符的完整入场时长，两种进度模式及 Enlarge 均适用 |
| Enter Animation Progress Mode | false | 已知当前句时长时，按歌词进度触发各字符的入场与汇聚，持续时间仍使用 Duration |
| Enter Animation Progress Offset (ms) | 0 | 进度模式下微调入场时刻，正值提前并预读下一句、负值延后；仅启用入场动画和进度模式时显示 |
| Shake Mode | Global | Off / Global / Individual / Both，Both 叠加整体与独立晃动 |
| Shake Global Intensity (0~1) | 0.3 | 整体晃动幅度，在 Global 或 Both 显示 |
| Global Shake Unit | Off | Off 整句同步；Phrase / Character 按词语或字符独立晃动，仅 Global 或 Both 显示，沿用整体晃动强度 |
| Shake Individual Probability (0~1) | 0.5 | 字符外层粒子的最大晃动概率，在 Individual 或 Both 显示 |
| Shake Individual Intensity (0~1) | 0.3 | 独立晃动幅度，在 Individual 或 Both 显示 |

两个速度分别控制各自阶段，可在播放中调整。首次显示时粒子直接从屏幕各处汇聚。每句歌词都有独立的入场、停留和退场阶段：换句时旧句完成最短停留后正常打散淡出，新句同时开始汇聚，不再立即清除。连续短句密集时，多句会短暂同屏，各句依次完成后再退场。汇聚使用 EaseOutCubic 缓出，大部分粒子先到达，少量粒子稍后跟随并缓慢收尾；独立晃动采用平滑变化，越靠字符外侧，发生概率与幅度越大。

同屏歌词共享最多 24000 个粒子。分配会参考各句的可见字符数、入场与退场阶段，优先保证每句至少保留少量粒子；退场中的句子逐渐让出预算，新句不会因短句连续出现而完全没有粒子。缩小时会按字符分层抽样，尽量避免整字缺失。

Fade 与 Alternating Slide 的相邻字符大量重叠入场，每个字符从开始入场时同步播放自己的粒子汇聚，而不是等待整句汇聚后才逐字显示。Alternating Slide 交替从上、下方以 EaseOutCubic 缓出进入。Blink 为每个字符设置不同相位，闪烁幅度逐渐衰减，最终稳定在目标不透明度。

Enlarge 在两种进度模式下均从整段歌词的同一个锚点以 EaseOutCubic 放大，同时汇聚粒子。左对齐时锚点为左侧中点，右对齐为右侧中点，居中为中心，锚点随整句旋转。普通模式下字符之间有少量时差；进度模式下按歌词时间轴错时触发，各字符仍使用整段歌词的锚点，而不是自己的中心。

Enter Animation Duration 始终表示每个字符的完整入场时长，不随字符数量或短句自适应压缩。普通模式让相邻字符稍微错时、重叠入场；进度模式按原歌词时间轴确定各字符开始入场与汇聚的时刻，持续时间仍使用 Duration，因此不同字符及连续短句的动画时间段可以重叠。Enter Animation Progress Offset 为正值时会提前字符入场，并让下一句在自身时间点之前开始准备和汇聚，避免句首字符直接跳过入场；负值则延后。读取不到时长时使用普通重叠入场。

Adaptive Lyric Timing 仅加快短句的粒子转场，适用于 Driver、SMTC 等能提供当前句时长的来源。字符入场阶段的汇聚至少覆盖设定的入场时长，打散阶段不消耗后续字符的入场时长。较长的 Duration 可能延续到本句末尾之后，此时新旧歌词会短暂同屏，各句完成必要的入场与停留后再依次退场。Enter Animation 为 Off 时隐藏入场时长与进度模式。

## 鼠标、菜单与暂停

| 配置 | 默认 | 说明 |
| --- | --- | --- |
| Give Way to Mouse | true | 鼠标靠近歌词时淡化，离开后恢复 |
| Give Way to Mouse Only Cursor Shown | true | 只在系统光标可见时避让 |
| Hide When Menu On | false | 打开菜单时淡出，关闭后恢复 |
| Pause Action | Ignore | Ignore 保持显示，Hidden 淡出，Scatter 散开 |

Hidden 在暂停期间淡出并停住当前动画，继续播放后接续；Scatter 在暂停时将粒子散开、淡出，继续播放后重新汇聚。HUD Editor 预览期间保留歌词与中心标记，便于拖动。
