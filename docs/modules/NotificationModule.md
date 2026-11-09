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
- Background Opacity (0~1)（背景不透明度 (0~1)）
 类型：数值；默认：1.0
 说明：控制各 Metro 样式的背景、进度填充、边框和阴影的不透明度倍率，不影响文字和图标。
- Text Opacity (0~1)（文本不透明度 (0~1)）
 类型：数值；默认：1.0
 说明：独立控制各 Metro 样式的文字和图标，不影响通知背景与模糊。旧 Opacity / Notify Opacity 配置会迁移到缺失的背景与文本配置项，保留原透明度效果。
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
- Blur Opacity (0~1)（模糊不透明度 (0~1)）
 类型：数值；默认：0.9
 说明：HUD Blur 开启时控制每个 Metro 通知区域的模糊层不透明度，支持 Legacy / Experimental，并按当前样式匹配矩形、圆角与高度。模糊跟随进出场和鼠标避让，不受 Text Opacity 影响。Background Opacity 恰好为 1 时始终跳过模糊，因此默认不绘制；要观察模糊，请先将背景不透明度调低，例如 0.4。相关外观选项归入 Appearance 分组，仅在 Metro 模式显示，Blur Opacity 还要求背景不透明度不为 1。
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
- v1.1.9：通知不透明度拆分为背景和文本两项；修正各 Metro 样式的模糊区域，背景不透明度为 1 时跳过模糊，兼容旧透明度配置。
- v1.1.2：新增 Shadow、Shadow Color、Shadow Opacity (0~1)、Shadow Thickness，用于控制 Metro 通知阴影；切换到 Nvidia (PRO) 样式时会自动关闭一次阴影。
- v1.1.1：新增 Sound、Sound Volume (0~100) 与 Sound Pitch Randomization (0~1)，通知音效开关从 Sound 选项迁移到 Notification。

## 任务栏避让

`Position / Avoid Taskbar`（避让任务栏）默认开启，免费版和专业版均可使用。任务栏显示且客户端窗口超出工作区时，底部通知以任务栏上边为底部边界；任务栏位于上方时，顶部通知从任务栏下边开始排列，位于左右两侧时也按对应工作区边缘避让。

任务栏显示、隐藏、自动隐藏展开、位置变化，以及窗口移动或缩放时，通知位置平滑调整。已处于工作区内的窗口沿用自身边界；`Horizontal Margin`、`Vertical Margin` 在可用区域内生效，Exhibition 贴角模式紧贴可用区域角落。

Center 保持窗口居中；配置了光标显示时的角落位置后，移至角落的通知同样参与避让。纯 Center 模式且光标位置覆盖为 Off 时隐藏此选项。

## Exhibition 与 Center（专业版）

`Metro Style / Exhibition (PRO)` 使用紧凑直角黑色面板、图标和两行文本，标题与正文字号比例为 3:2。底部进度条按消息类型着色，从完整条开始由左向右线性消退。模块启停标题为 `Module`，正文为 `<模块> Enabled/Disabled`。

- 图标：普通消息为 `exhi_info`，警告为 `exhi_notify`，错误为 `exhi_warning`，成功为 `exhi_okay`。
- `Exhibition Stay In Corner` 默认开启，紧贴选定窗口角落，并隐藏常规横纵边距；选择 Center 时以居中位置为准。
- Exhibition 的入场、出场及位置移动比其他风格更快。

`Start Position / Center (PRO)` 从窗口中心下方开始向下排列，每条消息按自身宽度居中对齐；进场起点和出场终点均在目标位置正右方的屏幕外侧。

- `Center Vertical Margin` 默认 `200`，表示距窗口中心向下的距离；常规 `Horizontal Margin`、`Vertical Margin` 隐藏。
- `Center Single Message` 默认开启，居中时仅保留最新消息，并在标题后标注合并数量，例如 `Module (5)`；光标显示使通知移至角落时允许显示多条，返回中心后恢复合并。关闭后显示多条居中通知。
- `Start Position When Cursor Shown (PRO)` 默认 `Off`，保持居中；也可选择四个角落。光标出现时，现有消息立即开始移向所选角落，隐藏后返回中心。
- `Start Position Move Speed Rate` 默认 `1.0`，控制中心与角落之间的位置移动速度倍率。
