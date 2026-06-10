# ListServices
枚举服务
分类：Process
描述：列出系统服务信息。

## 需求
- 安全级别：常规模块
- 恶意标记：否
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定
- 版本属性：普通可用

## 介绍
ListServices 用于输出系统服务列表，支持“客户端格式化输出”和“原生命令输出”两类模式。
你可以根据场景选择更偏可读性的 Normal/Simple，或选择 Vanilla 系列直接调用 `sc query` 系列命令。

## 配置项
- Async（异步）
  类型：布尔；默认：true；说明：开启后后台执行枚举，适合服务较多时避免前台等待。
- Auto Console（自动启用控制台）
  类型：布尔；默认：true；说明：开启后自动打开/聚焦控制台，便于实时查看服务状态输出。
- Style（风格）
  类型：组合框；默认：Normal；说明：决定输出来源和显示形式。默认 Normal 会展示服务名、类型、状态和显示名，适合日常排查。
  可选项：Vanilla（原版）、Vanilla (Only Win32)（原版 仅 Win32）、Vanilla (Only Drivers)（原版 仅驱动）、Vanilla Custom（原版自定义）、Normal（普通）、Simple（简易）
- Vanilla Enum Custom Command（原版枚举自定义命令）
  类型：文本；默认："sc query"；说明：用于 Vanilla Custom 模式下自定义命令。建议先在命令行手动验证命令可执行后再写入。

## 历史更新
- 10. 新增模块 ListServices（枚举服务）。

## 备注
Normal/Simple 模式使用内部枚举逻辑并带进度条；Vanilla 系列直接执行系统命令，输出格式由系统命令决定。

## 相关命令
无

## 相关模块
- [ListModules (枚举模块)](./ListModules.md)
- [ListTasks (枚举计划任务)](./ListTasks.md)
- [ProcessManager (进程管理器)](./ProcessManager.md)
- [Taskmgr (任务管理器)](./Taskmgr.md)

## 相关资料
无