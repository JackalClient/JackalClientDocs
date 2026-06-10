# Injector
注入器
分类：Process
描述：向/从目标进程（取消）注入动态链接库。

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
Injector 用于批量或定向给目标进程注入/卸载 DLL。模块会先按“进程名/PID”筛选目标，再按“进程架构”和“最大进程数量”逐个处理。
在执行层面，x86 进程主要走客户端内置注入函数，x64 进程主要通过 `loader.exe` 子命令执行；你选择的注入方法会直接决定调用哪条分支。若选择 `Async NoWait`，模块只负责下发任务，不等待结果回传。

## 配置项
- Method（方法）
类型：枚举；默认：NtCreateThreadEx；作用：选择注入实现方式。可选项：CreateRemoteThread（创建远程线程）、NtCreateThreadEx（跨会话兼容更好）、QueueUserAPC（APC 投递）、Reflective（反射注入）、Reflective (External)（外部反射注入）。建议：先用 `NtCreateThreadEx`，失败再尝试 `CreateRemoteThread` 或 `Reflective (External)`。

- Execution Policy（执行策略）
类型：枚举；默认：Async；作用：控制是否等待执行结果。可选项：Sync（同步等待）、Async（异步线程，仍统计结果）、Async NoWait（仅下发不等待）。建议：排错阶段用 `Sync`，日常批量可用 `Async`。

- Operation（操作）
类型：枚举；默认：InjectDll；作用：选择是注入还是卸载。可选项：InjectDll（注入 DLL）、UninjectDll（取消注入 DLL）。建议：首次验证时先对单进程执行，再扩大范围。

- Process Architecture（进程架构）
类型：枚举；默认：Both；作用：限制命中目标为 x86/x64/两者。可选项：Both（两者）、x64（x64）、x86（x86）。建议：已知目标位数时只选单一架构，能减少无效尝试。

- Exclude Self（排除自身）
类型：布尔；默认：true；作用：排除客户端自身进程，避免误把自身作为注入目标。建议：保持开启。

- Process Name (Empty For Any)（进程名 (用空指代任何)）
类型：文本；默认："cmd.exe"；作用：按进程名筛选目标。支持精确进程名；留空表示不过滤。建议：先写明确进程名，不要直接留空全量注入。

- Process Id (Zero For Any)（进程ID (用0指代任何)）
类型：整数；默认：0；作用：按 PID 精确命中。非 0 时优先用于单进程验证。

- Dll Path（DLL路径）
类型：文本；默认：空；作用：指定待注入/卸载 DLL 路径。注入操作会先检查文件是否存在，不存在直接失败。建议：使用绝对路径并先确认文件可访问。

- Max Process Count（最大进程数量）
类型：整数；默认：8；作用：限制本次最多处理的目标数量。建议：先用 1~3 灰度验证，确认稳定后再上调。

## 备注
模块启用后会自动执行并关闭开关，不是常驻型模块。
`Async NoWait` 速度最快，但无法可靠拿到每个目标的成功/失败状态，适合只追求下发速度的场景。

## 相关命令

/inject &lt;hprocess&gt; &lt;dllpath...&gt;
/ntinject &lt;hprocess&gt; &lt;dllpath...&gt;
/apcinject &lt;hprocess&gt; &lt;dllpath...&gt;
/inject32 &lt;hprocess&gt; &lt;dllpath...&gt;
/ntinject32 &lt;hprocess&gt; &lt;dllpath...&gt;
/apcinject32 &lt;hprocess&gt; &lt;dllpath...&gt;
/inject64 &lt;hprocess&gt; &lt;dllpath...&gt;
/ntinject64 &lt;hprocess&gt; &lt;dllpath...&gt;
/apcinject64 &lt;hprocess&gt; &lt;dllpath...&gt;
向指定进程注入DLL。三种形式分别对应：CreateRemoteThread, NtCreateThreadEx, QueueUserAPC 注入方法。
如果后面写 32 或 64，将不自动判断进程架构，而是根据指定架构进行操作。

/uninject &lt;hprocess&gt; &lt;dllname&gt;
/ntuninject &lt;hprocess&gt; &lt;dllname&gt;
/apcuninject &lt;hprocess&gt; &lt;dllname&gt;
/uninject32 &lt;hprocess&gt; &lt;dllname&gt;
/ntuninject32 &lt;hprocess&gt; &lt;dllname&gt;
/apcuninject32 &lt;hprocess&gt; &lt;dllname&gt;
/uninject64 &lt;hprocess&gt; &lt;dllname&gt;
/ntuninject64 &lt;hprocess&gt; &lt;dllname&gt;
/apcuninject64 &lt;hprocess&gt; &lt;dllname&gt;
向指定进程卸载DLL。三种形式分别对应：CreateRemoteThread, NtCreateThreadEx, QueueUserAPC 卸载方法。
如果后面写 32 或 64，将不自动判断进程架构，而是根据指定架构进行操作。

/rinject &lt;hprocess&gt; &lt;dllpath...&gt;
/rinject2 &lt;hprocess&gt; &lt;dllpath...&gt;
简单的DLL反射式注入。后面写2时，将调用外部 loader.exe 进行注入。

/injectex &lt;prefab&gt; &lt;hprocess&gt; [parameters...]
不借助DLL的其他注入操作。
参数 prefab 可以为以下之一：
	exit: 退出。
		/injectex exit &lt;hprocess&gt;
	terminate: 终止另外一个进程。
		/injectex terminate &lt;hprocess&gt; &lt;target_hprocess&gt;
	msgbox: 弹窗。
		/injectex msgbox &lt;hprocess&gt; &lt;text&gt; [title="Inject"] [style=64]

## 相关模块
- [RemoteRun (远程执行)](./RemoteRun.md)
- [Speedhack (变速齿轮)](./Speedhack.md)
- [ProcessManager (进程管理器)](./ProcessManager.md)

## 相关资料
无