# AutoL
自动嘲讽
[PRO]
分类：Control
描述：敌人死亡时自动发送嘲讽信息。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：PRO 独有

## 介绍
AutoL（自动嘲讽）用于敌人死亡时自动发送嘲讽信息。
适合键鼠行为控制、输入增强和自动化操作场景。
初次使用可优先调整：Add Target Name、Trigger Cooldown (ms)、Event Dedup Cooldown (ms)。

目标玩家的日志包含词、玩家名包含词和完整名称排除词共用 MinecraftUtils 的 `MinecraftPlayerFilters.json` 云控，在 MinecraftUtils 开启时随客户端启动或重新开启模块异步刷新。更新失败继续使用有效缓存或规则，尚无有效数据时使用旧内置列表；模块中的自定义玩家黑名单仍独立生效。

## 配置项

> 配置界面说明（v1.1.7）：以 Includes 开头的检测场景已合并为 `Detection Scenarios` 多选项。
- Source（来源）
 类型：枚举；默认："Preset"
 说明：这是选项型配置。默认值 Preset 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Fixed（固定）；List Random Element（列表中随机的元素）；File Random Line（文件随机行）；Preset（预设）
- Detect Kills（检测击杀）
 类型：枚举；默认："Death"
 说明：Death 检测死亡提示；PVP 同时支持 KILL_PATTERNS.txt 中含击杀者字段的模板；Killed by me 仅在符合本人击杀条件时触发，不触发挖床或队伍淘汰事件。
 可选：Death（死亡）；PVP（玩家对战）；Killed by me（被我击杀）
- Killed By Me Detection（本人击杀检测方式）
 类型：枚举；默认："Strict"；仅在 Detect Kills 为 Killed by me 时显示。
 说明：Strict 要求模板中的 killer 字段经过玩家名规范化后，与当前玩家名完整匹配，不区分大小写；Line Contains Keyword 只要求击杀提示行包含配置的关键词，不区分大小写。
- Killed By Me Line Contains Keyword（本人击杀行内关键词）
 类型：文本；默认：空；仅在 Killed by me + Line Contains Keyword 时显示。
 说明：留空不触发；请填入能唯一标识本人击杀的关键词。用户名尚未识别时，关键词模式仍可统计本人击杀，不会清空已有计数；Strict 必须具有已识别的玩家名。击杀统计按 SessionHUD 的 Statistics Per Player 选择玩家统计或共享总计，自动缓存，并对重复日志去重，不受嘲讽输出冷却或内容过滤影响。
- Count Player Kills（统计被我击杀的玩家次数）
 类型：布尔；默认：true；仅在 Detect Kills 为 Killed by me 时显示和生效。
 说明：将本人击杀各玩家的次数和击杀者账号归属保存到 `output/Cache/autol_kill_counts.json`，玩家名不区分大小写，重启后恢复，不受输出冷却、内容过滤或 HUD 显示开关影响，并对重复日志去重。排行榜和 Kill By Me 仍跨本人账号共享；Total Kills 可通过 Total Kills Scope 选择统计范围，不受 SessionHUD 的 Statistics Per Player 设置影响，也不应用 30 天过期清理。关闭后停止更新此缓存和三种范围计数，并停用计数前后缀，但不影响 SessionHUD 的击杀统计。
- Kill Count Affix Mode（击杀计数前后缀模式）
 类型：枚举；默认：Off；可选：Off、Total Kills、Kill By Me；仅在 Detect Kills 为 Killed by me 时显示和生效。
 说明：Total Kills 使用 Total Kills Scope 所选范围中的总击杀次数；Kill By Me 使用本次目标玩家被本人击杀的累计次数，不受该范围设置影响。计数包含当前击杀，仅在真实本人击杀事件生成消息时添加，不用于发言响应、挖床或队伍淘汰。
- Total Kills Scope（总击杀统计范围）
 类型：枚举；默认：Total；可选：Total、Player、Minecraft；仅在 Killed by me + Total Kills 时显示和生效。
 说明：Total 累计全部账号、全部实例的记录，保持旧行为；Player 累计当前玩家名的记录，同名多个实例共享，并保存到击杀缓存；Minecraft 仅累计当前 Minecraft 实例的记录，切换用户名或重新进服不会重置，实例退出、日志解析记录清空或重新检测后从 0 开始。未知用户名沿用此前的统计归属，首次未知时使用匿名统计。旧版缓存无法推断击杀者，旧次数仍保留在 Total 与匿名归属中，不会伪分配给某个已知账号；具名 Player 统计从有归属的新记录起累计。
