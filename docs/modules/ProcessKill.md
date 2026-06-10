# ProcessKill
进程击杀
分类：Process
描述：杀死指定进程。

## 需求
- 安全级别：常规模块
- 恶意标记：否
- 权限需求：无（部分系统/高权限进程可能需要更高权限）
- 驱动依赖：否（`Kernel` 方法本身依赖可用内核能力）
- 联网需求：否
- 开发状态：稳定
- 版本属性：普通可用

## 介绍
ProcessKill 会按 `Kill Names (Sep with Semicolon)` 与 `Kill PID` 组合条件筛选目标，再使用指定 Method 执行结束。
当 Keep 关闭时，启用后只执行一轮；当 Keep 开启时，会在周期任务中持续执行，适合“守护式清理”场景。

## 配置项
- Method（方法）
  类型：组合框；默认：Chain；说明：决定结束进程时采用的策略。默认 Chain 会尝试链式方案，兼容性通常最好。
  可选项：Chain（链式）、Normal（普通）、Thread Killer（线程击杀）、Thread Patcher（线程补丁）、Winsta（窗口站）、Debugger（调试器）、Job（作业对象）、WMI（WMI）、Kernel（内核）
- Kill Names (Sep with Semicolon)（杀名称 (用分号分隔)）
  类型：文本；默认："dwm.exe"；说明：分号分隔多个进程名。未写 `.exe` 会自动补全，便于批量配置。
- Kill PID（杀PID）
  类型：整数；默认：0；说明：为 0 表示不限制 PID，仅按名称匹配；非 0 时需同时满足 PID 条件。
- Notify Kill（通知击杀）
  类型：布尔；默认：true；说明：控制每个命中目标的成功/失败提示。批量模式下如提示过多可关闭。
- Disable After Attempt（尝试之后关闭）
  类型：布尔；默认：true；说明：只要本轮出现匹配尝试（无论成功或失败）就自动关闭模块，适合一次性任务。
- Keep（保持）
  类型：布尔；默认：false；说明：开启后模块持续驻留并反复执行击杀检查；关闭更适合手动单次操作。

## 历史更新
- 32. 为 ProcessKill 添加配置。
- 33. 修复仅指定 PID 时不工作的问题。
- 8. `Kill Name` 改为 `Kill Names (Sep with Semicolon)`，支持多名称。

## 备注
如果名称与 PID 都未有效限定，匹配范围会非常大。建议至少固定一个条件，避免误伤非目标进程。

## 相关命令
- `/kill <hprocess/pid/name>`：链式方法击杀。
- `/rawkill`、`/threadskill`、`/winstakill`、`/wmikill`、`/jobkill`、`/dbgkill`、`/debuggerkill`：指定方法击杀。

## 相关模块
- [ProcessFreeze (进程冻结)](./ProcessFreeze.md)
- [ProcessManager (进程管理器)](./ProcessManager.md)
- [ForceTerminator (暴力送终)](./ForceTerminator.md)
- [AntiProcCreate (反创建进程)](./AntiProcCreate.md)

## 相关资料
无