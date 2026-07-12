# LiveStream
直播间
分类：Web
描述：监听 B 站直播间弹幕、礼物和在线观众，并提供直播间管理、观众 HUD 与观众等级系统。

## 需求
- 安全级别：常规模块
- 权限需求：普通监听不需要管理员；开播、改标题、改分区、禁言、发弹幕等账号操作需要已登录 BiliSettings 账号。
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：普通可用；部分开播/礼物触发/高级筛选能力为 PRO

## 介绍
LiveStream 面向 B 站直播间使用：它会按 `Room ID` 拉取直播间弹幕、礼物、基础信息和在线观众数据，并把这些信息交给 LiveChatter、ChatBar、HUD、礼物触发器和观众等级系统使用。

首次使用建议先设置 `Room ID`，确认 `/bili login` 已登录，再开启模块。只想看弹幕和礼物时，保持默认配置即可；如果需要在 HUD 显示观众列表，再重点调整 `HUD Online Audience ...` 相关项；如果需要切换到别人的直播间观察，优先使用 `/bili live switch <roomId> auto`，它会帮你降低误发弹幕、误触发自动回复等风险。

## 配置项
- Room ID（房间号）
 类型：数值；默认：0L
 说明：LiveStream 当前监听和显示的直播间号。设为 0 时模块无法确定目标房间；可用 `/bili live setroom` 自动填入自己的直播间，或用 `/bili live switch <roomId> auto` 切换到指定房间。
- Auto Toggle LiveChatter Module（自动联动直播弹幕模块）
 类型：布尔；默认：true
 说明：开启 LiveStream 时自动打开 LiveChatter，关闭 LiveStream 时也会尝试关闭对应弹幕监听。想让弹幕模块独立运行时可关闭。
- Receive Info Data（接收信息数据）
 类型：布尔；默认：true
 说明：允许模块接收并刷新直播间基础信息，例如标题、主播、分区和在线观众相关数据。关闭后 HUD 和部分命令可能只能显示缓存或空数据。
- Gift Update Cooldown (ms)（礼物更新冷却，毫秒）
 类型：数值；默认：5000L
 说明：礼物流水查询间隔。调小会更快识别新礼物，但会增加接口请求；调大适合低频直播或只需要粗略礼物提醒的场景。
- Gift Check（礼物检查）
 类型：布尔；默认：true
 说明：是否定期检查直播间收到的礼物。关闭后不会触发礼物通知、礼物统计和礼物触发器。
- Gift Triggers Enabled (PRO)（启用礼物触发器）
 类型：布尔；默认：false
 说明：收到礼物后按配置文件执行命令。适合自动感谢、自动弹幕、联动特效；使用前应确认触发命令不会刷屏或误操作。
- Gift Triggers Config Path（礼物触发器配置路径）
 类型：文本；默认："config/liveStreamGiftTriggers.ini"
 说明：礼物触发规则文件路径。文件不存在或为空时触发器不会生效；建议放在 config 目录，便于随配置一起管理。
- Gift Trigger Default Command（礼物触发器默认命令）
 类型：文本；默认："/bili live chatter Thanks {{nickname}} for {{gift}}[比心]!!!"
 说明：当礼物没有命中特定规则时执行的默认命令。可使用 `{{nickname}}`、`{{gift}}` 等占位符组成感谢弹幕或其他命令。
- Gift Trigger Default Command Cooldown (ms)（礼物默认命令冷却，毫秒）
 类型：数值；默认：1000L
 说明：默认礼物命令的最小触发间隔。礼物很多时建议调大，避免连续发送过快被平台限制。
- Gift Notify Mode（礼物通知模式）
 类型：枚举；默认："Notify"
 说明：选择收到礼物时的提示方式。想安静记录选 Off；想在客户端内看到选 Notify/Actionbar/Title；想朗读选 Speak；想系统通知选 WinToast。
 可选：Off；Notify；Chatter；Speak；Title；Actionbar；WinToast
- Gift Value Display（礼物价值显示）
 类型：枚举；默认："Off"
 说明：控制礼物提示里是否附带价值。Gold、Hamster、Silver 对应不同 B 站礼物计价字段；不关心价值时保持 Off，提示会更简洁。
 可选：Off；Gold；Hamster；Silver
- Gift Title Color（礼物标题颜色）
 类型：枚举；默认："Flow"
 说明：当礼物以 Title 方式显示时使用的颜色。背景复杂时建议选固定高对比颜色；想保持动态视觉可用 Flow。
 可选：Flow；其余颜色见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Connect Timeout (s)（连接超时时间，秒）
 类型：数值；默认：8L
 说明：直播间、礼物、观众和管理接口的请求超时时间。网络不稳定时可调大；想让失败更快返回可调小。
