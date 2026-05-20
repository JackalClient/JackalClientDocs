MacroPlayer
宏播放
分类：Control
描述：播放键盘和鼠标操作的宏。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
观看视频 [\[ft.Jackal\] 使用「宏」在丝之歌进行自动刷念珠操作](https://www.bilibili.com/video/BV1VWpdz9EWp)
MacroPlayer（宏播放）用于播放键盘和鼠标操作的宏。
适合键鼠行为控制、输入增强和自动化操作场景。
初次使用可优先调整：Notify、Actionbar Display Key Press、Actionbar Display Mouse Move。

配置项
- Start Delay (ms)（开始延迟 (毫秒)）
 类型：数值；默认：3000L
 说明：这是数值型配置。默认值 3000L 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Close Menu（关闭菜单）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Macro Path（宏路径）
 类型：文本；默认：""
 说明：用于指定文件/目录路径。建议使用稳定的绝对路径并确认权限可访问，避免因路径变化导致功能失效。
- Notify（通知）
 类型：布尔；默认：true
 说明：用于选择结果反馈方式。默认值 true 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Actionbar Display Key Press（行为栏展示按下的键）
 类型：布尔；默认：true
 说明：这是该模块的核心行为开关。默认值 true 通常更稳，建议先验证默认策略再尝试其他模式。
- Actionbar Display Mouse Move（行为栏展示鼠标移动）
 类型：布尔；默认：true
 说明：这是该模块的核心行为开关。默认值 true 通常更稳，建议先验证默认策略再尝试其他模式。
- Actionbar Display Mouse Wheel（行为栏展示鼠标滚轮）
 类型：布尔；默认：true
 说明：这是该模块的核心行为开关。默认值 true 通常更稳，建议先验证默认策略再尝试其他模式。
- Perform Window Assertions（执行窗口断言）
 类型：布尔；默认：true
 说明：用于指定模块实际作用对象。建议先对单个目标测试通过，再扩大到多目标，降低误操作风险。
- Reset Keyboard When Disable（关闭时重置键盘）
 类型：布尔；默认：true
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Auto Loop（自动循环）
 类型：布尔；默认：false
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Playing HUD（播放中HUD）
 类型：枚举；默认："Off"
 说明：这是选项型配置。默认值 Off 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Off（关闭）；Replay（未收录）；Blue Rectangle（红色矩形）
- Playing HUD Font Size（播放中HUD字号）
 类型：数值；默认：50
 说明：用于控制文本可读性。默认字号 50 适合多数分辨率；高分屏可适当加大，低分辨率建议减少以免拥挤。
- Playing HUD X Rate（播放中HUD X比例）
 类型：数值；默认：0.05f
 说明：用于控制界面元素在屏幕中的相对位置。默认值 0.05f 一般是作者调过的稳定布局；建议每次只改一个轴，避免元素跑出可视区域。
- Playing HUD Y Rate（播放中HUD Y比例）
 类型：数值；默认：0.12f
 说明：用于控制界面元素在屏幕中的相对位置。默认值 0.12f 一般是作者调过的稳定布局；建议每次只改一个轴，避免元素跑出可视区域。
- Adjust Offset Step (ms)（偏移调整差值 (毫秒)）
 类型：数值；默认：50L
 说明：这是数值型配置。默认值 50L 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- adjust offset (Earlier)（调整偏移 (早一点)）
 类型：按键/复合；默认：`{ { "Keybind", {VK_LCONTROL, VK_UP } }`}
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- adjust offset (Later)（调整偏移 (晚一点)）
 类型：按键/复合；默认：`{ { "Keybind", {VK_LCONTROL, VK_DOWN } }`}
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- bind (Enable)（绑定 (启用)）
 类型：按键/复合；默认：`{ { "Keybind", {0 } }`}
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- bind (Disable)（绑定 (关闭)）
 类型：按键/复合；默认：`{ { "Keybind", {0 } }`}
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
历史更新
- 27. 为 Macro Player 添加配置：
- 11. 添加模块： MacroPlayer（宏播放）

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令

/key <down/press> <keycode/keyname...>
/key <up/release> <keycode/keyname...>
/key &lt;once&gt; <keycode/keyname...>f
/key &lt;async&gt; <keycode/keyname...>
模拟按键操作。上述四种分别对应按下、松开、同步按下松开、异步按下松开。后两种内部间隔 100 毫秒。

/key repeat &lt;count&gt; <keycode/keyname...>
重复按下并松开count次指定的按键。

/key hold &lt;duration_ms&gt; <keycode/keyname...>
按住指定的按键duration_ms毫秒后松开。

/key clearinput
清空当前输入框（持续按住 Backspace 直到 caret 位置不再变化，最多 30 秒）。

/keys &lt;Keys...&gt;
模拟多个按键操作。注意，多个按键需要用空格分隔而不是逗号或分号。

/input [string...=clipboard]
模拟输入字符串。

/click [interval_ms=50]
/lclick [interval_ms=50]
/leftclick [interval_ms=50]
模拟左键鼠标点击。interval_ms为按下松开之间的间隙时间（毫秒）。

/rclick [interval_ms=50]
/rightclick [interval_ms=50]
模拟右键鼠标点击。interval_ms为按下松开之间的间隙时间（毫秒）。

/mclick [interval_ms=50]
/midclick [interval_ms=50]
/middleclick [interval_ms=50]
模拟中键鼠标点击。interval_ms为按下松开之间的间隙时间（毫秒）。

/kbstatus
列出正在被按下的按键。包括鼠标。

/clearkb
释放所有正在被按下的按键。包括鼠标。

/cleartogglekeys
清空正在被按下的切换键。

相关模块
- [AutoClicker (连点器)](./AutoClicker.md)
- [MacroRecorder (宏录制)](./MacroRecorder.md)

相关资料
 [\[ft.Jackal\] 使用「宏」在丝之歌进行自动刷念珠操作](https://www.bilibili.com/video/BV1VWpdz9EWp)
