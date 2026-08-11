# 系统命令

> 本页由 `test/COMMANDS.txt` 自动拆分生成。

共 322 组命令。

## 显示命令的帮助信息（`/help [command...]`）

```bash
/help [command...]
/helpraw [command...]
```

::: details 点击查看说明
显示命令的帮助信息。如果不填参数则会输出命令行参数并打开本文件 COMMANDS.TXT。
如果填写参数，则会从该文件中显示所有匹配以该命令开头，以空行结尾的段落并输出。
而 /helpraw 在英文下不会翻译中文为英文。
示例：/help kill
:::

## 显示所有的命令助手选项（`/helper [list]`）

```bash
/helper [list]
```

::: details 点击查看说明
显示所有的命令助手选项。命令助手选项，表示命令执行后可能会用到的相关命令，会自动加入这个列表。
:::

## 使用键为 option_key 的命令助手选项（`/helper use &lt;option_key&gt;`）

```bash
/helper use <option_key>
```

::: details 点击查看说明
使用键为 option_key 的命令助手选项。
:::

## 清空命令助手选项（`/helper clear`）

```bash
/helper clear
```

::: details 点击查看说明
清空命令助手选项。
:::

## 关于（`/about`）

```bash
/about
```

::: details 点击查看说明
关于。
:::

## 异步执行一条命令（`/async &lt;command...&gt;`）

```bash
/async <command...>
```

::: details 点击查看说明
异步执行一条命令。
:::

## 执行一条命令，命令可以多行（`/multiline &lt;command...&gt;`）

```bash
/multiline <command...>
/ml <command...>
```

::: details 点击查看说明
执行一条命令，命令可以多行。但是会打开一个输入框，你在里面编辑后按OK即可立即执行。
:::

## 执行多条命令，用;;分隔，会依次执行，无论是否失…（`/multijackal &lt;commands...&gt;`）

```bash
/multijackal <commands...>
/mj <commands...>
```

::: details 点击查看说明
执行多条命令，用;;分隔，会依次执行，无论是否失败。
:::

## 执行多条命令，用;;分隔，遇到失败直接中止（`/multijackalinterrupt &lt;commands...&gt;`）

```bash
/multijackalinterrupt <commands...>
/mji <commands...>
```

::: details 点击查看说明
执行多条命令，用;;分隔，遇到失败直接中止。
:::

## 输出执行这条命令的输出（`/jackaloutput &lt;command...&gt;`）

```bash
/jackaloutput <command...>
```

::: details 点击查看说明
输出执行这条命令的输出。（测试命令）
:::

## 讲述执行这条命令的输出（`/jackalspeak &lt;command...&gt;`）

```bash
/jackalspeak <command...>
```

::: details 点击查看说明
讲述执行这条命令的输出。请避免执行输出过多的命令。
注意:
1. 只能获取到命令函数在返回前的输出，因为异步而在后面的输出并不能讲出来。
2. 无法获取命令函数调用的子进程的输出，例如执行一条CMD命令的输出（如果要读出一条CMD命令的输出，请使用/runspeak）
:::

## 查看客户端和系统版本（`/ver`）

```bash
/ver
```

::: details 点击查看说明
查看客户端和系统版本。
:::

## 异步退出（`/exit`）

```bash
/exit
/quit
/ausgang
```

::: details 点击查看说明
异步退出。
:::

## 同步退出（`/exitsync`）

```bash
/exitsync
```

::: details 点击查看说明
同步退出。
:::

## 发出一条通知（`/notify [msg...]`）

```bash
/notify [msg...]
```

::: details 点击查看说明
发出一条通知。
:::

## 尝试在字典中找到对应的翻译词汇后，发出一条通知（`/notifydict [msg...]`）

```bash
/notifydict [msg...]
```

::: details 点击查看说明
尝试在字典中找到对应的翻译词汇后，发出一条通知。
:::

## 为聊天栏添加一条新消息（`/chatbar add [msg...]`）

```bash
/chatbar add [msg...]
```

::: details 点击查看说明
为聊天栏添加一条新消息。
:::

## 清空聊天栏消息（`/chatbar clear`）

```bash
/chatbar clear
```

::: details 点击查看说明
清空聊天栏消息。
:::

## 在灵动岛上显示一条临时文本（`/islandtip [msg...]`）

```bash
/islandtip [msg...]
```

::: details 点击查看说明
在灵动岛上显示一条临时文本。
:::

## 设置灵动岛的进度条（`/islandprogress &lt;params...&gt;`）

```bash
/islandprogress <params...>
/progress <params...>
```

::: details 点击查看说明
设置灵动岛的进度条。详细参数请使用 /help progress
:::

## 测试灵动岛进度条（`/progress test &lt;time_ms&gt; [text...]`）

```bash
/progress test <time_ms> [text...]
```

::: details 点击查看说明
测试灵动岛进度条。时间为 time_ms 毫秒， 文本为 text ，默认文本为 Sleeping...
:::

## 设置灵动岛进度条文本（`/progress settext &lt;text...&gt;`）

```bash
/progress settext <text...>
```

::: details 点击查看说明
设置灵动岛进度条文本。
:::

## 设置灵动岛进度条的进度（0~100）（`/progress setvalue &lt;percentage&gt;`）

```bash
/progress setvalue <percentage>
```

::: details 点击查看说明
设置灵动岛进度条的进度（0~100）。
:::

## 增加灵动岛进度条的进度（`/progress addvalue &lt;value&gt;`）

```bash
/progress addvalue <value>
```

::: details 点击查看说明
增加灵动岛进度条的进度。
:::

## 开始灵动岛进度条（`/progress start`）

```bash
/progress start
```

::: details 点击查看说明
开始灵动岛进度条。
:::

## 结束灵动岛进度条（`/progress end`）

```bash
/progress end
```

::: details 点击查看说明
结束灵动岛进度条。
:::

## 发送一条花式文本（`/fancytext [content...]`）

```bash
/fancytext [content...]
```

::: details 点击查看说明
发送一条花式文本。
:::

## 使用托盘发送消息（`/wintoast [msg...]`）

```bash
/wintoast [msg...]
/traytip [msg...]
/traywarn [msg...]
/trayerror [msg...]
```

::: details 点击查看说明
使用托盘发送消息。/traywarn 发送警告，/trayerror 发送错误。
:::

## 弹出一个对话框，显示一条消息（`/msgboxtip [msg...]`）

```bash
/msgboxtip [msg...]
```

::: details 点击查看说明
弹出一个对话框，显示一条消息。
:::

## 创建一个可受 Dialog Physics 模块…（`/msgbox new/create [msg...]`）

```bash
/msgbox new/create [msg...]
```

::: details 点击查看说明
创建一个可受 Dialog Physics 模块控制的对话框，显示msg消息。
:::

## 创建 cnt 个可受 Dialog Physic…（`/msgbox multicreate &lt;cnt&gt; [msg...]`）

```bash
/msgbox multicreate <cnt> [msg...]
```

::: details 点击查看说明
创建 cnt 个可受 Dialog Physics 模块控制的对话框，显示msg消息。
:::

## 清空登记过的对话框（`/msgbox clear`）

```bash
/msgbox clear
```

::: details 点击查看说明
清空登记过的对话框。
:::

## 枚举登记过的对话框信息（`/msgbox list`）

```bash
/msgbox list
```

::: details 点击查看说明
枚举登记过的对话框信息。
:::

## 测试对话框（`/msgbox2 test`）

```bash
/msgbox2 test
```

::: details 点击查看说明
测试对话框。
:::

## 创建一个对话框，显示msg消息（`/msgbox2 new/create [msg...]`）

```bash
/msgbox2 new/create [msg...]
```

::: details 点击查看说明
创建一个对话框，显示msg消息。
:::

## 创建 cnt 个对话框，显示msg消息（`/msgbox2 multicreate &lt;cnt&gt; [msg...]`）

```bash
/msgbox2 multicreate <cnt> [msg...]
```

::: details 点击查看说明
创建 cnt 个对话框，显示msg消息。
:::

## 清空对话框（`/msgbox2 clear`）

```bash
/msgbox2 clear
```

::: details 点击查看说明
清空对话框。
:::

## 显示所有内置变量（`/variables`）

```bash
/variables
```

::: details 点击查看说明
显示所有内置变量。如需列举环境变量，请使用 /set 命令。
:::

## 启用或禁用命令行的内置变量（`/variables &lt;enable&gt;`）

```bash
/variables <enable>
```

::: details 点击查看说明
启用或禁用命令行的内置变量。使用时请用百分号包裹变量。enable 填写布尔值。
:::

## 和dos命令set用法相同：（`/set [args...]`）

```bash
/set [args...]
```

::: details 点击查看说明
和dos命令set用法相同：
设置环境变量 /set key=value
枚举环境变量 /set
枚举A开头的环境变量 /set A
:::

## 初始化相关文件的文件关联（`/initassoc`）

```bash
/initassoc
```

::: details 点击查看说明
初始化相关文件的文件关联。 (WIP)
:::

## 显示device命令帮助（`/device help`）

```bash
/device help
```

::: details 点击查看说明
显示/device命令帮助。
:::

## 获取当前默认音频设备（`/device audio [get]`）

```bash
/device audio [get]
```

::: details 点击查看说明
获取当前默认音频设备。
:::

## 显示系统设备列表（`/devices`）

```bash
/devices
/device list/enum/show/display
```

::: details 点击查看说明
显示系统设备列表。
:::

## 如果不指定pid，则获取系统音量（`/volume [args...]`）

```bash
/volume [args...]
/volume get [pid]
```

::: details 点击查看说明
如果不指定pid，则获取系统音量。否则获取指定进程音量。
:::

## 展示系统混音器（`/volume enum/show/display/list`）

```bash
/volume enum/show/display/list
```

::: details 点击查看说明
展示系统混音器。包括系统音量和各个进程音量。
:::

## 设置系统音量 (0~100)（`/volume set &lt;volume&gt;`）

```bash
/volume set <volume>
```

::: details 点击查看说明
设置系统音量 (0~100)
:::

## 设置某进程音量 (0~100)（`/volume set &lt;pid&gt; &lt;volume&gt;`）

```bash
/volume set <pid> <volume>
```

::: details 点击查看说明
设置某进程音量 (0~100)
:::

## 如果不指定参数，则切换 Music 模块（`/music [path...]`）

```bash
/music [path...]
```

::: details 点击查看说明
如果不指定参数，则切换 Music 模块。
如果指定参数，则同步播放指定的音乐。（只能是wav或mp3）
如果要异步播放，请使用 /async music [path...]
:::

## 使用音频隔离模式同步播放指定的音乐（`/isomusic [path...]`）

```bash
/isomusic [path...]
```

::: details 点击查看说明
使用音频隔离模式同步播放指定的音乐。（只能是wav或mp3）
如果要异步播放，请使用 /async isomusic [path...]
:::

## 枚举所有梗（`/meme`）

```bash
/meme
```

::: details 点击查看说明
枚举所有梗。
:::

## 同步触发一个梗（`/meme &lt;name&gt;`）

```bash
/meme <name>
```

::: details 点击查看说明
同步触发一个梗。
:::

## 关闭命令行 (Shell 模块)（`/break`）

```bash
/break
/exitshell
/quitshell
```

::: details 点击查看说明
关闭命令行 (Shell 模块)。
:::

## 强制关闭命令行 (Shell 模块) ，会终止线…（`/killshell`）

