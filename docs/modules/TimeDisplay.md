# TimeDisplay
时间显示
分类：Render
描述：显示本地或在线时间，支持电子数字、渐变配色、日期和定时报时。

## 需求

- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：默认无需联网；启用 Online Time 后需要网络同步
- 开发状态：稳定/常规
- 版本属性：普通可用；Float (PRO)、星期、文字发光、滴答声和新日子日历为专业版功能

## 介绍
TimeDisplay 显示本地或在线时间，支持电子数字、逐字符渐变配色、日期、12/24 小时制和定时报时；专业版支持多语言星期、字符漂浮和文字发光。

## 时间格式

| 配置项 | 默认值 | 说明 |
| --- | --- | --- |
| Style | Free：Classic；Pro：Flip | Classic、Flip、Flip + Clock、Tall、Float (PRO)、Vertical。旧 Profile 的 Float 自动兼容；免费版回退为 Classic。 |
| Flip Duration (ms) | 400 | 翻页动画时长，仅在 Flip、Flip + Clock 下显示。 |
| Tall Digit Aspect Ratio | 3.0 | 数字高度 ÷ 宽度，仅 Tall 下显示；时分秒共用该比例，范围 1.0～8.0。 |
| Float Speed | 1.0 | 漂浮速度倍率，仅 Float (PRO) 下显示；0 暂停运动，范围 0～10。改变速度不重置动画相位。 |
| Float Amplitude | 1.0 | 横纵漂移与旋转幅度倍率，仅 Float (PRO) 下显示；0 禁用晃动，范围 0～5。 |
| Minute | 开启 | 显示分钟；关闭后自动收紧布局。 |
| Second | 开启 | 显示秒；关闭时 Flip + Clock 也隐藏秒针背景。 |
| 24-hour Time | 开启 | 关闭后使用 12 小时制，午夜显示 12 AM，正午显示 12 PM。 |
| AM/PM Language | Follow Global | Follow Global、English、Chinese；中文显示“上午/下午”。仅在 12 小时制下显示。 |
| AM/PM Upper Case | 开启 | 英文 AM/PM 使用大写，关闭后为 am/pm；中文不受影响。 |
| Clock Enabled | 关闭 | 联动切换 [Clock](./Clock.md) 模块。 |

六种风格：

- **Classic**：横向显示时间。
- **Flip**：变化的数字向上翻页，日期、星期与 AM/PM 保持独立布局。
- **Flip + Clock**：在翻页数字后绘制随秒针移动的表盘。
- **Tall**：手绘七段电子屏数字，不依赖当前字体拉伸；不显示冒号，时分使用相同配色和亮度，右侧小秒数与大数字底端精确对齐。
- **Float (PRO)**：宽字距，时间字符各自缓慢漂移并轻微转动；可调速度和幅度，日期与星期使用固定信息行，避免互相遮挡。
- **Vertical**：依次显示 HH、MM、SS，分钟与秒数各用不同色调；隐藏某一项后不保留空行。

## 外观

| 配置项 | 默认值 | 说明 |
| --- | --- | --- |
| Font Size | 50 | 基础字号，随 GUI 缩放调整；日期、星期、秒数和 AM/PM 的字号按风格协调。 |
| Color | Rainbow | 统一颜色对象，支持颜色预设、RGBA、Sin 和 Flow；每个时间字符采用不同相位，多色预设形成渐变，Colorful 按字符位置独立取色；兼容旧配置。Tall 的时分对应数字共用配色。 |
| Wave Color | 开启 | 时间字符的颜色亮度波动，日期与星期保持各自颜色。 |
| Opacity (0~1) | 0.7 | 整体文字不透明度，日期、星期与 AM/PM 一并生效。 |


Whiter、Transparent 已移除；通过 Color 与 Opacity 调整颜色和透明度。

## 日期

