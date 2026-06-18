# BiliVideoHelper
B站视频助手
分类：Web 网络
描述：识别当前 B 站视频会话，显示视频信息，并可同步下载和播放弹幕。

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
- v1.1.2：Danmaku Sync 会监控已匹配的前台 B 站窗口，窗口隐藏时自动关闭由 BiliVideoHelper 启动的 AutoDanmaku 并清空同步弹幕。
- v1.1.2：Danmaku Sync 在当前视频会话消失时会自动关闭由 BiliVideoHelper 启动的 AutoDanmaku。
- v1.1.2：视频助手会话缓存迁移到 output/Cache/BiliVideoHelperSessions.json，进一步减少 Records.json 保存压力。
- v1.1.2：优化记录缓存，只保留当前/淡出视频会话所需的轻量字段，减少 Records.json 过大导致的卡顿。
- v1.1.2：新增 Danmaku Sync，可自动下载当前视频弹幕文件并按 SMTC 进度联动 AutoDanmaku。

## 备注
Danmaku Sync 使用 BiliChatter.Output Directory for Video Helper 作为缓存目录，并定期清理其中超过 3 天的 BV*.xml 文件。
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
