# BandSetter
Z序段设置
[PRO]
分类：Window
描述：动态设置指定窗口的Z序段。（专业版）

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：PRO 独有

## 介绍
BandSetter（层级设置）用于修改窗口 Z-Order Band。该操作影响显示层级较深，建议先在非关键窗口验证后再用于常用程序。
## 配置项
- Target（目标）
 类型：枚举；默认："Foreground"
 说明：指定要调整Z序层级的目标窗口。
 可选：Foreground（前端）；PointAt（指向）
- Operation（操作）
 类型：枚举；默认："Auto"
 说明：层级操作模式。自动模式会按当前状态推断方向。
 可选：Auto（自动）；Set；Reset（重置）
- Sync Topmost Status（同步置顶状态）
 类型：布尔；默认：true
 说明：调整Z序后同步置顶状态，避免两套状态互相打架。
- Z-Order Band（Z序段）
 类型：枚举；默认："UIAccess"
 说明：目标窗口Z序段。
 可选：Desktop（桌面）；UIAccess；Immersive IHM；Immersive Notification（Immersive 通知）；Immersive AppChrome；Immersive MoGo；Immersive Edgy；Immersive InactiveMoBody；Immersive InactiveDock；Immersive ActiveMoBody；Immersive ActiveDock；Immersive Background（Immersive 背景）；Immersive Search（Immersive 查找）；Genuine Windows（Genuine 窗口）；Immersive Restricted；System Tools（系统工具）；Lock Screen（Lock 屏幕）；Above Lock UX
## 历史更新
- 21. 【PRO】添加模块：`BandSetter`，动态设置窗口Z序段。

## 备注
依赖 `WindowTopMost.dll` `IAMKeyHacker.dll`

## 相关命令
- /bands
- 了解所有Z序段的信息。

- /getband [hwnd]
- 获取窗口的Z序段。hwnd 不填，则为客户端主窗口，如果主窗口不存在则为控制台窗口

- /setband [hwnd] [zorderband]
- 【PRO】动态设置窗口的Z序段。hwnd不填，则为客户端主窗口，如果主窗口不存在则为控制台窗口，- zorderband不填则为 `ZBID_UIACCESS（值为2）`

## 相关模块
- [SuperTopmost (超级置顶)](./SuperTopmost.md)
- [UIAccess (界面特权)](./UIAccess.md)
  
## 相关资料
- [揭秘窗口置顶中的『等级制度』！窗口Z序和UIAccess又是什么?](https://www.bilibili.com/video/BV1HCwwegEVp)
