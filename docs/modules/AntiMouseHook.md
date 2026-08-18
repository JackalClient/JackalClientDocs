# AntiMouseHook
反鼠标钩子
分类：Combat
描述：阻止普通的鼠标钩子。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
AntiMouseHook（反鼠标钩子）建议先按默认配置运行一段时间，确认对目标窗口/系统行为的影响后，再从关键开关项开始逐步微调。
启用模块时鼠标可能短暂卡顿，这是防护初始化过程中的正常现象。客户端会显示持续 5 秒的提示，请等待初始化完成。
## 配置项
- bind（绑定）
 类型：按键/复合；默认：`Keybind(VK_RMENU, 'M')`
 说明：该快捷键用于即时触发功能。建议避免与系统或常用软件冲突。
## 历史更新
- 启用模块时新增短暂鼠标卡顿提示。

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
- [AntiKeyHook (反键盘钩子)](./AntiKeyHook.md)
- [AutoStart (开机自启)](./AutoStart.md)

## 相关资料
无
