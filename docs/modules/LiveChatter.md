# LiveChatter
直播弹幕
分类：Web
描述：接收、显示、过滤、朗读、翻译和发送 B 站直播间弹幕，并可联动触发器与 AI 回复。

## 抖音平台（第三轮）

普通/表情弹幕会保留抖音用户身份：聊天栏、控制台与 Neverlose BiliLive 面板中，当前主播的有效粉丝团成员昵称显示粉色，主播 UID 显示绿色，其他用户保持默认色。识别只使用抖音消息内的粉丝团数据，并核对粉丝团主播 ID；不会借用 B 站关系、缓存或同名用户。游客推送缺少粉丝团身份时不能强制判为粉丝；普通“关注”关系也不等于已加入粉丝团。

主播消息缺少昵称时会按已知 UID 回退房间主播昵称，并兼容 Common.user 中的发送者信息；空字符串 UID 不再覆盖数值 UID，无消息编号的弹幕不会用本地毫秒数去重。匿名身份仍禁止远程执行和命令触发，但不受抖音界面中已隐藏的 B 站 VIP、等级及勋章筛选限制。接收端不按主播 UID 过滤本人弹幕；若服务端未向游客连接广播（例如仅发送者可见），当前游客接入不能补回该条消息。已收到但缺少昵称或正文而无法解析的消息会在日志中记录 `[Douyin] Chat payload missing sender name or content`，不输出正文。

平台和房间在 LiveStream 设置。选择 Douyin 后，LiveChatter 会共用游客房间查询和 WSS 接收任务，读取公共弹幕、表情弹幕、礼物、点赞、进场、社交互动和房间统计；仍然不发送抖音弹幕。

抖音模式暂停 B 站定时/剪贴板发送和发送队列，屏蔽异步 AI 回复；不删除 B 站设置或队列。底层发送同样拒绝，不仅隐藏按钮。礼物检测、通知、聚合和 PRO 礼物触发器可以运行，但触发器中的 B 站发送命令仍会被平台保护拒绝。切回 Bilibili 才恢复原平台发送能力，并继续执行既有房间与发送权限检查。

抖音弹幕不会查询 B 站观众缓存、B 站用户等级、VIP、粉丝勋章或房管信息，也不会触发 B 站 GAL 互动；因此抖音用户不会被误判为 B 站身份。通用的昵称显示、用户黑白名单、关键词/敏感词过滤、朗读、翻译、声音、屏幕弹幕、通知、控制台、文件输出和本地触发器仍然可用。抖音进场事件可以复用 `Notify Audience Enter`，但不会生成离场事件。

选择抖音后，界面会隐藏自动发送、剪贴板发送、发送确认、发送冷却、B 站醒目留言、B 站身份筛选、B 站聊天框样式和 AI 回复配置；其它接收与显示配置保持可见。AI、GAL、房管及真实弹幕发送均不因旧 Profile 中的值而重新启用。

抖音支持 `Console Output Wealth & Medal` 显示开关（默认开启），在聊天栏、控制台和 Neverlose 直播面板的昵称前依次显示荣耀等级与粉丝牌，例如 `[∨12] [8] 昵称`。荣耀等级沿用 B 站格式；粉丝牌只显示 `[等级]`，点亮为黄色、熄灭为灰色，不显示名称，不套用 B 站勋章。消息优先读取 User.PayGrade.level 和当前主播 FansClub；缺少荣耀等级或粉丝牌字段时，按 UID 从当前抖音房间的有效观众 HUD 缓存补充。缓存必须匹配房间和接收会话，超时或无匹配时不添加，不按同名用户推断，也不查询 B 站资料。

## 需求
- 安全级别：常规模块；远程执行和真实发送弹幕属于高风险能力，默认关闭或受保护。
- 权限需求：接收弹幕通常不需要管理员；发送弹幕、AI 以真实弹幕回复、部分直播间管理能力需要已登录 BiliSettings 账号。
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：普通可用；带 PRO 标记的高级用户筛选能力需要 PRO

## 介绍
LiveChatter 负责直播弹幕本身：它从 LiveStream 当前房间接收弹幕，按规则筛选后显示在客户端，也可以写入控制台或文件、朗读、翻译、播放提示音、触发命令，并让 AI 生成回复。

Neverlose 用户页的 BiliLive 与 IRC、Console 共用左对齐的现代文字选项卡，主题色下划线随切换平滑移动。输入框和发送按钮在无警告时整体下移一行提示高度；需要拆分长弹幕或出现其它输入警告时，自动保留额外提示空间。

未登录 B 站时，直播弹幕历史请求按游客方式发送，不携带 Cookies，也不读取 CSRF；即使启用请求附带 CSRF 或强制 Cookies 的调试选项，也不会在游客状态读取认证信息。登录后保留原有的请求模式及空结果后使用 Cookies 重试机制。

发送相关能力会使用 LiveStream 的 `Room ID` 作为目标房间，包括 `/blc`、`/bili live chatter`、剪贴板快速发送、自动发送和 LiveChatter 自身的 AI `Real Chatter` 模式。LiveChatter/LiveStream 的 `Real Chatter` 都发送到当前选择的直播间；其它模块的 `Real Chatter`（包括 Streamer）默认面向自己的直播间。切换到别人直播间观察时，建议保持 `Prevent Others Room Chatter Sending` 开启，或使用 `/bili live switch <roomId> auto`，避免误把弹幕发到非自己的直播间。

