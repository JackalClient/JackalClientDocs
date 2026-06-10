# KeyReaction
按键反应
分类：Control
描述：当按下某些键时执行某些操作。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
KeyReaction（按键反应）用于当按下某些键时执行某些操作。
适合键鼠行为控制、输入增强和自动化操作场景。
初次使用可优先调整：Key Reaction Data Enabled、Key Reaction Data JSON Array、Key Notify Mode。

## 配置项
- Auto Release F22 When WeChat Running（微信运行时自动释放F22键）
 类型：布尔；默认：true
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Key Reaction Data Enabled（是否启用按键反应数据）
 类型：布尔；默认：true
 说明：这是该模块的核心行为开关。默认值 true 通常更稳，建议先验证默认策略再尝试其他模式。
- Key Reaction Data JSON Array（按键反应数据JSON序列）
 类型：文本；默认："[]"
 说明：这是该模块的核心行为开关。默认值 [] 通常更稳，建议先验证默认策略再尝试其他模式。
- Key Notify Mode（按键通知模式）
 类型：枚举；默认："Notify"
 说明：用于选择结果反馈方式。默认值 Notify 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：Off（关闭）；Notify（通知）；Chatter（弹幕）；Title（标题）
## 历史更新
- 18. 为 Key Reaction 添加新配置：
- 25. 添加模块：KeyReaction，实现部分按键反应。

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
