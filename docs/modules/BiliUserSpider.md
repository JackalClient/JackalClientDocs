# BiliUserSpider
B站用户爬虫
分类：Web
描述：从其他第三方网站获取更多Bilibili用户数据。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
`Bili User Spider` monitors Bilibili users' live danmaku activity through aicu. The default `aicu` method directly uses the queue ticket API; `aicu Legacy` keeps the old Browser CDP browser-debugging flow.

It can also feed discovered `uid + roomid` pairs into `Audience Tracker`: when a monitored user has live danmaku in a room, the room is merged into an Audience Tracker target group for continued first-party tracking.

## 配置项

- `Method`: `aicu` directly queries the aicu queue API and is the default. `aicu Legacy` uses the old Browser CDP path and will start `BrowserCDP` automatically.
- `Aicu Max Retries`: retry count for queue or ticket-expired failures in the direct `aicu` method.
- `Aicu Queue Timeout (s)`: maximum wait time for the direct `aicu` queue stream.
- `Auto Add Audience Tracker Targets`: when enabled, background monitoring adds rooms where the monitored user has spoken into `Audience Tracker`.
- `Audience Tracker Auto Group Name`: target group name used by the automatic Audience Tracker merge. Existing groups with the same name are reused.
- `Auto Enable Audience Tracker`: when enabled, successful automatic target merge also turns on `Audience Tracker`.
- `Live Chatter Prefix`: controls synced danmaku prefix. `User` prints `User: msg`; `User & Room` prints `User (in roomId): msg`; `User & Room Host` prints `User (in Host's room): msg`; `User & Room Title` prints `User (in ROOM TITLE): msg`.
- `Live Chatter Console Output`: `Detailed` prints `timestamp [WealthLevel] [Medal] Username (in Host's room ROOM TITLE (roomId)) >> Msg`. The medal is shown only when its bound room can be confirmed and matches the current live room.
- `Live Chatter Time Diff Threshold (s)`: limits first successful sync output to recent danmaku within the configured timestamp difference.
  
## 历史更新

## 备注

本模块获取第三方网站的数据，并非官方数据，不保证数据真实性，请勿用于违法用途。
仅 `aicu Legacy` 方法会借助浏览器获取数据；不需要时，请手动关闭 `BrowserCDP` 模块。

## 相关命令

```bash
/biliuserspider ldm [uid/nickname=self] [ps=20] [pn=1]
/biliuserspider lc [uid/nickname=self] [ps=20] [pn=1]

获取指定用户的最新若干条发送的直播间弹幕并彩色输出。ps为每页数量，pn为第几页，默认只取 20 条以便对比最新变化。
uid/nickname 参数可以是用户UID或昵称，留空或填 ~ 或 self 表示当前登录账号。
使用 `aicu Legacy` 方法时，该命令会自动启动 BrowserCDP 模块。执行完毕后会显示警告：如果不再查看相关信息，请手动关闭 BrowserCDP 模块。
后台监控时，新弹幕会按每秒最多一条的速度逐条推送。
同一批次包含多条新弹幕时会按时间从旧到新推送；已完成推送的最近弹幕会跨客户端重启去重。


/biliuserspider ldm_last [uid/nickname=self]
/biliuserspider lc_last [uid/nickname=self]
获取指定用户的最新一条直播间弹幕。使用 `aicu Legacy` 方法时，输出完后同样有警告，提示用户如果不再查看数据则需要手动关闭 BrowserCDP 模块。
```

## 相关模块
- [BrowserCDP](./BrowserCDP.md)
- [AudienceTracker](./AudienceTracker.md)


## 相关资料
无
