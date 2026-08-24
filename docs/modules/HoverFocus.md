# HoverFocus
悬停聚焦
分类：Window
描述：暂无描述

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
HoverFocus（悬停聚焦）在鼠标悬停达到阈值后自动聚焦窗口，适合多窗口快速切换。

## 配置项
- Hover Timeout (ms)（悬停超时（毫秒））
 类型：数值；默认：1000L
 说明：鼠标悬停多久后触发聚焦。时间越短越灵敏，也越容易误触。
- Bring to Top（带到顶部）
 类型：布尔；默认：false
 说明：悬停聚焦后是否同时置顶窗口。
## 历史更新
- 65. 修复 CaretBrowser, HoverFocus, NoAnimation, MouseTrails 的开关超时问题。
- 66. 为 HoverFocus 模块添加配置项：
- 17. 【WIP】添加模块：HoverFocus，和 Auto Focus效果一样但是是 Windows 自带的。会同步系统的设置。

## 备注
这是一项系统自带的功能，本模块只会调整系统设置，因此客户端退出后依然生效。而 `AutoFocus` 则是纯客户端实现，不要一起开。
该模块可能导致 Minecraft 崩溃。每次启动客户端后首次开启时会显示一次警告。

## 相关命令
无

## 相关模块
- [AutoFocus (自动聚焦)](./AutoFocus.md)

## 相关资料
无
