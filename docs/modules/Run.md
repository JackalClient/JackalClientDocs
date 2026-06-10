# Run
运行
分类：Process
描述：运行指定进程。

## 需求
- 安全级别：常规模块
- 恶意标记：否
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定
- 版本属性：普通可用

## 介绍
Run 用于按给定目标程序、参数和工作目录启动进程。
当 Watch 关闭时，它是一次性启动模块；当 Watch 开启时，模块会和目标进程状态联动，进程存在则保持开启，进程消失则自动关闭，并可通过再次启用触发拉起。

## 配置项
- Target（目标）
  类型：文本；默认："cmd.exe"；说明：要启动的程序或命令。建议使用明确可执行文件名或绝对路径，避免被系统 PATH 中同名文件误匹配。
- Parameters（参数）
  类型：文本；默认：""；说明：传给目标程序的命令行参数。建议先在手动命令行验证参数有效，再写入模块配置。
- Directory（目录）
  类型：文本；默认：""；说明：进程工作目录。填 `null` 或留空表示不指定；若目录不存在会直接报错并取消启动。
- Hidden（隐藏）
  类型：布尔；默认：false；说明：开启后以隐藏窗口方式启动目标；仅影响窗口显示，不改变目标程序本身权限。
- Watch（守望）
  类型：布尔；默认：false；说明：开启后进入“进程存在性联动”模式；关闭后每次启用只执行一次启动并自动关闭模块。

## 历史更新
无（HISTORY 中暂无明确记录）

## 备注
在 Watch 模式下手动关闭模块时，模块会尝试结束 `Target` 对应进程名。若目标进程并非由模块拉起，建议谨慎使用该模式。

## 相关命令
- `/run &lt;command...&gt;`：同步执行命令。
- `/exe &lt;command...&gt;`、`/exec &lt;command...&gt;`、`/runasync &lt;command...&gt;`：异步执行命令。
/runspeak &lt;command...&gt;
同步执行命令并讲述其输出。

/iarun &lt;params...&gt;
交互式命令运行。params 为相关参数。

/iarun start &lt;command...&gt;
启动交互式命令运行。你可以用指令操纵对它的行为。

/iarun restart &lt;command...&gt;
重新启动交互式命令运行。如果正在运行，会先关闭。

/iarun info
输出当前交互式命令运行的状态信息。

/iarun input/in &lt;content...&gt;
向交互式进程的 STDIN 发送内容。

/iarun output/out &lt;content...&gt;
/iarun outputpatient &lt;content...&gt;
从交互式进程的 STDOUT 读取内容并输出到控制台。output/out 会有一个5秒的超时时间，而使用 outputpatient 会永远等待，所以不推荐。

/iarun stop
关闭当前交互式命令。非强制。

/iarun kill
强制关闭当前交互式命令的进程。



/legitexec &lt;command...&gt;
模拟用户异步执行命令。旨在绕过某些杀软拦截。

/parentspoofexec &lt;command...&gt;
父进程欺骗异步执行命令。父进程会在一些合适的进程里挑选。

/sudo &lt;command...&gt;
/sudobypass &lt;command...&gt;
/sudobypassex &lt;method&gt; &lt;command...&gt;
确保以管理员身份同步执行命令。如果使用 /sudobypass，则会调用用户账户控制绕过手段。 /sudobypassex 允许你指定绕过方法。


/runps &lt;path...&gt;
/runpsfile &lt;path...&gt;
/execps &lt;path...&gt;
/execpsfile &lt;path...&gt;
绕过执行策略运行一个后缀名为 .ps1 的 PowerShell 脚本。前者同步，后者异步。

/runpsbase64 &lt;base64&gt;
/execpsbase64 &lt;base64&gt;
执行 Base64 加密过的 PowerShell 命令。前者同步，后者异步。

## 相关模块
- [QuickRun (快速运行)](./QuickRun.md)
- [ProcessManager (进程管理器)](./ProcessManager.md)
- [ProcessKill (进程击杀)](./ProcessKill.md)
- [RestartExplorer (重启资源管理器)](./RestartExplorer.md)

## 相关资料
无