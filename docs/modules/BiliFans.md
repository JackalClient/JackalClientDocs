# BiliFans
B站粉丝
分类：Web
描述：监控B站粉丝并发送通知。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
BiliFans（B站粉丝）用于监控B站粉丝并发送通知。
专业版还可以监视指定用户的直播粉丝团成员与大航海成员，并在 HUD 中合并显示 Fans / Members / Guards。
粉丝数量查询可以不需要登陆B站；Show Fans Nickname 仍需要登录，成员与大航海列表支持查询别人的 UID 或昵称。

## 配置项
- User IDs (Sep With Semicolon)（用户 ID (用分号分隔)）
 类型：通用；默认：WORMWAKER_MID
 说明：用于指定模块实际作用对象。建议先对单个目标测试通过，再扩大到多目标，降低误操作风险。
- Fans Update Cooldown (s)（粉丝更新冷却（秒））
 类型：数值；默认：60L
 说明：控制粉丝数量刷新周期。默认值 60L 以稳定为主；调小会更灵敏但可能增加资源占用。
- Members User IDs (Sep With Semicolon) (PRO)（粉丝团用户ID（分号分隔）（专业版））
 类型：文本；默认：WORMWAKER_MID
 说明：专业版监视粉丝团成员的目标 UID 列表。
- Members Update Cooldown (s) (PRO)（粉丝团更新冷却（秒）（专业版））
 类型：数值；默认：60L
 说明：专业版粉丝团成员数量刷新周期。
- Guards User IDs (Sep With Semicolon) (PRO)（大航海用户ID（分号分隔）（专业版））
 类型：文本；默认：WORMWAKER_MID
 说明：专业版监视大航海成员的目标 UID 列表。
- Guards Update Cooldown (s) (PRO)（大航海更新冷却（秒）（专业版））
 类型：数值；默认：60L
 说明：专业版大航海成员数量刷新周期。
- Fans Notify Mode（粉丝通知模式）
 类型：枚举；默认："Notify"
 说明：控制粉丝变化的通知方式。
 可选：Off（关闭）；Notify（通知）；Console Output（控制台输出）；Actionbar（行为栏）；Chatter（弹幕）；Real Chatter（真弹幕）；Title（标题）；WinToast（系统通知）；Speak（讲述）
- Members Notify Mode (PRO)（粉丝团通知模式（专业版））
 类型：枚举；默认："Notify"
 说明：控制粉丝团成员变化的通知方式。
 可选：Off（关闭）；Notify（通知）；Console Output（控制台输出）；Actionbar（行为栏）；Chatter（弹幕）；Real Chatter（真弹幕）；Title（标题）；WinToast（系统通知）；Speak（讲述）
- Guards Captain Notify Mode (PRO) / Guards Commander Notify Mode (PRO) / Guards Governor Notify Mode (PRO)
 类型：枚举；默认："Notify"
 说明：分别控制舰长、提督、总督变化的通知方式。
 可选：Off（关闭）；Notify（通知）；Console Output（控制台输出）；Actionbar（行为栏）；Chatter（弹幕）；Title（标题）；WinToast（系统通知）；Speak（讲述）
- Show Fans Nickname (PRO)（显示粉丝昵称（专业版））
 类型：枚举；默认："Off"
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
 可选：Off（关闭）；Only Self（仅自己）
- Show Members Nickname (PRO)（显示粉丝团昵称（专业版））
 类型：枚举；默认："On"
 说明：控制粉丝团成员变化通知中是否显示昵称。粉丝团接口支持查询他人，因此默认开启。
 可选：Off（关闭）；On（开启）
- Show Guards Nickname (PRO)（显示大航海昵称（专业版））
 类型：枚举；默认："On"
 说明：控制大航海成员变化通知中是否显示昵称。大航海接口支持查询他人，因此默认开启。
 可选：Off（关闭）；On（开启）
- Notify Famous Fans (Own Only) (PRO)（通知名人粉丝（仅自己）（专业版））
 类型：枚举；默认："Off"
 说明：仅在 Show Fans Nickname (PRO)=Only Self 且能识别新增粉丝昵称时生效；新增粉丝达到 10000 粉丝后，会按所选模式额外提示。
 可选：Off（关闭）；Notify（通知）；Chatter（弹幕）；Actionbar（行为栏）；Chat Bar（聊天栏）；WinToast（系统通知）；Speak（讲述）；Real Chatter（真弹幕）
- Notify Fans Increase（通知涨粉）
 类型：布尔；默认：true
 说明：用于选择结果反馈方式。默认值 true 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Notify Fans Decrease（通知掉粉）
 类型：布尔；默认：true
 说明：用于选择结果反馈方式。默认值 true 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Notify Members Increase (PRO) / Notify Members Decrease (PRO)
 类型：布尔；默认：true
 说明：控制粉丝团成员增加/减少时是否发送通知。
