# RemoteRun
远程执行
分类：Process
描述：通过注入代码，让另一个进程运行你的命令。

## 扩展依赖
强制依赖 `jd-speedhack` 扩展。缺失时点击模块下载按钮安装并启用扩展，再按原有权限和安全提示执行。共享 loader.exe 仍是客户端组件。

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
RemoteRun 的目标是“在别的进程里创建命令进程”。x86 客户端原生处理 x86 目标，通过 `loader.exe` 处理 x64 目标；x64 客户端原生处理 x64 目标，不支持 x86 目标，会明确拒绝，避免执行错误位数的代码。
和 Injector 一样，它支持同步/异步/不等待三种执行策略，并输出成功统计。对于批量目标，建议先小范围验证命令副作用，再扩大数量。
命令使用 Unicode 创建进程，保留带空格路径和命令参数的引号，移除了原有 2048 字节固定缓冲区的限制；命令本体最多 32766 个 UTF-16 字符，经 helper 传递时还受 Windows 整条命令行长度限制。Shell 运算符需要显式使用 `cmd.exe /c` 等解释器。

## 配置项
- Execution Policy（执行策略）
类型：枚举；默认：Async；作用：控制是否等待每个目标执行结果。可选项：Sync（同步）、Async（异步）、Async NoWait（异步不等待）。建议：命令有破坏性时使用 `Sync`。

- Process Architecture（进程架构）
类型：枚举；默认：Both；作用：限制目标进程位数。可选项：Both（两者）、x64（x64）、x86（x86）。建议：只处理已知架构时选单架构可减少失败。

- Injection Architecture（注入架构）
类型：枚举；默认：Auto；作用：决定远程执行阶段按哪种注入位数处理。可选项：Auto（自动判断）、x64（强制 x64）、x86（强制 x86）。建议：默认 `Auto` 最稳；只有自动识别异常时再手动指定。
指定的架构必须与实际目标匹配；识别失败或强制架构不匹配时跳过该目标，不再尝试另一位数。

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

- Hidden Cmd（隐藏命令窗口）
类型：布尔；默认：true；作用：隐藏创建的命令进程窗口，关闭时请求最小化；具体表现取决于目标程序。不再读取 Remote Kill HR 的同名设置。

## 备注
`Exclude Self` 仅使用 Remote Run 自身的设置，与 Injector 无关。重复触发不会并发创建多组后台任务；Sync 仍可能阻塞调用线程，建议日常使用 Async。
`Async NoWait` 不会等待结果回传，统计信息仅代表已下发次数，不代表全部执行成功。
Sync / Async 的成功仅表示命令进程已创建，不等待命令进程退出。每个目标最多等待远程启动线程 10 秒，经 helper 中转额外等待其退出；超时和等待失败不再报告成功，且不会强制终止可能仍在运行的远程线程。
远程线程结束后回收代码、参数及句柄；NoWait 或超时路径延迟回收，避免线程仍在执行时释放其内存。如果发起端或 helper 在远程线程结束前退出，未回收的远程缓冲区可能保留至目标进程退出。超时后请先检查实际状态，不要盲目重试。
底层仍采用复制远程代码的实现，尚未改造成独立执行组件，跨系统版本与目标保护策略的兼容性仍有限。

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