```bash
/killshell
/terminateshell
```

::: details 点击查看说明
强制关闭命令行 (Shell 模块) ，会终止线程，可能会导致客户端不稳定，请注意。
:::

## 断言（`/assert &lt;condition_expr...&gt;`）

```bash
/assert <condition_expr...>
```

::: details 点击查看说明
断言。如果条件表达式 condition_expr 为假，则终止当前命令执行环境。
对于一个批处理文件，会终止其执行。对于命令行，则只是报错。
对于条件表达式：
it
检查 it 的有效性。如果是句柄则检查句柄有效性，否则就是强制转换成 bool 类型。
proc_exists `<pid/procname...>`
检查进程是否存在。
:::

## 切换命令行沉浸模式（`/exclusive [enable]`）

```bash
/exclusive [enable]
```

::: details 点击查看说明
切换命令行沉浸模式。沉浸模式开启后，HUD将会隐藏。
enable 是布尔类型，不填则表示切换。
:::

## 发送一条弹幕（`/chatter &lt;content...&gt;`）

```bash
/chatter <content...>
/tchatter <content...>
/bchatter <content...>
/rchatter <content...>
/hchatter <content...>
/vchatter <content...>
```

::: details 点击查看说明
发送一条弹幕。/tchatter 发送置顶弹幕。 /bchatter 发送置底弹幕。 /rchatter 发送反向弹幕。/hchatter 发送普通或反向弹幕。/vchatter 发送置顶或置底弹幕。
:::

## 显示弹幕池缓冲区（`/danmakubuffer`）

```bash
/danmakubuffer
```

::: details 点击查看说明
显示弹幕池缓冲区。
:::

## 显示一条标题信息（`/title &lt;content...&gt;`）

```bash
/title <content...>
```

::: details 点击查看说明
显示一条标题信息。
:::

## 使用 OutputDebugString 输出一…（`/debugstr [msg...]`）

```bash
/debugstr [msg...]
/dbgstr [msg...]
```

::: details 点击查看说明
使用 OutputDebugString 输出一条调试信息。
:::

## 立即保存客户端配置（`/save`）

```bash
/save
```

::: details 点击查看说明
立即保存客户端配置。
:::

## 打开汉化（`/chinese`）

```bash
/chinese
/cn
```

::: details 点击查看说明
打开汉化。
:::

## 关闭汉化（`/english`）

```bash
/english
/en
```

::: details 点击查看说明
关闭汉化。
:::

## 隐藏（`/hide`）

```bash
/hide
/hidden
```

::: details 点击查看说明
隐藏。（启用Hidden模块）
:::

## 以管理员身份自启（`/admin`）

```bash
/admin
```

::: details 点击查看说明
以管理员身份自启。
:::

## 调用UACBypass模块，绕过UAC获取管理员…（`/uacbypass`）

```bash
/uacbypass
```

::: details 点击查看说明
调用UACBypass模块，绕过UAC获取管理员权限。
:::

## 以系统身份自启（`/system`）

```bash
/system
```

::: details 点击查看说明
以系统身份自启。
:::

## 以受信任安装者权限自启（`/ti`）

```bash
/ti
/trustedinstaller
```

::: details 点击查看说明
以受信任安装者权限自启。
:::

## 以 UIAccess 权限运行（`/uiaccess [cmdline...]`）

```bash
/uiaccess [cmdline...]
```

::: details 点击查看说明
以 UIAccess 权限运行。如果不指定参数，则为自启。
:::

## 改变模块开关状态（`/enable &lt;ModuleName&gt;`）

```bash
/enable <ModuleName>
/e <ModuleName>
/disable <ModuleName>
/d <ModuleName>
/toggle <ModuleName>
/t <ModuleName>
/<ModuleName>
```

::: details 点击查看说明
改变模块开关状态。
:::

## 查看启用了哪些模块（`/enables`）

```bash
/enables
/enabled
```

::: details 点击查看说明
查看启用了哪些模块。
:::

## 查看当前时间戳及其字符串形式（`/timestamp [timestamp=now]`）

```bash
/timestamp [timestamp=now]
/time [params.../timestamp=now]
```

::: details 点击查看说明
查看当前时间戳及其字符串形式。/time 还可以有很多子命令。
:::

## 同步系统时间（`/time sync [method=web/memory]`）

```bash
/time sync [method=web/memory]
```

::: details 点击查看说明
同步系统时间。需要管理员权限。web表示用网络时间同步，memory表示用内存时间同步。使用该命令不会修改 TimeManager 模块的开关状态。
:::

## 关闭 TimeManager 模块后再执行 ti…（`/time restore [method=web/memory]`）

```bash
/time restore [method=web/memory]
```

::: details 点击查看说明
关闭 TimeManager 模块后再执行 /time sync。需要管理员权限。
:::

## 设置系统时间（`/time set <timestamp/string>`）

```bash
/time set <timestamp/string>
/time set <year> <month> <day> <hour> <minute> <second>
/time set <hour> <minute> <second>
/time set <hour> <minute>
/time setonce <timestamp/string>
/time setonce <year> <month> <day> <hour> <minute> <second>
/time setonce <hour> <minute> <second>
/time setonce <hour> <minute>
```

::: details 点击查看说明
设置系统时间。需要管理员权限。set 会打开 TimeManager 模块且自动修改模块配置使得符合你的命令参数。而 setonce 为单次操作，不会打开 TimeManager 模块。注意 `&lt;string&gt;` 参数表示你可以用字符串形式修改时间，包括下面的格式：
YYYY/MM/DD
YYYY/MM/DD HH:mm:SS
YYYY/MM/DD HH:mm
MM/DD
MM/DD HH:mm:SS
MM/DD HH:mm
HH:mm:SS
HH:mm
:::

## 显示当前 TimeManager 存储到内存中的…（`/time memory`）

```bash
/time memory
```

::: details 点击查看说明
显示当前 TimeManager 存储到内存中的修改数据。
:::

## 查看或设置 TimeManager 的加速倍率（…（`/time speed [value]`）

```bash
/time speed [value]
/time accelspeed [value]
```

::: details 点击查看说明
查看或设置 TimeManager 的加速倍率（Acceleration Speed）。不指定 value 时仅显示当前模式和加速倍率。
:::

## 切换 TimeManager 到 Acceler…（`/time accelerate [speed]`）

```bash
/time accelerate [speed]
/time accel [speed]
```

::: details 点击查看说明
切换 TimeManager 到 Accelerated 模式并启用模块。需要管理员权限。该模式只修改时间流速，不直接设置固定时间点和偏移量。
也可以不填 speed，这时使用 TimeManager 配置中的 Acceleration Speed。
如果当前模式属于 Offset 系列，则会切换到 Offset Accelerated；如果属于 Set 系列，则会切换到 Set Accelerated。
:::

## 对系统时间进行偏移（`/time offset &lt;expressions...&gt;`）

```bash
/time offset <expressions...>
/time offsetonce <expressions...>
```

::: details 点击查看说明
对系统时间进行偏移。需要管理员权限。offset 会打开 TimeManager 模块且自动修改模块配置使得符合你的命令参数。而 offsetonce 为单次操作，不会打开 TimeManager 模块。expressions 表达式需要符合下面的格式：
单位操作符数值
单位包括：year=yr=y, month=mon, day=d, hour=hr=h, minute=min=m, second=sec=s
操作符包括：+ - =  （其中如果使用=，则用算法将其转为+或-）
数值就是纯数字。示例：/time offset hr+1 m-10 sec=50   表示时间+1小时，-10分钟，秒设为50
:::

## 查看上一个 Win32 错误（`/err`）

```bash
/err
/error
/lasterr
/lasterror
```

::: details 点击查看说明
查看上一个 Win32 错误。
:::

## 等待 duration 毫秒（`/sleep &lt;duration&gt;`）

```bash
/sleep <duration>
/sleepms <duration>
```

::: details 点击查看说明
等待 duration 毫秒。
:::

## 等待 duration 秒（`/sleeps &lt;duration&gt;`）

```bash
/sleeps <duration>
/sleepsec <duration>
```

::: details 点击查看说明
等待 duration 秒。可以是小数。
:::

## 具体查看代词 it 的情况，将会详细展开句柄的信…（`/it`）

```bash
/it
```

::: details 点击查看说明
具体查看代词 it 的情况，将会详细展开句柄的信息。
:::

## 快速执行（`/quickrun &lt;command...&gt;`）

```bash
/quickrun <command...>
/quickrunex <command...>
```

::: details 点击查看说明
快速执行。如果不认识这个程序，则会自动开始全盘扫描并记录。/quickrunex 始终让用户选择。如果想中止扫描，请手动关闭 QuickRun 模块。
:::

## 运行命令提示符（`/cmd [param...]`）

```bash
/cmd [param...]
/runcmd [param...]
/newcmd [param...]
/execcmd [param...]
```

::: details 点击查看说明
运行命令提示符。
- /cmd, /runcmd: 同步
- /newcmd: 异步，新窗口
- /execcmd: 异步，同一个窗口
:::

## 查看所有命令提示符的进程信息（`/cmds`）

```bash
/cmds
```

::: details 点击查看说明
查看所有命令提示符的进程信息。
:::

## 杀死所有命令提示符（`/killcmd`）

```bash
/killcmd
```

::: details 点击查看说明
杀死所有命令提示符。
:::

## 杀死所有 PowerShell（`/killps`）

```bash
/killps
```

::: details 点击查看说明
杀死所有 PowerShell。
:::

## 切换该模块（`/autostart`）

```bash
/autostart
```

::: details 点击查看说明
切换该模块。
:::

## 检查三个地方的开机自启是否开启：注册表、服务、计…（`/autostart check`）

```bash
/autostart check
```

::: details 点击查看说明
检查三个地方的开机自启是否开启：注册表、服务、计划任务。
:::

## 开启某种方法的开机自启（`/autostart enable [method]`）

```bash
/autostart enable [method]
/autostart add [method]
```

::: details 点击查看说明
开启某种方法的开机自启。需要管理员权限。
:::

## 关闭某种方法的开机自启（`/autostart disable [method]`）

```bash
/autostart disable [method]
/autostart remove [method]
```

::: details 点击查看说明
关闭某种方法的开机自启。需要管理员权限。
:::

## 十六进制查看字符串（`/hexview [text...]`）

```bash
/hexview [text...]
```

::: details 点击查看说明
十六进制查看字符串。如果不指定参数则读取剪贴板文本。
:::

## 在 Wikipedia 上搜索有关词汇的信息（`/wiki &lt;term&gt;`）

```bash
/wiki <term>
/wikipedia <term>
```

::: details 点击查看说明
【PRO】在 Wikipedia 上搜索有关词汇的信息。
:::

## 在字典API查询一个英语单词的释义并输出（`/word &lt;word&gt;`）

```bash
/word <word>
/dict <word>
/dictionary <word>
```

::: details 点击查看说明
【PRO】在字典API查询一个英语单词的释义并输出。包括音标，释义，例句等。
:::

## 查看已加载的部分贴图（`/textures`）

```bash
/textures
```

::: details 点击查看说明
查看已加载的部分贴图。
:::

## 导出指定的贴图到 output 文件夹下（`/texture &lt;name...&gt;`）

```bash
/texture <name...>
```

::: details 点击查看说明
导出指定的贴图到 output 文件夹下。
:::

