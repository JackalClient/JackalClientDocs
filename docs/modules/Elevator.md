# Elevator
电梯
分类：Process
描述：使用驱动程序提升进程权限，无需重启它。

## 需求
- Unsafe：否
- Malicious：否
- 需要管理员权限：否
- 需要系统权限：否
- 需要 TrustedInstaller 权限：否
- 驱动依赖：是（Kernel1.sys）
- 是否 WIP：否
- 是否需要联网：否
- 版本属性：普通可用

## 介绍
Elevator 会对筛选到的目标进程逐个执行提权，不需要先结束再重启进程。
它适合在排障、进程控制或联动其它模块前，先把目标进程权限抬高。执行时按“进程名/PID”筛选，再按“最大进程数”限制本次处理数量，最后给出全部成功/部分成功/全部失败的结果提示。
模块执行结束后会自动关闭自身。

## 配置项
- Process Name (Empty For Any)（进程名 (用空指代任何)）
类型：文本；默认："JackalClient.exe"。按进程名筛选提权目标；留空表示不过滤进程名。建议先用明确进程名小范围验证。

- Process Id (Zero For Any)（进程ID (用0指代任何)）
类型：整数；默认：0。按 PID 精确指定目标进程；用于只提权某一个实例最稳妥。

- Max Process Count（最大进程数量）
类型：整数；默认：8。限制一次最多提权的进程数，防止规则过宽时影响过多进程。建议先用 1~3 做灰度测试。

## 备注
模块会在执行时尝试自动加载 Kernel1 驱动；驱动缺失或加载失败会直接终止任务。
提权是否成功与目标进程状态、系统保护策略和当前权限环境有关，建议优先对非关键进程做验证。

## 相关命令
无

## 相关模块
- [ForceTerminator (暴力送终)](./ForceTerminator.md)
- [AntiProcCreate (禁止创建进程)](./AntiProcCreate.md)
- [ProcessManager (进程管理器)](./ProcessManager.md)

## 相关资料
无