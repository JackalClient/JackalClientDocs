# ResourceMarket
资源市场
分类：Misc
描述：浏览并下载客户端字体、CustomHUD 图片、音效、打字练习文章和着色器。

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
ResourceMarket 是客户端的资源管理 App。启用模块后会自动切换到 Apps 页的 Resource 选项卡，并从 Gitee 仓库 `thunderbringer/ricochesta` 读取资源列表。

资源列表请求固定读取仓库的 `main` 分支，并使用标准 JSON 请求头。v5 contents API 请求失败或返回空列表时，会回退到 v3 前端 tree API 枚举目录，并根据 blob 的完整路径生成 `raw/main` 下载地址；两种接口都失败时会保留当前已经显示的资源，并在列表下方显示市场服务暂不可用提示。

页面顶部包含 Font、ImageHUD、Sound 和 Article 四个资源类型。标签使用文字加粉色短横线样式，切换时短横线会平滑移动并适配标签文字宽度；客户端使用中文时会显示对应中文名称：

- Font 对应仓库 `fonts` 目录。每个 TTF 字体可配一张同名 PNG、JPG 或 JPEG 缩略图。点击未下载字体会下载到 `output/Cache/Fonts`。
- ImageHUD 对应仓库 `img/customhud` 目录。图片会随滚动自动缓存用于预览，支持 JPG 与 GIF 动画，左键只选择资源。
- PresetHUD 对应仓库 `presethud` 目录。所有具有匹配缩略图的预设都会加载预览；已知超过 10 MiB 的缩略图不显示，无法取得大小时仍会正常加载。
- Sound 对应仓库 `sounds` 目录。音效不会自动下载，点击格子后才会下载到 `output/Cache/Sounds` 并预览。切换音效时会停止上一段预览，格子内会显示播放进度；超过 10 秒的本地音效使用歌词图标，其余使用音量图标。
- Article 与 TypingPractice 共用仓库 `texts/typing` 目录。文件夹显示文件夹图标，点击可进入下一级；子目录左上角显示等比缩放的返回箭头和当前目录名称，也可按 `Alt+↑` 返回上一级。TXT 文件使用 `file.png` 图标，点击后下载到 `output/Cache/Articles/<相对路径>`，再次点击会打开本地文件；右键可将在线文章设为 TypingPractice 当前文章或强制重新下载。
- Shader 对应仓库 `shaders` 目录，读取 `.fs` 文件及同名 PNG、JPG 或 JPEG 缩略图。着色器下载到 `output/Cache/Shaders`；已下载项右键时会预加载检查，成功后可直接设为 Background 在线滤镜，无效时可重新检查，也可定位、在 FileManager 中显示或删除。菜单关闭后，未设为背景的预加载着色器会自动释放。

资源列表支持搜索、快速清空搜索条件、惯性滚动、滚动条以及上下方向键、Home、End、PageUp、PageDown；Ctrl+Tab 可切换资源类型。未下载的字体和音效会在预览图右下角显示下载标志。当前选择项使用天蓝色边框，并在切换时平滑淡入淡出。字体缩略图存放在 `output/Cache`，文件名以 `font_thumb_` 开头，超过 3 天会自动清理；无法加载的字体缩略图会显示灰色文件图标。关闭 GUI 的退场动画会继续使用已加载缩略图，不会在动画开始时提前销毁。仅在能够获取字体文件大小时，悬停才会显示格式化后的大小提示。

GUI 的 Font 下拉框在展开时自动枚举 `assets` 与 `output/Cache/Fonts` 中的 TTF 文件；Sound 页中的音效下拉框会枚举 `assets` 与 `output/Cache/Sounds` 中支持的音频文件。两类枚举共享 10 秒冷却，避免频繁扫描磁盘。

开启 Auto Translate 后，除 Font 外的资源名称会根据客户端语言自动翻译：英文客户端为中文名称追加橘色英文译名，中文客户端为英文名称追加橘色中文译名；译名使用括号显示并在当前客户端会话中缓存。

## 客户端启动元数据

客户端启动时也复用资源市场的 Gitee 下载接口，从 `thunderbringer/ricochesta` 的 `main` 分支读取 `data` 目录中的四个 JSON 文件；此流程独立于 ResourceMarket 模块开关，不需要先打开资源市场：

- `ModuleTranslation.json`：模块中文译名。
- `ModuleDescription.json`：模块英文与中文描述，使用 `en`、`zh` 字段。
- `ModuleAttributes.json`：管理员、系统、TrustedInstaller 权限，以及不安全、恶意、驱动依赖、专业版、WIP 和 Deprecated 列表。
- `OptionDescription.json`：模块配置项的双语描述，格式为“原始英文模块名 → 原配置键名 → en/zh”。目前提供 Auto Translate 和 Sound Preview Loop 两个示例。

模块使用客户端原始英文名称，大小写和空格精确匹配。云控 JSON 只在 Ricochesta 的 `data` 目录维护，客户端仓库不保存资源副本。启动先读取 `output/Cache/ModuleMetadata` 中的有效缓存，没有有效缓存时尝试从 Gitee 下载；读取配置并应用代理后，在恢复模块前刷新尚未下载的文件。下载失败或内容格式错误时保留缓存，不会覆盖已有数据。缓存使用临时文件与原子替换，不参与 Cache 根目录的三天过期清理。首次启动没有基础模块数据缓存且无法下载时停止启动，配置项描述不可用则只是不显示提示。

这四个元数据请求启用 TLS 证书与主机名校验，每个文件的连接超时为 8 秒、总超时为 15 秒；有缓存但网络不通时会回退到本地数据，启动最多可能额外等待约 60 秒。云端属性不会新增客户端尚未实现的模块；配置相关的动态权限检查仍保留。

GUI 的 Module Option Description 支持 Off、Tooltip、Icon Tooltip、Bottom，默认 Icon Tooltip。图标模式在有描述的键名右侧显示主题色、80% 不透明度的 info 图标，悬停 0.5 秒后淡入上方居中的圆角提示；Tooltip 模式悬停键名 2 秒后显示同款提示，提示背景在淡入完成后为完全不透明。Bottom 模式在 Dropdown 的模块描述位置或 Neverlose 窗口底部显示，未悬停有描述的键名时恢复模块描述。客户端按显示语言选择 en/zh，一种语言为空时回退到另一种语言；文件内容为 `{}` 时不显示配置项描述。

## 配置项
- Auto Translate（自动翻译）
  类型：布尔；默认：false
  说明：自动翻译与客户端显示语言不一致的非字体资源名称。
