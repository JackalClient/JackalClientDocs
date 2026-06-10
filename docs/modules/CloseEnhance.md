# CloseEnhance
关闭增强
分类：Window
描述：暂无描述

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
CloseEnhance（关闭增强）建议先按默认配置运行一段时间，确认对目标窗口/系统行为的影响后，再从关键开关项开始逐步微调。
## 配置项
- Method（方法）
 类型：枚举；默认："EndSession"
 说明：该项决定执行策略。建议先用默认策略验证稳定性，再逐个切换比较效果与副作用。
 可选：EndSession（发送结束会话消息）；KillProcess（击杀进程）；EndTask（暴力结束任务）
- Exclude Self（排除自身）
 类型：布尔；默认：true
 说明：该项会影响模块行为，建议基于默认值小步调整。
## 历史更新
- 13. 为 CloseEnhance 模块的 Method 添加一种方式： EndTask。
- 2. 为 Close Enhance 添加配置：
- 2. 为 Close Enhance 添加配置项：

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
