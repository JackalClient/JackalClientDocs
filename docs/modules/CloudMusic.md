# CloudMusic
云音乐
[PRO]
分类：Misc
描述：一个简单的网易云音乐的挂钩。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：PRO 独有

## 介绍
CloudMusic（云音乐）用于一个简单的网易云音乐的挂钩。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Start App When Enabled、Delete DLL When Disabled、Custom Directory。

## 配置项
- Start App When Enabled（启用时打开云音乐）
 类型：布尔；默认：true
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Delete DLL When Disabled（禁用时删除DLL）
 类型：布尔；默认：true
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Custom Directory（指定目录）
 类型：文本；默认：""
 说明：用于指定文件/目录路径。建议使用稳定的绝对路径并确认权限可访问，避免因路径变化导致功能失效。
## 历史更新
- 11. 修复 MusicOverlay 模式为 Hook 时开启后再开启网易云时不能立即打开 Cloud Music 模块的问题。
- 67. 为 Cloud Music 添加配置项：
- 84. 添加模块：Cloud Music

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
- [ForceTopmost (强制置顶)](./ForceTopmost.md)
- [MemeTrigger (梗触发)](./MemeTrigger.md)

## 相关资料
无
