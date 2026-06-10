# WindowTags
窗口标签
分类：Window
描述：在窗口的左上角显示一个信息标签。

## 需求
- 安全级别：常规模块
- 恶意属性：否
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
WindowTags 会在目标窗口附近显示标题、类名、句柄、进程等标签信息，适合快速定位窗口身份与层级。
它既能跟随鼠标/前台窗口，也能在 Aura 场景下优先突出当前 Aura 目标。

## 配置项
- Easing（缓动）
  类型：布尔；默认：true。控制标签位置切换时是否平滑过渡。
- Easing Speed (0~1)（缓动速率 (0~1)）
  类型：数值；默认：0.2f。控制标签跟随速度；越大越贴目标，越小越柔和。
- Target（目标）
  类型：组合框；默认："PointAt"。决定常规模式的目标来源。
  可选：PointAt（指向）；Foreground（前端）。
- Aura Target Highlight（高亮光环目标）
  类型：布尔；默认：true。Aura 相关模块工作时，优先把标签绑定到 Aura 目标窗口。
- Give Way to Mouse（给鼠标让道）
  类型：布尔；默认：true。鼠标接近标签区域时，标签会偏移到别处，避免挡住操作。
- Show Handle Value（展示句柄的值）
  类型：布尔；默认：true。显示 HWND 数值，便于精确定位窗口对象。
- Show Process Info（显示进程信息）
  类型：布尔；默认：true。显示进程名与 PID。
- Show Parent Info（显示家长信息）
  类型：布尔；默认：true。显示父进程信息，适合追踪窗口来源链。
- Show Position（展示位置）
  类型：布尔；默认：false。显示窗口矩形坐标。
- Show Z-Order Band（展示Z序段）
  类型：布尔；默认：false。显示窗口所在 Z-Order Band，用于排查层级与遮挡问题。
- Show Size（展示尺寸）
  类型：布尔；默认：false。显示窗口尺寸与相对屏幕占比。
- Special Z-Order Anti-Obstruction（特殊Z序防遮挡）
  类型：布尔；默认：true。当检测到特定层级遮挡风险时，标签会主动换位，降低被盖住概率。
- Font Size（字号）
  类型：数值；默认：18。控制标签文字大小。
- Text Background（文本背景）
  类型：布尔；默认：true。为每行标签信息绘制底板，提升复杂背景下可读性。
- Opacity Min (0~1)（不透明度最小值 (0~1)）
  类型：数值；默认：0.75f。标签呼吸透明动画的下限。
- Opacity Max (0~1)（不透明度最大值 (0~1)）
  类型：数值；默认：0.9f。标签呼吸透明动画的上限。
- Hide When Menu On（菜单打开时不显示）
  类型：布尔；默认：true。菜单开启时隐藏标签。

## 历史更新
- 1. 为 WindowTags 添加配置。
- 18. 为 Window Tags 模块添加丝滑动画。添加配置。
- 27. 汉化 WindowTags 的 HUD。

## 备注
Show Z-Order Band 会按周期刷新，不是每帧实时更新；用于排障足够，但不适合作为高频动态指标。
如果信息太多导致标签过长，建议先保留 Show Process Info 与 Show Handle Value，再按需开启其余项。

## 相关命令
无

## 相关模块
- [WindowHighlight (窗口高亮)](./WindowHighlight.md)
- [WindowESP (窗口透视)](./WindowESP.md)
- [Tracers (追踪线)](./Tracers.md)
- [TargetESP (目标透视)](./TargetESP.md)
- [TargetHUD (目标显示)](./TargetHUD.md)

## 相关资料
无