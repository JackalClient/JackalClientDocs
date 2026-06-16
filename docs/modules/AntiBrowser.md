# AntiBrowser
反浏览器
分类：Web
描述：自动关闭浏览器或者链接跳转。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
AntiBrowser（反浏览器）用于自动关闭浏览器或者链接跳转。
适合联网信息获取、账号联动和在线交互场景。
初次使用可优先调整：Check Cooldown。

## 配置项
- Async（异步）
 类型：布尔；默认：true
 说明：用于控制是否异步处理。默认值 true 通常能减少主线程卡顿；若你遇到并发相关问题，可回退到更保守设置测试。
- Filter（筛选器）
 类型：枚举；默认："OpenUrl Browser"
 说明：用于限定作用范围，避免误触发。建议先用小样本验证规则，再逐步扩展；涉及正则时优先从简单规则开始。
 可选：Any Browser（任何浏览器）；OpenUrl Browser（打开链接的浏览器）；OpenHttpUrl Browser（打开HTTP链接的浏览器）；OpenUrl Process（打开链接的进程）；OpenHttpUrl Process（打开HTTP链接的进程）
- Measures（措施）
 类型：枚举；默认："Kill"
 说明：这是选项型配置。默认值 Kill 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Warn（警告）；Kill（击杀）；SilentKill（暗杀）；KillParent（弑父）；KillFamily（剿灭父子）
- Check Cooldown（检查冷却）
 类型：数值；默认：1000U
 说明：用于控制检测/刷新/动画节奏。默认值 1000U 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
 
## 历史更新
- 6. 添加新模块 Anti Browser: 阻止弹出浏览器或者网站。

## 备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

## 相关命令
无

## 相关模块
- [IRC (聊天室)](./IRC.md)
- [AntiRickroll (反诈骗)](./AntiRickroll.md)
- [AntiWebpage (反网页)](./AntiWebpage.md)
- [LiveChatter (直播弹幕)](./LiveChatter.md)
- [TcpMonitor (TCP监视)](./TcpMonitor.md)
- [TcpKiller (TCP杀手)](./TcpKiller.md)
- [LiveStream (直播间)](./LiveStream.md)
- [Streamer (主播模式)](./Streamer.md)

## 相关资料
无
