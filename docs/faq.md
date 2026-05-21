# JackalClient 常见问题

> 语雀文档，由于 2026/5 被改为需要登陆才能查看，以后将不在上面更新：[https://www.yuque.com/wormwaker/tkpgqw/yc5y1ty9pg215me1?singleDoc](https://www.yuque.com/wormwaker/tkpgqw/yc5y1ty9pg215me1?singleDoc)

JackalClient 常见问题

JackalClient 是一个用 C++ 编写的公益 Windows 客户端/工具箱，你只需要关注UP主就可以下载使用。JackalClient 也有一个专业版，你可以在这里永久购买，2025年可以享受半价，节假日也会有优惠：[https://afdian.com/item/1eda4ca6ca2511f0a7ae52540025c377](https://afdian.com/item/1eda4ca6ca2511f0a7ae52540025c377)

​

[**<u><font style="color:#3370FF;">UP主/作者：@Wormwaker</font></u>**](https://space.bilibili.com/3494361276877525)

​

JackalClient 最常见的问题

​

电脑小白请单击此处 → [如何下载并运行 JackalClient 说明书](https://www.yuque.com/wormwaker/tkpgqw/ppfnlcaqdkcsfmkd?singleDoc#%20《如何下载并运行%20JackalClient%20说明书%20-%20How%20To%20Download%20and%20Run%20JackalClient%20Instructions》)

​

Q: 解压密码是什么

A: Wormwake

​

Q: 怎么杀毒软件报毒了

A: 正常（例如 Hetile.e, Exploit/CVE-XXXX, Exploit/Vuldriver, BypassUAC, Hacktool, Injector.bkc 等字样），恢复区恢复到原目录并添加信任（最好整个目录添加一下），客户端没有后门

​

Q: 解压失败是什么鬼（一个意外错误使你无法复制该文件。如果你继续收到该错误，可以使用错误代码来搜索有关问题的帮助。错误 0x80004005: 未指定的错误 COMMANDS.txt）

A: 不要用 Windows自带的 zip解压，因为无法识别 密码 的存在。你需要其他解压软件。解压的时候解压 整个文件夹。不要只解压启动器。

​

Q: 启动器在线下载客户端文件时候怎么自己就退出了

A: 客户端本体被杀软杀掉了，添加信任，恢复到原位置，本体在 Release 文件夹下可以直接运行

​

Q: 弹窗缺少 VCRUNTIME140.DLL 等

A: 缺少VC++环境。群文件搜索vc，找到两个 vc_redist 的exe，都安装一下然后重试

​

Q: 怎么打开本体后什么反应也没有，或者是任务栏图标出现几秒后闪退

A: 打开 Release 文件夹下的 CLIENT.LOG，如果最后右 InitWindow 后就退出的现象，就是创建窗口失败，可能和显卡有关系，有几位群友有这个问题，但是还没有找到通用方案

​

Q: 打开后控制台直接显示然后直接弹窗崩溃，崩溃日志里面只有一点点基本信息

A: 和上面一问问题相同，硬件原因

​

Q: 打开后显示托盘提示，怎么开GUI

A: 默认是右Shift/右Ctrl，这个可以在GUI选项里改（ Menu Toggle Key 1/2）；客户端也有托盘图标，左键也能开GUI。右键会弹出一个小菜单。

​

Q: 怎么黑屏了

A: 某些N卡硬件的bug, 和OpenGL也有关系，先尝试这个方法，打开 NVIDIA 设置：

![B0E9C829924EAD0C14C104183F5023A5.png](https://cdn.nlark.com/yuque/0/2025/png/54044512/1763041290750-f2d1bd78-f968-4d31-a982-a78c4bbfd757.png)

如果你想只给客户端设置这个，你可以选择“程序设置”而不是“全局设置”。

还不行则看一下issue其他方法: [https://github.com/noexcept2005/JackalClient/issues/3](https://github.com/noexcept2005/JackalClient/issues/3)   up主一直很头疼这个问题，，，

​

Q: 怎么调中文

A: 顶部有一个 GUI 选项卡，点一下，往下翻（滚轮或下箭头）找到 Language/语言

![image](https://cdn.nlark.com/yuque/0/2025/png/54044512/1762610636563-0bb1071c-ed92-430b-a98a-2af63610a52b.png)

Q: 怎么崩溃了：Unhandled Exception Occurred 未经处理的异常

A: 客户端有各种各样的问题，有时候确实容易崩溃，把在崩溃前你干了什么发给UP，也可以发一下crashlog文件夹下的 last_crash.log 和 Release 文件夹下的 CLIENT.LOG

​

Q: 怎么编辑客户端模块配置里面的每个配置项

A: 开关直接点就行；数字点一下后编辑（编辑完要按回车），或者用滚轮微调；字符串点一下后 新版本（>=0.9b) 可以直接编辑；旧版本 是原始编辑（编程语言里的字符串格式；要按回车完成编辑）可能不太方便，你按一下 Ctrl+T 会弹出一个框，在里面编辑会舒服一点。如果你要输入文件路径，就按 Ctrl+O。如果你要输入文件夹的路径，就按 Ctrl+Shift+O。如果你要清空，就按 Shift+Delete。对于按键绑定项，按Esc可以取消绑定，其他键按下后松开即可完成绑定。

​

Q: 按键显示无法捕获星铁等游戏的按键

A: Windows 机制之一：低权限进程无法捕获高权限进程的输入。米哈游启动器是要获取管理员权限的来着。你只需要给客户端也开一个 Admin管理员 就行了。

​

Q: 怎么输入命令

A: 找到“命令行”模块(Shell)，打开，会弹出一个控制台，就可以输入命令了。输入break才能关闭命令行模块，而非在GUI关闭这个模块。命令用法见COMMANDS.txt文件（在目录里面）。如果你懒，你可以使用/help命令查看某个命令的用法，会自动从COMMANDS.txt里面提取。新版本添加了非常好用的命令补全和高亮系统，按 Tab 补全。

![image](https://cdn.nlark.com/yuque/0/2025/png/54044512/1762610636891-272e1c72-8902-4eea-b207-07e8125db034.png)

​

Q: 怎么使用新版的更好的歌词模块（挂钩渲染模式）

A: 这种方式仅限于64位的网易云音乐。将基础模式改为挂钩渲染后启用更好的歌词模块即可。只有关闭更好的歌词模块时才会将DLL从进程中卸载。

​

Q: 怎么使用旧版的更好的歌词模块（OCR模式）

A: 群文件找到一个tesseractocr的文件，安装。然后打开客户端GUI，Ctrl+F搜索Tesser，找到TesseractOCR模块，右键打开模块配置，找到可执行文件路径，右边点一下进入编辑，按下 Ctrl+O 会弹出一个选择文件，找到你刚刚安装的位置，找到tesseract.exe，点击确认，路径就输进去了。TesseractOCR模块是不需要打开的。打开网易云音乐的桌面歌词窗口。找到客户端的更好的歌词模块，打开。更好的歌词模块右键里面的配置可以调，例如展示模式可以改成灵动岛(Island)

![image](https://cdn.nlark.com/yuque/0/2025/png/54044512/1762610637330-58233aa4-ac41-4b9c-aaf2-12440fac5a21.png)

Q: 更好的歌词只能网易云吗

A: 不一定。更好的歌词模块右键下面有窗口类名和窗口标题两个项，修改它们就可以锁定到你任意一个桌面歌词窗口了。如何获取类名和标题？找到窗口标签或者目标显示模块，打开，瞄准你的桌面歌词窗口，按一下，就会显示信息。如果真找不到，就打开命令行模块，在控制台里面输入。/windows。就能输出所有窗口信息。找到你要找的窗口。标题和类名你就能看到了。

![image](https://cdn.nlark.com/yuque/0/2025/png/54044512/1762610637776-56314807-6036-4235-b143-c68b532ecdd4.png)

![image](https://cdn.nlark.com/yuque/0/2025/png/54044512/1762610638230-0923527b-4c0d-4533-b75f-a3fd1bacf5ac.png)

Q: 怎么保存配置/档案

A: 客户端退出会自动保存，定时也会保存，不放心就打开GUI按下Ctrl+S手动保存；如果想另存为配置，找到上面的档案(Profile)选项卡，点一下，按Ctrl+Shift+S另存为，输入档案名称，就保存了。保存的档案在config文件夹下（json文件）

​

Q: 怎么手动修改配置/档案

A: config 文件夹下找到你的配置。其中default.json 是默认配置不要去改，Records.json是临时数据文件不是配置。打开你的配置（默认通常会保存为profile-x.json的形式）后修改要修改的项即可。如果修改错了客户端是无法加载的，所以最好修改前备份

​

Q: 为什么 0.9a 那么糊

A: 关闭 GUI 选项中的 Anti Aliasing 抗锯齿。新版采用了实验性的FXAA抗锯齿着色器，但是效果不理想。

​

Q: v0.9a 怎么一启动就打开 ScreenCapture 屏幕捕获 和 AntiCapture 反捕获？

A: BUG，已经在 v0.9b 修复。将 ScreenCapture 屏幕捕获的“Exclude Client 捕获客户端”暂时改成“关闭”，然后关闭两个模块，下一次启动时 AntiCapture 就不会自动启动了。

​

Q: 如何启用 HUD 模糊，那种视频中的液体玻璃效果？

A: 在 其他 一栏中找到 屏幕捕获 模块，确保 排除客户端 Exclude Client改为 保持 Keep，这样效果最好。启用 HUD Blur 模块，将风格调为 Liquid Glass 液体玻璃。此时客户端将会持续后台截图，会消耗一些性能，然后窗口将会开启反捕获，无法被截图软件和录屏软件的普通模式捕获，只能通过游戏捕获模式捕获（也就是注入并hook）。可以调节 HUD Blur 相关参数追求更好的视觉效果。

​

Q: 怎么像视频中那样有发光的效果

A: 打开着色器模块(Shader)，右键配置里面有多种着色器可以选，这是bloom(泛光)着色器。可能会掉帧

​

Q: MALWARE WARNING 界面是什么意思

A: 恶意模块警告。这个界面用于确认你是否知道你在做什么。有些恶意模块可能会造成不良影响，你应该提前知晓这个模块是干什么的。看信息，等十秒后按Y确认

​

Q: 自保护（Protection）模块启用后执行其他程序会直接崩溃

A: PPL 的一个机制，已在新版本解决，但是可能会有潜在的问题。

​

Q: 怎么弹 Invalid Cookies

A: 有些哔哩模块是需要你登录的，你可能加载了别人的配置但是本地没有登陆。按一下 BiliSettings 模块（B站设定），会弹出一个二维码，扫一下，登录就行了。Cookies 数据会存在 Records.json里面，所以你不要把Records.json发给别人。

​

Q: 怎样和视频当中一样有流动的颜色效果

A: 在一些模块的颜色设置中，选择 流动（Flow）即可。流动的各项参数可以在 着色器（Shader）模块中调。

​

Q: 我怎么爆不了图腾

A: 图腾 (Totem) 是视频，可能兼容性不太好，直接在客户端窗口里播放。如果卡就不要用了。如果背景是黑的，说明抠图失败，你可以选取黑色的像素点的RGB，把他输入到图腾配置里面的色键中，可能就有一点用。

​

Q: 我的看门人怎么启动不了

A: 看门人模块(Gatekeeper) 需要 管理员(Admin) 和 特权(Privileges)，检查是否开启。如果还是开不了，就是火绒等杀毒软件拦截了对系统进程的操作。还有，32位系统是不能开的。

Q: 怎么绕过UAC窃得管理员权限

A: 启用管理员绕过(UACBypass)模块。自动获取管理员权限而无需弹出UAC窗口。如果失败了，就右键里面的方法换一种试试。还有，Config选项卡中有一个 Elevate and Retry Admin Modules，意为如果没有管理员权限，打开管理员模块，是否自动提权，改成 UACBypass 就会自动开启绕过然后启用那个模块。

​

Q: 按 TrustedInstaller（受信任安装者） 模块怎么没反应

A: 正在启动服务，等一会哈，然后提权完的客户端就会弹出来，旧的会自己退出

​

Q: 按 System （系统）模块怎么被360拦截了

A: 提权是敏感操作，当然会拦截

​

Q: 如何开启 Neverlose GUI

A: 首先你需要购买专业版。然后找到 GUI 选项的 ClickGUI Style，调成 Neverlose (PRO) 即可。如果想使用命令，你可以输入 /gui style neverlose

​

Q: 怎么把主窗口的任务栏图标隐藏

A: 关闭 Taskbar Icon 模块。如果还有一个任务栏图标，那是控制台的，无法隐藏。

​

Q: 我的连点器怎么不工作

A: 右键 AutoClicker 找到 Only Window Center，意思是鼠标只在当前窗口的中心时才能触发，关闭它。其他选项也看看，最后的取消抬起的意思，说白了就是在MC中可以长按。破坏方块/吃东西。

​

Q: 讲述人怎么报错了

A: 有时候会出现的（例如被调试时必定无法使用），可能由音频设备未准备好导致的，尝试重新打开客户端。

Q: 隐私窗口是怎么用的

A: PrivateWindow 可以将一些常用的隐私在截图和录屏中隐身，右键这个模块可以看到有 QQ/微信/Steam/哔哩客户端/Edge 等，可以自行调节。如果想对其他窗口进行该操作，你可以打开 窗口大师模块(WindowMaster)，有一个按键就是 设为隐私/取消隐私。通过 /help privatewindow 查看相关命令。

​

Q: 怎么有些修改桌面设定的没用

A: 尝试重新启动文件资源管理器。或者注销。

​

Q: 我电脑怎么静音了还调不回来

A: 你开启了 Mute静音 模块。当然没声音。关掉。

​

Q: 怎么做到任务栏滚轮就能调系统音量，窗口顶部滚轮就能调进程音量的

A: 右键音量模块(Volume)，找到 Wheel System Volume Adjust，改成 Mouse On Taskbar；另一个同理。

​

Q: 怎么做到窗口左侧滚轮就能调窗口不透明度的

A: 打开 Opacity Changer 不透明度修改模块。

​

Q: 滚轮失效了

A: 在 Config 选项找到 Mouse Wheel Detector（鼠标滚轮检测），调成另一个再试试。如果还是不行，请考虑重启客户端。模块配置等地方如果滚轮不行，你还可以使用上下箭头。

​

Q: 收不到IRC聊天消息

A: 打开 IRC模块。如果收不到中文消息，可能是一个bug，作者还修不好。还有，如果作者开启了静默模式的维护，你肯定是收不到的。

​

Q: 我的音频可视化怎么不动了

A: 你切换了音频设备。把 音频可视化(AudioVisualizer) 模块关闭再打开即可。

​

Q: 怎么修改启动器样式，我看视频里面有一个VAPE启动器风格

A: 客户端打开，GUI选项下面的启动器风格 Launcher Style。   Launcher Shaking 选项开启后，启动器会一直震动。

​

Q: 查端。会。封号吗。

A: ...

​

Q: 显示某些信息的时候出现 [Streamer Filtered]是什么鬼

A: 你开启了 主播模式（Streamer），会自动隐藏和过滤一些关键信息以免泄露。关闭即可。

​

Q: 我想购买专业版

A: [https://afdian.com/item/1eda4ca6ca2511f0a7ae52540025c377](https://afdian.com/item/1eda4ca6ca2511f0a7ae52540025c377) 购买激活码

​

Q: 怎么赞助作者。

A: [https://afdian.com/a/wormwaker697](https://afdian.com/a/wormwaker697)
