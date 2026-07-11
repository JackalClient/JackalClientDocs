# IRC
新版聊天室
分类：Web
描述：和验证合二为一的聊天室系统。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
IRC（聊天室）
命令语法在下面，自己去看。
完成一切后，在命令行可以用#开头发消息。请友善交流。不合规的消息可能会导致被禁言或封禁。

## 配置项
- Realm Route Order（Realm 线路顺序）
 类型：枚举；默认："CN-Ali > GL-EdgeOne > GL-Web"
 说明：控制新版 Realm WS 连接时三条线路的尝试顺序。每条线路会按配置顺序尝试，并保留协议兜底。
 可选：CN-Ali > GL-EdgeOne > GL-Web；CN-Ali > GL-Web > GL-EdgeOne；GL-EdgeOne > CN-Ali > GL-Web；GL-EdgeOne > GL-Web > CN-Ali；GL-Web > CN-Ali > GL-EdgeOne；GL-Web > GL-EdgeOne > CN-Ali
- Realm Route Order Auto Adjust（Realm 线路顺序自动调节）
 类型：布尔；默认：true
 说明：开启后，如果当前首选 Realm 线路连续多次失败、但后续线路可以连接成功，客户端会自动把该线路移动到顺序最后，并同步修改 Realm Route Order。
- Async While Getting Username（异步获取用户名）
 类型：布尔；默认：true
 说明：用于控制是否异步处理。默认值 true 通常能减少主线程卡顿；若你遇到并发相关问题，可回退到更保守设置测试。
- Message Fetch Interval (ms)（消息拉取延迟 (毫秒)）
 类型：数值；默认：5000L
 说明：用于控制检测/刷新/动画节奏。默认值 5000L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Message Fetch Timeout (s)（消息拉取超时 (秒)）
 类型：数值；默认：20
 说明：用于控制检测/刷新/动画节奏。默认值 20 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Message Send Timeout (s)（消息发送超时 (秒)）
 类型：数值；默认：20
 说明：用于控制检测/刷新/动画节奏。默认值 20 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Old Messages Threshold (s)（久远消息阈值 (秒)）
 类型：数值；默认：180
 说明：这是数值型配置。默认值 180 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Ignore Old Messages（忽略久远的消息）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Cancel Sending When As Guest（访客身份时取消发送）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Cancel Sending Repeated Message（取消发送重复消息）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Auto Change Name When Name Missing（名称丢失时自动改名）
 类型：布尔；默认：true
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Notify My Mentions（通知对我的@）
 类型：枚举；默认："Notify"
 说明：用于选择结果反馈方式。默认值 Notify 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：Off（关闭）；Notify（通知）；Chatter（弹幕）；Title（标题）；Actionbar（行为栏）；WinToast（系统通知）
- Message Notify Type（消息通知类型）
 类型：枚举；默认："Notify"
 说明：用于选择结果反馈方式。默认值 Notify 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：Off（关闭）；Notify（通知）；Chatter（弹幕）；Actionbar（行为栏）；Title（标题）；Island（岛）
- Text Database Update Method（文本数据库更新方法）
 类型：枚举；默认："POST"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 POST ，确认稳定后再逐项切换比较效果。
 可选：Old（老版）；GET（未收录）；POST（未收录）
- Quick Send Style（快速发送的样式）
 类型：枚举；默认："Input Box"
 说明：这是选项型配置。默认值 Input Box 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Off（关闭）；Bottom Chat（底部聊天栏）；Input Box（输入框）
- Quick Send Hotkey（快速发送快捷键）
 类型：按键/复合；默认：`{ { "Keybind", {VK_LCONTROL, VK_LMENU, '0' } }`}
 说明：用于设置快捷键触发。建议避免与系统或常用软件冲突，优先使用组合键提高可控性。
- Message Length Limit Via GET（使用GET时的消息长度上限）
 类型：数值；默认：39
 说明：这是数值型配置。默认值 39 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Speak Message（讲述消息）
 类型：布尔；默认：true
 说明：开启后会朗读收到的聊天消息；若连续收到完全相同的朗读内容，只朗读第一条，后续重复内容会自动跳过。
- Speak Max Length（最大讲述长度）
 类型：数值；默认：60
 说明：这是数值型配置。默认值 60 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Anti Spam（反刷屏）
 类型：布尔；默认：true
 说明：开启后，如果连续收到完全相同的同一用户消息，新重复消息会被屏蔽，不再输出到通知、控制台或聊天栏。
