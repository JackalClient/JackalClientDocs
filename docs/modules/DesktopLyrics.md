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
Desktop Lyrics 是 Better Lyrics 的桌面歌词输出组件。先在 Better Lyrics 的 Display Components 中选择 Desktop Lyrics，再在本模块配置位置、动画、逐字效果、颜色和译文布局。Driver (PRO) 与 SMTC 模式会提供历史句和后续句；OCR 与 Hook Render 仅显示当前句和历史句。HudEditor 可拖动位置并缩放。

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

## 配置分组
文字模糊开启时，历史、未来歌词及译文的重叠字形会正确合成透明边缘，避免相邻字符出现缺口或异常像素；无需调整字距、字号或现有布局。

- Layout：对齐、每侧行数、最大宽度、字体大小、缩放、行距与屏幕位置。
- Blur：Blur Mode (PRO) 为专业版独有，默认 Off；专业版支持 Off、Temp、Stepped 和 Global，免费版仅提供 Off，并在加载配置及绘制时强制关闭，导入专业版配置也不能启用文字模糊。旧 Blur Mode 及更早的 Desktop Lyrics Blur Mode 会自动迁移到新名称，专业版保留原选择，不覆盖已保存的新配置。Blur Intensity (0~1) 控制模糊强度，Blur Enhancement Passes (1~16) 控制模糊叠加强度，两项仅在模糊模式不为 Off 时显示。Temp 只对最下方入场行和最上方出场行按平滑过渡进度模糊，入场同时由透明渐显，出场同时渐隐；Stepped 让当前歌词向两侧逐级增强模糊；Global 以相同强度模糊全部歌词及译文。模糊开启时，当前句的 Tint/Fade 逐字效果仍然生效。本次版本限制仅针对歌词文字模糊，不影响 Background 分组的 HUD Blur 背景接入。
- Animation：Garble Slide、Garble Dissolved、Unfold 入场效果及时长；Position Easing 控制歌词行纵向过渡。
- Per-Character：Animation、Tint、Fade 三种逐字模式。Fade 的未读字符透明度默认为 0.5；正在读取的字符从透明渐入。
- Opacity：统一、阶梯或当前/其他歌词透明度，以及暂停时的显示行为和鼠标避让设置。
- Lyrics Colors：当前、历史和未来歌词分别设置颜色。
- Translation：Override、Above、Below 布局；可选显示其他行译文，并分别设置当前、历史和未来译文颜色。新到达的译文会淡入。
- SMTC：Desktop Lyrics SMTC Progress Rate (0~2) 用于校准 SMTC 每句歌词的进度，默认 1.0。

SMTC 倍率大于 1.0 会让逐句进度更快，小于 1.0 会让进度更慢；它只影响 SMTC，不改变按动画时长运行的入场动画。

## 全屏窗口隐藏

- `Hide In Fullscreen Window`（全屏窗口时隐藏）：布尔，默认 `true`。
- 开启后，前台窗口为无边框全屏或独占全屏时自动隐藏显示；退出全屏或切换到普通窗口后恢复。普通带标题栏的最大化窗口不会触发，支持多显示器。
- 此选项只隐藏画面，不关闭模块或停止后台功能；HUD Editor 开启时保留显示，便于编辑布局。
