# Privileges
特权
分类：Combat
描述：获得各项可用的特权。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
Privileges（特权）建议先按默认配置运行一段时间，确认对目标窗口/系统行为的影响后，再从关键开关项开始逐步微调。
## 配置项
- Notify（通知）
 类型：布尔；默认：true
 说明：用于控制结果反馈方式。调试阶段建议开启，日常使用可按需要关闭。
- bind（绑定）
 类型：按键/复合；默认：`{ { "Keybind", {VK_RMENU, 'P' } }`}
 说明：该快捷键用于即时触发功能。建议避免与系统或常用软件冲突。
## 历史更新
- 7. 另设需要系统和 TrustedInstaller 权限的模块，将Config中的 Admin Modules Check Admin改为Check Module Privileges Before Turning On。
- 19. Privileges: 现在分开了不同权限下的特权列表，以免出现不需要的权限也要去获取导致失败的情况。现在显示获取特权成功数了。

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
