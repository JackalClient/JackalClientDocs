# B站命令

> 本页由 `test/COMMANDS.txt` 自动拆分生成。

共 70 组命令。

## 视频助手倍速（`/bvh setrate [value=1.0] [mode=set]`）

```bash
/bvh setrate [value=1.0] [mode=set]
/bilivideohelper setrate [value=1.0] [mode=set]
```

设置 BiliVideoHelper 的 Video Rate 配置项，value 为可表示为浮点数的正有限数，默认 `1.0`。`set` 保持设定；`temp` 仅当前视频分P生效，切换视频、分P或关闭模块后恢复原设定。连续使用 temp 不改变原恢复值，再次使用 set 或 Reset Video Rate Hotkey 会取消临时模式，重置快捷键将倍速设为 `1.0`。

该值用于字幕、视频歌词及弹幕时间轴同步，不会操作网页或桌面播放器本身的倍速，请与播放器实际倍速保持一致。

## 视频助手分P（`/bvh setpart [p=1]`）

```bash
/bvh setpart [p=1]
/bilivideohelper setpart [p=1]
```

设置当前已识别视频正在跟踪的分P，默认 P1。按视频详情 pages 列表中的 CID 加载字幕和弹幕，支持多个分P使用相同标题的情况；不同 CID 的弹幕缓存互不覆盖。p 必须是实际存在的正整数分P，无活动视频或序号越界时不修改当前状态。

Next Part Hotkey / Prev Part Hotkey 分别增减跟踪分P，成功后通知当前 P 序号，边界不循环。命令和快捷键只改变助手跟踪目标，不操作播放器跳转。`/bvh status` 显示当前分P及倍速，`/bvh subtitles ...` 默认使用所选分P。

## 直播消息接收状态（`/bili live reception [reconnect]`）

```bash
/bili live reception
/bili live reception reconnect
```

查看 LiveStream / LiveChatter 共用的消息接收方式、连接状态、最后心跳、重连次数及收到或丢弃的消息数量。`reconnect` 重新建立消息流连接；固定消息流模式失败时只重连，Auto 连续失败后回退 Legacy 并定期尝试恢复。

LiveStream 选择 Douyin 时，本轮只显示游客房间信息监控状态与暂不支持弹幕的提示；`reconnect` 重新查询抖音房间，不建立弹幕连接。B 站弹幕发送须先将 Platform 切回 Bilibili。

## 获取网页完整内容（`/webpage &lt;url...&gt;`）

```bash
/webpage <url...>
/webpageraw <url...>
/bilipage <url...>
/bilipageraw <url...>
```

::: details 点击查看说明
获取网页完整内容。/webpage /bilipage命令将解析格式以彩色输出，/webpageraw /bilipageraw 不会。/bilipage /bilipageraw 会携带对应的 Referer
:::

## 哔哩哔哩全套命令（`/bili [args...]`）

```bash
/bili [args...]
/bilibili [args...]
```

::: details 点击查看说明
哔哩哔哩全套命令。需要登录才能使用。输入 /bili login 或 /bilisettings 扫码登录。
不指定参数时，进入主页。
:::

## 扫码登录（`/bili login`）

```bash
/bili login
```

::: details 点击查看说明
扫码登录。将会存储 Cookies 到 BiliSettings，请勿泄露以免被盗号。
:::

## 重新扫码登录（`/bili relogin`）

```bash
/bili relogin
```

::: details 点击查看说明
重新扫码登录。
:::

## 登出账号（`/bili logout`）

```bash
/bili logout
```

::: details 点击查看说明
登出账号。清空 Cookies。
:::

## 查看用户空间主页（`/bili space [uid]`）

```bash
/bili space [uid]
```

::: details 点击查看说明
查看用户空间主页。如果不指定uid，则为当前登录账号的空间。
:::

## 解析B站短链接（`/bili parse &lt;shortlink&gt;`）

```bash
/bili parse <shortlink>
```

::: details 点击查看说明
解析B站短链接。
:::

## 查看自己的粉丝列表（`/bili fans`）

```bash
/bili fans
/bili fans list [limit=100]
/bili fans enum [limit=100]
```

::: details 点击查看说明
查看自己的粉丝列表。limit 为数量限制。如果粉丝太多，你可能因B站限制无法全部看完。【PRO】版的输出会更详细。
:::

