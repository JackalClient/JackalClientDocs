# KillEffects
击杀效果
分类：Control
描述：根据 Minecraft 日志检测击杀，显示指示器、播放音效并可联动通知与命令。

## 需求
- 安全级别：常规模块；自定义命令的风险取决于命令内容
- 权限需求：需要可读取的 Minecraft 日志
- 驱动依赖：否
- 联网需求：本地日志检测与效果显示不需要联网
- 开发状态：稳定/常规
- 版本属性：普通可用；通知和命令效果为 PRO 功能

## 介绍
KillEffects 位于 Control 分类的 MinecraftUtils 下方。
启用后自动启用 MinecraftUtils 和 Log Parser Utilities。与 AutoL 的 `Detect Kills = Killed by me` 使用相同的死亡消息与击杀模板解析，不要求启用 AutoL。默认只显示击杀指示器并播放音效；通知和命令仅专业版可用。

## 击杀检测与计数

| 配置项 | 默认值 | 用途 |
| --- | --- | --- |
| Killed By Me Detection | Strict | Strict 要求 `KILL_PATTERNS.txt` 模板中的击杀者与当前玩家名完整匹配，不区分大小写；Line Contains Keyword 检查击杀消息是否包含指定关键词。 |
| Killed By Me Line Contains Keyword | 空 | 仅在关键词模式显示；空值不触发。未知本人用户名时可使用关键词模式。 |
| Trigger Cooldown (ms) | 800 | 效果输出冷却；冷却期间的独立击杀仍计数。 |
| Event Dedup Cooldown (ms) | 2200 | 相同击杀消息的去重时间，最少 1000 毫秒。 |

连杀按 Minecraft 实例隔离，不写入累计击杀缓存。任意加入世界、离开世界、断线、日志重置、胜利、失败或本人死亡时归零；同一服务器内重进世界的 `Started ... worker threads` / `Stopping worker threads` 日志也会清零，不要求再次出现 `Connecting to` 或命中自定义世界模板。检测到胜利或失败后立即清零，不受胜负通知开关和通知冷却影响。模块重新启用或切换本人用户名也会重新计数。普通场景变化本身不清零。重复消息只计一次，挖床与队伍淘汰不计为击杀。

## 效果与指示器

`Effects` 置顶，为多选 combobox：Kill Indicator、Sound、Notify (PRO)、Command (PRO)。默认选中前两项。只有选择对应效果后才显示附属选项。

| 配置项 | 默认值 | 用途 |
| --- | --- | --- |
| Kill Indicator Style | Skull | 使用 `newblatant.png`。 |
| Kill Indicator X Rate | 0.5 | 指示器中心的横向屏幕比例。 |
| Kill Indicator Y Rate | 0.75 | 指示器中心的纵向屏幕比例。 |
| Kill Indicator Scale | 1.0 | 基础尺寸为 96 像素，按此比例缩放。 |
| Kill Indicator Opacity (0~1) | 1.0 | 不透明度。 |

击杀后以 1 秒的放大回弹入场；从击杀时刻起 2.5 秒后开始回弹缩小淡出，3.5 秒时结束。新的有效击杀重新播放动画。

## 音效

`Sound Mode` 默认 Fixed，包含五种模式：

| 模式 | 对应配置 | 说明 |
| --- | --- | --- |
| Fixed | Sound (Fixed)，默认 totem.wav | 动态枚举 assets 内音频及 output/Cache/Sounds 中的音频。 |
| Custom | Sound Path (Custom)，默认空 | 指定固定音频路径。 |
| Classic Streak | Sound Classic Streak Preset，默认 Valorant 2021 | 可选 Valorant 2021、2022、2023、2024；一至六杀使用对应音频，六杀以上继续使用第六个。 |
| Custom Streak | Sound Custom Streak Folder Path，默认空 | 文件名的扩展名前必须以数字结尾，从 1 开始，例如 a_1.wav、1.mp3。支持超过六杀，缺少对应级别时使用不超过当前连杀的最高已有级别；文件夹必须含一杀音效。 |
| Folder Random Select | Sound Folder Path (Random Select)，默认空 | 从指定文件夹直接包含的音频中随机选择，不扫描子文件夹。 |

`Sound Volume (0~100)` 默认 100。支持 wav、mp3、ogg、flac、qoa 及中文路径，单文件最多 32 MiB。空路径或没有匹配音频时不播放。

经典音效自动从 ResourceMarket 同源仓库的 `sounds/valorant_kfx_年份_连杀数.wav` 下载，例如 `valorant_kfx_2023_6.wav`，也兼容 `valorant_2023_6.wav`。优先使用现有 assets 或音效缓存；后台逐个补齐所选预设的一至六杀，下载失败有重试间隔，不依赖 ResourceMarket 模块开关。首次击杀遇到尚未下载的音效时最多等待 30 秒，过期后不会补播旧音效。

后台预检查复用短期文件状态缓存，已存在的音效每 10 秒重新检查，缺失音效每秒检查；下载成功立即刷新状态。实际击杀播放前仍重新确认文件，保留本地音效优先顺序。

## 专业版输出

`Custom Command` 为多行编辑框，默认：

```text
echo 你击毙了{player}。当前击杀数：{kill}
```

调用客户端命令系统，可省略开头的 `/`。`Notify Mode` 可选 Notify、Chatter、Title、Speak、WinToast、Real Chatter，默认 Notify。Real Chatter 使用本人 B站直播间及现有登录设置。`Notify Format` 为多行编辑框，默认：

```text
{cnkill}杀！{player}已被我击毙。
```

两种输出共用插值：

| 变量 | 内容 |
| --- | --- |
| {kill} | 当前实例的连杀数，包含本次击杀。 |
| {cnkill} | 汉字连杀数，例如十一、二十一、一百零一。 |
| {win} | 当前 Minecraft 会话的胜利数。 |
| {winstreak} | 当前 Minecraft 会话的连胜数。 |
| {player} | 被击杀玩家的规范化昵称。 |
| {name} | 本人的 Minecraft 昵称。 |

胜利与连胜沿用 SessionHUD 的当前玩家或共享统计范围。每个事件保存发生时的计数与昵称，后续击杀不会改写排队消息。未知占位符保留原文。

## 验证示例

将最近实例的用户名设为 TestSelf，通过 `/mclog simulate` 注入完整日志，如 `[12:00:00] [Client thread/INFO]: [CHAT] TestVictim was slain by TestSelf`，应出现指示器与音效。AutoL 关闭时仍应触发；其他人击杀、重复消息和聊天内容不应重复触发。注入本人死亡、Victory、Defeat 及世界进出日志后，下一次击杀应使用一杀音效。同服务器重进可注入 `[12:00:01] [Render thread/INFO]: Started 6 worker threads`；胜负可分别注入 `[12:00:02] [Client thread/INFO]: [CHAT] Victory!` 和 `[12:00:03] [Client thread/INFO]: [CHAT] You lost!`。将胜负通知设为 Off 或在通知冷却内重复检测胜负，下一次击杀仍应从一杀开始。
