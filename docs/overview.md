# JackalClient 文档概览

欢迎查看 `JackalClient 文档`！
`JackalClient` 是一个面向 Windows 的客户端工具箱，定位为学习与研究用途的软件集合。

![Client-poster1](/jackal-1.jpg)

- 查看视频合集：[JackalClient视频合集](https://space.bilibili.com/3494361276877525/lists/3986082?type=season)
![Jackal-Video_Series](/jackal-video-series.jpg)
- 常见问题请戳这里：[常见问题 Q&A](/faq.md)

它的核心形态不是 “单一功能程序” ，而是由多个可独立开关的模块组成：

- 图形界面（ClickGUI）
- 用户抬头显示（HUD），也可以叫做 叠加层（Overlay）
- 命令行 Shell 模块（大量命令）
- 系统工具模块（窗口、进程、音量、时间、文件等）
- 自动化模块（启动、任务、规则触发）
- 网络模块（Bilibili、网易云等）

## 项目定位

- 平台：>= Windows 8（64 位为主）
- 架构：本体 `JackalClient.exe` 为 `x86` 32位程序，部分程序为 `x64`
- 交互：GUI + 命令行双栈
- 目标：效率辅助、系统操作、自动化和信息处理
- 许可与风险：仅限合法、合规、可控场景

## 阅读路径

1. 先看《快速开始》：了解如何启动、开关 GUI、模块操作、退出
2. 再看《功能与模块地图》：明确有哪些能力
3. 再看《完整命令手册》：知道 CLI 能做什么
4. 最后看《安全与使用边界》：理解风险与约束

## 重要说明

本仓库中的能力描述来自以下原始资料：

- `test/README.txt`
- `test/HISTORY.TXT`
- `test/COMMANDS.txt`

当文档与客户端行为冲突时，以客户端当前版本行为为准。
