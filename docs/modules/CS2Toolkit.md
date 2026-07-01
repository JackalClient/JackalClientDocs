# CS2 Toolkit

CS2工具箱
分类：Control
描述：监听 CS2 GSI 事件并发送通知或播放音效。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否，仅监听本机 `127.0.0.1`
- 开发状态：第一版
- 版本属性：免费版可用

## 介绍
`CS2 Toolkit` 通过 CS2 的 Game State Integration 机制接收游戏状态推送。模块会在本机启动一个 HTTP 监听器，并按配置生成 `gamestate_integration_jackalclient.cfg`，让 CS2 将玩家状态、回合、炸弹和武器数据 POST 到 Jackal Client。

第一版只包含 GSI 通知系列功能，不包含外部 Python 工具箱中的文件替换类能力。当前支持击杀、武器击杀、刀杀、死亡、炸弹安放、炸弹拆除、切枪和换弹事件，可分别输出到通知、弹幕、Actionbar、Title、朗读、控制台或 WinToast，也可播放自定义音效路径。

## 冲突检测
模块会检测 CS2 配置目录下是否存在 `gamestate_integration_cs2toolkit.cfg`。该文件属于 `clover-233/CS2Toolkit` Python 工具箱；如果同时存在，两边可能争用 GSI 端口或重复处理事件。

检测到冲突时，Jackal Client 会警告并关闭 `CS2 Toolkit` 模块。模块启用时会立即检查一次，运行期间每 5 分钟按 `Conflict Check Cooldown (ms)` 再检查一次。

## 配置项
- `Auto Detect CS2 Path`
  类型：布尔；默认：true
  说明：自动从 Steam 安装目录和库目录查找 CS2。
- `CS2 Path`
  类型：字符串；默认：空
  说明：手动指定 CS2 安装目录，例如 `...\Counter-Strike Global Offensive`。
- `Auto Create GSI Config`
  类型：布尔；默认：true
  说明：启用后自动写入 Jackal Client 自己的 GSI 配置文件。
- `GSI Host`
  类型：字符串；默认：`127.0.0.1`
  说明：本机监听地址，通常不需要修改。
- `GSI Port`
  类型：数值；默认：3000
  说明：GSI HTTP 监听端口。
- `GSI Auto Port Fallback`
  类型：布尔；默认：true
  说明：端口被占用时尝试使用后续端口。
- `Conflict Check Cooldown (ms)`
  类型：数值；默认：300000
  说明：运行期间冲突 cfg 检查间隔。
- `Enable Kill Events` / `Enable Death Events` / `Enable Bomb Events`
  类型：布尔；默认：true
  说明：控制击杀、死亡和炸弹事件是否触发。
- `Enable Weapon Switch Events` / `Enable Reload Events`
  类型：布尔；默认：false
  说明：控制切枪和换弹事件是否触发，默认关闭以减少通知噪音。
- `Kill Sound Path` / `Death Sound Path` / `Bomb Planted Sound Path`
  类型：字符串；默认：空
  说明：事件音效文件路径。音效配置为普通字符串，不使用声音项配置。
- `Notify Listener Status` / `Notify Kill Events` / `Notify Death Events` / `Notify Bomb Events` / `Notify Weapon Events`
  类型：枚举
  可选：`Off`、`Notify`、`Chatter`、`Actionbar`、`Title`、`Speak`、`Console Output`、`WinToast`

## 历史更新
- v1.1.2：新增免费模块 `CS2 Toolkit`，可监听 CS2 GSI 游戏事件，并对击杀、死亡、炸弹和武器状态变化发送通知或播放自定义音效。

## 相关模块
- [BHop (兔子跳)](./BHop.md)
- [Chatter (弹幕)](./Chatter.md)
- [Actionbar (行为栏)](./Actionbar.md)

## 相关资料
- https://github.com/clover-233/CS2Toolkit
