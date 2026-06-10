# TcpMonitor
TCP监视
分类：Web
描述：监视指定进程的TCP连接的变化。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
TcpMonitor（TCP监视）用于监视指定进程的TCP连接的变化。
适合联网信息获取、账号联动和在线交互场景。
初次使用可优先调整：Check Cooldown (ms)、Notify Mode。

## 配置项
- Check Cooldown (ms)（检查冷却 (毫秒)）
 类型：数值；默认：1000L
 说明：用于控制检测/刷新/动画节奏。默认值 1000L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Filter Processes（过滤进程）
 类型：布尔；默认：true
 说明：用于限定作用范围，避免误触发。建议先用小样本验证规则，再逐步扩展；涉及正则时优先从简单规则开始。
- Process Name Whitelist (Empty For Any)（进程名白名单 (用空指代任何)）
 类型：文本；默认：""
 说明：用于限定作用范围，避免误触发。建议先用小样本验证规则，再逐步扩展；涉及正则时优先从简单规则开始。
- Process Name Blacklist (Empty For Disabled)（进程名黑名单 (用空指代禁用)）
 类型：文本；默认："JackalClient.exe"
 说明：用于限定作用范围，避免误触发。建议先用小样本验证规则，再逐步扩展；涉及正则时优先从简单规则开始。
- Process Id Whitelist (Zero For Any)（进程ID白名单 (用0指代任何)）
 类型：文本；默认："0"
 说明：用于限定作用范围，避免误触发。建议先用小样本验证规则，再逐步扩展；涉及正则时优先从简单规则开始。
- Process Id Blacklist (Zero For Disabled)（进程ID黑名单 (用0指代禁用)）
 类型：文本；默认："0"
 说明：用于限定作用范围，避免误触发。建议先用小样本验证规则，再逐步扩展；涉及正则时优先从简单规则开始。
- Notify Mode（通知模式）
 类型：枚举；默认："Chatter"
 说明：用于选择结果反馈方式。默认值 Chatter 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：Notify（通知）；Chatter（弹幕）；Actionbar（行为栏）
- Chatter Color (New Connection)（弹幕颜色 (新连接)）
 类型：枚举；默认："Gold"
 说明：用于选择结果反馈方式。默认值 Gold 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Chatter Color (Closed Connection)（弹幕颜色 (关闭的连接)）
 类型：枚举；默认："Purple"
 说明：用于选择结果反馈方式。默认值 Purple 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Chatter Type（弹幕类型）
 类型：枚举；默认："Random"
 说明：用于选择结果反馈方式。默认值 Random 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：Scroll（滚动）；Top（顶端）；Bottom（底部）；Reverse（颠倒）；Horizontal（横向）；Vertical（纵向）；Random（随机）
- Filter Ports（过滤端口号）
 类型：布尔；默认：false
 说明：用于限定作用范围，避免误触发。建议先用小样本验证规则，再逐步扩展；涉及正则时优先从简单规则开始。
- Ports Whitelist (e.g. 4-10,80)（端口白名单（例：4-10,80））
 类型：文本；默认："80,443"
 说明：用于限定作用范围，避免误触发。建议先用小样本验证规则，再逐步扩展；涉及正则时优先从简单规则开始。
- Ports Blacklist (e.g. 4-10,80)（端口黑名单（例：4-10,80））
 类型：文本；默认：""
 说明：用于限定作用范围，避免误触发。建议先用小样本验证规则，再逐步扩展；涉及正则时优先从简单规则开始。
- Port Type（端口类型）
 类型：枚举；默认："Remote"
 说明：这是选项型配置。默认值 Remote 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Remote（远程）；Local（本地）
- Filter IPs（过滤 IP）
 类型：布尔；默认：false
 说明：用于限定作用范围，避免误触发。建议先用小样本验证规则，再逐步扩展；涉及正则时优先从简单规则开始。
- Exclude LAN IP（排除局域网IP）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- IP Whitelist (Sep With Semicolon)（IP 白名单（用分号分隔多个））
 类型：文本；默认：""
 说明：用于限定作用范围，避免误触发。建议先用小样本验证规则，再逐步扩展；涉及正则时优先从简单规则开始。
- IP Blacklist (Sep With Semicolon)（IP 黑名单（用分号分隔多个））
 类型：文本；默认：""
 说明：用于限定作用范围，避免误触发。建议先用小样本验证规则，再逐步扩展；涉及正则时优先从简单规则开始。
- IP Type（IP 类型）
 类型：枚举；默认："Remote"
 说明：这是选项型配置。默认值 Remote 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Remote（远程）；Local（本地）
- Show IP Addresses（是否显示两个IP地址。）
 类型：布尔；默认：true
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Query External IP Position（查询外网 IP 地理位置）
 类型：布尔；默认：false
 说明：这是开关型配置。默认值 false 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
## 历史更新
- 69. 新增模块：Tcp Monitor

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
- [TcpKiller (TCP杀手)](./TcpKiller.md)
- [LiveStream (直播间)](./LiveStream.md)
- [Streamer (主播模式)](./Streamer.md)

## 相关资料
无
