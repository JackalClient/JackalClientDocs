# ChestStealer
箱子小偷
分类：未分类
描述：暂无描述

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
一个实验性模块，用于测试箱子小偷的纯视觉实现。

## 配置项

> 配置界面说明（v1.1.7）：四种实验性容器识别开关已合并为 `Experimental Container Detection` 多选项。
- Async（异步）
 类型：布尔；默认：true
 说明：用于控制是否异步处理。默认值 true 通常能减少主线程卡顿；若你遇到并发相关问题，可回退到更保守设置测试。
- Trigger Mode（触发模式）
 类型：枚举；默认："Hotkey"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 Hotkey ，确认稳定后再逐项切换比较效果。
 可选：Instant（瞬间）；Right Mouse Button（鼠标右键）；Hotkey（快捷键）；Experimental（实验性）；Experimental Mouse Move（实验性鼠标移动）
 两种实验模式都不检测鼠标右键，并会把 Container Type 设为 Auto。光标从隐藏变为显示时只截图识别一次容器：Experimental 在识别成功后启动，Experimental Mouse Move 则复用识别结果，等待鼠标离开 Minecraft 窗口中心达到设定距离后启动。光标从显示变为隐藏时立即打断，下一次隐藏到显示前不会再次识别。
- Trigger Hotkey（触发快捷键）
 类型：按键/复合；默认：`{ { "Keybind", {'B' } }`}
 说明：用于设置快捷键触发。建议避免与系统或常用软件冲突，优先使用组合键提高可控性。
- Trigger Hotkey Interrupt（触发快捷键中断）
 类型：枚举；默认："Close Container"
 说明：用于设置快捷键触发。建议避免与系统或常用软件冲突，优先使用组合键提高可控性。
 可选：Off（关闭）；Stop（停止）；Close Container（关闭容器）
- Interrupt Key 1（中断键 1）
 类型：按键/复合；默认：`{ { "Keybind", {'E' } }`}
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Interrupt Key 2（中断键 2）
 类型：按键/复合；默认：`{ { "Keybind", {VK_ESCAPE } }`}
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- HUD（是否显示HUD。）
 类型：枚举；默认："Off"
 说明：这是选项型配置。默认值 Off 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Off（关闭）；Basic（基础）
- HUD Font Size（HUD 字号）
 类型：数值；默认：30
 说明：用于控制文本可读性。默认字号 30 适合多数分辨率；高分屏可适当加大，低分辨率建议减少以免拥挤。
- HUD Target Slot Color（HUD 目标格子颜色）
 类型：枚举；默认："Rainbow"
 说明：用于指定模块实际作用对象。建议先对单个目标测试通过，再扩大到多目标，降低误操作风险。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Mouse Easing Movement（鼠标缓动）
 类型：枚举；默认："EaseInOutSine"
 说明：这是选项型配置。默认值 EaseInOutSine 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Off（关闭）；Linear（线性）；EaseInOutSine（未收录）；EaseInOutExpo（未收录）；EaseInOutBack（未收录）
- Mouse Easing Duration (ms)（鼠标缓动时长 (毫秒)）
 类型：数值；默认：50L
 说明：用于控制检测/刷新/动画节奏。默认值 50L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Notify Mode（通知模式）
 类型：枚举；默认："Notify"
 说明：用于选择结果反馈方式。默认值 Notify 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：Off（关闭）；Notify（通知）；Chatter（弹幕）；Title（标题）
- Slot Selector（格子选择器）
 类型：枚举；默认："No Empty Detect"
 说明：这是选项型配置。默认值 No Empty Detect 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：All（所有）；No Empty Detect（非空检测）
- Slot No Empty Single Channel Threshold（Slot 否 Empty 单个 Channel Threshold）
 类型：数值；默认：1000
 说明：这是数值型配置。默认值 1000 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Slot Order（格子顺序）
 类型：枚举；默认："Random"
 说明：这是选项型配置。默认值 Random 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Snake（蛇形）；Reverse Snake（反转蛇形）；Sequential（顺序）；Reverse（颠倒）；Random（随机）
- Item Operation（物品操作）
 类型：枚举；默认："Steal"
 说明：这是选项型配置。默认值 Steal 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Steal（偷窃）；Drop（丢弃）；Drag Steal（拖曳偷窃）
- Coordinate Mode（坐标模式）
 类型：枚举；默认："Semi-Auto"
 说明：Visual Auto 使用 PrintWindow 获取当前 Minecraft 窗口画面，避免 Jackal Client 或其他遮挡窗口污染截图；仅接受窗口中心附近且符合当前容器纹理比例的高亮彩色外框，并自动推算格子位置与大小。漏斗和发射器格子会按原版纹理居中。识别失败时停止操作，避免误点。Semi-Auto 按窗口中心和 Y 偏移定位，Manual 使用固定偏移。
 可选：Visual Auto（视觉自动识别）；Semi-Auto（半自动）；Manual（手动）
- Visual Boundary Min Brightness（视觉边框最低亮度）
 类型：数值；默认：150
 说明：Visual Auto 的候选边框像素最低亮度。外框颜色较暗时可适当降低。
