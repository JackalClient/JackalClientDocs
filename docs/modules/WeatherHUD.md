# WeatherHUD

天气显示  
分类：Web（位于 WeatherInfo 上方）

专业版 [Mini Map](MiniMap.md) 位于本模块上方，用于显示全国云图和雷达图。

显示和风天气的实时观测数据。复用 WeatherInfo 的城市、自动定位、QWeather ApiKey、ApiHost 和连接超时设置，无需打开 WeatherInfo 模块开关。可运行一次 WeatherInfo 手动更新缓存。

## 属性

- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：无
- 版本特性：普通可用

## 配置项

| 配置项 | 默认值 | 说明 |
| --- | --- | --- |
| Components | Temperature、Feels Like、Weather、Weather Icon | 多选显示字段，天气描述与图标可独立开关 |
| Weather Consider AQI | true | 晴、阴或多云时，按轻度、中度、重度污染显示对应雾霾文字、图标及 Weather 背景；与 WeatherInfo 的同名开关独立控制 |
| Style | Card | Card：大温度与天气图标；省市显示在右上角；Compact：紧凑列表；Table：字段、数值二维表格。后两种布局的图标居中显示在列表或表格上方 |
| Scale | 1.0 | 整体缩放，可在 HUD 编辑器调整位置和大小 |
| Background | true | 显示背景 |
| Background Mode | Weather | Weather：按天气生成分层曲线；Color：使用指定颜色 |
| Background Moving Speed | Medium | 仅开启背景且选择 Weather 模式时显示，提供 Slow、Medium、Fast 三档；切换速度时背景位置连续变化 |
| Background Color | Black | 仅 Color 模式显示，支持统一颜色选择器 |
| Background Opacity (0~1) | 0.5 | 背景不透明度 |
| Hide HUD When Sunny | false | **开启后在晴天淡出背景**，含晴朗夜间；文字和图标继续显示。旧晴天开关键名自动兼容 |
| Text Opacity (0~1) | 1.0 | 根据背景亮度选择深色或浅色文字，使用客户端通用文本绘制；随通用 MSDF 设置保持缩放清晰度 |
| Text Shadow | false | 为全部 HUD 文字开启阴影，与背景 Shadow 独立控制 |
| Give Way to Mouse | true | 鼠标经过时整块 HUD 平滑淡出至原不透明度的 20%，移开后恢复；HUD 编辑时暂停避让 |
| Hide In Fullscreen Window | true | 前台窗口全屏时隐藏整个 HUD，HUD 编辑器开启时保留显示 |
| Hide When Menu On | false | ClickGUI 菜单打开时隐藏整个 HUD，HUD 编辑器开启时保留显示 |
| Shadow | true | 背景阴影，随背景淡出 |
| Shadow Opacity (0~1) | 0.5 | 阴影不透明度 |
| Shadow Thickness | 30.0 | 阴影厚度，随整体缩放 |
| Update Cooldown (min) | 15.0 | 最低 5 分钟，网络请求在后台执行 |
| X Rate / Y Rate | 0.8 / 0.1 | 相对屏幕位置，绘制时尽量保持面板在屏幕内 |

开启 HUD Blur 且 Background 为 true、Background Opacity 小于 1.0 时，Weather 和 Color 两种背景均在底层应用圆角局部模糊，兼容 Legacy 与 Experimental 后端。模糊跟随晴天背景淡出和鼠标避让；关闭背景或将不透明度设为 1.0 时不应用模糊。

Components 提供 Province、City、Feels Like、Weather、Weather Icon、Temperature、Humidity、Precipitation (Last Hour)、Air Pressure、Observation Time、Wind Direction、Wind Speed、Visibility、Cloud Cover、Dew Point、AQI、Air Quality。AQI 和 Air Quality 默认不勾选；未匹配或失效时省略这两项，其他缺失字段显示破折号。取消所有字段后隐藏 HUD；可只选择 Weather Icon 显示图标。

Card 中 Province、City 使用与左上角 Weather 相同的字号，右对齐显示在右上角；同时选择时按“省份 城市”排列，以一个空格分隔，不重复占用下面的详情列表。

