# Shell
命令行
分类：Misc
描述：客户端的命令行系统。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
Shell（命令行）用于打开客户端命令行。
Console 控制台指的是黑窗口，Shell 命令行指的是命令系统，打开Shell会自动打开Console。有Console你只能看消息，如果要输入命令必须开这个Shell命令行模块。
你可以使用Tab补全命令及其一些固定参数。
退出命令行用break命令。退出客户端用exit命令。

## 配置项
- Theme（主题）
 类型：枚举；默认："Jackal Pro"
 说明：这是选项型配置。默认值 Jackal Pro 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Default（默认）；Jackal Pro（未收录）；Cmd（未收录）；PowerShell（未收录）；VS2022 Dev PowerShell（未收录）；Metasploit（未收录）；Kali Linux（未收录）
- Jackal Pro Subtheme（Jackal Pro 子主题）
 类型：枚举；默认："Simple"
 说明：这是选项型配置。默认值 Simple 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Simple（简易）；Kali Hacker Box（Kali 黑客框）；Classic Kali（经典 Kali）；PowerLevel Arrow（PowerLevel 箭头）；Predator Minimal（迷你猎手）；Cyber Neon Frame（赛博霓虹框）；Military Protocol（军事协议）；Default（默认）
- Exclusive Mode（独占模式）
 类型：布尔；默认：false
 说明：这是该模块的核心行为开关。默认值 false 通常更稳，建议先验证默认策略再尝试其他模式。
- Input Prompt Color（输入提示颜色）
 类型：文本；默认："yellow"
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
- Input Prompt（输入提示）
 类型：枚举；默认："$>"
 说明：这是选项型配置。默认值 $> 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：>（未收录）；$>（未收录）；$（未收录）；>>>（未收录）；JC >（未收录）；Custom（自定义）
- Command Completion（命令补全）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Command Highlighter（命令高亮器）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Command Hints（命令提示）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Save Command History（保存命令历史）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Allow Terminate Shell Thread（允许终止命令行线程）
 类型：布尔；默认：false
 说明：这是开关型配置。默认值 false 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Close Menu（关闭菜单）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Custom Input Prompt（自定义输入提示）
 类型：文本；默认：">>>"
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Input Color（输入内容颜色）
 类型：文本；默认："white"
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
- Command Max Length（命令最大长度）
 类型：数值；默认：65535L
 说明：这是数值型配置。默认值 65535L 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Echo Command（回显命令）
 类型：布尔；默认：false
 说明：这是开关型配置。默认值 false 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Using Builtin Variables（使用内置变量）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Using Environment Variables（使用环境变量）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Max History Length（最大历史长度）
 类型：数值；默认：500
 说明：这是数值型配置。默认值 500 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Batch File Error Level（批处理文件错误等级）
 类型：枚举；默认："Only Exception"
 说明：用于指定文件/目录路径。建议使用稳定的绝对路径并确认权限可访问，避免因路径变化导致功能失效。
 可选：Ignore（忽略）；Only Exception（仅异常）；All Errors（所有错误）
- Batch File Execution Notify（批处理文件执行是否通知）
 类型：布尔；默认：true
 说明：用于选择结果反馈方式。默认值 true 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Chatter Color（弹幕颜色）
 类型：枚举；默认："White"
 说明：用于选择结果反馈方式。默认值 White 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Title Color（标题颜色）
 类型：枚举；默认："Rainbow"
 说明：用于选择结果反馈方式。默认值 Rainbow 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- bind（绑定）
 类型：按键/复合；默认：`{ { "Keybind", {VK_RMENU, 'S' } }`}
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
## 历史更新
无（HISTORY 中暂无明确记录）

## 备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

## 相关命令

/interpret &lt;path...&gt;
同步解释执行一个客户端批处理文件(.jbat)或者宏文件(.jm)。

/perform &lt;path...&gt;
异步解释执行一个客户端批处理文件(.jbat)或者宏文件(.jm)。

/exclusive [enable]
切换命令行沉浸模式。沉浸模式开启后，HUD将会隐藏。
enable 是布尔类型，不填则表示切换。

/enable &lt;ModuleName&gt;
/e &lt;ModuleName&gt;
/disable &lt;ModuleName&gt;
/d &lt;ModuleName&gt;
/toggle &lt;ModuleName&gt;
/t &lt;ModuleName&gt;
/&lt;ModuleName&gt;
改变模块开关状态。

/enables
/enabled
查看启用了哪些模块。

/console max
最大化控制台。
/console min
最小化控制台。
/console fix
把控制台视觉相关配置切到兼容预设（如关闭高级背景、恢复默认非客户区渲染等），并立即应用到当前控制台窗口。

## 相关模块
- [Active (活动)](./Active.md)
- [AutoSpeak (自动讲述)](./AutoSpeak.md)
- [AntiMicrophone (反麦克风)](./AntiMicrophone.md)
- [Console (控制台)](./Console.md)
- [QuickCommand (快速命令)](./QuickCommand.md)
- [ForceTopmost (强制置顶)](./ForceTopmost.md)
- [MemeTrigger (梗触发)](./MemeTrigger.md)
- [Encryptor (加密器)](./Encryptor.md)

## 相关资料
【[C++] 我手搓了一个非常实用的客户端命令行】
https://www.bilibili.com/video/BV1hXGfzNEBF
