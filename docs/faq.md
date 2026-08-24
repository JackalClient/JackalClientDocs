## JackalClient 常见问题

`JackalClient` 是一个用 C++ 编写的公益 `Windows 客户端/工具箱`，你只需要关注UP主就可以下载使用。JackalClient 也有一个 `专业版 (PRO)`，你可以在这里永久购买，节假日会有随机优惠：[https://afdian.com/item/1eda4ca6ca2511f0a7ae52540025c377](https://afdian.com/item/1eda4ca6ca2511f0a7ae52540025c377)
[https://ifdian.net/item/1eda4ca6ca2511f0a7ae52540025c377](https://afdian.com/item/1eda4ca6ca2511f0a7ae52540025c377)

![client-poster](/jackal-1.jpg)

[**<u><font style="color:#3370FF;">UP主/作者：@Wormwaker</font></u>**](https://space.bilibili.com/3494361276877525)

**<u><font style="color:#3370FF;">文档官网：</font></u>**[**<u><font style="color:#74B602;">https://doc.wormwake.com/</font></u>**](https://doc.wormwake.com/)

**<u><font style="color:#3370FF;"></font></u>**
---


**<u>电脑小白请单击此处 → </u>**[**<u>如何下载并运行 JackalClient 说明书</u>**](https://www.yuque.com/wormwaker/tkpgqw/ppfnlcaqdkcsfmkd?singleDoc#%20《如何下载并运行%20JackalClient%20说明书%20-%20How%20To%20Download%20and%20Run%20JackalClient%20Instructions》)

---

[有关异常、崩溃、反馈问题专题文档点击此处](/bug-report.md)


<font style="color:#2F8EF4;">Q: </font><font style="color:#2F8EF4;">解压密码是什么<br></font>
<font style="color:#2F8EF4;">A: Wormwake</font>


Q: 解压失败（一个意外错误使你无法复制该文件。如果你继续收到该错误，可以使用错误代码来搜索有关问题的帮助。错误 `0x80004005`: 未指定的错误 `COMMANDS.txt`）

A: 不要用 <font style="color:#2F8EF4;">Windows自带的 </font>zip解压，因为无法识别 <font style="color:#2F8EF4;">密码 </font> 的存在。你需要其他解压软件。解压的时候解压 <font style="color:#2F8EF4;">整个文件夹</font>。不要只解压启动器。

![extract-failure](/extract-failure.png)

**<font style="color:#DF2A3F;">Q: 怎么杀毒软件报毒了</font>**

<font style="color:#DF2A3F;">A: 正常现象（例如 `Hetile.e, Exploit/CVE-XXXX, Exploit/Vuldriver, BypassUAC, Hacktool, Injector.bkc` 等字样），恢复区恢复到原目录并添加信任（最好整个目录添加一下），无论什么版本的客户端都没有任何后门。</font>

Q: 打开报错：「此应用无法在你的电脑上运行 - 若要找到适用于你的电脑的版本，请咨询软件发布者」。
A: 你解压根本就没解压成功，看一下 exe 大小是不是 0，如果是，则重新解压一遍（输对解压密码）。客户端是可以在 `LTSC` 或 `32位` 系统下运行的。

---

Q: 启动器在线下载客户端文件时候怎么自己就退出了

A: 客户端本体被 `杀软` 杀掉了，添加信任，恢复到原位置，本体在 `Release` 文件夹下可以直接运行




Q: `XXX.exe-无法找到入口` 无法定位程序输入点 `GetSystemTimePreciseAsFileTime` 于动态链接库 `KERNEL32.dll` 上。

A: 客户端不支持 `Windows 8 以下`的 `Windows` 系统版本。而且这个函数的调用是隐式的，我无法修改为动态调用。




Q: 弹窗缺少 `VCRUNTIME140.DLL` 等

A: 缺少 VC++ 环境 。群文件搜索 vc，找到两个 <font style="color:#DF2A3F;">vc_redist</font> 的exe（一个64位一个32位），都安装一下然后重试


Q: 打开后显示托盘提示，怎么开GUI软件界面

A: 默认是 `右Alt` <font style="color:#DF2A3F;">【旧版本<v1.0.4是右Shift/右Ctrl，由于可能会和一些软件冲突于是修改了】</font>，这个可以在GUI选项里改（`Menu Toggle Key 1/2`）；客户端也有托盘图标，左键也能开GUI。右键会弹出一个小菜单。



Q: 怎么黑屏了（该透明的背景变成纯黑色）

A: 某些N卡硬件的 bug, 和 OpenGL 也有关系，先尝试这个方法，打开 NVIDIA 设置：

`OpenGL GDI 兼容性` 改为 <font style="color:#DF2A3F;">优先兼容性</font>。  


<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/54044512/1763041290750-f2d1bd78-f968-4d31-a982-a78c4bbfd757.png)

如果你想只给客户端设置这个，你可以选择`程序设置`而不是`全局设置`。

还不行则看一下issue其他方法: [https://github.com/noexcept2005/JackalClient/issues/3](https://github.com/noexcept2005/JackalClient/issues/3)   up主一直很头疼这个问题，，，
访问不了Github就看视频：[JackalClient 黑屏问题解决方案](https://www.bilibili.com/video/BV1vSdxBgEXc)


Q: 怎么调中文、怎么开汉化

A: 顶部有一个 `GUI 选项`，点一下，往下翻（滚轮或下箭头）找到 <font style="color:#DF2A3F;">Language/语言</font>

<font style="color:#DF2A3F;">或者在“搜索”选择模块</font>_<font style="color:#EDCE02;">配置项搜索模式</font>_<font style="color:#DF2A3F;">，搜索语言</font>

![language](/language.jpg)


Q: 为什么开了汉化还是英文

A: 你的客户端目录存在中文等非ASCII字符，请把客户端目录搬到没有中文的文件夹下，或者重命名那个中文。而且客户端如果在中文路径下，启动时会有弹窗警告。


Q: 怎么崩溃了： **Unhandled Exception Occurred 未经处理的异常**

A: 客户端有各种各样的问题，有时候确实容易崩溃，把在崩溃前你干了什么发给 UP，也可以发一下 crashlog 文件夹下的 `last_crash.log` 和 `Release` 文件夹下的 `CLIENT.LOG`。一般情况下会有报错信息的，除非你主动关闭。如果群里比较热闹，你可以直接私信我。



Q: JackalClient.exe - _Windows无法访问指定设备、路径或文件。你可能没有适当的权限访问该项目。 / 操作已被用户取消。_

A: 杀软问题。如果客户端被杀，则从杀软隔离区/恢复区先恢复，然后给客户端文件夹添加信任。同时注意 Windows Defender 是否开启了实时保护。



Q: 客户端崩端（版本v1.0.6），然后查看 `CLIENT.LOG` 发现最后一行是 `UACBypassSafeCheck...` 就没了

A: 作者的失误，这一步如果客户端目录含有非 ASCII（例如中文）就会导致崩溃。现已修复（并非意味着在中文路径下就没有任何问题）。你可以临时放到别的纯ASCII目录下运行。



Q: 怎么编辑客户端模块配置里面的每个配置项

A: 建议查看：[配置项介绍](/configuration)
开关直接点就行；

数字点一下后编辑（编辑完要按回车），或者用滚轮微调，或者用 **滑动条 **进行调整（新出的）；

字符串点一下后 **<font style="color:#74B602;">新版本（>=0.9b) </font>**可以直接编辑；**<font style="color:#74B602;">旧版本 </font>**是原始编辑（编程语言里的字符串格式；要按回车完成编辑）可能不太方便，你按一下 <font style="color:#74B602;">Ctrl+T</font> 会弹出一个框，在里面编辑会舒服一点。

如果你要输入`文件路径`，就按 **Ctrl+O**。

如果你要输入`文件夹的路径`，就按 **Ctrl+Shift+O**。

如果你要清空，就按 **Shift+Delete**。
大部分的编辑框在 `v1.1.0` 已支持 `Ctrl+A` `Shift+←` `Shift+→` `Shift+Home` `Shift+End` 这些快捷键了。

对于按键绑定项，按Esc可以取消绑定，其他键按下后松开即可完成绑定。



Q: 右上角HUD怎么那么大，遮住我屏幕了

A: 那个模块叫「**<font style="color:#117CEE;">模块列表 (Arraylist)</font>**」，你可以在GUI的 **<font style="color:#117CEE;">渲染(Render)</font>**** **列第一个找到它，展开模块配置，找到 <font style="color:#117CEE;">字号(Font Size)</font>，调小该数值。或者有一个叫 **<font style="color:#117CEE;">给鼠标让道(Give Way to Mouse)</font>** 的选项，把<font style="color:#117CEE;">距离</font>调大点，这样鼠标靠近时就会让道得更厉害一点，防止遮挡。
![arraylist-options](/arraylist-options.jpg)


Q: 为什么客户端开久了之后，字体会突然变成黑色方块，以及控制台报错 `[AppUpdate] Runtime Error: resource unavailable try again: resource unavailable try again`，或者直接崩溃
A: 客户端的内存爆炸问题，作者已经修过 N 次了还是没修好。与线程的调度有关。重新打开客户端即可。 qwq


Q: 为什么 `Ambience 环境氛围` 模块打开不会下雨

A: 把这个模块的配置的 `Weather(天气)` 改成 <font style="color:#2F4BDA;">Rainy</font> 即可。或者打开 **Weather Cycle (天气循环)**，天气将会定期自动变幻。



Q: 按键显示无法捕获星铁等游戏的按键

A: Windows 机制之一：低权限进程无法捕获高权限进程的输入。米哈游启动器是要获取管理员权限的。你只需要给客户端也开一个 **Admin管理员** 就行了。如果你始终想让客户端以管理员身份启动，你可以在 `Config 选项` 中把 `Always Admin` 打开，或者直接给桌面快捷方式属性里面的`以管理员身份启动`打开（后者更推荐）。

![快捷方式中的管理员身份启动](/shortcut-runas.jpg)


Q: 为什么开 **屏幕共享/直播/录屏/截图** 看不到客户端窗口

A: 如果看不见，则是开启了 **<font style="color:#ECAA04;">Anti Capture 反捕获模块</font>**，将其关闭。如果是纯黑色，则是开启了 **<font style="color:#ECAA04;">Black Capture 黑屏捕获模块</font>**，将其关闭。



Q: 为什么报找不到 `RTCore64.sys`，或者无法启用 `RTCore64` 模块

A: 旧版本所需要的驱动程序（新版本 >= v1.0.9 已改用 `Sirius.sys`）。由于该驱动是漏洞利用驱动，已被一堆 <font style="color:#DF2A3F;">杀毒软件标记</font> ，为了安全考虑从Free版删除该文件。如需使用旧版本的相关模块（Protection, PPLESP, PPLButcher），请从群文件旧版本获取。



Q: 怎么输入命令

A: 找到“命令行”模块(Shell)，打开，会弹出一个控制台，就可以输入命令了。输入 **break **才能关闭命令行模块，而非在GUI关闭这个模块。命令用法见 **COMMANDS.txt**文件（在目录里面）。如果你懒，你可以使用 /help命令 查看某个命令的用法，会自动从COMMANDS.txt里面提取。

**<font style="color:#74B602;">新版本添加了非常好用的</font>****<font style="color:#DF2A3F;">命令补全</font>****<font style="color:#74B602;">和</font>****<font style="color:#DF2A3F;">高亮系统</font>****<font style="color:#74B602;">，按 Tab 补全。客户端的命令很多，有八百多条，请慢慢探索。</font>**

<!-- 这是一张图片，ocr 内容为： -->
![Jackal Shell (CLI)](/shell.jpg)



Q: 怎么使用 `新版的` 更好的歌词模块（挂钩渲染模式/<font style="color:#DF2A3F;">驱动模式</font>）

A: **<font style="color:#DF2A3F;background-color:rgb(21, 22, 23);">挂钩渲染模式(Hook Render)</font>**仅限于**64位**的**网易云音乐**。将基础模式改为挂钩渲染后启用更好的歌词模块即可。只有关闭更好的歌词模块时才会将DLL从进程中卸载。**<font style="color:#EDCE02;">专业版PRO用户</font>**可以使用**<font style="color:#DF2A3F;">驱动模式(Driver)</font>**，仅限于**网易云音乐**，无需打开桌面歌词窗口，直接获取准确歌词。

[更好的歌词说明文档](/betterlyrics)



Q: 怎么使用 **旧版的 **更好的歌词模块（**OCR模式**）

A: 群文件搜索找到一个 `tesseractocr` 的文件（官网下载也可以），安装。然后打开客户端GUI， `Ctrl+F` 搜索 `Tesser`，找到<font style="color:#117CEE;">TesseractOCR模块</font>，右键打开模块配置，找到可执行文件路径，右边点一下进入编辑，按下 **<font style="color:#74B602;">Ctrl+O </font>**会弹出一个选择文件，找到你**刚刚安装的位置**，找到 **<font style="color:#117CEE;">tesseract.exe</font>**，点击确认，路径就输进去了。<font style="color:#74B602;">TesseractOCR模块是不需要打开的。</font><font style="color:#ECAA04;">打开网易云音乐的桌面歌词窗口。</font>找到客户端的更好的歌词模块，打开。更好的歌词模块右键里面的配置可以调，例如展示模式可以改成灵动岛(Island)

![Tesseract-OCR](/tesseract-ocr-1.jpg)

Q: OCR模式的更好的歌词只能网易云吗

A: 不一定。更好的歌词模块右键下面有窗口类名和窗口标题两个项，修改它们就可以锁定到你任意一个桌面歌词窗口了。如何获取类名和标题？找到窗口标签或者目标显示模块，打开，瞄准你的桌面歌词窗口，按一下，就会显示信息。如果真找不到，就打开命令行模块，在控制台里面输入  **<font style="color:#ECAA04;">/windows</font>**   就能输出所有窗口信息。找到你要找的窗口。标题和类名你就能看到了。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/54044512/1762610637776-56314807-6036-4235-b143-c68b532ecdd4.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/54044512/1762610638230-0923527b-4c0d-4533-b75f-a3fd1bacf5ac.png)

Q: 怎么保存配置/档案

A: 客户端退出会自动保存，定时也会保存，不放心就打开GUI按下 **<font style="color:#ECAA04;">Ctrl+S </font>**手动保存；如果想另存为配置，找到上面的档案(Profile)选项卡，点一下，按 **<font style="color:#ECAA04;">Ctrl+Shift+S 另存为</font>**，输入档案名称，就保存了。保存的档案在config文件夹下（json文件）；

- 在新版本 (v1.0.3) 加入了 `配置的自动备份`，如果你的配置名称叫b.json，会定期保存一个b.backup.json

- v1.1.2 加入了配置档案的右键菜单功能：

![Profiles Menu](/profiles.jpg)


Q: 怎么手动修改配置/档案

A: `config` 文件夹下找到你的配置。其中 `default.json` 是默认配置不要去改，`Records.json` 是临时数据文件不是配置。打开你的配置 **（默认通常会保存为profile-x.json的形式）**后修改要修改的项即可。如果修改错了客户端是无法加载的，所以最好修改前备份

Q: 如何解决客户端会导致 `壁纸引擎 (Wallpaper Engine)` 暂停的问题？

A: 因为客户端最大化被壁纸引擎判定为最大化窗口导致壁纸暂停了。右键壁纸引擎托盘，找到设置：

![Wallpaper-Rules](/wallpaper-rules.jpg)

`性能` → `应用程序规则` 点击，创建新规则：
- JackalClient.exe；条件：最大化；壁纸回放：保持运行
- JackalClient.exe；条件：成为焦点；壁纸回放：保持运行
即可。


Q: 为什么有些网络模块启用后什么都不输出

A: 你关闭了输出CURL错误。请在 `WebSettings 网络设定` 模块中打开 输出CURL错误 选项。默认值为“非超时错误”



Q: 为什么 `v0.9a` 版本的客户端那么糊

A: 关闭 GUI 选项中的 <font style="color:#74B602;">Anti Aliasing 抗锯齿</font>。新版采用了实验性的 `FXAA` 抗锯齿着色器，但是效果不理想。不过新出了一个配置项可以调整抗锯齿的强度。



Q: `v0.9a` 怎么一启动就打开 ScreenCapture 屏幕捕获 和 AntiCapture 反捕获？

A: BUG，已经在 `v0.9b` 修复。将 ScreenCapture 屏幕捕获的 **Exclude Client 捕获客户端** 暂时改成 **关闭**，然后关闭两个模块，下一次启动时 **AntiCapture** 就不会自动启动了。



Q: 如何启用 `HUD 模糊`，那种视频中的`液体玻璃`效果？

A: 在 其他 一栏中找到 `ScreenCapture / 屏幕捕获` 模块，确保 `排除客户端 Exclude Client` 改为 `保持 Keep`，这样效果最好。启用 HUD Blur 模块，将风格调为 <font style="color:#74B602;">Liquid Glass 液体玻璃</font>。此时客户端将会持续`后台截图`，会消耗一些性能，然后窗口将会开启 `AntiCapture 反捕获`，无法被截图软件和录屏软件的普通模式捕获，只能通过`游戏捕获模式`捕获（也就是注入并hook）。可以调节 `HUD Blur` 相关参数追求更好的视觉效果。

![Hud-Blur](/hud-blur.jpg)


Q: 怎么像视频中那样有发光的效果

A: 打开 `着色器模块(Shader)`，右键配置里面有多种着色器可以选，这是 `bloom(泛光)` 着色器。可能会掉帧，并导致有些透明的部分变成不透明的。



Q: `MALWARE WARNING 界面`是什么意思

A: 恶意模块警告。这个界面用于确认你是否知道你在做什么。有些恶意模块可能会造成不良影响，你应该提前知晓这个模块是干什么的。看信息，**等十秒后按Y确认**



Q: 自保护（**Protection**）模块启用后执行其他程序会直接崩溃

A: PPL 的一个机制，已在新版本解决，但是可能会有潜在的问题。
[点击了解什么是PPL](https://www.bilibili.com/video/BV1NkR5BpEWx/)


Q: 【PRO】`AutoL / 自动嘲讽` 卡住了，具体表现为 `Key Disabler 键盘禁用` 模块一直开着，无法AWSD移动

A: 更新到最新版本。已经添加了 `Key Disabler` 的最大启用时长，解决了这个问题。



Q: 怎么通知一直弹 **Invalid Cookies**

A: 有些哔哩模块是需要你登录的，你可能加载了别人的配置但是本地没有登陆。按一下 `BiliSettings 模块（B站设定）`，会弹出一个二维码，扫一下，登录就行了。Cookies 数据会存在 `Records.json` 里面并加密，<font style="color:#74B602;"> 所以你不要把 `Records.json` 发给别人（或者发之前去除相关信息）。</font>



Q: 怎样和视频当中一样有流动的颜色效果

A: 在一些模块的颜色设置中，选择 **<font style="color:#74B602;">流动（Flow）</font>**即可。流动的各项参数可以在 `着色器（Shader）` 模块中调。以及主题也可以在新版本选择了。



Q: 我怎么爆不了`图腾 (Totem)`

A: 新版本是 `着色器` 实现的三维效果，如果你只能见到粒子效果，作者还不清楚为什么看不到图腾。 旧版本的 `图腾 (Totem) ` 是视频，可能兼容性不太好，直接在客户端窗口里播放。如果卡就不要用了。如果背景是黑的，说明抠图失败，你可以选取黑色的像素点的 RGB，把他输入到图腾配置里面的色键中，可能就有一点用。



Q: 我的看门人怎么启动不了

A: `看门人模块(Gatekeeper) `需要 **管理员(Admin) **和 **特权(Privileges)**，检查是否开启。如果还是开不了，就是火绒等杀毒软件拦截了对系统进程的操作。还有，32位系统是不能开的。  
  
Q: 怎么绕过 `UAC` 窃得 管理员权限

A: 启用 **<font style="color:#DF2A3F;">管理员绕过(UACBypass) </font>**模块。自动获取管理员权限而无需弹出UAC窗口。如果失败了，就右键里面的方法换一种试试。还有，Config选项卡中有一个 **Elevate and Retry Admin Modules**，意为如果没有管理员权限，打开管理员模块，是否自动提权，改成 UACBypass 就会自动开启绕过然后启用那个模块。



Q: 按 `TrustedInstaller（受信任安装者）` 模块怎么没反应

A: 正在启动服务，等一会哈，然后提权完的客户端就会弹出来，旧的会自己退出



Q: 按 `System （系统）`模块怎么被360拦截了

A: 提权是敏感操作，当然会拦截



Q: 如何开启 Neverlose GUI

A: 首先你需要购买 **<font style="color:#DF2A3F;">专业版</font>**。然后找到 GUI 选项的 `ClickGUI Style`，调成 **Neverlose (PRO) **即可。如果想使用命令，你可以输入 **<font style="color:#74B602;">/gui style neverlose</font>**



Q: 怎么把主窗口的任务栏图标隐藏

A: 关闭 Taskbar Icon 模块。如果还有一个任务栏图标，那是控制台的，无法隐藏。



Q: 我的`连点器`怎么不工作

A: 右键 `AutoClicker` 找到 `Only Window Center`，意思是鼠标只在当前窗口的中心时才能触发，关闭它。其他选项也看看，最后的取消抬起的意思，说白了就是在MC中可以长按。破坏方块/吃东西。



Q: 讲述人 (Speaker) 怎么报错了

A: 有时候会出现的（例如被调试时必定无法使用），可能由音频设备未准备好导致的，尝试重新打开客户端。也有可能是内存不足。



Q: 隐私窗口 (PrivateWindow) 是怎么用的

A: `PrivateWindow` 可以将一些常用的隐私在截图和录屏中隐身，右键这个模块可以看到有 `QQ/微信/Steam/哔哩客户端/Edge` 等，可以自行调节。如果想对其他窗口进行该操作，你可以打开 **窗口大师模块(WindowMaster)**，有一个按键就是 **设为隐私/取消隐私**。通过 `/help privatewindow` 查看相关命令。



Q: 怎么有些修改桌面设定的没用

A: 尝试重新启动`文件资源管理器 (explorer.exe)`。或者注销。



Q: 我电脑怎么静音了还调不回来

A: 你开启了 `Mute / 静音` 模块，客户端会保持系统静音。当然没声音。关掉。



Q: 怎么做到任务栏滚轮就能调系统音量，窗口顶部滚轮就能调进程音量的

A: 右键 **音量模块(Volume)**，找到 `Wheel System Volume Adjust`，改成 `Mouse On Taskbar`；另一个同理。



Q: 怎么做到窗口左侧滚轮就能调窗口不透明度的

A: 打开 `Opacity Changer 不透明度修改` 模块。



Q: 客户端 **滚轮失效了**

A: 在 `Config 选项` 找到 `Mouse Wheel Detector（鼠标滚轮检测）`，调成另一个再试试。如果还是不行，请考虑重启客户端。模块配置等地方如果滚轮不行，你还可以使用上下箭头。



Q: 收不到 IRCLegacy 聊天消息

A: 打开 `IRCLegacy （旧版聊天室）`模块。如果收不到中文消息，可能是一个bug，作者还修不好。还有，如果作者开启了静默模式的维护，你肯定是收不到的。还有如果经常报错就是网络不太好。



Q: 我的音频可视化怎么不动了

A: 先检查音频可视化配置的 `可视化模式` 是否被你关掉了，改回 `柱状图` 或其他模式。你切换了音频设备。把 **音频可视化(AudioVisualizer) **模块关闭再打开即可。



Q: 怎么修改启动器样式，我看视频里面有一个VAPE启动器风格

A: 客户端打开，GUI选项下面的启动器风格 `Launcher Style`。   `Launcher Shaking` 选项开启后，启动器会一直震动。


Q: 显示某些信息的时候出现 `[Streamer Filtered]` 或者 `[Privacy Filtered]` 是什么鬼

A: 你开启了 **隐私保护（Privacy Protect）**（在旧版本 < `v1.1.0`下为 **主播模式 (Streamer)** 模块），会自动隐藏和过滤一些关键信息以免泄露。关闭即可。


Q: v1.1.2 版本客户端打开后资源管理器卡死，鼠标突然非常卡

A: v1.1.2 客户端导致资源管理器卡死的问题解决方案
1. 找到 config 文件夹，以修改时间排序，找到你的配置文件（在未重命名的时候，通常为 `profile-` 开头的 json 文件。
2. 用记事本打开，`Ctrl+F` 搜索 `No UAC`，找到下面的 `Bypass Explorer Notify`，把 true 改成 false，保存。
3. 搜索改成 `No Firewall`，找到下面的 `Masquerade`，把 true 改成 false，保存。
4. 重新打开客户端。
5. （自 v1.1.3 起，客户端已永久移除这两个选项。关闭防火墙模块将不提供绕过，始终需要管理员权限。）



Q: 我想购买`专业版 (PRO)`

A: [https://afdian.com/item/1eda4ca6ca2511f0a7ae52540025c377](https://afdian.com/item/1eda4ca6ca2511f0a7ae52540025c377) 购买激活码



Q: 怎么赞助作者。

A: [**<u>https://afdian.com/a/wormwaker697</u>**](https://afdian.com/a/wormwaker697)

