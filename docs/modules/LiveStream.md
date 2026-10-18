# LiveStream

LiveChatter 的消息流弹幕荣耀等级支持读取 `info[0][15].user.wealth.level` 和 `info[16][0]`，兼容 `extra.wealth_level`，不再因发送者不在观众名单中而遗漏等级。醒目留言控制台边框按终端显示列宽适配标题与正文，ChatBar 则按实际字体和换行后的像素宽度适配；控制台普通弹幕使用与 ChatBar 一致的社交文本高亮。
直播间
分类：Web
描述：监听 B 站直播间弹幕、礼物和在线观众；抖音支持游客房间信息监控、公共聊天弹幕和礼物接收。

## 抖音接入（第三轮）

弹幕用户名颜色使用抖音推送身份：当前主播的有效粉丝团成员为粉色，主播为绿色，未知身份保持默认色；其它主播的粉丝团和 B 站关系不参与判定。普通关注关系在游客推送缺失时无法可靠识别。接收端不屏蔽主播本人弹幕，但无法补回平台未向游客广播的仅发送者可见消息。

在 `Platform` 选择 `Douyin`，将网页房间号或完整 `live.douyin.com` 链接填入 `Douyin Room`。开启本模块或 LiveChatter 后共用一个后台任务：先查询房间信息，开播后自动建立抖音 WSS 弹幕连接。查询会携带抖音网页端所需的房间、浏览器和临时令牌参数，以兼容当前网页接口。抖音基础 HUD 支持在 `HudEditor` 中直接拖动调整位置。暂不展开短链接，也不读取 B 站 Cookie。

当前接入同一条抖音 WSS 的公共聊天弹幕、表情弹幕、礼物、点赞、进场、关注/分享互动和房间统计：昵称、用户 ID、内容、礼物名称、数量和时间会进入现有处理链。礼物沿用 `Gift Check`、通知、ChatBar 聚合和 PRO 礼物触发器，这些配置在抖音下正常显示、与 B 站共用，只有旧版礼物轮询冷却隐藏。连击按房间、发送者 UID、礼物 ID 和 groupId 记录累计数量，仅将新增数量及相应金额进入聚合；不等待结束包，重复包与相同数量结束包不重复累计。现有聚合在约 3 秒无新增后输出通知并执行触发器。`Gift Value Display` 使用抖音礼物的标准化价值参与提示和 `{{value}}` 占位符，抖音仍自动按抖币显示，1 元 = 10 抖币。点赞会更新点赞数，房间统计会更新 HUD 的观看人数，进场事件沿用观众进入通知。连接断开后按退避策略重连；未开播时按 `Live Check Interval (s)` 等待。另已接入观众榜轮询；榜单不保证覆盖全部在线用户，不根据缺席推断离场。抖音发送和账号互动仍未接入。

- `Wait For Live` 默认开启，未开播时按 `Live Check Interval (s)` 查询，默认 60 秒；关闭后确认未开播即暂停，直到手动重连或修改设置。
- `Douyin Room Info Interval (s)` 默认 30 秒，用于刷新房间标题、状态和观看人数；开播后弹幕连接保持独立，不依赖该刷新间隔。
- `Receive Info Data` 关闭时暂停抖音查询和弹幕连接；切换平台会自动停止旧平台接收并恢复 B 站队列。
- 抖音 `HUD Basic Info` 与 B 站共用统计绘制和配置：在 `HUD Basic Info Data` 选择 Audience（在线人数）、View（总观看人数）、Like（点赞数），可同时显示三项，顺序为在线人数、总观看人数、点赞数。沿用 Text / Normal (PRO)、数字格式、颜色、缩放和透明度，不改写已有多选值。在线人数优先使用实时 `online_count`，缺失时回退到房间统计或文字人数；总观看人数使用 `views`（兼容数字字符串），缺失时回退到房间统计的 `total_pv_for_anchor` / `total_user`；点赞数使用累计 `likes`。未知数字显示 `--`，真实 0 正常显示；不额外发起网络查询。
- `/douyin live status` 彩色输出房间、主播、开播、监控、连接与接收事件计数等状态摘要；`/douyin live info` 输出原始 JSON（含各类接收能力标记），便于诊断和脚本读取。两者均读取当前缓存，不额外查询；`/bili live reception reconnect` 在抖音模式会重新查询并建立弹幕连接；`/livestreaminfo` 保留为 JSON 兼容命令。
- 入场消息使用 `Notify Audience Enter` 选择本地通知方式，支持入场文案、昵称显示和聊天栏通知颜色；附属选项仍按通知方式显示。抖音入场不受隐藏的 B 站身份筛选影响；离场通知及 B 站专属筛选继续隐藏，`Real Chatter` 不会在抖音模式发送弹幕。
- 仅尝试游客访问；验证码、访问限制、HTTP、JSON、WSS 或签名错误会保留旧房间信息并显示失败原因，不绕过验证。
- 抖音模式不复用 B 站礼物、观众名单、房管和发送接口；发送入口保持禁用，避免把抖音消息误发到 B 站房间。

