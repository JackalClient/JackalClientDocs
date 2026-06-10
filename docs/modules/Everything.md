Everything
Everything
分类：File
描述：软件“Everything”的一些功能。

需求
- Unsafe：否
- Malicious：否
- 需要管理员权限：否
- 需要系统权限：否
- 需要 TrustedInstaller 权限：否
- 驱动依赖：否
- 是否 WIP：否
- 是否需要联网：否
- 版本属性：普通可用（含部分 PRO 命令）

介绍
Everything 模块用于对接 `Everything.exe` 及其 SDK 接口。启用时会尝试确保 `Everything.exe` 运行并初始化请求参数；关闭时会重置并清理接口，同时尝试结束 `Everything.exe` 进程。`Everything 1.5` 可用时会使用新版 SDK，并在默认实例与 `1.5a` 实例中自动选择版本更高的一侧。
它本身没有模块配置项，主要能力通过命令行使用（文件搜索、状态查看、索引/历史维护、匹配选项调优等）。

配置项
无（该模块在默认配置中没有独立可调参数）

备注
如果系统中未安装或未能启动 `Everything.exe`，模块启用会失败并自动回滚。
此模块通常作为 `Quick Run`、`/findfile` 等能力的搜索底座使用。

相关命令
- `/findfile <关键词...>`：通过 Everything 搜索并显示文件名与绝对路径。
- `/findfileb <关键词...>`：通过 Everything 搜索，仅显示文件名。
- `/everything`：切换 Everything 模块开关。
- `/everything status`：查看模块状态、进程状态、版本和请求参数（PRO）。
- `/everything start | exit | reset`：启动、退出、重置 Everything 接口（部分为 PRO）。
- `/everything rebuild | update | savedb | savehistory | clearhistory`：索引与数据库维护（PRO）。
- `/everything matchpath|matchcase|wholeword|regex [on/off]`：匹配策略开关（PRO）。

相关模块
- [FileManager (文件管理器)](./FileManager.md)
- [QuickRun (快速运行)](./QuickRun.md)
- [FileDelete (文件删除)](./FileDelete.md)
- [FileCreate (文件创建)](./FileCreate.md)

相关资料
无
