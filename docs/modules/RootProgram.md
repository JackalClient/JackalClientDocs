# RootProgram
根目录程序
分类：File
描述：在各磁盘根目录监视/处理 Program.exe 与 Program.com 行为。

## 需求
- Unsafe：否
- Malicious：否
- 需要管理员权限：否
- 需要系统权限：否
- 需要 TrustedInstaller 权限：否
- 驱动依赖：否
- 是否 WIP：否
- 是否需要联网：否
- 版本属性：普通可用

## 介绍
RootProgram 围绕各盘根目录 `Program.exe / Program.com` 做三类策略：
1. `Monitor`：监视这些目标的出现/消失/形态变化，并按策略通知或自动删除。
2. `Prevention`：预防模式，会在根目录创建同名目录占位，降低同名可执行落地的机会。
3. `Settle`：定居模式，会把指定程序复制到各盘根目录的 `Program.*`。
模块开启后会根据策略持续校验：监视模式周期检查变化，非监视模式检查目标是否仍满足，不满足会自动关闭模块。

## 配置项
- Policy（策略）
类型：枚举；默认：Monitor；作用：选择核心工作模式。可选项：Monitor（监视）、Prevention（预防）、Settle（定居）。建议：先用 `Monitor` 观察环境再决定是否进入主动模式。

- Monitor Reaction（监视反应）
类型：枚举；默认：Notify Delete；作用：仅在 `Policy=Monitor` 时生效，决定发现目标变化后的动作。可选项：Notify（仅通知）、Delete（仅删除）、Notify Delete（通知并删除）。建议：初次使用建议 `Notify` 或 `Notify Delete`。

- Prevention Format（预防格式）
类型：枚举；默认：Both；作用：仅在 `Policy=Prevention` 时生效，决定拦截 `.exe`、`.com` 或两者。可选项：.exe、.com、Both（两者）。

- Settle Program（定居程序）
类型：枚举；默认：Cmd；作用：仅在 `Policy=Settle` 时生效，指定复制到根目录的来源。可选项：Cmd、Client、PowerShell、Custom。建议：`Custom` 前先确认源文件真实存在。

- Settle Format（定居格式）
类型：枚举；默认：.exe；作用：仅在 `Policy=Settle` 时生效，指定目标扩展名。可选项：.exe、.com。

- Settle Custom Source Path（自定义定居源路径）
类型：文本；默认：空；作用：仅 `Settle Program=Custom` 时生效，指定自定义源文件路径。建议：使用绝对路径并先验证可读权限。

## 备注
`Monitor` 模式下会跟踪状态变化并按你的反应策略执行；`Prevention/Settle` 模式下会持续自检，不满足条件会自动关闭模块。
涉及根目录写入与删除行为，建议先在非系统盘测试。

## 相关命令
无

## 相关模块
- [DiskMissing (磁盘丢失)](./DiskMissing.md)
- [FileManager (文件管理器)](./FileManager.md)
- [FileDelete (文件删除)](./FileDelete.md)
- [FileCreate (文件创建)](./FileCreate.md)

## 相关资料
无