| 配置项 | 默认值 | 说明 |
| --- | --- | --- |
| Date | Off | Off、Standard 1（YYYY/MM/DD）、Standard 2（YYYY-MM-DD）、Standard 3（YYYY.MM.DD）、Chinese（YYYY年MM月DD日）。 |
| Date Color | White | 独立颜色对象，支持预设、RGBA、Sin；日期开启时显示。 |
| Date Scale | 0.3 | 相对于时间基础字号的比例，1.0 表示相同字号；范围 0.05～3.0。Date Suffix 的星期共用此缩放。 |
| Date Show Year | Long | Long：完整年份；Short：后两位；Off：不显示年份。影响所有日期格式。 |
| Date Year Suffix | 关闭 | 年份后置，如 MM/DD/YYYY 或 MM月DD日YYYY年；年份关闭时隐藏该项。 |
| Date Add Zero | 关闭 | 月和日为个位数时添加前导零，中文格式同样适用。 |
| Date Position | Above | Above：上方；Below：下方常规信息行；Behind：时钟下缘的低透明度水印，先于主文字绘制；字号仍由 Date Scale 控制。 |
| Date Alignment | Center | Left、Center、Right；日期和星期对齐完整时间区域，包含小秒数及 AM/PM。 |
| Date Spacing | 0.0 | 日期字距，随 GUI 缩放调整；Date Suffix 模式的星期沿用此字距。 |

例如 2026 年 10 月 9 日：

- Standard 1 默认输出 `2026/10/9`，补零后为 `2026/10/09`。
- Short + Year Suffix 输出 `10/9/26`。
- Chinese + Show Year Off 输出 `10月9日`。

日期关闭时隐藏年份与补零配置。专业版开启 Date Suffix 星期时，日期的位置、对齐和字距仍可调整。

## 星期（专业版）

| 配置项 | 默认值 | 说明 |
| --- | --- | --- |
| Weekday (PRO) | Off | Off、Standard（Monday）、Upper（MONDAY）、Short（Mon）、Upper Short（MON）、Chinese 1（星期一）、Chinese 2（周一）、Japanese（月曜日）、Japanese Short（月）。 |
| Weekday Color | Red | 独立颜色对象，支持预设、RGBA、Sin；星期开启时显示，Date Suffix 下仍使用此颜色。 |
| Weekday Scale | 0.3 | 相对于时间基础字号的比例，范围 0.05～3.0；Date Suffix 下隐藏并固定使用 Date Scale。 |
| Weekday Position | Date Suffix | Date Suffix、Above、Below、Behind。星期关闭时隐藏该项。 |
| Weekday Spacing | 0.0 | 独立星期行的字距；Date Suffix 使用日期字距，因此隐藏该项。 |

Date Suffix 将星期放在日期文字后面，使用日期的位置、对齐、字距和缩放，但保留 Weekday Color。日期关闭后仍可单独显示星期。

日期和星期都位于 Above 时，星期在日期上方；都位于 Below 或 Behind 时，星期在日期下方。Below 信息行会避开 Behind 水印。星期与日期始终跟随时间显示相同的本地或在线日期，跨零点同步切换。

## 位置

| 配置项 | 默认值 | 说明 |
| --- | --- | --- |
| X Rate | 0.2 | 时间区域的横向位置比例。 |
| Y Rate | 0.8 | 时间区域的纵向位置比例。 |
| Hide When Menu On | 开启 | 打开 ClickGUI 时隐藏 HUD。 |
| Give Way to Mouse | 开启 | 鼠标进入完整显示区域时淡出至 20%；在 HUD 编辑器中不避让。 |

HUD 编辑器的拖拽范围与背景覆盖全部时间、日期和星期，并按 Float Amplitude 为浮动字符的运动预留边界。

## 文字发光（专业版）

| 配置项 | 默认值 | 说明 |
| --- | --- | --- |
| Text Glow (PRO) | 关闭 | 使用 Arraylist 的 Text Glow Mode = New 同款发光效果，适用于所有风格，包含 Tall 电子数字、日期和星期。 |
| Text Glow Alpha (0~1) | 0.5 | 发光不透明度，发光开启时显示；与文字整体不透明度和鼠标避让共同生效。 |
| Text Glow Enhancement Passes (2~40) | 8 | 与 Arraylist 相同的增强叠加轮数，发光开启时显示；范围 2～40。 |