- Notify Audience Enter（观众进入通知）
 类型：枚举；默认："Off"
 说明：观众进入直播间时的提示方式。Real Chatter 会真的向直播间发弹幕，启用前务必确认你希望公开发送。
 可选：Off；Notify；Chatter；Real Chatter；Speak；Title；Actionbar
- Notify Audience Enter Filter (PRO)（观众进入通知筛选）
 类型：枚举；默认："All"
 说明：限制哪些进入事件会触发提示。观众量大时建议选 Fans、Paid Fans 或 Guard，避免提示过多。
 可选：All；Fans；Paid Fans；Guard（非 PRO 仅 All）
- Notify Audience Enter Chatter Color（观众进入弹幕颜色）
 类型：枚举；默认："Colorful"
 说明：进入提示以 Chatter 方式显示时使用的颜色。建议选择与普通弹幕不同的颜色，方便区分进入事件。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Notify Audience Leave（观众离开通知）
 类型：枚举；默认："Off"
 说明：观众离开直播间时的提示方式。离开事件通常更频繁，默认关闭以减少干扰；Real Chatter 同样会公开发弹幕。
 可选：Off；Notify；Chatter；Real Chatter；Speak；Title；Actionbar
- Notify Audience Leave Filter (PRO)（观众离开通知筛选）
 类型：枚举；默认："All"
 说明：限制哪些离开事件会触发提示。若只关心核心观众流失，可选 Paid Fans 或 Guard。
 可选：All；Fans；Paid Fans；Guard（非 PRO 仅 All）
- Notify Audience Leave Chatter Color（观众离开弹幕颜色）
 类型：枚举；默认："Black"
 说明：离开提示以 Chatter 方式显示时使用的颜色。建议与进入提示颜色不同，便于扫一眼辨认方向。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Audience Name Display（观众名称显示）
 类型：枚举；默认："Default"
 说明：控制观众名字在提示、HUD 和相关输出中的显示方式。UID 适合排查账号；Head/Head + Tail 适合隐私显示；Netease Nickname 会尝试使用映射昵称。
 可选：Default；Head；Head + Tail；UID；Netease Nickname
- Audience Enter Preset（观众进入文案预设）
 类型：枚举；默认："Enter"
 说明：观众进入时使用的提示文案风格。Random 会在多个文案中随机选择，让提示不那么重复。
 可选：Enter；Welcome；Join；Random
- Audience Leave Preset（观众离开文案预设）
 类型：枚举；默认："Leave"
 说明：观众离开时使用的提示文案风格。Random 会随机选择离开文案。
 可选：Leave；Depart；Random
- Notify Audience Face Download（观众通知下载头像）
 类型：布尔；默认：false
 说明：进入/离开通知需要头像时下载观众头像。开启会增加网络请求和缓存文件；只看文字提示时保持关闭。
- HUD（显示 HUD）
 类型：布尔；默认：true
 说明：控制 LiveStream 是否绘制直播间 HUD。关闭后仍可监听弹幕、礼物和命令，但不会显示 LiveStream 自己的 HUD 面板。
- HUD Give Way to Mouse（HUD 避让鼠标）
 类型：布尔；默认：true
 说明：鼠标靠近 HUD 时降低遮挡或让出交互空间。直播时需要频繁点屏幕边缘，建议保持开启。
- HUD X Rate（HUD 横向位置比例）
 类型：数值；默认：0.05f
 说明：HUD 左上角相对窗口宽度的位置。0 靠最左，1 靠最右；常用范围是 0.02 到 0.2。
- HUD Y Rate（HUD 纵向位置比例）
 类型：数值；默认：0.2f
 说明：HUD 左上角相对窗口高度的位置。调大向下移动；避免与 Arraylist、聊天栏、Island 等 HUD 重叠。
- HUD Information Font Size（HUD 信息字号）
 类型：数值；默认：30
 说明：直播间基础信息的字号。高分屏或远距离观看可调大；信息挤压时调小。
- HUD Online Audience Animation Speed（在线观众动画速度）
 类型：数值；默认：6.0f
 说明：在线观众列表变化时的动画跟随速度。数值越大越快，越小越柔和；觉得列表跳动明显时可降低。
- HUD Show Basic Information（显示直播间基础信息）
 类型：布尔；默认：true
 说明：显示房间标题、主播、分区、状态等摘要。只想看在线观众列表时可关闭。