- Notify Guards Increase (PRO) / Notify Guards Decrease (PRO)
 类型：布尔；默认：true
 说明：控制大航海成员增加/减少时是否发送通知。
- Fans Change Event（粉丝数变化事件）
 类型：枚举；默认："Sound"
 说明：这是选项型配置。默认值 Sound 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Off（关闭）；Sound（音效）；Command（命令）
- Members Change Event (PRO)（粉丝团变化事件（专业版））
 类型：枚举；默认："Sound"
 说明：粉丝团成员变化时触发音效或命令。
 可选：Off（关闭）；Sound（音效）；Command（命令）
- Guards Captain Change Event (PRO) / Guards Commander Change Event (PRO) / Guards Governor Change Event (PRO)
 类型：枚举；默认："Sound"
 说明：大航海变化时按舰长、提督、总督分别触发事件；对应的 Sound 与 Command 配置也分别独立设置。
 可选：Off（关闭）；Sound（音效）；Command（命令）
- Custom Fans Increase Sound（自定义涨粉音效）
 类型：文本；默认："levelup.wav"
 说明：用于选择结果反馈方式。默认值 levelup.wav 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Custom Fans Decrease Sound（自定义掉粉音效）
 类型：文本；默认："pling_low.wav"
 说明：用于选择结果反馈方式。默认值 pling_low.wav 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Custom Fans Increase Command（自定义涨粉命令）
 类型：文本；默认：""
 说明：该配置用于调整模块行为细节。支持 `{{nickname}}` 占位符；开启并成功获取名称时替换为粉丝昵称，否则替换为 `BiliUser`。
- Custom Fans Decrease Command（自定义掉粉命令）
 类型：文本；默认：""
 说明：该配置用于调整模块行为细节。支持 `{{nickname}}` 占位符；开启并成功获取名称时替换为粉丝昵称，否则替换为 `BiliUser`。
- Custom Members Increase/Decrease Command (PRO)
 类型：文本；默认：""
 说明：粉丝团成员变化时执行的自定义命令。支持 `{{nickname}}` 占位符；Show Members Nickname 开启并成功获取名称时替换为成员昵称，否则替换为 `BiliUser`。
- Custom Guards Captain/Commander/Governor Increase/Decrease Command (PRO)
 类型：文本；默认：""
 说明：舰长、提督、总督变化时执行的自定义命令。支持 `{{nickname}}` 占位符；Show Guards Nickname 开启并成功获取名称时替换为大航海成员昵称，否则替换为 `BiliUser`。
 
- Async（异步）
 类型：布尔；默认：true
 说明：用于控制是否异步处理。默认值 true 通常能减少主线程卡顿；若你遇到并发相关问题，可回退到更保守设置测试。
- Connect Timeout (s)（连接超时时间 (秒)）
 类型：数值；默认：5L
 说明：用于控制检测/刷新/动画节奏。默认值 5L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- HUD（是否显示HUD。）
 类型：布尔；默认：false
 说明：这是开关型配置。默认值 false 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- HUD Show Fans / HUD Show Members (PRO) / HUD Show Guards (PRO)
 类型：布尔；默认：true
 说明：控制 BiliFans HUD 是否显示粉丝、粉丝团成员、大航海成员数据；每类数据只会在对应监视 UID 列表包含该用户时显示。
- Hide HUD When Menu On（打开菜单时隐藏HUD）
 类型：布尔；默认：true
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Action On Failure（失败时的行为）
 类型：枚举；默认："Pause Temporarily"
 说明：控制粉丝数、粉丝团成员和大航海成员查询失败后的处理方式。Ignore 会跳过本次失败数据，Pause Temporarily 会按 Pause Duration 暂停后续监控，Disable Module 会关闭模块。
 可选：Ignore（忽略）；Pause Temporarily（暂时暂停）；Disable Module（关闭模块）
- Notify Error（通知错误）
 类型：布尔；默认：false
 说明：控制查询失败时是否弹出错误通知，不影响 Action On Failure 所选择的失败处理方式。
- Threshold Max（阈值最大值）
 类型：数值；默认：16U
 说明：这是数值型配置。默认值 16U 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Pause Duration (s)（暂停时长（秒））
 类型：数值；默认：30L
 说明：用于控制检测/刷新/动画节奏。默认值 30L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- HUD Color（HUD 颜色）
 类型：枚举；默认："Colorful"
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- HUD User Index (Sep With Semicolon)（HUD 用户索引 (用分号分隔)）
 类型：文本；默认：""
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- HUD Font Size（HUD 字号）
 类型：数值；默认：30
 说明：用于控制文本可读性。默认字号 30 适合多数分辨率；高分屏可适当加大，低分辨率建议减少以免拥挤。
