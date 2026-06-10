# AutoCopy
自动复制
分类：Control
描述：自动复制指定的文本。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
AutoCopy（自动复制）用于自动复制指定的文本。
适合键鼠行为控制、输入增强和自动化操作场景。
初次使用可优先调整：Source Mode、Update Cooldown (ms)、Change Cooldown (ms)。

## 配置项
- Source Mode（源模式）
 类型：枚举；默认："Fixed"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 Fixed ，确认稳定后再逐项切换比较效果。
 可选：Fixed（固定）；File Content（文件内容）；File Random Line（文件随机行）
- Fixed Text（固定文本）
 类型：文本；默认："/hub"
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- File Path（文件路径）
 类型：文本；默认：""
 说明：用于指定文件/目录路径。建议使用稳定的绝对路径并确认权限可访问，避免因路径变化导致功能失效。
- Only Update When Holding Ctrl（仅当按住Ctrl时更新）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Include Items With Keywords (Sep With Semicolon)（包含带有关键词的项目 (用分号分隔)）
 类型：文本；默认：""
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Exclude Items With Keywords (Sep With Semicolon)（排除带有关键词的项目 (用分号分隔)）
 类型：文本；默认："{player}"
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Ignore Empty Item（忽略空项目）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Update Cooldown (ms)（更新冷却（毫秒））
 类型：数值；默认：1000
 说明：用于控制检测/刷新/动画节奏。默认值 1000 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Change Cooldown (ms)（变更冷却（毫秒））
 类型：数值；默认：10000
 说明：用于控制检测/刷新/动画节奏。默认值 10000 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
## 历史更新
- 59. 添加自动复制模块：Auto Copy

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
