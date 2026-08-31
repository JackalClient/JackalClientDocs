# ResourceMarket
资源市场
分类：Misc
描述：浏览并下载客户端字体、CustomHUD 图片、音效和打字练习文章。

## 需求
- Unsafe：否
- Malicious：否
- 需要管理员权限：否
- 需要系统权限：否
- 需要 TrustedInstaller 权限：否
- 驱动依赖：否
- 是否 WIP：否
- 是否需要联网：是
- 版本属性：普通可用

## 介绍
ResourceMarket 是客户端的资源管理 App。启用模块后会自动切换到 Apps 页的 Resource 选项卡，并从 Ricochesta 的 Gitee 仓库读取资源列表。

资源列表请求固定读取仓库的 `main` 分支，并使用标准 JSON 请求头。v5 contents API 请求失败或返回空列表时，会回退到 v3 前端 tree API 枚举目录，并根据 blob 的完整路径生成 `raw/main` 下载地址；两种接口都失败时会保留当前已经显示的资源，并在列表下方显示市场服务暂不可用提示。

页面顶部包含 Font、ImageHUD、Sound 和 Article 四个资源类型。标签使用文字加粉色短横线样式，切换时短横线会平滑移动并适配标签文字宽度；客户端使用中文时会显示对应中文名称：

- Font 对应仓库 `fonts` 目录。每个 TTF 字体可配一张同名 PNG、JPG 或 JPEG 缩略图。点击未下载字体会下载到 `output/Cache/Fonts`。
- ImageHUD 对应仓库 `img/customhud` 目录。图片会随滚动自动缓存用于预览，支持 JPG 与 GIF 动画，左键只选择资源。
- Sound 对应仓库 `sounds` 目录。音效不会自动下载，点击格子后才会下载到 `output/Cache/Sounds` 并预览。切换音效时会停止上一段预览，格子内会显示播放进度；超过 10 秒的本地音效使用歌词图标，其余使用音量图标。
- Article 与 TypingPractice 共用仓库 `texts/typing` 目录。文件夹显示文件夹图标，点击可进入下一级；子目录左上角显示等比缩放的返回箭头和当前目录名称，也可按 `Alt+↑` 返回上一级。TXT 文件使用 `file.png` 图标，点击后下载到 `output/Cache/Articles/<相对路径>`，再次点击会打开本地文件；右键可将在线文章设为 TypingPractice 当前文章或强制重新下载。

资源列表支持搜索、快速清空搜索条件、惯性滚动、滚动条以及上下方向键、Home、End、PageUp、PageDown；Ctrl+Tab 可切换资源类型。未下载的字体和音效会在预览图右下角显示下载标志。当前选择项使用天蓝色边框，并在切换时平滑淡入淡出。字体缩略图存放在 `output/Cache`，文件名以 `font_thumb_` 开头，超过 3 天会自动清理；无法加载的字体缩略图会显示灰色文件图标。仅在能够获取字体文件大小时，悬停才会显示格式化后的大小提示。

GUI 的 Font 下拉框在展开时自动枚举 `assets` 与 `output/Cache/Fonts` 中的 TTF 文件；Sound 页中的音效下拉框会枚举 `assets` 与 `output/Cache/Sounds` 中支持的音频文件。两类枚举共享 10 秒冷却，避免频繁扫描磁盘。

开启 Auto Translate 后，除 Font 外的资源名称会根据客户端语言自动翻译：英文客户端为中文名称追加橘色英文译名，中文客户端为英文名称追加橘色中文译名；译名使用括号显示并在当前客户端会话中缓存。

## 配置项
- Auto Translate（自动翻译）
  类型：布尔；默认：false
  说明：自动翻译与客户端显示语言不一致的非字体资源名称。
