# Messenger
消息通信
分类：Window
描述：接收到指定窗口消息时通知。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
Messenger（消息通信）建议先按默认配置运行一段时间，确认对目标窗口/系统行为的影响后，再从关键开关项开始逐步微调。
## 配置项
- Show Parameter Details（是否显示参数的详细信息。将会自动解析。）
 类型：布尔；默认：true
 说明：该项会影响模块行为，建议基于默认值小步调整。
- Blacklist Enabled（黑名单启用）
 类型：布尔；默认：true
 说明：这是筛选名单项，用于限制作用范围。建议先小范围试运行，再逐步扩充名单。
- Blacklist (Sep With Semicolon)（消息黑名单 (用分号分隔)）
 类型：文本；默认："WM_NULL;WM_MOUSEFIRST;WM_NCHITTEST;WM_SETCURSOR;WM_GETTEXT;WM_WINDOWPOSCHANGING;WM_WINDOWPOSCHANGED ...
 说明：这是筛选名单项，用于限制作用范围。建议先小范围试运行，再逐步扩充名单。
- Whitelist Enabled（白名单启用）
 类型：布尔；默认：false
 说明：这是筛选名单项，用于限制作用范围。建议先小范围试运行，再逐步扩充名单。
- Whitelist (Sep With Semicolon)（消息白名单 (用分号分隔)）
 类型：文本；默认：""
 说明：这是筛选名单项，用于限制作用范围。建议先小范围试运行，再逐步扩充名单。
- Notify Mode（通知模式）
 类型：枚举；默认："Console Output"
 说明：用于控制结果反馈方式。调试阶段建议开启，日常使用可按需要关闭。
 可选：Console Output（控制台输出）；Notify（通知）；Chatter（弹幕）；Actionbar（行为栏）；Title（标题）
## 历史更新
- 24. 添加模块： Messenger，通知收到的特定窗口消息。

## 备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

## 相关命令
无

## 相关模块
- [WindowTags (窗口标签)](./WindowTags.md)
- [WindowHighlight (窗口高亮)](./WindowHighlight.md)
- [WindowESP (窗口透视)](./WindowESP.md)
- [Tracers (追踪线)](./Tracers.md)
- [TargetESP (目标透视)](./TargetESP.md)
- [TargetHUD (目标显示)](./TargetHUD.md)
- [WindowMaster (窗口大师)](./WindowMaster.md)
- [PrivateWindow (隐私窗口)](./PrivateWindow.md)

## 相关资料
无
