MemeTrigger
梗触发
分类：Misc
描述：暂无描述

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
MemeTrigger（梗触发）用于暂无描述。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Notify、Disable Client Other HUD。

配置项
- no_signal（否_signal）
 类型：按键/复合；默认：`{ { "Keybind", {0 } }`}
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- genshin_impact（未收录）
 类型：按键/复合；默认：`{ { "Keybind", {0 } }`}
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- what（未收录）
 类型：按键/复合；默认：`{ { "Keybind", {0 } }`}
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- hyw（未收录）
 类型：按键/复合；默认：`{ { "Keybind", {0 } }`}
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- zmq（未收录）
 类型：按键/复合；默认：`{ { "Keybind", {0 } }`}
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- hyw Folder Path（hyw 文件夹 路径）
 类型：文本；默认：""
 说明：用于指定文件/目录路径。建议使用稳定的绝对路径并确认权限可访问，避免因路径变化导致功能失效。
- zmq Folder Path（zmq 文件夹 路径）
 类型：文本；默认：""
 说明：用于指定文件/目录路径。建议使用稳定的绝对路径并确认权限可访问，避免因路径变化导致功能失效。
- Notify（通知）
 类型：布尔；默认：false
 说明：用于选择结果反馈方式。默认值 false 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Disable Client Other HUD（禁用客户端其他HUD）
 类型：布尔；默认：true
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
历史更新
- 32. 将 Meme Trigger 整合进客户端本体。添加了多个配置项，你可以为不同的梗分开分配快捷键
- 4. Meme Trigger: 添加配置项 Hotkey，可以更改快捷键为:

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令

/meme
枚举所有梗。

/meme <name>
同步触发一个梗。

相关模块
- [Active (活动)](./Active.md)
- [AutoSpeak (自动讲述)](./AutoSpeak.md)
- [AntiMicrophone (反麦克风)](./AntiMicrophone.md)
- [Console (控制台)](./Console.md)
- [Shell (命令行)](./Shell.md)
- [QuickCommand (快速命令)](./QuickCommand.md)
- [ForceTopmost (强制置顶)](./ForceTopmost.md)
- [Encryptor (加密器)](./Encryptor.md)

相关资料
[发送快捷键让 Windows 随机触发一张『何意味』表情包](https://www.bilibili.com/video/BV1m42wBvEMS)
