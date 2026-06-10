# MinecraftUtils
MC功能
分类：Control
描述：一些MC上的实用功能。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
MinecraftUtils（MC功能）用于一些MC上的实用功能。
适合键鼠行为控制、输入增强和自动化操作场景。
初次使用可优先调整：Key Input Method、Log Parser Notify、Log Parser Update Cooldown (ms)。

## 配置项
- Auto Sprint (Forward)（自动疾跑 (前进)）
 类型：布尔；默认：true
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Auto Sprint (Attack)（自动疾跑 (攻击)）
 类型：布尔；默认：true
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- In Game Detection（游戏中检测方式）
 类型：枚举；默认："Auto"
 说明：这是选项型配置。默认值 Auto 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Auto（自动）；Cursor Visibility（光标可见性）；Mouse Capture（鼠标捕获）；Window Center（窗口中心）
- Window Center Radius（窗口中心半径）
 类型：数值；默认：100.0f
 说明：用于细调显示样式和间距。默认值 100.0f 通常是平衡视觉效果与紧凑度的设置，建议小步调整并实时观察。
- Key Input Method（按键输入方式）
 类型：枚举；默认："SendInput"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 SendInput ，确认稳定后再逐项切换比较效果。
 可选：SendInput（未收录）；WMessage（窗口消息）；Simulation（模拟）
- Save Move Keys (PRO)（保存移动按键 （专业版））
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Save Move Keys Release Interval (ms)（保存移动按键释放间隔（毫秒））
 类型：数值；默认：10L
 说明：用于控制检测/刷新/动画节奏。默认值 10L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Log Parser Utilities（日志解析功能）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Log Parser UTF-8（日志解析使用UTF-8编码）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Log Parser Notify（日志解析通知）
 类型：布尔；默认：false
 说明：用于选择结果反馈方式。默认值 false 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Log Parser Update Cooldown (ms)（日志解析更新冷却（毫秒））
 类型：数值；默认：300L
 说明：用于控制检测/刷新/动画节奏。默认值 300L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Log Cache Max Lines（日志缓存最大行数）
 类型：数值；默认：32L
 说明：这是数值型配置。默认值 32L 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Log Game Chat Output Mode (PRO)（日志游戏聊天输出模式（专业版））
 类型：枚举；默认："Notify"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 Notify ，确认稳定后再逐项切换比较效果。
 可选：Off（关闭）；Notify（通知）；Chatter（弹幕）；Title（标题）；Speak（讲述）；Island（岛）；Real Chatter（真弹幕）
- Log Game Chat Chatter Type（日志游戏聊天弹幕类型）
 类型：枚举；默认："Top"
 说明：用于选择结果反馈方式。默认值 Top 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：Scroll（滚动）；Top（顶端）；Bottom（底部）；Reverse（颠倒）；Horizontal（横向）；Vertical（纵向）；Random（随机）
- Log Game Chat Chatter Color（日志游戏聊天弹幕颜色）
 类型：枚举；默认："Colorful"
 说明：用于选择结果反馈方式。默认值 Colorful 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Log Game Chat Speak Translator（日志游戏聊天讲述翻译）
 类型：布尔；默认：false
 说明：这是开关型配置。默认值 false 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Log Game Chat Output Filter（日志游戏聊天输出过滤）
 类型：布尔；默认：true
 说明：用于限定作用范围，避免误触发。建议先用小样本验证规则，再逐步扩展；涉及正则时优先从简单规则开始。
- Log Game Chat Output Filter Mode（日志游戏聊天输出过滤模式）
 类型：枚举；默认："Warn & Block"
 说明：用于限定作用范围，避免误触发。建议先用小样本验证规则，再逐步扩展；涉及正则时优先从简单规则开始。
 可选：Block（格挡）；Replace（替换）；Warn（警告）；Warn & Block（警告并阻止）
- Input Method (Game)（输入法（游戏时））
 类型：枚举；默认："Ignore"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 Ignore ，确认稳定后再逐项切换比较效果。
 可选：Ignore（忽略）；Off（关闭）
- Input Method (Chat)（输入法（聊天栏））
 类型：枚举；默认："Ignore"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 Ignore ，确认稳定后再逐项切换比较效果。
 可选：Ignore（忽略）；Off（关闭）；On（开启）
- Auto Read Keybinds（自动读取按键绑定）
 类型：布尔；默认：true
 说明：用于设置快捷键触发。建议避免与系统或常用软件冲突，优先使用组合键提高可控性。
- Auto Read Cooldown (ms)（自动读取冷却（毫秒））
 类型：数值；默认：60000L
 说明：用于控制检测/刷新/动画节奏。默认值 60000L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Attack Key（攻击键）
 类型：按键/复合；默认：`{ { "Keybind", {VK_LBUTTON } }`}
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Use Key（使用键）
 类型：按键/复合；默认：`{ { "Keybind", {VK_RBUTTON } }`}
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Forward Key（前进键）
 类型：按键/复合；默认：`{ { "Keybind", {'W' } }`}
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Left Key（向左键）
 类型：按键/复合；默认：`{ { "Keybind", {'A' } }`}
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Backward Key（后退键）
 类型：按键/复合；默认：`{ { "Keybind", {'S' } }`}
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Right Key（向右键）
 类型：按键/复合；默认：`{ { "Keybind", {'D' } }`}
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Jump Key（跳跃键）
 类型：按键/复合；默认：`{ { "Keybind", {VK_SPACE } }`}
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Sneak Key（潜行键）
 类型：按键/复合；默认：`{ { "Keybind", {VK_LSHIFT } }`}
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Sprint Key（疾跑键）
 类型：按键/复合；默认：`{ { "Keybind", {VK_LCONTROL } }`}
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Inventory Key（背包键）
 类型：按键/复合；默认：`{ { "Keybind", {'E' } }`}
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Chat Key（聊天键）
 类型：按键/复合；默认：`{ { "Keybind", {'T' } }`}
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Command Key（命令键）
 类型：按键/复合；默认：`{ { "Keybind", {VK_OEM_2 } }`}
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
## 历史更新
- 52. 为 Minecraft Utils 添加配置：
- 13. 修复 MinecraftUtils 的 Log Parser Utilities 尝试对基岩版启动解析的问题。
- 8. 添加模块：MinecraftUtils，关于MC的合法功能

## 备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

## 相关命令
无

## 相关模块
- [AntiAFK (反挂机)](./AntiAFK.md)
- [AutoClicker (连点器)](./AutoClicker.md)
- [MouseWatcher (鼠标监视)](./MouseWatcher.md)
- [MouseSwap (鼠标交换)](./MouseSwap.md)
- [MouseDisabler (禁用鼠标)](./MouseDisabler.md)
- [MouseTeleport (鼠标传送)](./MouseTeleport.md)
- [MouseTrails (鼠标轨迹)](./MouseTrails.md)
- [MouseESP (鼠标透视)](./MouseESP.md)

## 相关资料
无
