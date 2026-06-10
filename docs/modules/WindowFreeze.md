# WindowFreeze
窗口冻结
分类：未分类
描述：冻结指定窗口。

## 需求
- 安全级别：常规模块
- 恶意属性：否
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
WindowFreeze 用于让目标窗口进入不可交互状态（冻结），并可在后续恢复。
在当前版本里，这项能力主要通过 WindowMaster 的冻结/解冻动作或 FreezeAura 来执行，而不是依赖单独的 WindowFreeze 常驻逻辑。

## 配置项
无（该模块在 default_settings.h 中未定义独立配置项）

## 历史更新
无（HISTORY 中暂无明确记录）

## 备注
冻结本质是让窗口暂时不可操作，容易造成“像卡死”的体感；在生产场景建议先对非关键窗口试验。
若要快速切换冻结与恢复，优先使用 WindowMaster 的冻结快捷键；若要按鼠标目标持续冻结，可用 FreezeAura。

## 相关命令
无

## 相关模块
- [WindowMaster (窗口大师)](./WindowMaster.md)
- [FreezeAura (冻结光环)](./FreezeAura.md)
- [ProcessFreeze (进程冻结)](./ProcessFreeze.md)

## 相关资料
无