## 查找文件里符合条件的字符串或正则表达式（`/grep [options...] pattern [files...]`）

```bash
/grep [options...] pattern [files...]
```

::: details 点击查看说明
查找文件里符合条件的字符串或正则表达式。
目前支持的开关有：
-i				忽略字母大小写
-v				反向查找，只打印不匹配的行。
-w				全字匹配。
-A `&lt;count&gt;`		除了显示符合范本样式的那一列之外，并显示该行之后的 count 行内容。
-B `&lt;count&gt;`		除了显示符合样式的那一行之外，并显示该行之前的 count 行内容。
-c				计算符合样式的列数。
-e `&lt;regex&gt;`		指定字符串做为查找文件内容的样式。
-E				将样式为延伸的正则表达式来使用。
-G				将样式视为普通的表示法来使用。
-H				在显示符合样式的那一行之前，表示该行所属的文件名称。
-l				列出文件内容符合指定的样式的文件名称。
-L				列出文件内容不符合指定的样式的文件名称。
-n				在显示符合样式的那一行之前，标示出该行的列数编号。
-o				只显示匹配 pattern 部分。
--help			打印帮助。
:::

## 显示缓存内容（`/record`）

```bash
/record
```

::: details 点击查看说明
显示缓存内容。
:::

## 查看当前档案名称（`/profile`）

```bash
/profile
```

::: details 点击查看说明
查看当前档案名称。
:::

## 枚举所有档案（`/profile list`）

```bash
/profile list
```

::: details 点击查看说明
枚举所有档案。
:::

## 保存当前档案（`/profile save`）

```bash
/profile save
```

::: details 点击查看说明
保存当前档案。注意，默认档案不能修改，将会新建一个档案。
:::

## 加载指定档案（`/profile load &lt;name...&gt;`）

```bash
/profile load <name...>
```

::: details 点击查看说明
加载指定档案。
:::

## 检查指定在线档案是否存在（`/profile checkonline &lt;name...&gt;`）

```bash
/profile checkonline <name...>
```

::: details 点击查看说明
检查指定在线档案是否存在。
:::

## 上传当前的档案到在线文本数据库（`/profile upload [name...]`）

```bash
/profile upload [name...]
```

::: details 点击查看说明
上传当前的档案到在线文本数据库。如果不指定名称参数，则会使用随机名称。档案名称和内容都将会加密。
注意：在线文本数据库属于他人免费搭建，我不能保证其寿命，请不要过度依赖在线档案功能。
:::

## 从在线文本数据库下载指定的在线档案到config…（`/profile download [name...]`）

```bash
/profile download [name...]
```

::: details 点击查看说明
从在线文本数据库下载指定的在线档案到config文件夹。如果有重名文件将会添加后缀。
:::

## 从在线文本数据库下载指定的在线档案到config…（`/profile useonline [name...]`）

```bash
/profile useonline [name...]
```

::: details 点击查看说明
从在线文本数据库下载指定的在线档案到config文件夹并加载。如果有重名文件将会添加后缀。
:::

## 配置项的相关操作命令（`/config &lt;params...&gt;`）

```bash
/config <params...>
```

::: details 点击查看说明
配置项的相关操作命令。使用 /config ui 命令进入一个交互式界面。如果你要操作配置档案，请使用 /profile 命令。
:::

## 枚举一个模块的所有配置选项（`/config list &lt;moduleName&gt;`）

```bash
/config list <moduleName>
```

::: details 点击查看说明
枚举一个模块的所有配置选项。也可以填 config/gui/hud/sound
:::

## 复制模块差异配置（`/config copy &lt;moduleName&gt;`）

```bash
/config copy <moduleName>
```

:::: details 点击查看说明
将指定模块（或config/gui/hud/sound）中不同于默认值的配置差异 JSON 复制到剪贴板（无换行）。
::::

## 复制模块完整配置（`/config copyfull &lt;moduleName&gt;`）

```bash
/config copyfull <moduleName>
/config pastefull <moduleName>
```

:::: details 点击查看说明
将指定模块（或config/gui/hud/sound）的完整配置 JSON 复制到剪贴板（无换行）。
::::

## 导入模块配置 JSON（`/config paste [json=clipboard]`）

```bash
/config paste [json=clipboard]
```

:::: details 点击查看说明
从 JSON 导入配置，自动识别所属模块并应用；不填参数则读取剪贴板。支持 /config copy 生成的差异 JSON，也兼容旧版 /config copy 生成的裸配置 JSON。
::::

## 对比模块配置 JSON（`/config diff &lt;moduleName&gt; [json=clipboard]`）

```bash
/config diff <moduleName> [json=clipboard]
```

:::: details 点击查看说明
将 JSON 中的配置与当前模块（或config/gui/hud/sound）的本机配置进行对比；不填 JSON 则读取剪贴板。
::::
## 获取一个模块（或configguihudsoun…（`/config get &lt;moduleName&gt; &lt;keyName...&gt;`）

```bash
/config get <moduleName> <keyName...>
```

::: details 点击查看说明
获取一个模块（或config/gui/hud/sound）的某一个选项。支持模糊匹配：
若相似度 >75% 且唯一，或第一名比第二名高 40% 以上，会自动选中并提示。
keyName 不区分大小写，可以去除空格。
:::

## 模糊查找一个模块（或configguihudso…（`/config search &lt;moduleName&gt; &lt;keyName...&gt;`）

```bash
/config search <moduleName> <keyName...>
```

::: details 点击查看说明
模糊查找一个模块（或config/gui/hud/sound）的某一个或几个选项。keyName 不区分大小写，可以去除空格。只要某个选项的键包含该字符串即可。
:::

## 设置一个模块（或configguihudsoun…（`/config set &lt;moduleName&gt; &lt;keyName&gt; &lt;rawValue...&gt;`）

```bash
/config set <moduleName> <keyName> <rawValue...>
```

::: details 点击查看说明
设置一个模块（或config/gui/hud/sound）的某一个选项。支持 moduleName/keyName/value（ComboBox）模糊匹配，
自动匹配时会给出提示。rawValue 是原始值，字符串必须用双引号
且转义字符必须转义。数字不可以添加字面量后缀。
如果该选项值类型为 ComboBox ，则填写选中的选项，不需要双引号。
如果为 KeyBind，则填写键名，如果为组合快捷键，则用逗号或分号分隔。例如：Ctrl,Alt,5。如果取消绑定，则为 None, Null, Empty 或 Unbound 任意一个关键字。
:::

## 重置一个模块（或configguihudsoun…（`/config reset &lt;moduleName&gt; [keyName...]`）

```bash
/config reset <moduleName> [keyName...]
```

::: details 点击查看说明
重置一个模块（或config/gui/hud/sound），或者这个模块的某一个值。支持 moduleName/keyName 模糊匹配，
自动匹配时会给出提示。keyName 不区分大小写，可以去除空格。
例如重置 Time Display 模块： /config reset timedisplay
:::

## 进入交互式配置界面（彩色输出，_getch 操作…（`/config ui &lt;moduleName&gt;`）

```bash
/config ui <moduleName>
/config interactive <moduleName>
/config pick <moduleName>
```

::: details 点击查看说明
进入交互式配置界面（彩色输出，_getch 操作）：
↑/↓ 选择键，Home/End 跳到首尾，PageUp/PageDown 快速翻页，
Enter/G 查看详情，S 设置当前键，R 重置当前键，Q/Esc 退出。
Ctrl+R 重置整个模块配置（会二次确认）。
类型显示与 /config list 一致（string/boolean/int/float/combo/keybind/...）。
编辑行为：
1) ComboBox：用 ↑/↓ 或 1~9 选择，Enter 确认，Q/Esc 取消。
2) Boolean：1=true, 0=false, T=切换，Q/Esc 取消。
3) 其他类型：输入原始值后回车；输入 cancel 或 /cancel 取消编辑。
:::

## 打开或关闭 GUI（`/gui`）

```bash
/gui
/gui toggle
```

::: details 点击查看说明
打开或关闭 GUI。
:::

## 查询现在的GUI风格（`/gui style`）

```bash
/gui style
```

::: details 点击查看说明
查询现在的GUI风格。
:::

## 设置现在的GUI风格（defaultneverl…（`/gui style &lt;style&gt;`）

```bash
/gui style <style>
```

::: details 点击查看说明
设置现在的GUI风格（default/neverlose/imgui）
:::

## 查看所有模块的按键绑定（bind, bind (…（`/binds`）

```bash
/binds
```

::: details 点击查看说明
查看所有模块的按键绑定（bind, bind (Enable), bind (Disable)）
:::

## 绑定单个模块的按键（`/bind &lt;moduleName&gt; &lt;keyBind&gt;`）

```bash
/bind <moduleName> <keyBind>
/bindenable <moduleName> <keyBind>
/binddisable <moduleName> <keyBind>
```

::: details 点击查看说明
绑定单个模块的按键。bind 表示开关按键， bind (Enable) 表示开按键， bind (Disable) 表示关按键。
:::

## 用指定方法加密或解密一行文本（`/encrypt &lt;method&gt; [content...]`）

```bash
/encrypt <method> [content...]
/decrypt <method> [content...]
/encryptcopy <method> [content...]
/decryptcopy <method> [content...]
```

::: details 点击查看说明
用指定方法加密或解密一行文本。
支持的方法，请输入字符串：
	base64
	md5
	crc32
	sha1
	beast
	abracadabra
	pipa
	pipaplus
	pipasimp: 简体
	pipatrad: 繁体
	pipasimpplus: 简体+
	pipatradplus: 繁体+
	pipasimpplus2: 简体+，带标点
	pipatradplus2: 繁体+，带标点
若 content 不指定，则会先查看剪贴板里的文本，如果为空且为命令行线程，则直接要求输入。
后两条带copy的会将结果复制到剪贴板。
:::

## 没有参数时，切换加密器模块状态（`/encryptor [content...]`）

```bash
/encryptor [content...]
/decryptor [content...]
```

::: details 点击查看说明
没有参数时，切换加密器模块状态。否则，对 content 文本进行加密或解密。方式为加密器模块配置中选择的方法。
:::

## 调用魔曰加密器进行指定的操作（`/abra [args...]`）

```bash
/abra [args...]
/abracadabra [args...]
/abracopy [args...]
/abracadabracopy [args...]
```

::: details 点击查看说明
调用魔曰加密器进行指定的操作。由于魔曰原仓库开源协议的限制，Jackal客户端没有内置该功能，你需要单独下载一个开源的exe。路径需要在 Encryptor 加密器模块中设置。后两条带copy的命令会在成功后复制结果。args 填运行参数。填写/?查看帮助。提示：`/abra -e/-d [-k &lt;key&gt;] -i &lt;text...&gt;`
:::

## 若没有参数，则查看系统架构（`/arch [hprocess]`）

```bash
/arch [hprocess]
/bits [hprocess]
/isx86 [hprocess]
/isx64 [hprocess]
```

::: details 点击查看说明
若没有参数，则查看系统架构。
若有参数，则查看指定进程架构。
:::

## 向指定进程注入DLL（`/inject &lt;hprocess&gt; &lt;dllpath...&gt;`）

```bash
/inject <hprocess> <dllpath...>
/ntinject <hprocess> <dllpath...>
/apcinject <hprocess> <dllpath...>
/inject32 <hprocess> <dllpath...>
/ntinject32 <hprocess> <dllpath...>
/apcinject32 <hprocess> <dllpath...>
/inject64 <hprocess> <dllpath...>
/ntinject64 <hprocess> <dllpath...>
/apcinject64 <hprocess> <dllpath...>
```