ChatBar 或 LiveStream HUD 查询观众关系时，如果当前弹幕/观众数据没有提供有效 UID，会跳过关系接口请求，避免向 B 站提交 UID 0。

## 配置项
### 共用消息接收

接收方式统一在 LiveStream 的 `Message Source` 设置。LiveChatter 单独开启时也能使用该房间与接收方式；同时开启两个模块时共用一条消息流连接，两个模块均关闭后停止连接。

消息流和轮询共用现有弹幕显示、控制台、文件、ChatBar 同步、筛选、朗读、翻译与 AI 处理。发送仍走原有 HTTP 发送队列，保留发送冷却、他人房间限制及封禁检查。

Neverlose 的 BiliLive 面板在消息流模式下读取共享连接最近 300 条弹幕缓存，不再定期查询历史弹幕；旧版模式保留历史查询和顶部补拉。切房、换账号或切换接收方式后会丢弃尚未处理的旧消息及翻译结果。

消息流下隐藏 `Max Allowed Chatter Delay (s)`，该值只筛选旧版历史轮询结果；Developer 中的历史请求 GET/POST、CSRF、时间差和旧版礼物检查调试项也会隐藏。观众查询冷却仍有效，因此不会隐藏。

消息流弹幕的荣耀等级优先读取 `info[0][15].user.wealth.level`，兼容补充信息 `extra.wealth_level`，缺失时读取 `info[16][0]`。用于聊天栏、Neverlose BiliLive、控制台等级显示及最低荣耀等级筛选，不依赖 HUD 观众名单。有效的 0 级同样保留；字段缺失或无效时视为未知，不借用观众缓存等级，无等级限制时仍正常显示，有最低等级限制时不放行。`ChronosWealth_*.png` 是图标资源，不作为具体等级读取。

控制台弹幕正文采用与 ChatBar 一致的社交文本高亮：突出 @提及、#话题# 和 [表情]，普通字符、数字和标点保留正文颜色，表情替代方式也遵循当前设置。

游客 UID 0 或遮蔽身份不会按昵称补成可信用户，不能执行远程命令、命令触发器或 GAL 互动；依赖账号等级、VIP、粉丝或勋章的筛选在身份未知时不放行。翻译结果与 AI 回复会检查原会话，切房、换账号或关闭模块后丢弃失效结果。

使用 `/bili live reception` 查看状态，或 `/bili live reception reconnect` 手动重连；在 `Auto` 模式下，配置显示会跟随实际消息来源变化。

### Super Chat（醒目留言）

分组及其中全部选项仅在实际消息流模式下显示，`Auto` 回退旧版轮询后自动隐藏。SC 输出独立于 `Gift Check`、普通弹幕 `Display` 和 ChatBar 的 `Sync Live Chatters`。

SC 控制台边框按标题和最长正文行的终端显示列宽生成，中文按宽字符计算，并为正文补齐空白和右边框。ChatBar 将标题放入卡片内独立一行，上下边框在实际排版时按换行后的像素宽度生成，随字体、字号及可用宽度重新适配，不再共用控制台的字符数量。

- SC Notify（醒目留言输出）
 类型：多选枚举；默认：`Notify`、`Chat Bar`、`Console Output`。
 可选：`Notify`、`Chatter`、`WinToast`、`Chat Bar`、`Console Output`。
 `Notify` 按 SC 的 `time` 显示通知，`Chatter` 以置顶弹幕显示相同时长；缺少 `time` 时使用 `end_time - start_time`，时长均无效时回退 60 秒。客户端输出队列中的等待时间会从显示时长中扣除。`WinToast` 使用系统通知，其停留时间由 Windows 控制。
 `Chat Bar` 输出带首尾边框的纯文字卡片，例如：

 ```text
 ╭─ SC · 界原虚 · 300 电池 ─╮
 │ 猪播完美预测自己第一个死
 ╰──────────────────────────────╯
 ```

 标识及边线使用 `background_color_start`、`background_bottom_color`，金额使用 `background_price_color`，昵称使用 `user_info.name_color`，正文使用 `message_font_color`；颜色缺失或无效时使用可读的默认色。金额跟随 LiveStream 的 `Gift Value Display`（默认 Battery）；抖音平台自动使用 `Douyin Coin`，即 diamond，按 `1 元 = 10 抖币` 显示。B 站金额优先使用已有单位数据，缺失时按 1000 金瓜子 = 1000 金仓鼠 = 10 电池 = 1 元换算：示例为 30 元 SC 的 `300 电池`，CNY 显示 `30 元`，Gold/Hamster 分别显示 `30000 金瓜子` / `30000 金仓鼠`。电池、抖币与元保留可读显示，不添加估算标记。Off 或无对应银瓜子价值的 Silver 不显示金额。金额设置独立于 Gift Check，不加载 SC 背景图或头像。聊天栏保留自己的淡出及历史显示规则。`Console Output` 使用相同卡片和配色，并在卡片前后留空行。

- SC Chatter Color（醒目留言弹幕颜色）
 类型：Color；默认：`Red`。控制 `SC Notify` 中 `Chatter` 的颜色；消息流模式下始终显示此选项。

