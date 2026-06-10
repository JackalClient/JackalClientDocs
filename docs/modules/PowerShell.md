# PowerShell
PowerShell
分类：Process
描述：打开 PowerShell。

## 需求
- 安全级别：常规模块
- 恶意标记：否
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定
- 版本属性：普通可用

## 介绍
PowerShell 用于拉起系统 PowerShell 终端，触发后自动关闭模块。
启用 Run As Admin 时会优先尝试管理员方式启动；未启用时按普通方式直接打开。

## 配置项
- Run As Admin（以管理员身份运行）
  类型：布尔；默认：false；说明：开启后在非管理员环境下会触发管理员启动流程，适合需要执行高权限命令时使用。
- No Wow64 Redirection（禁用 Wow64 重定向）
  类型：布尔；默认：true；说明：开启后临时关闭 Wow64 重定向再启动 PowerShell，降低系统位数差异带来的路径歧义。

## 历史更新
- 2. 修复 NoCmd、NoPowerShell、NoTaskmgr、NoRegedit 无效的问题。

## 备注
如果系统启用了 NoPowerShell 限制策略，PowerShell 可能被立即拦截或关闭，建议先检查限制模块状态。

## 相关命令
无

## 相关模块
- [Cmd (命令提示符)](./Cmd.md)
- [SuperCmd (超级命令提示符)](./SuperCmd.md)
- [Regedit (注册表)](./Regedit.md)
- [Taskmgr (任务管理器)](./Taskmgr.md)

## 相关资料
无