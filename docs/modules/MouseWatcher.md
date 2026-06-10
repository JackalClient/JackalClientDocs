# MouseWatcher
鼠标监视
分类：Control
描述：监视鼠标移动和交互。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
MouseWatcher（鼠标监视）用于监视鼠标移动和交互。
适合键鼠行为控制、输入增强和自动化操作场景。
初次使用可优先调整：Movement Check Mode、Hide HUD When Menu On、HUD。

## 配置项
- Movement Check（运动检查）
 类型：枚举；默认："Ignore"
 说明：这是选项型配置。默认值 Ignore 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Ignore（忽略）；Warn（警告）；Warn & Restore（警告并拉回）；Restore（还原）
- Movement Check Mode（运动检查模式）
 类型：枚举；默认："Simple"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 Simple ，确认稳定后再逐项切换比较效果。
 可选：Simple（简易）；Strict（严格）
- Hide HUD When Menu On（打开菜单时隐藏HUD）
 类型：布尔；默认：true
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- HUD（是否显示HUD。）
 类型：枚举；默认："Fancy"
 说明：这是选项型配置。默认值 Fancy 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Off（关闭）；Simple（简易）；Fancy（优美）
- HUD Color（HUD 颜色）
 类型：枚举；默认："White"
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- HUD Font Size（HUD 字号）
 类型：数值；默认：20
 说明：用于控制文本可读性。默认字号 20 适合多数分辨率；高分屏可适当加大，低分辨率建议减少以免拥挤。
- HUD Line Gap（HUD 行距）
 类型：数值；默认：5
 说明：用于细调显示样式和间距。默认值 5 通常是平衡视觉效果与紧凑度的设置，建议小步调整并实时观察。
- HUD X Rate（HUD 横坐标比例）
 类型：数值；默认：0.01f
 说明：用于控制界面元素在屏幕中的相对位置。默认值 0.01f 一般是作者调过的稳定布局；建议每次只改一个轴，避免元素跑出可视区域。
- HUD Y Rate（HUD 纵坐标比例）
 类型：数值；默认：0.44f
 说明：用于控制界面元素在屏幕中的相对位置。默认值 0.44f 一般是作者调过的稳定布局；建议每次只改一个轴，避免元素跑出可视区域。
- Sample Cooldown（采样冷却）
 类型：数值；默认：10U
 说明：用于控制检测/刷新/动画节奏。默认值 10U 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Acceleration Threshold（加速度阈值）
 类型：数值；默认：800.0f
 说明：这是数值型配置。默认值 800.0f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Strict Check Threshold（严格检查阈值）
 类型：数值；默认：10
 说明：这是数值型配置。默认值 10 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
## 历史更新
- 51. 为 Mouse Watcher 添加配置：
- 3. 为 Modules Color, WindowMaster HUD Color, MouseWatcher HUD Color 添加新颜色样式：Colorful。根据字符串决定一种随机颜色。
- 10. 添加模块 MouseWatcher，用于监视鼠标运动。

## 备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

## 相关命令
无

## 相关模块
- [AntiAFK (反挂机)](./AntiAFK.md)
- [AutoClicker (连点器)](./AutoClicker.md)
- [MouseSwap (鼠标交换)](./MouseSwap.md)
- [MouseDisabler (禁用鼠标)](./MouseDisabler.md)
- [MouseTeleport (鼠标传送)](./MouseTeleport.md)
- [MouseTrails (鼠标轨迹)](./MouseTrails.md)
- [MouseESP (鼠标透视)](./MouseESP.md)
- [Crosshair (准星线)](./Crosshair.md)

## 相关资料
无
