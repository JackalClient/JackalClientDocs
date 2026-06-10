# TriggerBot
触发点击
分类：Window
描述：如果鼠标放在窗口右上角则自动点击。

## 需求
- 安全级别：常规模块
- 恶意属性：否
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
TriggerBot 会检测鼠标是否停在目标窗口的关闭按钮区域附近，满足条件后自动执行一次点击。
它适合“半自动关窗”：你仍然通过鼠标指向目标，但无需每次手动点关闭。

## 配置项
- Cooldown (ms)（冷却 (毫秒)）
  类型：数值；默认：400U。两次自动点击之间的最小间隔。模块只在鼠标进入右上角阈值区域时触发，冷却越小触发越频繁；建议先用默认值，误触多再调大到 600~1000。
- Notify（通知）
  类型：布尔；默认：true。每次成功触发时输出提示信息。调试阶段建议开启，稳定使用时可关闭以减少通知噪声。

## 历史更新
无（HISTORY 中暂无明确记录）

## 备注
触发判定依赖鼠标位置与目标窗口可见状态；窗口样式差异较大时，命中体感会不同。
如果你需要完全自动批量关窗，使用 KillAura；如果你希望先自动对准再点关闭，可搭配 AimAssist 或改用 KillAuraLegit。

## 相关命令
无

## 相关模块
- [KillAura (杀戮光环)](./KillAura.md)
- [KillAuraLegit (合法杀戮光环)](./KillAuraLegit.md)
- [AimAssist (自动瞄准)](./AimAssist.md)
- [WindowTags (窗口标签)](./WindowTags.md)
- [WindowHighlight (窗口高亮)](./WindowHighlight.md)
- [WindowESP (窗口透视)](./WindowESP.md)
- [TargetHUD (目标显示)](./TargetHUD.md)

## 相关资料
无