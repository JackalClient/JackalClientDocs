AutoStart
开机自启
分类：Combat
描述：系统启动时自动启动本客户端。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
AutoStart（开机自启）支持注册表、计划任务、服务三种方式，并会定期检测系统实际状态自动同步模块开关与方法显示。建议优先使用注册表方式，只有在确有需要时再切换服务/计划任务。
配置项
- Async（异步）
 类型：布尔；默认：true
 说明：异步执行自启动检测与操作，减少界面阻塞。
- Check Cooldown (ms)（检查冷却 (毫秒)）
 类型：数值；默认：30000L
 说明：自动检测系统自启动状态的周期。模块会按该周期同步显示真实启用状态。
- Method（方法）
 类型：枚举；默认："Registry"
 说明：自启动实现方式：注册表、服务或计划任务。模块会自动探测系统中真实生效的方式并回写到此项。
 可选：Registry（注册表）；Service（未收录）；Scheduled Task（计划任务）
- Registry（注册表）
 类型：文本；默认："Service", "Scheduled Task"
 说明：历史兼容字段，通常无需手动修改。
- Registry Value Name（注册表值名称）
 类型：文本；默认："JackalClient"
 说明：注册表自启动值名称（`HKCU\\...\\Run`）。改名会影响旧项识别与清理。
- Service Description（服务描述）
 类型：文本；默认："Jackal Client Auto Start Service"
 说明：服务模式下的服务描述文本，仅在 `Method=Service` 时生效。
- Service Display Name（服务显示名称）
 类型：文本；默认："Jackal Client Service"
 说明：服务模式下显示名称，仅在服务方式生效。
- Service Stopping Timeout (s)（停止服务的超时时间 (秒)）
 类型：数值；默认：10
 说明：关闭服务时的最长等待时间。超时会报错并中止当前操作。
- Scheduled Task Name（计划任务名称）
 类型：文本；默认："JackalClient"
 说明：计划任务方式下的任务名称。名称变更会影响后续检测/删除旧任务。
- Extra Arguments（额外参数）
 类型：文本；默认：""
 说明：追加到自启动命令行的参数。建议只填稳定、可长期使用的参数。
 
历史更新
- 43. 将 AutoStart 开机自启默认项改为 Registry.
- 6. 添加模块 AutoStart，开机自启。

备注
如果一种模式无效就换一种。

相关命令

/autostart
切换该模块。

/autostart check
检查三个地方的开机自启是否开启：注册表、服务、计划任务。

/autostart enable [method]
/autostart add [method]
开启某种方法的开机自启。需要管理员权限。

/autostart disable [method]
/autostart remove [method]
关闭某种方法的开机自启。需要管理员权限。

相关模块


相关资料
无

