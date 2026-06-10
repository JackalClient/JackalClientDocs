# IPAddress
IP地址
分类：Web
描述：查看本机IP地址及相关信息。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
IPAddress（IP地址）用于查看本机IP地址及相关信息。
适合联网信息获取、账号联动和在线交互场景。
初次使用可优先调整：Method、Location Cache Update Cooldown (ms)。
使用前请确认网络可用及相关 API/平台账号配置完整。

## 配置项
- Async（异步）
 类型：布尔；默认：true
 说明：用于控制是否异步处理。默认值 true 通常能减少主线程卡顿；若你遇到并发相关问题，可回退到更保守设置测试。
- Auto Console（自动启用控制台）
 类型：布尔；默认：true
 说明：用于选择结果反馈方式。默认值 true 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Method（方法）
 类型：枚举；默认："Curl"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 Curl ，确认稳定后再逐项切换比较效果。
 可选：Curl（未收录）；Command（命令）
- External IP Address Source URL（外网 IP 获取来源网址）
 类型：枚举；默认：XorStringA("https:
 说明：这是选项型配置。默认值 XorStringA("https: 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
- IP Location Query Source（IP位置查询源）
 类型：枚举；默认："PearAPI"
 说明：这是选项型配置。默认值 PearAPI 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Vore.top（Vore.顶端）；PearAPI（未收录）；IQIYI（未收录）
- Location Cache Update Cooldown (ms)（位置缓存更新冷却（毫秒））
 类型：数值；默认：30000L
 说明：用于控制检测/刷新/动画节奏。默认值 30000L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Connect Timeout (s)（连接超时时间 (秒)）
 类型：数值；默认：5L
 说明：用于控制检测/刷新/动画节奏。默认值 5L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Output Verbose Connection Info（输出冗长的连接信息）
 类型：布尔；默认：false
 说明：这是开关型配置。默认值 false 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Query External IP（查询外网 IP）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Query External IP Position（查询外网 IP 地理位置）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- AI Generated Description of IP Position（IP位置使用人工智能生成的描述）
 类型：布尔；默认：false
 说明：这是开关型配置。默认值 false 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Use HTTPS When Query Position（查询位置时使用 HTTPS）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Output Local IP Details（输出本地 IP 详细信息）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
## 历史更新
- 72. 为 IPAddress 添加配置：
- 20. 为 IP Address, IP Horror 和 Weather 添加 Auto Console 选项。
- 9. 添加模块：IPAddress，可以查看本机IP地址相关信息。

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
