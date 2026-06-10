# BiliSettings
B站设定
分类：Web
描述：有关B站账号的设置。启用以登录。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
BiliSettings（B站设定）用于有关B站账号的设置。启用以登录。
适合联网信息获取、账号联动和在线交互场景。
初次使用可优先调整：Black Capture When Login、Close Menu When Login、Debug Output。
使用前请确认网络可用及相关 API/平台账号配置完整。

## 配置项
- Black Capture When Login（登录时开启黑屏捕获。）
 类型：布尔；默认：false
 说明：这是开关型配置。默认值 false 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Close Menu When Login（登录时关闭GUI。）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Debug Output（调试输出）
 类型：布尔；默认：false
 说明：这是开关型配置。默认值 false 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Login QR Code Scale（登录二维码图片缩放比例。）
 类型：数值；默认：6.0f
 说明：这是数值型配置。默认值 6.0f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
## 历史更新
- 20. 修复 BiliSettings 在生成二维码时失败后未能关闭模块的问题。
- 15. 添加新模块：Bili Settings。表面上看是B站设定，其实按一下就可以扫码登录。Bili Notifier, Bili Console等模块会用到这里的 Cookies 等信息。
- 16. 添加新模块：Bili Notifier，可以通知你B站的消息种类和数量。注意：需要先用 Bili Settings 登录才能使用。

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