## 以昵称关键字kw搜索自己的粉丝（`/bili fans find &lt;kw...&gt;`）

```bash
/bili fans find <kw...>
/bili fans findf <kw...>
/bili fans search <limit> <kw...>
/bili fans searchf <limit> <kw...>
```

::: details 点击查看说明
【PRO】以昵称关键字kw搜索自己的粉丝。两个带f后缀的为快速模式，找到一个很符合的结果就会直接输出并停止。search(f)可以指定搜索范围limit（表示前limit个粉丝中搜索）, find 则为B站支持的最大搜索范围（可能为1000）中搜索。findf 为前 100 个中搜索。你可以使用UID=或UID:开头搜索指定UID的用户。
:::

## 查看或搜索直播粉丝团成员（`/bili member`）

```bash
/bili member list [limit=100] [uid=<UID或昵称>]
/bili member enum [limit=100] [uid=<UID或昵称>]
/bili member find <kw...> [uid=<UID或昵称>]
/bili member findf <kw...> [uid=<UID或昵称>]
/bili member search <limit> <kw...> [uid=<UID或昵称>]
/bili member searchf <limit> <kw...> [uid=<UID或昵称>]
```

::: details 点击查看说明
【PRO】查看或搜索指定用户的直播粉丝团成员。未指定 uid/user 时默认使用当前登录账号；uid= 或 user= 可填写 UID 或昵称，昵称会按 ParseBilibiliUserUID 解析。
:::

## 查看或搜索大航海成员（`/bili guard`）

```bash
/bili guard list [limit=100] [uid=<UID或昵称>]
/bili guard enum [limit=100] [uid=<UID或昵称>]
/bili guard find <kw...> [uid=<UID或昵称>]
/bili guard findf <kw...> [uid=<UID或昵称>]
/bili guard search <limit> <kw...> [uid=<UID或昵称>]
/bili guard searchf <limit> <kw...> [uid=<UID或昵称>]
```

::: details 点击查看说明
【PRO】查看或搜索指定用户直播间的大航海成员，会显示舰长/提督/总督、粉丝牌等级与陪伴天数。未指定 uid/user 时默认使用当前登录账号。
:::

## 彩色输出收藏夹列表（`/bili fav folders [uid=self]`）

```bash
/bili fav folders [uid=self]
/bili favorite folders [uid=self]
```

::: details 点击查看说明
彩色输出指定用户创建的收藏夹列表，显示 MLID、FID、创建者 UID、公开/私密状态和视频数量。uid 不填时使用当前登录账号。
:::

## 分页查看收藏夹内容（`/bili fav list <media_id/name...> [ps=20] [pn=1] [order=mtime]`）

```bash
/bili fav list <media_id/name...> [ps=20] [pn=1] [order=mtime]
/bili favorite list <media_id/name...> [ps=20] [pn=1] [order=mtime]
```

::: details 点击查看说明
分页彩色输出指定收藏夹内容。media_id 可填收藏夹 MLID 或收藏夹名称，名称会按当前账号收藏夹模糊匹配；ps 最大 20；order 支持 mtime、view、pubtime。
:::

## 收藏指定视频（`/bili fav add <aid/bvid/link> <media_id/name...>`）

```bash
/bili fav add <aid/bvid/link> <media_id/name...>
/bili favorite add <aid/bvid/link> <media_id/name...>
```

::: details 点击查看说明
将指定 B 站视频收藏到目标收藏夹。media_id 可填收藏夹 MLID 或收藏夹名称，名称会按当前账号收藏夹模糊匹配；需要当前账号已登录。
:::

## 取消收藏指定视频（`/bili fav del <aid/bvid/link> <media_id/name...>`）

```bash
/bili fav del <aid/bvid/link> <media_id/name...>
/bili favorite del <aid/bvid/link> <media_id/name...>
```

::: details 点击查看说明
从指定收藏夹取消收藏指定 B 站视频。media_id 可填收藏夹 MLID 或收藏夹名称，名称会按当前账号收藏夹模糊匹配；需要当前账号已登录。
:::

## 查看B站视频信息（`/bili video <aid/bid/link>`）

```bash
/bili video <aid/bid/link>
```

::: details 点击查看说明
查看B站视频信息。会进入一个可交互页面。
:::

## 使用人工智能总结视频信息（`/bili video <aid/bid/link> summary`）

