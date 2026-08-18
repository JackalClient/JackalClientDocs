# WindowHighlight
窗口高亮
分类：Window
描述：用彩虹色方框高亮当前窗口。

## 需求
- 安全级别：常规模块
- 恶意属性：否
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
WindowHighlight 会围绕目标窗口绘制高亮框，并可给非目标区域加暗背景，让焦点更集中。
它既可用于日常聚焦，也可与 Aura 系模块联动用于“目标跟踪提示”；后者能显著减少误操作。

## 配置项
- Easing（缓动）
  类型：布尔；默认：true。控制高亮框是否平滑追随目标位置。开启后移动更丝滑，关闭后会瞬间跳到新目标。
- Easing Speed (0~1)（缓动速率 (0~1)）
  类型：数值；默认：0.2f。控制高亮框追随速度：值越大跟随越快，值越小越柔和。想减少拖影可提高到 0.3~0.5，想要更平滑可降到 0.1~0.2。
- Only Foreground（仅前端）
  类型：布尔；默认：false。未启用 Aura 目标跟随时，开启后固定高亮前台窗口；关闭则高亮鼠标所在窗口。
- Aura Target Highlight（高亮光环目标）
  类型：布尔；默认：true。开启后在 Aura/AimAssist 工作时优先高亮当前 Aura 目标，而非简单跟随鼠标。
- Alt Snap Target Highlight（Alt Snap 目标高亮）
  类型：布尔；默认：true。Alt Snap 正在移动或调整窗口时，临时将 WindowHighlight 目标切换为该窗口；操作结束后恢复原有目标选择。
- Endangered Excla Mark（濒危感叹号）
  类型：布尔；默认：true。检测到高风险 Aura 行为时在目标中央绘制感叹号，并加粗外框，便于快速识别“正在被危险操作的窗口”。
- Hide When Menu On（菜单打开时不显示）
  类型：布尔；默认：true。菜单开启时暂停高亮绘制，避免覆盖菜单交互区域。
- Color（颜色）
  类型：组合框；默认："Rainbow"。控制高亮框主色；在非 Aura 目标模式下，实际显示还会根据窗口状态（可见/可用/前台）做适度变化。
  可选：Flow（流动）；其余颜色见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)。
- Dark Background（暗背景）
  类型：布尔；默认：true。开启后会对目标窗口外区域绘制暗幕，显著提升聚焦效果。
- Dark Background Color（暗背景颜色）
  类型：组合框；默认："Black"。控制暗幕色调。一般建议黑色系；若做演示可用 Flow 做动态效果。
  可选：Flow（流动）；其余颜色见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)。
- Dark Background Alpha (0~1)（暗背景不透明度 (0~1)）
  类型：数值；默认：0.5f。控制暗幕强度。0.3~0.6 适合日常使用；太高会影响周边内容辨识。

## 历史更新
- 17. 为 Window Highlight 模块添加丝滑动画。
- 18. 为 Window Highlight 添加配置。
- 25. 为 Window Highlight 添加配置。

## 备注
若你同时开启 WindowHighlight 与 WindowESP，建议优先降低 WindowESP 的透明度或范围，避免视觉冲突。
在 Aura 类模块开启时，建议保留 Endangered Excla Mark，能更快识别高风险目标。

## 相关命令
无

## 相关模块
- [WindowESP (窗口透视)](./WindowESP.md)
- [WindowTags (窗口标签)](./WindowTags.md)
- [Tracers (追踪线)](./Tracers.md)
- [TargetHUD (目标显示)](./TargetHUD.md)
- [KillAura (杀戮光环)](./KillAura.md)
- [KillAuraLegit (合法杀戮光环)](./KillAuraLegit.md)
- [AimAssist (自动瞄准)](./AimAssist.md)

## 相关资料
无
