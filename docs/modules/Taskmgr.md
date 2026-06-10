# Taskmgr
任务管理器
分类：Process
描述：打开任务管理器。

## 需求
- 安全级别：常规模块
- 恶意标记：否
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定
- 版本属性：普通可用

## 介绍
Taskmgr 用于管理任务管理器窗口状态：开启时拉起或聚焦任务管理器，关闭时结束 `taskmgr.exe`。
该模块会与系统进程状态联动：如果你手动关闭了任务管理器，模块状态会同步关闭；手动打开时模块状态也会同步开启。

## 配置项
- No Wow64 Redirection（禁用 Wow64 重定向）
  类型：布尔；默认：true；说明：开启后会临时关闭 Wow64 文件系统重定向再启动 Task Manager，更容易在 64 位系统下拉起正确目标。默认建议保持开启。

## 历史更新
- 5. 优化 taskmgr/regedit/cmd 禁用检测，减少失败刷屏。
- 2. 修复 NoCmd/NoPowerShell/NoTaskmgr/NoRegedit 无效问题。
- 11. Taskmgr 临时关闭重定向以打开 64 位任务管理器。

## 备注
如果你同时启用了限制任务管理器的模块（如 NoTaskmgr），Taskmgr 的打开行为会被策略模块拦截或反复拉回，排障时建议先停用限制模块。

## 相关命令
无

## 相关模块
- [NoTaskmgr (禁任务管理器)](./NoTaskmgr.md)
- [ProcessManager (进程管理器)](./ProcessManager.md)
- [Regedit (注册表编辑器)](./Regedit.md)
- [Cmd (命令提示符)](./Cmd.md)

## 相关资料
无