- Visual Boundary Min Color Range（视觉边框最低色差）
 类型：数值；默认：40
 说明：Visual Auto 要求候选像素最大与最小颜色通道之间至少达到该差值，用于排除白色、灰色界面线。
- Visual Boundary Min Line Coverage (%)（视觉边框最低线覆盖率）
 类型：数值；默认：15
 说明：候选横线或竖线至少覆盖客户区对应尺寸的百分比。外框断续时可适当降低。
- Visual Boundary Max Center Offset (%)（视觉边框最大中心偏移）
 类型：数值；默认：15
 说明：限制候选外框中心相对窗口宽度和高度的最大偏移百分比，超出任一方向即视为无效。
- Visual Boundary Max Centerline Offset (px)（视觉边框最大中线偏移 (像素)）
 类型：数值；默认：50
 说明：限制候选界面的纵向中线与 Minecraft 窗口纵向中心线之间的像素距离，超过阈值即视为无效。
- Visual Auto Debug HUD（视觉自动识别调试 HUD）
 类型：布尔；默认：false
 说明：显示客户区、候选外框、四边覆盖率、宽高比、评分和推算格子。有效候选使用绿色外框与黄色格子，无效候选使用红框；检测结束后保持 3.5 秒，再用 2.5 秒淡出。
- Container Type（容器类型）
 类型：枚举；默认："Small Chest"
 说明：Auto 会从 PrintWindow 窗口截图中估算容器区及下方背包的格子数量和布局，识别为小型箱子、大型箱子、漏斗或发射器/投掷器。布局不属于这些类型或证据不足时不会触发。Minecraft Utils 的 Inventory Key 按下后 500 毫秒内若识别为漏斗或小型箱子，本次结果会被判为无效，避免打开玩家背包时误触发；该豁免结果不会在 Visual Auto Debug HUD 中绘制红色候选框。Experimental 两种模式识别失败时只写入调试日志和调试 HUD，不显示错误通知。
 可选：Auto（自动）；Small Chest（小型箱子）；Large Chest（大型箱子）；Hopper（漏斗）；Dispenser（发射器）
- Auto Slot Edge Threshold（自动识别格子边缘阈值）
 类型：数值；默认：12
 说明：Auto 判断格子边缘时要求达到的最低明暗差。材质包边缘较弱时可适当降低。
- Auto Minimum Slot Coverage (%)（自动识别最低格子覆盖率）
 类型：数值；默认：55
 说明：Auto 要求容器区和下方背包分别达到的最低模板格子命中率。
- Slot Size（格子大小）
 类型：数值；默认：52
 说明：这是数值型配置。默认值 52 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Semi-Auto Y Offset Slots (Small Chest)（半自动Y偏移格子数 (小型箱子)）
 类型：数值；默认：3.12f
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Semi-Auto Y Offset Slots (Large Chest)（半自动Y偏移格子数 (大型箱子)）
 类型：数值；默认：4.60f
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Semi-Auto Y Offset Slots (Hopper)（半自动Y偏移格子数 (漏斗)）
 类型：数值；默认：2.00f
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Semi-Auto Y Offset Slots (Dispenser)（半自动Y偏移格子数 (发射器)）
 类型：数值；默认：4.10f
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Manual X Offset (Small Chest)（手动X偏移 (小型箱子)）
 类型：数值；默认：-240
 说明：这是数值型配置。默认值 -240 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Manual X Offset (Large Chest)（手动X偏移 (大型箱子)）
 类型：数值；默认：-240
 说明：这是数值型配置。默认值 -240 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Manual X Offset (Hopper)（手动X偏移 (漏斗)）
 类型：数值；默认：-132
 说明：这是数值型配置。默认值 -132 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Manual X Offset (Dispenser)（手动X偏移 (发射器)）
 类型：数值；默认：-78
 说明：这是数值型配置。默认值 -78 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Manual Y Offset (Small Chest)（手动Y偏移 (小型箱子)）
 类型：数值；默认：-198
 说明：这是数值型配置。默认值 -198 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Manual Y Offset (Large Chest)（手动Y偏移 (大型箱子)）
 类型：数值；默认：-278
 说明：这是数值型配置。默认值 -278 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Manual Y Offset (Hopper)（手动Y偏移 (漏斗)）
 类型：数值；默认：-141
 说明：这是数值型配置。默认值 -141 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Manual Y Offset (Dispenser)（手动Y偏移 (发射器)）
 类型：数值；默认：-198
 说明：这是数值型配置。默认值 -198 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Slot Internal Random Offset（格子内部随机偏移）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Click Internal Gap (ms)（点击内部延迟 (毫秒)）
 类型：数值；默认：40L
 说明：这是数值型配置。默认值 40L 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Key Internal Gap 1 (ms)（按键内部延迟1 (毫秒)）
 类型：数值；默认：40L
 说明：这是数值型配置。默认值 40L 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Key Internal Gap 2 (ms)（按键内部延迟2 (毫秒)）
 类型：数值；默认：40L
 说明：这是数值型配置。默认值 40L 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Start Delay Min (ms)（开始延迟最小值 (毫秒)）
 类型：数值；默认：100
 说明：这是数值型配置。默认值 100 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Start Delay Max (ms)（开始延迟最大值 (毫秒)）
 类型：数值；默认：200
 说明：这是数值型配置。默认值 200 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Operate Delay Min (ms)（操作延迟最小值 (毫秒)）
 类型：数值；默认：150
 说明：这是数值型配置。默认值 150 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Operate Delay Max (ms)（操作延迟最大值 (毫秒)）
 类型：数值；默认：250
 说明：这是数值型配置。默认值 250 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- End Delay Min (ms)（结束延迟最小值 (毫秒)）
 类型：数值；默认：100
 说明：这是数值型配置。默认值 100 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- End Delay Max (ms)（结束延迟最大值 (毫秒)）
 类型：数值；默认：200
 说明：这是数值型配置。默认值 200 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Auto Close（自动合上）
 类型：布尔；默认：true
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Auto Close When No Items Detected（未检测到物品时自动关闭）
 类型：布尔；默认：false
 说明：Slot Selector 不为 All 且过滤后没有检测到任何目标物品时，决定是否仍执行 Auto Close。默认不关闭容器。
