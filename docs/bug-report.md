# 异常处理与问题反馈

## 1. 常见问题与解决方案

- 这里推荐打开 Windows 设置中高级/开发者选项的 `结束任务 (EndTask)` 按钮，这样你可以在出事时在任务栏图标上右键 -> `结束任务` 第一时间结束客户端进程，而不是必须注销或重启电脑。

![win-advanced-settings-1](/win-advanced-settings-1.png)
![win-advanced-settings-2](/win-advanced-settings-2.jpg)

- 没有客户端的任务栏图标怎么办？
- 第一种方法：开启控制台或命令行，控制台一定是有任务栏图标的，对控制台结束任务同样会结束客户端进程；
- 第二种方法：在 `Taskbar Icon 任务栏图标` 模块打开。推荐点击下面的 `Enable 启用` 按钮。

![taskbar-icon-enable](/taskbar-icon-enable.png)

- (1) 主窗口无响应（变白并弹窗）？
- 确保 `GUI 选项` -> `Not Responding Problem Fix 无响应问题修复` 被选择为 `Null Message 空消息`。这是一个已验证的解决方案，也是默认选项。

![no-responding](/no-responding.jpg)

- (2) 客户端突然报错 `[AppDraw] Unknown Exception 未知异常` 刷屏，包括控制台或者通知
- 请结束客户端进程。这是渲染时出现异常导致的，大概率是客户端内存问题。请见下面 2.1 节的 C++ 异常捕获部分。

- (3) 控制台报错 `[-] [AppUpdate] Bad Alloc`
- IRC 离线，且日志出现 `[Realm] Connect failed: xxxxx ws://s... err=RealmWs Connect exception: resource unavailable try again: resource unavailable try again`
- 控制台 `[AppUpdate] Runtime Error: resource unavailable try again: resource unavailable try again` 报错以及伴随 `网络已断开` 的通知？
- 还是客户端内存问题。目前没有解决方案。内存不足的情况下客户端开启新线程很容易抛出新的异常。

- (4) 启动的时候偶发性崩溃？
- 你可以试图打开客户端启动诊断来获得更详尽的`日志 (CLIENT.LOG)` 信息：
- 打开 `Release` 文件夹，点击资源管理器的地址栏，输入 `cmd` 回车，打开命令提示符。
- 输入 `Jack` 然后按 `Tab` 补全为 `.exe`。
- 空格，输入 `--diagnose`，此时文本为 `JackalClient.exe --diagnose`，回车。
- 这样启动的客户端在初始几秒就会产生更加详尽的日志，在文件夹中的 `CLIENT.LOG` 查看。

## 2. 异常处理

### 2.1 异常处理机制

客户端具有多层异常处理机制：

首先是 C++ 异常捕获，在客户端更新函数、绘制函数等使用 `try` `catch` 进行捕获并报错。
报错可能会导致刷屏，因此你可以在 `Config 配置` 里面关闭下面的配置项：

- `C++ Exception Catcher`: 接住 C++ 异常（总开关）
- `C++ Exception Catcher in AppDraw`: 在 AppDraw 中接住 C++ 异常（对于绘制是否开启）

其次是客户端未处理异常处理器 (UnhandledException)，开启后，遇到异常后会导出并打开崩溃日志 `crashlog/last_crash.log`，并弹窗报错。

`Config 配置` 的以下配置项控制该行为：

- `Use Client Exception Filter`: 使用客户端异常过滤器（总开关）
- `Exception Filter Export Crash Log`: 异常过滤器是否导出崩溃日志，默认开启
- `Exception Filter Open Crash Log`: 异常过滤器是否打开崩溃日志，默认开启
- `Exception Filter Minidump Enabled`: 异常过滤器是否启用迷你转储，默认关闭

### 2.2 崩溃日志

崩溃日志 `last_crash.log` 由 `基本信息`，`异常详情`，`CPU寄存器`，`调用堆栈` 组成。
举例如下：

