CodexNotifier
Codex 通知器
用于在 Codex 任务完成后弹出提醒。
模块开启时会在 `C:\Users\WormWaker\.codex` 下写入带 `jackal_codex_notifier` 标记的托管脚本，并按触发方式向 `config.toml` 或 `hooks.json` 写入托管配置；模块关闭时只会清理带该标记的托管脚本与配置块，避免误删用户自己的脚本。

## 常用配置

- `Trigger Method`：触发方式。`Codex Notify` 会写入 PowerShell notify 命令；`Codex Hook` 会按 Codex 官方结构写入 `hooks.json`：事件项下先写 matcher group，再在 group 的 `hooks` 数组中写入命令 handler；`Stop` 和权限请求 hook 都会设置 30 秒超时，并通过托管 PowerShell 入口兼容 hook 风格调用。首次安装客户端托管 Hook 时会提示你在 Codex 中运行 `/hooks` 信任新 Hook。脚本在没有参数或管道输入时会直接使用更通用的随机默认提示，不会等待控制台输入；Hook 模式会根据 `PermissionRequest` 和 `Stop` 生成不同提示，且会跟随客户端中文界面输出中文提示。
- `Off-client Notification`：客户端外通知方式。`Off` 不弹系统外通知；`Message` 调用 `msg`；`WinToast` 优先尝试 Windows Toast，失败时回退到系统托盘气泡或消息框；`Speak` 通过系统 SAPI 语音服务讲述通知正文。
- `Send to Client`：若 JackalClient 正在运行，则通过 `loader.exe clientcommand` 把消息发送给客户端；若客户端不存在则放弃。
- `Client Notification`：客户端内通知方式，支持 `Off`、`Notify`、`Chatter`、`Title`、`Speak`、`WinToast`、`Real Chatter`、`Actionbar`，默认 `Speak`。当该项不是 `Notify`、`Title` 或 `Off` 时，客户端会同时在控制台用深绿色输出该消息。
- `Client Custom Command Enabled` / `Client Custom Command`：开启后，客户端收到 Codex 通知时会额外执行自定义命令。默认命令为 `mj notify %message%;;music assets/icechime.wav`，其中 `%message%` 会替换为 Codex 通知正文；若 Hook 事件带有标题，也可用 `%title%` 引用。

## 安全策略

模块只管理 `jackal_codex_notifier.ps1`、`jackal_codex_notifier_hook.bat`、`config.toml` 中带 `jackal_codex_notifier` 标记的托管块，以及 `hooks.json` 中递归带 `jackal_codex_notifier` 字段或旧版命令标记的托管项。若用户已有自己的 `notify = [...]` 配置，开启模块时会临时注释保存到托管块中，关闭模块时恢复；若用户已有自己的 `hooks.json`，客户端会智能合并，只替换客户端托管的 Hook，保留其他 Hook。切换触发方式或关闭模块时，如果实际移除了托管 Hook 或 Notify 配置，客户端会额外弹出提示。Hook 模式安装时若发现 `config.toml` 的 `[features] hooks = false`，会自动改为 `true`；关闭 Hook 时只移除 `hooks.json` 中的托管项，不会回改该开关。

## 稳定性保护

客户端收到 `/codexnotify` 后只负责解析参数并把通知投递到主线程执行，避免 Hook 外部进程触发时直接访问客户端通知对象。客户端通知、自定义命令、自动重装托管脚本等路径均带异常捕获，异常会写入 DebugError 日志。Hook 脚本会限制标题与正文长度，并对 `loader.exe clientcommand` 调用做额外保护，降低超长 Stop 消息或通知异常导致客户端崩溃的风险。

## 状态同步

模块会读取 `config.toml` 与 `hooks.json` 的实际内容同步开关状态：发现托管 notify/hook 时会静默启用模块，发现托管配置不存在时会静默关闭模块。

