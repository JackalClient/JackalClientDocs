# AntiRickroll
反诈骗
分类：Web
描述：暂无描述

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
AntiRickroll（反诈骗）用于暂无描述。
适合联网信息获取、账号联动和在线交互场景。
初次使用可优先调整：Check Cooldown、Mode、Notify。

## 配置项
- Async（异步）
 类型：布尔；默认：true
 说明：用于控制是否异步处理。默认值 true 通常能减少主线程卡顿；若你遇到并发相关问题，可回退到更保守设置测试。
- Check Cooldown（检查冷却）
 类型：数值；默认：200U
 说明：用于控制检测/刷新/动画节奏。默认值 200U 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Mode（模式）
 类型：枚举；默认："Simple"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 Simple ，确认稳定后再逐项切换比较效果。
 可选：Simple（简易）；Violence（暴力）
- Notify（通知）
 类型：布尔；默认：true
 说明：用于选择结果反馈方式。默认值 true 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Simple Allow Kill Process（简易模式允许杀进程）
 类型：布尔；默认：false
 说明：用于指定模块实际作用对象。建议先对单个目标测试通过，再扩大到多目标，降低误操作风险。
## 历史更新
- 5. 修改了 AntiRickroll 模块。现在的配置项：

## 备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

## 相关命令
无

## 相关模块
- [IRC (聊天室)](./IRC.md)
- [AntiBrowser (反浏览器)](./AntiBrowser.md)
- [AntiWebpage (反网页)](./AntiWebpage.md)
- [LiveChatter (直播弹幕)](./LiveChatter.md)
- [TcpMonitor (TCP监视)](./TcpMonitor.md)
- [TcpKiller (TCP杀手)](./TcpKiller.md)
- [LiveStream (直播间)](./LiveStream.md)
- [Streamer (主播模式)](./Streamer.md)

## 相关资料
无
