# Mute
静音
分类：Misc
描述：让当前音频设备静音。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
Mute（静音）用于控制当前系统输出设备的静音状态。模块开启时按配置进入静音，关闭时按配置解除静音或恢复音量。

该模块和 Volume 的“静音快捷键”行为不同：Mute 是一个可开关的模块，Amount 模式会在开启时记录静音前的系统音量，关闭时可自动恢复；Volume 里的静音按键更偏向一次性切换系统或进程静音状态。

## 配置项
- Mode（模式）
 类型：枚举；默认："Status"
 说明：决定 Mute 开启/关闭时如何处理系统声音。
 可选：Status（静音状态）；Amount（音量数值）；Both（两者都设置）

- Amount Mode Restore Volume（Amount 模式恢复音量）
 类型：布尔；默认：true
 说明：仅在 Mode 包含 Amount 行为时生效。开启后，Mute 启用时会记录当前系统音量并把系统音量设为 0；关闭 Mute 时会尝试恢复到记录的音量。关闭后，退出 Mute 时不会自动恢复音量数值。

## 模式说明
- Status：使用系统静音状态。开启 Mute 时设置为静音，关闭 Mute 时取消静音，不直接修改音量百分比。
- Amount：通过音量数值实现静音。开启 Mute 时记录当前音量并把系统音量设为 0，关闭 Mute 时根据 `Amount Mode Restore Volume` 决定是否恢复原音量。
- Both：同时设置系统静音状态和音量数值。适合希望静音状态与 0 音量同时生效的场景。

## 历史更新
- 40. 修改 Mute 模块配置：`Restore Volume` 重命名为 `Amount Mode Restore Volume`；新增 `Mode`，可选 `Status`、`Amount`、`Both`。

## 备注
- Amount 或 Both 模式会写入并读取 `Volume Before Mute` 记录，用于关闭模块时恢复音量。
- 如果 Volume 模块开启了 `Limit System Volume`，Mute 的 Amount 行为会自动关闭该限制，避免音量被限制规则阻止设置为 0。
- 该模块作用于系统当前音频输出设备；若功能未生效，优先检查系统音频设备状态、Windows 音量接口可用性，以及是否有其他音量管理软件同时接管。

## 相关命令
无

## 相关模块
- [Volume (音量)](./Volume.md)
- [AntiMicrophone (反麦克风)](./AntiMicrophone.md)