### 原有配置

- Emoji Renderer（表情渲染方式）
 类型：枚举；默认：`Legacy`；归入 Display 分组。
 可选：`Image`、`Legacy`。
 说明：`Legacy` 保持原有文字表情与 `Transform Emoji` 行为；`Image` 根据弹幕附带的 `emots` 和独立大表情资源，将正文中的表情标记替换为图片，并保留其余文字及前置 @ 昵称。适用于 ChatBar、Neverlose BiliLive 面板与 `Display = Chatter` 的屏幕弹幕，兼容消息流和带有表情资源的历史弹幕；没有资源时保留文字，控制台、文件、通知及触发逻辑仍使用文字内容。旧 Profile 的 `Emoji Chat Bar Renderer` 自动兼容到此项。
 图片与文字底部对齐，后台下载和解码，图片缓存超过三天自动清理。暂以静态图片显示，动态表情显示首帧；加载期间或失败时保留文字占位。历史消息恢复时保留图片资源和原高度信息。

- Emoji Image Height Mode（表情图片高度模式）
 类型：枚举；默认：`Smart`；仅在 `Emoji Renderer = Image` 时显示。
 `Smart` 将原高度限制在当前字号的 100%～200%；`Raw` 保留资源提供的原始像素高度；`Uniform` 将图片等比缩放至当前字号高度。未提供有效高度时使用当前字号。聊天栏及聊天气泡按最高片段撑高行；屏幕弹幕保持固定的文字行底部，表情向上延伸，不移动其它弹幕，并将每句带表情的弹幕单独限制在屏幕内。切换模式会更新现有消息的布局，所有界面均保持图文底部对齐。

- Clear Emoji Cache When Disabled（关闭模块时清除表情缓存）
 类型：布尔；默认：true；归入 Display 分组。
 关闭 LiveChatter 时释放表情贴图、取消待处理图片并清除磁盘表情缓存；已关闭后完成的旧下载不会重新保留缓存。已留在聊天栏中的图片片段暂显示文字占位，重新启用后按需加载。关闭此项可保留缓存。文件位于 `output/Cache/bili_emoji_<hash>.<格式>`，扩展名按实际图片数据确定，例如 `.png`、`.webp`、`.gif`；同时兼容清理旧版 `chatbar_image_*` 文件。

- Emoji Opacity (0~1)（表情不透明度）
 类型：浮点数；默认：1.0；范围：0～1；仅在 `Emoji Renderer = Image` 时显示。
 仅控制表情图片，不改变文字透明度；实际透明度还会乘以所在界面的透明度及淡出效果。屏幕弹幕图片透明度为此项乘以弹幕不透明度、弹幕颜色自身 Alpha 和鼠标避让系数。

- Auto Send Time Mode（自动发送时间模式）
 类型：枚举；默认："Off"
 说明：控制是否自动向当前直播间发送弹幕。`Off` 不自动发送；`Periodic` 按固定间隔发送。自动发送会公开出现在直播间，启用前应确认内容和房间号正确。
 可选：Off；Periodic
- Auto Send Periodic Interval (ms)（自动发送周期，毫秒）
 类型：数值；默认：60000L
 说明：`Periodic` 模式下两次自动发送之间的间隔。间隔过短容易刷屏或触发平台限制，建议按直播节奏设置为几十秒到数分钟。
- Auto Send Content Mode（自动发送内容模式）
 类型：枚举；默认："Fixed"
 说明：选择自动发送的内容来源。固定内容适合简单提醒；列表模式适合轮播话术；文件模式适合由外部工具投递待发送文本；预设模式会生成特定类型内容。
 可选：Fixed；List Random Element；List Loop；Prefab；File Lines
- Auto Send Prefab Type（自动发送预设类型）
 类型：枚举；默认："Aphorism"
 说明：当内容模式为 `Prefab` 时使用的生成类型。`Aphorism` 发送短句；`Idiom Solitaire` 和 `Ask Solitaire` 会依赖 AI 生成接龙内容，使用前需确保 AI 配置可用。
 可选：Aphorism；Idiom Solitaire；Ask Solitaire
- Auto Send Fixed Content（自动发送固定内容）
 类型：文本；默认："给主播点个关注~"
 说明：`Fixed` 模式发送的文本。适合固定欢迎语、关注提醒或直播间口播同步文案。
- Auto Send List Content (Sep With Semicolon)（自动发送列表内容，用分号分隔）
 类型：文本；默认：""
 说明：`List Random Element` 和 `List Loop` 的候选文本列表，使用英文分号分隔。内容里如果需要分号，应改用文件模式，避免被拆成多条。
- Auto Send List Current Index（自动发送列表当前索引）
 类型：数值；默认：0
 说明：`List Loop` 当前轮播位置。一般不需要手动改；想从列表开头重新发送时可设回 0。
- Auto Send File Source Path（自动发送文件来源路径）
 类型：文本；默认：""
 说明：`File Lines` 模式读取的文本文件路径。模块会读取文件中的每一行并发送，随后清空该文件，适合让脚本或外部程序写入待发送队列。
