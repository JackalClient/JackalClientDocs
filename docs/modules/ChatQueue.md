# ChatQueue
聊天队列
分类：Control
描述：管理MC的聊天发送任务。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
ChatQueue（聊天队列）用于管理MC或直播间弹幕的聊天发送任务。
适合键鼠行为控制、输入增强和自动化操作场景。
初次使用可优先调整：Hide HUD When Menu On、Chat Send Cooldown (s)、Target Unique Message。

## 配置项
- Hide HUD When Menu On（打开菜单时隐藏HUD）
 类型：布尔；默认：false
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Pause Hotkey（暂停快捷键）
 类型：按键/复合；默认：`{ { "Keybind", {VK_LCONTROL, VK_LMENU, '0' } }`}
 说明：用于设置快捷键触发。建议避免与系统或常用软件冲突，优先使用组合键提高可控性。
- Clear Hotkey（清除快捷键）
 类型：按键/复合；默认：`{ { "Keybind", {VK_LCONTROL, VK_LMENU, 'F' } }`}
 说明：用于设置快捷键触发。建议避免与系统或常用软件冲突，优先使用组合键提高可控性。
- Send Queue Front Hotkey（发送队首快捷键）
 类型：按键/复合；默认：`{ { "Keybind", {VK_LCONTROL, VK_LMENU, VK_ADD } }`}
 说明：用于设置快捷键触发。建议避免与系统或常用软件冲突，优先使用组合键提高可控性。
- Discard Queue Front Hotkey（丢弃队首快捷键）
 类型：按键/复合；默认：`{ { "Keybind", {VK_LCONTROL, VK_LMENU, VK_SUBTRACT } }`}
 说明：用于设置快捷键触发。建议避免与系统或常用软件冲突，优先使用组合键提高可控性。
- Chat Send Required Idle Time (ms)（聊天发送要求的空闲时间（毫秒））
 类型：数值；默认：1500L
 说明：这是数值型配置。默认值 1500L 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Chat Send Cooldown (s)（聊天发送冷却（秒））
 类型：数值；默认：20.0f
 说明：用于控制检测/刷新/动画节奏。默认值 20.0f 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Chat Send Task Lifetime (s)（聊天发送任务有效期（秒））
 类型：数值；默认：30.0f
 说明：这是数值型配置。默认值 30.0f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Block Keyboard While Sending（发送时屏蔽键盘）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Target Unique Message（目标唯一消息）
 类型：布尔；默认：true
 说明：用于指定模块实际作用对象。建议先对单个目标测试通过，再扩大到多目标，降低误操作风险。
- Clear When Bed Destroyed（床摧毁时清空）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Clear When Team Eliminated（队伍淘汰时清空）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- HUD（是否显示HUD。）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- HUD Title（HUD 标题）
 类型：布尔；默认：true
 说明：用于选择结果反馈方式。默认值 true 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- HUD Max Items（HUD 项目最大数量）
 类型：数值；默认：5
 说明：这是数值型配置。默认值 5 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- HUD Current Instance Only（HUD 仅显示当前实例）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- HUD Hide Auto Account（HUD 隐藏自动账户）
 类型：布尔；默认：true
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- HUD Hide Auto L（HUD 隐藏自动嘲讽）
 类型：布尔；默认：false
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- HUD X Rate（HUD 横坐标比例）
 类型：数值；默认：0.7f
 说明：用于控制界面元素在屏幕中的相对位置。默认值 0.7f 一般是作者调过的稳定布局；建议每次只改一个轴，避免元素跑出可视区域。
- HUD Y Rate（HUD 纵坐标比例）
 类型：数值；默认：0.1f
 说明：用于控制界面元素在屏幕中的相对位置。默认值 0.1f 一般是作者调过的稳定布局；建议每次只改一个轴，避免元素跑出可视区域。