抖音 WSS 使用仓库内的 `assets/douyin_sign.js` 生成连接签名，并兼容 Windows 系统自带的 Chakra JSRT 接口，不需要额外安装第三方运行库；接收端解析 `PushFrame`、gzip `Response`、聊天、礼物、点赞、进场、社交互动和房间统计消息，并限制单包、消息队列和缓存大小。抖音事件使用独立的 `DOUYIN_*` 内部事件，不映射成 B 站协议；抖音模式的 `Real Chatter` 不会调用 B 站发送接口。
### 抖音观众榜与等级档案

- 开启 LiveStream、HUD、`HUD Show Online Audience` 和 `Receive Info Data` 后，开播房间按 `HUD Online Audience Update Cooldown (ms)` 轮询观众榜，最低间隔 5 秒。复用系统 Chakra 自动生成 a_bogus，不需要 Node、npm 或额外原生运行库，不使用请求样例中的固定签名或令牌。请求错误见 `/douyin live status` 或 `info` 的 `audience_error`，不再额外显示 Douyin Live、Host、Connected 等 HUD 说明行。
- 观众榜昵称、头像、荣耀等级分别读取 `user.nickname`、`user.avatar_thumb.url_list`、`user.pay_grade.level`。荣耀等级沿用 B 站原有的等级符号、颜色和绘制格式，不使用粉丝牌的纯数字格式。`follow_info.follow_status` 为 3 时显示粉丝粉色，为 2 时显示互粉浅金色，0 为默认；主播为绿色，不套用 B 站关系或大航海。
- 粉丝牌仅显示 `[等级]`，如 `[12]`；`user.fans_club.data.user_fans_club_status` 为 1 时黄色，2 时灰色，不显示牌名。列表、头像、滚动、背景、昵称显示及动画复用现有观众 HUD。`HUD Online Audience Query Source`、B 站查询 UID/页大小与资料缓存容量在抖音下继续隐藏。
- `HUD Title` 两平台使用完整的同一套配置，含自定义文本、Float、偏移、颜色及透明度。新增 `HUD Title Position`，默认 `Above Basic Info`，可选 `Below Basic Info`；标题、统计及列表间距按字号自动排布，不再使用固定大间隙。
- 抖音等级选项位于 `Audience Level (Douyin)`，配置键以 ` (Douyin)` 为后缀。默认仅粉丝积累经验、速度 1、升级提示 Chatter；主播在榜限制和清除非粉丝档案默认关闭。使用 Level System 时间模式时显示这些配置。统计仅表示被榜单观察到的在线时间，不代表完整或精确的观看记录；榜单过期后停止累计。
- 档案和在线时间保存于 `config/audience_profiles_douyin.json`；原 B 站的 `audience_profiles.json` 不重命名。头像缓存为 `bili_avatar_<uid>_douyin.jpg`，不读取 B 站观众资料缓存，切换平台保留各自经验与在线时间。抖音升级通知不支持发送真实弹幕。

## 需求
- 安全级别：常规模块
- 权限需求：普通监听不需要管理员；开播、改标题、改分区、禁言、发弹幕等账号操作需要已登录 BiliSettings 账号。
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：普通可用；部分开播/礼物触发/高级筛选能力为 PRO

## 介绍
LiveStream 面向 B 站直播间使用：它会按 `Room ID` 拉取直播间弹幕、礼物、基础信息和在线观众数据，并把这些信息交给 LiveChatter、ChatBar、HUD、礼物触发器和观众等级系统使用。

LiveStream/LiveChatter 的 `Real Chatter` 会发送到当前选择的 `Room ID`；其它模块的 `Real Chatter`（包括 Streamer）默认发送到自己的直播间。ChatBar 同步直播弹幕时也以当前选择的 `Room ID` 为准，而不是固定使用自己的直播间。