```bash
/bili video <aid/bid/link> summary
```

::: details 点击查看说明
使用人工智能总结视频信息。
:::

## 使用人工智能生成并发送一条类似的评论（`/bili video <aid/bid/link> comment`）

```bash
/bili video <aid/bid/link> comment
```

::: details 点击查看说明
使用人工智能生成并发送一条类似的评论。
:::

## 使用人工智能生成一条类似的评论（`/bili video <aid/bid/link> gencomment`）

```bash
/bili video <aid/bid/link> gencomment
```

::: details 点击查看说明
使用人工智能生成一条类似的评论。仅生成不发送。
:::

## 为指定评论区添加一条评论（`/bili comment add [type=1] &lt;oid&gt; &lt;content...&gt;`）

```bash
/bili comment add [type=1] <oid> <content...>
```

::: details 点击查看说明
为指定评论区添加一条评论。type 为评论区类型代码（例如视频为1, 此时 oid 为 avid），oid 为目标评论区id。
:::

## 为指定评论区添加一条二级评论（仅二级）（`/bili comment reply [type=1] &lt;oid&gt; &lt;root&gt; &lt;content...&gt;`）

```bash
/bili comment reply [type=1] <oid> <root> <content...>
```

::: details 点击查看说明
为指定评论区添加一条二级评论（仅二级）。root为要回复的评论的 rpid。
:::

## 为指定评论区添加一条大于二级的评论（`/bili comment reply2 [type=1] &lt;oid&gt; &lt;root&gt; &lt;parent&gt; &lt;content...&gt;`）

```bash
/bili comment reply2 [type=1] <oid> <root> <parent> <content...>
```

::: details 点击查看说明
为指定评论区添加一条大于二级的评论。root为要回复的评论所在的楼层的 rpid。parent 为要回复的评论的 rpid。
:::

## 查看“回复我的”消息列表（`/bili comment recv [page=1]`）

```bash
/bili comment recv [page=1]
```

::: details 点击查看说明
【PRO】查看“回复我的”消息列表。page 为页码（每页固定显示若干条），用于快速浏览近期收到的评论回复，并显示每条回复的时间与距今时间差。
:::

## 进入交互式“回复我的”界面（`/bili comment recvui`）

```bash
/bili comment recvui
```

::: details 点击查看说明
【PRO】进入交互式“回复我的”界面。会显示每条回复的时间与距今时间差；支持方向键选择、回车直接回复、R 刷新、Q/Esc 退出。回复输入支持 cancel 或 /cancel 取消。
:::

## 枚举评论区（单层，虽然可以显示部分子评论，但不会…（`/bili comment list/enum &lt;type&gt; &lt;oid&gt; [count=20] [page=1] [sort=1]`）

```bash
/bili comment list/enum <type> <oid> [count=20] [page=1] [sort=1]
/bili comment list/enum <oid>
```

::: details 点击查看说明
枚举评论区（单层，虽然可以显示部分子评论，但不会显示完整，分页）。type 为评论区类型代码（例如视频为1, 此时 oid 为 avid），oid 为目标评论区id。count 为每页数量，page 为页码，sort 为排序。
:::

## 枚举评论区（单层，虽然可以显示部分子评论，但不会…（`/bili comment listall &lt;type&gt; &lt;oid&gt; [sort=1]`）

```bash
/bili comment listall <type> <oid> [sort=1]
```

::: details 点击查看说明
枚举评论区（单层，虽然可以显示部分子评论，但不会显示完整）。type 为评论区类型代码（例如视频为1, 此时 oid 为 avid），oid 为目标评论区id，sort 为排序。
:::

## 枚举评论区（多层）（`/bili comment tree &lt;type&gt; &lt;oid&gt; [sort=1]`）

```bash
/bili comment tree <type> <oid> [sort=1]
```

::: details 点击查看说明
枚举评论区（多层）。type 为评论区类型代码（例如视频为1, 此时 oid 为 avid），oid 为目标评论区id，sort 为排序。
:::

## 给若干评论点赞取消赞点踩取消踩（`/bili comment like &lt;type&gt; &lt;oid&gt; [rpid1;rpid2;rpid3;...]`）