::: details 点击查看说明
向指定进程注入DLL。三种形式分别对应：CreateRemoteThread, NtCreateThreadEx, QueueUserAPC 注入方法。
如果后面写 32 或 64，将不自动判断进程架构，而是根据指定架构进行操作。
:::

## 向指定进程卸载DLL（`/uninject &lt;hprocess&gt; &lt;dllname&gt;`）

```bash
/uninject <hprocess> <dllname>
/ntuninject <hprocess> <dllname>
/apcuninject <hprocess> <dllname>
/uninject32 <hprocess> <dllname>
/ntuninject32 <hprocess> <dllname>
/apcuninject32 <hprocess> <dllname>
/uninject64 <hprocess> <dllname>
/ntuninject64 <hprocess> <dllname>
/apcuninject64 <hprocess> <dllname>
```

::: details 点击查看说明
向指定进程卸载DLL。三种形式分别对应：CreateRemoteThread, NtCreateThreadEx, QueueUserAPC 卸载方法。
如果后面写 32 或 64，将不自动判断进程架构，而是根据指定架构进行操作。
:::

## 简单的DLL反射式注入（`/rinject &lt;hprocess&gt; &lt;dllpath...&gt;`）

```bash
/rinject <hprocess> <dllpath...>
/rinject2 <hprocess> <dllpath...>
```

::: details 点击查看说明
简单的DLL反射式注入。后面写2时，将调用外部 loader.exe 进行注入。
:::

## 切换 RemoteRun 模块（`/remoterun`）

```bash
/remoterun
```

::: details 点击查看说明
切换 RemoteRun 模块。
:::

## 注入指定进程使之运行指定的命令（`/remoterun &lt;hprocess&gt; &lt;command...&gt;`）

```bash
/remoterun <hprocess> <command...>
/remoterun32 <hprocess> <command...>
/remoterun64 <hprocess> <command...>
```

::: details 点击查看说明
注入指定进程使之运行指定的命令。
如果后面写 32 或 64，将不自动判断进程架构，而是根据指定架构进行操作。
:::

## 不借助DLL的其他注入操作（`/injectex &lt;prefab&gt; &lt;hprocess&gt; [parameters...]`）

```bash
/injectex <prefab> <hprocess> [parameters...]
```

::: details 点击查看说明
不借助DLL的其他注入操作。
参数 prefab 可以为以下之一：
	exit: 退出。
:::

## terminate: 终止另外一个进程（`/injectex exit &lt;hprocess&gt;`）

```bash
/injectex exit <hprocess>
```

::: details 点击查看说明
	terminate: 终止另外一个进程。
:::

## msgbox: 弹窗（`/injectex terminate &lt;hprocess&gt; &lt;target_hprocess&gt;`）

```bash
/injectex terminate <hprocess> <target_hprocess>
```

::: details 点击查看说明
	msgbox: 弹窗。
:::

## （该命令在原始文档中未提供额外说明）（`/injectex msgbox &lt;hprocess&gt; &lt;text&gt; [title="Inject"] [style=64]`）

```bash
/injectex msgbox <hprocess> <text> [title="Inject"] [style=64]
```

::: details 点击查看说明
（该命令在原始文档中未提供额外说明）
:::

## 在资源管理器中定位一个文件路径（`/locate [path...]`）

```bash
/locate [path...]
/showie [path...]
```

::: details 点击查看说明
在资源管理器中定位一个文件路径。两者的区别是，/locate 是打开并选中，/showie 是打开所在目录。
:::

## 在注册表编辑器中定位一个值或项的路径（`/showir &lt;params...&gt;`）

```bash
/showir <params...>
/regedit [params...]
```

::: details 点击查看说明
在注册表编辑器中定位一个值或项的路径。参数params必须是一个JSON：
{"root":"根","path":"路径","value":"值名称，可选","uacbypass":是否允许绕过UAC}
例如：/regedit {"root":"HKEY_LOCAL_MACHINE","path":"SOFTWARE\\Policies\\Microsoft\\TPM","value":"OSManagedAuthLevel","uacbypass":true}
:::

## 获取文件或文件夹的大小（`/getsize &lt;path...&gt;`）

```bash
/getsize <path...>
```

::: details 点击查看说明
获取文件或文件夹的大小。
:::

## 异步执行命令（`/exe &lt;command...&gt;`）

```bash
/exe <command...>
/exec <command...>
/runasync <command...>
```

::: details 点击查看说明
异步执行命令。
:::

## 同步执行命令（`/run &lt;command...&gt;`）

```bash
/run <command...>
/execsync <command...>
```

::: details 点击查看说明
同步执行命令。不推荐使用。
:::

## 同步执行命令并讲述其输出（`/runspeak &lt;command...&gt;`）

```bash
/runspeak <command...>
```

::: details 点击查看说明
同步执行命令并讲述其输出。
:::

## 交互式命令运行（`/iarun &lt;params...&gt;`）

```bash
/iarun <params...>
```

::: details 点击查看说明
交互式命令运行。params 为相关参数。
:::

## 启动交互式命令运行（`/iarun start &lt;command...&gt;`）

```bash
/iarun start <command...>
```

::: details 点击查看说明
启动交互式命令运行。你可以用指令操纵对它的行为。
:::

## 重新启动交互式命令运行（`/iarun restart &lt;command...&gt;`）

```bash
/iarun restart <command...>
```

::: details 点击查看说明
重新启动交互式命令运行。如果正在运行，会先关闭。
:::

## 输出当前交互式命令运行的状态信息（`/iarun info`）

```bash
/iarun info
```

::: details 点击查看说明
输出当前交互式命令运行的状态信息。
:::

## 向交互式进程的 STDIN 发送内容（`/iarun input/in &lt;content...&gt;`）

```bash
/iarun input/in <content...>
```

::: details 点击查看说明
向交互式进程的 STDIN 发送内容。
:::

## 从交互式进程的 STDOUT 读取内容并输出到控…（`/iarun output/out &lt;content...&gt;`）

```bash
/iarun output/out <content...>
/iarun outputpatient <content...>
```

::: details 点击查看说明
从交互式进程的 STDOUT 读取内容并输出到控制台。output/out 会有一个5秒的超时时间，而使用 outputpatient 会永远等待，所以不推荐。
:::

## 关闭当前交互式命令（`/iarun stop`）

```bash
/iarun stop
```

::: details 点击查看说明
关闭当前交互式命令。非强制。
:::

## 强制关闭当前交互式命令的进程（`/iarun kill`）

```bash
/iarun kill
```

::: details 点击查看说明
强制关闭当前交互式命令的进程。
:::

## 模拟用户异步执行命令（`/legitexec &lt;command...&gt;`）

```bash
/legitexec <command...>
```

::: details 点击查看说明
模拟用户异步执行命令。旨在绕过某些杀软拦截。
:::

## 父进程欺骗异步执行命令（`/parentspoofexec &lt;command...&gt;`）

```bash
/parentspoofexec <command...>
```

::: details 点击查看说明
父进程欺骗异步执行命令。父进程会在一些合适的进程里挑选。
:::

## 确保以管理员身份同步执行命令（`/sudo &lt;command...&gt;`）

```bash
/sudo <command...>
/sudobypass <command...>
/sudobypassex <method> <command...>
```

::: details 点击查看说明
确保以管理员身份同步执行命令。如果使用 /sudobypass，则会调用用户账户控制绕过手段。 /sudobypassex 允许你指定绕过方法。
:::

## 绕过执行策略运行一个后缀名为（`/runps &lt;path...&gt;`）

```bash
/runps <path...>
/runpsfile <path...>
/execps <path...>
/execpsfile <path...>
```

::: details 点击查看说明
绕过执行策略运行一个后缀名为 .ps1 的 PowerShell 脚本。前者同步，后者异步。
:::

## 执行 Base64 加密过的 PowerShel…（`/runpsbase64 &lt;base64&gt;`）

```bash
/runpsbase64 <base64>
/execpsbase64 <base64>
```

::: details 点击查看说明
执行 Base64 加密过的 PowerShell 命令。前者同步，后者异步。
:::

## 输入该命令后，用户将进入命令拼接模式，以后输入的…（`/exebegin`）

```bash
/exebegin
```

::: details 点击查看说明
输入该命令后，用户将进入命令拼接模式，以后输入的内容将会持续拼接到缓冲区。
:::

## 结束命令拼接模式并异步执行拼接好的命令（`/execommit`）

```bash
/execommit
/exedone
```

::: details 点击查看说明
结束命令拼接模式并异步执行拼接好的命令。
:::

## 清空拼接的命令并退出命令拼接模式（`/execlear`）

```bash
/execlear
/exereset
```

::: details 点击查看说明
清空拼接的命令并退出命令拼接模式。
:::

## 在拼接的命令末尾添加一个空格（`/exeaddspace`）

```bash
/exeaddspace
```

::: details 点击查看说明
在拼接的命令末尾添加一个空格。
:::

## 使用讲述人说话（`/speak [content...=clipboard]`）

```bash
/speak [content...=clipboard]
```

::: details 点击查看说明
使用讲述人说话。
:::

## 查看讲述人缓冲队列（`/speakqueue`）

```bash
/speakqueue
```

::: details 点击查看说明
查看讲述人缓冲队列。
:::

## 清空讲述人缓冲队列（`/speakqueue clear`）

```bash
/speakqueue clear
```

::: details 点击查看说明
清空讲述人缓冲队列。
:::

## 查看所有讲述人音色（`/speakvoice`）

```bash
/speakvoice
/speakvoice list
```

::: details 点击查看说明
查看所有讲述人音色。
:::

## 关机（`/shutdown [args...]`）

```bash
/shutdown [args...]
```

::: details 点击查看说明
关机。如果不写参数则为立即关机。如果写参数，则参数和 cmd 命令相同。
:::

## 立即注销 Windows（`/logoff`）

```bash
/logoff
/logout
```

::: details 点击查看说明
立即注销 Windows。
:::

## 立即重启 Windows（`/reboot`）

```bash
/reboot
```

::: details 点击查看说明
立即重启 Windows。
:::

## 与 AI 对话（`/chat [content...=clipboard]`）

```bash
/chat [content...=clipboard]
/chatstream [content...=clipboard]
/chat0 [content=...=clipboard]
/chatstream0 [content...=clipboard]
```

::: details 点击查看说明
与 AI 对话。你需要在 AI Settings 模块中配置好 APIKEY 等参数。
:::

## 其中 chat0 和 chatstream0 为…（`/chatstream 命令强制以流式输出。`）

```bash
/chatstream 命令强制以流式输出。
```

::: details 点击查看说明
其中 /chat0 和 /chatstream0 为单次对话，没有上下文，无法持续对话。
其余默认会话为default，支持上下文，但是有上限。你可以使用/chathistory switch命令切换会话。
:::

## 输出会话聊天记录（`/chathistory`）

```bash
/chathistory
/chathistory get [session=cur_chat_session]
```

::: details 点击查看说明
输出会话聊天记录。默认为当前选中的会话。
:::

## 枚举所有聊天会话及其大小（`/chathistory list`）

```bash
/chathistory list
/chathistory enum
```

::: details 点击查看说明
枚举所有聊天会话及其大小。
:::