当直播间或主播权限导致观众 UID 不可用时，LiveStream HUD 和 ChatBar 会跳过 B 站用户关系查询，避免使用 UID 0 触发请求错误。

观众 HUD 仅在头像尚未加载且没有下载任务时检查头像缓存目录，文件列表仅包含 B站头像。观众缓存按 UID 建立查询索引，更新或裁剪缓存后重新生成，保留昵称回退与房间匹配规则。当前登录 UID 复用已解析结果，登录、退出、切换账号或 Profile 改变 Cookie 时立即刷新。

首次使用建议先设置 `Room ID`，确认 `/bili login` 已登录，再开启模块。只想看弹幕和礼物时，保持默认配置即可；如果需要在 HUD 显示观众列表，再重点调整 `HUD Online Audience ...` 相关项；如果需要切换到别人的直播间观察，优先使用 `/bili live switch <roomId> auto`，它会帮你降低误发弹幕、误触发自动回复等风险。

## 配置项
### 消息接收

- `Message Source`（消息接收方式）：`Auto / Message Stream / Legacy Polling`，默认 `Legacy Polling`，保留已有配置的接收行为。
- `Auto` 优先使用消息流，连续失败后回退轮询，每隔约 30 秒尝试恢复。固定 `Message Stream` 只重连，不自动查询旧版礼物流水。
- `Message Reception Status` 查看接收方式、连接状态、心跳、重连及消息计数；`Reconnect Messages` 重新连接。也可使用 `/bili live reception [reconnect]`。自动回退时仍可手动重新连接。
- 消息流礼物来自当前 `Room ID`，包括送礼、上舰和醒目留言；继续使用原有礼物通知、ChatBar 同步和专业版礼物触发器。`Gift Check` 关闭后不处理这些事件。消息流不会查询本人直播间的历史礼物流水，也不会更新旧版流水 ID。
- 切回旧版轮询时，首次有效礼物查询只建立基线，避免重放消息流期间已经出现的礼物。断线期间的消息不保证补齐。
- 消息流下隐藏 `Gift Update Cooldown (ms)`。`SEND_GIFT` 金银瓜子价值优先使用实际 `total_coin`（可能与数量乘单价不同），缺失时回退单价乘数量；上舰按金瓜子单价乘数量。已有有效的单位数据优先使用，包括明确的 0；缺失单位按已知汇率补齐：1000 金瓜子 = 1000 金仓鼠 = 10 电池 = 1 元，SC 的人民币金额也按此换算。礼物合并前逐笔补齐，不再使用分成比例或估算标记；银瓜子没有确定汇率，不与付费单位自动互换。
- 房间号、账号或接收方式变化时隔离旧会话事件。模块列表额外信息显示 `New` 或 `Legacy`，同时保留他人房间号和封禁提示；Auto 按实际来源显示。
- 观众快照继续使用 `HUD Online Audience Query Source` 和刷新冷却。消息流提供实时入场事件，快照不再重复触发入场通知；离开提示仍表示名单快照中消失，不代表可靠的实时离场事件。高能榜、人气与看过人数均不是完整在线名单。
- 推荐登录后使用消息流。游客可能收到 UID 0 或遮蔽昵称，这类消息不触发远程执行、命令触发器或 GAL 互动。WSS 使用 Web Settings 的 HTTPS 代理；显式代理需要支持 HTTP CONNECT，SOCKS 代理会显示原因，Auto 可回退。

### HUD 基础信息与标题

配置分为 HUD（总开关、位置与字号）、HUD Basic Info（基础信息）、HUD Title（标题）、HUD Audience（观众列表）和观众背景分组。基础信息与标题各有独立开关，关闭对应开关时隐藏其子项；关闭观众列表仍可显示基础信息和标题。

