# Hidden
隐藏至托盘
分类：Misc
描述：隐藏主窗口，最小化至托盘。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
Hidden（隐藏至托盘）用于隐藏主窗口，最小化至托盘。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Hide Console、Auto Hide Client When GUI Closed、Disable Client Keybind When Hidden。

## 配置项
- Hide Console（隐藏控制台）
 类型：布尔；默认：true
 说明：用于选择结果反馈方式。默认值 true 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Auto Hide Client When GUI Closed（GUI 关闭时自动隐藏客户端）
 类型：布尔；默认：false
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Disable Client Keybind When Hidden（隐藏时禁用客户端按键）
 类型：布尔；默认：true
 说明：用于设置快捷键触发。建议避免与系统或常用软件冲突，优先使用组合键提高可控性。
- Disable Tray Tip（禁用托盘提示）
 类型：布尔；默认：false
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
## 历史更新
- 40. 为 Hidden 添加配置：
- 24. 为 Hidden 模块添加配置：
- 17. 添加模块 Hidden， 用于隐藏客户端。你可以切换托盘中的 Visible 选项以显示或隐藏客户端。

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
