# LiveChatter
直播弹幕
分类：Web
描述：接收、显示、过滤、朗读、翻译和发送 B 站直播间弹幕，并可联动触发器与 AI 回复。

## 需求
- 安全级别：常规模块；远程执行和真实发送弹幕属于高风险能力，默认关闭或受保护。
- 权限需求：接收弹幕通常不需要管理员；发送弹幕、AI 以真实弹幕回复、部分直播间管理能力需要已登录 BiliSettings 账号。
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：普通可用；带 PRO 标记的高级用户筛选能力需要 PRO

## 介绍
LiveChatter 负责直播弹幕本身：它从 LiveStream 当前房间接收弹幕，按规则筛选后显示在客户端，也可以写入控制台或文件、朗读、翻译、播放提示音、触发命令，并让 AI 生成回复。

发送相关能力会使用 LiveStream 的 `Room ID` 作为目标房间，包括 `/blc`、`/bili live chatter`、剪贴板快速发送、自动发送和 AI 的 `Real Chatter` 模式。切换到别人直播间观察时，建议保持 `Prevent Others Room Chatter Sending` 开启，或使用 `/bili live switch <roomId> auto`，避免误把弹幕发到非自己的直播间。

## 配置项
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
 说明：控制 Neverlose GUI 用户信息页下方 BiliLive 聊天页的显示样式。`Modern` 使用 B 站头像、用户名、财富等级、粉丝牌和气泡布局；当前无可用 B 站头像元数据时会回退为昵称首字符头像。打开 Neverlose GUI 并停留在 BiliLive 页时，LiveChatter 模块未启用会按 10 秒冷却拉取历史弹幕，已启用会按 30 秒冷却补拉历史弹幕，切换到 BiliLive 页时也会立即拉取一次；滚动到顶部时会按 5 秒冷却补拉历史弹幕。历史弹幕会按用户、正文和时间戳去重，并按直播间分别写入 Neverlose BiliLive 页的私有显示缓存，不会重新写入全局聊天栏；补拉历史与实时消息会按弹幕时间排序，切换直播间时会刷新为当前房间的消息。开启 `User Blacklist Enabled` 后，黑名单用户也不会同步显示到 Neverlose BiliLive 聊天页。Modern 消息支持悬停高亮、复制、翻译和头像右键菜单。
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
- `/livestreaminfo`：查看当前直播间信息，便于确认房间号和连接状态。
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