- Clipboard Quick Send（剪贴板快速发送）
 类型：枚举；默认："Off"
 说明：按快捷键后如何取得并发送文本。`Send` 直接发送当前剪贴板；`Copy and Send` 先复制选中文本；`Select All, Copy and Send` 会先全选再复制。该功能会向当前直播间真实发送弹幕。
 可选：Off；Send；Copy and Send；Select All, Copy and Send
- Clipboard Quick Send Key（剪贴板快速发送快捷键）
 类型：按键/复合；默认：Ctrl+Alt+Add
 说明：触发剪贴板快速发送的快捷键。建议避开编辑器、浏览器和游戏内常用快捷键，防止误触发。
- Clipboard Quick Send Confirm（剪贴板快速发送是否确认）
 类型：布尔；默认：false
 说明：开启后，同一段内容需要在确认时间内再次按下快捷键才会发送。适合担心误发、或经常用全选复制模式的场景。
- Clipboard Quick Send Confirm Time (s)（剪贴板快速发送确认限时，秒）
 类型：数值；默认：5
 说明：开启确认后，两次快捷键之间允许等待的时间。超过该时间会重新进入待确认状态。
- Clipboard Quick Send Prevent Repeat（剪贴板快速发送防止重复发送）
 类型：布尔；默认：true
 说明：阻止连续发送与上一条相同的剪贴板内容。保持开启可以减少重复按键、复制失败或焦点异常造成的刷屏。
- Clipboard Quick Send Apply Text Processor（剪贴板快速发送是否应用文本处理器）
 类型：布尔；默认：false
 说明：发送前先交给 ClipboardTweaks 的文本处理流程。需要自动替换、清理或格式化剪贴板内容时开启；如果希望原样发送则保持关闭。
- Auto Send Split Cooldown Min (ms)（自动发送切片冷却最小值，毫秒）
 类型：数值；默认：1000
 说明：当一段要发送的文本超过单条长度限制被拆分时，每段之间的最短等待时间。调大可降低连续发送被限制的概率。
- Auto Send Split Cooldown Max (ms)（自动发送切片冷却最大值，毫秒）
 类型：数值；默认：2000
 说明：拆分发送时每段之间的最长等待时间。模块会在最小值和最大值之间取等待时间，让连续发送不完全固定。
- Send Cooldown (ms)（发送冷却，毫秒）
 类型：数值；默认：2000L
 说明：弹幕发送队列的基础冷却。队列命令、自动回复或手动发送密集触发时会受它限制，避免过快连续发送。
- Prevent Others Room Chatter Sending（阻止向他人直播间发送弹幕）
 类型：布尔；默认：true
 说明：防止向非本人直播间发送弹幕的保护开关。观察别人直播间、调试 AI 回复或切换房间时建议保持开启。Neverlose GUI 的 BiliLive 页检测到该保护生效时会将发送按钮显示为深红色，并阻止回车发送。
- Confirm Others Room Chatter Sending（确认向他人直播间发送弹幕）
 类型：枚举；默认："Every Enqueue Request"
 说明：当发送目标不是本人直播间时，控制是否弹出确认。`Never` 不确认；`Every Enqueue Request` 对一次完整入队请求确认一次；`Every Segment` 对按长度限制切分后的每句弹幕分别确认。若 `Prevent Others Room Chatter Sending` 开启，仍会优先阻止发送。
 可选：Never；Every Enqueue Request；Every Segment
- Confirm Others Room Chatter Sending Type（向他人直播间发送弹幕确认类型）
 类型：枚举；默认："MessageBox"
 说明：选择确认界面。`MessageBox` 使用系统异步对话框；`MsgBox2` 使用客户端手绘对话框；`GALOptions` 使用 PRO 的 GALOptions 选择 HUD。确认倒计时为 10 秒，超时视为取消发送。
 可选：MessageBox；MsgBox2；GALOptions
- Max Allowed Chatter Delay (s)（弹幕延迟最大允许值，秒）
 类型：数值；默认：60U
 说明：丢弃过旧的直播间弹幕，避免网络恢复后把历史弹幕当作新消息显示、朗读或触发命令。
- Single Chatter Length Limit（单条弹幕长度限制）
 类型：数值；默认：40U
 说明：单条发送弹幕的长度上限。超过上限的文本会被拆分；过小会增加分段数量，过大可能超过平台限制。
- NL User Bili Live Chat Box Style（Neverlose用户BiliLive聊天框样式）
 类型：枚举；默认："Text"
 说明：控制 Neverlose GUI 用户信息页下方 BiliLive 聊天页的显示样式。`Modern` 使用 B 站头像、用户名、财富等级、粉丝牌和气泡布局；当前无可用 B 站头像元数据时会回退为昵称首字符头像。输入框中光标位于 `@` 后方时，会在输入框上方横向显示头像和昵称候选；候选来自 LiveStream 当前直播间在线观众、在线观众缓存和最近弹幕用户，继续输入字符会按关键词不区分大小写排序，点击候选可插入提及。打开 Neverlose GUI 并停留在 BiliLive 页时，LiveChatter 模块未启用会按 10 秒冷却拉取历史弹幕，已启用会按 30 秒冷却补拉历史弹幕，切换到 BiliLive 页时也会立即拉取一次；滚动到顶部时会按 5 秒冷却补拉历史弹幕。历史弹幕会按用户、正文和时间戳去重，并按直播间分别写入 Neverlose BiliLive 页的私有显示缓存，不会重新写入全局聊天栏；补拉历史与实时消息会按弹幕时间排序，切换直播间时会刷新为当前房间的消息。开启 `User Blacklist Enabled` 后，黑名单用户也不会同步显示到 Neverlose BiliLive 聊天页。Modern 消息支持悬停高亮、复制、翻译和头像右键菜单。
 可选：Text（文本）；Modern（现代）
