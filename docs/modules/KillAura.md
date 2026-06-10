# KillAura
杀戮光环
分类：未分类
描述：自动关闭每一个目标窗口。

## 需求
- 安全级别：不安全模块（谨慎使用）
- 恶意属性：否
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
不是 Minecraft 作弊端那种杀戮光环。想什么呢。
KillAura 会持续寻找当前光环目标窗口，并对目标发送关闭请求，实现连续的“自动关窗”。
它与普通一次性关闭不同，更像是持续执行的自动化动作：只要模块保持开启、且目标满足条件，就会不断尝试关闭。

## 配置项
无（该模块在 default_settings.h 中未定义独立配置项）

## 历史更新
无（HISTORY 中暂无明确记录）

## 备注
本模块被归类为 unsafe，客户端策略可能要求额外确认后才能开启。
启用后建议同时观察目标高亮或目标标签，避免误关到不希望关闭的窗口。
如果你只想“更像人工操作”的关闭方式，可改用 KillAuraLegit；若只想在鼠标到达关闭按钮时触发，可改用 TriggerBot。

## 相关命令
无

## 相关模块
- [KillAuraLegit (合法杀戮光环)](./KillAuraLegit.md)
- [TriggerBot (触发点击)](./TriggerBot.md)
- [AimAssist (自动瞄准)](./AimAssist.md)
- [WindowHighlight (窗口高亮)](./WindowHighlight.md)
- [WindowTags (窗口标签)](./WindowTags.md)
- [MinAura (最小化光环)](./MinAura.md)
- [MaxAura (最大化光环)](./MaxAura.md)
- [FreezeAura (冻结光环)](./FreezeAura.md)
- [RuinAura (毁坏光环)](./RuinAura.md)

## 相关资料
无