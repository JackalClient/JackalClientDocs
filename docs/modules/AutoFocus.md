# AutoFocus
自动聚焦
分类：Window
描述：自动聚焦到某些窗口。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
AutoFocus（自动聚焦）会按目标策略主动把窗口拉到前台。建议把检查间隔设置得稍保守，先确认不会打断正常工作流。
## 配置项
- Mode（模式）
 类型：枚举；默认："PointAt"
 说明：聚焦目标策略：可按前台、指向或其他规则聚焦。与使用习惯最相关，建议先从默认模式试起。
 可选：PointAt（指向）；Foreground Locked（前端 锁定）
- Notify（通知）
 类型：枚举；默认："Off"
 说明：聚焦动作的提示方式，排查时建议开提示，稳定后可关闭。
 可选：Off（关闭）；Notify（通知）；Chatter（弹幕）；Actionbar（行为栏）
- Disable When Menu On（打开GUI后关闭模块。）
 类型：布尔；默认：false
 说明：菜单打开时暂停自动聚焦，避免调参时被抢焦点。
- Disable When Quit（退出时关闭）
 类型：布尔；默认：false
 说明：退出客户端时自动停用，防止残留行为。
- Check Cooldown (ms)（检查冷却 (毫秒)）
 类型：数值；默认：200
 说明：自动聚焦轮询间隔。调小会更及时，但可能造成频繁切焦。
- Restore Window While Focusing（聚焦时还原窗口）
 类型：布尔；默认：false
 说明：聚焦时是否先还原最小化窗口。关闭可减少窗口状态变化。
## 历史更新
- 17. 【WIP】添加模块：HoverFocus，和 Auto Focus效果一样但是是 Windows 自带的。会同步系统的设置。
- 19. 新增模块：AutoFocus 自动聚焦窗口。
- 33. 将 Title 模块的 Check Topmost 改为只设置窗口置顶，添加 Auto Focus 配置项（这个才是设置焦点）

## 备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

## 相关命令
无

## 相关模块
- [WindowTags (窗口标签)](./WindowTags.md)
- [WindowHighlight (窗口高亮)](./WindowHighlight.md)
- [WindowESP (窗口透视)](./WindowESP.md)
- [Tracers (追踪线)](./Tracers.md)
- [TargetESP (目标透视)](./TargetESP.md)
- [TargetHUD (目标显示)](./TargetHUD.md)
- [WindowMaster (窗口大师)](./WindowMaster.md)
- [PrivateWindow (隐私窗口)](./PrivateWindow.md)

## 相关资料
无
