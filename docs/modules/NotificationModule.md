# NotificationModule
通知
分类：Misc
描述：显示客户端的通知。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
Notification（通知）用于控制客户端的通知。
建议一直开着。

## 配置项
- Notify Metro Style（地铁型通知风格）
 类型：枚举；默认："Vape"
 说明：用于选择结果反馈方式。默认值 Vape 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：Old（老版）；Vape（未收录）；SilenceFix（未收录）；Naven（未收录）；Nexus（未收录）；Acid（未收录）；Southside（南方）；LiquidBounce NextGen（水影 NextGen）
 
- Override Notify When Hidden（隐藏时用什么代替普通通知）
 类型：枚举；默认："WinToast"
 说明：用于选择结果反馈方式。默认值 WinToast 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：Off（关闭）；WinToast（系统通知）；MessageBox（消息框）
- Notify MessageBox Duration Coefficient（通知对话框时长系数）
 类型：数值；默认：0.2f
 说明：用于控制检测/刷新/动画节奏。默认值 0.2f 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Notify Style（通知风格）
 类型：枚举；默认："Metro"
 说明：用于选择结果反馈方式。默认值 Metro 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：WinToast（系统通知）；Metro（地铁）；Chatter（弹幕）；Fancy（优美）；MessageBox（消息框）

- Notify Translator（通知翻译器）
 类型：枚举；默认："Off"
 说明：用于选择结果反馈方式。默认值 Off 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：Off（关闭）；Latency（延迟）；Ready（就绪）
- Notify MessageBox Random Position（通知对话框随机位置）
 类型：布尔；默认：true
 说明：用于选择结果反馈方式。默认值 true 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Notify MessageBox Set as Foreground（通知对话框设为前台）
 类型：布尔；默认：true
 说明：用于选择结果反馈方式。默认值 true 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Notify Font Size（通知字号）
 类型：数值；默认：35
 说明：用于控制文本可读性。默认字号 35 适合多数分辨率；高分屏可适当加大，低分辨率建议减少以免拥挤。
- Notify Min Width（通知最小宽度）
 类型：数值；默认：200
 说明：用于选择结果反馈方式。默认值 200 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Notify Height（通知高度）
 类型：数值；默认：45
 说明：用于选择结果反馈方式。默认值 45 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Notify Stay Time (0~1)（通知停留时间 (0~1)）
 类型：数值；默认：0.3
 说明：用于选择结果反馈方式。默认值 0.3 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Notify Max Length（通知最大长度）
 类型：数值；默认：120
 说明：用于选择结果反馈方式。默认值 120 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Notify Opacity (0~1)（通知不透明度 (0~1)）
 类型：数值；默认：1.0f
 说明：用于控制透明度。默认值 1.0f 兼顾可见性和遮挡；如果你觉得挡视线可小幅下调，若看不清可小幅上调。
- Notify Horizontal Margin（通知横向间隙）
 类型：数值；默认：80
 说明：用于选择结果反馈方式。默认值 80 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Notify Vertical Margin（通知 纵向 Margin）
 类型：数值；默认：150
 说明：用于选择结果反馈方式。默认值 150 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Notify Line Gap（通知字距）
 类型：数值；默认：10
 说明：用于细调显示样式和间距。默认值 10 通常是平衡视觉效果与紧凑度的设置，建议小步调整并实时观察。
- Notify Start Position（通知源位置）
 类型：枚举；默认："Bottom-Right"
 说明：用于选择结果反馈方式。默认值 Bottom-Right 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：Bottom-Right（右下角）；Top-Right（顶端-右侧）；Bottom-Left（左下角）；Top-Left（顶端-左侧）
- Notify WinToast Attempt to Jump Queue（系统风格通知是否尝试插队）
 类型：布尔；默认：false
 说明：用于选择结果反馈方式。默认值 false 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Notify AntiSpam（通知反刷屏）
 类型：布尔；默认：true
 说明：用于选择结果反馈方式。默认值 true 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Notify AntiSpam Min Similarity (0~1)（通知反刷屏最小相似度(0~1)）
 类型：数值；默认：0.97f
 说明：用于选择结果反馈方式。默认值 0.97f 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Notify Module Toggle（通知模块切换）
 类型：枚举；默认："Always"
 说明：用于选择结果反馈方式。默认值 Always 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：Off（关闭）；Classic（经典）；Keybind（未收录）；Always（总是）
- Off（关闭）
 类型：文本；默认："Classic", "Keybind", "Always"
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Notify Font Reload（通知字体重载）
 类型：布尔；默认：false
 说明：用于选择结果反馈方式。默认值 false 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Notify Texture Load（通知贴图加载）
 类型：布尔；默认：false
 说明：用于选择结果反馈方式。默认值 false 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Notify Device Changes（通知设备切换）
 类型：枚举；默认："Audio Device"
 说明：用于选择结果反馈方式。默认值 Audio Device 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：Off（关闭）；Audio Device（音频设备）；All（所有）
- Sound（通知音效）
 类型：布尔；默认：true
 说明：控制通知是否发出音效。关闭后通知不播放音效。
- Sound Volume (0~100)（通知音量）
 类型：数值；默认：100
 说明：控制通知音效音量，0 为静音，100 为最大音量。
- Sound Pitch Randomization (0~1)（通知音高随机化）
 类型：数值；默认：0.1f
 说明：控制通知音效播放前基于 1.0 默认音高的随机偏移幅度，值越大随机音高偏离越明显。- Output Notification（输出通知）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Log Notification（日志记录通知）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Output Notification Debug String（输出通知调试字符串）
 类型：布尔；默认：false
 说明：这是开关型配置。默认值 false 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Prefix Timestamp（前缀时间戳）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Prefix Style（前缀风格）
 类型：枚举；默认："Jackal (Pro
 说明：这是选项型配置。默认值 Jackal (Pro 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Off（关闭）；Old（老版）；Classic（经典）；Standard（标准）；Simple（简易）；Rise（上升）；Mio（未收录）；LiquidBounce（水影）；Jackal (Pro)（未收录）
- hidden（隐藏）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
 
## 历史更新
- 47. 现在 Notification 的 Notify AntiSpam 已默认开启，作用是防止通知刷屏。
- 50. 为 Notification 添加配置项：
- 37. 将 TimeDisplay 模块的配置 Half Hour Notify 改为 Half Hour Notification，且可以选择以下选项：

## 备注
建议一直开着。

## 相关命令

/notify [msg...]
发出一条通知。

/notifydict [msg...]
尝试在字典中找到对应的翻译词汇后，发出一条通知。

/chatter &lt;content...&gt;
/tchatter &lt;content...&gt;
/bchatter &lt;content...&gt;
/rchatter &lt;content...&gt;
/hchatter &lt;content...&gt;
/vchatter &lt;content...&gt;
发送一条弹幕。/tchatter 发送置顶弹幕。 /bchatter 发送置底弹幕。 /rchatter 发送反向弹幕。/hchatter 发送普通或反向弹幕。/vchatter 发送置顶或置底弹幕。


## 相关模块
- [Arraylist (模块列表)](./Arraylist.md)
- [Console (控制台)](./Console.md)
- [Shell (命令行)](./Shell.md)

## 相关资料
无


## 历史更新
- v1.1.1：新增 Sound、Sound Volume (0~100) 与 Sound Pitch Randomization (0~1)，通知音效开关从 Sound 选项迁移到 Notification。