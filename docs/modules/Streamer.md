# Streamer
主播模式
分类：Web
描述：主播模式。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
Streamer（主播模式）用于哔哩哔哩开播相关内容。
也可以自动帮你打开或关闭你的哔哩哔哩直播、管理分区标题等。
Streamer 属于面向自己直播间的模块；其中涉及 `Real Chatter` 或开播管理的能力默认发送/操作自己的直播间。与之不同，LiveStream/LiveChatter 的 `Real Chatter` 会发送到当前选择的 LiveStream `Room ID`。
开关 Streamer 时直接查询本人房间的直播状态并执行开播或停播，LiveStream 即使正在观察别人的直播间也能正常关播。此过程不切换 LiveStream 的房间号；`/bili live start`、`startsilent`、`stop` 同样始终操作本人房间。
分区设置、保持检查和实际分区同步统一在有重入保护的后台任务中进行，不受 Async 开关影响。每次设置分区都会像 `/bili live setarea` 一样在控制台输出完整 JSON 回复，并将房间 ID、分区 ID 和回复写入客户端日志；失败通知同时显示接口返回的错误码及原因。

## 配置项
- Room Title（直播间标题）
 类型：文本；默认：空文本，首次联网后自动同步本人房间标题。
 说明：替代旧的 Room Title (READONLY)，现在可以编辑；确认修改后自动应用到本人直播间。每次提交前先刷新实际标题，打开菜单时也会请求同步，平时按分钟同步。请求期间的新编辑不会被较早的同步结果覆盖；提交失败时提示原因，并在已读到实际标题时恢复实际值。标题上限为 40 个字符，可能需要 B 站审核；旧版只读标题不会自动作为修改请求提交。
- Async（异步）
 类型：布尔；默认：true
 说明：控制直播状态检测是否异步处理。标题同步与提交、分区设置、保持检查和实际分区同步始终在后台执行，不受此开关影响。分区设置根据完整回复中的 code 判断结果，成功时不会再误报失败。
- Sync Bili Live Status（同步B站直播状态）
 类型：布尔；默认：true
 说明：打开，打开后就代表模块开启代表已经开播，关闭表示已经关播。
- Update Cooldown (ms)（更新冷却（毫秒））
 类型：数值；默认：8000L
 说明：用于控制检测/刷新/动画节奏。默认值 8000L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Toggle Bili Live Status (PRO)（切换B站直播状态（专业版））
 类型：布尔；默认：false
 说明：开启后，开启这个模块会自动开播，关闭这个模块会自动关播。开关播会异步处理，避免主界面长时间卡顿；如果客户端启动恢复 Streamer 时触发开播，会额外显示标题提醒。
- Toggle LiveStream Module（切换直播间模块）
 类型：布尔；默认：true
 说明：自动联动LiveStream模块。
- Bili Live Platform（哔哩直播平台）
 类型：枚举；默认："pc_link"
 说明：别动他
 可选：pc_link（未收录）；web_link（网络_link）；android_link（未收录）
- Bili Live Area Class（哔哩直播分区大类）
 类型：枚举；默认：列表中的首个实际大类（列表不可用时显示“请选择”）
 说明：按大类筛选具体分区，例如单机游戏，不再提供 Current 或 Custom。每次启动调用与 `/bili live areas` 相同的接口获取完整分区列表，失败时保留上次成功缓存；切换大类会更新候选，并将具体分区重置为“请选择”，不会自动选择或设置第一个分区。图形模式在窗口、字体和着色器就绪后初始化分区，纯命令行模式只更新分区数据，不加载分区文字字体。
- Bili Live Area（哔哩直播分区）
 类型：枚举；默认：(Please Select...)（请选择）
 说明：显示“请选择”和所选大类下的真实分区名称，不再提供 Current 或 Custom；旧版英文预设及已知自定义 ID 会按分区 ID 映射为在线列表中的实际名称。“请选择”期间暂停分区设置、保持与反向同步，选中具体分区后才发起设置请求。此状态每 30 秒检查一次菜单：菜单仍打开时继续等待，菜单关闭时查询本人直播间并回填实际大类与分区，即使开启分区保持模式也会回填；请求完成前重新打开菜单或更改选择时不覆盖当前选择。也可使用 `/bili live setarea`。
- Bili Live Area (History)（哔哩直播历史分区）
 类型：枚举；默认：None
 说明：保存最近使用的最多五个具体分区，按“大类 / 分区”显示，重复分区移到最前。选择记录会回填大类与具体分区，历史随客户端正常保存或退出保存，跨客户端重启保留；切换分区不再立即全量保存所有记录。这三个分区选择项均置顶显示。
- Bili Live Area Keep Mode（哔哩直播分区保持模式）
 类型：布尔；默认：true
 说明：开启时不反向同步具体分区配置；主播模式开启后，每 3 秒在后台检查实际分区，不同时恢复为客户端设置，即使分区之前已经应用成功也会重新检查。关闭后不持续强制覆盖外部修改，而是跟随本人房间的实际分区，模块开启时每 3 秒、关闭时每 60 秒请求一次；不受 Sync Bili Live Status 是否开启影响。手动更改具体分区会单次应用。手动设置和保持模式共用后台任务，不并行重复提交分区请求。“请选择”期间暂停保持与常规同步，仅按每 30 秒检查菜单关闭后回填实际分区的规则处理。
- Param version（参数 version）
 类型：文本；默认："1.0.0"
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Param build（参数 build）
 类型：数值；默认：1234L
 说明：这是数值型配置。默认值 1234L 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Bili Live Area Custom Id（哔哩直播自定义分区ID）
 类型：数值；默认：701
 说明：仅保留为旧配置兼容及实际分区 ID 的内部记录，分区选项不再提供 Custom，因此正常界面不显示，也无需手动填写。
- Bili Live Stream Key Output（哔哩直播密钥输出）
 类型：枚举；默认："Both"
 说明：密钥输出设定。
 可选：Off（关闭）；Copy（复制）；Console Output（控制台输出）；Both（两者）
 
## 历史更新
- 39. 为 Streamer 添加配置项：
- 3. 添加了 Streamer 模块的更多的过滤项。
- 6. 添加模块：Streamer，打开这个模块后会自动隐藏一些隐私内容

## 备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

## 相关命令
/bili live info [roomId=~]
获得直播间原始信息JSON。

/bili live create
为自己创建一个直播间。

/bili live settitle &lt;title...&gt;
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

## 相关模块
- [LiveChatter (直播弹幕)](./LiveChatter.md)
- [LiveStream (直播间)](./LiveStream.md)

## 相关资料
- 观看视频的这一部分，如何使用该模块开播：
- [【Windows 桌面大纪 Jackal 0.9d更新】 【精准空降到 00:58】 ](https://www.bilibili.com/video/BV1JpF9zTEDk/?t=58)
