# NoTaskmgr
禁任务管理器
分类：Registry
描述：暂无描述

## 需求
- 安全级别：常规模块
- 权限需求：管理员
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
NoTaskmgr（禁任务管理器）用于暂无描述。
适合在日常管理与自动化场景中按需启用。
建议先以管理员身份运行客户端。
初次使用可优先调整：Method。

## 配置项
- Method（方法）
 类型：枚举；默认："WINAPI"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 WINAPI ，确认稳定后再逐项切换比较效果。
 可选：WINAPI（未收录）；Reg（未收录）
- Keep（保持）
 类型：布尔；默认：false
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
## 历史更新
- 2. 修复了 NoCmd, NoPowerShell, NoTaskmgr, NoRegedit 无效的问题。

## 备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

## 相关命令
无

## 相关模块
- [SecureLogin (安全登录)](./SecureLogin.md)
- [ListHijacks (劫持调查)](./ListHijacks.md)
- [KillHijacks (清除劫持)](./KillHijacks.md)
- [CrashKey (快捷蓝屏)](./CrashKey.md)
- [NoCmd (禁命令提示符)](./NoCmd.md)
- [NoPowerShell (禁PowerShell)](./NoPowerShell.md)
- [NoRegedit (禁注册表编辑器)](./NoRegedit.md)
- [NoDefender (解除防御)](./NoDefender.md)

## 相关资料
无
