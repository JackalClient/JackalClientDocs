# Topmost
窗口置顶
分类：Window
描述：立即置顶前端窗口。你需要分配一个快捷键。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
Topmost（置顶）用于快速切换窗口置顶状态。建议先限定目标来源，避免误操作到无关窗口。
## 配置项
- Target（目标）
 类型：枚举；默认："Foreground"
 说明：置顶/取消置顶的目标窗口来源。
 可选：Foreground（前端）；PointAt（指向）
- Operation（操作）
 类型：枚举；默认："Auto"
 说明：执行模式：自动切换、强制置顶或强制取消置顶。
 可选：Auto（自动）；Topmost（置顶）；Untopmost（取消置顶）
- Notify（通知）
 类型：布尔；默认：true
 说明：执行后是否给出提示。批量操作时可关闭减少干扰。
## 历史更新
- 23. 添加一个设定：如果 GUI 中的更好的置顶（Better Topmost）启用，按下 Win+D 快捷键后客户端会自动获得焦点以免置顶了却被最小化。
- 33. 将 Title 模块的 Check Topmost 改为只设置窗口置顶，添加 Auto Focus 配置项（这个才是设置焦点）
- 4. 添加模块： Topmost， 置顶/取消置顶目标窗口。

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
