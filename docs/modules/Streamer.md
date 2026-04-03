Streamer
主播模式
分类：Web
描述：防止直播过程中发生意外。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
Streamer（主播模式）用于防止直播过程中发生意外。
也可以自动帮你打开或关闭你的哔哩哔哩直播、管理分区标题等。

配置项
- Async（异步）
 类型：布尔；默认：true
 说明：用于控制是否异步处理。默认值 true 通常能减少主线程卡顿；若你遇到并发相关问题，可回退到更保守设置测试。
- Sync Bili Live Status（同步B站直播状态）
 类型：布尔；默认：true
 说明：打开，打开后就代表模块开启代表已经开播，关闭表示已经关播。
- Update Cooldown (ms)（更新冷却（毫秒））
 类型：数值；默认：8000L
 说明：用于控制检测/刷新/动画节奏。默认值 8000L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Toggle Bili Live Status (PRO)（切换B站直播状态（专业版））
 类型：布尔；默认：false
 说明：开启后，开启这个模块会自动开播，关闭这个模块会自动关播。
- Toggle LiveStream Module（切换直播间模块）
 类型：布尔；默认：true
 说明：自动联动LiveStream模块。
- Bili Live Platform（哔哩直播平台）
 类型：枚举；默认："pc_link"
 说明：别动他
 可选：pc_link（未收录）；web_link（网络_link）；android_link（未收录）
- Bili Live Area（哔哩直播分区）
 类型：枚举；默认："Current"
 说明：选择你的直播分区。也可以使用/bili live setarea命令。
 可选：Current（当前）；Indie Game（独立游戏）；Other Standalones（其他单机）；Console Games（主机游戏）；Minecraft（未收录）；Terraria（未收录）；CS:GO（未收录）；Science（未收录）；Virtual（虚拟）；Custom（自定义）
- Param version（参数 version）
 类型：文本；默认："1.0.0"
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Param build（参数 build）
 类型：数值；默认：1234L
 说明：这是数值型配置。默认值 1234L 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Bili Live Area Custom Id（哔哩直播自定义分区ID）
 类型：推荐用 /bili live setarea 命令而不是这个。
 说明：这是数值型配置。默认值 701L 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Bili Live Stream Key Output（哔哩直播密钥输出）
 类型：枚举；默认："Both"
 说明：密钥输出设定。
 可选：Off（关闭）；Copy（复制）；Console Output（控制台输出）；Both（两者）
 
历史更新
- 39. 为 Streamer 添加配置项：
- 3. 添加了 Streamer 模块的更多的过滤项。
- 6. 添加模块：Streamer，打开这个模块后会自动隐藏一些隐私内容

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
/bili live info [roomId=~]
获得直播间原始信息JSON。

/bili live create
为自己创建一个直播间。

/bili live settitle <title...>
【PRO】设置直播间标题为 title。

/bili live gettitle [roomId=~]
/bili live title [roomId=~]
获取直播间标题。

/bili live areas
查看所有直播分区及其ID。

/bili live area
/bili live getarea [roomId=~]
获取直播间分区。使用 /bili live areas 查看所有分区。

/bili live area <area_id/area_name>
/bili live setarea <area_id/area_name>
设置直播间分区。可填分区ID或分区名。分区名将自动模糊匹配（命中规则：相似度>0.8，或>0.6且领先第二名>0.2）；若匹配失败会输出候选分区。使用 /bili live areas 查看所有分区。

/bili live start [area=current]
/bili live startsilent [area=current]
【PRO】立即开播。房间号将采用 LiveStream 直播间模块的房间号。area为分区ID，如果不填则为当前分区。startsilent 子命令是静默开播，不会提示任何信息。

/bili live stop
【PRO】关闭直播。房间号将采用 LiveStream 直播间模块的房间号。

相关模块
- [LiveChatter (直播弹幕)](./LiveChatter.md)
- [LiveStream (直播间)](./LiveStream.md)

相关资料
观看视频的这一部分，如何使用该模块开播：
【Windows 桌面大纪 Jackal 0.9d更新】 【精准空降到 00:58】 https://www.bilibili.com/video/BV1JpF9zTEDk/?t=58
