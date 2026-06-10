# OnlineTime
在线时间
分类：Web
描述：获取在线时间。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
OnlineTime（在线时间）用于获取在线时间。
适合联网信息获取、账号联动和在线交互场景。
初次使用可优先调整：Connect Timeout (s)、Source。
使用前请确认网络可用及相关 API/平台账号配置完整。

## 配置项
- Connect Timeout (s)（连接超时时间 (秒)）
 类型：数值；默认：3L
 说明：用于控制检测/刷新/动画节奏。默认值 3L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Source（来源）
 类型：枚举；默认："Taobao"
 说明：这是选项型配置。默认值 Taobao 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Taobao（未收录）；Time.is（未收录）；Suning（未收录）
## 历史更新
- 3. 修改在线时间获取，源改为 Taobao, Time.is 和 Suning
- 22. 加入模块： Online Time，查询在线时间。

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