```bash

------------------------------------------
  Jackal Client Crash Report  
 by: @Wormwaker
------------------------------------------

 Version: v1.1.6 Pro
 System: Windows 11
 Date: 2026/08/22
 Time: 10:42:04
 CmdLine: "D:\JackalClient\Release\JackalClient.exe" 
 HomeDir: D:\JackalClient\
 Pid: 78388

------------------------------------------
 Basic Details: 
------------------------------
<!> Exception Details (EXCEPTION_RECORD):
` Exception Code: 0xe06d7363
` Exception Flags: 0x1
` Exception Record: 00000000
` Exception Address: 768F9F54
` Number Parameters: 3
` Parameter 0: 0x19930520
` Parameter 1: 0x19fe26c
` Parameter 2: 0x1710f44
` Module: C:\Windows\System32\KERNELBASE.dll
` Offset: 0x169f54
------------------------------

<!> CPU Registers (x86) 中央处理器寄存器（32位）:
EAX=19fe1d0  EBX=19930520  ECX=3  EDX=0
ESI=6  EDI=1710f44  EBP=19fe228  ESP=19fe1d0
EIP=768f9f54  EFlags=212
------------------------------

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
<!> Stack Trace 调用堆栈:
  0: KERNELBASE.dll + 0x169f54
  1: JackalClient.exe + 0xfd5abd
  2: JackalClient.exe + 0xf19324
  3: JackalClient.exe + 0x28b4dc
  4: JackalClient.exe + 0x96de36
  5: JackalClient.exe + 0x9845ca
  6: JackalClient.exe + 0x9b88a8
  7: JackalClient.exe + 0xbbb26c
  8: JackalClient.exe + 0xf0ef51
  9: KERNEL32.DLL + 0x15d49
  a: ntdll.dll + 0x6e00b
  b: ntdll.dll + 0x6df91
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

------------------------------------------



```

开发者借助 `Symbolizer` 通过 `调用堆栈` 结合私有的 `符号表(.pdb)` 对崩溃进行分析。

**怎样判断该文件是有价值的？**

1. 如果你的崩溃日志不含 `调用堆栈` 信息，就没有价值，没有必要提交该文件。这种现象尤为常见，通常为堆栈被破坏等导致，很明显的现象就是上方的
`Number Parameters` 非常大，下方参数数量超过 10 个。

2. 你的客户端版本必须是公开发布的 `稳定版`，而不是开发者私发给你的 `测试版本(nightly)` 。测试版本的符号表极易被后来的测试版替换，导致堆栈信息无法还原。

### 2.3 重启恢复

客户端还有一个 `Restart Recovery` 功能，在客户端异常时自动重启客户端，相关配置项为：

`Config 选项` 中的：
- `Restart Recovery Enabled`: 启用重启恢复（总开关）。关闭该选项将彻底禁用该特性。
- `Restart Manager Arguments`: 重启管理器参数
- `Recovery Callback Enabled` : 启用恢复回调
- `Recovery Ping Interval (ms)`: 恢复回调心跳间隔 (ms)
- `Recovery Notify Last Session`: 提示上次恢复重启
- `Recovery Marker File`: 恢复标记文件

### 2.4 异常退出提示

- `v1.1.5 加入`
- 如果客户端上一次未正常退出，再次打开会弹窗提示，让你选择是否要以默认配置档案或纯命令行模式启动。如果能保证安全运行，按两次否即可。

![abnormal-exit-tip-1](/abnormal-exit-tip-1.jpg)
![abnormal-exit-tip-2](/abnormal-exit-tip-2.jpg)

## 3. 问题反馈

### 3.1 问题反馈渠道

你可以在多个渠道向开发者反馈客户端的问题：

- [GitHub Issues](https://github.com/JackalClient/JackalClient/issues)
- [腾讯频道](https://pd.qq.com/s/xa4l6owp)
- [QQ 群 196218959](https://qm.qq.com/q/eAw3sWmpcA)
- [邮箱反馈](mailto:wormwake@qq.com)

### 3.2 如何反馈问题

反馈时使用下面的材料：

- 通俗易懂、清晰的语言表达。包括问题如何复现，结果等
- 图片或视频，不要超过100MB。图片尽量截图不要拍照，视频尽量录屏不要拍屏。
- 客户端日志 `Release/CLIENT.LOG`（最新），之前的日志可以在 `logs`文件夹中找到，看文件修改时间即可判断大概是哪个文件。
- 崩溃日志（上面已经说明，如果有价值才可以提供）`crashlog/last_crash.log`
- 如果感觉你的 `配置档案(.json)` 有问题，你可以在 `脱敏（去除个人敏感信息，例如文件路径中的人名等）` 后提供。无需提供 `Records.json`。
- 如果你的客户端版本是测试版而非公开版本，请在 `关于` 界面找到你的构建时间截图。对于 `Neverlose GUI` ，打开 GUI 后左键左上角徽标即可进入关于界面：

![about-build-timestamp](/about-build-timestamp.jpg)