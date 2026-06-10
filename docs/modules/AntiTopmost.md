# AntiTopmost
反置顶
分类：Window
描述：抵御其他置顶窗口。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
AntiTopmost（反置顶）用于清理“强制置顶”窗口对前台操作的干扰，可选择温和处理（去置顶/置底）或激进处理（关窗/结束进程）。建议先使用温和策略。
## 配置项
- Only Check Foreground（只检查前端）
 类型：布尔；默认：false
 说明：仅处理当前前台置顶窗口。副作用最小，建议先用此模式验证。
- Auto Untopmost（自动取消置顶）
 类型：布尔；默认：true
 说明：检测到目标为置顶窗口时，自动取消置顶属性。
- Auto Bottom（自动置底）
 类型：布尔；默认：true
 说明：在取消置顶后再尝试下沉到底层，进一步降低遮挡概率。
- Violence Policy（武力策略）
 类型：枚举；默认："Off"
 说明：激进处理策略：`Off` 不额外处理，`Close Window` 尝试关闭窗口，`Kill Process` 直接结束进程。
 可选：Off（关闭）；Close Window（关闭窗口）；Kill Process（结束进程）
- Off（关闭）
 类型：文本；默认："Close Window", "Kill Process"
 说明：兼容字段（旧配置残留），可忽略。
- Notify Kill（通知击杀）
 类型：布尔；默认：true
 说明：激进策略触发后是否提示处理结果（包括击杀失败原因）。
## 历史更新
无（HISTORY 中暂无明确记录）

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
