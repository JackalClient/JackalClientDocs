TimeManager
时间管理
分类：Misc
描述：调整系统时间及其流速。

需求
- 安全级别：常规模块
- 权限需求：管理员
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
TimeManager（时间管理）用于调整系统时间及其流速。
建议先以管理员身份运行客户端。
初次使用可优先调整：Mode、Sync Method (Disabling Freeze)、Sync Method (Disabling Set)。

配置项
- Async（异步）
 类型：布尔；默认：true
 说明：用于控制是否异步处理。默认值 true 通常能减少主线程卡顿；若你遇到并发相关问题，可回退到更保守设置测试。
- Mode（模式）
 类型：枚举；默认："Offset Toggle"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 Offset Toggle ，确认稳定后再逐项切换比较效果。
 可选：Freeze（冻结）；Set Once（单次设置时间点）；Offset Once（单次偏移）；Offset Toggle（偏移切换）；Online Sync Once（单次联网同步）；Online Sync Keep（保持联网同步）；Set Accelerated（时间点变速）；Offset Accelerated（偏移变速）；Accelerated（纯变速）
- Sync Method (Disabling Freeze)（同步方式 (禁用冻结时)）
 类型：枚举；默认："Memory"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 Memory ，确认稳定后再逐项切换比较效果。
 可选：Off（关闭）；Memory（内存）；Web（网络）
- Sync Method (Disabling Set)（同步方式 (禁用时间点模式时)）
 类型：枚举；默认："Memory"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 Memory ，确认稳定后再逐项切换比较效果。
 可选：Off（关闭）；Memory（内存）；Web（网络）
- Sync Method (Disabling Offset)（同步方式 (当禁用偏移模式时)）
 类型：枚举；默认："Config"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 Config ，确认稳定后再逐项切换比较效果。
 可选：Off（关闭）；Config（配置）；Web（网络）
- Online Sync Cooldown (ms)（联网同步冷却 (毫秒)）
 类型：数值；默认：30000L
 说明：用于控制检测/刷新/动画节奏。默认值 30000L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Acceleration Speed（加速速率）
 类型：数值；默认：1.0f
 说明：这是数值型配置。默认值 1.0f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Set Year（指定年份）
 类型：数值；默认：2025
 说明：这是数值型配置。默认值 2025 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Set Month（指定月份）
 类型：数值；默认：2
 说明：这是数值型配置。默认值 2 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Set Day（指定日）
 类型：数值；默认：28
 说明：这是数值型配置。默认值 28 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Set Hour（指定时）
 类型：数值；默认：12
 说明：这是数值型配置。默认值 12 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Set Minute（指定分）
 类型：数值；默认：0
 说明：这是数值型配置。默认值 0 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Set Second（指定秒）
 类型：数值；默认：0
 说明：这是数值型配置。默认值 0 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Offset Year（偏移年）
 类型：数值；默认：0
 说明：这是数值型配置。默认值 0 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Offset Month（偏移月）
 类型：数值；默认：0
 说明：这是数值型配置。默认值 0 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Offset Day（偏移日）
 类型：数值；默认：0
 说明：这是数值型配置。默认值 0 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Offset Hour（偏移小时）
 类型：数值；默认：12
 说明：这是数值型配置。默认值 12 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Offset Minute（偏移分钟）
 类型：数值；默认：0
 说明：这是数值型配置。默认值 0 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Offset Second（偏移秒钟）
 类型：数值；默认：0
 说明：这是数值型配置。默认值 0 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
历史更新
- 2. 尝试修复 TimeManager 模块设置时间有时会发生错误的问题。添加时间修改数据的持久化。
- 3. 为 TimeManager 的 Mode 模式添加：Accelerated，仅加速模式。
- 15. 添加模块： TimeManager (时间管理大师)

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令

/timestamp [timestamp=now]
/time [params.../timestamp=now]
查看当前时间戳及其字符串形式。/time 还可以有很多子命令。

/time sync [method=web/memory]
同步系统时间。需要管理员权限。web表示用网络时间同步，memory表示用内存时间同步。使用该命令不会修改 TimeManager 模块的开关状态。

/time restore [method=web/memory]
关闭 TimeManager 模块后再执行 /time sync。需要管理员权限。

/time set <timestamp/string>
/time set &lt;year&gt; &lt;month&gt; &lt;day&gt; &lt;hour&gt; &lt;minute&gt; &lt;second&gt;
/time set &lt;hour&gt; &lt;minute&gt; &lt;second&gt;
/time set &lt;hour&gt; &lt;minute&gt;
/time setonce <timestamp/string>
/time setonce &lt;year&gt; &lt;month&gt; &lt;day&gt; &lt;hour&gt; &lt;minute&gt; &lt;second&gt;
/time setonce &lt;hour&gt; &lt;minute&gt; &lt;second&gt;
/time setonce &lt;hour&gt; &lt;minute&gt;
设置系统时间。需要管理员权限。set 会打开 TimeManager 模块且自动修改模块配置使得符合你的命令参数。而 setonce 为单次操作，不会打开 TimeManager 模块。注意 &lt;string&gt; 参数表示你可以用字符串形式修改时间，包括下面的格式：
YYYY/MM/DD
YYYY/MM/DD HH:mm:SS
YYYY/MM/DD HH:mm
MM/DD
MM/DD HH:mm:SS
MM/DD HH:mm
HH:mm:SS
HH:mm

/time memory
显示当前 TimeManager 存储到内存中的修改数据。

/time speed [value]
/time accelspeed [value]
查看或设置 TimeManager 的加速倍率（Acceleration Speed）。不指定 value 时仅显示当前模式和加速倍率。

/time accelerate [speed]
/time accel [speed]
切换 TimeManager 到 Accelerated 模式并启用模块。需要管理员权限。该模式只修改时间流速，不直接设置固定时间点和偏移量。
也可以不填 speed，这时使用 TimeManager 配置中的 Acceleration Speed。
如果当前模式属于 Offset 系列，则会切换到 Offset Accelerated；如果属于 Set 系列，则会切换到 Set Accelerated。

/time offset &lt;expressions...&gt;
/time offsetonce &lt;expressions...&gt;
对系统时间进行偏移。需要管理员权限。offset 会打开 TimeManager 模块且自动修改模块配置使得符合你的命令参数。而 offsetonce 为单次操作，不会打开 TimeManager 模块。expressions 表达式需要符合下面的格式：
单位操作符数值
单位包括：year=yr=y, month=mon, day=d, hour=hr=h, minute=min=m, second=sec=s
操作符包括：+ - =  （其中如果使用=，则用算法将其转为+或-）
数值就是纯数字。示例：/time offset hr+1 m-10 sec=50   表示时间+1小时，-10分钟，秒设为50

相关模块
- [TimeDisplay (时间显示)](./TimeDisplay.md)
- [OnlineTime (在线时间)](./OnlineTime.md)

相关资料
无