```bash
/bili comment like <type> <oid> [rpid1;rpid2;rpid3;...]
/bili comment unlike <type> <oid> [rpid1;rpid2;rpid3;...]
/bili comment dislike <type> <oid> [rpid1;rpid2;rpid3;...]
/bili comment undislike <type> <oid> [rpid1;rpid2;rpid3;...]
```

::: details 点击查看说明
给若干评论点赞/取消赞/点踩/取消踩。type 为评论区类型代码（例如视频为1, 此时 oid 为 avid），oid 为目标评论区id，rpid 为目标评论rpid。rpid 不填时，代表所有评论。
:::

## 删除若干评论（`/bili comment delete &lt;type&gt; &lt;oid&gt; [rpid1;rpid2;rpid3;...]`）

```bash
/bili comment delete <type> <oid> [rpid1;rpid2;rpid3;...]
```

::: details 点击查看说明
删除若干评论。type 为评论区类型代码（例如视频为1, 此时 oid 为 avid），oid 为目标评论区id，rpid 为目标评论rpid。rpid 不填时，代表所有评论。
:::

## 置顶取消置顶评论（`/bili comment topmost &lt;type&gt; &lt;oid&gt; [rpid1;rpid2;rpid3;...]`）

```bash
/bili comment topmost <type> <oid> [rpid1;rpid2;rpid3;...]
/bili comment untopmost <type> <oid> [rpid1;rpid2;rpid3;...]
```

::: details 点击查看说明
置顶/取消置顶评论。。type 为评论区类型代码（例如视频为1, 此时 oid 为 avid），oid 为目标评论区id, rpid 为目标评论rpid，支持并发置顶多个目标评论 （未成功）。rpid 不填时，代表所有评论。
:::

## 枚举编号为 uid 的用户动态（`/bili dynamic list/enum`）

```bash
/bili dynamic list/enum
/bili dynamic list/enum <uid> [limit=10] [offset_dynamic_id=0]
```

::: details 点击查看说明
枚举编号为 uid 的用户动态。limit 表示最大数量。如果填写offset_dynamic_id，则从编号为offset_dynamic_id的动态开始枚举。
:::

## 给指定用户动态点赞取消点赞，最多 limit 个…（`/bili dynamic likes &lt;uid&gt; [limit=8]`）

```bash
/bili dynamic likes <uid> [limit=8]
/bili dynamic unlikes <uid> [limit=8]
```

::: details 点击查看说明
给指定用户动态点赞/取消点赞，最多 limit 个动态。
:::

## 枚举指定用户的稿件列表（`/bili contribution [uid=own] [limit=30]`）

```bash
/bili contribution [uid=own] [limit=30]
```

::: details 点击查看说明
枚举指定用户的稿件列表。uid如果不填则是当前登录的用户。limit为数量限制，显示前多少的稿件。
:::

## 查看创作中心最近弹幕（`/bili danmaku recent [ps=20] [pn=1]`）

```bash
/bili danmaku recent [ps=20] [pn=1]
```

::: details 点击查看说明
【PRO】通过创作中心接口分页查看最近弹幕。输出包含发送者关系颜色、发送时间、视频 BV 号、标题、弹幕内容和弹幕类型；每页末尾会给出上一页和下一页的具体命令。
:::

## 该命令已被废弃（`/bili tag query <avid/bid/link...>`）

```bash
/bili tag query <avid/bid/link...>
```

::: details 点击查看说明
该命令已被废弃。
:::

## 获得推荐的直播间列表（`/bili live`）

```bash
/bili live
/bili live feed/recommend [limit]
```

::: details 点击查看说明
获得推荐的直播间列表。limit 为数量限制。
:::

## 向 room_id 直播间发送弹幕（`/bili live addchatter &lt;room_id&gt; &lt;content...&gt;`）

```bash
/bili live addchatter <room_id> <content...>
/bili live chatter <content...>
/bili live leetchatter <content...>
```

::: details 点击查看说明
向 room_id 直播间发送弹幕。如果 room_id 填为 ~ ，则会使用 LiveStream 模块中的 Room ID。/bili live leetchatter 则会先将文本交给 Clipboard Tweaks 模块处理再发送。
:::

## go 打开直播间网页（`/bili live go [roomId=~]`）

```bash
/bili live go [roomId=~]
/bili live link [roomId=~]
```

