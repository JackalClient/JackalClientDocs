CustomHUD
自定义显示
分类：Render
描述：自定义 HUD 元素。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
CustomHUD（自定义显示）用于自定义 HUD 元素。
请使用/customhud 系列命令操作。
注意，每一个元素都可以用 HudEditor 拖动。

配置项
- Global Scale（全局缩放）
 类型：数值；默认：1.0f
 说明：这是数值型配置。默认值 1.0f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Default Font Size（默认字号）
 类型：数值；默认：30
 说明：用于控制文本可读性。默认字号 30 适合多数分辨率；高分屏可适当加大，低分辨率建议减少以免拥挤。
- Hide HUD When Menu On（打开菜单时隐藏HUD）
 类型：布尔；默认：true
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Shell Mover Speed（命令行移动者速度）
 类型：数值；默认：10
 说明：这是数值型配置。默认值 10 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Elements（元素）
 类型：文本；默认："[]"
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
历史更新
- 6. 添加新模块：CustomHUD，自定义HUD元素。可以使用 /customhud 命令进行各方面操作。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
/customhud
切换自定义HUD显示状态。

/customhud add &lt;json...&gt;
/customhud add text [text...]
添加自定义HUD元素。
JSON 格式支持的键值有：
!表示必填项，其中 Color 和 ColorPrefab 两者选一个
!string	Type: 类型，可以是 text
!int		X
!int		Y
!string	Text: 文本内容。
string	Format: 可自定义格式。默认为 %s
!string	Color: 具体某种颜色。
!string	ColorPrefab: 颜色预设，支持动态
int		Size: 字号。
bool	Shadow: 是否绘制阴影。 默认开启。
bool	Stroke: 是否描边。默认关闭。
float 	Opacity: 不透明度，默认为 1.0
float 	OpacityMin: 不透明度最小值
float 	OpacityMax：不透明度最大值
int		OpacityDuration: 不透明度正弦变化的周期时间 (毫秒)
bool	WaveColor: 是否波动颜色。 
int		UpdateCooldown: 文本更新周期时间 (毫秒)；默认 2000ms
string	TextCache: 文本目前的内容。
int		LastUpdate: 文本上一次更新的时间。
	

/customhud list
枚举所有自定义HUD元素。

/customhud move &lt;id&gt; &lt;x&gt; &lt;y&gt;
移动指定的自定义HUD元素。

/customhud mover
交互式移动界面。

/customhud refresh
刷新缓存。

/customhud all
输出所有元素的JSON。

/customhud set &lt;id&gt; &lt;json...&gt;
设置某项自定义HUD元素。

/customhud modify &lt;id&gt; &lt;key&gt; &lt;value...&gt;
设置某项自定义HUD元素的一对键值。

/customhud remove &lt;id&gt;
移除指定自定义HUD元素。

/customhud clear
清空自定义HUD元素。

相关模块
- [Arraylist (模块列表)](./Arraylist.md)
- [HudEditor (HUD编辑器)](./HudEditor.md)

相关资料
无