发光随字符配色、翻页和漂浮同步变化；模糊半径为基础字号的 0.2 倍，饱和度补偿为 2.0，与 Arraylist New 模式的默认设置一致。关闭、隐藏模块或退出客户端时释放发光纹理。

## 背景与阴影

| 配置项 | 默认值 | 显示条件或用途 |
| --- | --- | --- |
| Background | 关闭 | 启用完整区域背景。 |
| Background Color | Black | 背景开启；支持颜色对象及 Flow。 |
| Background Opacity (0~1) | 0.8 | 背景开启。 |
| Background Round Corners | 开启 | 背景开启。 |
| Background Roundness | 0.3 | 背景与圆角均开启。 |
| Background Shadow | 开启 | 背景开启。 |
| Background Shadow Color | Black | 背景与阴影均开启。 |
| Background Shadow Opacity (0~1) | 0.5 | 背景与阴影均开启。 |
| Background Shadow Thickness | 20 | 背景与阴影均开启。 |

背景、阴影与文字共同响应鼠标避让。

## 在线时间

- Online Time：默认关闭；启用后使用 [OnlineTime](./OnlineTime.md) 的网络时间。
- Online Time Update Cooldown (ms)：默认 60000，仅在线时间开启时显示。

## 报时

- Time Announcement：默认 Notify；Off、Notify、Chatter、WinToast、Title、Actionbar。
- Time Announcement Highlight：默认开启，在匹配报时规则时高亮时间。
- Time Announcement Mode：默认 Half Hour；Half Hour、Hour、Custom。报时或高亮至少开启一项时显示。
- Time Announcement Custom Rules (Sep With Semicolon)：字符串列表，默认 `**:00`、`**:20`、`**:40`；仅 Custom 模式显示，兼容旧分号字符串。
- Time Announcement Title Color：默认 Aqua-Blue，统一颜色对象；仅 Title 输出显示。
- Time Announcement Title Font Size：默认 100；仅 Title 输出显示。

时间显示采用 12 小时制或隐藏分秒，不影响原有报时规则。

## 新日子通知

- New Day Notification：默认 Title；Off、Notify、Chatter、WinToast、Title、Actionbar。在零点通知一年中的第几天。
- New Day Title Color：默认 Flow，统一颜色对象；仅 Title 输出显示。
- New Day Title Font Size：默认 300；仅 Title 输出显示。
- New Day Calendar (PRO)：Free 默认关闭，Pro 默认开启；新日子通知开启时可设置零点自动打开日历。

## 滴答声（专业版）

- Tick Sound (PRO)：Free 默认 Off，Pro 默认 Dynamic；Off、Always、Silence、Dynamic、Music Stopped。
- Tick Sound Volume：默认 20；滴答声开启时显示。
- Tick Sound Pan：默认 Surround；Normal、Binary、Surround；滴答声开启时显示。
- Tick Sound Pitch：默认 Binary；Normal、Binary、Vary；滴答声开启时显示。
- Tick Sound Silence Threshold：默认 300；仅 Silence、Dynamic 下显示，这两种模式需音频可视化模块提供实时强度。

隐藏秒数后，滴答声仍按实际秒数触发。

## 配置分组

全部 62 个选项分为 Time Format、Appearance、Date、Weekday、Position、Background、Background Shadow、Online Time、Time Announcement、New Day Notification、Tick Sound (PRO)、Text Glow (PRO) 共 12 组。前四组默认展开，其余默认折叠。

使用共用 Groups、VisibleWhen 与 VisibleWhenBatch 元数据，Dropdown Old、Dropdown Integration 和 Neverlose 均按上述条件显示附属项。

## 相关模块

- [Clock](./Clock.md)
- [OnlineTime](./OnlineTime.md)
- [TimeManager](./TimeManager.md)