- Color（颜色）
 类型：枚举；默认："White"
 说明：普通弹幕以 `Chatter` 方式显示时的颜色。直播背景复杂时建议使用高对比度颜色。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Display（显示）
 类型：枚举；默认："Chatter"
 说明：收到普通弹幕后的展示方式。`Chatter` 更像屏幕弹幕；`Notify` 适合低频提醒；`Title` 和 `Actionbar` 更醒目；`Off` 只保留后续处理链路，不在界面显示。
 可选：Off；Chatter；Notify；Title；Actionbar
- User Filter (PRO)（用户筛选，PRO）
 类型：枚举；默认："All"
 说明：限制哪些用户的弹幕进入后续显示、朗读、触发和 AI 流程。观众量大时可只处理粉丝、付费粉丝或舰长用户；非 PRO 只能使用 `All`。
 可选：All；Fans；Paid Fans；Guard
- User Filter (Bili Min Level) (PRO)（B 站最低等级筛选，PRO）
 类型：数值；默认：2
 说明：只处理 B 站等级达到该值的用户弹幕。可用于降低小号或临时账号对自动化流程的影响。
- User Filter (Wealth Min Level) (PRO)（财富最低等级筛选，PRO）
 类型：数值；默认：0
 说明：只处理财富等级达到该值的用户弹幕。适合把高价值观众的弹幕优先交给提醒、朗读或 AI 回复。
- User Filter (Medal Min Level) (PRO)（粉丝牌最低等级筛选，PRO）
 类型：数值；默认：0
 说明：只处理粉丝牌等级达到该值的用户弹幕。用于减少路人弹幕触发自动流程。
- User Filter (Exclude Default Names)（排除默认昵称用户）
 类型：布尔；默认：false
 说明：过滤仍使用平台默认昵称格式的用户。开启后可减少临时号或未个性化账号进入弹幕处理链路。
- User Filter (Exclude Non-vip Users)（排除非 VIP 用户）
 类型：布尔；默认：false
 说明：只保留 VIP 用户弹幕。适合高噪声直播间，但会显著减少可见弹幕量。
- User Name Display（用户名称显示）
 类型：枚举；默认："Default"
 说明：控制弹幕里显示的用户名形式。`Default` 使用完整昵称；`Head` 或 `Head + Tail` 适合隐私化展示；`UID` 便于排查用户；`Netease Nickname` 用于联动网易云昵称。
 可选：Default；Head；Head + Tail；UID；Netease Nickname
- Horizontal Reverse（横向翻转）
 类型：布尔；默认：false
 说明：让屏幕弹幕反向横向移动。通常保持关闭；如果你有特殊镜像布局或舞台投屏需求再开启。
- Actionbar Color（行为栏颜色）
 类型：枚举；默认："Colorful"
 说明：弹幕以 `Actionbar` 方式显示时的颜色。`Colorful` 更醒目，固定颜色更利于保持直播画面统一。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Title Color（标题颜色）
 类型：枚举；默认："White"
 说明：弹幕以 `Title` 方式显示时的颜色。`Flow` 会使用动态颜色；固定颜色在复杂背景下更稳定。
 可选：Flow；其余颜色见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Title Font Size（标题字号）
 类型：数值；默认：150
 说明：弹幕标题显示的字号。低分辨率或文字较长时应调小，避免遮挡画面；大屏投放可适当调大。
- Console Output（控制台输出）
 类型：布尔；默认：true
 说明：是否把弹幕输出到客户端控制台。适合调试过滤规则、AI 回复和触发器命中情况。
- Console Output Timestamp（控制台输出时间戳）
 类型：布尔；默认：true
 说明：控制台弹幕是否显示时间。排查延迟、回放日志或对齐直播事件时建议开启。
- Console Output Wealth & Medal（控制台输出财富值和灯牌）
 类型：布尔；默认：true
 说明：控制台弹幕是否附带财富等级和粉丝牌信息。需要观察用户分层或调试 PRO 筛选时保持开启。
- File Output（文件输出）
 类型：布尔；默认：false
 说明：是否把弹幕追加写入文件。适合交给 OBS、脚本、复盘工具或外部统计程序读取。
- File Output Format（文件输出格式）
 类型：文本；默认："{{content}}`{{nickname}}"
 说明：写入文件时使用的格式模板。可使用 `{{content}}`、`{{nickname}}` 等占位符；默认用反引号分隔内容和昵称，便于脚本再解析。
- File Output Path（文件输出路径）
 类型：文本；默认："output\\Chatters.txt"
 说明：弹幕输出文件路径。建议放在 `output` 或专门的直播工作目录，方便 OBS 和外部工具读取。
- User Whitelist Enabled（启用用户白名单）
 类型：布尔；默认：false
 说明：开启后只处理白名单用户的弹幕。适合只让房管、测试账号或固定观众触发自动化。
