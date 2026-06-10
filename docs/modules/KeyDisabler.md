# KeyDisabler
禁用键盘
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
KeyDisabler（禁用键盘）用于暂无描述。
适合键鼠行为控制、输入增强和自动化操作场景。
初次使用可优先调整：Mode。

## 配置项
- Mode（模式）
 类型：枚举；默认："Locker (Press End to escape
 说明：这是该模块的核心行为开关。默认值 Locker (Press End to escape 通常更稳，建议先验证默认策略再尝试其他模式。
## 历史更新
- 7. 为 Key Disabler 模式添加 A,W,S,D,Space,Shift
- 26. 为 KeyDisabler 添加一个新模式：Ctrl, Win, Alt
- 1. 修改 Key Disabler 的配置项为 Mode，意为禁用的按键:

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
