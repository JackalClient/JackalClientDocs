# 客户端文件介绍

注意：
- 客户端不会在你的计算机的 `AppData` 产生任何数据。如果没给客户端开启默认管理员权限，请不要把客户端放置在 `C:\Program Files` 等高权限文件夹下，否则可能会产生一些权限问题。
- 旧版本客户端完全不支持`中文路径`。新版本客户端中文路径支持`尚未完全支持`，请尽量不要使用包含中文字符等`非ASCII字符`的路径。注意如果你的`计算机用户名`含有中文字符，你的桌面路径就会包含中文字符的。
- 客户端崩溃时，考虑发送`crashlog/last_crash.log` `Release/CLIENT.LOG` 以及出现异常前的控制台错误信息等给开发者反馈。
- 客户端会在注册表这个位置设置基础信息：`HKEY_CURRENT_USER\Software\JackalClient`，你可以使用 `/clientreg` 系列命令进行相关操作。
- 客户端本体在运行时会检测自身 EXE 名称，如果不为 `JackalClient.exe` ，会自动报错弹窗。如果不是你自己重命名的，就有可能你的计算机中了感染性病毒，请使用杀毒软件进行全盘查杀。

## 客户端目录介绍：

```
├───assets                      —— 客户端资源文件
│   └───opencc                  —— 有关简繁转换功能的数据文件
├───backup                      —— 客户端备份文件，通常会做加密处理，涉及到 `AutoRestore` `SelfRestore` `AutoBackup` 等功能
│   └───dock                    —— 用于临时释放的文件
├───config                      —— 客户端配置档案文件，以及其他的重要数据
│   └───chat_history            —— 存储`AI对话`的聊天记录
├───crashlog                    —— 存储崩溃日志，如 `last_crash.log`
├───logs                        —— 存储旧日志。最新日志应在 `Release` 文件夹中的 `CLIENT.LOG` 查看。
├───output                      —— 客户端输出文件。涉及到多个模块。
│   ├───Cache                   —— 存储缓存文件，如 `LiveStream` `BiliVideoHelper` `NCM_Cache` `SMTC` 等
│   ├───Cover                   —— 存储封面图像
│   │   ├───BiliVideoHelper
│   │   ├───NCM_Cache
│   │   └───SMTC
│   ├───Macros                  —— 存储宏文件（`MacroRecorder` `MacroPlayer` 模块）
│   ├───Registry                —— 存储注册表导出的`.reg`文件（`RegManager`模块）
│   └───Screenshot              —— 存储截图（`Screenshot`模块）
├───Release                     —— 客户端几乎所有的组件
└───THIRD_PARTY_LICENSE         —— 第三方库的开源协议
```

## 客户端重要文件介绍：

### Launcher.exe
客户端启动器。免费版会检查版本并检查更新。然后启动 `Release/JackalClient.exe` 客户端本体。

### COMMANDS.txt
★ 客户端命令行参数和内置命令语法文档。如果删除，命令行的自动补全将无法正常工作。

### HISTORY.txt
★ 客户端更新历史记录。

### README.txt
一个基础的客户端使用说明。仍建议用户来文档官网查看最新信息。

### uninstall.bat
### uninstall.ps1
卸载程序。请双击 `uninstall.bat` 来移除客户端。会自动清理注册表残留项以及配置文件。如果你需要保留配置（`config`文件夹），请提前复制出来进行备份。

---

### assets/DICTIONARY.txt
★ 存储汉化词库。格式为 英文;中文

### assets/PROCESS_PROFILE.csv
一些常见进程的已知数据。

### assets/PASSWORD.txt, PASSWORD_STRONG.txt
密码词典。用于密码破解等。

### assets/KEY_CODE.txt
键盘键码文件，包括每个键的显示名称。

### assets/EMOJI_ALTS.txt
表情符号的文字替换形式，某些模块会自动进行替换，防止图形库无法渲染 `Emoji`。

**assets** 中的其他文件不再介绍。

---

### backup/dock/taboo.bak
屏蔽词词库。已受到加密。`Privacy Protect 隐私保护` 模块会使用此文件，自动将字符串的敏感词汇进行屏蔽。

---

### config/default.json
当前客户端版本下的默认配置。请不要进行修改，因为每次启动客户端都会更新一次。如果你使用该配置并按下保存，会自动创建新的配置文件（例如 `profile-1.json`）

### config/Records.json
客户端的主缓存信息，保存了相当多的内容，如果删除可能有不好的影响。

### config/liveStreamGiftTriggers.ini
`LiveStream` 直播间模块的礼物触发器自定义配置。你如果要修改，一定要先复制一份，否则会在更新客户端时被替换掉。