## 切换聊天会话（`/chathistory switch [session=default]`）

```bash
/chathistory switch [session=default]
```

::: details 点击查看说明
切换聊天会话。不同的会话会记录不同的聊天记录。
:::

## 删除指定聊天会话的最后一问答（`/chathistory pop [session=cur_chat_session]`）

```bash
/chathistory pop [session=cur_chat_session]
```

::: details 点击查看说明
删除指定聊天会话的最后一问答。这样AI就不知道你上一句发的是什么了，但是仍能知道之前的上下文。
:::

## 清除指定聊天会话记录（上下文）（`/chathistory clear [session=cur_chat_session]`）

```bash
/chathistory clear [session=cur_chat_session]
```

::: details 点击查看说明
清除指定聊天会话记录（上下文）。
:::

## 等价于 chathistory clear li…（`/forget`）

```bash
/forget
```

::: details 点击查看说明
等价于 /chathistory clear livestream
:::

## 使用一个人工智能工具（`/aitool &lt;tool&gt; [args...]`）

```bash
/aitool <tool> [args...]
/ait <tool> [args...]
```

::: details 点击查看说明
使用一个人工智能工具。tool为工具名，args为工具的参数。
:::

## 使用人工智能翻译（`/aitool translate <content...=clipboard>`）

```bash
/aitool translate <content...=clipboard>
```

::: details 点击查看说明
使用人工智能翻译。
:::

## 查看 AI 配置（`/aisettings`）

```bash
/aisettings
/ai
```

::: details 点击查看说明
查看 AI 配置。
:::

## 查看当前选中的 AI 模型名称（`/aisettings model/models`）

```bash
/aisettings model/models
```

::: details 点击查看说明
查看当前选中的 AI 模型名称。
:::

## 设置当前选中的 AI 模型名称（`/aisettings model &lt;name&gt;`）

```bash
/aisettings model <name>
```

::: details 点击查看说明
设置当前选中的 AI 模型名称。
:::

## 设置当前 AI 类型为本地大模型（`/aisettings local`）

```bash
/aisettings local
```

::: details 点击查看说明
设置当前 AI 类型为本地大模型。
:::

## 查看本地 Ollama 模型列表（`/aisettings localmodels`）

```bash
/aisettings localmodels
```

::: details 点击查看说明
查看本地 Ollama 模型列表。
:::

## 设置当前 AI 类型为自定义在线大模型API（`/aisettings custom`）

```bash
/aisettings custom
```

::: details 点击查看说明
设置当前 AI 类型为自定义在线大模型API。
:::

## 枚举所有可用的人工智能代理任务预设（`/agent list/tasks`）

```bash
/agent list/tasks
```

::: details 点击查看说明
枚举所有可用的人工智能代理任务预设。每一个任务严格规定可调用的工具范围，范围外的工具不会执行。
:::

## 查询一个任务可以用的工具列表（`/agent task &lt;task&gt;`）

```bash
/agent task <task>
```

::: details 点击查看说明
查询一个任务可以用的工具列表。
:::

## 有一些工具需要准备（`/agent set &lt;preparation&gt; &lt;value&gt;`）

```bash
/agent set <preparation> <value>
```

::: details 点击查看说明
有一些工具需要准备。你可以用这条命令设置某项准备的值；准备项缺失时对应工具不会执行。
:::

## 枚举所有工具（`/agent tools`）

```bash
/agent tools
```

::: details 点击查看说明
枚举所有工具。
:::

## 查询一个工具的使用方法（`/agent tool &lt;tool&gt;`）

```bash
/agent tool <tool>
```

::: details 点击查看说明
查询一个工具的使用方法。
:::

## 调用一个工具（`/agent usetool &lt;tool&gt; &lt;params_json&gt;`）

```bash
/agent usetool <tool> <params_json>
```

::: details 点击查看说明
调用一个工具。参数必须用JSON表示
:::

## 人工智能代理，完成特定任务（`/agent &lt;task&gt; &lt;description...&gt;`）

```bash
/agent <task> <description...>
```

::: details 点击查看说明
人工智能代理，完成特定任务。注意人工智能可以在确认后调用命令和其他工具操作你的计算机。task 为严格的工具范围，description 为任务具体需求。如果你想允许所有已准备好的工具，可以使用名为 general 的任务。
:::

## 获取一个窗口句柄存储到代词 it 中（`/window [hwnd]`）

```bash
/window [hwnd]
/wnd [hwnd]
/hwnd [hwnd]
```

::: details 点击查看说明
获取一个窗口句柄存储到代词 it 中。首参可以 jc_hwnd 表示客户端主窗口， jc_hwnd_console 表示客户端控制台窗口。
如果没有参数，则获取控制台窗口句柄（等效于 /window jc_hwnd_console）。
:::

## 枚举所有顶级窗口并输出相关信息（`/windows`）

```bash
/windows
```

::: details 点击查看说明
枚举所有顶级窗口并输出相关信息。
:::

## 按窗口句柄值、窗口标题关键字、窗口类名关键字、进…（`/findwindow <hwnd/title/class/procname/pid>`）

```bash
/findwindow <hwnd/title/class/procname/pid>
/findwnd <hwnd/title/class/procname/pid>
```

::: details 点击查看说明
按窗口句柄值、窗口标题关键字、窗口类名关键字、进程名关键字或 PID 查找窗口，输出彩色表格。
句柄支持十进制和十六进制；十六进制前缀 0x 可加可不加。PID 仅支持精确匹配，不支持模糊匹配。
:::

## 查看、搜索和导出 UI 元素树（`/widgetesp ...`）

```bash
/widgetesp view [hwnd=null]
/widgetesp details [hwnd=null]
/widgetesp search [hwnd=null] <keyword...>
/widgetesp export <hwnd=null> [path=output/WidgetESPResult.txt]
/widgetesp exportcsv <hwnd=null> [path=output/WidgetESPResult.csv]
/widgetesp ask1 [hwnd=null] <prompt...>
/widgetesp ask [hwnd=null] <prompt...>
```

::: details 点击查看说明
[PRO] 复用 WidgetESP 的 UIA 元素查询逻辑。`view` 以树形结构输出窗口或全屏元素；`details` 在同一行输出坐标、尺寸、句柄和各项 UIA 信息；`search` 按关键词搜索元素并用粉色高亮命中片段，关键词不区分大小写；`export` 导出详细文本报告；`exportcsv` 导出 CSV 报告。`ask1` 会把 `/widgetesp view` 的元素树作为上下文向 AI 提问并输出一次性回答；`ask` 会切换到 `widgetesp` 聊天会话并保存上下文，之后可用 `/chat` 或 `/chatstream` 继续交流。`hwnd` 不填或填 `null` 表示审查整个屏幕，也支持 `it`、`jc_hwnd`、`jc_hwnd_console`、十进制和十六进制句柄。`ask/ask1` 省略 hwnd 时会直接使用上一次 WidgetESP 缓存结果且不受 10 秒限制。`view/details/ask/ask1` 对同一目标在 10 秒内重复执行时会复用缓存结果。导出路径不以对应扩展名结尾时视为目录，并创建默认文件名。
:::

## 先按 findwindow 的规则查找，再输入编…（`/selectwindow <hwnd/title/class/procname/pid>`）

```bash
/selectwindow <hwnd/title/class/procname/pid>
/selectwnd <hwnd/title/class/procname/pid>
```

::: details 点击查看说明
先按 /findwindow 的规则查找，再输入编号选择一条结果，将该窗口句柄存入 it（hwnd 窗口句柄类型）。
:::

## 输出所有记录中的隐私窗口（`/privatewindows`）

```bash
/privatewindows
/privatewindow list
```

::: details 点击查看说明
输出所有记录中的隐私窗口。
:::

## 将隐私窗口记录列表与系统真实情况进行同步（`/privatewindow sync`）

```bash
/privatewindow sync
```

::: details 点击查看说明
将隐私窗口记录列表与系统真实情况进行同步。
:::

## 取消所有记录中的隐私窗口（`/privatewindow clear`）

```bash
/privatewindow clear
```

::: details 点击查看说明
取消所有记录中的隐私窗口。
:::

## 取消指定的隐私窗口（`/privatewindow reset &lt;hwnd&gt;`）

```bash
/privatewindow reset <hwnd>
```

::: details 点击查看说明
取消指定的隐私窗口。必须在记录中。
:::

## 设置置顶窗口的隐私状态（`/privatewindow set &lt;hwnd&gt; [affinity=none]`）

```bash
/privatewindow set <hwnd> [affinity=none]
```

::: details 点击查看说明
设置置顶窗口的隐私状态。affinity 必须是 none, black, invisible 三者之一。如果目标窗口不属于客户端，则会注入。
:::

## 检查指定窗口的隐私状态、是否在记录列表中、是否会…（`/privatewindow check &lt;hwnd&gt;`）

```bash
/privatewindow check <hwnd>
```

::: details 点击查看说明
检查指定窗口的隐私状态、是否在记录列表中、是否会被 PrivateWindow 跳过（并显示原因）。
:::

## 只检查指定窗口是否会被 PrivateWindo…（`/privatewindow why &lt;hwnd&gt;`）

```bash
/privatewindow why <hwnd>
/privatewindow reason <hwnd>
```

::: details 点击查看说明
只检查指定窗口是否会被 PrivateWindow 跳过，并显示命中原因。
:::

## 诊断指定窗口的关键信息（rootvisiblec…（`/privatewindow diagnose &lt;hwnd&gt;`）

```bash
/privatewindow diagnose <hwnd>
/privatewindow diag <hwnd>
```

::: details 点击查看说明
诊断指定窗口的关键信息（root/visible/cloaked/style/exstyle/尺寸等），并给出是否会被 PrivateWindow 跳过及原因。
:::

## 枚举覆盖层模式的所有隐私窗口（`/privatewindow layer list`）

```bash
/privatewindow layer list
```

::: details 点击查看说明
枚举覆盖层模式的所有隐私窗口。
:::

## 检查指定窗口是否存在覆盖层窗口（`/privatewindow layer check &lt;hwnd&gt;`）

```bash
/privatewindow layer check <hwnd>
```

::: details 点击查看说明
检查指定窗口是否存在覆盖层窗口。
:::

## 启用禁用窗口的覆盖层隐私模式（`/privatewindow layer enable/disable &lt;hwnd&gt;`）

```bash
/privatewindow layer enable/disable <hwnd>
```

::: details 点击查看说明
启用/禁用窗口的覆盖层隐私模式。
:::

## 了解所有Z序段的信息（`/bands`）

```bash
/bands
```

::: details 点击查看说明
了解所有Z序段的信息。
:::

## 获取窗口的Z序段（`/getband [hwnd]`）

```bash
/getband [hwnd]
```

::: details 点击查看说明
获取窗口的Z序段。hwnd不填，则为客户端主窗口，如果主窗口不存在则为控制台窗口
:::

## 动态设置窗口的Z序段（`/setband [hwnd] [zorderband]`）

```bash
/setband [hwnd] [zorderband]
```

::: details 点击查看说明
【PRO】动态设置窗口的Z序段。hwnd不填，则为客户端主窗口，如果主窗口不存在则为控制台窗口，zorderband不填则为ZBID_UIACCESS（值为2）
:::

## 获取一个进程句柄存储到代词 it 中（`/hproc`）

```bash
/hproc
/proc
/hproc [hprocess/pid/name]
/proc [hprocess/pid/name]
```

