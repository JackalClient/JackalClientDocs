# LiveChatter
直播弹幕
分类：Web
描述：管理直播间弹幕交互（接收/发送/AI回复）。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
LiveChatter（直播弹幕）用于管理直播间弹幕交互（接收/发送/AI回复）。
适合联网信息获取、账号联动和在线交互场景。
初次使用可优先调整：Auto Send Time Mode、Auto Send Content Mode、Auto Send Split Cooldown Min (ms)。
使用前请确认网络可用及相关 API/平台账号配置完整。

## 配置项
- Auto Send Time Mode（自动发送时间模式）
 类型：枚举；默认："Off"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 Off ，确认稳定后再逐项切换比较效果。
 可选：Off（关闭）；Periodic（周期性）
- Auto Send Periodic Interval (ms)（自动发送周期（毫秒））
 类型：数值；默认：60000L
 说明：用于控制检测/刷新/动画节奏。默认值 60000L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Auto Send Content Mode（自动发送内容模式）
 类型：枚举；默认："Fixed"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 Fixed ，确认稳定后再逐项切换比较效果。
 可选：Fixed（固定）；List Random Element（列表中随机的元素）；List Loop（列表循环）；Prefab（未收录）；File Lines（文件 行数）
- Auto Send Prefab Type（自动发送预设类型）
 类型：枚举；默认："Aphorism"
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
 可选：Aphorism（未收录）；Idiom Solitaire（未收录）；Ask Solitaire（自问自答）
- Auto Send Fixed Content（自动发送固定内容）
 类型：文本；默认："给主播点个关注~"
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Auto Send List Content (Sep With Semicolon)（自动发送列表内容（用分号分隔））
 类型：文本；默认：""
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Auto Send List Current Index（自动发送列表当前索引）
 类型：数值；默认：0
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Auto Send File Source Path（自动发送文件来源路径）
 类型：文本；默认：""
 说明：用于指定文件/目录路径。建议使用稳定的绝对路径并确认权限可访问，避免因路径变化导致功能失效。
- Clipboard Quick Send（剪贴板快速发送）
 类型：枚举；默认："Off"
 说明：这是选项型配置。默认值 Off 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Off（关闭）；Send（未收录）；Copy and Send（复制并发送）；Select All, Copy and Send（全选复制并发送）
- Clipboard Quick Send Key（剪贴板快速发送快捷键）
 类型：按键/复合；默认：`{ { "Keybind", {VK_LCONTROL, VK_LMENU, VK_ADD } }`}
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Clipboard Quick Send Confirm（剪贴板快速发送是否确认）
 类型：布尔；默认：false
 说明：这是开关型配置。默认值 false 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Clipboard Quick Send Confirm Time (s)（剪贴板快速发送确认限时 (秒)）
 类型：数值；默认：5
 说明：这是数值型配置。默认值 5 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Clipboard Quick Send Prevent Repeat（剪贴板快速发送防止重复发送）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Clipboard Quick Send Apply Text Processor（剪贴板快速发送是否应用文本处理器）
 类型：布尔；默认：false
 说明：用于指定模块实际作用对象。建议先对单个目标测试通过，再扩大到多目标，降低误操作风险。
- Auto Send Split Cooldown Min (ms)（自动发送切片冷却最小值(毫秒)）
 类型：数值；默认：1000
 说明：用于控制检测/刷新/动画节奏。默认值 1000 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Auto Send Split Cooldown Max (ms)（自动发送切片冷却最大值(毫秒)）
 类型：数值；默认：2000
 说明：用于控制检测/刷新/动画节奏。默认值 2000 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Max Allowed Chatter Delay (s)（弹幕延迟最大允许值 (秒)）
 类型：数值；默认：60U
 说明：用于选择结果反馈方式。默认值 60U 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Single Chatter Length Limit（单条弹幕长度限制）
 类型：数值；默认：40U
 说明：用于选择结果反馈方式。默认值 40U 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Color（颜色）
 类型：枚举；默认："White"
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Display（显示）
 类型：枚举；默认："Chatter"
 说明：这是选项型配置。默认值 Chatter 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Off（关闭）；Chatter（弹幕）；Notify（通知）；Title（标题）；Actionbar（行为栏）
- Horizontal Reverse（横向翻转）
 类型：布尔；默认：false
 说明：这是开关型配置。默认值 false 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Actionbar Color（行为栏颜色）
 类型：枚举；默认："Colorful"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 Colorful ，确认稳定后再逐项切换比较效果。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Title Color（标题颜色）
 类型：枚举；默认："White"
 说明：用于选择结果反馈方式。默认值 White 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：Flow（流动）；其余颜色见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Title Font Size（标题字号）
 类型：数值；默认：150
 说明：用于控制文本可读性。默认字号 150 适合多数分辨率；高分屏可适当加大，低分辨率建议减少以免拥挤。
