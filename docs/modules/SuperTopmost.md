# SuperTopmost
超级置顶
[PRO]
分类：Combat
描述：动态设置客户端窗口为超级置顶。（专业版）

## 需求
- 安全级别：不安全模块（谨慎使用）
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：PRO 独有

## 介绍
SuperTopmost（超级置顶）建议先按默认配置运行一段时间，确认对目标窗口/系统行为的影响后，再从关键开关项开始逐步微调。
## 配置项
- Main Window（主窗口）
 类型：布尔；默认：true
 说明：该开关会直接改变系统或窗口行为。建议逐项启用并观察，避免一次开启过多导致排查困难。
- Console Window（控制台窗口）
 类型：布尔；默认：false
 说明：用于控制结果反馈方式。调试阶段建议开启，日常使用可按需要关闭。
## 历史更新
- 20. 【PRO】添加模块：SuperTopmost，动态设置客户端窗口为 UIAccess

## 备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

## 相关命令
无

## 相关模块
- [AntiCapture (反捕获)](./AntiCapture.md)
- [AntiClose (反关闭)](./AntiClose.md)
- [AntiDebug (反调试)](./AntiDebug.md)
- [AntiIntercept (反拦截)](./AntiIntercept.md)
- [AntiSpy (反间谍)](./AntiSpy.md)
- [AntiTaskkill (反进程杀手)](./AntiTaskkill.md)
- [AntiMouseHook (反鼠标钩子)](./AntiMouseHook.md)
- [AntiKeyHook (反键盘钩子)](./AntiKeyHook.md)

## 相关资料
无
