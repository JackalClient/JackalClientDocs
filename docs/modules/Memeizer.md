# Memeizer
生草机
[PRO]
分类：Web
描述：基于提供的文本生成逆天的机器翻译。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：PRO 独有

## 介绍
Memeizer（生草机）用于基于提供的文本生成逆天的机器翻译。
适合联网信息获取、账号联动和在线交互场景。
初次使用可优先调整：Cut Words、Single、Experimental Meanings (AI)。
使用前请确认网络可用及相关 API/平台账号配置完整。

## 配置项
- Cut Words（分词）
 类型：枚举；默认："API"
 说明：这是选项型配置。默认值 API 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Single（单个）；Double（两个）；Bili Suggestion（哔哩建议）；API（未收录）；API 2（未收录）
- Single（单个）
 类型：文本；默认："Double", "Bili Suggestion", "API", "API 2"
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Experimental Meanings (AI)（实验性义项（人工智能））
 类型：布尔；默认：false
 说明：这是开关型配置。默认值 false 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Exclude Words（排除单词）
 类型：文本；默认："了;的;使;地;有;时;候;着;被;把;并;或;而;与;于;将;就;可;以;是;都;由;个;一个;吧;呢;吗;哪里;哪;比;从;成;为;到;至;达;往;去;同"
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
## 历史更新
- 18. 【PRO】加入模块：Memeizer，生草机。目前有一个BUG：提供的文本不能过长，否则容易出现奇怪的编码问题导致生成失败。

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
