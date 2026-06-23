# ScreenCapture
屏幕捕获
分类：Misc
描述：一个持续捕捉屏幕的后台线程。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
ScreenCapture（屏幕捕获）用于一个持续捕捉屏幕的后台线程。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Backend、Exclude Client。

## 配置项
- Backend（后端）
 类型：枚举；默认："GDI"
 说明：这是选项型配置。默认值 GDI 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：GDI（未收录）；DXGI（未收录）
- Exclude Client（排除客户端）
 类型：枚举；默认："Keep"
 说明：Keep 会保持客户端窗口处于 AntiCapture 防捕获状态，适合需要持续排除客户端画面的场景。如果在 ClickGUI 中关闭 AntiCapture 后又被自动恢复，通知会显示正在使用 ScreenCapture 的来源模块；请先关闭这些模块，再关闭 ScreenCapture。
 可选：Off（关闭）；Slow（缓慢）；Keep（保持）
## 历史更新
- 29. 将屏幕捕获线程单独放到新的模块：Screen Capture，支持DXGI方法
- 58. 添加 HUD Blur 模块，为 HUD 背景添加模糊或者【PRO】液体玻璃效果。需要实时屏幕捕获，会降低性能，但是可以调低频率。

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
