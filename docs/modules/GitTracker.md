# GitTracker

GitTracker 是专业版 Process 分类模块，用于跟踪当前运行中的 Git 任务。

## 功能

- 监听 `git.exe` 创建与退出。
- ProcessESP 开启时优先复用 ProcessESP 的 Diff/ETW 进程事件。
- ProcessESP 未开启时基于客户端进程缓存自行 Diff。
- `Check Cooldown (ms)` 控制自行 Diff 与进程缓存刷新频率，默认 300ms。
- HUD 可显示当前 Git 操作，例如 `git commit`、`git push`。
- HUD 条目支持淡入淡出；最后一个条目退出时，标题和背景会一起淡出。
- 当前运行中的 Git 任务会写入 `output/Cache/GitTrackerRuntime.json`，客户端重启后仍可恢复显示；恢复后会继续按进程快照清理已退出任务。
- Git 任务变化时会后台保存运行态，减少新增或退出条目时的主线程停顿。
- `commit` 通知会附带提交信息前 16 个字符，HUD 不显示提交信息。

## 过滤

- `Parameter Whitelist Enabled` 开启后，只跟踪 `Parameter Whitelist (Sep With Semicolon)` 中列出的 Git 第一个参数。
- `Parameter Blacklist Enabled` 开启后，会忽略 `Parameter Blacklist (Sep With Semicolon)` 中列出的 Git 第一个参数。
- `Parent Process Name Blacklist (Sep With Semicolon)` 命中的父进程不会触发通知，也不会显示到 HUD。

## HUD

- `Hide HUD When Menu On` 开启后，ClickGUI 打开时隐藏 GitTracker HUD；HUD 编辑器开启时仍可显示以便拖拽。
- `Give Way to Mouse` 开启后，鼠标经过 HUD 面板时整体透明度降为原来的 20%。
- `HUD X Rate` / `HUD Y Rate` 表示 HUD 面板中心点位置，可通过 HudEditor 拖拽调整。
- `HUD Style=Classic`：按宽到窄显示 `git xxx` 文本，`HUD X Rate < 0.5` 左对齐，否则右对齐。
- `HUD Style=Normal`：显示操作图标；左对齐时图标在左侧，右对齐时图标在右侧。
- `HUD Fade Effects` 控制 HUD 条目淡入淡出，`HUD Fade Effects Duration (ms)` 控制淡入淡出时长，默认 200ms。
- HUD 标题可选 `Off`、`Git`、`Git Tasks`、`Git Tracker`，标题后会显示当前条目数。

## 相关命令

- `/gittracker <cmdline...>`：按 GitTracker 规则解析一条 git 命令行，输出识别到的 Git 意图、HUD 文本和图标。