- Blatant Send（暴力发送）
 类型：布尔；默认：false
 说明：这是开关型配置。默认值 false 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Console Output（控制台输出）
 类型：布尔；默认：true
 说明：用于选择结果反馈方式。默认值 true 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Fast Send With # Prefix Command（使用#开头的命令快速发送）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Blocked User Names (Sep With Semicolon) (PRO)（已屏蔽用户名称（用分号分隔）（专业版））
 类型：文本；默认：""
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Underline Pro User Messages（为专业版用户的消息添加下划线）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Taboo Filter（违禁词过滤）
 类型：布尔；默认：false
 说明：用于限定作用范围，避免误触发。建议先用小样本验证规则，再逐步扩展；涉及正则时优先从简单规则开始。
- Debug Output（调试输出）
 类型：布尔；默认：false
 说明：这是开关型配置。默认值 false 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Presence Message Cooldown Enabled（登入离开消息冷却启用）
 类型：布尔；默认：true
 说明：开启后，同一用户的登入消息和离开消息会分别按冷却时间限频，减少用户频繁上下线造成的刷屏。
- Presence Message Cooldown (min)（登入离开消息冷却（分钟））
 类型：数值；默认：5
 说明：同一用户同一类登入/离开消息的最短输出间隔。每个用户的登入和离开分别计时。
- NL User Chat Box Style（Neverlose用户聊天框样式）
 类型：枚举；默认："Text"
 说明：控制 Neverlose GUI 用户信息页下方 IRC 聊天框的显示样式。`Modern` 使用头像、用户名/称号和左右气泡布局；自己的消息显示在右侧，并使用用户信息页头像。Modern 消息支持悬停高亮、复制、翻译、删除和头像右键菜单；删除仅影响本地显示，并会写入本地记录以避免后续再次显示，超过 3 天的删除记录会自动清理。复制用户名会从在线用户列表解析真实用户名；管理组用户可从头像菜单执行常用管理操作，用户信息查询会按当前用户名搜索。
 可选：Text（文本）；Modern（现代）
## 历史更新
- v1.1.4：完善 Neverlose 用户聊天框 Modern 样式，增加用户名/称号显示并修正自己的消息方向。
- v1.1.4：Neverlose 用户聊天框 Modern 样式新增消息/头像右键菜单、翻译切换和管理操作入口。
- v1.1.4：新增登入/离开消息冷却配置，并新增 Neverlose 用户聊天框 Modern 气泡样式配置。
- v1.1.3：优化免费版未登录时的自动登录重试频率，减少未登录状态下的日志刷屏。
- v1.1.2：修复消息显示中用户名以称号前缀开头时仍可能被截断的问题。

## 备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

## 相关命令

/irc
切换IRC聊天室模块状态（最新 Realm WS 系统）。

/irc login &lt;user&gt; &lt;pass&gt;
登录 Realm 账号。

/irc email send register &lt;email&gt;
向指定邮箱发送注册验证码。

/irc email send reset &lt;email&gt;
向指定邮箱发送重置密码验证码。

/irc register &lt;user&gt; &lt;pass&gt; &lt;email&gt; &lt;code&gt; [card]
注册 Realm 账号并自动登录。code 为邮箱验证码；card 为 Pro 激活码（Pro 版可选）。

/irc resume
使用本地 token 自动恢复登录。

/irc guest
[FREE] 使用访客登录。

/irc password change &lt;newPassword&gt;
登录后修改密码（30 秒冷却，newPassword 可包含空格）。

/irc password reset <user/email> &lt;code&gt;
未登录重置密码（60 秒冷却）。成功后会发送随机密码到邮箱。

/irc logout
退出当前登录并断开 WS 连接。

/irc status
查看 WS/认证/IRC 加入状态。

/irc setname &lt;name&gt;
设置 Realm 用户昵称（Title 字段）。服务端会校验内容并限制每天仅可修改一次。

/irc list
查看当前在线用户数量。PRO 下按用户组分组显示在线用户，格式为：
[前缀] title - (username) #id
当 title 为历史默认值 Rookie 时，客户端自动回退显示 username。
在 Neverlose GUI 中，手动执行该命令也会临时刷新右上角在线人数徽标。

/irc announce list [page=1]
拉取 IRC 公告列表（Realm WS 最新系统）。

/irc report &lt;type&gt; [detail...]
【WIP 维护中】举报用户行为。type 为举报类型（如 crack），detail 为补充说明（可选）。

/irc block &lt;name&gt;
/irc unblock <name|all|*>
【PRO】屏蔽/取消屏蔽指定用户（用分号分隔多个名字）。

/irc send [msg...]
发送一条聊天室公共信息（Realm WS 最新系统）。你需要先登入IRC并启用模块。
如果不填 msg，将会打开一个框，你可以在里面输入（也可以输入中文）。
当前不支持私聊。友善交流讨论。

## 相关模块
- [IRCLegacy (旧版聊天室)](./IRCLegacy.md)

## 相关资料
[【JackalClient 新版IRC和验证系统说明】](https://www.yuque.com/wormwaker/tkpgqw/pzx8qe24d90ildn4?singleDoc)