- HUD Show Online Audience（显示在线观众）
 类型：布尔；默认：true
 说明：显示在线观众列表。关闭后会减少头像、昵称和在线时长绘制开销。
- HUD Online Audience Query Source（在线观众查询源）
 类型：枚举；默认："New"
 说明：选择在线观众数据来源。New 是当前推荐来源；Front-end 适合作为兼容回退；Gold Rank API 偏向贡献榜相关数据。
 可选：Gold Rank API；Front-end；New
- HUD Online Audience Scroll Mode（在线观众滚动方式）
 类型：枚举；默认："Wheel"
 说明：观众列表超过可显示数量时的滚动控制。Wheel 允许鼠标滚轮滚动；Key & Wheel 需要配合滚动键，避免误滚。
 可选：Off；Wheel；Key & Wheel
- HUD Online Audience Scroll Key（在线观众滚动键）
 类型：按键；默认：左 Alt
 说明：当滚动模式为 Key & Wheel 时，按住该键再滚轮才会滚动观众列表。
- HUD Online Audience Query API Host UID（在线观众查询主播 UID）
 类型：文本/数值；默认：WORMWAKER_MID
 说明：部分观众接口需要主播 UID。监听自己的直播间时可用 `/bili live switch back` 或 `/bili live setroom` 自动校准；切换到别人直播间时 `/bili live switch <roomId> auto` 会尝试填入对应主播 UID。
- HUD Online Audience Query API Page Size（在线观众查询页大小）
 类型：数值；默认：2
 说明：每次向在线观众接口请求的页大小。接口本身限制较小，默认 2 更稳；调大不一定能拿到更多数据。
- HUD Online Audience Update Cooldown (ms)（在线观众刷新间隔，毫秒）
 类型：数值；默认：8000L
 说明：在线观众列表刷新频率。调小更新更及时但请求更多；观众量不大或网络不稳时建议调大。
- HUD Online Audience Max Count（在线观众最大显示数量）
 类型：数值；默认：12U
 说明：HUD 同时显示的观众数量。调大可以看到更多人，但会占用更多屏幕空间。
- HUD Online Audience Cache Size（在线观众缓存大小）
 类型：数值；默认：30
 说明：保留在内存中的观众条目数量。应大于 Max Count，方便滚动和动画；太大没有明显收益。
- HUD Online Audience Nickname Font Size（在线观众昵称字号）
 类型：数值；默认：20
 说明：在线观众昵称的字号。头像开启时建议与头像尺寸保持接近，避免行高不协调。
- HUD Online Audience Face（显示在线观众头像）
 类型：布尔；默认：true
 说明：在在线观众列表中显示头像。关闭可减少图片下载、缓存和绘制开销。
- HUD Online Audience Face Circle（圆形头像）
 类型：布尔；默认：true
 说明：把观众头像裁成圆形。关闭后使用方形头像，显示更直接但视觉上更硬。
- HUD Online Audience Face Update Cooldown (d)（头像更新冷却，天）
 类型：数值；默认：7
 说明：同一观众头像缓存多久后重新下载。想减少网络请求可调大；头像更新不及时可调小。
- HUD Online Audience Line Gap（在线观众行距）
 类型：数值；默认：35
 说明：观众列表每行之间的距离。字号或头像变大时需要同步调大，避免重叠。
- HUD Online Audience Background（在线观众背景）
 类型：布尔；默认：true
 说明：为在线观众列表绘制背景，提高复杂画面上的可读性。追求极简 HUD 时可关闭。
- HUD Online Audience Background Unification（统一在线观众背景）
 类型：布尔；默认：true
 说明：开启时使用一个整体背景包住列表；关闭时更接近逐项背景效果。整体背景更整齐，逐项背景更轻。
- HUD Online Audience Background Roundness（在线观众背景圆角比例）
 类型：数值；默认：0.3f
 说明：控制背景圆角大小。数值越大越圆；如果列表很窄，过大可能显得胶囊化。
- HUD Online Audience Background Round Corners（在线观众背景圆角开关）
 类型：布尔；默认：true
 说明：关闭后背景使用直角矩形，适合想要更硬朗或更省绘制复杂度的 HUD。
- HUD Online Audience Background Opacity (0~1)（在线观众背景不透明度）
 类型：数值；默认：0.5f
 说明：背景透明度。看不清观众名时调高；遮挡直播画面时调低。
- HUD Online Audience Background Shadow（在线观众背景阴影）
 类型：布尔；默认：true
 说明：给观众列表背景加阴影，让它从画面里分离出来。低端设备或极简风格可关闭。
