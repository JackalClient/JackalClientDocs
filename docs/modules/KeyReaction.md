# KeyReaction
按键反应
分类：Control
描述：当按下某些键时执行某些操作；专业版还可显示按键反应速率图表。

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
专业版可额外启用 Reaction Rate Graph，用于观察当前按键反应触发速率的变化趋势。

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
- Reaction Rate Graph (PRO)（反应速率图表（专业版））
 类型：布尔；默认：false
 说明：显示 KeyReaction 实际触发速率的折线图，带横轴、纵轴、单位和自动刻度。
- Reaction Rate Graph Auto Hide When Idle（空闲时自动隐藏反应速率图表）
 类型：布尔；默认：true
 说明：60 秒内没有任何按键反应触发时，图表会自动淡出隐藏；再次触发后会重新淡入。
- Reaction Rate Graph Scale（反应速率图表缩放）
 类型：数值；默认：1.0
 说明：整体缩放图表显示大小。
- Reaction Rate Graph X Rate / Y Rate（反应速率图表 X / Y 比率）
 类型：数值；默认：0.5 / 0.88
 说明：控制图表在屏幕中的位置，X 为中心锚点，Y 为底部锚点。
- Reaction Rate Graph Width / Height（反应速率图表宽度 / 高度）
 类型：数值；默认：360 / 180
 说明：控制图表基础绘制尺寸。
- Reaction Rate Graph Opacity (0~1)（反应速率图表不透明度）
 类型：数值；默认：0.72
 说明：控制图表整体透明度，淡入淡出会在此基础上叠加。
- Reaction Rate Graph Line / Background / Grid / Text Color（反应速率图表折线 / 背景 / 网格 / 文字颜色）
 类型：文本；默认：Aqua / 20;24;34 / 90;110;130 / White
 说明：分别控制图表折线、底色、网格线和文字颜色。
## 历史更新
- 183. 为 Key Reaction 添加专业版 Reaction Rate Graph，可显示按键反应速率图表，并支持空闲自动淡出。
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