- User Whitelist (Sep With Semicolon)（用户白名单，用分号分隔）
 类型：文本；默认："Wormwaker;Worrnwaker"
 说明：用户白名单，多个昵称用英文分号分隔。昵称需要与直播间显示名称匹配。
- User Blacklist Enabled（启用用户黑名单）
 类型：布尔；默认：false
 说明：开启后忽略黑名单用户的弹幕。适合屏蔽会触发刷屏、朗读或 AI 回复的特定用户。
- User Blacklist (Sep With Semicolon)（用户黑名单，用分号分隔）
 类型：文本；默认：""
 说明：用户黑名单，多个昵称用英文分号分隔。命中后不会进入显示、朗读、触发器和 AI 回复流程。
- Custom Filter Enabled（启用自定义过滤器）
 类型：布尔；默认：false
 说明：开启后按自定义关键词过滤弹幕。适合拦截直播间不希望展示或触发的特定词。
- Custom Filter Keywords (Sep With Semicolon)（自定义过滤器关键词，用分号分隔）
 类型：文本；默认：""
 说明：自定义过滤关键词列表，多个关键词用英文分号分隔。命中后弹幕会被视为非法内容并替换为过滤提示。
- Taboo Filter（违禁词过滤）
 类型：枚举；默认："Replace (Unsafe)"
 说明：控制内置敏感词处理方式。`Block` 直接丢弃；`Filtered` 用过滤提示替代；`Replace (Unsafe)` 会尝试替换文本后继续处理，可能保留部分语义，因此标记为不安全。
 可选：Off；Block；Filtered；Replace (Unsafe)
- Remote Execution (Riskful)（远程执行，有风险）
 类型：枚举；默认："Disabled"
 说明：允许直播弹幕触发远程命令执行。该能力风险很高，只有明确需要并已配置白名单、权限策略和测试房间时才应开启。
 可选：Disabled；Wormwake
- Remote Execution Username Whitelist (Sep with Semicolon)（远程执行用户名白名单，用分号分隔）
 类型：文本；默认："Wormwaker;Worrnwaker"
 说明：允许触发远程执行的用户名列表。即使开启远程执行，也应只放可信账号。
- Remote Execution Privileges Policy（远控权限策略）
 类型：枚举；默认："Admin & Normal"
 说明：决定远程执行命令以管理员权限还是普通权限处理。`Everyone Admin` 风险最高；`Only Admin` 最保守；默认让白名单用户使用管理员权限、其他允许用户使用普通权限。
 可选：Everyone Admin；Admin & Normal；Only Admin；Everyone Normal
- Remote Execution Display（是否显示远程执行信息）
 类型：布尔；默认：false
 说明：远程执行命中后是否继续把原弹幕作为普通弹幕显示。关闭时更像后台控制命令，开启时观众能看到对应文本。
- Remote Execution Notify（是否通知远程执行结果）
 类型：布尔；默认：true
 说明：远程执行后是否显示执行结果通知。调试和日常使用都建议开启，便于确认命令是否被触发。
- Speaker（讲述）
 类型：枚举；默认："Off"
 说明：控制是否朗读收到的弹幕。`Username & Text` 会读昵称和内容；`Only Text` 只读弹幕正文。直播间人数较多时建议配合白名单、黑名单或触发器使用。
 可选：Off；Username & Text；Only Text
- Speaker User Whitelist Enabled（启用讲述用户白名单）
 类型：布尔；默认：false
 说明：开启后只朗读白名单用户弹幕。适合只读房管、舰长或指定互动用户。
- Speaker User Whitelist (Sep With Semicolon)（讲述用户白名单，用分号分隔）
 类型：文本；默认："Wormwaker;Worrnwaker"
 说明：讲述白名单昵称列表，多个昵称用英文分号分隔。
- Speaker User Blacklist Enabled（启用讲述用户黑名单）
 类型：布尔；默认：false
 说明：开启后不朗读黑名单用户弹幕。适合屏蔽刷屏用户或不适合 TTS 的账号。
- Speaker User Blacklist (Sep With Semicolon)（讲述用户黑名单，用分号分隔）
 类型：文本；默认：""
 说明：讲述黑名单昵称列表，多个昵称用英文分号分隔。
- Translator（翻译器）
 类型：枚举；默认："Off"
 说明：控制弹幕翻译方向。`Chinese` 将弹幕翻译为中文；`English` 翻译为英文；`Exchange` 在中英之间互换。需要可用的翻译服务配置。
 可选：Off；Chinese；English；Exchange
- Speaker Skip Emoji（讲述跳过表情）
 类型：布尔；默认：true
 说明：朗读时跳过表情文本，避免 TTS 读出大量表情代码。想完整朗读原文时可关闭。
- Speaker Async（讲述是否异步）
 类型：布尔；默认：true
 说明：异步执行朗读，减少 TTS 阻塞弹幕接收和界面刷新。遇到语音顺序异常时可关闭测试。
- Sound（音效）
 类型：声音项；默认：Off
 说明：收到弹幕时播放的提示音。适合低频直播间提醒；高频直播间建议关闭或只配合筛选使用。
- Triggers Enabled（启用触发器）
 类型：布尔；默认：false
 说明：开启后弹幕可按触发器配置执行命令。适合关键词互动、自动感谢、直播特效或联动其他模块。
