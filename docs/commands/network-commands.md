# 网络命令

> 本页由 `test/COMMANDS.txt` 自动拆分生成。

共 27 组命令。

## 显示 IP 地址地理位置信息（`/ipaddress [ip1;ip2;...]`）

```bash
/ipaddress [ip1;ip2;...]
/ipaddressex [ip1;ip2;...]
```

::: details 点击查看说明
显示 IP 地址地理位置信息。如果不填参数则显示当前 IP 地址位置。/ipaddressex 命令显示人工智能对该地的描述。
:::

## 显示 IP 地址恐吓段落（`/iphorror [ip1;ip2;...]`）

```bash
/iphorror [ip1;ip2;...]
/iphorrorex [ip1;ip2;...]
```

::: details 点击查看说明
显示 IP 地址恐吓段落。如果不填参数则显示当前 IP 地址位置。/ipaddressex 命令则使用人工智能生成段落。
:::

## 获取当前计算机的所有 TCP 连接（`/tcptable`）

```bash
/tcptable
/tcptable2
/tcptable3
```

::: details 点击查看说明
获取当前计算机的所有 TCP 连接。/tcptable2 还会获取外部IP的具体位置。（外国IP只能具体到国家）。 /tcptable3 还会显示该IP的大洲、地区、经纬度。
:::

## 切换IRClegacy旧版聊天室模块状态（`/irclegacy`）

```bash
/irclegacy
```

::: details 点击查看说明
切换IRC聊天室模块状态。当启用时，会自动检查用户名以及状态。启用后就可以接受聊天室消息了。
:::

## 发送一条聊天室公共信息（`/irclegacy send [msg...]`）

```bash
/irclegacy send [msg...]
```

::: details 点击查看说明
发送一条聊天室公共信息。
如果不填msg，将会打开一个框，你可以在里面输入（也可以输入中文）。或者使用 ## 也可以。
当前不支持私聊。友善交流讨论。
:::

## 获取自己的实际用户名（`/irclegacy getname`）

```bash
/irclegacy getname
```

::: details 点击查看说明
获取自己的实际用户名。
:::

## 注册当前计算机的聊天室用户名称（`/irclegacy register <name>`）

```bash
/irclegacy register <name>
/irclegacy setname <name>
```

::: details 点击查看说明
注册当前计算机的聊天室用户名称。名称为 name ，不能含空格。如果检测到名称被占用且不为自己，就不能修改。
:::

## 查询 name 用户名是否被占用（`/irc queryuser <name>`）

```bash
/irclegacy queryuser <name>
```

::: details 点击查看说明
查询 name 用户名是否被占用。
:::

## 屏蔽指定用户的消息（`/irclegacy block <name>`）

```bash
/irclegacy block <name>
```

::: details 点击查看说明
[PRO] 屏蔽指定用户的消息。会添加到模块配置中，随时可以改。收到被屏蔽用户的消息时，什么也不会显示。
:::

## 取消屏蔽指定用户的消息（`/irclegacy unblock <name>`）

```bash
/irclegacy unblock <name>
/irclegacy unblock all/*
```

::: details 点击查看说明
[PRO] 取消屏蔽指定用户的消息。
:::

## 让 AI 解读一段文本（`/what`）

```bash
/what
/wtf
/what [text...=clipboard]
/wtf [text...=clipboard]
```

::: details 点击查看说明
让 AI 解读一段文本。
:::

## 在 Wikipedia 上搜索有关词汇的信息（`/what is &lt;term&gt;`）

```bash
/what is <term>
/wtf is <term>
```

::: details 点击查看说明
【PRO】在 Wikipedia 上搜索有关词汇的信息。
:::

## 让 AI 解读一个窗口（会自动OCR）（`/what window [hwnd=it]`）

```bash
/what window [hwnd=it]
```

::: details 点击查看说明
让 AI 解读一个窗口（会自动OCR）
:::

## 让 AI 解读一个进程（`/what process [pid=it]`）

