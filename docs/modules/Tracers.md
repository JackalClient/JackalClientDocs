# Tracers
追踪线
分类：Window
描述：绘制鼠标到窗口的追踪线。

## 需求
- 安全级别：常规模块
- 恶意属性：否
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
Tracers 会从屏幕中心（HUD 参考点）向各个顶层窗口的指定锚点绘制连线，用来快速观察“当前有哪些窗口、它们大致在什么位置”。
它更适合做全局态势查看；如果你只关心单个目标，建议优先用 TargetESP 或 WindowHighlight。

## 配置项
- Line Color（线条颜色）
  类型：组合框；默认："Rainbow"。控制连线颜色。
  可选：Flow（流动）；其余颜色见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)。
- Line Width（线条宽度）
  类型：数值；默认：1.0f。控制连线粗细；窗口很多时建议保持较细，避免画面糊成一片。
- Line Opacity (0~1)（线条不透明度 (0~1)）
  类型：数值；默认：0.5f。控制连线透明度；0.3~0.6 通常最平衡，既可见又不压内容。
- Window Point X Rate（窗口点横坐标比例）
  类型：数值；默认：0.5f。设置连线终点在窗口内部的横向位置：0 靠左，1 靠右；0.5 为居中。
- Window Point Y Rate（窗口点纵坐标比例）
  类型：数值；默认：0.05f。设置连线终点在窗口内部的纵向位置：0 靠上，1 靠下；默认值更接近标题栏区域。

## 历史更新
- 13. 添加模块：Tracers，绘制从鼠标到顶层窗口的追踪线。
- 14. WindowESP 的顶层窗口更新现已和 Tracers 共用，更新冷却在 Config 设置。

## 备注
Tracers 与 WindowESP 共用同一批顶层窗口列表；两者同时开启时，建议降低其中一个的透明度，避免视觉过载。
若你希望减少跨窗口穿插线条，可把 Y 比例调高到 0.2~0.4，让终点落在窗口内容区而不是标题栏边缘。

## 相关命令
无

## 相关模块
- [WindowESP (窗口透视)](./WindowESP.md)
- [WindowTags (窗口标签)](./WindowTags.md)
- [WindowHighlight (窗口高亮)](./WindowHighlight.md)
- [TargetESP (目标透视)](./TargetESP.md)
- [TargetHUD (目标显示)](./TargetHUD.md)

## 相关资料
无