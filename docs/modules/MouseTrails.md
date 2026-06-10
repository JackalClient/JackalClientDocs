# MouseTrails
鼠标轨迹
分类：Control
描述：暂无描述

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
MouseTrails（鼠标轨迹）用于暂无描述。
适合键鼠行为控制、输入增强和自动化操作场景。
初次使用可优先调整：Trails。

## 配置项
- Trails（轨迹）
 类型：数值；默认：5
 说明：这是数值型配置。默认值 5 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
## 历史更新
- 68. 删除 NoAnimation & MouseTrails 之前无意义的配置项。
- 18. MouseTrails 和 NoAnimation 模块的异步打开后，无法关闭模块。所以改成下面的配置：
- 21. 为 Mouse Trails 和 No Animation 模块添加异步模式，防止阻塞客户端。

## 备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

## 相关命令
无

## 相关模块
- [AntiAFK (反挂机)](./AntiAFK.md)
- [AutoClicker (连点器)](./AutoClicker.md)
- [MouseWatcher (鼠标监视)](./MouseWatcher.md)
- [MouseSwap (鼠标交换)](./MouseSwap.md)
- [MouseDisabler (禁用鼠标)](./MouseDisabler.md)
- [MouseTeleport (鼠标传送)](./MouseTeleport.md)
- [MouseESP (鼠标透视)](./MouseESP.md)
- [Crosshair (准星线)](./Crosshair.md)

## 相关资料
无