### config/liveStreamChatterTriggers.ini
`LiveStream` 直播间模块的弹幕触发器自定义配置。你如果要修改，一定要先复制一份，否则会在更新客户端时被替换掉。

### config/keyCustomSounds.ini
`KeySound` 模块的按键音效自定义配置。你如果要修改，一定要先复制一份，否则会在更新客户端时被替换掉。

### config/pinyinCache.txt
如果你开启了 `GUI` 选项的 `Search Pinyin Support` 支持拼音搜索，客户端启动时会自动建立拼音缓存，以便进行拼音搜索。

### config/shell_history.txt
存储 `Shell` 命令历史记录。可以让你在重新打开客户端时，直接按`↑`键入历史记录中的命令。

### config/NonASCIIRecord.txt
存储非ASCII字符的记录。

### config/chineseTranslationCache.txt
存储简繁转换的缓存，一种客户端简繁转换的优化机制。

### config/audience_profiles.json
存储 `LiveStream` 直播间模块的观众档案，包括等级系统的经验信息等。

---

### crashlog/last_crash.log
存储客户端上一次崩溃的日志。作者可以通过堆栈信息追溯到崩溃的代码位置。如果没有堆栈信息，则没有必要发送给作者了。

---

### Release/CLIENT.LOG
★ 客户端最后一次运行的日志，如果客户端正在运行，就是本次的日志。你可以从中看到很多关键信息。

### Release/JackalClient.exe
★ 客户端本体程序。x86 32位可执行程序。

### Release/DefaultSettings.dll
★ 默认配置的真正存储的位置。x86 32位动态链接库。

### Release/loader.exe
★ 客户端的辅助程序。x64 64位可执行程序。需要传递相关的命令行参数才能使用。不提供参数以查看帮助信息。

### Release/minigzip.exe
客户端用于解压缩的第三方程序。主要为`gzip`算法。

### Release/JDUacBipass.dll
### Release/JDPcaPayload.dll
客户端用于绕过`UAC`的动态链接库。为了防止被杀毒软件报毒，已做混淆处理。

### Release/Sirius.sys
客户端内核功能的驱动程序。由 [@Stars_Azusa](https://space.bilibili.com/670866766) 编写。

### Release/ConsoleMenuHook64.dll
### Release/ConsoleMenuHook32.dll
客户端用于注入控制台窗口的动态链接库。x86 32位和 x64 64位动态链接库。详情请查看 `Console 控制台` 模块的`标题栏右键菜单`选项。

### Release/JCConhostInjector32.exe
### Release/JCConhostInjector64.exe
客户端用于注入控制台窗口的辅助程序。x86 32位和 x64 64位可执行程序。

### Release/Everything32.dll
### Release/Everything3_x86.dll
客户端接入 `Everything` 软件的动态链接库。前者用于小于 `1.5` 版本的 `Everything`，后者用于 `1.5` 版本。

### Release/JDLyrics64.dll
### Release/JDLyrics32.dll
客户端用于注入网易云音乐从而显示歌词的动态链接库。x86 32位和 x64 64位动态链接库。

### Release/NeteaseDriver.dll
用于`BetterLyrics 更好的歌词`模块的`Driver`驱动模式的动态链接库。

### Release/version.64.dll.bin
### Release/version.32.dll.bin
用于64/32位的网易云音乐驱动程序的二进制数据。

### Release/minhook.x32.dll
### Release/minhook.x64.dll
客户端用于实现钩子的第三方动态链接库。x86 32位和 x64 64位。

### Release/dodge.exe
`AntiIntercept 反拦截` 程序。可能具有一定的风险，请谨慎使用。

### Release/IAMKeyHacker.dll
用于 `explorer` 注入的动态链接库。被 `WindowTopMost.dll` 所利用。

### Release/WindowTopMost.dll
用于动态设置窗口Z序段的动态链接库。

### Release/libcurl.dll
### Release/sqlite3.dll
### Release/qrencode.dll
### Release/opencc.dll
### Release/zlib1.dll
其他依赖。

### Release/Kernel1.sys
旧版客户端所使用的内核驱动程序。将在以后的版本彻底淘汰。

### Release/RTCore64.sys
【已过时】利用内核漏洞进行内存读写的驱动程序，会被杀毒软件报毒，已从新版本客户端移除。新版本客户端已接入 `Sirius.sys` 使用相关功能。

### Release/PPLControl.exe
【已过时】旧版本客户端用于控制`PPL`的第三方程序，新版本已移除。

### Release/ConhostProtect.dll
用于`AntiClose 反关闭`的控制台防止关闭用的动态链接库。以后将被移除，相关功能转运至上述`ConsoleMenuHook`DLL。