# Glow
辉光
分类：Render（位于 Night 上方）
描述：按照 HUD Blur 的后端与样式，对整个屏幕叠加背景模糊，不排除任何窗口区域。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 版本属性：专业版

## 介绍
Glow 默认关闭。启用时自动打开 HUD Blur，复用其中选择的 Backend、Style 和整体 Opacity。Legacy 后端支持普通模糊与 Liquid Glass；Experimental 后端使用系统背景模糊，不应用 Legacy 专属参数。

关闭 Glow 时，如果 WindowHighlight 的 Blur Background 仍在使用 HUD Blur，则保持 HUD Blur 开启。两处效果均关闭后，只会关闭由它们自动开启的 HUD Blur，保留用户原先已开启的状态。

HUD Blur 的 Other HUD Blur 开关不影响 Glow；将其关闭可仅保留 Glow 与 WindowHighlight 的背景模糊。

## 配置项
- Opacity (0~1)（不透明度）
  类型：数值；范围：0～1；默认：0.5。控制全屏模糊层的不透明度，与 HUD Blur 的整体 Opacity 相乘。

## 相关模块
- [HUD Blur（HUD 模糊）](./HUDBlur.md)
- [WindowHighlight（窗口高亮）](./WindowHighlight.md)
- [Night（夜间）](./Night.md)
