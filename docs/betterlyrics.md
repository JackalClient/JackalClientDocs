# 更好的歌词 BetterLyrics 说明

> 语雀文档链接（不再更新）：[https://www.yuque.com/wormwaker/tkpgqw/spwhbekbeycybdxw?singleDoc](https://www.yuque.com/wormwaker/tkpgqw/spwhbekbeycybdxw?singleDoc)

## 驱动模式 Driver (PRO)
【网易云专用】对于 PRO专业版 用户，请优先使用 **Driver (PRO) 驱动模式**，该模式下可以提前获取准确歌词，且能获取精准译文以及每句歌词的时间。如果 CloudMusic云音乐 实在无法连接【Disconnected】，则请回退至下面的 Hook Rendering 模式。

## 挂钩渲染模式 Hook Render
【网易云专用】0.8c 加入了新的模式：`Hook Render`，挂钩渲染，只对网易云音乐有效，100%准确，请优先使用这个！
会用到注入。
注入前要注意必须打开网易云的 `桌面歌词窗口`，否则无法更新歌词！
缺点：可能对译文的处理不够准确。如果译文代替了原文的位置，请考虑桌面歌词上设置->外文歌词翻译改成关闭。客户端有手动翻译的回退路线。如果没有打开 CloudMusic云音乐 模块（即没有对接驱动），则译文为客户端手动翻译，每一句歌词刚出现的时候会有译文的延迟。

## SMTC 模式
新版本（v1.1）加入新的模式：`SMTC`，读取系统 SMTC 信息（包括曲名、艺人、进度等），搜索网易云歌词进行同步。支持任何对接SMTC且具有实时进度条信息的音乐软件（例如QQ音乐）
相关 `BetterLyrics` 配置项介绍：

- `SMTC Exclude Browsers`: 对于每一个 `SMTC` 会话，自动排除和浏览器相关的进程，防止干扰。
- `SMTC Song Match Threshold (0~100)`: 在查找网易云相关歌曲时，歌名的匹配阈值。默认 90.0
- `SMTC Artist Match Threshold (0~100)`: 在查找网易云相关歌曲时，艺人的匹配阈值。默认 10.0，这里不推荐调的太高，因为音乐平台不同有很大差异
- `SMTC Whitelist Enabled`: 是否开启白名单，白名单的进程才能匹配。
- `SMTC Whitelist (Sep With Semicolon)`: 进程名白名单，多个进程用英文分号分隔。默认值 QQMusic.exe
- `SMTC Blacklist Enabled`: 是否开启黑名单，黑名单中的进程不会被匹配。
- `SMTC Blacklist (Sep With Semicolon)`: 进程名黑名单，多个进程用英文分号分隔。默认值 哔哩哔哩.exe

当然网易云音乐也可以使用 BetterNCM 安装 `SMTC` 相关插件。
*新版本网易云添加了内测的SMTC功能，但是不提供进度条信息，所以还是无法直接使用该模式。*

你可以使用 `/smtc list` 命令查看所有当前 Windows 中的 `SMTC 会话`。
示例输出：
```bash
 SMTC Sessions  (1)
========================================================================
#1 What If
  Artist: BlazinG
  Album: -
  Source: cloudmusic.exe
  State: Paused
------------------------------------------------------------------------
```

## OCR 模式
如果上述方法都失败，可以考虑用老方法：OCR

*注意有些其他的模块【例如：AutoTranslate自动翻译，Screenshot截图工具，OCR相关命令】也会用到TesseractOCR，下文可以一起参考：*
​
在群文件找到 tesseractocr 的安装程序，或者自行去官网下载安装程序，打开并安装。

打开GUI，按Ctrl+F或者在上面选择“搜索”选项卡，搜索 tess 找到一个叫 TesseractOCR 的模块，右键打开配置，找到可执行文件路径，点击，然后按 Ctrl+O 弹出一个选择框，找到你刚刚安装的路径里面的 tesseract.exe，确认。

![Snipaste_2025-11-08_21-37-46.png](public/Snipaste_2025-11-08_21-37-46.png)

群文件找到 chi_sim.traineddata，这个是简体中文的模型文件，塞到你安装路径的 tessdata 文件夹下，文件夹下应该也有其他的模型文件，例如 eng.traineddata 等。如果你想识别其他语言，就安装对应的模型文件，都可以在网上找来下载。

​
对于“更好的歌词”模块：
打开网易云音乐的桌面歌词窗口，并放在合适的位置，播放一首带歌词的音乐。

​

打开 更好的歌词 BetterLyrics 模块，看看是否有效果。如果没有效果，尝试下列手段：

1. 重新打开桌面歌词窗口

2. 解锁并拖动桌面歌词窗口

3. 切换歌曲

4. 重新打开 BetterLyrics 模块

5. 将 BetterLyrics 配置中的 Y Offset 纵坐标偏移改成 0 或者 70

6. 行号改成0或1

​

常见问题：

Q: 报错找不到 `TesseractOCR 可执行文件`

A: 路径错误，请重新选择 `tesseract.exe`。点击编辑框，按下 `Ctrl+Shift+O` 可以直接弹窗选择文件注意一下。

​

Q: 报错 `OCR Failed`

A: OCR 结果文件没有出现，大概率是因为没有安装相应的语言模型。

​

Q: 语言怎么识别错误

A: 找到配置里面的 `Language`，由AI决定是根据歌词让AI决定语言类型，歌名推断是使用歌名的语言，其他就是选择指定语言。AI 识别也不是很准确

​

Q: 怎么改展示模式

A: 找到 `Display Mode` 展示模式项，你可以改成通知，弹幕，标题，花式文字，灵动岛，对话框等

​

Q: 不是网易云音乐能识别吗

A: 不能确保准确性。找到播放器样式，改成你的样式。如果没有就选自定义，然后修改桌面歌词窗口的类名和标题。类名和标题的获取可以用目标显示模块或者/here, /fore, /windows 等命令

​

该模式会定期（取决于你设的冷却时间）启动 tesseract.exe 来识别歌词，可能会影响性能,不必惊慌
