# QuickCommand
快速命令
分类：Misc
描述：按快捷键打开输入框，输入后快速执行一些命令。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
QuickCommand（快速命令）用于按快捷键打开输入框，输入后快速执行一些命令。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Input Method。

## 配置项
- Async（异步）
 类型：布尔；默认：true
 说明：用于控制是否异步处理。默认值 true 通常能减少主线程卡顿；若你遇到并发相关问题，可回退到更保守设置测试。
- Single Instance（单例模式）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Input Method（输入方法）
 类型：枚举；默认："Input Box"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 Input Box ，确认稳定后再逐项切换比较效果。
 可选：Input Box（输入框）；Chat Box（聊天框）
- Trigger Hotkey（触发快捷键）
 类型：按键/复合；默认：`{ { "Keybind", {VK_LCONTROL, VK_LMENU, VK_OEM_3 } }`}
 说明：用于设置快捷键触发。建议避免与系统或常用软件冲突，优先使用组合键提高可控性。
## 历史更新
- 38. 修复 QuickCommand 单例模式下 Chat Box 创建一次后无法再次创建的问题；单例模式关闭时无限创建的问题。
- 27. 添加模块：Quick Command，快速命令。允许你按一个快捷键打开输入框输入命令后立即执行。

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
- [ForceTopmost (强制置顶)](./ForceTopmost.md)
- [MemeTrigger (梗触发)](./MemeTrigger.md)
- [Encryptor (加密器)](./Encryptor.md)

## 相关资料
无
