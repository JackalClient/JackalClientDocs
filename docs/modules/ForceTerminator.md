# ForceTerminator
暴力送终
分类：Process
描述：通过 KSwordARK 驱动强制终止目标进程或线程，可处理受保护进程。

## 需求
- 可用状态：可用（需要 KSwordARK Driver 扩展）
- 安全级别：中高风险
- 需要管理员权限：是
- 需要系统权限：否
- 需要 TrustedInstaller 权限：否
- 驱动依赖：是（KSwordARK）
- 是否 WIP：否
- 是否需要联网：否
- 版本属性：普通可用

## 介绍
ForceTerminator 通过 KSwordARK 终止目标进程；驱动会先清除目标的 PP/PPL 保护再结束进程。按“进程名/PID”筛选目标，再按“最大进程数”逐个处理。开启“终止前确认”时，每个目标都会弹窗选择：是=继续，否=跳过，取消=停止本次任务。执行完成后模块自动关闭。

## 配置项
- Async（异步）
 类型：布尔；默认：true。开启后在后台线程执行，避免界面被阻塞。

- Close Menu（关闭菜单）
 类型：布尔；默认：false。触发模块时自动关闭 ClickGUI。

- Confirm Before Termination（终止前确认）
 类型：布尔；默认：false。逐目标二次确认，适合高风险环境。

- Mode（模式）
 类型：枚举；默认："Process"
 可选：Process（结束进程）；Thread（结束目标线程）；Memory（回退为进程结束）

- Process Name (Empty For Any)（进程名）
 类型：文本；默认："JackalClient.exe"。留空表示不过滤进程名。

- Process Id (Zero For Any)（进程 ID）
 类型：整数；默认：0。非 0 时按 PID 精确筛选。

- Max Process Count（最大进程数量）
 类型：整数；默认：8。限制一次最多处理多少个命中进程。

## 备注
- 需要管理员权限和 KSwordARK 驱动；扩展或驱动缺失时模块不会继续。
- 终止受保护进程、系统关键进程或安全软件进程可能导致蓝屏或系统不稳定。
- “终止前确认”使用系统模态弹窗，处理系统关键进程时会额外提示。

## 相关命令
- `/ppl set <hprocess/pid/procname> <level>`

## 相关模块
- [PPLButcher (解除进程保护)](./PPLButcher.md)
- [AntiProcCreate (禁止创建进程)](./AntiProcCreate.md)
- [ProcessManager (进程管理器)](./ProcessManager.md)

## 相关资料
无
