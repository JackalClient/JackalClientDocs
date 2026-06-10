# DiskMissing
磁盘丢失
分类：File
描述：制造磁盘丢失的假象。

## 需求
- Unsafe：否
- Malicious：否
- 需要管理员权限：否
- 需要系统权限：否
- 需要 TrustedInstaller 权限：否
- 驱动依赖：否
- 是否 WIP：否
- 是否需要联网：否
- 版本属性：普通可用

## 介绍
闲得没事做的模块。
DiskMissing 通过发送外壳目录变更信号，让系统或资源管理器产生 “某些盘符已消失” 的表象。
启用时会立即执行一次；如果 `Keep` 开启，模块会在后台按冷却周期重复发送信号，持续维持这种状态。

## 配置项
- Keep（保持）
类型：布尔；默认：true；作用：开启后周期性重复发送丢盘信号；关闭时仅在启用瞬间执行一次。建议：临时演示用关闭，持续效果用开启。

- Signal Cooldown (ms)（发送信号冷却 (毫秒)）
类型：整数；默认：80；作用：`Keep` 模式下两次信号发送间隔。建议：值越小效果越“持续”，但事件更频繁；一般 80~300 足够。

- Missing Drives（丢失的磁盘）
类型：枚举；默认：System Drive；作用：选择对哪些盘符发送丢失信号。可选项：System Drive（系统盘）、All（所有）、Custom（自定义）。建议：先从 `Custom` 小范围验证。

- Custom Missing Drives（自定义丢失的磁盘）
类型：文本；默认："D;E"；作用：当 `Missing Drives=Custom` 时生效，使用分号分隔盘符字母。建议：只填盘符字母，不要带路径。

## 备注
该模块主要影响外壳层感知与显示，不等同于真实卸载磁盘。
如果只需短时触发一次效果，关闭 `Keep` 更可控。

## 相关命令
无

## 相关模块
- [RootProgram (根目录程序)](./RootProgram.md)
- [FileManager (文件管理器)](./FileManager.md)
- [FileMonitor (文件监视)](./FileMonitor.md)

## 相关资料
无