::: details 点击查看说明
获取一个进程句柄存储到代词 it 中。如果没有参数，则获取客户端进程句柄。
:::

## 检查是否存在特定进程（`/exist <hprocess/pid/name>`）

```bash
/exist <hprocess/pid/name>
/exists <hprocess/pid/name>
/existproc <hprocess/pid/name>
/existsproc <hprocess/pid/name>
```

::: details 点击查看说明
检查是否存在特定进程。仅做检查。
:::

## 寻找符合进程名称的进程（`/procs [preciseProcName...]`）

```bash
/procs [preciseProcName...]
/findproc <procNameKeywords...>
```

::: details 点击查看说明
寻找符合进程名称的进程。前者精确查找，后者模糊查找。
:::

## 选择符合进程名称的进程（`/selectproc [procNameKeywords...]`）

```bash
/selectproc [procNameKeywords...]
```

::: details 点击查看说明
选择符合进程名称的进程。模糊查找。将会提示输入一个编号，然后将选中指定的进程以句柄形式存入 it 中。如果不填参数，则从所有进程中选择。
:::

## 扫描进程中的字符串（`/scanstr &lt;hprocess&gt; [regex...]`）

```bash
/scanstr <hprocess> [regex...]
/scanstrings <hprocess> [regex...]
```

::: details 点击查看说明
扫描进程中的字符串。如果regex不为空，则只显示包含指定正则表达式的字符串。
:::

## 杀进程（`/kill <hprocess/pid/name>`）

```bash
/kill <hprocess/pid/name>
```

::: details 点击查看说明
杀进程。如果指定进程名，必须写完整；而且将会击杀所有相同进程名的进程。
使用链式方法。如果写成下面的命令，则会指定单模式击杀。
:::

## 原始方法杀进程（`/rawkill`）

```bash
/rawkill
```

::: details 点击查看说明
原始方法杀进程
:::

## 击杀各个线程杀进程（`/threadskill`）

```bash
/threadskill
```

::: details 点击查看说明
击杀各个线程杀进程
:::

## Winsta 方法杀进程（`/winstakill`）

```bash
/winstakill
```

::: details 点击查看说明
Winsta 方法杀进程
:::

## WMI 方法杀进程（`/wmikill`）

```bash
/wmikill
```

::: details 点击查看说明
WMI 方法杀进程
:::

## Job 方法杀进程（`/jobkill`）

```bash
/jobkill
```

::: details 点击查看说明
Job 方法杀进程
:::

## Debugger 方法杀进程（`/dbgkill`）

```bash
/dbgkill
/debuggerkill
```

::: details 点击查看说明
Debugger 方法杀进程
:::

## 内核方法杀进程（`/zwkill`）

```bash
/zwkill
/zwterminate
```

::: details 点击查看说明
内核方法杀进程
:::

## 冻结解冻 进程所有线程（`/freeze <hprocess/pid/name>`）

```bash
/freeze <hprocess/pid/name>
/unfreeze <hprocess/pid/name>
```

::: details 点击查看说明
冻结/解冻 进程所有线程。如果指定进程名，必须写完整；而且将会 冻结/解冻 所有相同进程名的进程。
:::

## 设置进程令牌为不信任（`/untrust <hprocess/pid/name>`）

```bash
/untrust <hprocess/pid/name>
```

::: details 点击查看说明
设置进程令牌为不信任。有可能需要管理员权限。
:::

## 打开窗口锁定器，按下 Esc 取消，按下 Ctr…（`/aim`）

```bash
/aim
```

::: details 点击查看说明
打开窗口锁定器，按下 Esc 取消，按下 Ctrl 锁定前端窗口，按下 Alt 锁定鼠标指向的窗口。
倒计时 30 秒，超时后自动取消。
:::

## 五秒后自动锁定前端窗口并赋值给 it（`/foreground`）

```bash
/foreground
/fore
```

::: details 点击查看说明
五秒后自动锁定前端窗口并赋值给 it.
:::

## 五秒后自动锁定鼠标指向的窗口并赋值给 it（`/pointat`）

```bash
/pointat
/here
/there
```

::: details 点击查看说明
五秒后自动锁定鼠标指向的窗口并赋值给 it.
:::

## 五秒后自动锁定前端窗口所属的进程并赋值给 it（`/foregroundproc`）

```bash
/foregroundproc
/foreproc
```

::: details 点击查看说明
五秒后自动锁定前端窗口所属的进程并赋值给 it.
:::

## 五秒后自动锁定鼠标指向的窗口所属的进程并赋值给…（`/pointatproc`）

```bash
/pointatproc
/hereproc
/thereproc
```

::: details 点击查看说明
五秒后自动锁定鼠标指向的窗口所属的进程并赋值给 it.
:::

## 聚焦窗口（`/focus [hwnd]`）

```bash
/focus [hwnd]
/focus2 [hwnd]
```

::: details 点击查看说明
聚焦窗口。后者不会使用 SW_RESTORE 还原窗口。如果不填参数，则为客户端主窗口。
:::

## 向窗口发送关闭消息（`/close [hwnd]`）

```bash
/close [hwnd]
```

::: details 点击查看说明
向窗口发送关闭消息。超时时间为1秒。若不填参数则启用 Hidden 模块。
:::

## 向窗口发送销毁消息（`/destroy &lt;hwnd&gt;`）

```bash
/destroy <hwnd>
```

::: details 点击查看说明
向窗口发送销毁消息。超时时间为1秒。	
:::

## 最大化窗口（`/max [hwnd]`）

```bash
/max [hwnd]
```

::: details 点击查看说明
最大化窗口。
:::

## 最小化窗口（`/min [hwnd]`）

```bash
/min [hwnd]
```

::: details 点击查看说明
最小化窗口。
:::

## 显示窗口（`/show [hwnd]`）

```bash
/show [hwnd]
```

::: details 点击查看说明
显示窗口。
:::

## 正常显示窗口（`/shownormal [hwnd]`）

```bash
/shownormal [hwnd]
```

::: details 点击查看说明
正常显示窗口。
:::

## 隐藏窗口（`/hide [hwnd]`）

```bash
/hide [hwnd]
```

::: details 点击查看说明
隐藏窗口。
:::

## 将窗口不透明度改为1（完全不透明是255）（`/invisible [hwnd]`）

```bash
/invisible [hwnd]
```

::: details 点击查看说明
将窗口不透明度改为1（完全不透明是255）
:::

## 只给指定窗口截图（`/screenshot [hwnd]`）

```bash
/screenshot [hwnd]
```

::: details 点击查看说明
只给指定窗口截图。如果不指定参数，则切换 Screenshot 模块。 
:::

## 对指定路径的图片进行文字识别（`/ocr file &lt;path...&gt;`）

```bash
/ocr file <path...>
```

::: details 点击查看说明
对指定路径的图片进行文字识别。
:::

## 对指定的窗口内容进行文字识别（`/ocr window &lt;hwnd&gt;`）

```bash
/ocr window <hwnd>
```

::: details 点击查看说明
对指定的窗口内容进行文字识别。
:::

## 对指定的窗口内容进行文字识别（`/ocr windowex &lt;hwnd&gt;`）

```bash
/ocr windowex <hwnd>
```

::: details 点击查看说明
对指定的窗口内容进行文字识别。将会输出更详细的信息，包括坐标等。
:::

## 更新一次机器人（`/qqbot update`）

```bash
/qqbot update
```

::: details 点击查看说明
更新一次机器人。
:::

## 查看统计数据（`/qqbot stat`）

```bash
/qqbot stat
```

::: details 点击查看说明
查看统计数据。
:::

## 查看OCR原始结果（`/qqbot raw`）

```bash
/qqbot raw
```

::: details 点击查看说明
查看OCR原始结果。
:::

## 锁定指定的聊天窗口为目标窗口（`/qqbot aim [hwnd]`）

```bash
/qqbot aim [hwnd]
```

::: details 点击查看说明
锁定指定的聊天窗口为目标窗口。
:::

## 枚举所有客户端注册表项的键值（`/clientreg list`）

```bash
/clientreg list
```

::: details 点击查看说明
枚举所有客户端注册表项的键值。
:::

## 初始化客户端注册表项键值，具体为：（`/clientreg init`）

```bash
/clientreg init
```

::: details 点击查看说明
初始化客户端注册表项键值，具体为：
ExecutablePath: 客户端程序绝对路径。
Version: 版本号（例如v0.7c，程序里以宏 CURRENT_VERSION 定义）
:::

## 设置客户端注册表键值（`/clientreg set &lt;key&gt; &lt;value&gt;`）

```bash
/clientreg set <key> <value>
```

::: details 点击查看说明
设置客户端注册表键值。注意，如果value是纯数字，将会作为 REG_DWORD 存储，否则为 REG_SZ
:::

## 获取客户端注册表键值（`/clientreg get &lt;key&gt;`）

```bash
/clientreg get <key>
```

::: details 点击查看说明
获取客户端注册表键值。只能是 REG_DWORD 或 REG_SZ
:::

## 删除指定的客户端注册表键值（`/clientreg delete &lt;key&gt;`）

```bash
/clientreg delete <key>
```

::: details 点击查看说明
删除指定的客户端注册表键值。
:::

## 清空客户端注册表键值并去除JackalClien…（`/clientreg clear`）

```bash
/clientreg clear
```

::: details 点击查看说明
清空客户端注册表键值并去除JackalClient这一项。
:::

## 立即设置鼠标坐标（`/setmousepos &lt;x&gt; &lt;y&gt;`）

```bash
/setmousepos <x> <y>
/mousetp <x> <y>
```

::: details 点击查看说明
立即设置鼠标坐标。
:::

## 输出一次鼠标坐标（`/getmousepos`）

```bash
/getmousepos
```

::: details 点击查看说明
输出一次鼠标坐标。
:::

## 向下或向上滚轮一次（`/wheel <down/up>`）

```bash
/wheel <down/up>
```

::: details 点击查看说明
向下或向上滚轮一次。
:::

## 模拟按键操作（`/key <down/press> <keycode/keyname...>`）

```bash
/key <down/press> <keycode/keyname...>
/key <up/release> <keycode/keyname...>
/key <once> <keycode/keyname...>f
/key <async> <keycode/keyname...>
```

::: details 点击查看说明
模拟按键操作。上述四种分别对应按下、松开、同步按下松开、异步按下松开。后两种内部间隔 100 毫秒。
:::

## 模拟多个按键操作（`/keys &lt;Keys...&gt;`）

```bash
/keys <Keys...>
```

::: details 点击查看说明
模拟多个按键操作。注意，多个按键需要用空格分隔而不是逗号或分号。
:::

## 模拟输入字符串（`/input [string...=clipboard]`）

```bash
/input [string...=clipboard]
```

::: details 点击查看说明
模拟输入字符串。
:::

## 模拟左键鼠标点击（`/click [interval_ms=50]`）

```bash
/click [interval_ms=50]
/lclick [interval_ms=50]
/leftclick [interval_ms=50]
```

::: details 点击查看说明
模拟左键鼠标点击。interval_ms为按下松开之间的间隙时间（毫秒）。
:::

## 模拟右键鼠标点击（`/rclick [interval_ms=50]`）

```bash
/rclick [interval_ms=50]
/rightclick [interval_ms=50]
```

::: details 点击查看说明
模拟右键鼠标点击。interval_ms为按下松开之间的间隙时间（毫秒）。
:::

