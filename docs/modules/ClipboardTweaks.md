ClipboardTweaks
剪贴板功能
分类：Control
描述：一些剪贴板的实用功能。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
ClipboardTweaks（剪贴板功能）用于对复制的文字开展混淆。

配置项
- Notify（通知）
 类型：布尔；默认：true
 说明：用于选择结果反馈方式。默认值 true 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Update Cooldown (ms)（更新冷却（毫秒））
 类型：数值；默认：500L
 说明：用于控制检测/刷新/动画节奏。默认值 500L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Remove Markdown（移除Markdown）
 类型：布尔；默认：false
 说明：这是开关型配置。默认值 false 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Remove Numbers（移除数字）
 类型：布尔；默认：false
 说明：这是开关型配置。默认值 false 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Remove URL（移除链接）
 类型：布尔；默认：false
 说明：这是开关型配置。默认值 false 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Remove URL Arguments（移除链接的参数）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Taboo Super Filter（违禁词超级过滤）
 类型：布尔；默认：false
 说明：用于限定作用范围，避免误触发。建议先用小样本验证规则，再逐步扩展；涉及正则时优先从简单规则开始。
- Character Obfuscation（字符混淆）
 类型：枚举；默认："Off"
 说明：这是选项型配置。默认值 Off 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Off（关闭）；Normal（普通）；Advanced（高级）；Ultimate（终极）
- Chinese Traditionalization（中文转繁体）
 类型：布尔；默认：false
 说明：这是开关型配置。默认值 false 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Letter Changes（字母变化）
 类型：枚举；默认："Off"
 说明：这是选项型配置。默认值 Off 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Off（关闭）；Upper Case（大写）；Lower Case（小写）；Annoying Case（混写）；Fancy Letters（花体）
- Add Spaces Mode（添加空格模式）
 类型：枚举；默认："Off"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 Off ，确认稳定后再逐项切换比较效果。
 可选：Off（关闭）；Single（单个）；Double（两个）；Pair（未收录）；Wave（未收录）；Smaller Random（Smaller 随机）；Bigger Random（Bigger 随机）
- Cut Line Mode（切分行模式）
 类型：枚举；默认："Off"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 Off ，确认稳定后再逐项切换比较效果。
 可选：Off（关闭）；Punctuation（未收录）；Fixed Length（固定长度）；Random Length（随机 长度）；Wave Left（Wave 左侧）；Wave Center（Wave 居中）
- Cut Line Extra Tail（切分行额外尾巴）
 类型：文本；默认："喵"
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Cut Line Fixed Length（切分行固定长度）
 类型：数值；默认：12
 说明：这是数值型配置。默认值 12 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Cut Line Random Length Min（切分行随机长度最小值）
 类型：数值；默认：5
 说明：这是数值型配置。默认值 5 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Cut Line Random Length Max（切分行随机长度最大值）
 类型：数值；默认：16
 说明：这是数值型配置。默认值 16 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Punctuation Changes（标点变化）
 类型：枚举；默认："Off"
 说明：这是选项型配置。默认值 Off 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Off（关闭）；Remove（移除）；To English（转英文）；To Chinese（转中文）；Random（随机）
- AI Transformation（人工智能变换）
 类型：布尔；默认：false
 说明：这是开关型配置。默认值 false 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- AI Transformation Prompt（人工智能变换提示词）
 类型：文本；默认："请将下面的文本每个字符间加一个点后原样输出，不要添加任何的前缀后缀以及说明文字："
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Encryptor（加密器）
 类型：布尔；默认：false
 说明：这是开关型配置。默认值 false 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
历史更新
- 3. 为 ClipboardTweaks 添加新的配置：
- 2. 为 Clipboard Tweaks 模块添加 Taboo Super Filter 选项，用于屏蔽违禁词。（仍在测试）
- 8. 添加模块 Clipboard Tweaks，用于对剪贴板文本进行操作。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [AntiAFK (反挂机)](./AntiAFK.md)
- [AutoClicker (连点器)](./AutoClicker.md)
- [MouseWatcher (鼠标监视)](./MouseWatcher.md)
- [MouseSwap (鼠标交换)](./MouseSwap.md)
- [MouseDisabler (禁用鼠标)](./MouseDisabler.md)
- [MouseTeleport (鼠标传送)](./MouseTeleport.md)
- [MouseTrails (鼠标轨迹)](./MouseTrails.md)
- [MouseESP (鼠标透视)](./MouseESP.md)

相关资料
[【活全家程序】构史句子生成器︒](https://www.bilibili.com/video/BV1Nd9KYMEkS)

