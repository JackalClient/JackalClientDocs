# Agent HUD
分类：Process
描述：显示 Codex 与 Claude Code 的运行会话、任务状态和子进程。

## 需求
- 安全级别：低风险模块
- 权限需求：无需管理员权限；受保护进程的信息可能无法读取
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：专业版独有

## 介绍
Agent HUD 会异步扫描正在运行的 Codex 与 Claude Code 进程，并从当前用户目录下的会话 JSONL 文件尾部读取最近状态。读取采用有限大小窗口，不会完整载入大型会话文件，也不会阻塞 HUD 渲染。恢复较早创建的 Codex 会话时，模块也会按最近修改时间在完整会话目录中查找对应文件；Claude Code 会优先使用主会话并排除 subagents 日志。

HUD 可显示 Agent 类型、工作区名称、PID、进程运行时间、当前任务状态、任务持续时间和子进程。状态指示点使用绿色表示 New、白色闪烁表示 Working、橘色闪烁表示 Thinking、蓝色闪烁表示 Ask for Approval、绿色表示 Completed、红色表示 Interrupted。新会话在收到 task_started 前显示 New；没有 Agent 进程时会短暂显示 Empty，并在 3 秒后平滑淡出。

Codex 状态以会话事件为准：task_started 进入 Working，reasoning 进入 Thinking，包含 sandbox_permissions=require_escalated 的工具调用进入 Ask for Approval，后续其他 payload 恢复 Working，task_complete 才进入 Completed，turn_aborted 进入 Interrupted。Claude Code 根据普通用户消息、thinking 内容、工具调用、end_turn 和用户中断记录维护对应状态。

任务持续时间从最近一次 task_started 或 Claude Code 用户任务消息的 JSON 时间戳开始计算。Completed 和 Interrupted 状态会使用结束事件的时间戳固定计时，不再继续增加。进程运行时间仍由 HUD 本地计时器连续推进，并在后台扫描结果刷新时同步校准。

新增会话会从下方约 130 像素处使用 EaseOutCubic 向上淡入。会话消失或被 Auto Hide 过滤时，会使用 EaseInExpo 向下淡出；独立背景布局中的会话背景会与内容一起运动。会话在动画途中重新出现或消失时会从当前偏移连续反向，不会重置或跳到目标位置。

Session Display 可选择 Seperate 按会话分别显示，或选择 Merged 按 Agent 类型合并。Background Session Display 支持 Full、Body 和 Seperate 三种背景组织方式。

## 配置项
- Notify Start：task_started 到达时通知任务开始，可选择 Off、Notify、Chatter、Title、Speak 或 WinToast，默认 Off。
- Notify Request：会话进入 Ask for Approval 时通知权限请求，选项同上，默认 Notify。
- Notify Complete：task_complete 到达并进入 Completed 时通知任务完成，选项同上，默认 Notify。
- Auto Hide：选择 Off 保持全部会话，Completed 隐藏已完成会话，Busy 隐藏 Working 会话，Not Asking 隐藏所有不是 Ask for Approval 状态的会话。
- Give Way to Mouse：默认开启；鼠标经过 HUD 时，HUD 整体平滑淡出到原不透明度的 30%。HUD Editor 开启时不生效。
- Exclude Subprocesses Enabled：控制是否启用子进程名称排除列表，默认关闭。
- Exclude Subprocesses (Sep With Semicolon)：填写需要隐藏的完整子进程名称，名称之间使用英文分号分隔；默认值为 pwsh.exe;codex-code-mode-host.exe。
- Workspace：显示会话 JSON 中工作目录的最后一级文件夹名称，前置灰色 `@` 符号。
- Session Display：选择会话分开显示或按 Agent 类型合并。
- Background Session Display：选择整块背景、标题与正文双背景，或标题及各会话独立背景。
- Session Gap：调整独立会话背景间距。
- Scale：调整 HUD 整体缩放。
- X Rate / Y Rate：调整 HUD 锚点。
- Text Opacity (0~1)：调整文字与图标不透明度。
- Elements：控制标题、图标、状态点、Agent 类型、工作区、PID、运行时间、任务及子进程等显示元素。
- Title Color / Agent Type Color / Task Color / Subprocess Color：调整主要文字颜色。
- Background：控制背景开关。
- Background Color / Background Opacity (0~1) / Background Roundness (0~1)：调整背景外观；圆角配置作为动态系数，矩形越大时实际圆角会按短边自动收敛。
- Background Shadow / Background Shadow Thickness / Background Shadow Opacity (0~1)：调整背景阴影。

Developer 中的 `Agent HUD` 开关默认关闭。开启后仅输出少量状态变化诊断（例如进程 PID 的 `Completed -> Working`），不会输出会话正文或工具参数。

## 历史更新
- v1.1.5：新增 Agent HUD，支持 Codex 与 Claude Code 会话状态、子进程、合并显示和动态背景布局。
- v1.1.5：新增 Auto Hide 会话筛选，并改进进程运行时间计时与子进程信息显示。
- v1.1.5：新增鼠标让位淡出，状态识别改为 JSONL 事件状态机，任务计时改用会话事件时间戳。
- v1.1.5：新增子进程名称排除列表，以及会话 EaseOutCubic 入场和 EaseInExpo 出场动画。
- v1.1.5：修复完成状态在后续事件到达后无法恢复工作状态、升级权限无法显示 Ask for Approval 的问题；新增工作区名称、Developer 调试开关，并限制大尺寸背景的动态圆角。
- v1.1.5：新增 New 状态、无会话延迟淡出、连续可逆的会话进出场动画，以及任务开始、权限请求和任务完成通知。

## 备注
会话状态由 JSONL 中已写入的最近事件判断。Agent 会话格式变化、会话文件被移动或目标进程拒绝查询时，部分字段可能暂时回退为 New；收到 task_started 后才会进入 Working。

## 相关命令
无

## 相关模块
- [Agent](./Agent.md)
- [CodexNotifier](./CodexNotifier.md)

## 相关资料
无
