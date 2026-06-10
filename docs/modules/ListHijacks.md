# ListHijacks
劫持调查
分类：Registry
描述：枚举注册表内所有的映像劫持。

## 需求
- 安全级别：常规模块
- 权限需求：管理员
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
ListHijacks（劫持调查）用于枚举注册表内所有的映像劫持。
适合在日常管理与自动化场景中按需启用。
建议先以管理员身份运行客户端。
初次使用可优先调整：Notify Mode。

## 配置项
- Async（异步）
 类型：布尔；默认：true
 说明：用于控制是否异步处理。默认值 true 通常能减少主线程卡顿；若你遇到并发相关问题，可回退到更保守设置测试。
- Auto Console（自动启用控制台）
 类型：布尔；默认：true
 说明：用于选择结果反馈方式。默认值 true 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Notify Mode（通知模式）
 类型：枚举；默认："Console Output"
 说明：用于选择结果反馈方式。默认值 Console Output 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：Console Output（控制台输出）；Notify（通知）
## 历史更新
- 16. 修复 ListHijacks 的 AutoConsole 无效的问题。
- 25. 添加新模块：List Hijacks。枚举所有的映像劫持。

## 备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

## 相关命令
无

## 相关模块
- [SecureLogin (安全登录)](./SecureLogin.md)
- [KillHijacks (清除劫持)](./KillHijacks.md)
- [CrashKey (快捷蓝屏)](./CrashKey.md)
- [NoCmd (禁命令提示符)](./NoCmd.md)
- [NoPowerShell (禁PowerShell)](./NoPowerShell.md)
- [NoTaskmgr (禁任务管理器)](./NoTaskmgr.md)
- [NoRegedit (禁注册表编辑器)](./NoRegedit.md)
- [NoDefender (解除防御)](./NoDefender.md)

## 相关资料
无
