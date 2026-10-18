# WeatherInfo

专业版 [Mini Map](MiniMap.md) 复用本模块自动定位时的 IP 经纬度查询路径，显示以当前位置为中心的全国云图和雷达图，无需开启本模块。

WeatherHUD 会复用本模块的城市、QWeather ApiKey、ApiHost 和连接超时设置，在 Web 列位于本模块上方。无需启用本模块即可持续更新天气显示；单次 WeatherInfo 查询成功后也会更新对应城市的一小时缓存。详见 [WeatherHUD](WeatherHUD.md)。
天气信息
分类：Web
描述：一些天气方面的功能。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
WeatherInfo（天气信息）用于一些天气方面的功能。
适合联网信息获取、账号联动和在线交互场景。
初次使用可优先调整：Async、Auto Console、Use Custom QWeather ApiKey。
使用前请确认网络可用及相关 API/平台账号配置完整。

## 配置项

> 配置界面说明（v1.1.7）：Custom City、QWeather ApiHost 与 ApiKey 输入项只在选择相应自定义模式后显示。
- Async（异步）
 类型：布尔；默认：true
 说明：用于控制是否异步处理。默认值 true 通常能减少主线程卡顿；若你遇到并发相关问题，可回退到更保守设置测试。
- Auto Console（自动启用控制台）
 类型：布尔；默认：true
 说明：用于选择结果反馈方式。默认值 true 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Weather Consider AQI（天气考虑空气质量）
 类型：布尔；默认：true
 说明：晴、阴或多云时，依据当前城市的空气质量，将轻度污染、中度污染、重度污染分别显示为轻度雾霾、中度雾霾、重度雾霾。与 WeatherHUD 的同名开关独立控制；关闭时仍输出 AQI 和 Air Quality，只保留原天气文字。
- Use Custom QWeather ApiKey（使用自定义和风天气Api密钥）
 类型：布尔；默认：false
 说明：这是开关型配置。默认值 false 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Custom QWeather ApiKey（自定义和风天气Api密钥）
 类型：文本；默认：""
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Use Custom QWeather ApiHost（使用自定义和风天气Api主机）
 类型：布尔；默认：false
 说明：这是开关型配置。默认值 false 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Custom QWeather ApiHost（自定义和风天气Api主机）
 类型：文本；默认：""
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- City（城市）
 类型：枚举；默认："Auto Locate"
 说明：这是选项型配置。默认值 Auto Locate 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Auto Locate（自动定位）；Custom（自定义）
- Custom City（自定义城市）
 类型：文本；默认："北京市"
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Connect Timeout (s)（连接超时时间 (秒)）
 类型：数值；默认：10L
 说明：用于控制检测/刷新/动画节奏。默认值 10L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
## 空气质量输出与缓存

查询天气时额外输出 AQI（空气质量指数）和 Air Quality（空气质量），来自 `https://api.sismotide.top/get/aqi.php`。该接口返回城市数组，使用 `Area` 精确匹配当前城市，忽略城市名两侧空白及末尾“市”；`AQI` 映射指数，`Quality` 映射空气质量。未匹配城市、字段缺失或无有效缓存时省略对应项，不输出占位符。重复城市取 `TimePoint` 较新的条目。

WeatherInfo 和 WeatherHUD 共享 `output/Cache/WeatherHUD/AirQuality/all_cities.json`，保存获取时间及各城市的 `Area`、`AQI`、`Quality`、`TimePoint`。一次下载供所有城市共用，缓存从成功获取起有效 30 分钟，重启后仍可复用。查询失败不会覆盖已有缓存，过期数据不再显示；失败后至少间隔 1 分钟重试。空气质量不写入一小时天气缓存，因而不会借用天气缓存延长其有效期。

只在匹配到有效空气质量且开启 Weather Consider AQI 时调整展示天气，不修改原始和风天气缓存。其他天气及未列出的污染等级保留原天气。

## 历史更新
- 18. 为 WeatherInfo 添加配置：
- 21. 修复了 IPAddress, IPHorror, WeatherInfo 崩溃的问题。
- 48. 重命名 Weather 模块为 WeatherInfo 天气信息。

## 备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

## 相关命令
无

## 相关模块
- [IRC (聊天室)](./IRC.md)
- [AntiRickroll (反诈骗)](./AntiRickroll.md)
- [AntiBrowser (反浏览器)](./AntiBrowser.md)
- [AntiWebpage (反网页)](./AntiWebpage.md)
- [LiveChatter (直播弹幕)](./LiveChatter.md)
- [TcpMonitor (TCP监视)](./TcpMonitor.md)
- [TcpKiller (TCP杀手)](./TcpKiller.md)
- [LiveStream (直播间)](./LiveStream.md)

## 相关资料
无
