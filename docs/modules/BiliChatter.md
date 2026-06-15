# BiliChatter
B站弹幕
分类：Web
描述：下载B站视频弹幕XML文件，并可自动启动自动弹幕。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
BiliChatter（B站弹幕）用于按 AID、BVID 或视频链接下载指定视频的弹幕 XML 文件。
模块会先解析配置中的视频标识，获取视频首个分 P 的 CID，再通过所选弹幕接口下载 XML，并按 BVID.xml 保存到指定目录。
下载成功后可选择自动打开文件，或把文件路径写入 AutoDanmaku 并直接启用 AutoDanmaku 播放弹幕。
BiliVideoHelper 的弹幕同步也会复用本模块的下载能力，并使用 Output Directory for Video Helper 作为缓存目录。

## 配置项
- Async（异步）
 类型：布尔；默认：true
 说明：开启后下载在后台线程执行，避免阻塞客户端界面。
- AID/BID/Link（AID/BVID/链接）
 类型：文本；默认：""
 说明：填写视频 AV 号、BV 号或 B 站视频链接。短链和常见视频链接会自动解析为 AVID，并转换为 BVID 文件名。
- API Source（API来源）
 类型：枚举；默认："comment.bilibili"
 说明：选择弹幕 XML 下载接口。comment.bilibili 通常直接返回 XML；list.so 走 B 站弹幕列表接口。
 可选：list.so；comment.bilibili
- Output Directory（输出目录）
 类型：文本；默认："output\\Danmaku\\"
 说明：手动下载弹幕文件的保存目录。相对路径会基于客户端工作目录解析；留空表示当前工作目录。目录不存在时会自动创建。
- Output Directory for Video Helper（Video Helper输出目录）
 类型：文本；默认："output\\Danmaku\\"
 说明：BiliVideoHelper 弹幕同步使用的缓存目录。超过 3 天的 BV*.xml 缓存会被定期清理。
- Open File（打开文件）
 类型：布尔；默认：false
 说明：开启后，手动下载成功会自动用系统默认程序打开 XML 文件。
- Start Auto Danmaku（启动自动弹幕）
 类型：枚举；默认："Off"
 说明：手动下载成功后是否联动 AutoDanmaku。Config 只写入 AutoDanmaku 配置；Config and Enable 会同时启用 AutoDanmaku。
 可选：Off；Config；Config and Enable
- Start Auto Danmaku Loop（启动自动弹幕循环）
 类型：布尔；默认：false
 说明：开启后联动 AutoDanmaku 时使用 Single File Loop；关闭时使用 Single File。
- Notify（通知）
 类型：布尔；默认：true
 说明：开启后会通知下载成功或失败结果。
- Connect Timeout (s)（连接超时（秒））
 类型：数值；默认：10L
 说明：用于限制视频信息查询和弹幕下载的网络等待时间。

## 历史更新
- v1.1.2：支持按 AID、BVID 或链接下载视频弹幕 XML，可选择弹幕接口、保存目录，并可在下载成功后自动配置或启用 AutoDanmaku。
- v1.1.2：弹幕文件改为按 BVID.xml 命名，并支持下载后自动打开和 BiliVideoHelper 专用缓存目录。

## 备注
下载文件名固定为 BVID.xml。B 站弹幕接口实际使用视频 CID，模块会自动从 AVID 查询首个分 P 的 CID。
若下载失败，优先检查网络、视频是否存在、B 站接口是否可访问，以及输出目录是否有写入权限。

## 相关命令
无

## 相关模块
- [AutoDanmaku (自动弹幕)](./AutoDanmaku.md)
- [BiliVideo (B站视频)](./BiliVideo.md)
- [BiliVideoHelper (B站视频助手)](./BiliVideoHelper.md)

## 相关资料
无