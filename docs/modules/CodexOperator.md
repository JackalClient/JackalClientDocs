# Codex Operator
Codex 操作器
分类：Window
描述：监视已捕获的 Codex CLI 终端窗口，并按窗口标题自动发送批准按键。

## 需求
- 安全级别：自动批准属于高风险操作，仅应捕获可信任务的终端
- 权限需求：需要能够向目标终端发送窗口消息或模拟输入；受目标进程权限限制
- 驱动依赖：否
- 联网需求：窗口监视与按键操作本身不需要联网
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
`Codex Operator` 位于 Window 类目、`Keyword ESP` 下方，用于锁定一个 Codex CLI 终端窗口，并在窗口标题包含 `Action Required` 时自动发送批准键 `1`。

## 使用方式

1. 打开 Codex CLI 终端，并将其置于前台。
2. 按 `Capture Key`（默认 `LCtrl+LAlt+O`）捕获当前窗口。
3. 开启模块后，模块会按标题轮询目标窗口并处理批准请求。HUD 开启时，未捕获目标会显示 `Waiting for capture`。

再次按下捕获快捷键会移除当前前台窗口；模块可以同时监视多个已捕获窗口。

开启 `Check Terminal` 时，捕获窗口必须是 `PseudoConsoleWindow`、`ConsoleWindowClass` 或 Windows Terminal 的 `CASCADIA_HOSTING_WINDOW_CLASS`。

## 批准方式

- `WMessage`：向目标窗口或其当前焦点子窗口发送 `Window Message Types` 选中的消息。默认选中 `WM_KEYDOWN` 和 `WM_KEYUP`；不会额外调用 `SendInput`。`Set Foreground Window` 默认开启，开启后也会显示批准倒计时和用户输入空闲等待提示，并在发送后立即切回原窗口；关闭后不切换前台窗口。
- `Simulation`：先显示倒计时，再切换到目标窗口模拟按键；可用 `Focus Back After Approval` 在批准后切回原窗口。
- `Chain`：先尝试 WMessage，失败后自动切换到 Simulation。

在 Simulation 或 Chain 回退到 Simulation 的流程中，如果当前前台窗口就是本次要操作的目标终端，会立即结束输入空闲等待，即使仍有键鼠活动或该终端为全屏，也直接使用最多 0.5 秒的批准倒计时；原倒计时配置小于 0.5 秒时沿用较小值。离开目标终端后恢复普通输入等待和全屏暂停规则。判断按当前待操作目标分别进行，不会因另一个已捕获终端位于前台而跳过等待；HUD 的剩余时间和进度同步使用缩短后的倒计时。

`Minimize After Approval` 位于 Approval 分组，控制每次批准操作结束后的目标窗口最小化策略，与 `Focus Back After Approval` 独立：

- `Always`：操作结束后始终最小化目标终端。
- `Same As Previous`（默认）：在操作开始、聚焦目标前记录最小化状态；原本最小化的终端在操作结束后最小化回去，原本未最小化的终端不主动最小化。
- `Never`：操作结束后不主动最小化目标终端。

最小化策略适用于各批准模式；恢复原最小化状态也会在按键或消息发送失败后执行，避免失败尝试将原本最小化的终端留在桌面。

批准失败时可通过 `Allow Retry` 开启重试，并使用 `Retry Max Attempts` 和 `Retry Interval (ms)` 控制次数与间隔。标题检查等待时间会自动小于重试间隔。

## 通知与 HUD

`Notify Capture` 和 `Notify Approval` 支持 `Off`、`Notify`、`Chatter`、`WinToast`、`Actionbar`。HUD 支持颜色、缩放和相对坐标配置；Chain、Simulation 及开启 `Set Foreground Window` 的 WMessage 共用批准倒计时、输入空闲等待和进度条配置。输入等待 HUD 显示 `Input Idle Delay (s)` 的剩余空闲等待时间，进度条随该时间缩短；再次输入时重置空闲等待进度，等待结束后恢复显示批准倒计时进度，等待期间批准倒计时保持暂停。`Fullscreen Actions` 的隐藏 HUD 选项仅在当前前台窗口为全屏时生效。

HUD 在空闲状态下自动隐藏；WMessage 模式下，当前前台窗口已经是目标时，按键提示会改为移除目标窗口。开启重试后，WMessage 的中间失败会短暂显示终端编号和尝试次数。

`Approve Key` 自定义批准按键，默认是 `1`；`Focus to Approval Delay (s)` 控制前台批准流程实际聚焦后到发送按键或消息之间的等待时间，默认 0.5 秒。需要切换到目标时使用客户端统一的窗口聚焦流程；目标已经位于前台时，不重复聚焦，也不额外等待该聚焦延迟。Simulation 确认目标在前台后才发送模拟按键。切换批准模式或调整 `Set Foreground Window` 时，重置重试次数、倒计时及失败状态，并立即重新检查目标；旧模式的异步结果不会覆盖新状态。

模块按窗口标题判定请求，不依赖 Codex `PermissionRequest` hook。捕获、取消捕获、批准和标题校验在后台任务中执行，避免阻塞客户端主线程。若终端外层窗口不转发窗口消息，`WMessage` 可能无法完成输入，此时切换到 `Simulation`，或使用 `Chain` 自动回退。
