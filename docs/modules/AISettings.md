# AISettings
AI设定
分类：Web
描述：关于AI的设置。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
AISettings（AI设定）用于关于AI的设置。
适合联网信息获取、账号联动和在线交互场景。
初次使用可优先调整：Local Model、Custom AI Model、Dashscope Model。

## 配置项
- AI Type（人工智能类型）
 类型：枚举；默认："PearAPI"
 说明：这是选项型配置。默认值 PearAPI 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Spark（未收录）；Dashscope（未收录）；ChatAnywhere（未收录）；PearAPI（未收录）；Local（本地）；Custom（自定义）
- AI Role Prompt（人工智能角色提示词）
 类型：文本；默认："You are a helpful assistant."
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- AI Temperature（默认0.3 [0-1]）
 类型：数值；默认：0.3f
 说明：这是数值型配置。默认值 0.3f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- AI Top P（默认0.8		[0-1]）
 类型：数值；默认：0.8f
 说明：这是数值型配置。默认值 0.8f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Command /chat Prompt Prefix（命令 /chat 提示词前缀）
 类型：文本；默认：""
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Command /chat Show Session（/chat 命令显示会话名）
 类型：布尔；默认：true
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Command /chat Force Stream（/chat 命令强制流式）
 类型：布尔；默认：true
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Local Model（本地模型）
 类型：文本；默认：""
 说明：这是该模块的核心行为开关。默认值 + + 通常更稳，建议先验证默认策略再尝试其他模式。
- Local Port（本地端口）
 类型：数值；默认：11434
 说明：这是数值型配置。默认值 11434 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Local Route（本地路由）
 类型：文本；默认："/api/chat"
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Local Route (Stream)（本地路由（流式））
 类型：文本；默认："/api/chat"
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Dashscope Use EnvVar ApiKey: DASHSCOPE_API_KEY（Dashscope 使用 EnvVar ApiKey: DASHSCOPE_API_键）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Dashscope API Key（Dashscope API 键）
 类型：文本；默认："sk-"
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Spark Use EnvVar ApiKey: SPARK_API_KEY（Spark 使用 EnvVar ApiKey: SPARK_API_键）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Spark API Key（Spark API 键）
 类型：文本；默认：""
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- ChatAnywhere Use EnvVar ApiKey: CHATANYWHERE_API_KEY（ChatAnywhere 使用环境变量作为 ApiKey: CHATANYWHERE_API_KEY）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- ChatAnywhere API Key（ChatAnywhere API 键）
 类型：文本；默认："sk-"
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Custom AI Use EnvVar ApiKey（自定义人工智能使用环境变量作为ApiKey）
 类型：布尔；默认：false
 说明：这是开关型配置。默认值 false 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Custom AI Use EnvVar ApiKey Name（自定义人工智能ApiKey环境变量名称）
 类型：文本；默认：""
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Custom AI API Key（自定义人工智能ApiKey）
 类型：文本；默认：""
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Custom AI Base URL（自定义人工智能基础链接）
 类型：文本；默认："https://"
 说明：自定义 OpenAI 兼容接口地址。可填写服务根地址、`/v1`、`/v1/chat` 或完整 `/v1/chat/completions`，客户端会自动补全聊天补全接口后缀。
- Custom AI Model（自定义人工智能模型）
 类型：文本；默认：""
 说明：这是该模块的核心行为开关。默认值 + + 通常更稳，建议先验证默认策略再尝试其他模式。
- Dashscope Model（未收录）
 类型：枚举；默认："qwen-turbo"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 qwen-turbo ，确认稳定后再逐项切换比较效果。
 可选：qwen-turbo（未收录）；qwen-long（未收录）；qwen-max（qwen-最大数量）；qwen-plus（qwen-加号）；qwen-math-plus（qwen-math-加号）；qwen-coder-plus（qwen-coder-加号）；qwen-coder-turbo（未收录）
- Spark Model（未收录）
 类型：枚举；默认："Spark Lite"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 Spark Lite ，确认稳定后再逐项切换比较效果。
 可选：Spark 4.0 Ultra（未收录）；Spark Max（Spark 最大数量）；Spark Max-32K（Spark 最大数量-32K）；Spark Pro（未收录）；Spark Pro-128K（未收录）；Spark Lite（未收录）
- PearAPI Model（未收录）
 类型：枚举；默认："ChatGLM"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 ChatGLM ，确认稳定后再逐项切换比较效果。
 可选：ChatGLM（未收录）
- ChatAnywhere Model（ChatAnywhere 模型）
 类型：枚举；默认："gpt-3.5-turbo"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 gpt-3.5-turbo ，确认稳定后再逐项切换比较效果。
 可选：gpt-3.5-turbo（未收录）；gpt-4o-mini（未收录）；gpt-4.1-mini（未收录）；gpt-4.1-nano（未收录）；gpt-5-mini（未收录）；gpt-5-nano（未收录）；deepseek-r1（未收录）；deepseek-v3（未收录）；deepseek-v3-2-exp（未收录）；gpt-5（未收录）；gpt-4o（未收录）；gpt-4.1（未收录）
