# BiliVideoHelper
B站视频助手
分类：Web 网络
描述：识别当前 B 站视频会话，显示视频信息，并可同步下载和播放弹幕，也可下载并同步展示字幕。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：是
- 开发状态：正常
- 版本属性：普通可用

## 介绍
BiliVideoHelper 用于识别前台 B 站网页端、桌面端或 SMTC 会话中的视频，查询并显示视频数据。
开启 Danmaku Sync 后，模块会在 BiliChatter 的 Output Directory for Video Helper 中查找当前视频的 BVID.xml；如果文件不存在或无法解析，会自动调用 BiliChatter 下载弹幕。
下载失败会重试一次；仍失败则取消当前视频的弹幕同步。同步播放依赖 SMTC 的时间轴进度；当当前 B 站视频会话消失，或已匹配的前台 B 站视频窗口被隐藏时，会自动关闭由 BiliVideoHelper 启动的 AutoDanmaku 并清空同步弹幕。

## 配置项
- Detect Mode（检测模式）
 类型：枚举；默认："Window"
 说明：选择视频会话检测来源。SMTC 模式可提供进度信息，是弹幕同步所需的时间来源。
 可选：Auto；Window；SMTC
- Danmaku Sync（弹幕同步）
 类型：枚举；默认："Off"
 说明：控制是否自动下载并同步当前视频弹幕。
 可选：Off（关闭）；Only Download（只下载缺失弹幕文件，不播放）；Always Sync（下载并按 SMTC 进度同步 AutoDanmaku）；Sync In Background（仅当前前台窗口不是 B 站网页端或桌面端时推送弹幕）
- Load Subtitles（加载字幕）
 类型：布尔；默认：false
 说明：开启后从 B 站播放器接口下载当前视频字幕，保存到 output/Subtitles 下的 txt 文件。
- Subtitles File Life Time (d)（字幕文件保存期限）
 类型：数值；默认：3
 说明：字幕缓存超过该天数后自动删除。
- Subtitles Display（字幕显示）
 类型：枚举；默认：Island
 说明：选择字幕输出方式：Off、Notify、Chatter、Title、Fancy、Island、Actionbar、Console Output 或 Speak。Fancy 会按字幕实际语言加载对应字体字符。
- Subtitles Lyrics Priority（字幕歌词优先级）
 类型：枚举；默认：Lyrics First
 说明：控制提供歌词时字幕与歌词的显示关系。Default 同时显示，Lyrics First 歌词优先，Subtitles First 字幕优先。
- Subtitles Language Preference（字幕语言偏好）
 类型：枚举；默认：Follow Global
 说明：选择字幕语言，支持跟随全局、中文、English 和 日本語。
- Subtitles Translation Strict（字幕严格翻译）
 类型：布尔；默认：false
 说明：严格模式会逐句判断字幕语言后决定是否翻译。
- Subtitles Translation（字幕翻译）
 类型：枚举；默认：Off
 说明：当字幕语言与偏好不一致时选择译文语言；Island 模式会使用歌词翻译位置显示译文。
- Monitor Web Client（监视网页端）
 类型：布尔；默认：true
 说明：开启后识别浏览器中的 B 站视频页。
- Monitor Desktop Client（监视桌面端）
 类型：布尔；默认：true
 说明：开启后识别哔哩哔哩桌面端视频窗口。
- Async（异步）
 类型：布尔；默认：true
 说明：用于控制是否异步处理。默认值 true 通常能减少主线程卡顿；若遇到并发相关问题，可回退到更保守设置测试。
- Update Cooldown (ms)（更新冷却（毫秒））
 类型：数值；默认：100L
 说明：用于控制检测、刷新和同步节奏。默认值 100L 以稳定为主。
- HUD（是否显示HUD。）
 类型：布尔；默认：true
 说明：开启后显示当前视频信息 HUD。
- Hide When Menu On（菜单打开时不显示）
 类型：布尔；默认：true
 说明：菜单打开时隐藏 HUD。
- Max Web Sessions（最大网页会话数）
 类型：数值；默认：5U
 说明：限制缓存的网页视频会话数量。
- HUD Opacity (0~1)（HUD 不透明度）
 类型：数值；默认：0.75f
 说明：用于控制 HUD 透明度。

## 历史更新
- v1.1.6：修复字幕使用 Fancy 展示时长文本重建布局后丢失专用字体与展示时长、暂停或播放结束后背景不淡出，以及字体字符过多时显示异常的问题；同时修复 Island 模式不显示或反复回缩，并让字体自动适配导入尺寸及在缺字时使用内置字体。
- v1.1.2：Danmaku Sync 会监控已匹配的前台 B 站窗口，窗口隐藏时自动关闭由 BiliVideoHelper 启动的 AutoDanmaku 并清空同步弹幕。
- v1.1.2：Danmaku Sync 在当前视频会话消失时会自动关闭由 BiliVideoHelper 启动的 AutoDanmaku。
- v1.1.2：视频助手会话缓存迁移到 output/Cache/BiliVideoHelperSessions.json，进一步减少 Records.json 保存压力。
- v1.1.2：优化记录缓存，只保留当前/淡出视频会话所需的轻量字段，减少 Records.json 过大导致的卡顿。
- v1.1.2：新增 Danmaku Sync，可自动下载当前视频弹幕文件并按 SMTC 进度联动 AutoDanmaku。

## 备注
Danmaku Sync 使用 BiliChatter.Output Directory for Video Helper 作为缓存目录，并定期清理其中超过 3 天的 BV*.xml 文件。
字幕缓存位于 output/Subtitles，文件名按 aid、cid 和字幕语言生成；切换视频后字幕会话数据自动释放。
字幕加载异常时，可在 Developer 的 Bili Video Helper Subtitles 分组开启 Debug Output，并分别控制下载事件和错误详情输出。日志包含播放器接口请求、字幕轨选择、响应结构、解析行数和文件写入结果；字幕 URL 的授权参数会被隐藏。使用 Island 显示字幕时，该开关还会输出字幕决策与灵动岛状态，且仅在当前 SMTC 会话提供播放进度时输出；状态未变化时最多每秒记录一次。
Island 字幕拥有灵动岛显示权时，不受 Better Lyrics 当前显示模式的残留歌词清理影响；退出字幕 Island 模式后仍会按原逻辑清理。
Always Sync 会在当前视频会话可用且 SMTC 正在播放时推送弹幕；Sync In Background 只在前台不是 B 站相关窗口时推送。
当当前视频时间轴后续没有弹幕时，Danmaku Sync 会静默结束本轮 AutoDanmaku，不再发送模块关闭提示。

## 相关命令
`/bilivideohelper`
`/bvh`

## 相关模块
- [BiliChatter](BiliChatter.md)
- [AutoDanmaku](AutoDanmaku.md)
- [BiliVideo](BiliVideo.md)

## 相关资料
无
