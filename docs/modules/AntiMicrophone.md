# AntiMicrophone
反麦克风
分类：Misc
描述：自动将采集设备静音，防止录音。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
AntiMicrophone（反麦克风）用于自动将采集设备静音，防止录音。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Check Cooldown (ms)、Mode、Notify。

## 配置项
- Async（异步）
 类型：布尔；默认：true
 说明：用于控制是否异步处理。默认值 true 通常能减少主线程卡顿；若你遇到并发相关问题，可回退到更保守设置测试。
- Check Cooldown (ms)（检查冷却 (毫秒)）
 类型：数值；默认：1000U
 说明：用于控制检测/刷新/动画节奏。默认值 1000U 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Mode（模式）
 类型：枚举；默认："Mute"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 Mute ，确认稳定后再逐项切换比较效果。
 可选：Mute（静音）
- Notify（通知）
 类型：布尔；默认：true
 说明：用于选择结果反馈方式。默认值 true 适合大多数场景；若你不想打扰可改为更安静的输出方式。
## 历史更新
- 47. 让 AntiSpy 的 AntiMicrophone 为 Mute 时禁用模块自动给麦克风取消静音。

## 备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

## 相关命令
无

## 相关模块
- [Active (活动)](./Active.md)
- [AutoSpeak (自动讲述)](./AutoSpeak.md)
- [Console (控制台)](./Console.md)
- [Shell (命令行)](./Shell.md)
- [QuickCommand (快速命令)](./QuickCommand.md)
- [ForceTopmost (强制置顶)](./ForceTopmost.md)
- [MemeTrigger (梗触发)](./MemeTrigger.md)
- [Encryptor (加密器)](./Encryptor.md)

## 相关资料
无
