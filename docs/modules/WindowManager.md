# Window Manager
窗口管理器
分类：Window
描述：使用可视化窗口列表查看、搜索、排序并管理系统顶级窗口。

## 需求
- 安全级别：列表查看为常规操作；结束进程、冻结、隐藏和隐私设置会影响目标程序
- 权限需求：普通查看无需管理员；操作更高权限或受保护窗口时可能受系统权限限制
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用；带 PRO 标记的列、布局与 Z 序段能力需要 PRO

## 介绍

Window Manager 是 Apps 中的窗口管理应用。它以二维表展示顶级窗口的标题、进程、类名和属性，支持列配置、排序、搜索以及窗口右键操作。进入窗口管理页时模块自动启用，离开页面后自动停用；开启 `Enable Night Module` 时，还会与 Night 联动，并在离开时按原状态恢复。

首次打开时优先收集前台窗口和鼠标所指窗口，再快速枚举其余顶级窗口，后台逐项补全资料与图标。后续刷新使用更完整的窗口枚举路径；窗口已经销毁、权限不足或暂时无法读取资料时，部分字段可能为空。

### 列表交互

- 点击列标题切换排序，排序列和方向会保存；拖动列标题可调整列顺序，拖动列边界可调整宽度。
- 鼠标滚轮纵向滚动；按住 Shift 滚轮可横向滚动，底部也提供横向滚动条。
- 按 F5 手动刷新，受 `Manual Refresh Cooldown (ms)` 限制；开启自动刷新后按枚举冷却刷新列表。
- 单击选择窗口，右键打开操作菜单；菜单打开时按 Esc 可关闭菜单。
- `Attributes` 展示窗口属性，其中 `Hidden` 表示隐藏状态，`AntiCapture` / `BlackCapture` 表示显示亲和相关状态。隐藏、不可见或被系统 Cloak 的窗口会降低显示透明度，不能仅凭列表中的有无判断程序是否正在运行。

## 搜索栏

窗口列表顶部提供与 ProcessManager 同风格的搜索栏，支持鼠标定位光标、拖选、复制粘贴和清空。搜索即时生效，匹配不区分大小写；只查询进程名、窗口标题、窗口类名，不查询 PID、路径、描述或窗口属性。匹配关键词以粉色高亮，过滤后的行选择、右键菜单和滚动范围保持一致。

## 配置项

> 配置界面说明（v1.1.7）：配置项按数据、枚举、布局、菜单和 Night 联动分组；窗口列表的列标题显示开关已合并为 `Columns` 多选项。

### 数据与排序

| 配置项 | 默认值 | 说明 |
| --- | --- | --- |
| Columns | Attributes、Process ID、Process Name、Window Class Name、Window Icon | 选择显示的附加列；还可选择 ExStyle、Process Description、Process Privilege (PRO)、Style、Window Z-Order Band Name (PRO)。窗口标题始终用于标识目标。 |
| Sort By | Window Title | 初始排序字段；可选 Window Title、Process Name、Process ID、Process Privilege、Window Class Name、Process Description、Z-Order Band、Style、ExStyle。已保存的表头排序优先使用。 |
| Sort Order | Ascending | 初始排序方向，可选 Ascending / Descending。 |
| Pin Topmost Or SpecialBand On Top (PRO) | Pro：true，Free：false | 将置顶窗口或特殊 Z 序段窗口排列在前面，不等同于修改目标窗口的实际置顶状态。 |
| Put Invisible Below Visible | true | 将不可见窗口排在可见窗口之后。 |
| Process Name Rank Color | true | 按进程 Rank 为进程名着色。 |

旧配置中的 `Show Attributes`、`Show Process ID`、`Show Window Icon` 等独立显示开关保留兼容，界面统一通过 `Columns` 选择，不需要逐项维护旧开关。

### 枚举与刷新

| 配置项 | 默认值 | 说明 |
| --- | --- | --- |
| Anti Suicide | true | 隐藏对客户端自身主窗口与控制台的 Close、EndTask、End Process、Freeze 等危险菜单项，避免误结束或冻结自己。 |
| Auto Refresh On Open | true | 窗口管理页可见时按枚举冷却自动刷新；关闭后仍会进行首次加载，可用 F5 手动更新。 |
| Enum Cooldown (ms) | 1200 | 自动枚举的最小间隔，单位毫秒。 |
| Enum Max Item Count | 4096 | 窗口枚举数量上限；条目过多时可适当降低，以减轻资料查询和绘制压力。 |
| Manual Refresh Cooldown (ms) | 5000 | F5 手动刷新的最小间隔，单位毫秒。 |
| Output Windows List | 命令按钮 | 执行 `/windows`，在控制台输出窗口列表。 |

枚举和资料补全在后台执行，不应将刷新间隔理解为每个窗口都能立即取得完整资料的保证。默认配置还保留 `Async Enum` 兼容键；当前枚举流程本身使用后台任务。

### 布局与外观

