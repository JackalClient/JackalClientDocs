# AntiDebug
反调试
分类：Combat
描述：防止客户端被调试。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
AntiDebug（反调试）会先检测当前是否处于被调试状态，再按配置执行主动防御（清理常见调试器）与被动反应（警告/退出/自毁）。建议先用 `Warn` 验证环境，再切换到更激进的反应策略。
## 配置项
- Async（异步）
 类型：布尔；默认：true
 说明：异步执行反调试检查，减少前台卡顿。调试排障时可临时关闭，便于复现时序。
- Active Defense（主动防御）
 类型：布尔；默认：true
 说明：启用后会主动处理常见调试工具进程/窗口（如 x32dbg、IDA、OllyDbg、WinDbg、CE 等）。
- Check Cooldown（检查冷却）
 类型：数值；默认：500
 说明：反调试轮询间隔。调小可更快响应威胁，调大可降低占用。
- Related File Detection（相关文件探测）
 类型：布尔；默认：true
 说明：检测发布目录中的调试痕迹文件（如 IDA/数据库相关后缀）并作为可疑信号。
- Reaction（反应）
 类型：枚举；默认："Exit"
 说明：检测命中后的动作：`Warn` 仅提示，`Exit` 直接退出，`Self Destruct` 删除客户端本体，`Extinction` 走更彻底卸载流程。
 可选：Warn（警告）；Exit（退出）；Self Destruct（自毁）；Extinction（灭亡）
## 历史更新
- 8. 修复 Anti Debug 报错的问题。
- 4. 修复了 AntiDebug 反调试模块无法击杀部分窗口的问题，并支持异步模式了，以免很卡。

## 备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

## 相关命令
无

## 相关模块
- [AntiCapture (反捕获)](./AntiCapture.md)
- [AntiClose (反关闭)](./AntiClose.md)
- [AntiIntercept (反拦截)](./AntiIntercept.md)
- [AntiSpy (反间谍)](./AntiSpy.md)
- [AntiTaskkill (反进程杀手)](./AntiTaskkill.md)
- [AntiMouseHook (反鼠标钩子)](./AntiMouseHook.md)
- [AntiKeyHook (反键盘钩子)](./AntiKeyHook.md)
- [AutoStart (开机自启)](./AutoStart.md)

## 相关资料
无
