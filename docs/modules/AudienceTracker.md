# Audience Tracker
观众追踪
分类：Web
描述：在多个 B 站直播间追踪指定用户，并在目标发弹幕或出现在观众榜时提醒你。

## 需求
- 安全级别：常规模块
- 权限需求：普通查询不需要管理员；`Real Chatter` 会真实发送直播弹幕，需要已登录 BiliSettings 账号。
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：PRO 专业版独有

## 介绍
Audience Tracker 用来盯住一批特定 B 站用户。你可以把目标用户和要观察的直播间写在模块配置里，也可以写在单独的 ini 配置文件里。

本模块全程为客户端负责监视，不依赖任何第三方平台数据，因此得到的信息绝对真实有效且及时，如需监视所有直播间，请使用新版 `Bili User Spider` 模块，依赖第三方平台实现全方位监视。

如果 `Bili User Spider` 开启 Audience Tracker 联动，它会在发现被监控用户于某直播间发言后，自动把对应 `uid + roomid` 合并到 Audience Tracker 目标组。之后由 Audience Tracker 使用自己的弹幕与观众榜查询继续跟踪该用户。

模块会做两件事：
- 查询直播间历史弹幕。如果目标用户刚刚发过弹幕，就按你的配置输出到控制台、通知、朗读、Actionbar、Chatter 或真实弹幕。
- 查询直播间观众榜。如果上一次正常查询没有找到目标，而这一次查询找到了目标，就按你的配置提醒，并可显示榜单排名。

弹幕查询使用直播历史弹幕接口，观众榜查询由 `Audience Query Source` 单独控制，默认使用 `Front-end`。被封禁、未开播或轮播中的直播间会被跳过。模块会把最近弹幕、在线状态、房间状态和去重缓存保存到 `output/Cache/audienceTrackerCache.json`，重启客户端后仍可继续查看最近状态。ArrayList 中该模块的额外信息会显示当前启用的目标用户数量；如果有任一目标在线，则显示为 `N/M`，其中 `N` 是在线目标数，`M` 是启用目标数；没有启用组时显示 `Disabled`。

## 配置项
- Config Source（配置来源）
 类型：枚举；默认：`Module Options Below`
 说明：选择目标组从哪里读取。只想在 GUI 里填几组目标时选 `Module Options Below`；目标很多、需要批量维护或想给每组单独覆盖通知方式时选 `Config File`。
 可选：`Module Options Below`；`Config File`

- Config File Path（配置文件路径）
 类型：文本；默认：`config/audienceTracker.ini`
 说明：当 `Config Source` 选择 `Config File` 时读取这个文件。可以填客户端目录下的相对路径，也可以填绝对路径。文件不存在、格式错误、没有启用的组、缺少必填项或用户解析失败时，模块启用会失败并自动关闭。

- Chatter Query Cooldown (s)（弹幕查询冷却，秒）
 类型：数值；默认：`30L`
 说明：每个直播间查询历史弹幕的最小间隔。调小能更快发现目标发弹幕，但会增加请求频率；同时监视很多直播间时建议保持默认或调大。

- Audience Query Cooldown (s)（观众查询冷却，秒）
 类型：数值；默认：`60L`
 说明：每个直播间查询观众榜的最小间隔。调小会更快发现目标进入观众榜，但观众榜接口更容易产生请求压力；只需要粗略知道目标是否出现时可调大。

- Audience Query Source（观众查询源）
 类型：枚举；默认：`Front-end`
 说明：控制 Audience Tracker 查询观众榜时使用哪个来源，独立于 LiveStream 的 HUD 在线观众查询源。`Front-end` 从直播间前端页面解析观众榜；`Gold Rank API` 使用金瓜子榜接口；`New` 使用新版 WBI 贡献榜接口，未登录时会回退到 `Front-end`。
 可选：`Gold Rank API`；`Front-end`；`New`

- Max Allowed Chatter Delay (s)（弹幕最大允许延迟，秒）
 类型：数值；默认：`60U`
 说明：历史弹幕接口会返回一批旧弹幕。这个配置限制“弹幕时间戳距离当前时间”最多允许多少秒。超过这个时间的弹幕会被忽略，避免模块反复输出很久以前的弹幕。默认值与 Live Chatter 一致。

- Console Output Chatter（控制台输出弹幕）
 类型：枚举；默认：`Detailed`
 说明：目标发弹幕时，是否额外在控制台输出一行。这个输出独立于 `Notify Chatter Mode`，不会带 `[Audience Tracker]` 前缀。
 可选：`Off` 不输出；`Simple` 输出用户和内容；`Standard` 输出时间、用户和内容；`Detailed` 额外输出主播、房间标题和房间号。

