# Encryptor
加密器
分类：Misc
描述：帮助你加密指定的文本。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
Encryptor（加密器）用于帮助你加密指定的文本。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Method。

## 配置项
- Source（来源）
 类型：枚举；默认："Clipboard"
 说明：这是选项型配置。默认值 Clipboard 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Fixed（固定）；Clipboard（剪贴板）
- Fixed Content（固定内容）
 类型：文本；默认："Hello, Jackal!"
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Operation（操作）
 类型：枚举；默认："Encrypt"
 说明：这是选项型配置。默认值 Encrypt 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Encrypt（加密）；Decrypt（解密）
- Method（方法）
 类型：枚举；默认："beast"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 beast ，确认稳定后再逐项切换比较效果。
 可选：base64（未收录）；crc32（未收录）；md5（未收录）；sha1（未收录）；beast（兽语）；abracadabra（魔曰。由于开源协议影响，该方法需要你外部下载魔曰加密器并配置好 Encryptor 模块的路径。我已经尝试将原仓库移植为C++，点击链接查看仓库：[https://github.com/noexcept2005/AbracadabraCpp](https://github.com/noexcept2005/AbracadabraCpp) 编译后将moyue.exe的绝对路径输入到 Encryptor 的 Abracadabra Encryptor Path 中。）；pipa（未收录）；pipaplus（未收录）；pipasimp（未收录）；pipatrad（未收录）；pipasimpplus（未收录）；pipatradplus（未收录）；pipasimpplus2（未收录）；pipatradplus2（未收录）
 
- Copy to Clipboard（复制到剪贴板）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Abracadabra Encryptor Path（魔曰加密器路径）
 类型：文本；默认：""
 说明：用于指定文件/目录路径。建议使用稳定的绝对路径并确认权限可访问，避免因路径变化导致功能失效。
- Holiday Greetings（节日祝福）
 类型：枚举；默认："Basic"
 说明：这是选项型配置。默认值 Basic 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Off（关闭）；Basic（基础）；AI（人工智能）
- Morning Greetings（早晨问候）
 类型：枚举；默认："Basic"
 说明：这是选项型配置。默认值 Basic 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Off（关闭）；Basic（基础）；AI（人工智能）
- Afternoon Greetings（下午问候）
 类型：枚举；默认："Basic"
 说明：这是选项型配置。默认值 Basic 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Off（关闭）；Basic（基础）；AI（人工智能）
- Night Greetings（晚间问候）
 类型：枚举；默认："Basic"
 说明：这是选项型配置。默认值 Basic 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Off（关闭）；Basic（基础）；AI（人工智能）
- Midnight Greetings（凌晨问候）
 类型：枚举；默认："Basic"
 说明：这是选项型配置。默认值 Basic 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Off（关闭）；Basic（基础）；AI（人工智能）
- Greeting Persona（问候口吻）
 类型：枚举；默认："Normal"
 说明：这是选项型配置。默认值 Normal 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Normal（普通）；Maid（女仆）；Catgirl（猫娘）
- Morning Time Min（早晨最早时间）
 类型：数值；默认：6.0f
 说明：这是数值型配置。默认值 6.0f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Morning Time Max（早晨最晚时间）
 类型：数值；默认：10.5f
 说明：这是数值型配置。默认值 10.5f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Afternoon Time Min（下午最早时间）
 类型：数值；默认：12.5f
 说明：这是数值型配置。默认值 12.5f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Afternoon Time Max（下午最晚时间）
 类型：数值；默认：16.8f
 说明：这是数值型配置。默认值 16.8f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Night Time Min（晚间最早时间）
 类型：数值；默认：18.8f
 说明：这是数值型配置。默认值 18.8f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Night Time Max（晚间最晚时间）
 类型：数值；默认：23.5f
 说明：这是数值型配置。默认值 23.5f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Midnight Time Min（凌晨最早时间）
 类型：数值；默认：0.0f
 说明：这是数值型配置。默认值 0.0f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Midnight Time Max（凌晨最晚时间）
 类型：数值；默认：4.0f
 说明：这是数值型配置。默认值 4.0f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
## 历史更新
- 21. 添加模块：Encryptor 加密器。加密或解密文本然后输出。

## 备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

## 相关命令
无

## 相关模块
- [ClipboardTweaks 剪贴板功能](./ClipboardTweaks.md)

## 相关资料
[AbracadabraCpp - Github](https://github.com/noexcept2005/AbracadabraCpp)
