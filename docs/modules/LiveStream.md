# LiveStream
直播间
分类：Web
描述：一些直播间的功能。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
LiveStream（直播间）用于一些直播间的功能。
适合联网信息获取、账号联动和在线交互场景。
初次使用可优先调整：Gift Update Cooldown (ms)、Gift Notify Mode、Notify Audience Enter。
使用前请确认网络可用及相关 API/平台账号配置完整。

## 配置项
- Room ID（房间号）
 类型：数值；默认：0L
 说明：这是数值型配置。默认值 0L 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Auto Toggle LiveChatter Module（自动联动直播弹幕模块）
 类型：布尔；默认：true
 说明：用于选择结果反馈方式。默认值 true 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Receive Info Data（接收信息数据）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Gift Update Cooldown (ms)（礼物更新冷却（毫秒））
 类型：数值；默认：5000L
 说明：用于控制检测/刷新/动画节奏。默认值 5000L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Gift Check（礼物检查）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Gift Triggers Enabled (PRO)（是否启用礼物触发器 (专业版)）
 类型：布尔；默认：false
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Gift Triggers Config Path（礼物触发器配置路径）
 类型：文本；默认："config/liveStreamGiftTriggers.ini"
 说明：用于指定文件/目录路径。建议使用稳定的绝对路径并确认权限可访问，避免因路径变化导致功能失效。
- Gift Trigger Default Command（礼物触发器默认命令）
 类型：文本；默认："/bili live chatter Thanks \{\{nickname}} for \{\{gift}}[比心]!!!"
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Gift Notify Mode（礼物通知模式）
 类型：枚举；默认："Notify"
 说明：用于选择结果反馈方式。默认值 Notify 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：Off（关闭）；Notify（通知）；Chatter（弹幕）；Speak（讲述）；Title（标题）；Actionbar（行为栏）；WinToast（系统通知）
- Gift Value Display（礼物价值显示）
 类型：枚举；默认："Off"
 说明：这是选项型配置。默认值 Off 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Off（关闭）；Gold（金瓜子）；Hamster（金仓鼠）；Silver（银瓜子）
- Gift Title Color（礼物标题颜色）
 类型：枚举；默认："Flow"
 说明：用于选择结果反馈方式。默认值 Flow 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：Flow（流动）；其余颜色见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Connect Timeout (s)（连接超时时间 (秒)）
 类型：数值；默认：8L
 说明：用于控制检测/刷新/动画节奏。默认值 8L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Notify Audience Enter（通知观众进入）
 类型：枚举；默认："Off"
 说明：用于选择结果反馈方式。默认值 Off 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：Off（关闭）；Notify（通知）；Chatter（弹幕）；Speak（讲述）；Title（标题）；Actionbar（行为栏）
- Notify Audience Enter Chatter Color（通知观众进入弹幕颜色）
 类型：枚举；默认："Colorful"
 说明：用于选择结果反馈方式。默认值 Colorful 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Notify Audience Leave（通知观众离开）
 类型：枚举；默认："Off"
 说明：用于选择结果反馈方式。默认值 Off 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：Off（关闭）；Notify（通知）；Chatter（弹幕）；Speak（讲述）；Title（标题）；Actionbar（行为栏）
- Notify Audience Leave Chatter Color（通知观众离开弹幕颜色）
 类型：枚举；默认："Black"
 说明：用于选择结果反馈方式。默认值 Black 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Audience Enter Preset（观众进入预设）
 类型：枚举；默认："Enter"
 说明：这是选项型配置。默认值 Enter 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Enter（进入）；Welcome（欢迎）；Join（加入）
- Audience Leave Preset（观众离开预设）
 类型：枚举；默认："Leave"
 说明：这是选项型配置。默认值 Leave 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Leave（离开）；Depart（离去）
- Notify Audience Face Download（通知下载观众头像）
 类型：布尔；默认：false
 说明：用于选择结果反馈方式。默认值 false 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- HUD（是否显示HUD。）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- HUD X Rate（HUD 横坐标比例）
 类型：数值；默认：0.05f
 说明：用于控制界面元素在屏幕中的相对位置。默认值 0.05f 一般是作者调过的稳定布局；建议每次只改一个轴，避免元素跑出可视区域。
- HUD Y Rate（HUD 纵坐标比例）
 类型：数值；默认：0.2f
 说明：用于控制界面元素在屏幕中的相对位置。默认值 0.2f 一般是作者调过的稳定布局；建议每次只改一个轴，避免元素跑出可视区域。
- HUD Information Font Size（HUD 信息字号）
 类型：数值；默认：30
 说明：用于控制文本可读性。默认字号 30 适合多数分辨率；高分屏可适当加大，低分辨率建议减少以免拥挤。
- HUD Online Audience Animation Speed（是否显示HUD。 Online Audience Animation 速率）
 类型：数值；默认：6.0f
 说明：这是数值型配置。默认值 6.0f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- HUD Show Basic Information（HUD 是否显示直播间基本信息）
 类型：布尔；默认：true
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- HUD Show Online Audience（HUD 显示在线观众）
 类型：布尔；默认：true
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- HUD Online Audience Query Source（HUD 在线观众查询源）
 类型：枚举；默认："Front-end"
 说明：这是选项型配置。默认值 Front-end 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Gold Rank API（贡献榜API）；Front-end（前端）