| 配置项 | 默认值 | 说明 |
| --- | --- | --- |
| HUD Basic Info Scale | 1.0 | 基础信息的独立缩放，文字、图标和间距一起缩放，锚点为左侧。 |
| HUD Basic Info Opacity (0~1) | 1.0 | 基础信息的文字与图标不透明度，乘以鼠标避让淡出。 |
| HUD Basic Info Color | Aqua-Pink | Color 颜色配置，统一控制文字与图标的着色。 |
| HUD Basic Info Data | View、Like | 两平台共用；多选 View（B 站播放量，抖音总观看人数）、Like（点赞数）、Audience（在线人数）；绘制顺序为在线人数、观看量、点赞数。需要显示三项时同时选中 Audience、View、Like。 |
| HUD Basic Info Style | Pro：Normal (PRO)，Free：Text | Normal 使用 newplayers.png、bilibili.png、heart.png 配合数字；Text 使用数字与文字标签。 |
| HUD Basic Info Number Format | Follow Global | Raw 显示原始数字；Follow Global 按客户端语言选择 English 或 Chinese，分别显示如 13.2k、1.3万。 |
| HUD Show Title | true | 独立控制观众列表上方的标题。 |
| HUD Title Position | Above Basic Info | 两平台通用；标题在基础信息上方或下方，行间距按实际字号自适应。 |
| HUD Title Scale | 1.0 | 标题独立缩放，以左侧为锚点，适用于 Custom 和 Float。 |
| HUD Title Style | Custom | Custom 使用自定义文字；Float (PRO) 使用与 TimeDisplay 相同的逐字漂浮效果，也支持自定义文字。 |
| HUD Title Custom Text | Online Top ({count}) | 支持 {count} 在线人数、{name} 主播昵称、{title} 房间标题。保持这个默认模板时，中文界面自动显示为“在线榜 ({count})”。 |
| HUD Title Float Speed | 1.0 | 漂浮速度，0～10，仅 Float 模式显示。 |
| HUD Title Float Amplitude | 1.0 | 漂浮幅度，0～5，仅 Float 模式显示。 |
| HUD Title Default Color | Yellow → Green（Sin） | Color 正弦渐变，默认周期 5000 毫秒。 |
| HUD Title Opacity (0~1) | 1.0 | 标题不透明度，乘以鼠标避让淡出。 |
| HUD Title X Offset / HUD Title Y Offset | 0.0 / 0.0 | 标题相对原位置的横纵偏移，随 GUI 缩放。 |

消息流在线人数取 `ONLINE_RANK_COUNT.online_count`，不是高能榜人数 `count`，有效的 0 人也正常显示。仅使用当前房间与当前接收会话的数据；旧版模式、尚未收到或字段无效时回退观众缓存数量。回退数量达到当前有效缓存上限时附加 `+`（例如 `30+`），提示名单可能未完整取得。基础信息与标题的 `{count}` 使用同一个人数和数字格式。接收消息流基础数据需要开启 `Receive Info Data`。

基础信息、标题（横向偏移为 0 时）与首位观众的昵称左侧对齐；头像关闭时同步切换到无头像的文字位置。首位观众带房管标记时，标题与信息对齐到标记之后的昵称。两个缩放项分别位于 HUD Basic Info 和 HUD Title 分组，并随对应显示开关隐藏；运行时缩放范围为 0.1～5.0，放大时自动预留行高，保持图文不重叠。

### 观众 HUD 排名、主播与认证

- `HUD Online Audience Show Rank`：默认 `Off`，选择 `Always` 后按完整观众榜顺序显示左对齐的名次，滚动不重新编号。字号为昵称的 70%，前三名分别使用红、橙、黄，其余使用灰色。
- `HUD Online Audience Opacity (0~1)`：默认 `1.0`，控制观众列表的排名、头像、昵称、徽标、在线时长条和滚动条；背景与阴影的不透明度分别再乘以此值。基础信息与标题仍使用各自的透明度配置。
- B 站主播按当前房间主播 UID 识别，昵称前显示粉色 `[Host]`，中文界面显示 `[主播]`，优先于房管标记。首位观众为主播时，标题和基础信息仍对齐到昵称，而不是标记。

以下资料检查和提示仅在 `Platform = Bilibili` 时生效，集中于 `Audience Profile` 分组：

