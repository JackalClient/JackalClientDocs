# Mini Map
小地图
分类：Web（位于 WeatherHUD 上方）
描述：根据当前位置在 HUD 中显示全国云图和雷达图。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：是；需要获取 IP 定位和地图数据
- 开发状态：稳定/常规
- 版本属性：PRO 专有

## 介绍
以当前 IP 定位的经纬度为中心显示全国云图和雷达图。定位复用 WeatherInfo 的 `GetCurrentDistinct` 查询路径及 IP Address 的定位来源设置，并在该次来源只返回城市信息时复用已有完整 IP 定位结果，无需开启 WeatherInfo，也不依赖 QWeather 密钥。无法获取有效经纬度时隐藏整个 HUD。默认同时选择 Cloud Map、Radar Map，云图位于雷达图上方。

## 配置项

| 配置项 | 默认值 | 说明 |
| --- | --- | --- |
| Map Layers | Cloud Map、Radar Map | 多选图层，按选中列表从右向左绘制，最左侧位于最上方；至少一个图层有有效数据即可显示，取消全部图层时隐藏 HUD |
| Coordinates | Off | Off、Below、Above：关闭经纬度文字、显示在地图下方或上方 |
| Coordinates Format | XY | Numbers 1、Numbers 2、XY、Standard 1、Standard 2 |
| Text Color | White | 经纬度文字颜色，支持统一颜色选择器 |
| Text Shadow | true | 经纬度文字阴影 |
| Text Opacity (0~1) | 1.0 | 经纬度文字不透明度 |
| Map Shape | Square | Square、Rectangle、Round |
| Map Square Width | 250 | 正方形宽度，像素 |
| Map Rectangle Width | 500 | 矩形宽度，像素 |
| Map Rectangle Height | 250 | 矩形高度，像素 |
| Map Round Radius | 150 | 圆形半径，像素 |
| Map Scale | 1.0 | 以当前位置为中心缩放地图内容；不改变 HUD 的外框尺寸 |
| Map Zoom Hotkey Mode | Alt + Wheel | Off、Wheel、Alt + Wheel；后两种需鼠标位于地图内，Alt + Wheel 还需按住 Alt |
| Map Opacity (0~1) | 1.0 | 地图图层不透明度 |
| Map Update Cooldown (min) | 15.0 | 后台刷新选中图层和 IP 经纬度的间隔，分钟 |
| Map Current Location | Texture | Off、Point（小圆点）、Triangle（向上三角形）、User（用户头像）、Texture（云贴图） |
| Map Current Location Color | White | 当前位置指示器颜色或图像着色 |
| Map User Icon | Auto | 选项及获取逻辑与 GUI 的 NL User Icon 共用；Custom (PRO) 共用 NL User Custom Icon Path |
| Map User Icon Circle | true | 用户头像圆形裁剪 |
| Map Shadow | true | 按地图形状绘制阴影 |
| Map Shadow Thickness | 30.0 | 阴影厚度，像素 |
| Map Shadow Opacity (0~1) | 0.5 | 阴影不透明度 |
| Map Outline | true | 地图边框 |
| Map Outline Color | White | 边框颜色，支持统一颜色选择器 |
| Map Outline Thickness | 8.0 | 边框厚度，像素 |
| Map Outline Opacity (0~1) | 1.0 | 边框不透明度 |
| Hide When Menu On | true | ClickGUI 打开时隐藏；HUD 编辑时保留显示 |
| Hide In Fullscreen Window | true | 前台窗口全屏时隐藏；HUD 编辑时保留显示 |
| X Rate / Y Rate | 0.02 / 0.1 | 相对屏幕位置，可通过 HUD 编辑器拖动 |

选项按地图内容、地图尺寸与缩放、经纬度、当前位置、地图外观、位置与显示分组。只显示所选形状的尺寸项；Coordinates 为 Off 时隐藏格式与文字样式；当前位置为 Off 时隐藏其颜色，为 User 时显示头像选项；阴影和边框关闭时隐藏对应附属选项。