## 模拟中键鼠标点击（`/mclick [interval_ms=50]`）

```bash
/mclick [interval_ms=50]
/midclick [interval_ms=50]
/middleclick [interval_ms=50]
```

::: details 点击查看说明
模拟中键鼠标点击。interval_ms为按下松开之间的间隙时间（毫秒）。
:::

## 列出正在被按下的按键（`/kbstatus`）

```bash
/kbstatus
```

::: details 点击查看说明
列出正在被按下的按键。包括鼠标。
:::

## 释放所有正在被按下的按键（`/clearkb`）

```bash
/clearkb
```

::: details 点击查看说明
释放所有正在被按下的按键。包括鼠标。
:::

## 清空正在被按下的切换键（`/cleartogglekeys`）

```bash
/cleartogglekeys
```

::: details 点击查看说明
清空正在被按下的切换键。
:::

## 剪贴板相关命令（`/clipboard &lt;args...&gt;`）

```bash
/clipboard <args...>
```

::: details 点击查看说明
剪贴板相关命令。
:::

## 读取并显示剪贴板（`/clipboard show`）

```bash
/clipboard show
```

::: details 点击查看说明
读取并显示剪贴板。
:::

## 获取并存储剪贴板内容到变量 it（`/clipboard get`）

```bash
/clipboard get
```

::: details 点击查看说明
获取并存储剪贴板内容到变量 it。
:::

## 写入剪贴板（`/clipboard store text &lt;text...&gt;`）

```bash
/clipboard store text <text...>
/clipboard store file <path...>
/clipboard store movefile <path...>
```

::: details 点击查看说明
写入剪贴板。
:::

## 清空剪贴板（`/clipboard clear`）

```bash
/clipboard clear
```

::: details 点击查看说明
清空剪贴板。
:::

## * 需要管理员权限（`/getaccess &lt;dirpath...&gt;`）

```bash
/getaccess <dirpath...>
/getdiraccess <dirpath...>
```

::: details 点击查看说明
* 需要管理员权限。
授予目录所有权限。此操作可能会有风险。
:::

## 切换HUD显示状态（`/hud`）

```bash
/hud
```

::: details 点击查看说明
切换HUD显示状态。
:::

## 切换自定义HUD显示状态（`/customhud`）

```bash
/customhud
```

::: details 点击查看说明
切换自定义HUD显示状态。
:::

## 添加自定义HUD元素（`/customhud add &lt;json...&gt;`）

```bash
/customhud add <json...>
/customhud add text [text...]
```

::: details 点击查看说明
添加自定义HUD元素。
JSON 格式支持的键值有：
!表示必填项，其中 Color 和 ColorPrefab 两者选一个
!string	Type: 类型，可以是 text
!int		X
!int		Y
!string	Text: 文本内容。
string	Format: 可自定义格式。默认为 %s
!string	Color: 具体某种颜色。
!string	ColorPrefab: 颜色预设，支持动态
int		Size: 字号。
bool	Shadow: 是否绘制阴影。 默认开启。
bool	Stroke: 是否描边。默认关闭。
float 	Opacity: 不透明度，默认为 1.0
float 	OpacityMin: 不透明度最小值
float 	OpacityMax：不透明度最大值
int		OpacityDuration: 不透明度正弦变化的周期时间 (毫秒)
bool	WaveColor: 是否波动颜色。 
int		UpdateCooldown: 文本更新周期时间 (毫秒)；默认 2000ms
string	TextCache: 文本目前的内容。
int		LastUpdate: 文本上一次更新的时间。
:::

## 枚举所有自定义HUD元素（`/customhud list`）

```bash
/customhud list
```

::: details 点击查看说明
枚举所有自定义HUD元素。
:::

## 移动指定的自定义HUD元素（`/customhud move &lt;id&gt; &lt;x&gt; &lt;y&gt;`）

```bash
/customhud move <id> <x> <y>
```

::: details 点击查看说明
移动指定的自定义HUD元素。
:::

## 交互式移动界面（`/customhud mover`）

```bash
/customhud mover
```

::: details 点击查看说明
交互式移动界面。
:::

## 刷新缓存（`/customhud refresh`）

```bash
/customhud refresh
```

::: details 点击查看说明
刷新缓存。
:::

## 输出所有元素的JSON（`/customhud all`）

```bash
/customhud all
```

::: details 点击查看说明
输出所有元素的JSON。
:::

## 设置某项自定义HUD元素（`/customhud set &lt;id&gt; &lt;json...&gt;`）

```bash
/customhud set <id> <json...>
```

::: details 点击查看说明
设置某项自定义HUD元素。
:::

## 设置某项自定义HUD元素的一对键值（`/customhud modify &lt;id&gt; &lt;key&gt; &lt;value...&gt;`）

```bash
/customhud modify <id> <key> <value...>
```

::: details 点击查看说明
设置某项自定义HUD元素的一对键值。
:::

## 移除指定自定义HUD元素（`/customhud remove &lt;id&gt;`）

```bash
/customhud remove <id>
```

::: details 点击查看说明
移除指定自定义HUD元素。
:::

## 清空自定义HUD元素（`/customhud clear`）

```bash
/customhud clear
```

::: details 点击查看说明
清空自定义HUD元素。
:::

## 蓝奏云相关命令（`/lanzou &lt;params...&gt;`）

```bash
/lanzou <params...>
```

::: details 点击查看说明
蓝奏云相关命令。
:::

## 获取蓝奏云文件夹的描述（`/lanzou getdesc &lt;url&gt; [pwd]`）

```bash
/lanzou getdesc <url> [pwd]
```

::: details 点击查看说明
获取蓝奏云文件夹的描述。可选参数pwd为密码
:::

## 解析蓝奏云分享链接直链（`/lanzou parseurl &lt;url...&gt; [pwd]`）

```bash
/lanzou parseurl <url...> [pwd]
```

::: details 点击查看说明
使用内置蓝奏云解析算法解析分享链接直链，彩色输出状态、文件名、大小和最终下载地址。可选参数pwd为密码，也可从url中的pwd/password/p参数自动读取。
:::

## 获取网页JSON（必须返回JSON格式）然后用彩…（`/webjson &lt;url...&gt;`）

```bash
/webjson <url...>
```

::: details 点击查看说明
获取网页JSON（必须返回JSON格式）然后用彩色格式化输出。
:::

## 格式化彩色输出 JSON（`/formatjson [content...=clipboard]`）

```bash
/formatjson [content...=clipboard]
```

::: details 点击查看说明
格式化彩色输出 JSON。如果无法解析，将会报错。
:::

## 格式化彩色输出网页（`/formathtml [content...=clipboard]`）

```bash
/formathtml [content...=clipboard]
/formatwebpage [content...=clipboard]
```

::: details 点击查看说明
格式化彩色输出网页。将会自动解析各成分。BUG 比较多，容易解析错误。
:::

## 格式化彩色输出各种编程语言（`/formatc [content...=clipboard]`）

```bash
/formatc [content...=clipboard]
/formatcpp [content...=clipboard]
/formatpython [content...=clipboard]
/formatpy [content...=clipboard]
```

::: details 点击查看说明
格式化彩色输出各种编程语言。将会自动解析各成分。
:::

## 格式化彩色输出评论（`/formatcomment [content...=clipboard]`）

```bash
/formatcomment [content...=clipboard]
```

::: details 点击查看说明
格式化彩色输出评论。会对@、[表情]和#话题进行解析。
:::

## 格式化彩色输出 Markdown 格式（`/formatmarkdown [content...=clipboard]`）

```bash
/formatmarkdown [content...=clipboard]
/formatmd [content...=clipboard]
```

::: details 点击查看说明
格式化彩色输出 Markdown 格式。/formatmd 输出时将会移除相关元素标记。
:::

## 获取一句随机名言（`/aphorism`）

```bash
/aphorism
```

::: details 点击查看说明
获取一句随机名言。
:::

## 枚举当前的 Minecraft 实例以及对应的日…（`/mclog list`）

```bash
/mclog list
```

::: details 点击查看说明
枚举当前的 Minecraft 实例以及对应的日志的情况；如果已解析到多人服务器，也会显示服务器地址。
:::

## 清空 Minecraft 实例记录（`/mclog clear`）

```bash
/mclog clear
```

::: details 点击查看说明
清空 Minecraft 实例记录。
:::

## 用于测试日志解析器对于给定的 commandli…（`/mclog test [commandline...=clipboard]`）

```bash
/mclog test [commandline...=clipboard]
```

::: details 点击查看说明
用于测试日志解析器对于给定的 commandline 命令行，能否正常提取需要的信息。会输出相关结果。如果commandline 参数不填，则从剪贴板中取文本。
:::

## 模拟输入一条 Minecraft 原始日志行（`/mclog simulate <logline...>`）

```bash
/mclog simulate <logline...>
```

::: details 点击查看说明
模拟输入一条 Minecraft 原始日志行，并触发 Minecraft Utils 日志解析事件。logline 可以包含空格，也可以包含完整日志前缀。
:::

## 显示 BiliDaily 缓存状态（`/bilidaily status`）

```bash
/bilidaily status
```

::: details 点击查看说明
显示 BiliDaily 每个操作的缓存日期、冷却倒计时、最后结果和最后更新时间。
:::

## 重置 BiliDaily 缓存（`/bilidaily reset <exp|redeem|signin|all>`）

```bash
/bilidaily reset <exp|redeem|signin|all>
```

::: details 点击查看说明
重置 BiliDaily 指定操作的当天缓存，并立即异步触发可执行操作。
:::

## 构建Minecraft彩色文字（`/mccolor &lt;presetSingleColor&gt; &lt;color1&gt; &lt;text...&gt;`）

```bash
/mccolor <presetSingleColor> <color1> <text...>
/mccolor <presetDoubleColor> <color1> <color2> <text...>
/mccolorcopy <presetSingleColor> <color1> <text...>
/mccolorcopy <presetDoubleColor> <color1> <color2> <text...>
```

::: details 点击查看说明
【PRO】构建Minecraft彩色文字。presetSingleColor 为单色预设，包括：single（单色）, fade（慢慢变黑）, brighten（慢慢变白）；presetDoubleColor 为双色预设，包括：gradient（渐变）, random（随机渐变程度）, sine（余弦波）, binary（轮流取色）, pulse（轮流，中间加一个过渡色）。会同时输出&为前缀和§为前缀的版本。颜色color1/color2支持使用：&hex或R;G;B或颜色英文名。/mccolorcopy 命令会同时复制&为前缀的版本的文本。例：/mccolorcopy gradient &2 255;127;0 Colorful text generated by Jackal!
:::

## 获取 Minecraft 玩家档案信息（`/mcprofile &lt;name&gt;`）

```bash
/mcprofile <name>
/mcprofile <name1,name2,name3,...>
/mcprofile <uuid>
/mcprofile <uuid1,uuid2,uuid3,...>
```

::: details 点击查看说明
获取 Minecraft 玩家档案信息。提供正版名称或UUID参数。
:::

## 生成指定的内容（`/generate &lt;keyword&gt;`）

```bash
/generate <keyword>
```

