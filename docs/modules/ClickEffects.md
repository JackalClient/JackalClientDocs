# ClickEffects
点击效果
分类：Control
描述：鼠标点击时绘制动态点击特效。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
Click Effects（点击效果）用于在鼠标点击位置绘制动画反馈。
模块提供 Ripples、Blue Archive、Phigros 三种预设，并会在切换 Preset 时自动同步 Color：Ripples 和 Blue Archive 自动使用 Blue，Phigros 自动使用 Gold。
适合录屏演示、直播展示、桌面视觉增强和点击反馈场景。

## 配置项
- Opacity (0~1)（不透明度 (0~1)）
 类型：数值；默认：0.8f
 说明：控制点击效果整体不透明度。若觉得遮挡内容可下调，若背景复杂导致看不清可上调。
- Scale（比例）
 类型：数值；默认：1.0f
 说明：控制点击效果整体缩放。大于 1 会放大所有预设动画，小于 1 会缩小。
- Color（颜色）
 类型：枚举；默认："White"
 说明：用于控制点击效果配色。切换 Preset 时会自动调整：Ripples -> Blue，Blue Archive -> Blue，Phigros -> Gold。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Preset（预设）
 类型：枚举；默认："Ripples"
 说明：选择点击动画风格。Ripples 是向外扩散的水波线；Blue Archive 包含蓝色圆形、260度白色尖尾轨迹线和飞出的等边三角形；Phigros 包含方框、圆点、弧线和方块粒子。
 可选：Ripples（水波）；Blue Archive（蔚蓝档案）；Phigros（Phigros）
- Sound（音效）
 类型：枚举；默认："Auto"
 说明：控制点击时播放的音效。Auto 会按预设自动选择；Select 使用 Sound (Select)；Custom 使用 Sound (Custom) 指定音频文件。
 可选：Off（关闭）；Auto（自动）；Select（选择）；Custom（自定义）
- Sound (Select)（音效（选择））
 类型：枚举；默认："Off"
 说明：Sound=Select 时使用的内置音效。
- Sound (Custom)（音效（自定义））
 类型：字符串；默认：""
 说明：Sound=Custom 时使用的音频路径，可填写绝对路径，也可填写 assets 下的音频文件名。
- Phigros Color (PRO)（Phigros 颜色（专业版））
 类型：枚举；默认：专业版 "Buttons"，免费版 "Off"
 说明：Off 时 Phigros 固定为黄色；Buttons 时左键黄色、右键蓝色、其他鼠标键红色，并联动 Auto 音效。
 可选：Off（关闭）；Buttons（按键）

## 历史更新
- v1.1.2：新增 Click Effects 模块，补充 Scale、Sound、Phigros Color (PRO) 配置，并优化 Blue Archive 与 Phigros 预设的可见性、层级和尺寸。

## 备注
点击效果基于客户端 HUD 绘制，不会改变系统鼠标输入行为。若视觉反馈不出现，先确认模块已启用且客户端 HUD 正在渲染。

## 相关命令
无

## 相关模块
- [MouseTrailsV2 (鼠标轨迹V2)](./MouseTrailsV2.md)
- [MouseESP (鼠标透视)](./MouseESP.md)
- [AutoClicker (连点器)](./AutoClicker.md)
- [Crosshair (准星线)](./Crosshair.md)

## 相关资料
无
- Blue Archive：优化圆形轮廓、发光、分段淡出和三角形粒子表现，圆形轮廓半径会跟随中心蓝色圆形同步扩大。

- Animation Speed：控制点击动画播放速率，默认 1.6。

- Blue Archive：减少三角形数量，圆形轮廓可出现额外错位层，并使用更快的扩大曲线。

- Blue Archive：圆形轮廓离场改为 2 到 3 个大段分段淡出，额外轮廓层可使用不同方向和起始角。

- Blue Archive：圆形轮廓线参考 BASpark 的分段宽度变化，弧线中段更粗、两端更细。
