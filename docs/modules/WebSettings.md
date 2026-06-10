# WebSettings
网络设定
分类：Web
描述：客户端联网设置。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
WebSettings（网络设定）用于客户端联网设置。
适合联网信息获取、账号联动和在线交互场景。
初次使用可优先调整：Network Online Status Change Notify Mode、Network Check Cooldown (ms)。

## 配置项
- Network Online Status Change Notify Mode（网络在线状态变化时通知模式）
 类型：枚举；默认："Notify"
 说明：用于选择结果反馈方式。默认值 Notify 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：Off（关闭）；Notify（通知）；Title（标题）；Chatter（弹幕）；WinToast（系统通知）
- Network Check Cooldown (ms)（网络检查冷却 (毫秒)）
 类型：数值；默认：5000U
 说明：用于控制检测/刷新/动画节奏。默认值 5000U 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Network Module Force Online（联网模块强制联网）
 类型：布尔；默认：true
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Use Windows System Proxy（使用 Windows 系统代理）
 类型：布尔；默认：true
 说明：开启后会把 Windows 系统代理同步到 `HTTP_PROXY`/`HTTPS_PROXY` 与小写环境变量，使后续 curl 请求可走系统代理；当 System Proxy 检测到系统代理启停或地址变化时会自动重新应用。
- Output Curl Error（输出 Curl 错误）
 类型：枚举；默认："Always"
 说明：这是选项型配置。默认值 Always 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Off（关闭）；Non Timeout（非超时）；Always（总是）
## 历史更新
- 47. 添加模块：Web Settings，将客户端联网设置集中在这里。
- v1.1.1：新增 `Use Windows System Proxy`，支持让 curl 请求使用 Windows 系统代理，并随 System Proxy 状态变化自动重新应用。

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
