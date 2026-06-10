# BHop
兔子跳
[PRO]
分类：Control
描述：帮助你连续跳。（专业版）

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：PRO 独有

## 介绍
BHop（兔子跳）用于帮助你连续跳。（专业版）。
适合键鼠行为控制、输入增强和自动化操作场景。
初次使用可优先调整：Basic Tap Cooldown (ms)、Trigger Mode。

## 配置项
- Only In Game（仅在游戏内）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Basic Tap Cooldown (ms)（基本敲击冷却（毫秒））
 类型：数值；默认：500L
 说明：用于控制检测/刷新/动画节奏。默认值 500L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Repeat Times（重复次数）
 类型：数值；默认：3L
 说明：这是数值型配置。默认值 3L 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Repeat Interval (ms)（重复间隙（毫秒））
 类型：数值；默认：50L
 说明：用于控制检测/刷新/动画节奏。默认值 50L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Jump Custom Key Hold Interval (ms)（自定义跳跃键按住时间（毫秒））
 类型：数值；默认：100L
 说明：用于控制检测/刷新/动画节奏。默认值 100L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Trigger Key（触发键）
 类型：按键/复合；默认：`{ { "Keybind", {VK_SPACE } }`}
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Jump Key（跳跃键）
 类型：枚举；默认："Wheel Down"
 说明：这是选项型配置。默认值 Wheel Down 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Wheel Down（向下滚轮）；Wheel Up（向上滚轮）；Custom（自定义）
- Trigger Mode（触发模式）
 类型：枚举；默认："Hold"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 Hold ，确认稳定后再逐项切换比较效果。
 可选：Hold（未收录）；Toggle（切换）
- Jump Custom Key（自定义跳跃键）
 类型：按键/复合；默认：`{ { "Keybind", {VK_LMENU } }`}
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
## 历史更新
无（HISTORY 中暂无明确记录）

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
