# KeySound
按键音效
分类：Control
描述：暂无描述

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
KeySound（按键音效）用于暂无描述。
适合键鼠行为控制、输入增强和自动化操作场景。
初次使用可优先调整：Alloc Mode、Detect Mode、All Mode Sound。

## 配置项
- Alloc Mode（分配模式）
 类型：枚举；默认："All"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 All ，确认稳定后再逐项切换比较效果。
 可选：All（所有）；Keyboard All（键盘所有）；Mouse All（鼠标所有）；Category（类别）；Custom（自定义）
- Detect Mode（检测模式）
 类型：枚举；默认："Raw Input"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 Raw Input ，确认稳定后再逐项切换比较效果。
 可选：Raw Input（原始输入）；GetKeyState（获取键状态）
- Sound Selection（音效	选择）
 类型：枚举；默认："Single File"
 说明：用于选择结果反馈方式。默认值 Single File 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：Single File（单一文件）；Folder Random Select（文件夹中随机选择）；Folder Map Select（文件夹中映射选择）
- Recursive Selection in Folder（文件夹中选择文件时采用递归）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Debug Notification（调试通知）
 类型：枚举；默认："Off"
 说明：这是选项型配置。默认值 Off 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Off（关闭）；File Path（文件路径）；Key Name（键名）
- All Mode Sound（“所有”模式音效）
 类型：文本；默认：""
 说明：用于选择结果反馈方式。默认值 + + 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Keyboard All Mode Sound（“键盘所有”模式音效）
 类型：文本；默认：""
 说明：用于选择结果反馈方式。默认值 + + 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Mouse All Mode Sound（“鼠标所有”模式音效）
 类型：文本；默认：""
 说明：用于选择结果反馈方式。默认值 + + 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Category Left Click Sound（类别“左键”音效）
 类型：文本；默认：""
 说明：用于选择结果反馈方式。默认值 + + 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Category Right Click Sound（类别“右键”音效）
 类型：文本；默认：""
 说明：用于选择结果反馈方式。默认值 + + 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Category Other Mouse Sound（类别“其他鼠标键”音效）
 类型：文本；默认：""
 说明：用于选择结果反馈方式。默认值 + + 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Category Control Sound（类别“控制键”音效）
 类型：文本；默认：""
 说明：用于选择结果反馈方式。默认值 + + 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Category Letter Sound（类别“字母”音效）
 类型：文本；默认：""
 说明：用于选择结果反馈方式。默认值 + + 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Category Num Sound（类别“数字”音效）
 类型：文本；默认：""
 说明：用于选择结果反馈方式。默认值 + + 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Category Punct Sound（类别“标点”音效）
 类型：文本；默认：""
 说明：用于选择结果反馈方式。默认值 + + 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Category Esc Sound（类别“Esc”音效）
 类型：文本；默认：""
 说明：用于选择结果反馈方式。默认值 + + 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Category Enter Sound（类别“回车”音效）
 类型：文本；默认：""
 说明：用于选择结果反馈方式。默认值 + + 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Category Back Sound（类别“退格”音效）
 类型：文本；默认：""
 说明：用于选择结果反馈方式。默认值 + + 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Category Arrow Sound（类别“箭头”音效）
 类型：文本；默认：""
 说明：用于选择结果反馈方式。默认值 + + 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Category Lock Sound（类别“锁定”音效）
 类型：文本；默认：""
 说明：用于选择结果反馈方式。默认值 + + 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Category FN Sound（类别“FN功能键”音效）
 类型：文本；默认：""
 说明：用于选择结果反馈方式。默认值 + + 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Category Space Sound（类别“空格”音效）
 类型：文本；默认：""
 说明：用于选择结果反馈方式。默认值 + + 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Category Other Keyboard Sound（类别“其他键盘键”音效）
 类型：文本；默认：""
 说明：用于选择结果反馈方式。默认值 + + 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Custom Mode Config File（“自定义”模式配置文件）
 类型：文本；默认："config/keyCustomSounds.ini"
 说明：这是该模块的核心行为开关。默认值 config/keyCustomSounds.ini 通常更稳，建议先验证默认策略再尝试其他模式。
## 历史更新
- 1. 添加了 KeySound 缺少的 Category Space Sound 配置。
- 16. 添加模块：KeySound，为任意的键或者快捷键自定义不同的按键声音。
- 31. 修复了 KeySound 打开后原来的滚轮输入检测失效的bug。

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