```bash
/what process [pid=it]
```

::: details 点击查看说明
让 AI 解读一个进程
:::

## 网易云音乐相关命令（`/ncm <args...>`）

```bash
/ncm <args...>
/cloudmusic <args...>
```

::: details 点击查看说明
网易云音乐相关命令。
:::

## 导出当前歌曲字幕（`/betterlyrics export/exportraw <format> [path=output/Subtitles...]`）

```bash
/betterlyrics export <format> [path=output/Subtitles...]
/betterlyrics exportraw <format> [path=output/Subtitles...]
```

::: details 点击查看说明
使用 NeteaseDriver 获取当前歌曲歌词和时间轴并导出字幕。format 支持 srt、lrc、sbv；未指定路径时保存到 output\Subtitles。
使用 exportraw 时只导出原文歌词和时间轴，不包含译文，默认文件名带 `_raw`。
:::

## 搜索单曲（`/ncm song &lt;keywords...&gt;`）

```bash
/ncm song <keywords...>
/ncm songex <page> <keywords...>
/ncm songraw <keywords...>
```

::: details 点击查看说明
搜索单曲。songraw 输出原始 json 数据。
:::

## 获取单曲的详细信息（`/ncm songdetails/songinfo &lt;id&gt;`）

```bash
/ncm songdetails/songinfo <id>
```

::: details 点击查看说明
获取单曲的详细信息。
:::

## 查找一首歌曲的ID（`/ncm getid`）

```bash
/ncm getid
```

::: details 点击查看说明
查找一首歌曲的ID。需要输入标题和作曲家字符串。
:::

## 清除封面图片缓存（`/ncm clearcache`）

```bash
/ncm clearcache
```

::: details 点击查看说明
清除封面图片缓存。output\Cover\NCM_Cache
:::

## 根据歌曲ID获取完整歌词（`/ncm lyrics &lt;songid&gt;`）

```bash
/ncm lyrics <songid>
```

::: details 点击查看说明
根据歌曲ID获取完整歌词。将会异步获取。使用第三方网易云API。
:::

## 【实验性】解析并输出当前网易云ELOG内容（`/ncm elog`）

```bash
/ncm elog
```

::: details 点击查看说明
【实验性】解析并输出当前网易云ELOG内容。
:::

## 检查 version（`/ncm checkdll`）

```bash
/ncm checkdll
```

::: details 点击查看说明
【PRO】检查 version.dll 网易云监听DLL是否被安装，如果没有被安装则安装并重新启动网易云音乐。
:::

## 开始一个下载任务（`/download &lt;url...&gt;`）

```bash
/download <url...>
```

::: details 点击查看说明
开始一个下载任务。url必须以http开头。
:::

## 打开 Download HUD 模块（`/download list`）

```bash
/download list
```

::: details 点击查看说明
打开 Download HUD 模块。
:::

## 搜索相关内容，可以在命令行中交互（`/search [text...]`）

```bash
/search [text...]
```

::: details 点击查看说明
搜索相关内容，可以在命令行中交互。
:::

## 搜索相关内容，可以在命令行中交互（`/searchai [text...]`）

```bash
/searchai [text...]
```

::: details 点击查看说明
搜索相关内容，可以在命令行中交互。且每一个条目都会用AI简短地总结。
:::

## ??????? GitHub ???`/github open <repo>`?

```bash
/github open <repo>
```

::: details ??????
??????? GitHub ???repo ?? user/repoName?github.com/user/repoName ? https://github.com/user/repoName?
:::

## ???? GitHub ???????`/github stats <repo>`?

```bash
/github stats <repo>
```

::: details ??????
?? GitHub REST API ????????????????????Star?Fork?Issue?????????????????????????
:::

## 解析 GitTracker 命令意图（`/gittracker <cmdline...>`）

```bash
/gittracker <cmdline...>
```

::: details 点击查看说明
按 GitTracker 规则解析一条 git 命令行，输出识别到的 Git 意图、HUD 文本和图标。
:::