Card 中 AQI 居中显示在天气图标上方，格式为 `AQI  XXX`，字号为左上角天气文字的 70%；不显示图标时仍保留该位置。Air Quality 显示在下方详情表格。Compact 和 Table 的两项均作为普通字段显示。

Observation Time 使用 `FormatTimeDifference` 显示观测时间距离当前时间的差值。温度、体感温度与露点使用 °C，风速 km/h，能见度 km，气压 hPa，降水量 mm，湿度与云量使用百分比。

Weather 背景使用稳定的天气配色：晴天暖色、雨天冷色、阴云灰蓝、雪天浅蓝、雾霾沙尘灰褐。曲线和颜色根据城市与天气生成，观测时间更新但天气相同时不重新随机生成。曲线按 Background Moving Speed 缓慢平移：Slow、Medium、Fast 的运动相位速度分别为 0.006、0.03、0.09 弧度/秒，默认 Medium；速度切换时保持当前相位，背景隐藏或选择 Color 时暂停移动。天气变化时，背景以 1000 毫秒交叉淡入淡出，不改变配置的不透明度。Color 模式保持所选颜色。

## 获取与缓存

启用时加载所选城市的缓存并尝试获取新数据，此后按冷却时间刷新。修改 WeatherInfo 城市或接口设置会触发重新获取。缓存位于 `output/Cache/WeatherHUD/city_<省份>_<城市>.json`，文件名中的省市使用 UTF-8 URL 编码。自动定位通过 `auto-last.json` 记住最近城市。

自动定位依赖 IPAddress 的位置来源云控。删除 `output/Cache/ModuleMetadata/IPAddressSources.json` 后，下次正常启动会在应用代理后重新下载；下载或完整校验失败且无旧缓存时，无法取得新位置。遇到 Chain 没有启用来源的提示，应检查 CLIENT.LOG 中的 `[ModuleMetadata]` 记录，修正并发布云控数据后重启。

缓存有效期从成功获取时间起计算一小时。失败时继续显示有效缓存，缓存失效且无法获取数据时隐藏 HUD。缓存不包含 API 密钥；成功的 WeatherInfo 单次查询也会更新对应城市缓存。

空气质量来源为 `https://api.sismotide.top/get/aqi.php`。接口一次返回城市数组，按 `Area` 精确匹配当前城市（忽略末尾“市”和两侧空白），`AQI` 与 `Quality` 分别对应 AQI 和 Air Quality。两个模块共享 `output/Cache/WeatherHUD/AirQuality/all_cities.json` 的 30 分钟缓存，重启仍可复用；过期或城市不存在时隐藏这两项，保留其他有效天气。失败后至少间隔 1 分钟重试。此缓存独立于一小时天气缓存，更新不受 Update Cooldown 限制。

开启 Weather Consider AQI 时，晴、阴或多云的轻度污染、中度污染、重度污染分别显示为轻度雾霾、中度雾霾、重度雾霾，优先下载 `img/runtime/轻度雾霾.png`、`中度雾霾.png`、`重度雾霾.png`，天气背景使用雾霾配色并沿用 1000 毫秒过渡。AQI 失效、关闭开关或其他污染等级时恢复原始天气与昼夜图标；空气质量变化只影响展示，不修改和风天气缓存。

## 天气图标

勾选 Weather Icon 时，客户端优先按天气名称或下述昼夜图标名称，从 Ricochesta 的 `main` 分支下载：

```text
img/runtime/<天气名称>.png
```

例如 `img/runtime/阴.png`、`晴.png`、`小雨.png`。缺少同名文件时，根据 `now.icon` 回退到现有的天气类别图片，例如多云使用 `阴.png`、雷阵雨使用 `阵雨.png`；最后兼容旧路径 `img/runtime/weather/<编号>.png`。建议准备透明背景的正方形 PNG。客户端保持图片比例，支持最大 1024 × 1024、文件最大 1 MiB。

本地保存在 `output/Cache/WeatherHUD/Icons/`，按天气名称和编号区分缓存。图标首次用到时下载，失败后至少间隔 5 分钟重试；尚未准备图标时仍显示已选择的天气文字。纹理上传时生成 mipmap 并启用三线性过滤。天气或时段变化时旧图标淡出，新图标加载完成后淡入，过渡时长为 1000 毫秒。新图标需要提交并推送云端后才能下载。

