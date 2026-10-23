# Auto Input
自动输入
分类：Control
描述：向指定窗口发送高度自定义的键盘和鼠标窗口消息。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：专业版

## 介绍
Auto Input 通过菜单创建键盘、鼠标和滚轮元素，并向保存的目标窗口发送 Press、Clicker 或滚轮消息。元素会记录窗口句柄、窗口类别、进程和客户区坐标，支持窗口条件、进程白名单、点击次数和 HUD 状态显示。

## 使用
- 启用模块后，在目标窗口按 `Menu Trigger Hotkey`（默认中键）打开菜单。
- 一级菜单提供 `Key Press`、`Key Clicker`、`Mouse Press`、`Mouse Clicker`、`Mouse Wheel`、`Clear Elements` 和 `Close`；键盘菜单默认包含 Space、Enter、Esc 及最多十个近期按键，鼠标菜单包含五种鼠标按钮，滚轮菜单包含上下滚轮。
- 对已有 HUD 按触发键可打开设置菜单；可启用、暂停、删除、重新设置操作、目标窗口、按键、点击次数、CPS、滚轮冷却时间和激活条件。
- HudEditor 空白处右键菜单的 `New` 在 Auto Input 开启时提供 `AutoInput Element`，进入同样的创建菜单。
- 对已有 HUD 按中键可打开启用、暂停、删除、重新设置操作、目标窗口、按键和点击次数菜单。
- 使用 `HUD Drag Key`（默认左 Alt）按住该按键并将鼠标移到显示的 HUD 上即可拖动，松开按键后停止。
- `/autoinput list` 以彩色键值二维表输出所有元素；`/autoinput clear` 清空所有元素。

## 主要配置项
- `Menu Trigger Conditions`：菜单触发前提，包括最大化、未隐藏、未隐藏 DWM Cloak、非工具窗口和进程白名单。
- `Menu Scale`、`Menu Background Color` 和菜单透明度：控制菜单缩放、背景色、背景、文本和轮廓不透明度；菜单会按内容自适应宽度并使用 200 毫秒缓动动画。
- `Process Whitelist`：进程名或完整路径白名单。
- `Key Clicker Default Min CPS` / `Key Clicker Default Max CPS`：新建键盘 Clicker 元素时的默认随机 CPS 范围。
- `Mouse Clicker Default Min CPS` / `Mouse Clicker Default Max CPS`：新建鼠标 Clicker 元素时的默认随机 CPS 范围。
- `Wheel Default Cooldown (ms)`：新建鼠标滚轮元素时的默认触发冷却时间。
- `Clicker Internal Gap (ms)`：每次点击按下和释放之间的间隔。
- `Activation Default Conditions`：新建元素时的默认触发条件；条件恢复后等待 `Activation Start Delay (ms)` 再继续。每个元素还可以单独设置激活条件。
- `HUD Auto Hide`：按目标窗口或目标类别隐藏 HUD；客户区外的点始终不显示。
- `HUD Scale`、`HUD Box Roundness (0~1)` 和 `HUD Outline Width`：控制 HUD 大小、按键框圆角和轮廓宽度。
- `HUD Fill Color (Enabled/Triggered/Disabled)` 与 `HUD Fill Opacity (0~1)`：分别控制 HUD 填充颜色和填充不透明度。
- `HUD Give Way to Mouse`：鼠标悬停 HUD 时降低其不透明度；`Hide HUD When Menu On` 在菜单打开时隐藏 HUD，HudEditor 开启时仍显示全部元素。
- `Target Class Condition`：目标类别匹配字段，默认使用窗口类别名和进程名。
- HudEditor 开启时，所有可见元素都会注册为独立拖动目标；也可以继续使用 `HUD Drag Key` 按住拖动显示中的 HUD。
- `Elements (READONLY)`：只读 JSON 配置，保存所有元素信息；近期按键和其他临时状态保存在 Records.json。

## 注意
窗口消息操作可能被目标程序忽略，也可能改变目标程序状态。请仅对自己拥有或明确获授权的窗口使用，并先使用较低 CPS 验证目标消息行为。
