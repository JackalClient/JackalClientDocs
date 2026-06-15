# GitTracker

GitTracker 是专业版 Process 分类模块，用于跟踪当前运行中的 Git 任务。

## 功能

- 监听 `git.exe` 创建与退出。
- ProcessESP 开启时优先复用 ProcessESP 的 Diff/ETW 进程事件。
- ProcessESP 未开启时基于客户端进程缓存自行 Diff。
- `Check Cooldown (ms)` 控制自行 Diff 与进程缓存刷新频率，默认 300ms。
- HUD 可显示当前 Git 操作，例如 `git commit`、`git push`。
- HUD 条目支持淡入淡出；最后一个条目退出时，标题和背景会一起淡出。
- 当前运行中的 Git 任务会写入 Records 记录缓存，客户端重启后仍可恢复显示；恢复后会继续按进程快照清理已退出任务。
- `commit` 通知会附带提交信息前 16 个字符，HUD 不显示提交信息。

## 过滤

- `Parameter Whitelist Enabled` 开启后，只跟踪 `Parameter Whitelist (Sep With Semicolon)` 中列出的 Git 第一个参数。
- `Parameter Blacklist Enabled` 开启后，会忽略 `Parameter Blacklist (Sep With Semicolon)` 中列出的 Git 第一个参数。
- `Parent Process Name Blacklist (Sep With Semicolon)` 命中的父进程不会触发通知，也不会显示到 HUD。

## HUD

- `HUD Style=Classic`：按宽到窄显示 `git xxx` 文本，`HUD X Rate < 0.5` 左对齐，否则右对齐。
- `HUD Style=Normal`：在文本前显示操作图标，例如 `push` 使用 `up.png`。
- HUD 标题可选 `Off`、`Git`、`Git Tasks`、`Git Tracker`，标题后会显示当前条目数。
