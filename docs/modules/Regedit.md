# Regedit
注册表
分类：Process
描述：打开注册表编辑器。

## 需求
- 安全级别：常规模块
- 恶意标记：否
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定
- 版本属性：普通可用

## 介绍
Regedit 用于管理注册表编辑器窗口：启用时打开或聚焦 `regedit.exe`，关闭时尝试结束该进程。
模块状态会与进程状态自动同步，手动关闭/开启注册表编辑器时，模块开关会随之更新。

## 配置项
- No Wow64 Redirection（禁用 Wow64 重定向）
  类型：布尔；默认：true；说明：开启后先关闭 Wow64 重定向再启动 `regedit.exe`，在混合位数环境下更稳定。

## 历史更新
- 5. 优化 taskmgr/regedit/cmd 禁用检测，减少失败刷屏。
- 2. 修复 NoCmd、NoPowerShell、NoTaskmgr、NoRegedit 无效的问题。

## 备注
若 Regedit 无法打开，常见原因是被 NoRegedit 或组策略禁用。排障时建议先确认限制策略状态。

## 相关命令
- `/regedit [params...]`：在注册表编辑器中定位指定项/值。
- `/showir &lt;params...&gt;`：注册表定位辅助命令。

## 相关模块
- [NoRegedit (禁用注册表)](./NoRegedit.md)
- [NoCmd (禁用命令提示符)](./NoCmd.md)
- [NoPowerShell (禁用 PowerShell)](./NoPowerShell.md)
- [Taskmgr (任务管理器)](./Taskmgr.md)

## 相关资料
无