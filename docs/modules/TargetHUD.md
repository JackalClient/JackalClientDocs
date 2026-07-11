# TargetHUD
目标显示
分类：Window
描述：显示目标窗口的 HUD。

## 需求
- 安全级别：常规模块
- 恶意属性：否
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
TargetHUD 会为目标窗口绘制一块信息面板，展示进程名、PID、窗口标题和类名，并支持跟随或固定位置显示。
它更偏“可读性面板”，适合排障、演示或窗口巡检；建议先设置 Target 与 HUD Position，再调整样式项。

## 配置项
- Target（目标）
  类型：组合框；默认："Foreground"。决定 HUD 跟踪的窗口来源。
  可选：Foreground（前端）；PointAt（指向）；it (Pronoun)（代词 it）。
- Scale（整体缩放）
  类型：数值；默认：1.0f。统一缩放 TargetHUD 的背景、头像、文字、血条和反馈效果；该尺寸不再跟随 ClickGUI Global Scale。
- Avatar Circle（圆形头像）
  类型：布尔；默认：true。控制头像区域是否圆形裁切。
- UWP Show Original Process（UWP 应用显示原始进程）
  类型：布尔；默认：true。UWP 窗口时优先显示其原始进程 PID/进程名，减少壳进程误判。
- HUD Position（HUD 位置）
  类型：组合框；默认："Follow"。决定 HUD 位置策略。
  可选：Follow（追随）；Fixed（固定）。
- HUD Background Color（HUD 背景颜色）
  类型：组合框；默认："Flow"。控制 HUD 背景色。
  可选：Transparent（透明）；Flow（流动）；其余颜色见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)。
- HUD Background Darkness (0~1)（HUD 背景暗度 (0~1)）
  类型：数值；默认：0.85f。对背景色做暗化，提升文字对比度。
- HUD Background Opacity (0~1)（HUD 背景不透明度 (0~1)）
  类型：数值；默认：0.8f。控制背景底板透明度。
- HUD Round Corners（HUD 圆角）
  类型：布尔；默认：true。控制是否使用圆角底板。
- HUD Roundness（HUD 圆滑程度）
  类型：数值；默认：0.6f。控制圆角弧度大小。
- HUD Shadow（HUD 阴影）
  类型：布尔；默认：true。控制是否绘制阴影层。
- HUD Shadow Opacity (0~1)（HUD 阴影不透明度 (0~1)）
  类型：数值；默认：0.7f。控制阴影透明度。
- HUD Shadow Thickness（HUD 阴影厚度）
  类型：数值；默认：60.0f。控制阴影扩散范围。
- Mouse Click Feedback（鼠标点击反馈）
  类型：布尔；默认：true。检测到鼠标点击时触发 HUD 点击反馈动画。
- Mouse Click Feedback Particles（鼠标点击反馈粒子）
  类型：布尔；默认：true。在点击反馈基础上增加粒子效果。
- Flow Color（流动颜色）
  类型：布尔；默认：true。控制进程名文字是否使用流动配色。
- HUD Shadow Color（HUD 阴影颜色）
  类型：组合框；默认："Black"。控制阴影颜色。
  可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)。
- HUD Outline Color（HUD 轮廓线颜色）
  类型：组合框；默认："Dark Green"。控制边框颜色。
  可选：Transparent（透明）；其余颜色见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)。
- Give Way to Mouse（给鼠标让道）
  类型：布尔；默认：true。鼠标进入 HUD 区域时，HUD 会自动偏移，减少遮挡点击。
- Background Image（背景图片）
  类型：布尔；默认：false。启用后在 HUD 内绘制背景图层。
- Background Image Path（背景图片路径）
  类型：文本；默认：""。背景图片路径；路径失效时会清空并关闭背景图。
- Background Image Opacity (0~1)（背景图片不透明度 (0~1)）
  类型：数值；默认：0.5f。控制背景图片透明度。
- Background Image Moving Speed（背景图片移动速度）
  类型：数值；默认：0.5f。控制背景图滚动速度；0 为静止。
- Fixed X Rate（固定X坐标比例）
  类型：数值；默认：0.85f。HUD Position=Fixed 时的横向位置比例。
- Fixed Y Rate（固定Y坐标比例）
  类型：数值；默认：0.65f。HUD Position=Fixed 时的纵向位置比例。
- Easing（缓动）
  类型：布尔；默认：true。控制 HUD 跟随目标时是否平滑移动。
- Easing Speed (0~1)（缓动速率 (0~1)）
  类型：数值；默认：0.2f。控制 HUD 追随速度。
- Fade Time (ms)（淡入淡出时间（毫秒））
  类型：数值；默认：500L。目标切换时 HUD 的淡入淡出时间。
- Animation（动画）
  类型：组合框；默认："Enlarge II"。控制目标切换或出现时的 HUD 缩放动画。
  可选：Off（关闭）；Expand（展开）；Enlarge（放大）；Enlarge II（放大 II）；Shrink（缩小）；Shrink II（缩小 II）；Elastic（弹性）。
- Style（风格）
  类型：组合框；默认："Default"。当前版本主样式入口。
  可选：Default（默认）。
- Command Line Getter（命令行获取器）
  类型：组合框；默认："Console Output"。按热键获取目标进程命令行后的输出方式。
  可选：Off（关闭）；Console Output（控制台输出）；Copy（复制）。
- Command Line Getter Hotkey（命令行获取器快捷键）
  类型：按键/复合；默认：`{ { "Keybind", {VK_LCONTROL, VK_LWIN, VK_SUBTRACT } }`}。触发命令行读取动作的快捷键。

## 历史更新
- 31. 添加新模块：TargetHUD，显示目标窗口HUD。拥有丝滑动画。
- 2. 修复通知、WindowTags、TargetHUD 中的百分号显示问题。
- 40. 为 Target Hud 添加了裁剪，以免文本超出范围。

## 备注
TargetHUD 在 Follow 模式下会自动做边界校正，尽量避免面板跑出屏幕；在 Fixed 模式下可配合拖拽快速定位。
若你常用于排障，建议保留 Command Line Getter；若偏演示，建议降低背景图移动速度并保留 Give Way to Mouse。

## 相关命令
无

## 相关模块
- [TargetESP (目标透视)](./TargetESP.md)
- [WindowTags (窗口标签)](./WindowTags.md)
- [WindowHighlight (窗口高亮)](./WindowHighlight.md)
- [WindowESP (窗口透视)](./WindowESP.md)
- [Tracers (追踪线)](./Tracers.md)

## 相关资料
无