| 配置项 | 默认值 | 说明 |
| --- | --- | --- |
| Audience Official Check | true | 获取观众数据或收到有效入场事件时查询用户卡片的 `card.Official.role`。成功资料缓存 5 分钟，失败至少间隔 1 分钟重试，不在渲染线程请求。 |
| Audience Official Mark | true | 个人认证（role 1、2、7、9）显示黄色 V，机构认证（role 3～6）显示蓝色 V，其余不显示。开启头像时位于右下角，关闭头像时位于昵称后的灰色中括号内。随认证检查关闭而隐藏。 |
| Audience Official Notify (PRO) | Pro：WinToast，Free：Off | 专业版认证观众入场提示，可选 Off、Notify、Speak、Title、Chat Bar、WinToast。每个 UID 在本次运行中每小时最多提醒一次，不因切换房间或通知渠道重置。 |
| Audience Fame Check (PRO) | Pro：true，Free：false | 专业版读取同一张用户卡片的粉丝数，不会为了粉丝数再发一次相同请求。 |
| Audience Fame Min Followers | 10000 | 包含阈值本身，仅在知名观众检查开启时显示。 |
| Audience Fame Notify | Pro：WinToast，Free：Off | 同样提供六种输出方式，并按 UID 限制为每小时一次；英文示例 `Alice has 13.2K followers!`，数字使用客户端语言对应的缩写格式。 |

认证与知名观众提示互不依赖普通 `Notify Audience Enter`。同次入场同时符合两类提示、且选择同一输出渠道时，只发送一条认证消息，并追加粉丝数后缀，例如 `Alice (Personal Verification) entered the room! (13.2K followers)`。渠道不同时分别发送。旧版轮询的首次快照只建立基线，不批量播报入场；消息流模式使用实时入场事件，避免快照重复提醒。上述通知全部只在专业版生效，免费版仍可显示认证标识。

### 原有配置

直播间基础信息尚未加载、获取失败或字段类型异常时，HUD 保留当前房间最后有效的播放量、点赞数、主播昵称和标题；首次未获取到数值时显示 `--`。播放量和点赞数接受整数及数字字符串，正常的 0 值也会刷新；切换房间时清除 HUD 的旧显示缓存。

- Avoid Spamming On Start（启动时避免刷屏）
 类型：布尔；默认：true
 说明：客户端启动后的第一次直播状态更新只记录当前状态，不发送开播或关播通知，避免客户端长时间未运行后状态差异过大造成刷屏。
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
- Gift Effects (PRO)（礼物特效，专业版）
 类型：枚举；专业版默认："Message Stream"；免费版固定："Off"
 说明：收到 Bilibili 礼物时在 HUD 播放 GIF 特效。`Message Stream` 使用礼物消息 JSON 中的 GIF 链接并缓存到 `output/Cache/GiftResource`；`Jackal Database` 从 Ricochesta 的 `img/runtime/giftfx/bilibili` 目录按“礼物名.gif”查找。该项只有在 `Platform=Bilibili`、`Message Source=Message Stream` 且 `Gift Check=true` 时生效，否则会自动设为 `Off`；配置项本身不会隐藏。
 可选：Off；Message Stream；Jackal Database（免费版仅 Off）
- Gift Effects X Rate（礼物特效横向位置比例）
 类型：数值；默认：0.8
 说明：礼物特效中心点相对窗口宽度的位置比例。0 靠左，1 靠右。
- Gift Effects Y Rate（礼物特效纵向位置比例）
 类型：数值；默认：0.5
 说明：礼物特效中心点相对窗口高度的位置比例。0 在顶部，1 在底部。
- Gift Effects Opacity (0~1)（礼物特效不透明度）
 类型：数值；默认：0.8
 说明：控制 GIF 的最大不透明度；礼物特效入场和出场均固定使用 500ms 淡入淡出，多个礼物按队列播放。
- Gift Effects Scale（礼物特效缩放）
 类型：数值；默认：1.0
 说明：以窗口宽高较小值的一半作为 GIF 最大边长的 1.0 基准。HudEditor 开启且当前没有礼物特效时，会显示可拖动、可快捷缩放的 `[Gift Effects]` 占位区域。
- Developer 的 `Live Gift Effects`（直播礼物特效调试）默认关闭；开启并处于开发者模式时，收到礼物会通过 `DebugInfo` 输出完整消息 JSON，以及模式判断、GIF URL、缓存、下载、解码和播放队列状态。
- Gift Triggers Enabled (PRO)（启用礼物触发器）
 类型：布尔；默认：false
 说明：收到礼物后按配置文件执行命令。适合自动感谢、自动弹幕、联动特效；使用前应确认触发命令不会刷屏或误操作。
- Gift Triggers Config Path（礼物触发器配置路径）
 类型：文本；默认："config/liveStreamGiftTriggers.ini"
 说明：礼物触发规则文件路径。文件不存在或为空时触发器不会生效；建议放在 config 目录，便于随配置一起管理。
