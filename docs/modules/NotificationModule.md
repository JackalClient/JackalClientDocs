# NotificationModule
通知
分类：Misc
描述：显示客户端的通知。比较重要的模块。

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
- Scale（缩放）
 类型：数值；默认：1.0
 说明：独立控制通知 HUD 的整体缩放，不受 ClickGUI Global Scale 影响。
- Notify Metro Style（地铁型通知风格）
 类型：枚举；默认："Vape"
 说明：用于选择结果反馈方式。默认值 Vape 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：Old（老版）；Vape；SilenceFix（欣欣公益）；Naven（奶粉）；Solstice (PRO)；Acid（酸）；Southside（南方）；LiquidBounce NextGen（水影下一代）

 `Solstice (PRO)` 仅专业版可用，使用直角背景和线性填充动画，字号为全局通知字号的 80%，先绘制与动态填充同色、轮廓厚度为原来的 130%、不透明度为 30% 的底层发光，再在通知右下方绘制一次阴影。模块开关消息显示为 `<模块> was enabled/disabled`。

所有 Metro 风格都会按 `Easing Endpoint Mode` 从屏幕侧边、屏幕角落或通知目标位置对应的角落减速进入，并使用 EaseInExpo 沿原方向退出。Nvidia 出场时左侧状态色的左边缘保持不动，右边缘按 EaseInExpo 向右展开，同时整张通知执行出场位移。通知栈中较早结束的消息腾出位置后，其余消息会平滑补位。

- `Easing Duration (ms)`：设置入场和出场动画时长，默认为 `500` 毫秒。
- `Easing Stack Speed (0~1)`：设置通知补位速度，默认为 `0.1`。
- `Easing Opacity`：控制除 Nvidia 外的 Metro 风格是否随进出场改变整体不透明度，默认关闭；Nvidia 不参与进出场淡化，但仍会按鼠标避让设置改变不透明度。
- `Easing Endpoint Mode`：设置入场起点和出场终点；`Side` 表示所选位置对应的左/右屏幕外侧，`Corner` 表示屏幕外角落，`Target Corner` 表示通知目标矩形对应的角落，默认为 `Target Corner`。
- `Easing Enter Start Offset X/Y`：设置入场起点相对所选端点的水平和垂直距离，默认均为 `18`。
- `Easing Exit End Offset X/Y`：设置出场终点相对所选端点的水平和垂直距离，默认均为 `18`。

- `Solstice Fill Opacity (0~1)`：设置 Solstice (PRO) 动态填充部分的不透明度，默认为 `0.5`。
- `Solstice Background Opacity (0~1)`：设置 Solstice (PRO) 黑色背景的不透明度，默认为 `0.9`。
 
- Override Notify When Hidden（隐藏时用什么代替普通通知）
 类型：枚举；默认："WinToast"
 说明：客户端主窗口隐藏的时候，用哪种方式代替原先的通知。例如 `WinToast` 代表系统通知。
 可选：Off（关闭）；`WinToast`（系统通知）；`MessageBox`（消息框）
- Notify MessageBox Duration Coefficient（通知对话框时长系数）
 类型：数值；默认：0.2f
 说明：用于控制检测/刷新/动画节奏。默认值 0.2f 以稳定为主；值越大，显示的时长越长。
- Notify Style（通知风格）
 类型：枚举；默认："Metro"
 说明：决定通知以什么方式呈现，默认为`Metro`，即从角落弹出的消息。如果想调节样式，可以找到`Notify Metro Style`进行调节。
 可选：WinToast（系统通知）；Metro（地铁）；Chatter（弹幕）；Fancy（优美）；MessageBox（消息框）

- Notify Translator（通知翻译器）
 类型：枚举；默认："Off"
 说明：对于没有翻译条目的通知文本，是否开启自动翻译。其中`Latency`表示第一时间就弹出来，等待翻译完成后再把英文文本换成对应的中文。`Ready`表示翻译完毕后才弹出来相应的通知。
 可选：Off（关闭）；Latency（延迟）；Ready（就绪）
- Notify MessageBox Random Position（通知对话框随机位置）
 类型：布尔；默认：true
 说明：如果选择对话框，是否让对话框在随机位置出现。
- Notify MessageBox Set as Foreground（通知对话框设为前台）
 类型：布尔；默认：true
 说明：如果选择对话框，是否将对话框作为前台窗口呈现。注意如果你开启，则可能会争夺你的焦点，例如正在使用输入法打字的时候被打断。这是糟糕的。
- Notify Font Size（通知字号）
 类型：数值；默认：35
 说明：`Metro`类型的通知字号。
- Notify Min Width（通知最小宽度）
 类型：数值；默认：200
 说明：`Metro`类型的通知最小宽度。
- Notify Height（通知高度）
 类型：数值；默认：45
 说明：`Metro`类型的通知高度。
- Notify Stay Time (0~1)（通知停留时间 (0~1)）
 类型：数值；默认：0.3
 说明：`Metro`类型的通知停留时间系数，越大就表示停留时长越久。
- Notify Max Length（通知最大长度）
 类型：数值；默认：120
 说明：`Metro`类型的通知正文最大长度，再长会被截断加上省略号。
- Notify Opacity (0~1)（通知不透明度 (0~1)）
 类型：数值；默认：1.0f
 说明：`Metro`类型的通知不透明度。
- Shadow（阴影）
 类型：布尔；默认：true
 说明：控制 `Metro` 类型通知是否绘制阴影。切换到 `Nvidia (PRO)` 样式时会自动关闭一次，之后仍可手动重新开启。
