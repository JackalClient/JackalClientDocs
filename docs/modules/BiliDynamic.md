# BiliDynamic
B站动态
分类：Web
描述：免登录监视指定 Bilibili 用户的新动态，并按配置发送通知。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：普通可用；自动点赞与自动跳转为专业版功能

## 介绍
`Bili Dynamic` 会定期查询指定用户的 B 站动态列表。首次查询只建立最新动态基线，不推送旧动态；后续发现新动态时，会使用动态接口中的动作文本生成通知，例如“发布了动态”“投稿了视频”。当客户端语言与动作文本不一致时，会对常见动作做本地中英映射；未知动作保留接口原文。

监视动态本身不需要登录。配置中的 `self` 或 `~` 可代替当前 B 站账号 UID，但这要求客户端已能读取当前 B 站登录信息。若新动态属于当前登录账号，通知主语使用 `You`。

## 配置项

- `User IDs (Sep With Semicolon)`: 要监视的 UID 列表，使用英文分号分隔。默认 `3494361276877525`，支持 `self` 或 `~` 表示当前登录账号。
- `Notify Mode`: 新动态通知方式。可选 `Off`、`Notify`、`Chatter`、`Title`、`Speak`、`Actionbar`、`WinToast`、`Console Output`、`Real Chatter`，默认 `Notify`。
- `Query Cooldown (s)`: 查询冷却时间，默认 60 秒。
- `Notify Error`: 查询失败等错误是否通过 `Notify` 提示，默认关闭。
- `Show Content`: 是否在通知动作后追加动态正文或标题，默认关闭。
- `Content Max Characters`: 通知中显示的动态内容最大字符数，默认 20；超出后追加省略号。
- `Console Output Details`: 是否输出与 `/bili dynamic` 相同的完整动态卡片，默认开启。
- `Ignore Live Start`: 是否忽略开直播动态，默认关闭。
- `Ignore Live End`: 是否忽略关播后移除开直播动态产生的事件，默认开启。
- `Notify Removal (PRO)`: 是否在监视动态被删除时通知，专业版默认开启；免费版不支持。
- `Auto Like (PRO)`: 是否对符合条件的新动态自动点赞，默认关闭。
- `Auto Like User IDs (Sep With Semicolon)`: 自动点赞用户列表，必须同时包含在 `User IDs (Sep With Semicolon)` 中，支持 `self` 或 `~`。
- `Auto Like Delay (s)`: 收到新动态后等待多久执行点赞，默认 5 秒。
- `Auto Like Notify`: 自动点赞成功或失败是否通过 `Notify` 提示，默认开启。
- `Auto Jump (PRO)`: 是否对符合条件的新动态自动打开网页，默认关闭。
- `Auto Jump User IDs (Sep With Semicolon)`: 自动跳转用户列表，必须同时包含在 `User IDs (Sep With Semicolon)` 中，支持 `self` 或 `~`。

## 历史更新

## 备注

自动跳转会根据动态类型打开对应网页：普通动态一般打开 `t.bilibili.com/<dynamic_id>`，视频动态打开 `www.bilibili.com/video/<bvid>`。
自动点赞需要当前 B 站登录态与 CSRF 信息可用；未登录或登录态失效时会失败。
模块会把每位用户最近 10 条动态的原始卡片数据持久保存到 `output/Cache/BiliDynamicCache.json`，用于跨重启比较和恢复被删除动态的内容。

## 相关命令

```bash
/bili dynamic
```

## 相关模块
- [BiliVideoHelper](./BiliVideoHelper.md)
- [BiliUserSpider](./BiliUserSpider.md)

## 相关资料
无
