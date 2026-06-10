# AntiPopups
反弹窗
分类：Window
描述：可以根据规则自动关闭符合条件的弹窗。

## 需求
- 安全级别：常规模块
- 恶意属性：否
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
AntiPopups 会先处理“广告进程”黑名单，再对候选窗口做规则判定并执行关闭措施。
它不是全屏遍历，而是重点检查几个高价值位置（屏幕中心、右下区域、前台窗口、鼠标指向窗口），因此响应快但也更依赖规则配置质量。

## 配置项
- Ad Process Policy（广告进程策略）
  类型：组合框；默认："Warn & AutoKill"。命中进程黑名单后的处理策略。
  可选：Ignore（忽略）；Warn（警告）；AutoKill（自动击杀）；Warn & AutoKill（警告并自动击杀）。
- BottomRight Judge Policy（右下角判定策略）
  类型：组合框；默认："Size or Blacklist"。右下区域窗口判定规则（常用于托盘弹窗）。
  可选：Size（尺寸）；Title（标题）；Size and Title（尺寸+标题）；Size or Blacklist（尺寸或黑名单）；Title or Blacklist（标题或黑名单）；Size and Title or Blacklist（尺寸+标题 或 在黑名单）。
- Others Judge Policy（其他判定策略）
  类型：组合框；默认："Title or Blacklist"。非右下区域窗口判定规则。
  可选：Title（标题）；Blacklist（黑名单）；Title or Blacklist（标题或黑名单）。
- Measures（措施）
  类型：组合框；默认："Chain"。命中后执行动作。
  可选：Chain（链式）；Close（关闭）；Destroy（销毁）；EndSession（终止会话）；KillProcess（击杀进程）。
- Chain（链式）
  类型：文本；默认："Close", "Destroy", "EndSession", "KillProcess"。说明链式执行顺序的参考项；当前逻辑固定按“关闭→销毁→结束会话→杀进程→隐藏→模拟点击→移出屏幕”尝试。
- Ad Window Title Keywords List（广告窗口标题关键词列表）
  类型：文本；默认："每日;开通会员;..."。标题关键词命中将提升窗口被判为弹窗的概率。
- Chain Allow LegitMouseClick（链允许合法鼠标点击）
  类型：布尔；默认：true。链式末段启用“模拟点关闭”路径。
- Chain LegitMouseClick Internal Delay (ms)（链合法鼠标点击内部延迟 (毫秒)）
  类型：数值；默认：200。模拟点击按下/抬起间隔。
- Chain LegitMouseClick X Margin Min（链合法鼠标点击横向偏移最小值）
  类型：数值；默认：14。关闭按钮点击点横向随机偏移下限。
- Chain LegitMouseClick X Margin Max（链合法鼠标点击横向偏移最大值）
  类型：数值；默认：22。关闭按钮点击点横向随机偏移上限。
- Chain LegitMouseClick Y Margin Min（链合法鼠标点击纵向偏移最小值）
  类型：数值；默认：14。关闭按钮点击点纵向随机偏移下限。
- Chain LegitMouseClick Y Margin Max（链合法鼠标点击纵向偏移最大值）
  类型：数值；默认：22。关闭按钮点击点纵向随机偏移上限。
- Chain Allow Move Window Out（链允许把窗口挪出去）
  类型：布尔；默认：true。链式末段允许把窗口挪到屏幕边缘外。
- Check Cooldown（检查冷却）
  类型：数值；默认：250U。主检查周期。
- Exclude Maximized（排除最大化）
  类型：布尔；默认：false。开启后跳过最大化/几乎全屏窗口。
- Exclude MessageBox（排除消息框）
  类型：布尔；默认：true。开启后跳过标准消息框类窗口（`#32770`）。
- Exclude SystemProcess（排除系统进程）
  类型：布尔；默认：true。开启后跳过系统进程窗口。
- Exclude WinToast（排除系统通知）
  类型：布尔；默认：true。开启后跳过系统通知宿主窗口。
- Blacklist Processes (Sep With Semicolon)（黑名单进程（用分号分隔））
  类型：文本；默认："mini.lohaslady.exe;..."。广告进程黑名单。
- Whitelist Processes Enabled（是否启用进程白名单。）
  类型：布尔；默认：true。开启后白名单进程窗口不会被处理。
- Whitelist Processes (Sep With Semicolon)（进程白名单，用分号分隔。）
  类型：文本；默认："哔哩哔哩.exe;explorer.exe;..."。白名单进程名列表。

## 历史更新
- 5. 添加新模块 Anti Popups。
- 1. 为 Anti Popups 设置进程白名单，防止信任窗口被关或进程被杀。
- 29. Ad Process Policy 默认值改为 Warn & AutoKill。

## 备注
`Measures=Chain` 对同一窗口有约 5 秒去重间隔，不会无限高频重复执行。
建议先开白名单、保守判定，再逐步提高动作强度，避免误伤正常业务窗口。

## 相关命令
无

## 相关模块
- [WindowMaster (窗口大师)](./WindowMaster.md)
- [PrivateWindow (隐私窗口)](./PrivateWindow.md)
- [WindowTags (窗口标签)](./WindowTags.md)
- [WindowHighlight (窗口高亮)](./WindowHighlight.md)

## 相关资料
无