TaskbarIcon
任务栏图标
分类：Misc
描述：是否显示任务栏图标。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
TaskbarIcon（任务栏图标）用于是否显示任务栏图标。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：FORBID TASKBAR ICON。

配置项
- FORBID TASKBAR ICON（禁止任务栏图标！）
 类型：布尔；默认：false
 说明：开启后会强制隐藏客户端任务栏图标，即使 TaskbarIcon 模块本身关闭或重启客户端后也会重新应用。
历史更新
- 58. 尝试修复客户端任务栏图标时常无法加载的问题。
- 5. 为 Taskbar Icon 添加配置：
- 2. 修复了 TaskbarIcon 无法记录是否关闭的问题。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [Active (活动)](./Active.md)
- [AutoSpeak (自动讲述)](./AutoSpeak.md)
- [AntiMicrophone (反麦克风)](./AntiMicrophone.md)
- [Console (控制台)](./Console.md)
- [Shell (命令行)](./Shell.md)
- [QuickCommand (快速命令)](./QuickCommand.md)
- [ForceTopmost (强制置顶)](./ForceTopmost.md)
- [MemeTrigger (梗触发)](./MemeTrigger.md)

相关资料
无