| 配置项 | 默认值 | 说明 |
| --- | --- | --- |
| Font Size | 28 | 列表正文字号。 |
| Header Font Size | 26 | 列标题字号。 |
| Row Height | 40 | 每行高度。 |
| Background Alpha (0~1) | 0.68 | 列表背景不透明度。 |
| Header Alpha (0~1) | 0.78 | 表头背景不透明度。 |
| Row Hover Alpha (0~1) | 0.48 | 鼠标悬停行的背景不透明度。 |
| Row Select Alpha (0~1) | 0.66 | 选中行的背景不透明度。 |
| Roundness | 0.15 | 列表圆角比例。 |
| Dynamic Column Width (PRO) | Pro：true，Free：false | 根据当前显示内容调整列宽；Attributes 列可按当前页内容收缩。 |
| Wheel Sensitivity | 160 | 滚轮滚动距离，随 GUI 缩放。 |
| Easing Speed (0~1) | 0.14 | 列表与横向滚动的缓动速度。 |

### 右键菜单外观

| 配置项 | 默认值 | 说明 |
| --- | --- | --- |
| Menu Font Size / Menu Line Gap | 28 / 8 | 菜单字号与行间距。 |
| Menu Animation Duration (ms) | 200 | 菜单进退场动画时长。 |
| Menu Easing Speed (0~1) | 0.18 | 菜单位置与尺寸变化的缓动速度。 |
| Menu Basic Alpha (0~1) | 0.8 | 菜单整体不透明度。 |
| Menu Background Darkness (0~1) | 0.8 | 菜单背景压暗程度。 |
| Menu Background Color 1 / Menu Background Color 2 | 16;78;139;220 / 69;139;0;220 | 菜单背景的两种配色。 |
| Menu Outline Color | 255;185;15;255 | 菜单描边颜色。 |
| Menu Round Corners / Menu Roundness | true / 0.18 | 圆角开关与圆角比例；关闭圆角时隐藏比例配置。 |
| Menu Shadow | true | 菜单阴影开关，关闭时隐藏阴影附属项。 |
| Menu Shadow Color | Black | 阴影颜色。 |
| Menu Shadow Opacity (0~1) / Menu Shadow Thickness | 0.5 / 30 | 阴影不透明度与厚度。 |

### Night 联动

| 配置项 | 默认值 | 说明 |
| --- | --- | --- |
| Enable Night Module | true | 打开窗口管理页时联动 Night；离开时只撤销 Apps 自己开启的联动，不关闭原本已开启的 Night。 |
| Night Link Animation | Fast Fade | 可选 Off、Fast Fade、Use Night Effect。 |
| Night Link Animation Duration (ms) | 120 | 联动动画时长；动画为 Off 时隐藏。 |

## 窗口右键操作

- 关闭与结束：Close、EndTask、End Process 分别请求关闭、结束窗口任务或结束所属进程；结束进程可能同时关闭该进程的其他窗口。
- 显示与焦点：隐藏/显示、聚焦、最大化、最小化、置顶/取消置顶，以及跳转到 ProcessManager 中的所属进程。
- 隐私：设置隐身、黑屏或取消隐私，同步维护 PrivateWindow 的窗口状态；效果受目标窗口和系统支持限制。
- 样式：重绘窗口、设置圆角、背景样式、不透明度和暗色模式；专业版可修改 Z 序段。部分效果需要系统与目标程序支持。
- 交互与信息：Freeze / Unfreeze 切换窗口可交互状态；Lock Target 将窗口设为客户端操作目标；可复制窗口标题、类名和进程路径。

`Anti Suicide` 只保护客户端自己的主窗口与控制台，不会自动保护其他系统关键窗口。对陌生窗口应先核对标题、类名、进程名和 PID，再执行修改操作。

## 历史更新

- 新增 Window Manager 应用与模块，提供窗口列表、排序与列配置、右键操作、属性与样式展示以及异步图标加载。
- 优化首次快速枚举与后续完整枚举；增加跳转进程、隐私、重绘、圆角、背景、不透明度和暗色模式操作。
- 增加 `AntiCapture` / `BlackCapture` 属性标签，修复部分进程名显示与隐私状态同步问题。
- 增加手动刷新冷却与 `Anti Suicide`，优化隐藏窗口排序、图标回退和置顶条目高度限制。
- v1.1.7：配置按数据、枚举、布局、菜单和 Night 联动分组；列显示项合并为 `Columns`。

## 备注

- 枚举到窗口不代表拥有修改它的权限；高权限、受保护或已销毁的窗口可能拒绝操作。
- 隐藏窗口、冻结窗口或结束所属进程可能导致界面失去响应、未保存数据丢失或系统功能异常，不建议对系统关键窗口试验。
- 隐私功能不是访问控制或数据加密；需要确认显示亲和状态时，可使用 `/privatewindow check <hwnd>`。

## 相关命令

- `/windows`：枚举顶级窗口并在控制台输出信息。
- `/window [hwnd]`：将窗口句柄存入 `it`；可用 `jc_hwnd`、`jc_hwnd_console` 指定客户端窗口。
- `/findwindow <hwnd/title/class/procname/pid>`：按句柄、标题、类名、进程名或 PID 查找窗口。
- `/privatewindows`：列出客户端维护的隐私窗口。
- `/privatewindow check <hwnd>`：检查目标窗口的显示亲和状态。

## 相关模块

- [ProcessManager（进程管理器）](./ProcessManager.md)
- [WindowMaster（窗口大师）](./WindowMaster.md)
- [PrivateWindow（隐私窗口）](./PrivateWindow.md)
- [Night（夜间）](./Night.md)
- [AltSnap（Alt Snap）](./AltSnap.md)
