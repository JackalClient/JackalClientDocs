# KillAV
击杀杀软
分类：Process
描述：暂无描述

## 需求
- 安全级别：恶意模块（高风险）
- 权限需求：无
- 驱动依赖：是
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
KillAV（击杀杀软）用于暂无描述。
适合进程观测、控制与排障场景。
初次使用可优先调整：Method。
该模块被标记为恶意高风险，请在隔离环境下验证，避免对生产系统直接操作。

## 配置项
- Method（方法）
 类型：枚举；默认："Driver"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 Driver ，确认稳定后再逐项切换比较效果。
 可选：Normal（普通）；Driver（未收录）
## 历史更新
- 28. 修改 KillAV 模块为驱动模式，添加配置：

## 备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

## 相关命令
无

## 相关模块
- [ProcessManager (进程管理器)](./ProcessManager.md)
- [Elevator (电梯)](./Elevator.md)
- [ForceTerminator (暴力送终)](./ForceTerminator.md)
- [Anti360Ad (反数字广告)](./Anti360Ad.md)
- [Kill360AdProc (杀数字广告进程)](./Kill360AdProc.md)
- [KillMalware (击杀病毒)](./KillMalware.md)
- [ListModules (枚举模块)](./ListModules.md)
- [ListServices (枚举服务)](./ListServices.md)

## 相关资料
无
