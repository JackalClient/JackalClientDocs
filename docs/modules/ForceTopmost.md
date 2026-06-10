# ForceTopmost
强制置顶
分类：Misc
描述：暂无描述

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
ForceTopmost（强制置顶）用于暂无描述。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Cooldown。

## 配置项
- Cooldown（冷却）
 类型：数值；默认：25
 说明：用于控制检测/刷新/动画节奏。默认值 25 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Use SW_RESTORE（使用 SW_RESTORE）
 类型：布尔；默认：false
 说明：这是开关型配置。默认值 false 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Not While Hidden（隐藏时禁用）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Not While Screenshot（截图时禁用）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Not While Using IME（使用输入法时禁用）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- bind（绑定）
 类型：按键/复合；默认：`{ { "Keybind", {VK_RMENU, 'F' } }`}
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
## 历史更新
- 3. 为 Force Topmost 添加配置：
- 8. 为 Force Topmost 添加配置：

## 备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

## 相关命令
无

## 相关模块
- [Active (活动)](./Active.md)
- [AutoSpeak (自动讲述)](./AutoSpeak.md)
- [AntiMicrophone (反麦克风)](./AntiMicrophone.md)
- [Console (控制台)](./Console.md)
- [Shell (命令行)](./Shell.md)
- [QuickCommand (快速命令)](./QuickCommand.md)
- [MemeTrigger (梗触发)](./MemeTrigger.md)
- [Encryptor (加密器)](./Encryptor.md)

## 相关资料
无
