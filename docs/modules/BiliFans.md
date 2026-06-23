# BiliFans
B站粉丝
分类：Web
描述：监控B站粉丝并发送通知。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
BiliFans（B站粉丝）用于监控B站粉丝并发送通知。
可以不需要登陆B站。但是如果你打开了Show Fans Nickname，你就必须要先登陆（否则无法获取新增粉丝列表）

## 配置项
- User IDs (Sep With Semicolon)（用户 ID (用分号分隔)）
 类型：通用；默认：WORMWAKER_MID
 说明：用于指定模块实际作用对象。建议先对单个目标测试通过，再扩大到多目标，降低误操作风险。
- Update Cooldown (s)（更新冷却（秒））
 类型：数值；默认：60L
 说明：用于控制检测/刷新/动画节奏。默认值 60L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Notify Mode（通知模式）
 类型：枚举；默认："Notify"
 说明：用于选择结果反馈方式。默认值 Notify 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：Off（关闭）；Notify（通知）；Console Output（控制台输出）；Actionbar（行为栏）；Chatter（弹幕）；Title（标题）；WinToast（系统通知）；Speak（讲述）
- Show Fans Nickname (PRO)（显示粉丝昵称（专业版））
 类型：枚举；默认："Off"
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
 可选：Off（关闭）；Only Self（仅自己）
- Notify Famous Fans (Own Only) (PRO)（通知名人粉丝（仅自己）（专业版））
 类型：枚举；默认："Off"
 说明：仅在 Show Fans Nickname (PRO)=Only Self 且能识别新增粉丝昵称时生效；新增粉丝达到 10000 粉丝后，会按所选模式额外提示。
 可选：Off（关闭）；Notify（通知）；Chatter（弹幕）；Actionbar（行为栏）；Chat Bar（聊天栏）；WinToast（系统通知）；Speak（讲述）；Real Chatter（真弹幕）
- Notify Fans Increase（通知涨粉）
 类型：布尔；默认：true
 说明：用于选择结果反馈方式。默认值 true 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Notify Fans Decrease（通知掉粉）
 类型：布尔；默认：true
 说明：用于选择结果反馈方式。默认值 true 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Fans Change Event（粉丝数变化事件）
 类型：枚举；默认："Sound"
 说明：这是选项型配置。默认值 Sound 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Off（关闭）；Sound（音效）；Command（命令）
- Custom Fans Increase Sound（自定义涨粉音效）
 类型：文本；默认："levelup.wav"
 说明：用于选择结果反馈方式。默认值 levelup.wav 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Custom Fans Decrease Sound（自定义掉粉音效）
 类型：文本；默认："pling_low.wav"
 说明：用于选择结果反馈方式。默认值 pling_low.wav 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Custom Fans Increase Command（自定义涨粉命令）
 类型：文本；默认：""
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Custom Fans Decrease Command（自定义掉粉命令）
 类型：文本；默认：""
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
 
- Async（异步）
 类型：布尔；默认：true
 说明：用于控制是否异步处理。默认值 true 通常能减少主线程卡顿；若你遇到并发相关问题，可回退到更保守设置测试。
- Connect Timeout (s)（连接超时时间 (秒)）
 类型：数值；默认：5L
 说明：用于控制检测/刷新/动画节奏。默认值 5L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- HUD（是否显示HUD。）
 类型：布尔；默认：false
 说明：这是开关型配置。默认值 false 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Hide HUD When Menu On（打开菜单时隐藏HUD）
 类型：布尔；默认：true
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Action On Failure（失败时的行为）
 类型：枚举；默认："Pause Temporarily"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 Pause Temporarily ，确认稳定后再逐项切换比较效果。
 可选：Ignore（忽略）；Pause Temporarily（暂时暂停）；Disable Module（关闭模块）
- Threshold Max（阈值最大值）
 类型：数值；默认：16U
 说明：这是数值型配置。默认值 16U 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Pause Duration (s)（暂停时长（秒））
 类型：数值；默认：30L
 说明：用于控制检测/刷新/动画节奏。默认值 30L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- HUD Color（HUD 颜色）
 类型：枚举；默认："Colorful"
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- HUD User Index (Sep With Semicolon)（HUD 用户索引 (用分号分隔)）
 类型：文本；默认：""
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- HUD Font Size（HUD 字号）
 类型：数值；默认：30
 说明：用于控制文本可读性。默认字号 30 适合多数分辨率；高分屏可适当加大，低分辨率建议减少以免拥挤。
- HUD Line Gap（HUD 行距）
 类型：数值；默认：5
 说明：用于细调显示样式和间距。默认值 5 通常是平衡视觉效果与紧凑度的设置，建议小步调整并实时观察。
- HUD Opacity (0~1)（HUD 不透明度）
 类型：数值；默认：0.8f
 说明：用于控制透明度。默认值 0.8f 兼顾可见性和遮挡；如果你觉得挡视线可小幅下调，若看不清可小幅上调。
- HUD Format（HUD 格式）
 类型：枚举；默认："Fans: Number"
 说明：这是选项型配置。默认值 Fans: Number 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Number（号码）；Fans: Number（粉丝: 数字）；Number Fans（数字 粉丝）；Name Fans: Number（名字 粉丝: 数字）；Name: Number（名字: 数字）；Name: Number Fans（名字: 数字 粉丝）

- HUD X Rate（HUD 横坐标比例）
 类型：数值；默认：0.8f
 说明：用于控制界面元素在屏幕中的相对位置。默认值 0.8f 一般是作者调过的稳定布局；建议每次只改一个轴，避免元素跑出可视区域。
- HUD Y Rate（HUD 纵坐标比例）
 类型：数值；默认：0.75f
 说明：用于控制界面元素在屏幕中的相对位置。默认值 0.75f 一般是作者调过的稳定布局；建议每次只改一个轴，避免元素跑出可视区域。
## 历史更新
- 新增 Notify Famous Fans (Own Only) (PRO)，可在自己的新增粉丝中识别万粉以上用户并额外通知。
- 18. 修改 Bili Fans 使之可以通知客户端退出期间的粉丝变化。
- 15. 为 Bili Fans 添加新配置：
- 8. 添加模块： Bili Fans，监控B站粉丝数量，如果有变化会触发通知。

## 备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

## 相关命令

/bili fans
/bili fans list [limit=100]
/bili fans enum [limit=100]
查看自己的粉丝列表。limit 为数量限制。如果粉丝太多，你可能因B站限制无法全部看完。【PRO】版的输出会更详细。

/bili fans find &lt;kw...&gt;
/bili fans findf &lt;kw...&gt;
/bili fans search &lt;limit&gt; &lt;kw...&gt;
/bili fans searchf &lt;limit&gt; &lt;kw...&gt;
【PRO】以昵称关键字kw搜索自己的粉丝。两个带f后缀的为快速模式，找到一个很符合的结果就会直接输出并停止。search(f)可以指定搜索范围limit（表示前limit个粉丝中搜索）, find 则为B站支持的最大搜索范围（可能为1000）中搜索。findf 为前 100 个中搜索。你可以使用UID=或UID:开头搜索指定UID的用户。

/test fans_up
/test fans_down
用于测试。

## 相关模块
- [BiliNotifier (B站通知)](./BiliNotifier.md)
- [BiliSettings (B站设定)](./BiliSettings.md)

## 相关资料
无