- Response Console Output Format（回复控制台输出格式）
 类型：枚举；默认："Markdown"
 说明：用于选择结果反馈方式。默认值 Markdown 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：Markdown（未收录）；Markdown With Marks（未收录）；Raw（原始）；Plaintext（未收录）
- Debug Output（调试输出）
 类型：布尔；默认：false
 说明：这是开关型配置。默认值 false 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Chat History Default Storage Policy（聊天记录默认存储方案）
 类型：枚举；默认："Temporary"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 Temporary ，确认稳定后再逐项切换比较效果。
 可选：Temporary（临时的）；Records（记录）；Files（文件）
- Chat History Sessions Saved in Records (Sep With Semicolon)（保存到记录中的聊天记录的会话名 (用分号分隔)）
 类型：文本；默认：""
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Chat History Sessions Saved in Files (Sep With Semicolon)（保存到文件中的聊天记录的会话名 (用分号分隔)）
 类型：文本；默认："livestream"
 说明：用于指定文件/目录路径。建议使用稳定的绝对路径并确认权限可访问，避免因路径变化导致功能失效。
- Translation（翻译）
 类型：枚举；默认："Off"
 说明：这是选项型配置。默认值 Off 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Off（关闭）；Chinese（中文）；English（英语）；Japanese（日语）
- Off（关闭）
 类型：文本；默认："Chinese", "English", "Japanese"
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Filter Keywords (Sep With Semicolon)（筛选器关键词（用分号分隔））
 类型：文本；默认：""
 说明：用于限定作用范围，避免误触发。建议先用小样本验证规则，再逐步扩展；涉及正则时优先从简单规则开始。
- Filter (PRO)（过滤器 (专业版)）
 类型：枚举；默认："Replace"
 说明：用于限定作用范围，避免误触发。建议先用小样本验证规则，再逐步扩展；涉及正则时优先从简单规则开始。
 可选：Off（关闭）；Block（格挡）；Filtered（已过滤）；Replace（替换）
- Clipboard Tweaks Module Text Processor（剪贴板功能模块文本处理器）
 类型：布尔；默认：false
 说明：用于指定模块实际作用对象。建议先对单个目标测试通过，再扩大到多目标，降低误操作风险。
- Memeizer Processor (PRO)（生草机处理器（专业版））
 类型：布尔；默认：false
 说明：用于指定模块实际作用对象。建议先对单个目标测试通过，再扩大到多目标，降低误操作风险。
## 历史更新
- v1.1.3：Custom AI Base URL 支持自动补全 `/v1/chat/completions` 等聊天补全接口后缀。
- 13. 为 AI Settings 添加配置：
- 31. 为 AI Settings 添加配置：
- 52. 添加模块：AI Settings，将之前的 Chat Ask 的 API Key 等配置移动到这里。

## 备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

## 相关命令

/aisettings
/ai
查看 AI 配置。

/aisettings model/models
查看当前选中的 AI 模型名称。

/aisettings model &lt;name&gt;
设置当前选中的 AI 模型名称。

/aisettings local
设置当前 AI 类型为本地大模型。

/aisettings localmodels
查看本地 Ollama 模型列表。

/aisettings custom
设置当前 AI 类型为自定义在线大模型API。

/chat [content=clipboard]
/chatstream [content=clipboard]
/chat0 [content==clipboard]
/chatstream0 [content=clipboard]
与 AI 对话。你需要在 AI Settings 模块中配置好 APIKEY 等参数。
/chatstream 命令强制以流式输出。
其中 /chat0 和 /chatstream0 为单次对话，没有上下文，无法持续对话。
其余默认会话为default，支持上下文，但是有上限。你可以使用/chathistory switch命令切换会话。
	

/chathistory
/chathistory get [session=cur_chat_session]
输出会话聊天记录。默认为当前选中的会话。

/chathistory list
/chathistory enum
枚举所有聊天会话及其大小。

/chathistory switch [session=default]
切换聊天会话。不同的会话会记录不同的聊天记录。

/chathistory pop [session=cur_chat_session]
删除指定聊天会话的最后一问答。这样AI就不知道你上一句发的是什么了，但是仍能知道之前的上下文。

/chathistory clear [session=cur_chat_session]
清除指定聊天会话记录（上下文）。

/forget
等价于 /chathistory clear livestream

## 相关模块
- [AI Chat (AI聊天)](./AIChat.md)
- [IRC (聊天室)](./IRC.md)
- [AntiRickroll (反诈骗)](./AntiRickroll.md)
- [AntiBrowser (反浏览器)](./AntiBrowser.md)
- [AntiWebpage (反网页)](./AntiWebpage.md)
- [LiveChatter (直播弹幕)](./LiveChatter.md)
- [TcpMonitor (TCP监视)](./TcpMonitor.md)
- [TcpKiller (TCP杀手)](./TcpKiller.md)
- [LiveStream (直播间)](./LiveStream.md)

## 相关资料
无
