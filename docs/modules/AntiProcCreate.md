# AntiProcCreate
禁止创建进程
分类：Process
描述：通过 KSwordARK 进程创建回调阻止或仅允许指定进程名创建。

## 需求
- 可用状态：可用（需要 KSwordARK Driver 扩展）
- 安全级别：中高风险（全局回调）
- 需要管理员权限：是
- 驱动依赖：是（KSwordARK）
- 是否需要联网：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
AntiProcCreate 通过 KSwordARK 的进程创建回调规则拦截新进程创建。它不再使用旧的全局系统开关，而是按进程名配置：可以只阻止列表中的进程，也可以只允许列表中的进程并拒绝其它创建。关闭模块时会清空本模块下发的回调规则。

## 配置项
- Mode（模式）
 类型：枚举；默认："Block Listed"
 可选：Block Listed（只阻止列表中的进程）；Allow Listed（只允许列表中的进程，拒绝其它创建）

- Process Names（进程名）
 类型：StringList；默认：[]
 说明：填写进程映像名，例如 `notepad.exe`。不支持路径和通配符。Block Listed 模式下命中即拒绝；Allow Listed 模式下列表为空会导致所有新进程被拒绝，请先填写放行列表。

## 备注
- 需要管理员权限和 KSwordARK 驱动。
- 回调规则是驱动级全局规则。启用本模块会替换 KSwordARK 当前的全部回调规则，关闭时也会清空，与同驱动的其它回调规则不能同时保留。
- 放行系统关键进程（如 `csrss.exe`、`winlogon.exe`、`services.exe`、`smss.exe`）前不要使用 Allow Listed 模式，否则可能阻断登录或系统启动。
- 只影响新创建进程，对已运行进程无效。

## 相关命令
无

## 相关模块
- [ForceTerminator (暴力送终)](./ForceTerminator.md)
- [HideProcess (隐藏进程)](./HideProcess.md)

## 相关资料
无