- Trigger Disable Speaker（触发器禁用讲述）
 类型：布尔；默认：true
 说明：弹幕命中触发器后是否跳过朗读。保持开启可以避免同一条弹幕既触发动作又被读出造成重复干扰。
- Triggers Using Regex（触发器使用正则表达式）
 类型：布尔；默认：true
 说明：触发器匹配规则是否按正则表达式解释。正则更灵活，但错误规则可能误匹配大量弹幕；只需要普通关键词时可关闭。
- Triggers Config Path（触发器配置路径）
 类型：文本；默认："config\\liveStreamChatterTriggers.ini"
 说明：弹幕触发器配置文件路径。文件不存在或规则为空时不会触发；建议先用无风险命令验证匹配范围。
- Transform Emoji（转换表情）
 类型：枚举；默认："Character"
 说明：控制弹幕中的表情如何转换。`Character` 转为可显示字符；`Braces` 保留为括号样式文本；`Off` 不做转换。
 可选：Off；Character；Braces
- AI Response（人工智能回复）
 类型：枚举；默认："Off"
 说明：收到弹幕后是否让 AI 生成回复，以及回复输出到哪里。`Real Chatter` 会向直播间公开发送真实弹幕，启用前必须确认账号、房间和提示词都可靠。
 可选：Off；Notify；Speak；Chatter；Title；Actionbar；Real Chatter
- AI Response Chatter Type（人工智能回复弹幕类型）
 类型：枚举；默认："Top"
 说明：AI 回复以 `Chatter` 方式显示时使用的弹幕运动或位置类型。
 可选：Scroll；Top；Bottom；Reverse；Horizontal；Vertical；Random
- AI Response Chatter Color（人工智能回复弹幕颜色）
 类型：枚举；默认："Red"
 说明：AI 回复以 `Chatter` 方式显示时的颜色。建议与普通弹幕颜色区分，方便识别 AI 内容。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- AI Response Title Color（人工智能回复标题颜色）
 类型：枚举；默认："Red"
 说明：AI 回复以 `Title` 方式显示时的颜色。红色更醒目，但频繁触发时可能干扰直播画面。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- AI Response Prefix（人工智能回复前缀）
 类型：布尔；默认：true
 说明：是否在 AI 回复前加上前缀。开启后观众或主播更容易看出 AI 正在回复谁。
- AI Response Prefix String（人工智能回复前缀字符串）
 类型：文本；默认："回复@{user}:"
 说明：AI 回复前缀模板。`{user}` 会替换为触发回复的用户名，可改成直播间自己的称呼风格。
- AI Response Prompt（人工智能回复提示词）
 类型：文本；默认："请用简要的语言回复这条直播间弹幕，最好不要超过20字，但是不要复述弹幕："
 说明：无上下文模式下发送给 AI 的提示词。应明确要求简短、可公开展示、不要复述观众原文。
- AI Response Prompt (With Contexts)（人工智能带上下文回复提示词）
 类型：文本；默认："请用简要的语言和直播间弹幕进行对话，每次你的输出一定不要超过40字，不要思考过程，不要复述用户的消息。下面开始对话。"
 说明：上下文模式下的系统提示。适合连续互动，但应限制长度和风格，避免 AI 长篇输出或偏离直播语境。
- AI Response Cooldown (ms)（人工智能回复冷却，毫秒）
 类型：数值；默认：5000L
 说明：AI 两次回复之间的最小间隔。直播间弹幕密集时建议调大，控制请求量和回复频率。
- AI Response Contexts Enabled（人工智能回复启用上下文）
 类型：布尔；默认：true
 说明：是否保留最近弹幕和 AI 回复作为对话上下文。开启后回复更连贯，但会增加请求内容长度；不支持上下文的 AI 类型可能会自动降级。
- AI Response Contexts Limit（人工智能回复上下文限制）
 类型：数值；默认：64
 说明：保留的上下文条数上限。数值越大，AI 越能参考前文，但请求更长、成本和延迟也更高。
- AI Response User Blacklist Enabled（人工智能回复启用用户黑名单）
 类型：布尔；默认：true
 说明：开启后黑名单用户不会触发 AI 回复。适合排除测试账号、机器人账号或不希望 AI 回应的用户。
- AI Response User Blacklist (Sep With Semicolon)（人工智能回复用户黑名单，用分号分隔）
 类型：文本；默认："Wormwaker;Worrnwaker"
 说明：AI 回复黑名单，多个昵称用英文分号分隔。默认排除示例账号，使用前可改成自己的测试号或机器人号。
- Experiemental At（实验性 AT）
 类型：布尔；默认：false
 说明：实验性的 @ 相关处理。除非正在测试直播间点名或回复链路，否则保持关闭。

## 历史更新
- v1.1.4：新增 Neverlose 用户信息页 BiliLive 聊天框样式配置，并在 LiveChatter 开启时定期补拉历史弹幕。
- 35. 将 AutoLiveChatter 模块重命名为 LiveChatter，并将 LiveStream 模块的弹幕部分分到 LiveChatter 模块。重命名部分配置项。
- 8. 添加模块：AutoLiveChatter，自动直播间弹幕。

