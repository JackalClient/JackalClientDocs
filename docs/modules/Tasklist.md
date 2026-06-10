# Tasklist
进程列表
分类：Process
描述：在控制台输出进程列表。

## 需求
- 安全级别：常规模块
- 恶意标记：否
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定
- 版本属性：普通可用

## 介绍
Tasklist 用于一次性输出当前进程信息，适合做快速巡检、进程排查和取证前预览。
当 Style 选 `Vanilla` 时走系统 `tasklist` 输出；其他样式走客户端自定义表格输出，可额外展示路径、命令行和签名状态。

## 配置项
- Async（异步）
  类型：布尔；默认：true；说明：开启后异步输出列表，避免界面等待；在 `Vanilla` 风格下会弹出命令窗口执行 `tasklist && pause`，方便保留结果。
- Auto Console（自动启用控制台）
  类型：布尔；默认：true；说明：开启后自动打开或聚焦控制台，保证结果可见。建议保留开启，否则可能执行了但看不到输出。
- Use Record（使用记录）
  类型：布尔；默认：false；说明：关闭时会先刷新一次进程快照再输出；开启时直接使用已有快照，速度更快但信息可能不是最新。
- Verify Signature（验证签名）
  类型：布尔；默认：false；说明：开启后会检查进程文件签名并影响输出着色，适合安全排查；关闭可提升输出速度。
- Style（风格）
  类型：组合框；默认：Normal；说明：决定输出内容结构。默认 Normal 兼顾可读性与信息量，排查可执行来源时建议切到 Pathes 或 Command Lines。
  可选项：Vanilla（原版）、Normal（普通）、Pathes（路径）、Command Lines（命令行）

## 历史更新
- 42. 为 Tasklist 的 Style 增加 `Pathes`。
- 43. 为 Tasklist 增加配置项。

## 备注
Tasklist 是“触发即输出后自动关闭”的模块，不会持续驻留。若需要长期观察进程变化，建议配合 ProcessManager 使用。

## 相关命令
无

## 相关模块
- [ProcessManager (进程管理器)](./ProcessManager.md)
- [ProcessKill (进程击杀)](./ProcessKill.md)
- [ProcessFreeze (进程冻结)](./ProcessFreeze.md)
- [ListModules (枚举模块)](./ListModules.md)

## 相关资料
无