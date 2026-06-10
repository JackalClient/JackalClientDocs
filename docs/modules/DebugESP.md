# DebugESP
调试透视
分类：Process
描述：接收并输出进程的调试字符串。

## 需求
- 安全级别：常规模块
- 权限需求：无（仅“Capture Global Win32 (Admin Required)”开启时需要管理员）
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
和软件 `dbgview` 一个功能。
DebugESP 会监听 Windows 的 DBWIN 调试输出通道，把 `OutputDebugString` 一类调试文本转成客户端可见的输出。
它支持本地 Win32 通道，以及可选的 Global 通道。Global 通道能看到更多跨会话调试输出，但系统会要求管理员权限。
这个模块适合做运行期排障、观察第三方程序行为，或者配合 `/debugstr` 做链路自测。

## 配置项
- Capture Win32（捕获 Win32）
 类型：布尔；默认：true；说明：控制是否接收本地 DBWIN 调试输出。通常建议保持开启；若你只想看全局通道可临时关闭它减少噪声。
- Capture Global Win32 (Admin Required)（捕获全局 Win32（需要管理员））
 类型：布尔；默认：false；说明：开启后尝试接收 `Global\\DBWIN_*` 通道；非管理员时会自动报错并回退为关闭。建议先确认以管理员运行，再启用此项。
- Display Mode（展示模式）
 类型：枚举；默认："Chatter"；说明：决定调试文本的投递通道。`Console Output` 适合连续排错，`Notify/Title/Actionbar` 适合低频提醒，`Speak` 会逐条语音播报不适合高频流。可选：Console Output（控制台输出）；Chatter（弹幕）；Notify（通知）；Title（标题）；Actionbar（行为栏）；Speak（讲述）
- Show Process Source（显示进程来源）
 类型：枚举；默认："Both"；说明：控制消息前缀中显示的进程标识。`Both` 会同时显示 PID 与进程名；若界面过长可改成 `PID`。可选：Off（关闭）；PID（进程ID）；Process Name（进程名）；Both（两者）
- Show Namespace Source（显示命名空间来源）
 类型：布尔；默认：false；说明：开启后在前缀标记消息来自 `Win32` 还是 `Global` 通道，便于你区分不同来源的同名进程输出。
- Anti Spam（反刷屏）
 类型：布尔；默认：true；说明：会抑制连续重复的同文本消息（按上一条文本比较）。若你在排查重复日志场景，需临时关闭才能看到每一条重复输出。
- Chatter Type（弹幕类型）
 类型：枚举；默认："Top"；说明：仅在 `Display Mode = Chatter` 时生效，决定弹幕轨道与排布方式。高频日志建议用 `Scroll`，低频提示可保留 `Top`。可选：Scroll（滚动）；Top（顶端）；Bottom（底部）；Reverse（颠倒）；Horizontal（横向）；Vertical（纵向）；Random（随机）
## 历史更新
- 25. 添加模块：Debug ESP，捕获并显示应用程序的调试信息，就跟 Debugview 一样。

## 备注
如果你启用了 Global 捕获但看不到输出，先检查当前进程是否管理员运行；其次确认目标程序确实在调用调试输出接口。
当输出频率很高时，建议使用 `Console Output` 并保持 `Anti Spam` 开启，以免通知层被刷屏。

## 相关命令
- `/debugstr <文本>`：主动发送一条调试字符串，便于验证 DebugESP 接收链路。

## 相关模块
- [ProcessManager (进程管理器)](./ProcessManager.md)
- [ProcessESP (进程透视)](./ProcessESP.md)
- [CompileESP (编译透视)](./CompileESP.md)
- [ConsoleESP (控制台透视)](./ConsoleESP.md)

## 相关资料
无
