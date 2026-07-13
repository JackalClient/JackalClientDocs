# BiliUserSpider
B站用户爬虫
分类：Web
描述：从其他第三方网站获取更多Bilibili用户数据（专业版，需要自动浏览器模块）。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
`Bili User Spider` monitors Bilibili users' live danmaku activity through `Browser CDP`.

## 配置项

- `Live Chatter Prefix`: controls synced danmaku prefix. `User` prints `User: msg`; `User & Room` prints `User (in roomId): msg`; `User & Room Host` prints `User (in Host's room): msg`; `User & Room Title` prints `User (in ROOM TITLE): msg`.
- `Live Chatter Console Output`: `Detailed` prints `timestamp [WealthLevel] [Medal] Username (in Host's room ROOM TITLE (roomId)) >> Msg`. The medal is shown only when its bound room can be confirmed and matches the current live room.
- `Live Chatter Time Diff Threshold (s)`: limits first successful sync output to recent danmaku within the configured timestamp difference.
  
## 历史更新

## 备注

本模块将借助浏览器获取第三方网站的数据，并非官方数据，不保证数据真实性，请勿用于违法用途。
不需要时，请手动关闭 `BrowserCDP` 模块。

## 相关命令

```bash
/biliuserspider ldm [uid/nickname=self] [ps=20] [pn=1]
/biliuserspider lc [uid/nickname=self] [ps=20] [pn=1]

获取指定用户的最新若干条发送的直播间弹幕并彩色输出。ps为每页数量，pn为第几页，默认只取 20 条以便对比最新变化。
uid/nickname 参数可以是用户UID或昵称，留空或填 ~ 或 self 表示当前登录账号。
该命令会自动启动 BrowserCDP 模块。执行完毕后会显示警告：如果不再查看相关信息，请手动关闭 BrowserCDP 模块。
后台监控时，新弹幕会按每秒最多一条的速度逐条推送。


/biliuserspider ldm_last [uid/nickname=self]
/biliuserspider lc_last [uid/nickname=self]
获取指定用户的最新一条直播间弹幕。输出完后同样有警告，提示用户如果不再查看数据则需要手动关闭 BrowserCDP 模块。
```

## 相关模块
- [BrowserCDP](./BrowserCDP.md)


## 相关资料
无