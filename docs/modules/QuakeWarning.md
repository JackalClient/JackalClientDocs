# QuakeWarning
地震预警
分类：Web
描述：地震来临时提供预警。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
QuakeWarning（地震预警）用于地震来临时提供预警。
适合联网信息获取、账号联动和在线交互场景。
初次使用可优先调整：Check Cooldown (ms)、Notify Mode。
使用前请确认网络可用及相关 API/平台账号配置完整。

## 配置项
- Async（异步）
 类型：布尔；默认：true
 说明：用于控制是否异步处理。默认值 true 通常能减少主线程卡顿；若你遇到并发相关问题，可回退到更保守设置测试。
- Check Cooldown (ms)（检查冷却 (毫秒)）
 类型：数值；默认：30000L
 说明：用于控制检测/刷新/动画节奏。默认值 30000L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Clear Events When Disabled（禁用时清空事件）
 类型：布尔；默认：true
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Quake Query Source（地震查询源）
 类型：枚举；默认："Auto"
 说明：这是选项型配置。默认值 Auto 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Auto（自动）；JMA（未收录）；Sichuan（四川）；Fujian（福建）；CENC（未收录）；CWA（未收录）
- Warning Filter（警告过滤器）
 类型：枚举；默认："Global"
 说明：用于限定作用范围，避免误触发。建议先用小样本验证规则，再逐步扩展；涉及正则时优先从简单规则开始。
 可选：Global（全局）；Domestic（国内）；Province（省份）；City（城市）
- Notify Mode（通知模式）
 类型：枚举；默认："Title"
 说明：用于选择结果反馈方式。默认值 Title 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：Notify（通知）；Chatter（弹幕）；Title（标题）；WinToast（系统通知）
- Min Warning Intensity（最低警告烈度）
 类型：数值；默认：0.0
 说明：这是数值型配置。默认值 0.0 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Min Warning Magnitude（最低警告震级）
 类型：数值；默认：0.0
 说明：这是数值型配置。默认值 0.0 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Max Warning Event Age (hour)（最大警告事件间隔 (小时)）
 类型：数值；默认：3.0
 说明：这是数值型配置。默认值 3.0 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- AI Location Validation（人工智能位置校验）
 类型：布尔；默认：false
 说明：这是开关型配置。默认值 false 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Connect Timeout (s)（连接超时时间 (秒)）
 类型：数值；默认：10L
 说明：用于控制检测/刷新/动画节奏。默认值 10L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
## 历史更新
- 32. 添加模块：Quake Warning，提供地震预警

## 备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

## 相关命令
无

## 相关模块
- [IRC (聊天室)](./IRC.md)
- [AntiRickroll (反诈骗)](./AntiRickroll.md)
- [AntiBrowser (反浏览器)](./AntiBrowser.md)
- [AntiWebpage (反网页)](./AntiWebpage.md)
- [LiveChatter (直播弹幕)](./LiveChatter.md)
- [TcpMonitor (TCP监视)](./TcpMonitor.md)
- [TcpKiller (TCP杀手)](./TcpKiller.md)
- [LiveStream (直播间)](./LiveStream.md)

## 相关资料
无
