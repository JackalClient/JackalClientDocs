# AntiProcCreate
禁止创建进程
分类：Process
描述：使用驱动程序阻止新进程的创建。

## 需求
- Unsafe：否
- Malicious：否
- 需要管理员权限：否
- 需要系统权限：否
- 需要 TrustedInstaller 权限：否
- 驱动依赖：是（Kernel1.sys）
- 是否 WIP：否
- 是否需要联网：否
- 版本属性：普通可用

## 介绍
AntiProcCreate 会在驱动层拦截新进程创建请求。开启后，系统中新启动的程序会被阻止（历史版本描述为可触发“打印机缺纸”类失败现象）。
它更适合短时封控场景，例如防止目标环境继续拉起新进程。关闭模块后会撤销拦截状态。

## 配置项
无（该模块在默认配置中没有独立可调参数）

## 备注
模块启用时若找不到 Kernel1.sys，或驱动加载失败，会自动回滚开关状态。
由于它影响的是“新建进程”，不是“已存在进程”，因此对当前已运行程序不会立即生效。

## 相关命令
无

## 相关模块
- [Elevator (电梯)](./Elevator.md)
- [ForceTerminator (暴力送终)](./ForceTerminator.md)
- [ProcessManager (进程管理器)](./ProcessManager.md)

## 相关资料
无