- Console Output（控制台输出）
 类型：布尔；默认：true
 说明：用于选择结果反馈方式。默认值 true 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Console Output Timestamp（控制台输出时间戳）
 类型：布尔；默认：true
 说明：用于选择结果反馈方式。默认值 true 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Console Output Wealth & Medal（控制台输出财富值和灯牌）
 类型：布尔；默认：true
 说明：用于选择结果反馈方式。默认值 true 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- File Output（文件输出）
 类型：布尔；默认：false
 说明：用于指定文件/目录路径。建议使用稳定的绝对路径并确认权限可访问，避免因路径变化导致功能失效。
- File Output Format（文件输出格式）
 类型：文本；默认："\{\{content}}`\{\{nickname}}"
 说明：用于指定文件/目录路径。建议使用稳定的绝对路径并确认权限可访问，避免因路径变化导致功能失效。
- File Output Path（文件输出路径）
 类型：文本；默认："output\\Chatters.txt"
 说明：用于指定文件/目录路径。建议使用稳定的绝对路径并确认权限可访问，避免因路径变化导致功能失效。
- User Whitelist Enabled（启用用户白名单）
 类型：布尔；默认：false
 说明：用于限定作用范围，避免误触发。建议先用小样本验证规则，再逐步扩展；涉及正则时优先从简单规则开始。
- User Whitelist (Sep With Semicolon)（用户白名单（用分号分隔））
 类型：文本；默认："Wormwaker;Worrnwaker"
 说明：用于限定作用范围，避免误触发。建议先用小样本验证规则，再逐步扩展；涉及正则时优先从简单规则开始。
- User Blacklist Enabled（启用用户黑名单）
 类型：布尔；默认：false
 说明：用于限定作用范围，避免误触发。建议先用小样本验证规则，再逐步扩展；涉及正则时优先从简单规则开始。
- User Blacklist (Sep With Semicolon)（用户黑名单（用分号分隔））
 类型：文本；默认：""
 说明：用于限定作用范围，避免误触发。建议先用小样本验证规则，再逐步扩展；涉及正则时优先从简单规则开始。
- Custom Filter Enabled（启用自定义过滤器）
 类型：布尔；默认：false
 说明：用于限定作用范围，避免误触发。建议先用小样本验证规则，再逐步扩展；涉及正则时优先从简单规则开始。
- Custom Filter Keywords (Sep With Semicolon)（自定义过滤器关键词（用分号分隔））
 类型：文本；默认：""
 说明：用于限定作用范围，避免误触发。建议先用小样本验证规则，再逐步扩展；涉及正则时优先从简单规则开始。
- Taboo Filter（违禁词过滤）
 类型：枚举；默认："Replace (Unsafe
 说明：用于限定作用范围，避免误触发。建议先用小样本验证规则，再逐步扩展；涉及正则时优先从简单规则开始。
- Remote Execution (Riskful)（远程执行（有风险））
 类型：枚举；默认："Disabled"
 说明：这是选项型配置。默认值 Disabled 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Disabled（禁用）；Wormwake（未收录）
- Remote Execution Username Whitelist (Sep with Semicolon)（远程执行用户名白名单（用分号分隔））
 类型：文本；默认："Wormwaker;Worrnwaker"
 说明：用于限定作用范围，避免误触发。建议先用小样本验证规则，再逐步扩展；涉及正则时优先从简单规则开始。
- Remote Execution Privileges Policy（远控权限策略）
 类型：枚举；默认："Admin & Normal"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 Admin & Normal ，确认稳定后再逐项切换比较效果。
 可选：Everyone Admin（全员管理员）；Admin & Normal（管理员与普通）；Only Admin（仅管理员）；Everyone Normal（全员普通）
- Remote Execution Display（是否显示远程执行信息）
 类型：布尔；默认：false
 说明：这是开关型配置。默认值 false 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Remote Execution Notify（是否通知远程执行结果）
 类型：布尔；默认：true
 说明：用于选择结果反馈方式。默认值 true 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Speaker（讲述）
 类型：枚举；默认："Off"
 说明：这是选项型配置。默认值 Off 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Off（关闭）；Username & Text（用户名 & 文本）；Only Text（仅文本）
- Speaker User Whitelist Enabled（启用讲述用户白名单）
 类型：布尔；默认：false
 说明：用于限定作用范围，避免误触发。建议先用小样本验证规则，再逐步扩展；涉及正则时优先从简单规则开始。
- Speaker User Whitelist (Sep With Semicolon)（讲述用户白名单（用分号分隔））
 类型：文本；默认："Wormwaker;Worrnwaker"
 说明：用于限定作用范围，避免误触发。建议先用小样本验证规则，再逐步扩展；涉及正则时优先从简单规则开始。
- Speaker User Blacklist Enabled（启用讲述用户黑名单）
 类型：布尔；默认：false
 说明：用于限定作用范围，避免误触发。建议先用小样本验证规则，再逐步扩展；涉及正则时优先从简单规则开始。
