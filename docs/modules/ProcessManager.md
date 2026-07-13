# ProcessManager
进程管理器
分类：Process
描述：使用可视化管理器管理进程。

## 需求
- Unsafe：否
- Malicious：否
- 需要管理员权限：否
- 需要系统权限：否
- 需要 TrustedInstaller 权限：否
- 驱动依赖：否
- 是否 WIP：否
- 是否需要联网：否
- 版本属性：普通可用（含部分 PRO 配置项）

## 介绍
ProcessManager 是一个可视化进程管理 App，不只是“列进程”。它会周期枚举系统进程，并按你的配置动态展示列、排序、搜索、树形父子关系、生命周期高亮等信息。
实际使用建议是先定三件事：第一，控制刷新频率与最大条目，避免机器压力过高；第二，确定排序与搜索策略，先把关注进程筛出来；第三，再开启图标、命令行、CPU/GPU/内存等重字段显示。这样既稳定，也更容易定位问题。
另外，模块与 Apps 页联动：打开进程管理页时会自动进入工作状态，离开页面后会自动停用；若开启“夜间模块联动”，进入页面会同步开启 Night，离开时自动恢复。
当 ProcessManager 能读取进程路径时，会额外检查可执行文件属性：如果 exe 处于隐藏状态，该进程行会显示红色边框，悬停提示中也会标记为高风险。PRO 版右键菜单支持 Show In FileManager，可在 FileManager 中新建标签页打开该进程所在目录。列表内也可以使用 W/S 上下移动当前选中项，并自动滚动到可见范围。

## 配置项
- Async Enum（异步枚举）
类型：布尔；默认：true；作用：后台枚举进程避免界面卡顿；建议：保持开启，只有排查时序问题时再关闭。

- Auto Refresh On Open（打开时自动刷新）
类型：布尔；默认：true；作用：页面可见时按冷却周期自动刷新数据；建议：常开，配合合适的冷却值使用。

- Enum Cooldown (ms)（枚举冷却（毫秒））
类型：整数；默认：1200；作用：限制两次枚举的最小间隔；建议：卡顿就调大到 1500~3000，追求实时再逐步调小。

- Enum Max Item Count（最大枚举数量）
类型：整数；默认：4096；作用：限制参与显示与排序的进程条目上限；建议：普通环境 512~2048 通常更稳。

- Filter Critical PID <= 4（过滤 PID<=4 关键进程）
类型：布尔；默认：false；作用：启用后隐藏低 PID 关键系统进程，降低误操作概率；建议：日常管理建议开启。

- Sort By（排序依据）
类型：枚举；默认：PID；作用：决定列表主排序字段；建议：排故看资源占用用 CPU/GPU/Memory，查来源链路用 PPID/Name。可选项：PID（进程ID）、Name（名称）、Threads（线程数）、PPID（父进程ID）、CPU（CPU占用）、GPU（GPU占用）、Memory (Private)（专用内存）、Privilege（权限级别）、Owner（所有者）、Rank（进程类型）、Description（文件描述）、Profile Description（档案描述）。

- Sort Order（排序顺序）
类型：枚举；默认：Ascending；作用：控制升序/降序；建议：看高占用或异常峰值时用 Descending。可选项：Ascending（升序）、Descending（降序）。

- Process Name Color（进程名颜色模式）
类型：枚举；默认：Dynamic；作用：控制进程名的着色策略；建议：想快速看风险类型用 Type，想看活跃感用 Dynamic。可选项：Type（按类型色）、Dynamic（动态色）、命名颜色见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)。

- Process Path Color Style（路径颜色样式）
类型：枚举；默认：Static；作用：控制路径文本是否动态着色；建议：长时间观察建议 Static，减少视觉噪声。可选项：Static（静态）、Dynamic（动态）。

- Show Architecture (PRO)（显示架构（PRO））
类型：枚举；默认：Label（PRO）/Off（非 PRO）；作用：展示 x86/x64 架构信息；建议：需要混合架构排查时开启列显示。可选项：Off（关闭）、Column（单独列）、Label（名称后标签）。

- Keyword Filter（关键词筛选）
类型：文本；默认：空；作用：对进程名/路径/描述等文本进行关键字过滤，也可输入 PID 做精确筛选；建议：先从进程名关键词开始，再叠加更细条件。