- Notify Chatter Mode（弹幕通知模式）
 类型：枚举；默认：`Off`
 说明：目标发弹幕时，除控制台输出外还要不要用客户端通知方式提醒。只想看控制台记录时保持 `Off`；想在游戏内滚动显示选 `Chatter`；想朗读选 `Speak`；`Real Chatter` 会把内容真实发送到当前 Live Stream 房间，启用前务必确认不会误发。
 可选：`Off`；`Notify`；`Chatter`；`WinToast`；`Actionbar`；`Speak`；`Real Chatter`

- Notify Chatter Content（通知弹幕内容）
 类型：布尔；默认：`true`
 说明：开启时通知里包含目标发送的弹幕正文；关闭时只提示目标用户发了弹幕，不展示具体内容。想降低刷屏或避免敏感内容出现在通知里时可关闭。

- Notify Chatter Prefix（弹幕通知前缀）
 类型：枚举；默认：`User`
 说明：控制弹幕通知正文前面带哪些上下文。监视多个直播间时建议至少选 `User & Room Host` 或 `User & Room Title`，否则只看用户名和内容不容易分辨来自哪个直播间。
 可选：`Off` 只显示弹幕内容；`User` 显示用户；`User & Room` 显示用户和房间号；`User & Room Host` 显示用户和主播；`User & Room Title` 显示用户和房间标题。

- Notify Chatter In Own Room（自己直播间弹幕通知）
 类型：枚举；默认：`Only LiveStream Module Off`
 说明：目标在你自己的直播间发弹幕时是否提醒。默认值表示 LiveStream 已经在监听自己的直播间时不重复提醒，LiveStream 关闭时才由 Audience Tracker 提醒。
 可选：`Never` 从不提醒；`Only LiveStream Module Off` 只在 LiveStream 关闭时提醒；`Always` 总是提醒。

- Notify Audience Mode（观众通知模式）
 类型：枚举；默认：`Off`
 说明：目标从“不在观众榜”变成“出现在观众榜”时如何提醒。模块首次查询只建立基线，不会因为目标已经在榜上就立刻提醒；之后只有上一轮正常查询没找到、本轮查询找到了，才会触发。观众榜命中通常没有弹幕正文，因此不会通过 `Console Output Chatter` 输出。
 可选：`Off`；`Notify`；`Chatter`；`WinToast`；`Actionbar`；`Speak`；`Real Chatter`

- Notify Audience Leaving（通知观众离开）
 类型：布尔；默认：`true`
 说明：开启后，目标从上一轮观众榜命中变成本轮未命中时，也会按 `Notify Audience Mode` 和 `Notify Audience Format` 提醒。关闭后只提醒目标出现在观众榜，不提醒离开观众榜。

- Notify Audience Rank（通知观众排名）
 类型：布尔；默认：`false`
 说明：开启后观众通知里会附带 `(#N)`，例如 `湖面的亭影 (#3) found in 23344341`。如果你只关心“有没有出现”，可保持关闭；如果你关心目标在榜单里的位置，就开启。

- Audience Rank Limitation（观众排名限制）
 类型：枚举；默认：`Value`
 说明：决定查到第几名为止。限制越小，请求越少，也越不容易查到靠后的目标；限制越大，发现概率更高但请求更多。
 可选：`Off` 使用 LiveStream 当前观众查询目标数量；`Value` 使用固定最大名次；`Percentage` 按百分比换算最大名次；`Both` 同时受固定值和百分比限制，取更小的范围。

- Audience Rank Max Value（观众排名最大值）
 类型：数值；默认：`10L`
 说明：当排名限制为 `Value` 或 `Both` 时使用。默认只查前 10 名；目标经常排在后面时可以调大。

- Audience Rank Max Percentage (0~100)（观众排名最大占比）
 类型：数值；默认：`70L`
 说明：当排名限制为 `Percentage` 或 `Both` 时使用。它会基于 LiveStream 的观众查询目标数量换算。例如目标数量是 20、百分比是 70，则最多查约前 14 名。

- Notify Audience Format（观众通知格式）
 类型：枚举；默认：`User & Room`
 说明：控制目标出现在观众榜时，通知里用房间号、主播名还是房间标题描述位置。监视同一主播多个房间时用房间号更直接；监视多个主播时用主播名或标题更容易读。
 可选：`User & Room`；`User & Room Host`；`User & Room Title`

- Exclude Audience In Own Room（排除自己直播间观众）
 类型：布尔；默认：`true`
 说明：当 LiveStream 已开启、当前房间是你自己的直播间，并且目标只是出现在观众榜里时，不通知这个目标，也不为了这组目标查询自己的房间观众榜。这样可以避免你直播时被自己的观众榜刷屏。只想跨房间找人时建议保持开启。