::: details 点击查看说明
go 打开直播间网页。link 仅复制链接。如果 roomId 不填，则取 LiveStream 模块的 Room ID。`go` 与 `switch` 成功使用的直播间号会记录到 Records，并用于后续房间号自动补全。
:::

## 当前房间与本人房间

`host/hostinfo/likeauds/likeauds2/getarea/area/gettitle/title/fetch/chat/fetchraw/link/go/audience/status` 默认查询 LiveStream 当前选中的 `Room ID`；仅 Room ID 为 0 时自动填入本人房间。支持显式房间或 UID 参数的命令继续支持这些参数。

`start/startsilent/stop/settitle/setarea/violation` 始终操作本人房间，不修改当前选择。`area` 只用于查询分区，旧版的分区修改语法请改用 `setarea`。

```bash
/bili live status
/bili live violation [page=1] [pageSize=6]
/bili live reception [reconnect]
/bili live switch <roomId> [force|auto]
/bili live switch back
```

`status` 显示当前房间的状态，账号诊断、封禁/权限恢复时间和违规记录仅在本人房间获取并显示。`violation` 只查询本人账号的违规记录。`reception` 查看共享消息接收状态，`reconnect` 手动重连。`switch ... auto` 调整冲突选项并备份，`switch back` 切回本人房间并恢复备份；消息流模式保留礼物检测，关闭自定义礼物触发器和默认命令，旧版轮询仍关闭礼物检测。

## 直接查询本人直播间

```bash
/bili live mylink
/bili live mygo
/bili live getmytitle
/bili live getmyarea
/bili live mystatus
/bili live myaudience
/bili live likemyauds [limit=5]
/bili live likemyauds2 [limit=5]
/bili live fetchmine [limit=100]
/bili live fetchmineraw [limit=100]
/bili live mychat [limit=100]
```

需要登录账号且已创建直播间，不会切换 LiveStream 当前房间。`mylink` 复制本人链接；`mygo` 在浏览器打开；`getmytitle/getmyarea` 查询标题/分区；`mystatus` 查询状态、账号诊断及最新违规信息；`myaudience` 输出观众资料。`likemyauds/likemyauds2` 给本人房间观众的动态点赞，第二种方式后台执行，limit 为每位观众的动态数量。`fetchmine/mychat` 输出本人房间的弹幕，`fetchmineraw` 输出原始 JSON。

## 管理自己直播间的房管（`/bili live mod`）

```bash
/bili live mod list
/bili live mod add <name1/uid1;name2/uid2;...>
/bili live mod remove <name1/uid1;name2/uid2;...>
```

::: details 点击查看说明
枚举、批量任命或撤销自己直播间的房管。`add` 和 `remove` 的目标可以用用户名或 UID，并用英文分号批量分隔；`remove` 目标支持根据已缓存房管列表自动补全。房管列表会按直播间号缓存到 `output/Cache/BiliLiveRoomModerators.json`，LiveStream 或 LiveChatter 启用时会在启动阶段获取并每 10 分钟刷新一次。
:::

## 查询自己已关注的所有 up 的直播状态（`/bili live following`）

```bash
/bili live following
```

::: details 点击查看说明
查询自己已关注的所有 up 的直播状态。
:::

## 输出直播间观众信息（`/bili live audience [roomId=livestream]`）

```bash
/bili live audience [roomId=livestream]
```

::: details 点击查看说明
输出指定直播间的在线观众信息，最多输出 20 位观众。如果 roomId 不填或填 ~，则取 LiveStream 模块的 Room ID。
:::

## 下载、打开或查看视频弹幕（`/bilichatter <download/open/list> <aid/bvid/link>`）

```bash
/bilichatter download <aid/bvid/link>
/bilichatter open <aid/bvid/link>
/bilichatter list <aid/bvid/link> [ps=20] [pn=1] [keyword...]
/bilichatter listnormal <aid/bvid/link> [ps=20] [pn=1] [keyword...]
/bilichatter listsub <aid/bvid/link> [ps=20] [pn=1] [keyword...]
/bilichatter listspecial <aid/bvid/link> [ps=20] [pn=1] [keyword...]
/bilichatter listinteract <aid/bvid/link> [ps=20] [pn=1] [keyword...]
/bilichatter listuploader <aid/bvid/link> [ps=20] [pn=1] [keyword...]
```

