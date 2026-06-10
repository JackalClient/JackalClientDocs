# Ruler
标尺
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
Ruler（标尺）用于测量窗口尺寸、边界和间距。建议先保证线条对比度，再按需打开信息项。
## 配置项
- Line Color（线条颜色）
 类型：枚举；默认："Red"
 说明：标尺线条颜色。建议使用高对比色。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Line Width（线条宽度）
 类型：数值；默认：2
 说明：标尺线条粗细。
- Info Font Size（信息字号）
 类型：数值；默认：20
 说明：距离/尺寸文字字号。
- Show Size（展示尺寸）
 类型：布尔；默认：true
 说明：显示目标窗口宽高。
- Mark Sides（标记各条边）
 类型：布尔；默认：true
 说明：显示边缘标记，便于快速对齐。
- Measure Distances（丈量距离）
 类型：布尔；默认：true
 说明：显示窗口间距离测量信息。
- Hide When Menu On（菜单打开时不显示）
 类型：布尔；默认：true
 说明：菜单打开时隐藏标尺，避免覆盖设置界面。
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