- Total Kills Affix Minimum（总击杀计数最低次数）
 类型：整数；默认：1；仅在 Killed by me + Total Kills 时显示。
 说明：总击杀累计达到该值时才添加计数文字。
- Kill By Me Affix Minimum（被我击杀计数最低次数）
 类型：整数；默认：10；仅在 Killed by me + Kill By Me 时显示。
 说明：当前目标累计被本人击杀达到该值时才添加计数文字。
- Total Kills Affix Format（总击杀计数格式）
 类型：文本；默认：`{count}th kill!`；仅在 Killed by me + Total Kills 时显示。
 说明：`{count}` 替换为所选范围的纯数字；`{nth}` 替换为完整英文序数，例如 1st、2nd、3rd、11th、12th、13th、21st。可改为 `{nth} kill!`，不要再给 `{nth}` 手动添加 th；原默认模板保持兼容。
- Kill By Me Affix Format（被我击杀计数格式）
 类型：文本；默认：`killed by me for {count}th time!`；仅在 Killed by me + Kill By Me 时显示。
 说明：`{count}` 替换为当前目标被本人击杀次数；同样支持完整序数占位符 `{nth}`，例如 `killed by me for {nth} time!`。
- Kill Count Affix Position（击杀计数前后缀位置）
 类型：枚举；默认：Suffix；可选：Suffix、Prefix；仅在 Killed by me 且计数模式不为 Off 时显示。
 说明：计数与正文以一个空格分隔，优先级低于普通前后缀、格式前缀及反刷屏后缀，排列为“格式前缀 + 普通前缀 + 计数前缀 + 正文 + 计数后缀 + 普通后缀 + 反刷屏后缀”。仍遵循最终消息长度限制。
- Detect Speak（检测发言）
 类型：枚举；默认："Pattern"
 说明：这是选项型配置。默认值 Pattern 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Pattern（样式）；AI（人工智能）；Mixed（混合）
- Fixed Content（固定内容）
 类型：文本；默认："一破，卧龙出山！{player} 已被 Wurst 击毙"
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Content List（内容列表）
 类型：文本；默认："{player} ꮮ;{player} ꮮꮮ;{player} ꮮꮮⅬ"
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- File Path（文件路径）
 类型：文本；默认：""
 说明：用于指定随机读取一行内容的文本文件，支持包含中文等非 ASCII 字符的路径。建议使用稳定的绝对路径并确认权限可访问，避免因路径变化导致功能失效。
