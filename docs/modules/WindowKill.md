# WindowKill
窗口击杀
分类：未分类
描述：杀掉指定窗口。

## 需求
- 安全级别：常规模块
- 恶意属性：否
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
WindowKill 用于对指定窗口执行关闭/销毁类操作。
在当前版本中，这一能力主要通过 WindowMaster 的按键动作来实际使用（例如结束任务、发送销毁消息等），而不是依赖单独常驻的 WindowKill 自动循环。

## 配置项
无（该模块在 default_settings.h 中未定义独立配置项）

## 历史更新
无（HISTORY 中暂无明确记录）

## 备注
如果你开启本模块后没有明显持续行为，这是正常现象：当前版本更推荐通过 WindowMaster 的目标窗口操作完成“窗口击杀”。
需要更强硬的进程级结束时，可转用 ProcessKill。

## 相关命令
无

## 相关模块
- [WindowMaster (窗口大师)](./WindowMaster.md)
- [ProcessKill (进程结束)](./ProcessKill.md)
- [KillAura (杀戮光环)](./KillAura.md)

## 相关资料
无