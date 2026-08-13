# BiliNotifier
B站通知
分类：Web
描述：向你发送B站的通知。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：普通可用；创作中心弹幕通知仅专业版可用

## 介绍
BiliNotifier（B站通知）用于向你发送B站的通知。专业版可通过创作中心接口获取自己投稿视频的新弹幕正文，首次查询只建立最新弹幕基线，不会推送已有历史弹幕。
适合联网信息获取、账号联动和在线交互场景。
初次使用可优先调整：Mode、Query Cooldown (s)、Notify Ats。
使用前请确认网络可用及相关 API/平台账号配置完整。

## 配置项
- Async（异步）
 类型：布尔；默认：true
 说明：用于控制是否异步处理。默认值 true 通常能减少主线程卡顿；若你遇到并发相关问题，可回退到更保守设置测试。
- Mode（模式）
 类型：枚举；默认："Notify"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 Notify ，确认稳定后再逐项切换比较效果。
 可选：Off（关闭）；Notify（通知）；Chatter（弹幕）；Actionbar（行为栏）；Title（标题）；WinToast（系统通知）
- Off（关闭）
 类型：文本；默认："Notify", "Chatter", "Actionbar", "Title", "WinToast"
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Show Reply Content（显示回复内容）
 类型：枚举；默认："Chatter"
 说明：这是行为开关项。显示回复内容时会过滤明显过旧的回复，并在 B 站回复列表未及时刷新时最多重试 3 次；有效时间窗口取 Query Cooldown (s) 与 180 秒中的较大值。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
 可选：Off（关闭）；Console Output（控制台输出）；Notify（通知）；Chatter（弹幕）；Actionbar（行为栏）；WinToast（系统通知）
- Reply Content Max Length（回复内容最大长度）
 类型：数值；默认：80U
 说明：这是数值型配置。默认值 80U 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Reply Time Lapse Max Allowed (s)（回复时间最大允许偏差，秒）
 类型：数值；默认：300L
 说明：显示回复内容时允许回复时间与本地时间存在的最大偏差。若平台返回的回复时间略晚于本地时间，仍会在该阈值内视为有效；调大可兼容时钟或接口延迟，调小可更严格过滤异常时间。
- Query Cooldown (s)（查询冷却（秒））
 类型：数值；默认：5L
 说明：用于控制检测/刷新/动画节奏。默认值 5L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Connect Timeout (s)（连接超时时间 (秒)）
 类型：数值；默认：4L
 说明：用于控制检测/刷新/动画节奏。默认值 4L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Ignore Negative Changes（忽略负值变化。）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Notify Ats（通知@我的消息。）
 类型：布尔；默认：true
 说明：用于选择结果反馈方式。默认值 true 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Notify Chats（通知私信消息。）
 类型：布尔；默认：true
 说明：用于选择结果反馈方式。默认值 true 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Notify Likes（通知点赞消息。）
 类型：布尔；默认：true
 说明：用于选择结果反馈方式。默认值 true 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Notify Comments（通知回复消息。）
 类型：布尔；默认：true
 说明：用于选择结果反馈方式。默认值 true 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Notify Coins（通知投币消息。）
 类型：布尔；默认：true
 说明：用于选择结果反馈方式。默认值 true 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Notify Danmaku (PRO)（通知弹幕（专业版））
 类型：布尔；默认：true
 说明：通过创作中心获取自己投稿视频的新弹幕并按 Mode 输出。免费版不提供此配置和查询逻辑。
- Danmaku Max Characters（弹幕最大字符数）
 类型：数值；默认：30
 说明：限制通知中弹幕正文的最大字符数，超出后会省略显示。
- Danmaku Show Timestamp（弹幕显示视频时间）
 类型：布尔；默认：true
 说明：在昵称后显示弹幕在视频中的发送时间。小时为 0 时显示 MM:SS，否则显示 HH:MM:SS。
- Danmaku Show Video Title（弹幕显示视频标题）
 类型：布尔；默认：true
 说明：在消息末尾追加 `(From "视频标题")`。
- Danmaku Ignore Self（弹幕忽略自己）
 类型：布尔；默认：false
 说明：忽略当前登录 B 站账号发送的弹幕。
- Danmaku Exclusion（弹幕排除）
 类型：布尔；默认：true
 说明：启用弹幕正文精确匹配排除。
- Danmaku Exclusion Items (Sep With Semicolon)（弹幕排除项（英文分号分隔））
 类型：文本；默认："1;2;3;4;5"
 说明：使用英文分号分隔需要排除的完整弹幕正文，仅精确匹配。
- Notify Favorites（通知收藏消息。）
 类型：布尔；默认：true
 说明：用于选择结果反馈方式。默认值 true 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Notify Uploader Helper Messages（通知UP主小助手消息。）
 类型：布尔；默认：true
 说明：用于选择结果反馈方式。默认值 true 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Notify System Messages（通知系统消息。）
 类型：布尔；默认：true
 说明：用于选择结果反馈方式。默认值 true 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- PREVIOUS DATA（上一次的缓存数据。无需修改。）
 类型：文本；默认："{\"at\":0,\"chat\":0,\"coin\":0,\"danmu\":0,\"favorite\":0,\"like\":0,\"recv_like\":0,\"recv_reply\":0,\"reply\":0,\"sys_msg\":0,\"up\":0} ...
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
## 历史更新
- 60. 专业版弹幕通知改用创作中心接口，可显示弹幕正文、视频时间和来源标题，并支持忽略本人弹幕及精确排除内容。
- 31. 为 Bili Notifier 添加配置：
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
