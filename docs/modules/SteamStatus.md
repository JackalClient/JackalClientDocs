# SteamStatus
蒸汽状态
分类：Misc
描述：跟踪当前 Steam 游戏状态，并为 GameDetector 提供 Steam 游戏来源。
PRO 专有

## 配置项
- Exclude Non-steam Game（排除非 Steam 游戏）
  类型：布尔；默认：true。开启后会隐藏无法解析为 Steam 游戏的非 Steam 状态。
- Update Cooldown (s)（更新冷却，秒）
  类型：数值；默认：60。控制状态轮询间隔。
- Notify Changes（状态变化通知）
  类型：组合框；默认：Notify。控制游戏状态变化时的提示方式。

## 历史更新
- v1.1.1：新增 `Detect Minecraft`，检测到 Minecraft 前台或日志实例时按游戏名 `Minecraft` 参与 SteamStatus 流程，并支持在 B 站签名排除项中排除。

## 相关命令

/steam &lt;args...&gt;
Steam相关命令。

/steam games
输出 Steam 注册表 Apps 下的游戏二维表，包含 AppID、中文名、是否安装、是否运行、是否更新

/steam installed
输出 Steam 注册表 Apps 下的已安装游戏二维表，包含 AppID、中文名、是否安装、是否运行、是否更新

/steam running
输出 Steam 注册表 Apps 下的正在运行游戏二维表，包含 AppID、中文名、是否安装、是否运行、是否更新

## 相关资料
- [【神秘功能】将你的Steam游戏状态展示到B站个性签名](https://www.bilibili.com/video/BV1UtV564Eqi)