::: details 点击查看说明
生成指定的内容。下面是你可以使用的关键词：
randint			随机整数
random			随机小写字母数字组合
user_agent		随机 User-Agent
aphorism		随机名言
poison			随机毒鸡汤
account			随机账号
code			随机密文
password		随机常见密码
card_type		随机卡类型
card_number		随机卡号
constellation	随机星座
sex				随机性别
birthday		随机生日
english_birthday	随机生日，英文格式
lunar_birthday	随机农历生日
chinese_name	随机中文名
english_allname		随机英文全名
english_firstname	随机英文名
english_middlename	随机英文中间名
english_lastname	随机英文姓氏
english_callname	随机英文称谓
english_name		随机英文名简称
address			随机地址（地理上）
english_address	随机英文地址
english_mobile	随机英文手机号
english_state	随机美国州
english_city	随机美国城市
english_position	随机英文职位
english_company		随机英文公司名
road/street		随机道路
email			随机假邮箱
job				随机职业
country			随机国家（包括英文名）
pcgame			电脑游戏
pegame			手机游戏
food			食物名
fruit			水果名
vegetable		蔬菜名
breakfast		早餐名
seafood			海鲜名
fish			鱼类名
animal			动物名
chinese_font	中文字体名
interest		随机兴趣
kfc				肯德基疯狂星期四文案
caihongpi		随机彩虹屁
dialog/dialogue	随机奇葩对话
duanzi			随机段子
tiangou			随机舔狗日记
xiaohua			随机笑话
qinghua			随机情话
saohua			随机骚话
zhanan			随机渣男语录
:::

## 隐私数据库命令（`/privacydatabase &lt;args...&gt;`）

```bash
/privacydatabase <args...>
/privacydb <args...>
/pdb <args...>
```

::: details 点击查看说明
隐私数据库命令。请使用 /help pdb 命令查看详细帮助。
:::

## 初始化数据库（`/pdb init`）

```bash
/pdb init
```

::: details 点击查看说明
初始化数据库。请在 Privacy Database 模块中设定目录路径。 
:::

## 添加人员信息（`/pdb add [人名]`）

```bash
/pdb add [人名]
```

::: details 点击查看说明
添加人员信息。输入命令后开启一个控制台的交互式菜单，如果指定人名参数，则菜单中人名就被填写；然后你可以选择菜单多种的某几个数据项进行填写。选择“保存”则录入退出。
:::

## 移除人员信息（`/pdb delete/remove <人名>`）

```bash
/pdb delete/remove <人名>
```

::: details 点击查看说明
移除人员信息。
:::

## 输出所有人员信息（`/pdb list/enum/show/ls [id/name]`）

```bash
/pdb list/enum/show/ls [id/name]
```

::: details 点击查看说明
彩色输出所有或指定人员信息，空数据会显示为 --。参数为纯数字时按 id 查询，否则按人名模糊查询；人名可以包含空格。
:::

## 以二维表形式输出所有人员信息（`/pdb list2d/table [id/name]`）

```bash
/pdb list2d/table [id/name]
```

::: details 点击查看说明
以二维表形式彩色输出所有或指定人员信息，会按 UTF-8 视觉宽度对齐中文字符，空数据会显示为 --。参数为纯数字时按 id 查询，否则按人名模糊查询；人名可以包含空格。
:::

## 正规化隐私数据库数据（`/pdb normalize [id/name]`）

```bash
/pdb normalize [id/name]
```

::: details 点击查看说明
正规化所有或指定人员信息：清除各项数据中的制表符和换行符，并校验身份证号；身份证号无效时会自动清空并警告。参数为纯数字时按 id 查询，否则按人名模糊查询；人名可以包含空格。
:::

## 检查隐私数据库数据（`/pdb check [id/name]`）

```bash
/pdb check [id/name]
```

::: details 点击查看说明
只检查并警告需要正规化的数据，不写入修改。参数为空时检查全部；参数为纯数字时按 id 查询，否则按人名模糊查询；人名可以包含空格。
:::

## 输出隐私数据库记录数量（`/pdb count/stat/stats`）

```bash
/pdb count/stat/stats
```

::: details 点击查看说明
输出隐私数据库中的记录数量。
:::

## 输出隐私数据库可用字段名（`/pdb keys/schema`）

```bash
/pdb keys/schema
```

::: details 点击查看说明
输出 /pdb set、/pdb upsert 和 /pdb paste 可用字段名；/pdb paste 还支持 ignore 或 * 跳过对应位置的数据。
:::

## 查询人员的所有信息（`/pdb query <人名>`）

```bash
/pdb query <人名>
```

::: details 点击查看说明
查询人员的所有信息。每行都是键：值的格式。
:::

## 根据指定信息查询人员信息（`/pdb search`）

```bash
/pdb search
```

::: details 点击查看说明
根据指定信息查询人员信息。开启一个控制台交互式菜单，选择填写什么数据项筛选器，然后选择“开始筛选”筛选，然后输出结果。
:::

## 设置指定人员信息（`/pdb set &lt;name&gt; &lt;key&gt; [value]`）

```bash
/pdb set <name> <key> [value]
```

::: details 点击查看说明
设置指定人员信息。value 为空时清空该项 key。
:::

## 设置指定人员信息（`/pdb upsert &lt;name&gt; &lt;key&gt; [value]`）

```bash
/pdb upsert <name> <key> [value]
```

::: details 点击查看说明
设置指定人员信息。value 为空时清空该项 key。如果 name 不存在，则自动创建新纪录。
:::

## 从剪贴板以指定格式导入数据（`/pdb paste &lt;format&gt;`）

```bash
/pdb paste <format>
```

::: details 点击查看说明
从剪贴板以指定格式导入数据，剪贴板内容中的制表符会全部替换为 1 个空格，各项数据中的换行符会被去除。format 支持命令行补全字段名，ignore 或 * 表示忽略对应位置的数据。例如一百行学号空格姓名，输入/pdb paste student_id name即可批量录入。
:::

## 执行数据库命令（`/pdb exec &lt;command&gt;`）

```bash
/pdb exec <command>
```

::: details 点击查看说明
执行数据库命令。
:::

## 移除数据库（`/pdb uninstall`）

```bash
/pdb uninstall
```

::: details 点击查看说明
移除数据库。
:::

## 输出当前直播间模块缓存信息（`/livestreaminfo`）

```bash
/livestreaminfo
```

::: details 点击查看说明
输出当前直播间模块缓存信息。（JSON）
:::

## 列出所有模块及相关信息（`/list`）

```bash
/list
/modules
/module list
```

::: details 点击查看说明
列出所有模块及相关信息。
:::

## 模块相关命令（`/module &lt;params...&gt;`）

```bash
/module <params...>
```

::: details 点击查看说明
模块相关命令。
:::

## 从 ClickGUI (DropdownNeve…（`/module hide <moduleName/id>`）

```bash
/module hide <moduleName/id>
```

::: details 点击查看说明
从 ClickGUI (Dropdown/Neverlose/Imgui) 隐藏模块。支持模块名称和ID的模糊查找。
:::

## 从 ClickGUI (DropdownNeve…（`/module show <moduleName/id>`）

```bash
/module show <moduleName/id>
```

::: details 点击查看说明
从 ClickGUI (Dropdown/Neverlose/Imgui) 显示模块。支持模块名称和ID的模糊查找。
:::

## 将 ClickGUI 中所有已隐藏模块恢复为显示（`/module showall`）

```bash
/module showall
```

::: details 点击查看说明
将 ClickGUI 中所有已隐藏模块恢复为显示。
:::

## 枚举当前在 ClickGUI 中被隐藏的所有模块（`/module hidden`）

```bash
/module hidden
```

::: details 点击查看说明
枚举当前在 ClickGUI 中被隐藏的所有模块。
:::

## 模糊查找匹配的模块及其描述（`/module query <moduleName/id>`）

```bash
/module query <moduleName/id>
```

::: details 点击查看说明
模糊查找匹配的模块及其描述。如果想要查询模块配置，请使用 /config search 命令。
:::

## 模块列表相关命令（`/arraylist [params...]`）

```bash
/arraylist [params...]
```

::: details 点击查看说明
模块列表相关命令。不带参数时，切换 Arraylist 模块开关状态。
:::

## 将指定模块在 Arraylist 中隐藏（修改模…（`/arraylist hide <moduleName/id>`）

```bash
/arraylist hide <moduleName/id>
```

::: details 点击查看说明
将指定模块在 Arraylist 中隐藏（修改模块配置项 hidden）。支持模糊匹配和模块ID。
:::

## 将指定模块在 Arraylist 中显示（修改模…（`/arraylist show <moduleName/id>`）

```bash
/arraylist show <moduleName/id>
```

::: details 点击查看说明
将指定模块在 Arraylist 中显示（修改模块配置项 hidden）。支持模糊匹配和模块ID。
:::

## 将所有在 Arraylist 中被隐藏的模块恢复…（`/arraylist showall`）

```bash
/arraylist showall
```

::: details 点击查看说明
将所有在 Arraylist 中被隐藏的模块恢复为显示（即 hidden=false）。
:::

## 枚举当前在 Arraylist 中被隐藏的所有模…（`/arraylist hidden`）

```bash
/arraylist hidden
```

::: details 点击查看说明
枚举当前在 Arraylist 中被隐藏的所有模块。
:::

## 启用枚举模块（指DLL等）功能（`/listmods [hproc/name/pid]`）

```bash
/listmods [hproc/name/pid]
/listmodules [hproc/name/pid]
```

::: details 点击查看说明
启用枚举模块（指DLL等）功能。如果参数不填，则是模块配置中的进程。
:::

## 预览所有 Metasploit 字符画（`/msbanners`）

```bash
/msbanners
```

::: details 点击查看说明
预览所有 Metasploit 字符画。
:::

## 切换晴雨状态（`/toggledownfall`）

```bash
/toggledownfall
```

::: details 点击查看说明
切换晴雨状态。
:::

## 切换天气状态（`/weather <clear/rain/thunder/snow/sandstorm>`）

```bash
/weather <clear/rain/thunder/snow/sandstorm>
```

::: details 点击查看说明
切换天气状态。
:::

## 测试命令（`/test [args...]`）

```bash
/test [args...]
```

::: details 点击查看说明
测试命令。
:::

## 切换字体并触发自动重载（`/font switch <name/path>`）

```bash
/font switch <name/path>
```

::: details 点击查看说明
切换字体并触发自动重载。name 必须是 GUI 选项 Font 的可选项；path 仅支持 .ttf 文件，支持双引号包裹带空格路径。
:::

## 控制 Typewriter 打字机（`/typewriter <init|start|pause|stop|status>`）

```bash
/typewriter init [hwnd=foreground]
/typewriter start [timedown=10]
/typewriter pause
/typewriter stop
/typewriter status
```

::: details 点击查看说明
`init` 以指定窗口句柄初始化 Typewriter，默认使用当前前台窗口；`start` 在指定倒计时后启动，未初始化时会自动初始化，最后五秒每秒显示一次 TitleTip；`pause` 暂停；`stop` 停止并清空目标窗口与内容；`status` 彩色输出当前状态、目标窗口和进度。
:::

## 闹钟相关命令（`/alarm <params...>`）

```bash
/alarm <params...>
/alarm fire <id>
/alarm sync
/alarm list
```

::: details 点击查看说明
闹钟相关命令。主要供 Alarm 模块和 Windows 计划任务自动调用。
`/alarm fire <id>` 触发指定闹钟；`/alarm sync` 异步同步 Windows 计划任务到 Alarm 列表；`/alarm list` 列出当前保存在 Records.json 中的闹钟。
:::
