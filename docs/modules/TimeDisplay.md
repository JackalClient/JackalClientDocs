# TimeDisplay
时间显示
分类：Render
描述：暂无描述

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
TimeDisplay（时间显示）用于显示系统时间。

## 配置项
- Font Size（字号）
 类型：数值；默认：50
 说明：用于控制文本可读性。默认字号 50 适合多数分辨率；高分屏可适当加大，低分辨率建议减少以免拥挤。
- X Rate（横坐标比例）
 类型：数值；默认：0.2f
 说明：用于控制界面元素在屏幕中的相对位置。默认值 0.2f 一般是作者调过的稳定布局；建议每次只改一个轴，避免元素跑出可视区域。
- Y Rate（纵坐标比例）
 类型：数值；默认：0.8f
 说明：用于控制界面元素在屏幕中的相对位置。默认值 0.8f 一般是作者调过的稳定布局；建议每次只改一个轴，避免元素跑出可视区域。
- Style（风格）
 类型：枚举；默认："Flip"
 说明：这是选项型配置。默认值 Flip 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Classic（经典）；Flip（翻动）；Flip + Clock（翻动钟表）
- Flip Duration (ms)（翻动时长（毫秒））
 类型：数值；默认：400.0f
 说明：用于控制检测/刷新/动画节奏。默认值 400.0f 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Online Time（在线时间）
 类型：布尔；默认：false
 说明：打开后会使用 Online Time 模块采用网络时间而不是本地系统时间。
- Online Time Update Cooldown (ms)（在线时间更新冷却 (毫秒)）
 类型：数值；默认：60000L
 说明：网络时间同步冷却。
- Time Announcement（报时）
 类型：枚举；默认："Notify"
 说明：报时通知类型。
 可选：Off（关闭）；Notify（通知）；Chatter（弹幕）；WinToast（系统通知）；Title（标题）；Actionbar（行为栏）
- Time Announcement Mode（报时模式）
 类型：枚举；默认："Half Hour"
 说明：多久报一次时间。
 可选：Half Hour（半小时）；Hour（小时）；Custom（自定义）
- Time Announcement Custom Rules (Sep With Semicolon)（报时自定义规则（用分号分隔））
 类型：文本；默认："**:00;**:20;**:40"
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Time Announcement Title Color（报时标题颜色）
 类型：枚举；默认："Aqua-Blue"
 说明：用于选择结果反馈方式。默认值 Aqua-Blue 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Time Announcement Title Font Size（报时标题字号）
 类型：数值；默认：100
 说明：用于控制文本可读性。默认字号 100 适合多数分辨率；高分屏可适当加大，低分辨率建议减少以免拥挤。
- Time Announcement Highlight（报时高亮）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Color（颜色）
 类型：枚举；默认："Rainbow"
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
 可选：Flow（流动）；其余颜色见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- New Day Notification（新日子通知）
 类型：枚举；默认："Title"
 说明：在零点的时候通知这是一年中的第几天。
 可选：Off（关闭）；Notify（通知）；Chatter（弹幕）；WinToast（系统通知）；Title（标题）；Actionbar（行为栏）
- New Day Title Color（新日子标题颜色）
 类型：枚举；默认："Flow"
 说明：用于选择结果反馈方式。默认值 Flow 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：Flow（流动）；其余颜色见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- New Day Title Font Size（新日子标题字号）
 类型：数值；默认：300
 说明：用于控制文本可读性。默认字号 300 适合多数分辨率；高分屏可适当加大，低分辨率建议减少以免拥挤。
- Background（背景）
 类型：布尔；默认：false
 说明：这是开关型配置。默认值 false 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Background Round Corners（背景圆角）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Background Roundness（背景圆滑程度）
 类型：数值；默认：0.3f
 说明：用于细调显示样式和间距。默认值 0.3f 通常是平衡视觉效果与紧凑度的设置，建议小步调整并实时观察。
- Background Opacity (0~1)（背景不透明度 (0~1)）
 类型：数值；默认：0.8f
 说明：用于控制透明度。默认值 0.8f 兼顾可见性和遮挡；如果你觉得挡视线可小幅下调，若看不清可小幅上调。
- Background Shadow（背景阴影）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Background Shadow Thickness（背景阴影厚度）
 类型：数值；默认：20.0f
 说明：用于细调显示样式和间距。默认值 20.0f 通常是平衡视觉效果与紧凑度的设置，建议小步调整并实时观察。
- Background Shadow Opacity (0~1)（背景阴影不透明度 (0~1)）
 类型：数值；默认：0.5f
 说明：用于控制透明度。默认值 0.5f 兼顾可见性和遮挡；如果你觉得挡视线可小幅下调，若看不清可小幅上调。
- Background Color（背景颜色）
 类型：枚举；默认："Black"
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
 可选：Flow（流动）；Transparent（透明）；其余颜色见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Background Shadow Color（背景阴影颜色）
 类型：枚举；默认："Black"
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Tick Sound (PRO)（滴答声（专业版））
 类型：枚举；默认："Dynamic"
 说明：用于选择结果反馈方式。默认值 Dynamic 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：Off（关闭）；Always（总是）；Silence（寂静）；Dynamic（动态）；Music Stopped（音乐停止时）
- Tick Sound Volume（滴答声音量）
 类型：数值；默认：20
 说明：用于选择结果反馈方式。默认值 20 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Tick Sound Silence Threshold（滴答声寂静阈值）
 类型：数值；默认：300.0f
 说明：用于选择结果反馈方式。默认值 300.0f 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Tick Sound Pitch（滴答声音高）
 类型：枚举；默认："Binary"
 说明：用于选择结果反馈方式。默认值 Binary 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：Normal（普通）；Binary（二进制）；Vary（变动）
- Tick Sound Pan（滴答声声像）
 类型：枚举；默认："Surround"
 说明：用于选择结果反馈方式。默认值 Surround 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：Normal（普通）；Binary（二进制）；Surround（环绕）
- Whiter（更白一点）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Wave Color（波动颜色）
 类型：布尔；默认：true
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
- Opacity (0~1)（不透明度 (0~1））
 类型：数值；默认：0.7f
 说明：用于控制透明度。默认值 0.7f 兼顾可见性和遮挡；如果你觉得挡视线可小幅下调，若看不清可小幅上调。
- Transparent（透明）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Text Background（文本背景）
 类型：布尔；默认：false
 说明：这是开关型配置。默认值 false 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Hide When Menu On（菜单打开时不显示）
 类型：布尔；默认：false
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
## 历史更新
- 37. 将 TimeDisplay 模块的配置 Half Hour Notify 改为 Half Hour Notification，且可以选择以下选项：
- 44. 将 TimeDisplay 模块的 Rainbow 选项改为 Color，可以选颜色预设。
- 50. 为 TimeDisplay 添加配置：

## 备注


## 相关命令
/timedisplay

## 相关模块
- [OnlineTime (在线时间)](./OnlineTime.md)
- [TimeManager (时间管理)](./TimeManager.md)

## 相关资料
无