- Gift Trigger Default Command（礼物触发器默认命令）
 类型：文本；默认："/bili live chatter Thanks {{nickname}} for {{gift}}[比心]!!!"
 说明：当礼物没有命中特定规则时执行的默认命令。可使用 `{{nickname}}`、`{{gift}}` 等占位符组成感谢弹幕或其他命令。
- Gift Trigger Default Command Enabled（启用礼物默认命令）
 类型：布尔；默认：true；归入 Gift 分组。
 说明：独立控制未命中规则时执行的默认命令，不依赖自定义礼物触发器开关或规则文件是否为空。关闭后隐藏默认命令及冷却选项，并清除待执行的默认命令。消息流切到他人房间使用 `switch ... auto` 时关闭本项与 `Gift Triggers Enabled (PRO)`，保留 `Gift Check` 的礼物检测和提醒；手动开启后可处理当前房间的礼物，发送弹幕仍遵循他人房间发送保护。
- Gift Trigger Default Command Cooldown (ms)（礼物默认命令冷却，毫秒）
 类型：数值；默认：1000L
 说明：默认礼物命令的最小触发间隔。礼物很多时建议调大，避免连续发送过快被平台限制。
- Clear Audience Avatar Cache When Disabled（关闭模块时清除观众头像缓存）
 类型：布尔；默认：true；归入 HUD Audience 分组。
 说明：关闭 LiveStream 时释放观众头像贴图并清除 `output/Cache/bili_avatar_*` 缓存，保留内置默认头像；旧下载即使稍后完成也会被丢弃。关闭本项可保留头像缓存，重新启用后按需下载。
- Gift Notify Mode（礼物通知模式）
 类型：枚举；默认："Notify"
 说明：选择收到礼物时的提示方式。想安静记录选 Off；想在客户端内看到选 Notify/Actionbar/Title；想朗读选 Speak；想系统通知选 WinToast。
 可选：Off；Notify；Chatter；Speak；Title；Actionbar；WinToast
- Gift Value Display（礼物价值显示）
 类型：枚举；默认："Battery"
说明：同时控制礼物提示与 LiveChatter 醒目留言的金额单位。Battery 显示电池，CNY 显示元，Douyin Coin 显示抖币（diamond，1 元 = 10 抖币），Gold 显示金瓜子，Silver 显示银瓜子，Hamster 显示金仓鼠，Off 隐藏金额。优先使用已有单位数据，缺失时按 1000 金瓜子 = 1000 金仓鼠 = 10 电池 = 1 元换算；如 100 金瓜子显示为 1 电池或 0.1 元，30 元 SC 显示为 300 电池、30 元或 30000 金仓鼠。电池、抖币与元保留可读的整数或小数显示。抖音平台会自动使用 Douyin Coin，但不改写 Profile 中原来的单位选择；切回 Bilibili 后恢复原选择。明确的 0 值不会被其他单位覆盖，银瓜子没有确定汇率，不自动换算；SC 没有对应银瓜子数据时，Silver 不显示金额。即使关闭 Gift Check，此项仍可用于设置独立 SC 输出。已有 Profile 的原单位选择保持不变。
 可选：Off；Battery；CNY；Gold；Hamster；Silver
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
 说明：显示选中的播放量、点赞数与在线人数；对应参数位于 HUD Basic Info 分组。关闭后隐藏这些子项，不影响独立的 HUD 标题。
- HUD Show Online Audience（显示在线观众）
 类型：布尔；默认：true
 说明：显示在线观众列表。关闭后会减少头像、昵称和在线时长绘制开销。
- HUD Online Audience Query Source（在线观众查询源）
 类型：枚举；默认："New"
 说明：选择在线观众数据来源。New 是当前推荐来源；Front-end 适合作为兼容回退；Gold Rank API 偏向贡献榜相关数据。
 可选：Gold Rank API；Front-end；New
