# SetPassword
篡改密码
分类：Combat
描述：清除或设置计算机密码。（需要管理员）

## 需求
- 安全级别：恶意模块（高风险）
- 权限需求：管理员
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
SetPassword（篡改密码）会调用系统 `net user` 修改当前用户口令或清空口令。该模块影响直接且高风险，建议只在明确授权场景使用，并先确认管理员权限可用。
## 配置项
- Async（异步）
 类型：布尔；默认：true
 说明：异步执行改密命令，避免前台卡顿。
- Async Single Instance（异步单例）
 类型：布尔；默认：true
 说明：防止上一次改密任务未结束时重复触发，避免并发执行冲突。
- Just Clear（清除就行）
 类型：布尔；默认：true
 说明：启用后把密码置空；关闭后按自定义密码设置。
- Or Custom Password:（或者自定义密码:）
 类型：文本；默认："123456"
 说明：`Just Clear` 关闭时写入的目标密码。建议避免弱口令。
- Auto Fill Username（自动填写用户名）
 类型：布尔；默认：true
 说明：优先使用当前登录用户名作为目标账户。
- Or Custom Username:（或者自定义用户名:）
 类型：文本；默认："Administrator"
 说明：自定义目标用户名。当前实现中此项影响有限，实际仍主要针对当前用户。
- Close Menu（关闭菜单）
 类型：布尔；默认：true
 说明：执行前自动关闭菜单，减少前台干扰。
## 历史更新
无（HISTORY 中暂无明确记录）

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
