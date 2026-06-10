# TargetESP
目标透视
分类：Window
描述：标记目标窗口的位置。

## 需求
- 安全级别：常规模块
- 恶意属性：否
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
TargetESP 会在目标窗口中心绘制动态标记，用于快速确认“当前锁定的是哪个窗口”。
该模块支持目标切换淡入/淡出、旋转与平滑跟随；建议先确定目标来源，再调动画参数。

## 配置项
- Target（目标）
  类型：组合框；默认："PointAt"。决定目标来源。
  可选：Target HUD（跟随 TargetHUD 的目标）；Foreground（前端）；PointAt（指向）；it (Pronoun)（代词 it）。
- Rotation Speed（旋转速度）
  类型：数值；默认：1.5f。控制标记旋转频率；数值越高旋转越快。
- Rotation Amplitude（最大旋转角）
  类型：数值；默认：150.0f。控制标记摆动角度；数值越高动效越强。
- Easing Speed (0~1)（缓动速率 (0~1)）
  类型：数值；默认：0.05f。控制标记追随目标中心的平滑速度；越大越跟手，越小越丝滑。
- Scale（比例）
  类型：数值；默认：1.0f。控制标记整体大小。
- Opacity (0~1)（不透明度 (0~1））
  类型：数值；默认：0.9f。控制标记透明度。
- Fade In Time (ms)（淡入时长 (毫秒)）
  类型：数值；默认：1200L。目标出现时的淡入时长。
- Fade Out Time (ms)（淡出时长 (毫秒)）
  类型：数值；默认：5000L。目标消失时的淡出时长。
- Show Temporarily（临时显示）
  类型：布尔；默认：true。开启后只在目标切换后的限定时长内显示标记，减少常驻干扰。
- Show Duration (ms)（显示时长（毫秒））
  类型：数值；默认：5000L。仅在 Show Temporarily 开启时生效。
- Color（颜色）
  类型：组合框；默认："White"。控制标记颜色。
  可选：Flow（流动）；其余颜色见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)。

## 历史更新
- 7. 添加模块：Target ESP。

## 备注
如果你开启 Show Temporarily，却感觉“标记偶尔消失”，通常是显示时长到期后的正常行为。
需要常驻提示时可关闭 Show Temporarily；需要更柔和的视觉可增加 Fade In/Out 并略降 Opacity。

## 相关命令
无

## 相关模块
- [TargetHUD (目标显示)](./TargetHUD.md)
- [WindowHighlight (窗口高亮)](./WindowHighlight.md)
- [WindowTags (窗口标签)](./WindowTags.md)
- [WindowESP (窗口透视)](./WindowESP.md)
- [Tracers (追踪线)](./Tracers.md)

## 相关资料
无