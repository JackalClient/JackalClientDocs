# GameDetector
游戏检测器
分类：Process
描述：统一检测 Steam、非 Steam 与 Minecraft 游戏。（专业版）

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：Steam 名称解析可能需要联网
- 版本属性：PRO 专属

## 介绍
GameDetector 为 BiliSign 与 Island 提供统一的当前游戏状态。开启 BiliSign 的 `Game Display` 或 Island 的 `Show Game (PRO)` 时会自动启用本模块。

模块复用客户端维护的进程列表并按冷却周期扫描，不依赖需要额外权限的 WMI 进程启动监听，因此也能识别客户端启动前已经运行的游戏。

## 配置项
- Detect Steam Games（检测 Steam 游戏）
  类型：布尔；默认：true
  说明：使用 SteamStatus 解析 Steam 游戏；开启时自动启用专业版 SteamStatus。

- Detect Non-steam Games（检测非 Steam 游戏）
  类型：布尔；默认：true
  说明：根据 KnownGameList、内置游戏表、进程路径、窗口与文件描述综合判断。关闭时隐藏并停用全部非 Steam 检测子项。

- Detect Minecraft（检测 Minecraft）
  类型：布尔；默认：true
  说明：使用客户端已有 Minecraft 前台状态与日志实例判断；仅在 Detect Non-steam Games 开启时显示并生效。

- KnownGameList Path（KnownGameList 路径）
  类型：路径；默认：空
  说明：指定 Windows Game Bar 的 `KnownGameList.bin`。留空时自动查找；Everything 模块已启用时优先用 Everything 搜索，找到后自动填写路径。

- Detection Cooldown (s)（检测冷却，秒）
  类型：整数；默认：3
  说明：两次进程快照扫描之间的最短时间。调小会更快响应，也会增加进程路径和窗口检查频率。

- KnownGameList Search Cooldown (s)（KnownGameList 搜索冷却，秒）
  类型：整数；默认：300
  说明：自动查找失败后的重试间隔，避免频繁调用 Everything 或探测磁盘路径。

- Executable Info Cache Cooldown (s)（可执行文件信息缓存冷却，秒）
  类型：整数；默认：60
  说明：按完整路径缓存文件描述，避免重复读取可执行文件版本资源。

- Detection Score Threshold（检测分数阈值）
  类型：整数；默认：60
  说明：非 Steam 候选达到此分数后才视为游戏。

- Known Filename Weight（已知文件名权重）
  类型：整数；默认：40
  说明：文件名命中 KnownGameList 或内置游戏表时的分数。

- Visible Window Weight（可见窗口权重）
  类型：整数；默认：20
  说明：进程具有合格可见顶层窗口时的分数。

- Foreground Window Weight（前台窗口权重）
  类型：整数；默认：15
  说明：候选窗口位于前台时的附加分数。

- File Description Weight（文件描述权重）
  类型：整数；默认：5
  说明：可执行文件具有可用 FileDescription 时的附加分数。

## 调参建议
默认阈值 60 要求至少同时满足“已知文件名”和“合格可见窗口”。若发生误报，优先提高阈值；若受保护游戏无法读取文件描述，不建议单纯提高 File Description Weight。

手动填写了无效 KnownGameList 路径时，模块不会静默改用其他文件。清空该项即可恢复自动查找。

## 相关模块
- [BiliSign (B站个签)](./BiliSign.md)
- [Island (灵动岛)](./Island.md)
- [SteamStatus (Steam状态)](./SteamStatus.md)
- [Everything](./Everything.md)

## 输出配置

- `Show Game Name In Arraylist`：默认开启，在 Arraylist 的 Game Detector 附加信息中显示当前游戏名。
- `Translator`：可选 Off、Follow Global、English、Chinese、Japanese，默认 Off。Follow Global 遵循客户端语言，并处理简体、通用繁体、香港、台湾及日本字形转换。

翻译通过受控后台任务执行并按游戏名和目标语言缓存，首次检测时先显示原名，翻译完成后自动刷新 Arraylist。

## 判断开关

以下开关默认开启，关闭后对应证据不再参与过滤或评分：

- `Use KnownGameList`：读取 Windows Game Bar 的游戏文件名列表。
- `Use Built-in Game List`：使用客户端内置游戏文件名表。
- `Check Visible Window`：要求候选 PID 存在合格的可见顶层窗口。
- `Check Foreground Window`：把前台窗口状态作为评分证据。
- `Check File Description`：读取带缓存冷却的可执行文件描述。
- `Exclude Steam Install Paths`：排除 `steamapps/common` 与 `steamapps/compatdata` 下的进程。

相关路径、权重和缓存配置会根据检测来源与判断开关自动显示或隐藏。

## 诊断命令

```text
/gamedetector known [path=config|<KnownGameList.bin>]
/gamedetector refresh
/gamedetector status
```

- `known` 彩色列出配置路径或指定 KnownGameList 文件中解析到的可执行文件名。
- `refresh` 忽略检测冷却立即扫描一次；模块关闭时不会自动开启。
- `status` 彩色输出模块状态、来源、翻译模式和当前 Steam/非 Steam 候选。

## 额外进程与性能

`Extra Game Processes (Sep With Semicolon)` 默认值为 `Arknights.exe`，可使用英文分号添加多个进程文件名。额外名单仍遵循窗口、Steam 路径、文件描述及评分规则。

内置游戏表包含 Battle Of Phantom、Dark Voxel、Dark Voxel 2 和 Terra Survivor 等映射。KnownGameList 或额外名单只有进程名、且无法取得文件描述时，会按大小写边界、下划线和连字符生成可读游戏名。

检测冷却默认 60 秒。KnownGameList、内置游戏表和额外进程名单均使用小写哈希索引，扫描时按当前进程做常量时间反查，不会逐个遍历约 7000 条 KnownGameList 记录。整次扫描在受控后台任务中执行，不阻塞客户端渲染更新。