- HUD Online Audience Background Shadow Thickness（在线观众背景阴影厚度）
 类型：数值；默认：20.0f
 说明：阴影扩散范围。数值越大阴影越柔、范围越宽；过大可能显脏。
- HUD Online Audience Background Shadow Opacity (0~1)（在线观众背景阴影不透明度）
 类型：数值；默认：0.5f
 说明：阴影强度。背景复杂时可调高，纯色背景上可调低。
- HUD Online Audience Background Color（在线观众背景颜色）
 类型：枚举；默认："Black"
 说明：在线观众列表背景色。深色直播画面可改成 Gray/White 等高对比色；动态主题可用 Flow。
 可选：Flow；其余颜色见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- HUD Online Audience Background Shadow Color（在线观众背景阴影颜色）
 类型：枚举；默认："Black"
 说明：在线观众列表阴影颜色。通常保持 Black 即可；浅色 HUD 可改成更柔和的灰色系。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- HUD Online Audience Time Mode（在线观众时长模式）
 类型：枚举；默认："Absolute"
 说明：控制观众列表右侧/附加时间的含义。Off 不显示时间；Absolute 显示本日累计在线；Relative 显示本次观察中的相对时长；Level System 使用观众等级系统数据。
 可选：Off；Absolute；Relative；Level System
- Audience Level Upgrade Congratulations（观众升级祝贺）
 类型：枚举；默认："Real Chatter"
 说明：观众等级提升时的反馈方式。Real Chatter 会真实发送直播弹幕，适合公开互动；只想本地提示可选 Notify/Title/Speak。
 可选：Off；Chatter；Notify；Title；Real Chatter；Speak；WinToast
- Audience Level System Only Followers（观众等级仅统计粉丝）
 类型：布尔；默认：true
 说明：只为粉丝/关注者累计观众等级数据。关闭后会记录更多临时观众，数据量会更大。
- Audience Level System Speed（观众等级增长速度）
 类型：数值；默认：1.0f
 说明：观众在线经验倍率。大于 1 升级更快，小于 1 更慢；建议稳定后再调整，避免历史数据节奏突变。
- Audience Level Up Only When Host is Present（主播在场才升级）
 类型：布尔；默认：true
 说明：只有检测到主播在场或直播有效时才累计观众等级。关闭后可能把挂机观察时间也计入等级。
- Wipe Audience Profile If Not Fans（非粉丝清理观众档案）
 类型：布尔；默认：true
 说明：当观众不再满足粉丝条件时清理其等级档案。该清理需要当前客户端已登录 B 站账号；未登录时会跳过，避免无法确认粉丝关系时误删档案。适合保持档案干净；如果想保留历史路人观众，可关闭。
- HUD Online Audience Max Absolute Time (min)（在线观众最大绝对时长，分钟）
 类型：数值；默认：240
 说明：Absolute 时间模式下单个观众显示/累计的上限。防止异常接口或长时间挂机把在线时长刷得过大。

## 历史更新
- v1.1.2：在线观众 HUD 缓存与直播提醒状态迁移到 `output/Cache` 下的独立 JSON 文件，减少 Records.json 体积和保存卡顿。
- v1.1.2：新增直播间封禁检测，封禁时会显示恢复时间并阻止直播弹幕发送或开播。
- 14. 添加模块 LiveStream，支持获取 B 站直播间弹幕并显示。

## 备注
- 直播间管理命令依赖 BiliSettings 登录状态；不要把 Cookies、直播推流码或控制台输出截图发给他人。
- `Real Chatter`、`/blc`、`/bili live chatter`、礼物默认命令等会真实发送直播弹幕，建议先在低风险环境测试。
- 切到别人直播间观察时，推荐用 `/bili live switch <roomId> auto`，它会自动关闭部分自动回复、礼物触发和远程执行相关配置，并可用 `/bili live switch back` 恢复。
- HUD 在线观众依赖 B 站接口可用性；接口变化或风控时可尝试切换 `HUD Online Audience Query Source`。

## 相关命令
- `/livestreaminfo`
 输出当前 LiveStream 缓存信息 JSON，适合排查 HUD、在线观众、直播间状态是否已经刷新。
- `/bili live` 或 `/bili live feed/recommend [limit]`
 获取推荐直播间列表；不传 limit 时使用默认数量。
- `/blc <content...>`
 快捷发送直播弹幕，等价于向当前 `Live Stream.Room ID` 使用 `/bili live chatter` 入队发送。
- `/bili live addchatter <room_id> <content...>`
 向指定直播间发送弹幕；`room_id` 为 `~` 时使用 `Live Stream.Room ID`。
