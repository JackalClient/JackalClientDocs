# TaskbarIcon
任务栏图标
分类：Misc
描述：开启时强制显示任务栏图标，关闭时强制隐藏。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
TaskbarIcon（任务栏图标）直接控制客户端主窗口在任务栏中的显示：模块开启时必须显示图标，模块关闭时必须隐藏图标。

模块切换时立即应用，并在启动、菜单开关及主线程定期检查时重新应用目标状态，不受 `Check Module Toggle` 是否关闭影响。窗口当前样式与 UIAccess 不再反向改变模块开关；启动后仍按客户端原有的模块恢复设置恢复开关状态。

## 配置项
无专用配置项。已移除 `FORBID TASKBAR ICON` 及原 `Enable`、`Disable` 命令按钮，直接使用模块开关即可。

加载旧配置档案时会清理上述三个旧配置项，保留模块自身的 `Enabled`、热键等通用配置。
## 历史更新
- TaskbarIcon 改为按模块开关强制显示或隐藏任务栏图标，不再同步窗口现状；移除禁止图标选项和两个命令按钮。
- 58. 尝试修复客户端任务栏图标时常无法加载的问题。
- 5. 为 Taskbar Icon 添加配置：
- 2. 修复了 TaskbarIcon 无法记录是否关闭的问题。

## 备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

## 相关命令
无

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
