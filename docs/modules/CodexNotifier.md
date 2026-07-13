# CodexNotifier
Codex 通知器
用于在 Codex 任务完成后弹出提醒。
模块开启时会在 `C:\Users\WormWaker\.codex` 下写入带 `jackal_codex_notifier` 标记的托管脚本，并按触发方式向 `config.toml` 或 `hooks.json` 写入托管配置；模块关闭时只会清理带该标记的托管脚本与配置块，避免误删用户自己的脚本。

## 常用配置

- `Trigger Method`：触发方式。`Codex Notify` 会写入 PowerShell notify 命令；`Codex Hook` 会按 Codex 官方结构写入 `hooks.json`：事件项下先写 matcher group，再在 group 的 `hooks` 数组中写入命令 handler；`Stop` 和权限请求 hook 都会设置 30 秒超时，并通过托管 PowerShell 入口兼容 hook 风格调用。首次安装客户端托管 Hook 时会提示你在 Codex 中运行 `/hooks` 信任新 Hook。脚本在没有参数或管道输入时会直接使用更通用的随机默认提示，不会等待控制台输入；Hook 模式会根据 `PermissionRequest` 和 `Stop` 生成不同提示，且会跟随客户端中文界面输出中文提示。
- `Off-client Notification`：客户端外通知方式。`Off` 不弹系统外通知；`Message` 调用 `msg`；`WinToast` 优先尝试 Windows Toast，失败时回退到系统托盘气泡或消息框；`Speak` 通过系统 SAPI 语音服务讲述通知正文。
- `Send to Client`：若 JackalClient 正在运行，则通过 `loader.exe clientcommand` 把消息发送给客户端；若客户端不存在则放弃。
- `Client Notification`：客户端内通知方式，支持 `Off`、`Notify`、`Chatter`、`Title`、`Speak`、`WinToast`、`Real Chatter`、`Actionbar`，默认 `Speak`。当该项不是 `Notify`、`Title` 或 `Off` 时，客户端会同时在控制台用深绿色输出该消息。
- `Client Custom Command Enabled` / `Client Custom Command`：开启后，客户端收到 Codex 通知时会额外执行自定义命令。默认命令为 `mj notify %message%;;async music assets/icechime.wav`，其中 `%message%` 会替换为 Codex 通知正文；若 Hook 事件带有标题，也可用 `%title%` 引用。

## 安全策略

模块只管理 `jackal_codex_notifier.ps1`、`jackal_codex_notifier_hook.bat`、`config.toml` 中带 `jackal_codex_notifier` 标记的托管块，以及 `hooks.json` 中递归带 `jackal_codex_notifier` 字段或旧版命令标记的托管项。若用户已有自己的 `notify = [...]` 配置，开启模块时会临时注释保存到托管块中，关闭模块时恢复；若用户已有自己的 `hooks.json`，客户端会智能合并，只替换客户端托管的 Hook，保留其他 Hook。切换触发方式或关闭模块时，如果实际移除了托管 Hook 或 Notify 配置，客户端会额外弹出提示。Hook 模式安装时若发现 `config.toml` 的 `[features] hooks = false`，会自动改为 `true`；关闭 Hook 时只移除 `hooks.json` 中的托管项，不会回改该开关。

## 稳定性保护

客户端收到 `/codexnotify` 后只负责解析参数并把通知投递到主线程执行，避免 Hook 外部进程触发时直接访问客户端通知对象；自定义命令会进入运行时命令队列执行，避免播放提示音等同步命令卡住主线程。客户端通知、自定义命令、自动重装托管脚本等路径均带异常捕获，异常会写入 DebugError 日志。Hook 脚本会限制标题与正文长度，并对 `loader.exe clientcommand` 调用做额外保护，降低超长 Stop 消息或通知异常导致客户端崩溃的风险；通知正文传回客户端时使用 URL-safe base64，并会尝试修复权限请求文本中 UTF-8 被系统 ANSI 代码页误解码造成的中文乱码。Debug 模式会复用同一 PowerShell 解析路径显示标题、正文与 Hook 原始摘要，不再通过空白 CMD 暂停窗口兜底。

## 状态同步

模块会读取 `config.toml` 与 `hooks.json` 的实际内容同步开关状态：发现托管 notify/hook 时会静默启用模块，发现托管配置不存在时会静默关闭模块。

## 相关命令

```bash
/codex <args...>
Codex 信息管理工具。默认打开 Dashboard 面板，汇总 Codex 根目录、版本、模型、Provider、推理强度、沙盒、Skills 和 Sessions 数量。如果提供了参数但没有命中下列内置子命令，会预览将要执行的 codex 命令行，按 Enter 确认后直接调用 codex 并传递参数，按 Esc 取消。


/codex config
读取 .codex\config.toml 与 auth.json 并彩色显示关键配置；当 PrivacyProtect 模块开启时，API Key、Token、Secret、Auth 等敏感值会自动隐藏为星号。


/codex skills
枚举 .codex\skills 与 .codex\vendor_imports\skills 中包含 SKILL.md 的技能目录，并以二维表输出名称、显示名、来源、路径； 较长的 short_description、description、default_prompt 会作为单独行显示。


/codex new [params...]
创建新的 Codex CLI 窗口。params 会原样追加到 codex 后面，例如 /codex new --model gpt-5.5 等价于在新的 cmd 窗口中执行 codex --model gpt-5.5。


/codex terminate all
结束所有 codex.exe 以及由其派生的相关子进程，并逐项输出 PID、PPID、进程名、路径和成功/失败反馈。


/codex sessions
显示会话数量、最近会话、session-id 与首句用户 Prompt；Prompt 预览按 60 字符截断。


/codex files
列出常用 Codex 本地文件及大小。


/codex running
输出当前运行的 Codex 进程树。


/codex help
显示 /codex 系列命令帮助。
```