- HUD Item Width（HUD 项目宽度）
 类型：数值；默认：300
 说明：这是数值型配置。默认值 300 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- HUD Item Height（HUD 项目高度）
 类型：数值；默认：60
 说明：这是数值型配置。默认值 60 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- HUD Item Gap（HUD 项目间隙）
 类型：数值；默认：10
 说明：这是数值型配置。默认值 10 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- HUD Item Width Strict（HUD 项目是否使用严格宽度）
 类型：布尔；默认：false
 说明：这是开关型配置。默认值 false 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- HUD Text Font Size（HUD 文本字号）
 类型：数值；默认：25
 说明：用于控制文本可读性。默认字号 25 适合多数分辨率；高分屏可适当加大，低分辨率建议减少以免拥挤。
- HUD Text Opacity (0~1)（HUD 文本不透明度 (0~1)）
 类型：数值；默认：1.0f
 说明：用于控制透明度。默认值 1.0f 兼顾可见性和遮挡；如果你觉得挡视线可小幅下调，若看不清可小幅上调。
- HUD Background（HUD背景）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- HUD Background Round Corners（HUD 背景是否圆角）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Transparent（透明）
 类型：通用；默认：NAMED_COLOR_BASE_LIST
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- HUD Background Opacity (0~1)（HUD 背景不透明度 (0~1)）
 类型：数值；默认：0.55f
 说明：用于控制透明度。默认值 0.55f 兼顾可见性和遮挡；如果你觉得挡视线可小幅下调，若看不清可小幅上调。
- HUD Background Roundness（HUD背景圆角度）
 类型：数值；默认：0.35f
 说明：用于细调显示样式和间距。默认值 0.35f 通常是平衡视觉效果与紧凑度的设置，建议小步调整并实时观察。
- HUD Background Shadow（HUD 背景阴影）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- HUD Background Shadow Thickness（HUD 背景阴影厚度）
 类型：数值；默认：2.0f
 说明：用于细调显示样式和间距。默认值 2.0f 通常是平衡视觉效果与紧凑度的设置，建议小步调整并实时观察。
- HUD Background Shadow Opacity (0~1)（HUD 背景阴影不透明度（0~1））
 类型：数值；默认：0.45f
 说明：用于控制透明度。默认值 0.45f 兼顾可见性和遮挡；如果你觉得挡视线可小幅下调，若看不清可小幅上调。
- HUD In Sharpness（是否显示HUD。 In Sharpness）
 类型：数值；默认：16.0f
 说明：这是数值型配置。默认值 16.0f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- HUD Out Sharpness（是否显示HUD。 Out Sharpness）
 类型：数值；默认：20.0f
 说明：这是数值型配置。默认值 20.0f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- HUD Move Sharpness（是否显示HUD。 Move Sharpness）
 类型：数值；默认：18.0f
 说明：这是数值型配置。默认值 18.0f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- HUD Leave Max Time (ms)（是否显示HUD。 离开 最大数量 Time (ms)）
 类型：数值；默认：2200L
 说明：这是数值型配置。默认值 2200L 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- HUD Time Countdown（HUD 时间倒数）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- HUD Highlight Cooldown（HUD 高亮冷却）
 类型：枚举；默认："Override"
 说明：用于控制检测/刷新/动画节奏。默认值 Override 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
 可选：Off（关闭）；Override（覆盖）；Color（颜色）
## 历史更新
- 68. 【PRO】添加模块：Auto L，在 Minecraft 中自动嘲讽你的敌人。建议打开 ChatQueue 模块实时查看待发送消息队列。
- 69. 添加模块：Auto Text，包括 AutoGG, AutoThankWatchdog, AutoLogin, AutoRegister 等，在 Minecraft 自动发送文本。建议打开 ChatQueue 模块实时查看待发送消息队列。
- 70. 添加模块：Chat Queue，管理 Minecraft 消息发送队列，并提供一个 HUD，可以显示每条消息的剩余时间以及发送冷却的情况。

## 备注


## 相关命令
```bash

/bili live cq
/bili live cq list
/bili live cq show
/bili live cq display
显示直播弹幕发送队列信息。


/bili live clcq
/bili live cq clear
/bili live cq pause
/bili live cq resume
/bili live cq add <msg...>
/bili live cq direct <msg...>
直播弹幕发送队列控制。clear 等价于 clcq；pause/resume 暂停或继续队列；add 入队；direct 立即发送不入队。

```

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
