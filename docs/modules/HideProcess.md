# HideProcess
隐藏进程
分类：Process
描述：通过 KSwordARK 的进程可见性操作隐藏指定进程。

## 需求
- 可用状态：可用（需要 KSwordARK Driver 扩展）
- 安全级别：不安全模块（谨慎使用）
- 需要管理员权限：是
- 驱动依赖：是（KSwordARK）
- 是否需要联网：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
HideProcess（隐藏进程）使用 KSwordARK 修改目标进程的可见性：可以从系统活动进程链表摘除、修改进程 ID，或同时使用两种方式。关闭模块时会按相同方式恢复本次匹配到的进程。

## 配置项
- Hide Method（隐藏方式）
 类型：枚举；默认："Unlink Active List"
 可选：Unlink Active List（从活动链表摘除）；Patch Process ID（修改进程 ID）；Both（同时使用）

- Process Names（进程名）
 类型：StringList；默认：[]
 说明：填写要隐藏的进程映像名，例如 `notepad.exe`。只按进程名匹配，不支持路径和通配符。

## 备注
- 需要管理员权限和 KSwordARK 驱动。
- 修改进程 ID 会破坏按 PID 的句柄、回调和日志关联；隐藏客户端自身或系统关键进程可能导致功能异常。
- 如果客户端在隐藏状态下被强制结束，目标进程可能保持隐藏直到重启。建议先关闭模块再退出客户端。
- 隐藏不是删除，进程仍在运行；部分安全工具仍可能通过 CID 表发现它。

## 相关命令
无

## 相关模块
- [ProcessManager (进程管理器)](./ProcessManager.md)
- [PPLButcher (解除进程保护)](./PPLButcher.md)

## 相关资料
无
