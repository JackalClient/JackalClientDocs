# Kill360
杀数字
分类：Process
描述：通过 KSwordARK 强制结束 360 安全相关进程。

## 需求
- 可用状态：可用（需要 KSwordARK Driver 扩展）
- 安全级别：恶意模块（高风险）
- 需要管理员权限：是
- 驱动依赖：是（KSwordARK）
- 是否需要联网：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
Kill360（杀数字）会先处理 360 广告进程，再按固定清单或安装目录匹配 360 进程，并通过 KSwordARK 强制结束。驱动会在终止前清除目标的 PP/PPL 保护。

## 配置项
- 360 Process Detection Method（360 进程检测方法）
 类型：枚举；默认："Directory"
 可选：Fixed List（固定清单）；Directory（安装目录）

## 备注
- 需要管理员权限和 KSwordARK 驱动。
- 360 的自我保护、驱动和回调可能拦截终止；本模块只做进程终止，不移除其回调或驱动。
- 结束安全软件进程会降低系统安全性，并可能触发系统保护或安全软件自动恢复，请在隔离环境验证。
- 模块执行完成后自动关闭。

## 相关命令
无

## 相关模块
- [KillHuorong (杀火绒)](./KillHuorong.md)
- [ForceTerminator (暴力送终)](./ForceTerminator.md)

## 相关资料
无
