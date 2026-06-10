Downloader
下载器
分类：Web
描述：添加下载任务并显示 Download HUD。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
Downloader（下载器）用于从 GUI 快速调用 `/download`，向下载管理器添加一个下载任务。
模块启用时可按配置自动打开 Download HUD，然后提交 URL 并关闭本模块，方便下一次重新创建下载任务。

配置项
- URL（链接）
 类型：文本；默认：""
 说明：下载链接，必须以 `http` 开头。
- Enable HUD（启用 HUD）
 类型：布尔；默认：true
 说明：启用模块时是否自动打开 Download HUD。

历史更新
- 147. Downloader 新增 Enable HUD 配置，可选择是否自动打开 Download HUD。
- 146. 新增 Downloader 模块，可通过图形界面添加下载任务并自动打开 Download HUD。

备注
下载进度由 Download HUD 显示；URL 为空或格式不正确时会输出命令错误。

相关命令
- `/download <url...>`
- `/download list`

相关模块
- [AntiWebpage (反网页)](./AntiWebpage.md)
- [DownloadHUD (下载显示)](./DownloadHUD.md)
- [LiveChatter (直播弹幕)](./LiveChatter.md)

相关资料
无