## 备注
- 消息流弹幕中的回复对象会以 `@昵称 正文` 显示在弹幕、聊天栏、通知、标题、Actionbar、控制台、文件输出和朗读中，Neverlose 的消息流历史也会保留该前缀。翻译只处理正文，保留被 @ 的昵称；触发器、远程执行与自动回复继续使用原有正文。若正文已含同一前缀，不重复添加。
- `Real Chatter`、自动发送、剪贴板快速发送和 `/blc` 都会向直播间公开发送弹幕。启用前确认当前 `Room ID`、登录账号和保护开关。
- `Developer.Live Chatter Fullwidth Spaces` 会影响手动命令发送路径中的空格处理；需要控制半角/全角空格时请到 Developer 模块配置。
- 远程执行默认关闭。开启前建议先用测试房间、白名单账号和无破坏命令验证完整流程。
- AI 回复依赖 AISettings 或相关 AI 服务配置；上下文可用性取决于当前 AI 类型。

## 相关命令
- `/blc <content...>`：向当前 LiveStream 房间发送一条 B 站直播弹幕，是 `/bili live chatter` 的快捷命令。
- `/bili live chatter <content...>`：向当前直播间发送弹幕，会进入发送队列并受冷却、长度拆分和房间保护影响。
- `/bili live addchatter <room_id> <content...>`：向指定房间追加一条待发送弹幕，适合脚本或外部流程指定房间投递。
- `/bili live leetchatter <content...>`：使用直播弹幕发送接口发送内容，适合需要直接测试发送链路的场景。
- `/bili live cq list`、`/bili live cq show`、`/bili live cq display`：查看当前弹幕发送队列。
- `/bili live cq clear`、`/bili live clcq`：清空弹幕发送队列。
- `/bili live cq pause`、`/bili live cq resume`：暂停或恢复弹幕发送队列。
- `/bili live cq add <content...>`、`/bili live cq direct <content...>`：向队列追加弹幕，或直接执行发送流程。
- `/bili live switch <roomId> auto`：切换到指定直播间并自动启用保护策略，适合观察别人直播间。
- `/bili live switch back`：切回自己的直播间。
- `/douyin live status`：彩色查看抖音房间、连接与事件接收状态摘要；`/douyin live info` 输出原始 JSON，`/livestreaminfo` 继续作为 JSON 兼容命令查看当前直播间信息。
- `/chathistory clear livestream`：清空直播弹幕 AI 回复上下文。
- `/config list livechatter`：列出 LiveChatter 当前配置，便于核对生效值。

## 相关模块
- [LiveStream (直播间)](./LiveStream.md)：提供房间号、直播间连接、礼物和观众数据，是 LiveChatter 的主要数据来源。
- [BiliSettings (B站设置)](./BiliSettings.md)：提供 B 站登录状态，发送弹幕和账号操作需要它。
- [ChatBar (聊天栏)](./ChatBar.md)：可与直播弹幕输入和聊天显示联动。
- [ClipboardTweaks (剪贴板增强)](./ClipboardTweaks.md)：为剪贴板快速发送提供文本处理能力。
- [AISettings (AI设置)](./AISettings.md)：配置 AI 回复、预设内容生成和部分接龙能力所需的 AI 服务。
- [AutoTranslate (自动翻译)](./AutoTranslate.md)：提供弹幕翻译所需的翻译链路。
- [GALOptions](./GALOptions.md)：可接收直播弹幕作为剧情或互动输入。
- [Streamer (主播模式)](./Streamer.md)：直播场景下常配合使用，减少主播端干扰。
- [Developer (开发者)](./Developer.md)：包含 `Live Chatter Fullwidth Spaces` 等影响弹幕发送细节的调试配置。
- [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)：颜色配置可选值说明。

## 相关资料
无

## 抖音弹幕

当 Live Stream 的 `Platform` 为 `Douyin` 时，LiveChatter 读取同一条抖音 WSS 的公共聊天弹幕、表情弹幕、礼物、点赞、进场、社交互动和房间统计。昵称、用户 ID、内容和时间沿用公共弹幕处理链；礼物沿用 `Gift Check`、通知、ChatBar 聚合、`Gift Value Display` 和 PRO 礼物触发器，这些配置不再仅限 B 站显示。仅旧版礼物轮询冷却在抖音下隐藏。连击按房间、发送者 UID、礼物 ID 和 groupId 去重，只把累计数量的新增部分及相应金额入队；无需等待结束包，相同数量结束包不重复计入。现有礼物聚合在约 3 秒无新增后输出，触发器继续按聚合结果运行。进场事件可复用观众进入通知，点赞和房间统计用于更新直播信息与 HUD。抖音不提供完整在线名单、可靠离场和弹幕发送；发送入口保持禁用，也不会查询 B 站身份资料或触发 B 站 GAL 互动。

连接状态可通过 `/douyin live status` 查看，原始 JSON 使用 `/douyin live info`；`/douyin live go/link [room]` 可打开或复制房间链接。LiveStream 的观众榜另行轮询并使用独立抖音等级档案，不因此调用 B 站资料接口，也不补齐平台未广播的弹幕。未开播时按 Live Stream 的等待配置查询，连接断开后自动重连。切换回 Bilibili 后恢复原有 B 站接收和发送队列。
