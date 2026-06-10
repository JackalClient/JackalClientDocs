# AutoSpeak
自动讲述
分类：Misc
描述：自动说出一些话。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
AutoSpeak（自动讲述）用于自动说出一些话。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Main Mode、Smart Mode Gap (ms)、Translator (Except Main Mode)。

## 配置项
- Main Mode（主模式）
 类型：枚举；默认："Off"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 Off ，确认稳定后再逐项切换比较效果。
 可选：Off（关闭）；Periodic（周期性）；Random（随机）；Smart（智能）
- Periodic Interval (ms)（周期性间隔 (毫秒)）
 类型：数值；默认：10000L
 说明：用于控制检测/刷新/动画节奏。默认值 10000L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Random Min Interval (ms)（最小随机间隔 (毫秒)）
 类型：数值；默认：20000L
 说明：用于控制检测/刷新/动画节奏。默认值 20000L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Random Max Interval (ms)（最大随机间隔 (毫秒)）
 类型：数值；默认：120000L
 说明：用于控制检测/刷新/动画节奏。默认值 120000L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Smart Mode Gap (ms)（智能模式间隔（毫秒））
 类型：数值；默认：1000L
 说明：这是该模块的核心行为开关。默认值 1000L 通常更稳，建议先验证默认策略再尝试其他模式。
- Translator (Except Main Mode)（翻译器 (除主模式外)）
 类型：枚举；默认："Off"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 Off ，确认稳定后再逐项切换比较效果。
 可选：Off（关闭）；Chinese（中文）；English（英语）；Exchange（交换）
- Speak Actionbar（念行为栏）
 类型：布尔；默认：false
 说明：这是该模块的核心行为开关。默认值 false 通常更稳，建议先验证默认策略再尝试其他模式。
- Speak Title（念标题）
 类型：布尔；默认：true
 说明：用于选择结果反馈方式。默认值 true 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Speak Subtitle（念副标题）
 类型：布尔；默认：false
 说明：用于选择结果反馈方式。默认值 false 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Speak Chatter（念弹幕）
 类型：布尔；默认：false
 说明：用于选择结果反馈方式。默认值 false 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Speak Dialog (Auto Detect)（念对话框 (自动检测)）
 类型：布尔；默认：true
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Dialog Text Max Speak Length（对话框文本最大朗读长度）
 类型：数值；默认：100U
 说明：这是数值型配置。默认值 100U 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Skip Speaking Dialog Text Same As Previous（朗读跳过和上一次相同的对话框文本）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
## 历史更新
- 33. 为 AutoSpeak 添加配置：
- 28. 为 AutoSpeak 模块添加配置：
- 14. 添加模块：Auto Speak（自动讲述）。

## 备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

## 相关命令
无

## 相关模块
- [Active (活动)](./Active.md)
- [AntiMicrophone (反麦克风)](./AntiMicrophone.md)
- [Console (控制台)](./Console.md)
- [Shell (命令行)](./Shell.md)
- [QuickCommand (快速命令)](./QuickCommand.md)
- [ForceTopmost (强制置顶)](./ForceTopmost.md)
- [MemeTrigger (梗触发)](./MemeTrigger.md)
- [Encryptor (加密器)](./Encryptor.md)

## 相关资料
无
