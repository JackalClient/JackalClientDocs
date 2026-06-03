SteamStatus
蒸汽状态
分类：Misc
描述：跟踪当前 Steam 游戏状态，并可同步通知或 B 站签名。

配置项
- Exclude Non-steam Game（排除非 Steam 游戏）
  类型：布尔；默认：true。开启后会隐藏无法解析为 Steam 游戏的非 Steam 状态。
- Detect Minecraft（检测 Minecraft）
  类型：布尔；默认：true。开启后，如果客户端检测到当前前台为 Minecraft，或 Minecraft 日志解析器存在活动实例，则把游戏名按 `Minecraft` 处理，后续通知、Arraylist 额外信息与 B 站签名同步沿用 Steam 游戏相同逻辑。
- Update Cooldown (s)（更新冷却，秒）
  类型：数值；默认：60。控制状态轮询间隔。
- Bili Sign Sync（B 站签名同步）
  类型：布尔；默认：false。开启后会把当前游戏状态同步到 B 站签名。
- Bili Sign Excluded Game Names (Sep With Semicolon)（B 站签名排除游戏名，分号分隔）
  类型：字符串；默认包含 Wallpaper Engine、OBS Studio、VTube Studio、Blender、Godot Engine。填写 `Minecraft` 时也会排除由 `Detect Minecraft` 识别出的 Minecraft 状态。
- Bili Sign Sync Language（B 站签名同步语言）
  类型：组合框；默认：Chinese。控制签名文本语言。
- Bili Sign Sync Cooldown (s)（B 站签名同步冷却，秒）
  类型：数值；默认：120。控制签名写入频率。
- Notify Changes（状态变化通知）
  类型：组合框；默认：Notify。控制游戏状态变化时的提示方式。

历史更新
- v1.1.1：新增 `Detect Minecraft`，检测到 Minecraft 前台或日志实例时按游戏名 `Minecraft` 参与 SteamStatus 流程，并支持在 B 站签名排除项中排除。