- Shadow Color（阴影颜色）
 类型：枚举；默认："Black"
 说明：控制 `Metro` 类型通知阴影颜色。
- Shadow Opacity (0~1)（阴影不透明度 (0~1)）
 类型：数值；默认：0.35f
 说明：控制 `Metro` 类型通知阴影不透明度。
- Shadow Thickness（阴影厚度）
 类型：数值；默认：18.0f
 说明：控制 `Metro` 类型通知阴影扩散厚度。
- Notify Horizontal Margin（通知横向间隙）
 类型：数值；默认：80
 说明：`Metro`类型的通知与屏幕边缘的横向距离。
- Notify Vertical Margin（通知 纵向 Margin）
 类型：数值；默认：150
 说明：`Metro`类型的通知与工作区边缘的纵向距离。（如果通知在底部，则为和任务栏的距离）
- Notify Line Gap（通知行距）
 类型：数值；默认：10
 说明：`Metro`类型的通知的正文文本的行间距。
- Notify Start Position（通知源位置）
 类型：枚举；默认："Bottom-Right"
 说明：`Metro`类型的通知出现的位置。
 可选：Bottom-Right（右下角）；Top-Right（顶端-右侧）；Bottom-Left（左下角）；Top-Left（顶端-左侧）
- Notify WinToast Attempt to Jump Queue（系统风格通知是否尝试插队）
 类型：布尔；默认：false
 说明：`WinToast`类型的通知是否尝试插队。实验性功能。
- Notify AntiSpam（通知反刷屏）
 类型：布尔；默认：true
 说明：反刷屏机制，对于高度相似的消息，会合并为一个消息并添加`xN`的数量标识。
- Notify AntiSpam Min Similarity (0~1)（通知反刷屏最小相似度(0~1)）
 类型：数值；默认：0.97f
 说明：会被反刷屏机制判定成重复消息的字符串最小相似度。越小越容易触发反刷屏机制。
- Notify Module Toggle（通知模块切换）
 类型：枚举；默认："Always"
 说明：是否反馈模块的开关切换。推荐选择`Always`。如果选择关闭，开关模块不会有任何通知反馈。
 可选：Off（关闭）；Classic（经典）；Keybind（未收录）；Always（总是）
- Notify Font Reload（通知字体重载）
 类型：布尔；默认：false
 说明：调试功能。是否通知字体的重载事件。
- Notify Texture Load（通知贴图加载）
 类型：布尔；默认：false
 说明：调试功能。是否通知贴图加载事件。
- Notify Device Changes（通知设备切换）
 类型：枚举；默认："Audio Device"
 说明：是否通知系统设备切换事件。选择`Audio Device`时，会在计算机切换音频设备时通知你。
 可选：Off（关闭）；Audio Device（音频设备）；All（所有）
- Sound（通知音效）
 类型：布尔；默认：true
 说明：控制通知是否发出音效。关闭后通知不播放音效。
- Sound Volume (0~100)（通知音量）
 类型：数值；默认：100
 说明：控制通知音效音量，0 为静音，100 为最大音量。
- Sound Pitch Randomization (0~1)（通知音高随机化）
 类型：数值；默认：0.1f
 说明：控制通知音效播放前基于 1.0 默认音高的随机偏移幅度，值越大随机音高偏离越明显。调为0时不作处理。
- Output Notification（输出通知）
 类型：布尔；默认：true
 说明：是否将通知正文内容输出到控制台。
- Log Notification（日志记录通知）
 类型：布尔；默认：true
 说明：是否将通知正文内容记录到日志文件。
- Output Notification Debug String（输出通知调试字符串）
 类型：布尔；默认：false
 说明：是否将通知正文内容以`OutputDebugString`函数发送出去。你可以用`DebugESP`模块或者第三方软件例如`Dbgview`接收。
- Prefix Timestamp（前缀时间戳）
 类型：布尔；默认：true
 说明：输出通知正文内容到控制台时，是否在前面输出时间戳信息。
- Prefix Style（前缀风格）
 类型：枚举；默认："Jackal (Pro
 说明：输出通知正文内容到控制台时，正文内容前的前缀风格。（时间戳会在该前缀之前显示）
 可选：Off（关闭）；Old（老版）；Classic（经典）；Standard（标准）；Simple（简易）；Rise（上升）；Mio；LiquidBounce（水影）；Jackal (Pro)（`Jackal 专业版`）；Myau (PRO)（马云）；Nolstice (PRO)；Raven (PRO)（乌鸦）；Augustus (PRO)
- hidden（隐藏）
 类型：布尔；默认：true
 说明：是否在 `Arraylist` 中隐藏该模块。
 
## 历史更新
- 47. 现在 Notification 的 Notify AntiSpam 已默认开启，作用是防止通知刷屏。
- 50. 为 Notification 添加配置项：
- 37. 将 TimeDisplay 模块的配置 Half Hour Notify 改为 Half Hour Notification，且可以选择以下选项：

## 备注
这是客户端的通知，建议一直开着。

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
- [Chatter (弹幕)](./Chatter.md)
- [Title (标题显示)](./Title.md)

## 相关资料
无


## 历史更新
- v1.1.2：新增 Shadow、Shadow Color、Shadow Opacity (0~1)、Shadow Thickness，用于控制 Metro 通知阴影；切换到 Nvidia (PRO) 样式时会自动关闭一次阴影。
- v1.1.1：新增 Sound、Sound Volume (0~100) 与 Sound Pitch Randomization (0~1)，通知音效开关从 Sound 选项迁移到 Notification。
