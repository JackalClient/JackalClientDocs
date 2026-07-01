# B站命令

> 本页由 `test/COMMANDS.txt` 自动拆分生成。

共 62 组命令。

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
go 打开直播间网页。link 仅复制链接。如果 roomId 不填，则取 LiveStream 模块的 Room ID。
:::

## 查询自己已关注的所有 up 的直播状态（`/bili live following`）

```bash
/bili live following
```

::: details 点击查看说明
查询自己已关注的所有 up 的直播状态。
:::

## 输出现在的直播间观众信息（`/bili live audience [roomId=~]`）

```bash
/bili live audience [roomId=~]
```

::: details 点击查看说明
输出现在的直播间观众信息。如果 roomId 不填，则为当前的缓存。如果填~，则取 LiveStream 模块的 Room ID。
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
:::

## 获取并输出当前直播间弹幕列表的前limit个（`/bili live fetch [limit=100]`）

```bash
/bili live fetch [limit=100]
/bili live chat [limit=100]
```

::: details 点击查看说明
获取并输出当前直播间弹幕列表的前limit个。
:::

## 将有关模块的直播间ID选项全部设为roomId（`/bili live setroom [roomId=auto]`）

```bash
/bili live setroom [roomId=auto]
```

::: details 点击查看说明
将有关模块的直播间ID选项全部设为roomId。如果不填，则为自己的直播间ID。
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
/bili live area
/bili live getarea [roomId=~]
```

::: details 点击查看说明
获取直播间分区。使用 /bili live areas 查看所有分区。
:::

## 设置直播间分区（`/bili live area <area_id/area_name>`）

```bash
/bili live area <area_id/area_name>
/bili live setarea <area_id/area_name>
```

::: details 点击查看说明
设置直播间分区。可填分区ID或分区名。分区名将自动模糊匹配（命中规则：相似度&gt;0.8，或&gt;0.6且领先第二名&gt;0.2）；若匹配失败会输出候选分区。使用 /bili live areas 查看所有分区。
:::

## 立即开播（`/bili live start [area=current]`）

```bash
/bili live start [area=current]
/bili live startsilent [area=current]
```

::: details 点击查看说明
【PRO】立即开播。房间号将采用 LiveStream 直播间模块的房间号。area为分区ID，如果不填则为当前分区。startsilent 子命令是静默开播，不会提示任何信息。
:::

## 关闭直播（`/bili live stop`）

```bash
/bili live stop
```

::: details 点击查看说明
【PRO】关闭直播。房间号将采用 LiveStream 直播间模块的房间号。
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