Card、Compact 和 Table 均根据背景亮度与背景可见度自动调整天气图标的 Tint：浅色背景上平滑调暗图标，深色背景或隐藏背景时恢复原色；Weather 模式同时考虑四层配色及天气过渡。Tint 保留 PNG 的透明度、色彩比例和现有图标淡入淡出，鼠标避让只控制显示不透明度。

## 昼夜与晨昏图标

图标时段按客户端本地时钟判断，天气文字和背景按天气显示；Weather Consider AQI 生效时优先使用雾霾图标。晴天夜间使用 `夜晚.png`，多云和阴天夜间均使用 `多云夜晚.png`；白天仍使用原天气名称。晴天日出、日落均使用 `日落.png`，日落与夜晚之间使用 `月出.png`，夜晚与日出之间使用 `月落.png`。这里的月出、月落是晨昏衔接效果，不使用接口中的实际月亮升落时间。

客户端请求 `https://sunrisetime.co/api/v1/times?city=<城市英文slug>&date=<本地YYYY-MM-DD>`，例如 `city=shanghai`。中文城市复用拼音转换并去除空格；英文多词城市以连字符分隔。该接口无需密钥，每个 IP 每天限 100 次，城市不受接口支持或网络失败时使用默认时段。

仅在有有效天气数据且选中 Weather Icon 时查询。结果按省市保存至 `output/Cache/WeatherHUD/Solar/city_<省份>_<城市>.json`，省市使用 UTF-8 URL 编码。文件记录 `api_city`、`attempted_day`、`fetched_at` 与原始 `response`；同一城市当天成功或失败均只尝试一次，跨天后重新查询，重启不会重复请求。共享缓存的客户端通过进程锁协调，`Solar/daily_requests.json` 限制每天最多 100 次尝试；失败也计入次数。此限制只覆盖共享此缓存的客户端，其他程序或其他缓存目录的请求仍会占用接口的 IP 配额。

返回对象必须含匹配请求的 `date` 和 `sun.sunriseIso`、`sun.sunsetIso`。ISO 时间支持 `Z`、显式时区偏移与毫秒，例如 `2026-10-08T21:53:33.955Z`；客户端转换为本地时钟。`sun.dawnIso` 至 `goldenHour.morningEndIso` 为日出效果区间，`goldenHour.eveningStartIso` 至 `sun.sunsetIso` 为日落效果区间；日落至 `sun.duskIso` 为月出效果区间，黎明前 30 分钟至黎明为月落效果区间，其间为夜晚。可选晨昏字段缺失时，以日出、日落前后 30 分钟补齐。

无有效当天查询结果时使用以下本地时间区间（起点包含、终点不包含）：

| 时间 | 晴天图标 | 多云或阴天图标 |
| --- | --- | --- |
| 04:00–05:30 | 月落 | 原天气名称 |
| 05:30–06:30 | 日落（日出效果） | 原天气名称 |
| 06:30–17:30 | 原天气名称 | 原天气名称 |
| 17:30–18:30 | 日落 | 原天气名称 |
| 18:30–19:00 | 月出 | 原天气名称 |
| 19:00–次日04:00 | 夜晚 | 多云夜晚 |

## 接口字段

沿用 WeatherInfo：城市查找获取 location ID，随后请求 `/v7/weather/now?location=<ID>&key=<ApiKey>`，返回 `code` 为字符串 `"200"` 时读取 `now`。字段对应关系如下：

| now 字段 | 显示内容 |
| --- | --- |
| obsTime | Observation Time，ISO 8601 时间，支持分钟、秒及显式时区偏移 |
| temp / feelsLike / text / icon | 温度 / 体感温度 / 天气描述 / 图标编号 |
| humidity / precip / pressure | 湿度 / 过去一小时降水量 / 气压 |
| windDir / windSpeed / vis | 风向 / 风速 / 能见度 |
| cloud / dew | 云量 / 露点 |

Province、City 来自自动定位或 WeatherInfo 自定义城市；缺少可选天气字段不会影响其他字段显示。