经纬度始终按“经度、纬度”顺序，保留一位小数。例如经度 111.2、纬度 34.6：

| 格式 | 示例 |
| --- | --- |
| Numbers 1 | `111.2, 34.6` |
| Numbers 2 | `东经 111.2, 北纬 34.6` |
| XY | `X: 111.2  Y: 34.6` |
| Standard 1 | `Lon: 111.2  Lat: 34.6` |
| Standard 2 | `Lon: 东经 111.2  Lat: 北纬 34.6` |

Numbers 2 和 Standard 2 随显示语言切换方向文字，西经和南纬使用正数配合方向显示，其余格式保留负号。

## 数据、范围与缓存

- 雷达图：`https://api.sismotide.top/get/radar.php`
- 云图：`https://api.sismotide.top/get/cloud.php`
- 位置贴图：Ricochesta 的 `main` 分支 `img/runtime/location.png`，复用 WeatherHUD 的资源仓库 URL 和 TLS 校验请求方式。

接口需返回 `status: "success"`、`time`、`bounds.sw/ne`、`size.width/height` 和 PNG Base64 `image`。`bounds` 数组顺序为 `[纬度, 经度]`。两个图层依据各自范围统一映射到同一经纬度视图，当前位置居中；默认缩放下每度经纬度对应 16 像素，滚轮每格缩放 15%，范围为 0.1–20。HUD 编辑时暂停地图滚轮缩放，避免与编辑器操作冲突。

全国边界先从 `https://geo.datav.aliyun.com/areas_v3/bound/100000.json` 在线获取，随后回退到同站点的 `100000_full.json`，两个地址都失败时再从 Ricochesta `data/ChinaBoundary.json` 获取，缓存到 `output/Cache/MiniMap/MiniMapChina.geojson`，不再随 assets 分发。本机每个自然日首次使用地图时尝试刷新一次；模块持续开启跨日时也会自动刷新，独立于 Map Update Cooldown。当天的尝试日期和最近成功获取时间保存在 `MiniMapChina.cache.json`，重启后沿用，避免当天重复请求。客户端请求强制使用 IPv4 并跟随重定向，以兼容部分网络环境。新数据完整校验后才替换缓存；网络失败或数据非法时继续使用有效旧边界，下一个自然日重试；首次下载失败且没有有效缓存时每分钟重试，直到获取到有效边界。

图层在后台按多边形及内部空洞裁掉境外像素，绘制时再按 HUD 形状裁剪。边界刷新成功后会从原始地图缓存重新裁剪已缓存的图层，使新增和移除的区域都能生效。没有有效边界时不显示未经裁剪的地图。

所有地图图片、响应及边界均缓存于 `output/Cache/MiniMap/`：`cloud.png`、`radar.png`、`cloud.json`、`radar.json`、`location.png`、`MiniMapChina.geojson`、`MiniMapChina.cache.json`。缓存不保存账号密钥。有效地图缓存可先显示，再根据其获取时间判断是否刷新；图层请求失败或返回数据非法时保留上一张有效图，并至少等待一分钟重试。两个图层独立处理，单个图层失败不阻止另一个显示；即使只有旧版 PNG 缓存而没有响应 JSON，也会按接口默认范围尝试恢复。HTTP 请求连接超时 8 秒、总超时 15 秒，并限制响应、图片尺寸和像素数量。

关闭模块时清理此目录（含边界及每日尝试记录），并在渲染线程释放地图纹理；关闭前尚未完成的下载不会重新写入缓存。重新启用后重新定位和下载，因此重新启用会发起新的边界请求。地图、定位、贴图及边界下载使用一个有重入保护的后台调度任务。

云控模块属性、描述与位置贴图需发布到 Ricochesta 后，客户端下次启动才能下载最新版本。