- HUD Online Audience Query API Host UID（HUD 在线观众查询API主播UID）
 类型：通用；默认：WORMWAKER_MID
 说明：用于指定模块实际作用对象。建议先对单个目标测试通过，再扩大到多目标，降低误操作风险。
- HUD Online Audience Query API Page Size（HUD 在线观众查询API页大小）
 类型：数值；默认：2
 说明：这是数值型配置。默认值 2 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- HUD Online Audience Update Cooldown (ms)（HUD 在线观众更新冷却时间 (毫秒)）
 类型：数值；默认：8000L
 说明：用于控制检测/刷新/动画节奏。默认值 8000L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- HUD Online Audience Max Count（HUD 在线观众最大显示数量）
 类型：数值；默认：12U
 说明：这是数值型配置。默认值 12U 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- HUD Online Audience Nickname Font Size（HUD 在线观众昵称字号）
 类型：数值；默认：20
 说明：用于控制文本可读性。默认字号 20 适合多数分辨率；高分屏可适当加大，低分辨率建议减少以免拥挤。
- HUD Online Audience Face（HUD 在线观众头像）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；头像纹理使用双线性过滤，缩放显示更平滑。若要改动，建议一次只改一个开关便于观察影响。
- HUD Online Audience Face Circle（HUD在线观众头像圆形）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- HUD Online Audience Face Update Cooldown (d)（HUD在线观众头像更新冷却（天））
 类型：数值；默认：7
 说明：用于控制检测/刷新/动画节奏。默认值 7 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- HUD Online Audience Line Gap（HUD 在线观众行距）
 类型：数值；默认：35
 说明：用于细调显示样式和间距。默认值 35 通常是平衡视觉效果与紧凑度的设置，建议小步调整并实时观察。
- HUD Online Audience Background（HUD 是否绘制在线观众背景）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- HUD Online Audience Background Unification（是否显示HUD。 Online Audience 背景 Unification）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- HUD Online Audience Background Roundness（HUD 在线观众背景圆滑程度）
 类型：数值；默认：0.3f
 说明：用于细调显示样式和间距。默认值 0.3f 通常是平衡视觉效果与紧凑度的设置，建议小步调整并实时观察。
- HUD Online Audience Background Round Corners（HUD 在线观众背景开启圆角）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- HUD Online Audience Background Opacity (0~1)（HUD 在线观众背景不透明度 (0~1)）
 类型：数值；默认：0.5f
 说明：用于控制透明度。默认值 0.5f 兼顾可见性和遮挡；如果你觉得挡视线可小幅下调，若看不清可小幅上调。
- HUD Online Audience Background Shadow（HUD 在线观众背景开启阴影）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- HUD Online Audience Background Shadow Thickness（HUD 在线观众背景阴影厚度）
 类型：数值；默认：20.0f
 说明：用于细调显示样式和间距。默认值 20.0f 通常是平衡视觉效果与紧凑度的设置，建议小步调整并实时观察。
- HUD Online Audience Background Shadow Opacity (0~1)（HUD 在线观众背景阴影不透明度 (0~1)）
 类型：数值；默认：0.5f
 说明：用于控制透明度。默认值 0.5f 兼顾可见性和遮挡；如果你觉得挡视线可小幅下调，若看不清可小幅上调。
- HUD Online Audience Background Color（HUD 在线观众背景颜色）
 类型：枚举；默认："Black"
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
 可选：Flow（流动）；其余颜色见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- HUD Online Audience Background Shadow Color（HUD 在线观众背景阴影颜色）
 类型：枚举；默认："Black"
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- HUD Online Audience Time Mode（HUD 在线观众时长模式）
 类型：枚举；默认："Absolute"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 Absolute ，确认稳定后再逐项切换比较效果。
 可选：Off（关闭）；Absolute（绝对）；Relative（未收录）；Level System（等级系统）
- Audience Level Upgrade Congratulations（观众等级升级恭喜）
 类型：枚举；默认："Real Chatter"
 说明：这是选项型配置。默认值 Real Chatter 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Off（关闭）；Chatter（弹幕）；Notify（通知）；Title（标题）；Real Chatter（真弹幕）；Speak（讲述）；WinToast（系统通知）
- Audience Level System Only Followers（观众等级系统仅供粉丝）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Audience Level System Speed（观众等级系统速率）
 类型：数值；默认：1.0f
 说明：这是数值型配置。默认值 1.0f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Audience Level Up Only When Host is Present（观众等级系统仅在主播在场时工作）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Wipe Audience Profile If Not Fans（清除非粉丝观众档案）
 类型：布尔；默认：true
 说明：用于指定文件/目录路径。建议使用稳定的绝对路径并确认权限可访问，避免因路径变化导致功能失效。
- HUD Online Audience Max Absolute Time (min)（HUD 在线观众最大绝对时长（分钟））
 类型：数值；默认：240
 说明：这是数值型配置。默认值 240 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
## 历史更新
- 7. 修复 Livestream 模块中 Chatter Remote Execution (Riskful) 无效的问题。
- 8. 为 Livestream 添加配置：
- 14. 添加模块：LiveStream，支持爬取B站直播间弹幕并显示出来：

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
- [Streamer (主播模式)](./Streamer.md)

## 相关资料
无