- Speaker User Blacklist (Sep With Semicolon)（讲述用户黑名单（用分号分隔））
 类型：文本；默认：""
 说明：用于限定作用范围，避免误触发。建议先用小样本验证规则，再逐步扩展；涉及正则时优先从简单规则开始。
- Translator（翻译器）
 类型：枚举；默认："Off"
 说明：这是选项型配置。默认值 Off 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Off（关闭）；Chinese（中文）；English（英语）；Exchange（交换）
- Speaker Skip Emoji（讲述跳过表情）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Speaker Async（讲述是否异步）
 类型：布尔；默认：true
 说明：用于控制是否异步处理。默认值 true 通常能减少主线程卡顿；若你遇到并发相关问题，可回退到更保守设置测试。
- Sound（音效）
 类型：枚举；默认："Off"
 说明：用于选择结果反馈方式。默认值 Off 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Triggers Enabled（启用触发器）
 类型：布尔；默认：false
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Trigger Disable Speaker（触发器禁用讲述）
 类型：布尔；默认：true
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Triggers Using Regex（触发器使用正则表达式）
 类型：布尔；默认：true
 说明：用于限定作用范围，避免误触发。建议先用小样本验证规则，再逐步扩展；涉及正则时优先从简单规则开始。
- Triggers Config Path（触发器配置路径）
 类型：文本；默认："config\\liveStreamChatterTriggers.ini"
 说明：用于指定文件/目录路径。建议使用稳定的绝对路径并确认权限可访问，避免因路径变化导致功能失效。
- AI Response（人工智能回复）
 类型：枚举；默认："Off"
 说明：这是选项型配置。默认值 Off 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Off（关闭）；Notify（通知）；Speak（讲述）；Chatter（弹幕）；Title（标题）；Actionbar（行为栏）；Real Chatter（真弹幕）
- AI Response Chatter Type（人工智能回复弹幕类型）
 类型：枚举；默认："Top"
 说明：用于选择结果反馈方式。默认值 Top 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：Scroll（滚动）；Top（顶端）；Bottom（底部）；Reverse（颠倒）；Horizontal（横向）；Vertical（纵向）；Random（随机）
- AI Response Chatter Color（人工智能回复弹幕颜色）
 类型：枚举；默认："Red"
 说明：用于选择结果反馈方式。默认值 Red 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- AI Response Title Color（人工智能回复标题颜色）
 类型：枚举；默认："Red"
 说明：用于选择结果反馈方式。默认值 Red 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- AI Response Prefix（人工智能回复前缀）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- AI Response Prefix String（人工智能回复前缀字符串）
 类型：文本；默认："回复@{user}:"
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- AI Response Prompt（人工智能回复提示词）
 类型：文本；默认："请用简要的语言回复这条直播间弹幕，最好不要超过20字，但是不要复述弹幕："
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- AI Response Prompt (With Contexts)（人工智能带上下文回复提示词）
 类型：文本；默认："请用简要的语言和直播间弹幕进行对话，每次你的输出一定不要超过40字，不要思考过程，不要复述用户的消息。下面开始对话。"
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- AI Response Cooldown (ms)（人工智能回复冷却（毫秒））
 类型：数值；默认：5000L
 说明：用于控制检测/刷新/动画节奏。默认值 5000L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- AI Response Contexts Enabled（人工智能回复启用上下文）
 类型：布尔；默认：true
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- AI Response Contexts Limit（人工智能回复上下文限制）
 类型：数值；默认：64
 说明：这是数值型配置。默认值 64 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- AI Response User Blacklist Enabled（人工智能回复启用用户黑名单）
 类型：布尔；默认：true
 说明：用于限定作用范围，避免误触发。建议先用小样本验证规则，再逐步扩展；涉及正则时优先从简单规则开始。
- AI Response User Blacklist (Sep With Semicolon)（人工智能回复用户黑名单（用分号分隔））
 类型：文本；默认："Wormwaker;Worrnwaker"
 说明：用于限定作用范围，避免误触发。建议先用小样本验证规则，再逐步扩展；涉及正则时优先从简单规则开始。
## 历史更新
- 35. 将 AutoLiveChatter 模块重命名为 LiveChatter，并将 LiveStream 模块的弹幕部分分到 LiveChatter 模块。重命名部分配置项。
- 8. 添加模块：AutoLiveChatter，自动直播间弹幕。

## 备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

## 相关命令
无

## 相关模块
- [IRC (聊天室)](./IRC.md)
- [AntiRickroll (反诈骗)](./AntiRickroll.md)
- [AntiBrowser (反浏览器)](./AntiBrowser.md)
- [AntiWebpage (反网页)](./AntiWebpage.md)
- [TcpMonitor (TCP监视)](./TcpMonitor.md)
- [TcpKiller (TCP杀手)](./TcpKiller.md)
- [LiveStream (直播间)](./LiveStream.md)
- [Streamer (主播模式)](./Streamer.md)

## 相关资料
无
