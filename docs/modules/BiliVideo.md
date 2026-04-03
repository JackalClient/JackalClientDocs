BiliVideo
B站视频
分类：Web
描述：查询并输出指定的B站视频的信息。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
BiliVideo（B站视频）用于查询并输出指定的B站视频的信息。
适合联网信息获取、账号联动和在线交互场景。
初次使用可优先调整：Mode、Notify Mode、Notify Prefix。
使用前请确认网络可用及相关 API/平台账号配置完整。

配置项
- Async（异步）
 类型：布尔；默认：true
 说明：用于控制是否异步处理。默认值 true 通常能减少主线程卡顿；若你遇到并发相关问题，可回退到更保守设置测试。
- Auto Console（自动启用控制台）
 类型：布尔；默认：true
 说明：用于选择结果反馈方式。默认值 true 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- AID/BID/Link（AID/BID/链接）
 类型：文本；默认：""
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Video（视频）
 类型：枚举；默认："Latest"
 说明：这是选项型配置。默认值 Latest 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Latest（未收录）；Custom（自定义）
- User ID（用户ID）
 类型：通用；默认：WORMWAKER_MID
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Mode（模式）
 类型：枚举；默认："Once"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 Once ，确认稳定后再逐项切换比较效果。
 可选：Once（未收录）；Monitor（监视）
- No Decrease Notification（禁用减少通知）
 类型：布尔；默认：false
 说明：这是开关型配置。默认值 false 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Speak Changes（讲述变化）
 类型：布尔；默认：false
 说明：这是开关型配置。默认值 false 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Notify Mode（通知模式）
 类型：枚举；默认："Chatter"
 说明：用于选择结果反馈方式。默认值 Chatter 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：Off（关闭）；Notify（通知）；Chatter（弹幕）；Actionbar（行为栏）；Title（标题）；WinToast（系统通知）
- Notify Prefix（通知前缀）
 类型：枚举；默认："Title"
 说明：用于选择结果反馈方式。默认值 Title 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：Off（关闭）；Module Name（模块名称）；Title（标题）；BVID（BV 号）
- Connect Timeout (s)（连接超时时间 (秒)）
 类型：数值；默认：4L
 说明：用于控制检测/刷新/动画节奏。默认值 4L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Query Cooldown (s)（查询冷却（秒））
 类型：数值；默认：1L
 说明：用于控制检测/刷新/动画节奏。默认值 1L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
历史更新
- 22. /bilivideo 命令的参数现已支持完整链接。
- 23. 添加模块 BiliVideoCover，提取视频封面。
- 24. 添加模块 BiliVideo，输出视频各种信息。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
/bili video <aid/bid/link>
查看B站视频信息。会进入一个可交互页面。

/bili video <aid/bid/link> summary
使用人工智能总结视频信息。

/bili video <aid/bid/link> comment
使用人工智能生成并发送一条类似的评论。

/bili video <aid/bid/link> gencomment
使用人工智能生成一条类似的评论。仅生成不发送。

相关模块
- [IRC (聊天室)](./IRC.md)
- [AntiRickroll (反诈骗)](./AntiRickroll.md)
- [AntiBrowser (反浏览器)](./AntiBrowser.md)
- [AntiWebpage (反网页)](./AntiWebpage.md)
- [LiveChatter (直播弹幕)](./LiveChatter.md)
- [TcpMonitor (TCP监视)](./TcpMonitor.md)
- [TcpKiller (TCP杀手)](./TcpKiller.md)
- [LiveStream (直播间)](./LiveStream.md)

相关资料
无

