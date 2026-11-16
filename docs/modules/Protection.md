# Protection
自保护
分类：Combat
描述：使用 KSwordARK 驱动为客户端启用 PPL/PP 进程保护。

## 需求
- 可用状态：可用（需要 KSwordARK Driver 扩展）
- 安全级别：中高风险
- 需要管理员权限：是
- 驱动依赖：是（KSwordARK）
- 是否需要联网：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
Protection（自保护）使用 KSwordARK 的 `SET_PPL_LEVEL` 为客户端进程设置 PPL/PP 保护，并可通过驱动清除自身保护。开启后，常见用户态结束进程、写内存、远程建线程等操作会受到限制；关闭模块时会把保护字节清回 0。

## 配置项
- Block Child Processes（阻止子进程创建）
 类型：布尔；默认：false
 说明：开启后使用完整 PP 保护，保护更强但可能阻止客户端创建子进程；默认使用 PPL-Light，兼容性更好。

## 备注
- 需要管理员权限和 KSwordARK 驱动。驱动加载失败时模块会自动回滚开关。
- 对系统关键进程或安全软件设置保护可能触发蓝屏、系统不稳定或安全软件拦截，请先在小范围验证。
- `/ppl set <target> none` 可手动清除目标保护。

## 相关命令
- `/ppl set <hprocess/pid/procname> <level>`

## 相关模块
- [PPLButcher (解除进程保护)](./PPLButcher.md)
- [ForceTerminator (暴力送终)](./ForceTerminator.md)

## 相关资料
无
