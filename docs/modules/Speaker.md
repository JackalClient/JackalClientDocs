# Speaker
讲述人
分类：Misc
描述：调用 Windows 的讲述人念一段文本。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
Speaker（讲述人）用于调用 Windows 的讲述人念一段文本。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Notify Error、Method、Spoken Text Mode。

## 配置项
- Async（异步）
 类型：布尔；默认：true
 说明：用于控制是否异步处理。默认值 true 通常能减少主线程卡顿；若你遇到并发相关问题，可回退到更保守设置测试。
- Notify Error（通知错误）
 类型：布尔；默认：true
 说明：用于选择结果反馈方式。默认值 true 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Not As Debuggee（被调试时禁用）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Method（方法）
 类型：枚举；默认："SAPI"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 SAPI ，确认稳定后再逐项切换比较效果。
 可选：SAPI（未收录）
- Voice（音色）
 类型：枚举；默认："Default"
 说明：这是选项型配置。默认值 Default 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Default（默认）；Auto（自动）；Custom（自定义）
- Custom Voice Name（自定义音色名称）
 类型：文本；默认："Microsoft Huihui Desktop - Chinese (Simplified)"
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Rate（比率）
 类型：枚举；默认："Default"
 说明：这是选项型配置。默认值 Default 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Default（默认）；Auto（自动）；Custom（自定义）
- Auto Rate Coefficient（自动速率系数）
 类型：数值；默认：1.0f
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Custom Rate（自定义比率）
 类型：数值；默认：0
 说明：这是数值型配置。默认值 0 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Volume（音量）
 类型：数值；默认：80
 说明：这是数值型配置。默认值 80 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Pitch（音高）
 类型：枚举；默认："Default"
 说明：这是选项型配置。默认值 Default 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Default（默认）；Auto（自动）；Custom（自定义）
- Custom Pitch（自定义音高）
 类型：数值；默认：0
 说明：这是数值型配置。默认值 0 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Japanese Transformation（日语转换）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Multiple Text Arrangement（多文本安排）
 类型：枚举；默认："Queue"
 说明：这是选项型配置。默认值 Queue 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Off（关闭）；Queue（队列）；Available（可用）
- Spoken Text Mode（讲述文本模式）
 类型：枚举；默认："Fixed"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 Fixed ，确认稳定后再逐项切换比较效果。
 可选：Fixed（固定）；List Random Element（列表中随机的元素）；List Loop（列表循环）；Clipboard Text（剪贴板文本）
- Fixed Spoken Text（固定的讲述文本）
 类型：文本；默认："Hello World 你好，世界！"
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Spoken Text List（讲述文本列表）
 类型：文本；默认："你的钢门比较松弛;但是呢,你的痔疮又弥补了这一部分;如果做痔疮手术,把痔疮切除的话;可能就会显得你的钢门就比较大;可能会有一些漏液漏气的情况;现在最好的办法就是;在做痔疮手术的同时;给你做一个钢门紧缩术 ...
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- List Current Index（列表当前索引）
 类型：数值；默认：0
 说明：这是数值型配置。默认值 0 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
## 历史更新
- 14. 将部分配置中的 Speaker 改为 Speak
- 12. 为 Speaker 添加配置：
- 12. 添加模块：Speaker（讲述人）

## 备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

## 相关命令

/speak [content...=clipboard]
使用讲述人说话。

/speakqueue
查看讲述人缓冲队列。

/speakqueue clear
清空讲述人缓冲队列。

/speakvoice
/speakvoice list
查看所有讲述人音色。

## 相关模块
- [Active (活动)](./Active.md)
- [AutoSpeak (自动讲述)](./AutoSpeak.md)
- [AntiMicrophone (反麦克风)](./AntiMicrophone.md)
- [Console (控制台)](./Console.md)
- [Shell (命令行)](./Shell.md)
- [QuickCommand (快速命令)](./QuickCommand.md)
- [ForceTopmost (强制置顶)](./ForceTopmost.md)
- [MemeTrigger (梗触发)](./MemeTrigger.md)

## 相关资料
无
