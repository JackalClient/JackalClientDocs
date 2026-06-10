# CapsGuard
大写守护
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
CapsGuard（大写守护）用于暂无描述。
适合键鼠行为控制、输入增强和自动化操作场景。
初次使用可优先调整：Caps Lock Operation、Caps Lock When。

## 配置项
- Caps Lock Operation（大写锁定操作）
 类型：枚举；默认："Disable"
 说明：这是选项型配置。默认值 Disable 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Ignore（忽略）；Disable（禁用）；Enable（启用）
- Caps Lock When（大写锁定何时）
 类型：枚举；默认："Always"
 说明：这是选项型配置。默认值 Always 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Always（总是）；Chinese Input Method（中文输入法）；Non-chinese Input Method（非中文输入法）
## 历史更新
- 44. 添加模块：Caps Guard，保持大写锁定键状态。

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
- [MouseTrails (鼠标轨迹)](./MouseTrails.md)
- [MouseESP (鼠标透视)](./MouseESP.md)

## 相关资料
无