::: details 点击查看说明
下载指定 B 站视频弹幕 XML，打开本地弹幕文件，或按页彩色输出视频弹幕。`open` 在本地文件不存在时会先下载，`list` 会按视频内弹幕时间排序输出，listnormal/listsub/listspecial/listinteract/listuploader 可按弹幕池或 UP 主筛选。命令会自动尝试把视频 UP 主加入发送者映射，可通过 Bili Chatter 模块的 List UID Reverse Lookup 配置反查发送者 UID，也可用 keyword 从反查成功的用户名、用户哈希和弹幕正文中筛选并高亮命中内容。
:::

## Audience Tracker 控制命令（`/audiencetracker status [uid/nickname=all]`）

```bash
/audiencetracker status [uid/nickname=all]
/audiencetracker trace <uid/nickname>
/audiencetracker reload
/audiencetracker config
```

::: details 点击查看说明
Audience Tracker 控制命令。status 输出目标用户当前状态、所在直播间与最近最多 20 条弹幕；trace 打开 Present 目标所在直播间；reload 在 Config Source=Config File 时重新加载配置文件；config 彩色列举当前有效配置和目标组，不显示按钮及界面元数据。
:::

## 给现在的直播间观众的动态点赞（`/bili live likeauds [roomId=~] [limit=5]`）

```bash
/bili live likeauds [roomId=~] [limit=5]
/bili live likeauds2 [roomId=~] [limit=5]
```

::: details 点击查看说明
给现在的直播间观众的动态点赞。limit 为点赞的动态数量。
:::

## 获取主播信息（`/bili live host [uid=~]`）

```bash
/bili live host [uid=~]
/bili live hostinfo [uid=~]
```

::: details 点击查看说明
获取主播信息。
uid 不填或为 `~` 时查询当前选中直播间的主播。
:::

## 获取并输出当前直播间弹幕列表的前limit个（`/bili live fetch [limit=100]`）

```bash
/bili live fetch [limit=100]
/bili live chat [limit=100]
```

::: details 点击查看说明
获取并输出当前直播间弹幕列表的前limit个。
:::

## 自动补入本人房间（`/bili live setroom`）

```bash
/bili live setroom
```

::: details 点击查看说明
仅在 LiveStream 的 Room ID 为 0 时补入本人房间；切换房间使用 `/bili live switch`。
:::

## 获得直播间原始信息JSON（`/bili live info [roomId=~]`）

```bash
/bili live info [roomId=~]
```

::: details 点击查看说明
获得直播间原始信息JSON。
:::

## 为自己创建一个直播间（`/bili live create`）

```bash
/bili live create
```

::: details 点击查看说明
为自己创建一个直播间。
:::

## 设置直播间标题为 title（`/bili live settitle &lt;title...&gt;`）

```bash
/bili live settitle <title...>
```

::: details 点击查看说明
【PRO】设置直播间标题为 title。
始终修改本人房间，与 LiveStream 当前选择无关。
:::

## 获取直播间标题（`/bili live gettitle [roomId=~]`）

```bash
/bili live gettitle [roomId=~]
/bili live title [roomId=~]
```

::: details 点击查看说明
获取直播间标题。
:::

## 查看所有直播分区及其ID（`/bili live areas`）

```bash
/bili live areas
```

::: details 点击查看说明
查看所有直播分区及其ID。
:::

## 获取直播间分区（`/bili live area`）

```bash
/bili live area [roomId=~]
/bili live getarea [roomId=~]
```

::: details 点击查看说明
获取直播间分区。使用 /bili live areas 查看所有分区。
默认查询当前选中的房间，修改分区请使用 `setarea`。
:::

## 设置本人直播间分区（`/bili live setarea <area_id/area_name>`）

```bash
/bili live setarea <area_id/area_name>
```

::: details 点击查看说明
设置直播间分区。可填分区ID或分区名。分区名将自动模糊匹配（命中规则：相似度&gt;0.8，或&gt;0.6且领先第二名&gt;0.2）；若匹配失败会输出候选分区。使用 /bili live areas 查看所有分区。
始终修改本人房间，不改变当前选择。
:::

## 立即开播（`/bili live start [area=current]`）

```bash
/bili live start [area=current]
/bili live startsilent [area=current]
```

::: details 点击查看说明
【PRO】在本人房间开播，与 LiveStream 当前选择无关。area 为分区ID，不填时使用本人房间的当前分区。startsilent 不输出推流码及开播成功提示。
:::

