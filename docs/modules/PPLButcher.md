# PPLButcher
解除进程保护
分类：Process
描述：通过 KSwordARK 移除受保护进程的 PPL/PP 保护。

## 需求
- 可用状态：可用（需要 KSwordARK Driver 扩展）
- 安全级别：恶意模块（高风险）
- 需要管理员权限：是
- 驱动依赖：是（KSwordARK）
- 是否需要联网：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
PPLButcher（解除进程保护）扫描当前可见的 PPL/PP 进程，逐个把 `EPROCESS.Protection` 和签名级别清零，使目标可以再次被普通方式打开。执行后会重新扫描并显示成功数量和剩余 PPL 数量。

## 配置项
- Only Kill Invalid（仅处理无效进程）
 类型：布尔；默认：false
 说明：开启后只处理映像路径为空或文件不存在的 PPL 进程，适合排查异常隐藏对象；关闭时处理所有检测到的 PPL 进程。

- z_List（PPL 列表）
 类型：按钮；在控制台执行 `/ppl list`，查看当前 PPL 进程。

## 备注
- 需要管理员权限和 KSwordARK 驱动。
- 清除系统或安全软件的 PPL 保护会显著降低系统安全性，并可能触发自我保护、蓝屏或系统不稳定。
- PID ≤ 4 的 Idle/System 不会被处理。
- 清除 Protection 字节不会终止进程，也不会改变其令牌权限。

## 相关命令
- `/ppl list`
- `/ppl set <hprocess/pid/procname> <level>`

## 相关模块
- [Protection (自保护)](./Protection.md)
- [ForceTerminator (暴力送终)](./ForceTerminator.md)

## 相关资料
视频科普：[揭秘 Windows「PPL」: 进程无法被终止的秘密](https://www.bilibili.com/video/BV1NkR5BpEWx)
