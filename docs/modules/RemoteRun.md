# RemoteRun
远程执行
分类：Process
描述：通过注入代码，让另一个进程运行你的命令。

## 需求
- Unsafe：是
- Malicious：否
- 需要管理员权限：否
- 需要系统权限：否
- 需要 TrustedInstaller 权限：否
- 驱动依赖：否
- 是否 WIP：否
- 是否需要联网：否
- 版本属性：普通可用

## 介绍
RemoteRun 的目标是“在别的进程里执行命令行”。它会先筛选目标进程，再按架构分支执行：x86 目标走本地注入运行，x64 目标走 `loader.exe remoterun`。
和 Injector 一样，它支持同步/异步/不等待三种执行策略，并输出成功统计。对于批量目标，建议先小范围验证命令副作用，再扩大数量。

## 配置项
- Execution Policy（执行策略）
类型：枚举；默认：Async；作用：控制是否等待每个目标执行结果。可选项：Sync（同步）、Async（异步）、Async NoWait（异步不等待）。建议：命令有破坏性时使用 `Sync`。

- Process Architecture（进程架构）
类型：枚举；默认：Both；作用：限制目标进程位数。可选项：Both（两者）、x64（x64）、x86（x86）。建议：只处理已知架构时选单架构可减少失败。

- Injection Architecture（注入架构）
类型：枚举；默认：Auto；作用：决定远程执行阶段按哪种注入位数处理。可选项：Auto（自动判断）、x64（强制 x64）、x86（强制 x86）。建议：默认 `Auto` 最稳；只有自动识别异常时再手动指定。

- Exclude Self（排除自身）
类型：布尔；默认：true；作用：用于避免把客户端自身作为目标。建议：保持开启，防止误触。

- Process Name (Empty For Any)（进程名 (用空指代任何)）
类型：文本；默认："cmd.exe"；作用：按进程名筛选目标。建议：先填具体进程名。

- Process Id (Zero For Any)（进程ID (用0指代任何)）
类型：整数；默认：0；作用：按 PID 精确筛选目标。建议：高风险命令优先用 PID 单目标验证。

- Command Line（命令行）
类型：文本；默认："cmd.exe /c echo Jackal On Crack! && pause"；作用：实际在目标进程上下文执行的命令。建议：先用无副作用命令（如 `echo`）验证链路，再替换为正式命令。

- Max Process Count（最大进程数量）
类型：整数；默认：8；作用：限制本次最多处理目标数。建议：批量前先设置小值做安全阈值。

## 备注
当前实现里 `Exclude Self` 的判定读取与 Injector 同名配置联动，实际使用时建议两个模块都保持“排除自身=开启”。
`Async NoWait` 不会等待结果回传，统计信息仅代表已下发次数，不代表全部执行成功。

## 相关命令

/remoterun
切换 RemoteRun 模块。

/remoterun &lt;hprocess&gt; &lt;command...&gt;
/remoterun32 &lt;hprocess&gt; &lt;command...&gt;
/remoterun64 &lt;hprocess&gt; &lt;command...&gt;
注入指定进程使之运行指定的命令。
如果后面写 32 或 64，将不自动判断进程架构，而是根据指定架构进行操作。

## 相关模块
- [Injector (注入器)](./Injector.md)
- [Speedhack (变速齿轮)](./Speedhack.md)
- [ProcessManager (进程管理器)](./ProcessManager.md)

## 相关资料
无