- Enable Night Module（联动夜间模块）
类型：布尔；默认：true；作用：进入进程管理页时自动开启 Night，离开后自动关闭；建议：若你有自定义 Night 使用场景，按需关闭联动。

- Dynamic Column Width (PRO)（动态列宽（PRO））
类型：布尔；默认：true；作用：按当前可见数据自动调整列宽；建议：数据波动大时开启更清晰，追求固定布局时关闭。

- Show Process Icon（显示进程图标）
类型：布尔；默认：false；作用：在名称列前显示图标并启动图标读取队列；建议：性能优先保持关闭，辨识优先再开启。

- Show Profile Description（显示档案描述）
类型：布尔；默认：false；作用：展示额外档案描述字段；建议：仅在需要对比画像信息时开启。

- Show Description（显示描述）
类型：布尔；默认：true；作用：显示可执行文件描述信息；建议：常开，便于识别伪装进程。

- Show Process Privilege Tag (PRO)（显示进程权限标签（PRO））
类型：布尔；默认：true（PRO）/false（非 PRO）；作用：显示 USER/ADMIN/SYSTEM/TI/UIACCESS 等权限标签；建议：权限排查强烈建议开启。

- Simplify Command Line（精简命令行）
类型：布尔；默认：true；作用：压缩命令行显示，减少长参数占屏；建议：概览时开，需要完整参数时关。

- Highlight Process Lifecycle (PRO)（高亮进程生命周期（PRO））
类型：布尔；默认：true；作用：对新建/退出进程做时效高亮；建议：监控突发拉起与闪退场景建议开启。

- Lifecycle Highlight Duration (ms)（生命周期高亮时长（毫秒））
类型：整数；默认：3500；作用：控制生命周期高亮保留时长；建议：事件快时缩短，事件稀疏时可拉长。

- Pin Lifecycle Rows On Top（生命周期行置顶）
类型：布尔；默认：false；作用：将生命周期事件行固定在顶部便于追踪；建议：排查短时抖动进程时开启。

- Filter Lifecycle Rows By Search（按搜索词过滤生命周期行）
类型：布尔；默认：false；作用：开启后生命周期区域也受 Keyword Filter 限制；建议：目标明确时开启，做全局巡检时关闭。

- Use Tree Structure（树形结构）
类型：布尔；默认：false；作用：按父子进程关系展示并支持展开/折叠；建议：分析拉起链、注入链时开启。

- Tree Sort Strategy（树形排序策略）
类型：枚举；默认：Keep Parent First；作用：控制树形节点排序方式；建议：链路阅读优先用 Keep Parent First，想按子树指标聚类再用 Subtree Metric。可选项：Keep Parent First（父进程优先）、Subtree Metric（子树指标排序）。

- Simplified Columns (PRO)（简化列（PRO））
类型：布尔；默认：true（PRO）/false（非 PRO）；作用：在当前页自动隐藏“全为空或意义弱”的列；建议：数据密度高时开启可读性更好。

- Show PID（显示 PID）
类型：布尔；默认：true；作用：显示进程 PID 列；建议：常开。

- Show PPID（显示 PPID）
类型：布尔；默认：true；作用：显示父进程 PID 列；建议：做溯源分析时必开。

- Show Threads（显示线程数）
类型：布尔；默认：true；作用：显示线程数量；建议：排查异常线程膨胀时开启。

- Show Rank（显示进程类型）
类型：布尔；默认：true；作用：显示进程类型等级；建议：常开用于快速分层识别。

- Show Path（显示路径）
类型：布尔；默认：true；作用：显示可执行文件路径；建议：常开，用于识别伪装或异常目录。

- Show Owner（显示所有者）
类型：布尔；默认：true；作用：显示进程所属账号；建议：权限问题排查时必开。

- Show Command Line (PRO)（显示命令行（PRO））
类型：布尔；默认：true（PRO）/false（非 PRO）；作用：显示启动参数；建议：分析下载器、脚本拉起链时很关键。

- Show CPU Usage (PRO)（显示 CPU 占用（PRO））
类型：布尔；默认：true（PRO）/false（非 PRO）；作用：显示 CPU 使用率并触发采样计算；建议：性能排查时开启，常态巡检可按需关闭。

