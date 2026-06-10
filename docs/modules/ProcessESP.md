# ProcessESP
进程透视
分类：Process
描述：探测指定进程以及进程变化。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
ProcessESP 通过“前后两次进程快照差分”识别新增进程和退出进程，并按你设定的通知方式输出结果。
模块支持对新增事件和退出事件分别设置白名单/黑名单正则，适合做进程审计、课堂机房巡检、驻留程序监控等场景。
注意它是轮询差分机制：若进程创建并结束都发生在同一轮间隔内，可能不会被记录。

卡顿是正常现象。修复了崩溃问题。

## 配置项
- New Process Notify Mode（新增进程通知模式）
 类型：枚举；默认："Notify"；说明：新增进程触发时的输出方式，`Off` 直接关闭新增提醒，`Notify/Chatter/Title` 分别对应通知、弹幕、标题。可选：Off（关闭）；Notify（通知）；Chatter（弹幕）；Title（标题）
- Exited Process Notify Mode（退出进程通知模式）
 类型：枚举；默认："Notify"；说明：进程退出时的输出方式，建议与新增模式保持一致，便于你对照同一进程的“出现-消失”轨迹。可选：Off（关闭）；Notify（通知）；Chatter（弹幕）；Title（标题）
- New Process Parent Display（新进程显示父进程）
 类型：布尔；默认：true；说明：仅对“新增进程”事件生效，开启后会附带父进程名和父 PID，便于区分是用户主动启动还是被其他程序拉起。
- New Process Notify Blacklist Enabled（新增进程通知黑名单是否启用）
 类型：布尔；默认：false；说明：开启后先走黑名单匹配，命中则该新增进程不再通知；适合先屏蔽系统噪声进程（如控制台宿主、加载器等）。
- New Process Notify Blacklist (Regex Sep With Semicolon)（新增进程通知黑名单 (用分号分隔的正则表达式)）
 类型：文本；默认："loader\\.exe;conhost\\.exe;tesseract\\.exe"；说明：按分号分隔多个正则并使用整串匹配；建议从精确文件名开始写，避免过宽规则误伤。
- New Process Notify Whitelist Enabled（新增进程通知白名单是否启用）
 类型：布尔；默认：false；说明：开启后只有命中白名单的新增进程才会通知；与黑名单同时开启时，先黑名单排除，再白名单放行。
- New Process Notify Whitelist (Regex Sep With Semicolon)（新增进程通知白名单 (用分号分隔的正则表达式)）
 类型：文本；默认："cmd\\.exe;explorer\\.exe;Hips[a-zA-Z]+\\.exe;360[a-zA-Z0-9]+\\.exe"；说明：用于聚焦重点目标；做安全巡检时建议只保留你关心的家族规则，减少无意义提醒。
- Exited Process Notify Blacklist Enabled（进程通知黑名单是否启用）
 类型：布尔；默认：false；说明：开启后，命中黑名单的“退出进程”不会提示；常用于忽略短生命周期的工具进程退出事件。
- Exited Process Notify Blacklist (Regex Sep With Semicolon)（退出进程通知黑名单 (用分号分隔的正则表达式)）
 类型：文本；默认："loader\\.exe;conhost\\.exe;tesseract\\.exe"；说明：与新增黑名单同逻辑，建议先复用同一套规则，再按退出噪声单独微调。
- Exited Process Notify Whitelist Enabled（进程通知白名单是否启用）
 类型：布尔；默认：false；说明：开启后仅对白名单内进程的退出事件提醒，适合盯守关键业务程序是否异常退出。
- Exited Process Notify Whitelist (Regex Sep With Semicolon)（退出进程通知白名单 (用分号分隔的正则表达式)）
 类型：文本；默认："cmd\\.exe;explorer\\.exe;Hips[a-zA-Z]+\\.exe;360[a-zA-Z0-9]+\\.exe"；说明：建议把真正关心的“不可退出”程序写入此处，以便出现退出时第一时间告警。
- Check Cooldown (ms)（检查冷却 (毫秒)）
 类型：数值；默认：100L；说明：控制差分检查周期；越小越灵敏但轮询更频繁，越大越省资源但越容易漏掉瞬时进程，通常建议在 100~300ms 内调整。
## 历史更新
- 12. 为 ProcessESP 添加配置：
- 18. 实装模块： Process ESP，探测进程及变化，并进行通知。

## 备注
高频检测进程进入退出，可能会卡
正则表达式编译失败时会被静默忽略，所以“规则看起来没生效”时，优先检查转义符和分号分隔写法。
如果你同时开了大量进程相关模块，建议适当放大 `Check Cooldown (ms)`，平衡提醒密度与系统开销。

## 相关命令
无

## 相关模块
- [ProcessManager (进程管理器)](./ProcessManager.md)
- [CompileESP (编译透视)](./CompileESP.md)
- [SecurityESP (安全透视)](./SecurityESP.md)
- [DebugESP (调试透视)](./DebugESP.md)

## 相关资料
无