- `/bili live chatter <content...>`
 向当前 `Live Stream.Room ID` 入队发送弹幕。
- `/bili live leetchatter <content...>`
 先经过 Clipboard Tweaks 文本处理，再向当前直播间入队发送弹幕。
- `/bili live cq`、`/bili live cq list|show|display`
 查看直播弹幕发送队列、暂停状态和剩余发送时间。
- `/bili live clcq`、`/bili live cq clear`
 清空直播弹幕发送队列。
- `/bili live cq pause`、`/bili live cq resume`
 暂停或恢复直播弹幕发送队列。
- `/bili live cq add <msg...>`
 把弹幕加入当前房间发送队列。
- `/bili live cq direct <msg...>`
 立即向当前房间发送弹幕，不经过队列延迟。
- `/bili live go [roomId=~]`
 打开直播间网页；不传或传 `~` 时使用 `Live Stream.Room ID`。
- `/bili live link [roomId=~]`
 输出并复制直播间链接。
- `/bili live following`
 查询已关注 UP 的直播状态。
- `/bili live audience [roomId=~]`
 输出当前缓存或指定直播间的在线观众信息。
- `/bili live likeauds [roomId=~] [limit=5]`、`/bili live likeauds2 [roomId=~] [limit=5]`
 给直播间观众动态点赞；属于账号行为，使用前确认目标和数量。
- `/bili live host [uid=~]`、`/bili live hostinfo [uid=~]`
 查询主播资料、粉丝数、直播间号和粉丝牌信息。
- `/bili live fetch [limit=100]`、`/bili live chat [limit=100]`
 拉取并输出当前直播间最近弹幕。
- `/bili live fetchraw [limit=100]`
 输出最近弹幕原始 JSON，适合调试字段结构。
- `/bili live setroom`
 当 `Room ID` 还未设置时，自动填入当前登录账号自己的直播间号。
- `/bili live switch <roomId> force|auto`
 切换 LiveStream 目标房间。`force` 只切换房间；`auto` 会调整可能造成误发弹幕或误触发自动回复的配置，并保存可恢复备份。
- `/bili live switch back`
 切回自己的直播间，并恢复上次 `switch ... auto` 备份的配置。
- `/bili live info [roomId=~]`
 输出直播间基础信息 JSON。
- `/bili live status`
 输出自己直播间综合状态，包括基础信息、诊断结果、封禁/恢复时间和最新违规记录。
- `/bili live violation [page=1] [pageSize=6]`
 查看自己直播间违规记录。
- `/bili live create`
 为当前登录账号创建直播间。
- `/bili live settitle <title...>`
 【PRO】设置直播间标题。
- `/bili live gettitle [roomId=~]`、`/bili live title [roomId=~]`
 获取直播间标题。
- `/bili live areas`
 查看可用直播分区及 ID。
- `/bili live area`、`/bili live getarea [roomId=~]`
 获取直播间当前分区。
- `/bili live area <area_id/area_name>`、`/bili live setarea <area_id/area_name>`
 设置直播间分区；支持 ID 或模糊匹配分区名，匹配失败会输出候选项。
- `/bili live start [area=current]`、`/bili live startsilent [area=current]`
 【PRO】开播。使用当前 `Live Stream.Room ID`，可指定分区 ID；`startsilent` 不输出推流码提示。
- `/bili live stop`
 【PRO】停止当前直播。
- `/bili live levelsystem list`
 列出观众等级系统档案。
- `/bili live levelsystem save`
 立即保存观众等级系统档案。
- `/bili live mute <uid/name> <duration_flag>`
 禁言直播间用户。`0`/`current` 表示本场直播，`-1`/`permanent` 表示永久。
- `/bili live muted`
 查看直播间已禁言用户列表。
- `/bili live unmute <uid/name>`
 解除指定用户禁言。
- `/chathistory clear livestream`
 清空 LiveStream/LiveChatter AI 上下文历史。

## 相关模块
- [BiliSettings (B站设置)](./BiliSettings.md)
- [LiveChatter (直播弹幕)](./LiveChatter.md)
- [ChatBar (聊天栏)](./ChatBar.md)
- [Streamer (主播模式)](./Streamer.md)
- [BiliNotifier (B站通知)](./BiliNotifier.md)
- [ClipboardTweaks (剪贴板增强)](./ClipboardTweaks.md)
- [NAMED_COLOR_BASE_LIST (颜色列表)](./NAMED_COLOR_BASE_LIST.md)

## 相关资料
无
