# KillEffects
击杀效果
分类：Control
描述：根据 Minecraft 日志检测击杀，显示指示器、播放音效并可联动通知与命令。

## 需求
- 安全级别：常规模块；自定义命令的风险取决于命令内容
- 权限需求：需要可读取的 Minecraft 日志
- 驱动依赖：否
- 联网需求：本地日志检测与骷髅效果无需联网；瓦罗兰特皮肤及经典音效首次下载需要联网，缓存后可离线使用
- 开发状态：稳定/常规
- 版本属性：普通可用；通知和命令效果为 PRO 功能

## 介绍
在线数据：统一使用 Ricochesta `data` 中的 `MinecraftAutoLPatterns.txt`，原 `KillPatterns.txt` 已合并至 `[General]` 并停止维护和下载。每次客户端启动均尝试更新至 `output/Cache/ModuleMetadata`；内容未变化时不重复写入，断网或更新失败时继续使用已有有效缓存。以后优先修改并发布云控文件，不要恢复旧 assets 副本。本地下载缓存采用 deflate256 `japanese` 字母表和 `JP:` 标记保护，客户端自动解码，旧明文缓存自动迁移并保留修改时间；云端源文件仍维护为 UTF-8 明文，不要直接编辑本地密文缓存。

KillEffects 位于 Control 分类的 MinecraftUtils 下方。
启用后自动启用 MinecraftUtils 和 Log Parser Utilities。与 AutoL 的 `Detect Kills = Killed by me` 使用相同的死亡消息与击杀模板解析，不要求启用 AutoL。默认只显示击杀指示器并播放音效；通知和命令仅专业版可用。

## 击杀检测与计数

| 配置项 | 默认值 | 用途 |
| --- | --- | --- |
| Killed By Me Detection | Strict | Strict 要求 `MinecraftAutoLPatterns.txt` 的同一模板提取 `{player}` 和 `{killer}`，且击杀者与当前玩家名完整匹配，不区分大小写。General 中无 `{killer}` 的通用模板不会触发严格检测，其他分节含 `{killer}` 的模板同样有效；Line Contains Keyword 维持行内关键词检测。 |
| Killed By Me Line Contains Keyword | 空 | 仅在关键词模式显示；空值不触发。未知本人用户名时可使用关键词模式。 |
| Trigger Cooldown (ms) | 800 | 效果输出冷却；冷却期间的独立击杀仍计数。 |
| Event Dedup Cooldown (ms) | 2200 | 相同击杀消息的去重时间，最少 1000 毫秒。 |

Strict 支持 `/mclog setname <name>` 手动设置的用户名，与 AutoL 共用模板修正：`player was killed by Wormwaker.`、`player was slain by Wormwaker.` 使用对应云控模板识别，模板末尾玩家名后的句号、感叹号、问号不计入名字，仍要求击杀者名称完整匹配，不会按包含关系判断。

连杀按 Minecraft 实例隔离，不写入累计击杀缓存。任意加入世界、离开世界、断线、日志重置、胜利、失败或本人死亡时归零；同一服务器内重进世界的 `Started ... worker threads` / `Stopping worker threads` 日志也会清零，不要求再次出现 `Connecting to` 或命中自定义世界模板。检测到胜利或失败后立即清零，不受胜负通知开关和通知冷却影响。模块重新启用或切换本人用户名也会重新计数。普通场景变化本身不清零。重复消息只计一次，挖床与队伍淘汰不计为击杀。

## 效果与指示器

`Effects` 置顶，为多选 combobox：Kill Indicator、Sound、Notify (PRO)、Command (PRO)。默认选中前两项。只有选择对应效果后才显示附属选项。

| 配置项 | 默认值 | 用途 |
| --- | --- | --- |
| Kill Indicator Style | Skull | Skull 使用 `newblatant.png`；Valorant 使用云端 PNG 图层与原生动画，不播放 MP4 或 GIF。 |
| Kill Indicator Match Sound | true | 仅在 Valorant 指示器启用且 Sound Mode 为 Classic Streak 时显示，按经典连杀音效自动选择视觉皮肤。 |
| Kill Indicator Valorant Preset | Valorant Prime | 仅在 Valorant 模式且关闭 Kill Indicator Match Sound 后显示，可手动选择；包含 31 套皮肤，也可输入云端新增皮肤完整名称。 |
| Kill Indicator X Rate | 0.5 | 指示器中心的横向屏幕比例。 |
| Kill Indicator Y Rate | 0.75 | 指示器中心的纵向屏幕比例。 |
| Kill Indicator Scale | 1.0 | 按所选样式的基础尺寸缩放，Skull 为 96 像素。 |
| Kill Indicator Opacity (0~1) | 1.0 | 不透明度。 |

Skull 击杀后以 1 秒的放大回弹入场；从击杀时刻起 2.5 秒后开始回弹缩小淡出，3.5 秒时结束。Valorant 按各皮肤时间轴绘制徽章、边框、连杀标记、粒子、入场闪烁、弹跳旋转和淡出；支持六个视觉阶段，后续击杀立即重新播放，不排队。日志无可靠爆头类型时不伪造爆头覆盖层。