- Not Trigger While Moving（移动中不触发）
 类型：布尔；默认：true
 说明：启用后，触发前移动仍会阻止启动；鼠标缓动期间开始移动时，缓动照常完成，但物品点击会等待移动停止。等待期间若按中断键、打开 ClickGUI 或离开 Minecraft 窗口，则立即中断且不推进格子索引。
- Only When Cursor Shown（仅光标显示时）
 类型：布尔；默认：true
 说明：启用后，仅在系统光标可见时允许触发。实验性模式以光标从隐藏变为显示作为单次识别条件，重新隐藏时立即中断。
- Experimental Mouse Move Distance（实验性鼠标移动距离）
 类型：数值；默认：16
 说明：Experimental Mouse Move 要求鼠标相对 Minecraft 窗口中心偏离的最小像素距离。
- Experimental Mouse Move Timeout (ms)（实验性鼠标移动超时 (毫秒)）
 类型：数值；默认：2000
 说明：从光标由隐藏变为显示开始计时，仅在该时限内接受鼠标移动触发；超时后本次 UI 不再检测移动。
- Experimental Mouse Move Direction（实验性鼠标移动方向）
 类型：枚举；默认："Up"
 说明：限制相对窗口中心的移动方向。Any 不限制方向；Up 接受窗口中心上方的完整半平面，即鼠标点与中心的夹角位于左上和右上之间；Left 和 Right 分别接受中心左侧和右侧。
 可选：Any（任意）；Up（向上）；Left（左侧）；Right（右侧）
- Experimental Cancel On Mouse Click（实验性检测时点击鼠标则取消）
 类型：布尔；默认：true
 说明：打开 UI 并完成单次识别后，如果正式触发前点击左键或右键，则取消本次 UI 的全部后续判定。
- Experimental Detect Small Chest / Large Chest / Hopper / Dispenser
 类型：布尔；默认：全部 true
 说明：分别控制两种 Experimental 模式是否把小型箱子、大型箱子、漏斗和发射器/投掷器视为有效候选。关闭某项后，对应界面不会触发。
- Exemption Key Enabled（启用豁免按键）
 类型：布尔；默认：true
 说明：开启后，按住豁免按键会阻止 ChestStealer 触发，并中断当前操作。
- Exemption Key（豁免按键）
 类型：按键/复合；默认：Left Shift
 说明：ChestStealer 的临时豁免按键，仅在 Exemption Key Enabled 开启时生效。
- Minecraft Window Check（Minecraft 窗口检查）
 类型：布尔；默认：true
 说明：仅允许在 Minecraft 前台窗口中触发。MinecraftUtils 开启时直接复用其窗口识别结果，否则使用客户端统一的严格窗口识别。
- Auto Close Key（自动合上按键）
 类型：按键/复合；默认：`{ { "Keybind", {'E' } }`}
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Drop Items Key（丢东西按键）
 类型：按键/复合；默认：`{ { "Keybind", {VK_LCONTROL, 'Q' } }`}
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
## 历史更新
- ChestStealer 实验模式新增移动超时、点击取消和四类容器检测开关；背包键豁免覆盖小型箱子且不绘制红框，视觉识别新增中线偏移限制。
- ChestStealer 新增背包界面漏斗误判抑制、豁免按键、空容器自动关闭控制和实验性鼠标移动方向；实验模式识别失败不再通知。
- ChestStealer 新增自动容器类型、仅光标显示时触发，以及两种基于光标显示状态进行单次截图识别的实验性触发模式。
- ChestStealer 新增 Visual Auto 坐标模式、配置分组与条件显示，并统一 Minecraft 窗口识别逻辑。
- 28. 添加模块：ChestStealer，这里不展开描述。

## 备注
仅作测试用途，请勿在正式游戏中使用，如造成游戏账号封禁，与作者无关。

## 相关命令
无

## 相关模块
无

## 相关资料
无
