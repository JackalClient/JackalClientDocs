# WindowESP
窗口透视
分类：Window
描述：绘制一切窗口的方框。

## 需求
- 安全级别：常规模块
- 恶意属性：否
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
WindowESP 会遍历顶层窗口并绘制边框，帮助你快速看清当前桌面上的窗口分布与层级关系。
实战上建议先把排除类开关调好（前台/鼠标指向/不可见），再微调线宽和透明度，否则画面会非常拥挤。

## 配置项
- Box Color（方框颜色）
  类型：组合框；默认："Rainbow"。控制每个窗口边框的着色方式。若想稳定辨识，优先用固定颜色；若想动态观感可用 Flow。
  可选：Flow（流动）；其余颜色见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)。
- Box Line Width（框线宽）
  类型：数值；默认：3.0f。控制边框粗细。高分辨率屏幕建议略增（如 3~5），低分辨率或窗口很多时建议减小，避免边框互相覆盖。
- Box Alpha（框不透明度）
  类型：数值；默认：0.5f。控制边框透明度。值越低越不挡内容，值越高越醒目；通常 0.35~0.65 最平衡。
- Exclude Invisible（排除不可见）
  类型：布尔；默认：true。开启后会跳过不可见窗口，明显减少噪声框；多数场景建议保持开启。
- Exclude Foreground（排除前端）
  类型：布尔；默认：true。开启后不绘制当前前台窗口，适合你正在专注操作前台应用时减少遮挡。
- Exclude Pointed（排除鼠标指向）
  类型：布尔；默认：true。开启后不绘制鼠标当前指向窗口，能避免指针附近出现高干扰闪框。
- Hide HUD When Menu On（打开菜单时隐藏HUD）
  类型：布尔；默认：true。打开菜单时暂停 WindowESP 绘制，方便调参和阅读菜单内容。

## 历史更新
- 13. 添加模块：Tracers，绘制从鼠标到顶层窗口的追踪线
- 14. WindowESP 的顶层窗口更新现已和 Tracers 共用，更新冷却在 Config 设置

## 备注
WindowESP 的窗口列表与 Tracers 共用；当你同时开启两者时，窗口枚举节奏会一致。
若你主要目的是“突出一个目标窗口”而不是“全局扫视”，建议改用 WindowHighlight。

## 相关命令
无

## 相关模块
- [WindowHighlight (窗口高亮)](./WindowHighlight.md)
- [WindowTags (窗口标签)](./WindowTags.md)
- [Tracers (追踪线)](./Tracers.md)
- [TargetESP (目标透视)](./TargetESP.md)
- [TargetHUD (目标显示)](./TargetHUD.md)
- [ConsoleESP (控制台透视)](./ConsoleESP.md)

## 相关资料
无