## 关闭直播（`/bili live stop`）

```bash
/bili live stop
```

::: details 点击查看说明
【PRO】关闭本人房间的直播，与 LiveStream 当前选择无关。通过本命令主动停播不会触发 Streamer 的异常断流警告。
:::

## 枚举等级系统所有的观众档案数据（`/bili live levelsystem list`）

```bash
/bili live levelsystem list
```

::: details 点击查看说明
枚举等级系统所有的观众档案数据。
:::

## 立即保存等级系统所有的观众档案数据（`/bili live levelsystem save`）

```bash
/bili live levelsystem save
```

::: details 点击查看说明
立即保存等级系统所有的观众档案数据。
:::

## 禁言指定的直播间用户（`/bili live mute <uid/name> &lt;duration_flag&gt;`）

```bash
/bili live mute <uid/name> <duration_flag>
```

::: details 点击查看说明
禁言指定的直播间用户。duration_flag可以填写：
	0/current: 本场直播。
	-1/permenant: 永久。
:::

## 查看直播间已禁言列表（`/bili live muted`）

```bash
/bili live muted
```

::: details 点击查看说明
查看直播间已禁言列表。
:::

## 取消指定用户的禁言（`/bili live unmute <uid/name>`）

```bash
/bili live unmute <uid/name>
```

::: details 点击查看说明
取消指定用户的禁言。
:::

## 阅读一个专栏（`/bili opus &lt;id&gt;`）

```bash
/bili opus <id>
```

::: details 点击查看说明
阅读一个专栏。
:::

## 查用户成分（`/bili components &lt;uid&gt; [preset=for_speak]`）

```bash
/bili components <uid> [preset=for_speak]
```

::: details 点击查看说明
查用户成分。uid 为用户ID。preset 为预设。
for_speak: 只讲述，不输出。
normal:	讲述并输出。
:::

## 查看 Cookies（`/bili cookies`）

```bash
/bili cookies
```

::: details 点击查看说明
查看 Cookies。请勿泄露以免被盗号。
:::

## 设置 Cookies 的必要项（`/bili setcookies [cookies.../cookiesjson...]`）

```bash
/bili setcookies [cookies.../cookiesjson...]
```

::: details 点击查看说明
设置 Cookies 的必要项。如果只填前两项参数，则会提示分别输入 DedeUserID, DedeUserID__ckMd5, SESSDATA, bili_jct, sid。
:::

## 查询B站用户昵称（`/bilinickname &lt;uid&gt;`）

```bash
/bilinickname <uid>
/bilinicknames <uid1;uid2;...>
```

::: details 点击查看说明
查询B站用户昵称。
:::

## 根据一个用户昵称反查用户UID（`/biliuid &lt;nickname&gt;`）

```bash
/biliuid <nickname>
/biliuid1 <nickname>
```

::: details 点击查看说明
根据一个用户昵称反查用户UID。如果找不到精确的就输出相似的。/biliuid如果遇到空回复会多尝试几次，/biliuid1并不会。
:::

## 显示B站热搜（`/bilihot [limit]`）

```bash
/bilihot [limit]
```

::: details 点击查看说明
显示B站热搜。
:::

## 显示关于关键词 keyword 的哔哩哔哩搜索建…（`/bilisuggest &lt;keyword&gt;`）

```bash
/bilisuggest <keyword>
```

::: details 点击查看说明
显示关于关键词 keyword 的哔哩哔哩搜索建议。一次会输出很多。
:::

## 输出指定B站视频相关信息（`/bilivideo <aid/bid/link>`）

```bash
/bilivideo <aid/bid/link>
```

::: details 点击查看说明
输出指定B站视频相关信息。
:::

## B站视频封面提取（`/bilivideocover <get/download/forward> <aid/bid/link>`）

```bash
/bilivideocover <get/download/forward> <aid/bid/link>
```

::: details 点击查看说明
B站视频封面提取。
get输出图片链接，download下载至output\Cover，forward直接在浏览器在线查看此图片。
:::

## 获取指定B站用户完整档案（`/biliprofile [uid1;uid2;...]`）

```bash
/biliprofile [uid1;uid2;...]
/biliprofiles <uid1;uid2;...>
```

::: details 点击查看说明
获取指定B站用户完整档案。
:::