经典连杀模式下默认开启指示器跟随音效，不修改已保存的手动视觉预设。2021 音效使用 Champions 2021 视觉，2022～2024 或自定义音效没有对应同名 PNG 预设时回退 Skull。音效预设列表已移除 Match Indicator，旧 Profile 已保存的该值仍兼容，以已保存的手动视觉预设为基准；切换同步开关或音效预设会重新准备对应视觉资源。

Valorant 目录维护于 Ricochesta `data/KillEffects.json`，贴图维护于 `img/runtime/killfx/`。客户端首次启用时后台下载，校验图集尺寸与 SHA-256；有效目录缓存于 `output/Cache/ModuleMetadata/KillEffects.json`，PNG 缓存于 `output/Cache/KillEffects/`。仅加载当前皮肤的纹理，切换或关闭时释放。首次加载、下载失败或资源无效时，本次击杀使用 Skull，下一次资源就绪后使用 Valorant。云端数据未发布或断网时保留有效缓存，不影响其他击杀输出。

## 预览

`Preview Indicator` 位于 Kill Indicator 分组，`Preview Sound` 位于 Sound 分组，均为命令按钮，只在 Effects 选中对应效果时显示。分别按当前预设显示一杀指示器或播放一杀音效，沿用当前音量、位置、缩放、不透明度及音画匹配配置。无需开启 KillEffects、MinecraftUtils 或进入游戏，不修改战绩或连杀，不触发通知及自定义命令。首次下载资源最多等待 30 秒，过期不补播。

也可使用 `/killeffects preview sound`、`/killeffects preview indicator`；预览不会自动开启模块。

## 音效

`Sound Mode` 默认 Fixed，包含五种模式：

| 模式 | 对应配置 | 说明 |
| --- | --- | --- |
| Fixed | Sound (Fixed)，默认 totem.wav | 动态枚举 assets 内音频及 output/Cache/Sounds 中的音频。 |
| Custom | Sound Path (Custom)，默认空 | 指定固定音频路径。 |
| Classic Streak | Sound Classic Streak Preset，默认 Valorant 2021 | 保留 2021～2024 六级音效，并支持 31 套皮肤。皮肤有五或六级音效，超出后继续使用最后一级。 |
| Custom Streak | Sound Custom Streak Folder Path，默认空 | 文件名的扩展名前必须以数字结尾，从 1 开始，例如 a_1.wav、1.mp3。支持超过六杀，缺少对应级别时使用不超过当前连杀的最高已有级别；文件夹必须含一杀音效。 |
| Folder Random Select | Sound Folder Path (Random Select)，默认空 | 从指定文件夹直接包含的音频中随机选择，不扫描子文件夹。 |

`Sound Volume (0~100)` 默认 100。支持 wav、mp3、ogg、flac、qoa 及中文路径，单文件最多 32 MiB。空路径或没有匹配音频时不播放。

经典音效优先从 ResourceMarket 同源仓库的 `sounds/valorant/` 下载，例如 `valorant_kfx_2023_6.wav`，也兼容 `valorant_2023_6.wav`；子目录不可用时再尝试外层 `sounds/`。新下载文件缓存至 `output/Cache/Sounds/valorant/`，已有 assets 或旧音效缓存继续可用。后台逐个补齐所选预设的一至六杀，下载失败有重试间隔，不依赖 ResourceMarket 模块开关。首次击杀遇到尚未下载的音效时最多等待 30 秒，过期后不会补播旧音效。

后台预检查复用短期文件状态缓存，已存在的音效每 10 秒重新检查，缺失音效每秒检查；下载成功立即刷新状态。实际击杀播放前仍重新确认文件，保留本地音效优先顺序。

新皮肤音效放在 Ricochesta `sounds/valorant/`，命名 `valorant_kfx_<皮肤Id>_<级别>.wav`，例如 Prime 使用 `valorant_kfx_prime_1.wav` 至 `valorant_kfx_prime_5.wav`，Reaver 使用 `valorant_kfx_reaver_1.wav` 至 `valorant_kfx_reaver_6.wav`。皮肤 Id 与阶段上限见云端目录的 `Id`、`SoundTiers`。共用声音的皮肤变体使用各自标准文件名。音效不放在 PNG 目录，客户端不负责转码；旧四套文件名不变。Classic Streak 下默认通过 Kill Indicator Match Sound 让视觉跟随音效，关闭后可独立选择视觉预设。Fixed 模式的 `valorant_` 文件也支持从该子目录下载，旧外层路径仍可回退。

## 专业版输出
Champions 2021 皮肤及对应音效选项共用原有 `valorant_kfx_2021_1.wav`～`valorant_kfx_2021_6.wav`，不再维护 `valorant_kfx_champions_2021_<N>.wav`。旧选项与 Fixed 音效文件名自动映射到 2021，皮肤视觉保留。


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