- Target Group N Name（目标组名称）
 类型：文本；默认：第 1 组为空
 说明：给一组目标起名字，方便在配置里区分用途，例如 `黑名单关注`、`朋友`、`重点观察`。组名也会参与内部去重，不建议多个组使用完全相同的名字和目标。

- Target Group N Enabled（启用目标组）
 类型：布尔；默认：`true`
 说明：关闭后这一组不会参与查询和通知，但配置会保留。适合临时停用一组目标，而不是删除用户和房间列表。

- Target Users N (Sep With Semicolon)（目标用户，英文分号分隔）
 类型：文本；默认：空
 说明：填写要追踪的 UID 或昵称，用英文分号分隔，例如 `2;114514;某个昵称`。每次修改后模块会尝试解析每一项；解析失败的项会自动从配置里移除并给出警告。UID 更稳定，昵称可能因为改名或重名导致解析失败或不准确。

- Target Rooms N (Sep With Semicolon)（目标直播间，英文分号分隔）
 类型：文本；默认：空
 说明：填写这组目标要监视的直播间房间号，用英文分号分隔，例如 `23344341;1913427864`。同一组用户会在这些房间里同时被追踪。不同房间的查询冷却分开计算，并会错开请求时间。

## 配置文件
当 `Config Source` 设为 `Config File` 时，模块会在启用时读取 `Config File Path`。切换到 `Config File` 或修改文件路径时，也会重新读取一次。

配置文件按组写，每个 `[Group N]` 是一组目标。每组必须有：
- `users`：目标用户 UID 或昵称，用英文分号分隔。
- `rooms`：要监视的直播间房间号，用英文分号分隔。

可选键：
- `enabled`：布尔值。缺省等于启用；写 `false` 可临时关闭这一组。
- `name`：组名。缺省使用节名。
- 其他键可以覆盖模块配置项，例如 `notify_audience_mode`、`console_output_chatter`、`max_allowed_chatter_delay`。键名不区分大小写，可用下划线；枚举值也不区分大小写。

示例：
```ini
[Group 1]
name=Group 1
enabled=true
users=2;114514
rooms=31196635
notify_audience_format=User & Room
notify_audience_mode=Notify
notify_audience_rank=false
console_output_chatter=Detailed
max_allowed_chatter_delay=60
```

这个示例表示：追踪 UID 为 `2` 和 `114514` 的用户，只监视 `31196635` 这个直播间；目标出现在观众榜时用 `Notify` 提醒，弹幕命中时在控制台输出详细信息，并忽略 60 秒以前的历史弹幕。

## 备注
- 弹幕去重按“房间号 + 用户名 + 时间戳 + 内容”判断。同一条历史弹幕再次被接口返回时，不会重复输出。
- 如果目标在多个组中都命中，控制台弹幕只输出一次；其他通知按各组配置处理。
- 观众榜数据来源由 `Audience Query Source` 控制。如果你发现观众榜命中不稳定，可先切换为默认的 `Front-end`；API 类型来源仍依赖主播 UID 和 B 站接口可用性。
- 观众离开通知会优先使用上一轮观众榜命中时保存的昵称；如果接口没有返回昵称，才会退回 UID。
- `Real Chatter` 会真实发送 B 站直播弹幕，不建议在未确认目标房间和内容前启用。
- `Bili User Spider` 自动写入目标组时会复用同名目标组；`Config Source=Config File` 时会写入配置文件，`Module Options Below` 时会写入模块配置。

## 相关命令
- `/audiencetracker status [uid/nickname=all]`：刷新并查看目标用户当前状态、所在直播间和最近最多 20 条弹幕。
- `/audiencetracker present [uid/nickname=all]`：刷新状态后只输出当前 Present 的目标。
- `/audiencetracker trace <uid/nickname>`：目标 Present 时打开其所在直播间，Absent 时提示目标不在线。
- `/audiencetracker remove <uid/nickname>`：从当前配置中移除目标；如果多个组包含该目标会全部移除，如果某组只剩该目标则自动禁用该组。
- `/audiencetracker add <uids/nicknames> <rooms...>`：向当前配置添加一个新目标组。用户和房间都使用英文分号分隔，例如 `/audiencetracker add 2;某昵称 31196635;23344341`。
- `/audiencetracker reload`：当 `Config Source=Config File` 时重新加载配置文件，并输出路径和成功加载的组数。
- `/audiencetracker config`：彩色列举当前配置和目标组。

## 相关模块
- [LiveStream (直播间)](./LiveStream.md)
- [LiveChatter (直播弹幕)](./LiveChatter.md)
- [BiliSettings (B站设定)](./BiliSettings.md)
- [BiliUserSpider](./BiliUserSpider.md)

## 相关资料
无
