# ListDevices
设备列表
分类：Misc
描述：一次性输出系统设备列表。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
ListDevices（设备列表）用于从 GUI 快速调用 `/device list`，输出系统设备列表。
模块启用后会完成一次输出并自动关闭。
输出任务会在后台执行，避免枚举设备时卡住主界面。

## 配置项
无

## 历史更新
- 147. List Devices 输出改为后台执行，减少主界面卡顿风险。
- 146. 新增 List Devices 模块，可通过图形界面快速调用 `/device list`。

## 备注
该模块仅用于列出设备；音频设备查询仍可通过 `/device audio get` 使用。

## 相关命令
- `/device list`
- `/devices`

## 相关模块
- [Reminder (提醒)](./Reminder.md)
- [PrivacyProtect (隐私保护)](./PrivacyProtect.md)

## 相关资料
无