- HUD Online Audience Scroll Mode（在线观众滚动方式）
 类型：枚举；默认："Wheel"
 说明：观众列表超过可显示数量时的滚动控制。Wheel（滚动）在滚轮操作后暂停 HUD Give Way to Mouse 的淡出，直到鼠标再次移动。Key & Wheel（组合键加滚动）在按住滚动键期间暂停淡出，松开后恢复；Off 保留通常的鼠标避让。
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
- 消息流弹幕支持回复对象显示，单个 `@昵称` 固定放在正文最前面，例如 `@懒规 UP单推的主播[捂脸]`。兼容平铺的回复字段与嵌套的 `reply` 对象，服务端明确隐藏回复或未提供可显示昵称时不添加前缀；缺失或损坏的附加信息不影响正文接收。
- 直播间管理命令依赖 BiliSettings 登录状态；不要把 Cookies、直播推流码或控制台输出截图发给他人。
- `Real Chatter`、`/blc`、`/bili live chatter`、礼物默认命令等会真实发送直播弹幕，建议先在低风险环境测试。
- 切到别人直播间观察时，推荐用 `/bili live switch <roomId> auto`，它会自动关闭部分自动回复、礼物触发和远程执行相关配置，并可用 `/bili live switch back` 恢复。
- `status`、主播、标题、分区、观众和弹幕查询默认面向当前 `Room ID`，仅 Room ID 为 0 时补入本人房间。`status` 的账号诊断和违规记录仅在本人房间查询。开播、停播、修改标题/分区和违规记录命令始终操作本人房间，不改变当前选择；`area` 仅查询，修改分区使用 `setarea`。`mylink`、`mygo`、`getmytitle`、`getmyarea`、`mystatus`、`myaudience`、`likemyauds`、`likemyauds2`、`fetchmine`、`fetchmineraw`、`mychat` 可直接查询已创建的本人房间。
- HUD 在线观众依赖 B 站接口可用性；接口变化或风控时可尝试切换 `HUD Online Audience Query Source`。
- HUD 观众资料与文字宽度每 250 毫秒整理一次，在线时间、经验和列表动画继续按原更新频率运行。缓存保存期间沿用上一份资料与缓存刷新判断，刷新判断每秒检查一次。完全超出屏幕的观众行跳过绘制；这些优化同时适用于消息流与旧版接收方式。
- 头像使用单个后台任务读取和解码，解码时缩小至最长边 256 像素，待处理请求最多 16 个、已解码图片最多 4 张，主线程每帧最多上传一张；尚未准备好时显示默认头像。同时下载最多 4 个，失败后等待 60 秒再重试。清理不活跃的头像纹理时保留磁盘缓存，便于滚动、换页后复用；Neverlose 的 B 站头像共用此流程。
- 仅在开发者模式启用且 Developer 的 `Live Stream Performance Log`（默认关闭）开启时记录性能日志：在线观众 HUD 开启且出现至少 50 毫秒的慢帧时，`CLIENT.LOG` 每 5 秒最多输出一条 `[LiveStream][Performance]`。关闭开关后立即停止并清空统计，重新开启从新的统计时段开始。记录该时段整帧、绘制、观众 HUD、贴图队列、更新、控制、后台头像解码与头像上传的峰值毫秒数，以及解码和上传数量。各阶段峰值可能来自不同帧；后台解码耗时不等于主线程阻塞时间，绘制耗时包含画面提交与帧率等待。
- 观众背景阴影复用边缘贴图，最多缓存 16 份，避免与 HUD Blur 同时开启时逐行重复绘制多层阴影。厚度和圆角变化时生成对应贴图，颜色、透明度与列表动画仍逐行应用；阴影边缘使用连续渐变。

## 相关命令
- `/douyin live status`
 彩色输出当前抖音房间、主播、连接、事件接收和错误等状态摘要；仅在 Platform 选择 Douyin 时可用。
- `/douyin live info`
 输出当前抖音直播间查询、连接、统计与观众榜缓存的原始 JSON，供诊断和脚本读取。
- `/douyin live go [room]`、`/douyin live link [room]`
 打开或复制当前配置/指定的网页房间链接，不切换监控房间；显式指定房间可在其它平台下使用。
- `/douyin live title`（或 `gettitle`）、`/douyin live audience`
 输出当前缓存的标题或观众榜 JSON，不额外查询；空榜单不代表无人在线。
- `/douyin live reception [reconnect]`
 查看状态或重新查询房间、建立连接，旧观众请求随会话失效。
- `/douyin live levelsystem <list|read|save>`
 列出、读取抖音独立等级档案，或保存已加载的两平台档案。
- `/livestreaminfo`
 输出当前 LiveStream 缓存信息 JSON，继续作为兼容命令。
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
