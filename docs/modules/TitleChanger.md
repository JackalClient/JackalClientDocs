# TitleChanger
标题修改
分类：Window
描述：自动修改前端窗口的标题。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
TitleChanger（标题修改）可按固定值或替换规则重写窗口标题，适合演示或脱敏。先做词替换验证，再考虑持续保持模式。
## 配置项
- Keep（保持）
 类型：布尔；默认：true
 说明：持续维持修改后的标题。关闭时通常只改一次。
- Check Cooldown（检查冷却）
 类型：数值；默认：250L
 说明：标题巡检间隔，仅在持续模式下影响明显。
- Pattern（样式）
 类型：枚举；默认："Word Replace"
 说明：标题修改方式（固定替换或词替换等）。建议先用词替换，风险更低。
 可选：Clear（清空）；Fixed（固定）；Random（随机）；Timestamp（时间戳）；Word Replace（单词替换）
- Target（目标）
 类型：枚举；默认："Foreground"
 说明：指定修改哪个窗口标题。
 可选：Foreground（前端）；PointAt（指向）
- Fixed Title（固定标题）
 类型：文本；默认："Chrome Legacy Window"
 说明：固定写入的标题文本。避免使用过长字符串以免被截断。
- Word Replace Old（单词替换旧词）
 类型：文本；默认："LiquidBounce"
 说明：要被替换的原词。
- Word Replace New（单词替换新词）
 类型：文本；默认："WaterShadow"
 说明：替换后的新词。
## 历史更新
- 32. 添加模块： TitleChanger，根据规则自动修改前端窗口标题。

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
