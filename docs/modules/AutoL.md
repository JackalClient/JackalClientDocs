AutoL
自动嘲讽
[PRO]
分类：Control
描述：敌人死亡时自动发送嘲讽信息。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：PRO 独有

介绍
AutoL（自动嘲讽）用于敌人死亡时自动发送嘲讽信息。
适合键鼠行为控制、输入增强和自动化操作场景。
初次使用可优先调整：Add Target Name、Trigger Cooldown (ms)、Event Dedup Cooldown (ms)。

配置项
- Source（来源）
 类型：枚举；默认："Preset"
 说明：这是选项型配置。默认值 Preset 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Fixed（固定）；List Random Element（列表中随机的元素）；File Random Line（文件随机行）；Preset（预设）
- Detect Kills（检测击杀）
 类型：枚举；默认："Death"
 说明：这是选项型配置。默认值 Death 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Death（死亡）；PVP（未收录）
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
 说明：用于指定文件/目录路径。建议使用稳定的绝对路径并确认权限可访问，避免因路径变化导致功能失效。
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
 可选：Direct（直接）；/shout（未收录）；/pc（未收录）；@（未收录）；/title（/标题）；/tellraw（未收录）；actionbar（行为栏）
- Mode（模式）
 类型：枚举；默认："Smart Send"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 Smart Send ，确认稳定后再逐项切换比较效果。
 可选：Smart Send（智能发送）；Copy（复制）；Chatter（弹幕）；Speak（讲述）；WinToast（系统通知）；Real Chatter（真弹幕）
历史更新
- 10. 【PRO】修改自动嘲讽和检测发言的调用顺序，可以规避一些特殊情况。
- 68. 【PRO】添加模块：Auto L，在 Minecraft 中自动嘲讽你的敌人。建议打开 ChatQueue 模块实时查看待发送消息队列。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [AntiAFK (反挂机)](./AntiAFK.md)
- [AutoClicker (连点器)](./AutoClicker.md)
- [MouseWatcher (鼠标监视)](./MouseWatcher.md)
- [MouseSwap (鼠标交换)](./MouseSwap.md)
- [MouseDisabler (禁用鼠标)](./MouseDisabler.md)
- [MouseTeleport (鼠标传送)](./MouseTeleport.md)
- [MouseTrails (鼠标轨迹)](./MouseTrails.md)
- [MouseESP (鼠标透视)](./MouseESP.md)

相关资料
[Jackal 加入了完全外置的自动嘲讽...](https://www.bilibili.com/video/BV1Kb6QBdEnx)