- Show GPU Usage (PRO)（显示 GPU 占用（PRO））
类型：布尔；默认：true（PRO）/false（非 PRO）；作用：显示 GPU 占用并在需要时启动 GPU 采样线程；建议：图形相关卡顿排查时开启。

- Show Memory Usage Private (PRO)（显示专用内存占用（PRO））
类型：布尔；默认：true（PRO）/false（非 PRO）；作用：显示进程私有内存；建议：内存泄漏排查时开启。

- Font Size（正文字号）
类型：整数；默认：30；作用：控制行内容字号；建议：高分屏可增大，低分辨率可减小避免拥挤。

- Header Font Size（表头字号）
类型：整数；默认：28；作用：控制表头字号；建议：与正文保持接近可读性更好。

- Row Height（行高）
类型：整数；默认：42；作用：控制每行高度并影响单页可见条数；建议：信息密集时适当减小。

- Line Gap（行间距）
类型：整数；默认：6；作用：控制文本垂直间距；建议：和行高联调，避免文字拥挤或过散。

- Wheel Sensitivity（滚轮灵敏度）
类型：浮点；默认：160.0；作用：控制纵向/横向滚动步长（按住 Shift 横向滚动）；建议：列表很长时可调高。

- Easing Speed (0~1)（缓动速度（0~1））
类型：浮点；默认：0.14；作用：控制滚动和界面过渡的追随速度；建议：想更跟手就调高，想更平滑就调低。

- Animation Duration (ms)（动画时长（毫秒））
类型：整数；默认：260；作用：控制界面动画持续时间；建议：低性能机器可适当缩短。

- Background Alpha (0~1)（背景透明度（0~1））
类型：浮点；默认：0.68；作用：控制主背景透明度；建议：按桌面背景亮度微调。

- Header Alpha (0~1)（表头透明度（0~1））
类型：浮点；默认：0.78；作用：控制表头透明度；建议：表头难辨认时适当提高。

- Row Hover Alpha (0~1)（悬停行透明度（0~1））
类型：浮点；默认：0.48；作用：控制鼠标悬停高亮强度；建议：鼠标跟踪需求高时调大。

- Row Select Alpha (0~1)（选中行透明度（0~1））
类型：浮点；默认：0.66；作用：控制选中行高亮强度；建议：需要远距离识别选中项时调大。

- Roundness（圆角度）
类型：浮点；默认：0.15；作用：控制整体圆角风格；建议：与菜单圆角保持一致更协调。

- Menu Font Size（菜单字号）
类型：整数；默认：28；作用：控制右键菜单文字大小；建议：高 DPI 环境可增大。

- Menu Line Gap（菜单行距）
类型：整数；默认：8；作用：控制菜单行间距；建议：触控或高缩放环境可适当增大。

- Menu Animation Duration (ms)（菜单动画时长（毫秒））
类型：整数；默认：200；作用：控制菜单出现动画时长；建议：追求干脆手感可调小。

- Menu Easing Speed (0~1)（菜单缓动速度（0~1））
类型：浮点；默认：0.18；作用：控制菜单动画速度；建议：和全局缓动速度保持接近。

- Menu Roundness（菜单圆角度）
类型：浮点；默认：0.18；作用：控制菜单圆角；建议：与主面板 Roundness 同步调整。

- Menu Alpha (0~1)（菜单透明度（0~1））
类型：浮点；默认：0.88；作用：控制菜单整体透明度；建议：背景复杂时提高该值。

- Open File Location Select（打开文件位置时选中目标）
类型：布尔；默认：true；作用：从进程项跳转资源管理器时自动选中对应文件；建议：保持开启，定位文件更快。

## 备注
如果你开启了 GPU 列显示或按 GPU 排序，模块会自动启动 GPU 采样线程；不用时会自动停止。
树形结构、动态列宽、图标、命令行与资源列会增加一定开销，建议按“先筛选再开重字段”的顺序使用。

## 相关命令
无

## 相关模块
- [Elevator (电梯)](./Elevator.md)
- [ForceTerminator (暴力送终)](./ForceTerminator.md)
- [AntiProcCreate (禁止创建进程)](./AntiProcCreate.md)

## 相关资料
视频科普：[揭秘 Windows「PPL」: 进程无法被终止的秘密](https://www.bilibili.com/video/BV1NkR5BpEWx)