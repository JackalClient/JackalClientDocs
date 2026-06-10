# SuperCmd
超级CMD
分类：Process
描述：打开更高权限的命令提示符。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
SuperCmd（超级CMD）用于打开更高权限的命令提示符。
适合进程观测、控制与排障场景。
初次使用可优先调整：Mode。

## 配置项
- Mode（模式）
 类型：枚举；默认："System"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 System ，确认稳定后再逐项切换比较效果。
 可选：Admin（管理员）；Admin UAC Bypass（管理员UAC绕过）；System（系统）；Trusted Installer（未收录）
- SetPrivileges Waiting Start Timeout (ms)（设置特权等待超时时间 (毫秒)）
 类型：数值；默认：5000L
 说明：用于控制检测/刷新/动画节奏。默认值 5000L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Enable Privileges（启用特权）
 类型：布尔；默认：true
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- No Wow64 Redirection（禁用 Wow64 重定向）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
## 历史更新
- 2. 添加模块：SuperCmd，快捷启动高权限CMD。

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
- [KillAV (击杀杀软)](./KillAV.md)
- [KillMalware (击杀病毒)](./KillMalware.md)
- [ListModules (枚举模块)](./ListModules.md)

## 相关资料
无