- HUD Line Gap（HUD 行距）
 类型：数值；默认：5
 说明：用于细调显示样式和间距。默认值 5 通常是平衡视觉效果与紧凑度的设置，建议小步调整并实时观察。
- HUD Opacity (0~1)（HUD 不透明度）
 类型：数值；默认：0.8f
 说明：用于控制透明度。默认值 0.8f 兼顾可见性和遮挡；如果你觉得挡视线可小幅下调，若看不清可小幅上调。
- HUD Format（HUD 格式）
 类型：枚举；默认："Name: All"
 说明：默认显示为 `Wormwaker: 20000 Fans, 21 Members, 1 Guard` 这类聚合格式，也保留旧的粉丝数格式；当同一用户同时存在多类 HUD 数据时会自动使用聚合显示。
 可选：Name: All；All；Number；Fans: Number；Number Fans；Name Fans: Number；Name: Number；Name: Number Fans

- HUD X Rate（HUD 横坐标比例）
 类型：数值；默认：0.8f
 说明：用于控制界面元素在屏幕中的相对位置。默认值 0.8f 一般是作者调过的稳定布局；建议每次只改一个轴，避免元素跑出可视区域。
- HUD Y Rate（HUD 纵坐标比例）
 类型：数值；默认：0.75f
 说明：用于控制界面元素在屏幕中的相对位置。默认值 0.75f 一般是作者调过的稳定布局；建议每次只改一个轴，避免元素跑出可视区域。
## 历史更新
- 拆分粉丝、粉丝团、舰长、提督、总督五组通知模式；舰长/提督/总督的 Sound/Command 独立配置；LiveStream 收到礼物后可按 3 秒冷却刷新对应主播的粉丝团和大航海数据。
- 自定义命令支持 `{{nickname}}` 占位符，可插入粉丝、粉丝团成员或大航海成员名称；未启用名称获取时使用 `BiliUser`。
- 新增专业版粉丝团成员与大航海成员监视、独立冷却、HUD 聚合显示，以及 `/bili member`、`/bili guard` 命令。
- 新增 Notify Famous Fans (Own Only) (PRO)，可在自己的新增粉丝中识别万粉以上用户并额外通知。
- 18. 修改 Bili Fans 使之可以通知客户端退出期间的粉丝变化。
- 15. 为 Bili Fans 添加新配置：
- 8. 添加模块： Bili Fans，监控B站粉丝数量，如果有变化会触发通知。

## 备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

## 相关命令

/bili fans
/bili fans list [limit=100]
/bili fans enum [limit=100]
查看自己的粉丝列表。limit 为数量限制。如果粉丝太多，你可能因B站限制无法全部看完。【PRO】版的输出会更详细。

/bili fans find &lt;kw...&gt;
/bili fans findf &lt;kw...&gt;
/bili fans search &lt;limit&gt; &lt;kw...&gt;
/bili fans searchf &lt;limit&gt; &lt;kw...&gt;
【PRO】以昵称关键字kw搜索自己的粉丝。两个带f后缀的为快速模式，找到一个很符合的结果就会直接输出并停止。search(f)可以指定搜索范围limit（表示前limit个粉丝中搜索）, find 则为B站支持的最大搜索范围（可能为1000）中搜索。findf 为前 100 个中搜索。你可以使用UID=或UID:开头搜索指定UID的用户。

/bili member list [limit=100] [uid=&lt;UID或昵称&gt;]
/bili member find &lt;kw...&gt; [uid=&lt;UID或昵称&gt;]
/bili member search &lt;limit&gt; &lt;kw...&gt; [uid=&lt;UID或昵称&gt;]
【PRO】查看或搜索指定用户直播粉丝团成员。未指定 uid/user 时默认当前账号。

/bili guard list [limit=100] [uid=&lt;UID或昵称&gt;]
/bili guard find &lt;kw...&gt; [uid=&lt;UID或昵称&gt;]
/bili guard search &lt;limit&gt; &lt;kw...&gt; [uid=&lt;UID或昵称&gt;]
【PRO】查看或搜索指定用户直播间的大航海成员，显示舰长/提督/总督、粉丝牌等级与陪伴天数。

/test fans_up
/test fans_down
用于测试。

## 相关模块
- [BiliNotifier (B站通知)](./BiliNotifier.md)
- [BiliSettings (B站设定)](./BiliSettings.md)

## 相关资料
无
