# BiliVideoCover
B站视频封面
分类：Web
描述：解析并提取指定的B站视频的封面。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
BiliVideoCover（B站视频封面）用于解析并提取指定的B站视频的封面。
适合联网信息获取、账号联动和在线交互场景。
初次使用可优先调整：Mode。
使用前请确认网络可用及相关 API/平台账号配置完整。

## 配置项
- Async（异步）
 类型：布尔；默认：true
 说明：用于控制是否异步处理。默认值 true 通常能减少主线程卡顿；若你遇到并发相关问题，可回退到更保守设置测试。
- Mode（模式）
 类型：枚举；默认："Clipboard Forward"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 Clipboard Forward ，确认稳定后再逐项切换比较效果。
 可选：Clipboard Forward（剪贴板跳转）；Clipboard Output Link（剪贴板输出链接）；Clipboard Download Image（剪贴板下载图片）
- Keep（保持）
 类型：布尔；默认：false
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
## 历史更新
- 23. 添加模块 BiliVideoCover，提取视频封面。

## 备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

## 相关命令
无

## 相关模块
- [IRC (聊天室)](./IRC.md)
- [AntiRickroll (反诈骗)](./AntiRickroll.md)
- [AntiBrowser (反浏览器)](./AntiBrowser.md)
- [AntiWebpage (反网页)](./AntiWebpage.md)
- [LiveChatter (直播弹幕)](./LiveChatter.md)
- [TcpMonitor (TCP监视)](./TcpMonitor.md)
- [TcpKiller (TCP杀手)](./TcpKiller.md)
- [LiveStream (直播间)](./LiveStream.md)

## 相关资料
无
