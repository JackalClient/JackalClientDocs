# PrivateWindow
隐私窗口
分类：Window
描述：防止一些私人窗口被截屏或者录屏。

## 需求
- 安全级别：常规模块
- 恶意属性：否
- 权限需求：可能需要管理员权限（部分窗口需注入/跨进程设置时）
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
适合直播使用，防止私密信息泄露。
PrivateWindow 会按应用预设筛选窗口，然后为目标窗口设置显示亲和（黑屏或从捕获中排除），以减少被截图/录屏捕获的风险。
模块包含窗口跳过策略，会主动避开一批高风险临时窗口（例如无激活浮层、输入法/阴影视窗），以降低白色幽灵窗等副作用。对于 32 位（x86/WOW64）目标窗口，模块会通过客户端内部注入路径直接在目标进程中调用 `SetWindowDisplayAffinity`；对于 64 位目标窗口则委托 `loader.exe` 执行。此前 x86 窗口会被错误地交由仅支持 x64 的 loader 处理，导致目标进程崩溃。

## 配置项
- Async（异步）
  类型：布尔；默认：true。开启后启停操作走异步流程，窗口较多时更不容易卡界面。
- Mode（模式）
  类型：组合框；默认："Invisible (>= Win10)"。设置目标窗口的隐私方式。
  可选：Black（黑色遮挡捕获）；Invisible (>= Win10)（捕获排除，需较新系统支持）。
- Policy（策略）
  类型：组合框；默认："Simple Check"。决定后续复查与应用强度。
  可选：Set Once（单次设置时间点）；Simple Check（简单检查）；Complete Check（完整检查）；Blatant Apply（暴力应用）。
- Keep Checking Cooldown (ms)（持续检查冷却（毫秒））
  类型：数值；默认：1000U。非 `Set Once` 时的周期检查间隔。
- QQ NT（QQ NT）
  类型：布尔；默认：true。控制是否处理 QQ 相关预设窗口。
- WeChat（微信）
  类型：布尔；默认：true。控制是否处理旧版微信预设窗口。
- WeChat New（新版微信）
  类型：布尔；默认：true。控制是否处理新版微信预设窗口。
- Edge（Edge）
  类型：布尔；默认：true。控制是否处理 Edge 相关预设窗口。
- Steam（Steam）
  类型：布尔；默认：true。控制是否处理 Steam 相关预设窗口。
- Bilibili Desktop（B站桌面客户端）
  类型：布尔；默认：true。控制是否处理 B 站桌面端预设窗口。
- Edge Overlay Mode（Edge 浏览器覆盖层模式）
  类型：布尔；默认：false。对 Edge 目标优先使用透明覆盖层方式，适合常规亲和设置不稳定时。
- Clear Overlay Windows When Disabling（关闭时清空覆盖层窗口）
  类型：布尔；默认：false。关闭模块时主动结束覆盖层窗口，避免残留遮挡。
- Notify Each Window Affinity Result（逐窗口通知设置亲和结果）
  类型：布尔；默认：true。逐个窗口提示成功/失败，便于定位问题窗口。
- Record Window When Failed（失败时也记载窗口）
  类型：布尔；默认：true。设置失败的窗口也保留在记录中，方便后续排障与重试。

## 历史更新
- 8. 添加模块：PrivateWindow，可以将一些隐私窗口从捕获中去除。
- 21. 修复 PrivateWindow 关闭时的迭代器崩溃问题。
- 44. 添加对特殊窗口的跳过判定，尝试防止关闭后出现白色幽灵窗口。
- 45. 为 PrivateWindow 添加配置。
- 修复 Window Manager 与 PrivateWindow 对 32 位窗口设置隐私时导致目标崩溃的问题。

## 备注
建议先用 `Simple Check` 跑一段时间观察命中情况，再决定是否切到 `Complete Check` 或 `Blatant Apply`。
如果目标窗口始终设置失败，先尝试管理员权限，再考虑 `Edge Overlay Mode` 等替代路径。

## 相关命令
- `/privatewindows`
- `/privatewindow list`
- `/privatewindow sync`
- `/privatewindow clear`
- `/privatewindow reset &lt;hwnd&gt;`
- `/privatewindow set &lt;hwnd&gt; [affinity=none]`
- `/privatewindow check &lt;hwnd&gt;`
- `/privatewindow why &lt;hwnd&gt;`
- `/privatewindow reason &lt;hwnd&gt;`
- `/privatewindow diagnose &lt;hwnd&gt;`
- `/privatewindow diag &lt;hwnd&gt;`
- `/privatewindow layer list`
- `/privatewindow layer check &lt;hwnd&gt;`
- `/privatewindow layer enable/disable &lt;hwnd&gt;`

## 相关模块
- [WindowMaster (窗口大师)](./WindowMaster.md)
- [WindowTags (窗口标签)](./WindowTags.md)
- [WindowHighlight (窗口高亮)](./WindowHighlight.md)

## 相关资料
无