- Preset（预设）
 类型：枚举；默认："Mesugaki (Chinese
 说明：这是选项型配置。默认值 Mesugaki (Chinese 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
- Add Target Name（添加目标名称）
 类型：布尔；默认：true
 说明：用于指定模块实际作用对象。建议先对单个目标测试通过，再扩大到多目标，降低误操作风险。
- Name Transform（名称转换）
 类型：枚举；默认："Lower Case 2"
 说明：这是选项型配置。默认值 Lower Case 2 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Off（关闭）；Lower Case（小写）；Upper Case（大写）；Annoying Case（混写）；Lower Case 2（小写 2）
- Includes Player Speak（包括玩家发言）
 类型：布尔；默认：false
 说明：这是开关型配置。默认值 false 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Includes Void Falling（包括落入虚空）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Includes Falling（包括坠落）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Includes Spear Penetration（包括长矛穿刺）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Includes Mace Smashing（包括重锤压扁）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Includes Burnt（包括火烧死亡）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Includes Lava（包括岩浆死亡）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Includes Nonfinal Kills（包括非最终击杀）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Includes Final Kills（包括最终击杀）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Includes Bed Destruction（包括床摧毁）
 类型：布尔；默认：false
 说明：这是开关型配置。默认值 false 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Includes Team Elimination（包括团灭）
 类型：布尔；默认：false
 说明：这是开关型配置。默认值 false 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Trigger Cooldown (ms)（触发冷却 (毫秒)）
 类型：数值；默认：800L
 说明：用于控制检测/刷新/动画节奏。默认值 800L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Event Dedup Cooldown (ms)（事件去重冷却 (毫秒)）
 类型：数值；默认：2200L
 说明：用于控制检测/刷新/动画节奏。默认值 2200L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Player Blacklist (Sep With Semicolon)（玩家黑名单（用分号分隔））
 类型：文本；默认：""
 说明：用于限定作用范围，避免误触发。建议先用小样本验证规则，再逐步扩展；涉及正则时优先从简单规则开始。
- Player Blacklist Keywords (Sep With Semicolon)（玩家黑名单关键词（用分号分隔））
 类型：文本；默认："Owner;Admin"
 说明：用于限定作用范围，避免误触发。建议先用小样本验证规则，再逐步扩展；涉及正则时优先从简单规则开始。
- Cancel If Target Name Is Filtered（目标名称含屏蔽词时取消）
 类型：布尔；默认：true
 说明：目标名称命中客户端屏蔽词时取消本次嘲讽，并且不会占用本次触发冷却。
- Prefix Enabled（启用前缀）/ Prefix Content（前缀内容）
 类型：布尔/文本；默认：false/""
 说明：开启后在正文前添加指定内容。
- Suffix Enabled（启用后缀）/ Suffix Content（后缀内容）
 类型：布尔/文本；默认：false/""
 说明：开启后在正文后添加指定内容；Anti Spam 内容始终位于该后缀之后。
- AntiSpam Style（反刷屏风格）
 类型：枚举；默认："Off"
 说明：这是选项型配置。默认值 Off 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Off（关闭）；Normal（普通）；Japanese（日语）
- Off（关闭）
 类型：文本；默认："Normal", "Japanese"
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Remove Decoration（自动嘲讽移除装饰）
 类型：布尔；默认：false
 说明：这是开关型配置。默认值 false 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Length Limit Mode（长度限制模式）
 类型：枚举；默认："Off"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 Off ，确认稳定后再逐项切换比较效果。
 可选：Off（关闭）；Fallback（后备方案）；Filter（筛选器）；Ellipsis（省略号）；Cut（剪切）
- Length Limit（长度限制）
 类型：数值；默认：60L
 说明：这是数值型配置。默认值 60L 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Format（格式）
 类型：枚举；默认："Direct"
 说明：这是选项型配置。默认值 Direct 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Direct（直接）；/shout（未收录）；/pc（未收录）；@（未收录）；/title（/标题）；/tellraw（未收录）；actionbar（行为栏）；Custom（自定义）
- Custom Format Prefix（自定义格式前缀）
 类型：文本；默认："!"
 说明：Format 选择 Custom 时使用，并在 Prefix Content 之前添加到最终消息开头。
- Mode（模式）
 类型：枚举；默认："Smart Send"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 Smart Send ，确认稳定后再逐项切换比较效果。
 可选：Smart Send（智能发送）；Copy（复制）；Chatter（弹幕）；Notify（通知）；Actionbar（行为栏）；Chat Bar（聊天栏）；Console Output（控制台输出）；Log（日志）；Speak（讲述）；WinToast（系统通知）；Real Chatter（真弹幕）
- Notify Copy（复制时通知）
 类型：布尔；默认：true
 说明：Mode 选择 Copy 时，控制复制完成后是否显示通知。
## 历史更新
- v1.1.7：新增 Custom 格式、正文前后缀、目标名称屏蔽词检查和复制通知开关，并优化配置分组与显示条件。
- v1.1.1：玩家名前导 `?` 会自动清理；清理异常前缀后以“正版”开头的玩家名会自动去除“正版”；Mode 新增 Notify、Actionbar、Chat Bar、Console Output、Log。
- v1.1.1：新增两类中文挖床提示识别，会从行首前三个字中的颜色字判断队伍。
- 10. 【PRO】修改自动嘲讽和检测发言的调用顺序，可以规避一些特殊情况。
- 68. 【PRO】添加模块：Auto L，在 Minecraft 中自动嘲讽你的敌人。建议打开 ChatQueue 模块实时查看待发送消息队列。

## 备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

## 相关命令
- `/autol killtop [ps=20] [pn=1]`：按被本人击杀次数降序显示彩色排行榜，支持分页，同次数按名称排序。
- `/autol query <name>`：查询指定玩家的累计次数，名称不区分大小写。
- `/autol clear <name>`：清除指定目标玩家，同时扣除其在 Total、Player、Minecraft 三种范围中的次数。
- `/autol clearall`：无需确认清除全部目标玩家数据与三种范围计数。以上操作不改变 SessionHUD 战绩。

## 相关模块
- [AntiAFK (反挂机)](./AntiAFK.md)
- [AutoClicker (连点器)](./AutoClicker.md)
- [MouseWatcher (鼠标监视)](./MouseWatcher.md)
- [MouseSwap (鼠标交换)](./MouseSwap.md)
- [MouseDisabler (禁用鼠标)](./MouseDisabler.md)
- [MouseTeleport (鼠标传送)](./MouseTeleport.md)
- [MouseTrails (鼠标轨迹)](./MouseTrails.md)
- [MouseESP (鼠标透视)](./MouseESP.md)

## 相关资料
[Jackal 加入了完全外置的自动嘲讽...](https://www.bilibili.com/video/BV1Kb6QBdEnx)
