# RestartExplorer
重启资源管理器
分类：Process
描述：重启资源管理器。

## 需求
- 安全级别：常规模块
- 恶意标记：否
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定
- 版本属性：普通可用

## 介绍
RestartExplorer 用于重启 `explorer.exe`，常用于恢复任务栏、桌面外壳或资源管理器异常状态。
模块启用后会先结束现有 `explorer.exe`，等待短暂间隔后再以 `/loadsavedwindows` 参数重新启动，最后自动关闭模块。

## 配置项
无（该模块在 default_settings.h 中未定义独立配置项）

## 历史更新
- 23. RestartExplorer 重启时增加参数：`/loadsavedwindows`。

## 备注
如果 `explorer.exe` 结束失败，模块会直接报错并停止后续重启步骤。执行前建议先保存资源管理器相关未完成操作。

## 相关命令
无

## 相关模块
- [Run (运行)](./Run.md)
- [Taskmgr (任务管理器)](./Taskmgr.md)
- [ProcessManager (进程管理器)](./ProcessManager.md)
- [ForceTopmost (强制置顶)](./ForceTopmost.md)

## 相关资料
无