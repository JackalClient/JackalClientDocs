# Alarm
闹钟
分类：Misc
描述：创建由 Windows 计划任务或客户端触发器驱动的闹钟。

## 需求
- 安全级别：常规模块
- 恶意标记：否
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定
- 版本属性：普通可用

## 介绍
Alarm 用于管理闹钟列表，支持计划任务和客户端两种模式。
计划任务模式会写入 Windows 计划任务，客户端退出后仍可触发；客户端模式会映射到 Triggers 任务，便于在客户端内统一管理。

## 配置项
- Open Alarm App（打开闹钟应用）
  类型：按钮；说明：打开 Alarm App 的闹钟页。
- Sync Scheduled Tasks（同步计划任务）
  类型：按钮；说明：手动同步系统计划任务到闹钟列表。

## 历史更新
- 1. 新增 Alarm 模块：支持计划任务闹钟和客户端闹钟两种模式，提供闹钟列表、编辑页、任务同步与响铃动作管理。

## 备注
计划任务模式适合需要在客户端退出后继续触发的场景；客户端模式适合和 Triggers 联动管理。

## 相关命令
- [/alarm fire](../commands/system-commands.md)
- [/alarm sync](../commands/system-commands.md)
- [/alarm list](../commands/system-commands.md)

## 相关模块
- Triggers（触发器）
- [AutoStart](./AutoStart.md)

## 相关资料
无


## 补充配置项与交互说明
- Show External Scheduled Tasks（显示外部计划任务）：控制 Alarm App 是否显示同步导入的外部计划任务，和 App 顶部 Imported 开关联动。
- External Scheduled Task Color（外部计划任务颜色）：设置外部计划任务闹钟项的边框颜色。
- Client Alarm Color（客户端闹钟颜色）：设置客户端创建闹钟项的边框颜色。
- Category Default Value（类别默认值）：设置新建闹钟默认使用计划任务或客户端闹钟。
- Repeat Default Value（重复默认值）：设置新建闹钟的默认重复周期。
- Ring Enabled Default Value（默认启用响铃）与 Ring Sound Default Value（默认响铃声音）：设置新建闹钟的响铃默认状态和音源。
- Custom Ring Default Path（默认自定义铃声路径）：自定义铃声默认路径，默认 assets\FunkyStars.mp3。
- Folder Mode Default Value、Action Default Value、Run Command Default Value、Cmd Command Default Value、Powershell Command Default Value、Jackal Command Default Value、Auto Delete Default Value：分别控制新建闹钟的文件夹播放模式、默认动作、各动作默认命令和触发后自动删除。

App 内支持鼠标滚轮、方向键、Home/End 滚动；计划任务同步和计划任务闹钟启停会异步执行并显示加载动画。没有 Actions 的外部计划任务不会同步到闹钟列表。

### 动作命令默认值说明
Run、Cmd、Powershell、Jackal Command 使用独立命令配置。Run/Cmd/Powershell 的默认命令为空；Jackal Command 默认使用客户端命令 `mj title 你闹钟响了。;;chatter alarm triggered!`。旧版统一动作命令字段仅作为兼容回退。

### 2026-08-05 更新说明
旧版统一动作命令默认值已移除，不再作为可配置项显示。计划任务闹钟触发时不再启动 JackalClient 命令行实例；响铃会通过系统默认打开方式打开音频，Notification 会运行临时 PowerShell Toast 脚本，Run/Cmd/Powershell/Jackal Command 使用各自独立的命令字段。

### 2026-08-05 交互与触发修复
闹钟编辑弹窗配置区支持滚动，Esc 会优先关闭弹窗。计划任务闹钟触发时会优先通过 loader.exe 将 `/alarm fire` 发送给已运行的客户端；客户端不在时再执行音频、通知和外部命令兜底。Once 客户端闹钟仅在开启 Auto Delete 时才会触发后删除。

### 2026-08-05 细节修复
编辑弹窗外点击会取消关闭；长字符串输入会自动跟随光标横向滚动。计划任务触发脚本改为隐藏窗口启动，删除计划任务闹钟时会异步删除任务并保存记录。重复响铃配置暂时移除，闹钟只响一次。
