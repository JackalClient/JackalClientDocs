# Screenshot
截图工具
分类：Misc
描述：截图工具。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
Screenshot（截图工具）
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Mode、Notify Close、HUD Font Size。

## 配置项
- Mode（模式）
 类型：枚举；默认："Tool"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 Tool ，确认稳定后再逐项切换比较效果。
 可选：Instant（瞬间）；Tool（工具）
- Close Vanilla Snipping Tool（关闭原版截图工具）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Notify Close（通知关闭）
 类型：布尔；默认：true
 说明：用于选择结果反馈方式。默认值 true 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Preview Brightness (0~1)（预览亮度 (0~1)）
 类型：数值；默认：0.6f
 说明：这是数值型配置。默认值 0.6f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- HUD Font Size（HUD 字号）
 类型：数值；默认：35
 说明：用于控制文本可读性。默认字号 35 适合多数分辨率；高分屏可适当加大，低分辨率建议减少以免拥挤。
- Save Image（保存图片）
 类型：枚举；默认："Default"
 说明：这是选项型配置。默认值 Default 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Off（关闭）；Default（默认）；Desktop（未收录）；Custom（自定义）；Dialog（对话框）
- Save Image Custom Path（保存图片自定义路径）
 类型：文本；默认："D:\\"
 说明：用于指定文件/目录路径。建议使用稳定的绝对路径并确认权限可访问，避免因路径变化导致功能失效。
- Copy Image（复制图片）
 类型：枚举；默认："DIB"
 说明：这是选项型配置。默认值 DIB 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Off（关闭）；DIB（未收录）；PNG+DIB（未收录）
- Extract Text (PRO)（提取文本（专业版））
 类型：枚举；默认："Off"
 说明：这是选项型配置。默认值 Off 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Off（关闭）；Silent Copy（静默复制）；Console Output（控制台输出）
- Extract Text Language (PRO)（提取文本所使用的语言（专业版））
 类型：文本；默认："chi_sim"
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Countdown（倒计时）
 类型：布尔；默认：false
 说明：这是开关型配置。默认值 false 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Countdown Duration (ms)（倒计时时长（毫秒））
 类型：数值；默认：3000L
 说明：用于控制检测/刷新/动画节奏。默认值 3000L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Exclude Client（排除客户端）
 类型：枚举；默认："Shift Key"
 说明：这是选项型配置。默认值 Shift Key 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Off（关闭）；Shift Key（Shift 按下时）；Always（总是）
- bind（绑定）
 类型：按键/复合；默认：`{ { "Keybind", {VK_LCONTROL, VK_SNAPSHOT } }`}
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
## 历史更新
- 27. 为 Screenshot 模块添加配置：
- 28. 为 Screenshot 添加按 Shift 截方形图的功能。
- 7. 现在启用 Screenshot 截图后，GUIBlur 会自动关闭。

## 备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

## 相关命令
无

## 相关模块
- [Active (活动)](./Active.md)
- [AntiCapture](./AntiCapture.md)
- [Console (控制台)](./Console.md)
- [Shell (命令行)](./Shell.md)
- [QuickCommand (快速命令)](./QuickCommand.md)
- [ForceTopmost (强制置顶)](./ForceTopmost.md)
- [MemeTrigger (梗触发)](./MemeTrigger.md)

## 相关资料
无
