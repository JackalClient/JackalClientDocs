# ListTasks
枚举计划任务
分类：Process
描述：枚举系统计划任务。

## 需求
- 安全级别：常规模块
- 恶意标记：否
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定
- 版本属性：普通可用

## 介绍
ListTasks 用于查看系统计划任务，支持 COM 枚举的结构化输出和 `schtasks` 原生命令输出。
默认 Normal 会递归遍历任务文件夹并输出更完整的任务信息；Vanilla 样式则按系统命令格式输出。

## 配置项
- Async（异步）
  类型：布尔；默认：true；说明：开启后后台枚举计划任务，任务较多时可减少主流程停顿。
- Auto Console（自动启用控制台）
  类型：布尔；默认：true；说明：开启后自动打开或聚焦控制台，便于查看完整任务树输出。
- Style（风格）
  类型：组合框；默认：Normal；说明：决定任务枚举方式与输出格式。默认 Normal 适合排障，Vanilla 样式更接近系统命令结果。
  可选项：Normal（普通）、Vanilla (List)（原版列表）、Vanilla (XML)（原版XML）、Vanilla (CSV)（原版CSV）

## 历史更新
- 8. 新增模块 ListTasks，枚举所有计划任务信息。

## 备注
Normal 模式依赖任务计划 COM 接口。若系统组件异常，建议改用 Vanilla 样式做交叉验证。

## 相关命令
无

## 相关模块
- [ListModules (枚举模块)](./ListModules.md)
- [ListServices (枚举服务)](./ListServices.md)
- [Taskmgr (任务管理器)](./Taskmgr.md)
- [ProcessManager (进程管理器)](./ProcessManager.md)

## 相关资料
无