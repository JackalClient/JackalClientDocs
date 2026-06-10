# AntiWebpage
反网页
分类：Web
描述：自动关闭不好的网页。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
AntiWebpage（反网页）用于自动关闭不好的网页。
适合联网信息获取、账号联动和在线交互场景。
初次使用可优先调整：Target Window、Notify Mode、Check Cooldown。

## 配置项
- Async（异步）
 类型：布尔；默认：true
 说明：用于控制是否异步处理。默认值 true 通常能减少主线程卡顿；若你遇到并发相关问题，可回退到更保守设置测试。
- Only On Browser（只判定浏览器）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Title Keywords 1 Enabled（标题关键词 1 启用）
 类型：布尔；默认：true
 说明：用于选择结果反馈方式。默认值 true 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Title Keywords 1（标题关键词 1）
 类型：文本；默认："传奇;一刀;贪玩;霸主;鬼服;福利;0氪;免费送;打金服;上线即领"
 说明：用于选择结果反馈方式。默认值 传奇;一刀;贪玩;霸主;鬼服;福利;0氪;免费送;打金服;上线即领 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Title Keywords 2 Enabled（标题关键词 2 启用）
 类型：布尔；默认：true
 说明：用于选择结果反馈方式。默认值 true 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Title Keywords 2（标题关键词 2）
 类型：文本；默认："博彩;新澳;荷官;超高赔率"
 说明：用于选择结果反馈方式。默认值 博彩;新澳;荷官;超高赔率 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Title Keywords 3 Enabled（标题关键词 3 启用）
 类型：布尔；默认：true
 说明：用于选择结果反馈方式。默认值 true 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Title Keywords 3（标题关键词 3）
 类型：文本；默认："page not found;404 not found;502 bad gateway"
 说明：用于选择结果反馈方式。默认值 page not found;404 not found;502 bad gateway 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Title Keywords Custom Enabled（标题关键词自定义启用）
 类型：布尔；默认：false
 说明：用于选择结果反馈方式。默认值 false 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Title Keywords Custom（标题关键词自定义）
 类型：文本；默认：""
 说明：用于选择结果反馈方式。默认值 + + 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Target Window（目标窗口）
 类型：枚举；默认："Foreground"
 说明：用于指定模块实际作用对象。建议先对单个目标测试通过，再扩大到多目标，降低误操作风险。
 可选：Foreground（前端）；PointAt（指向）
- Notify Mode（通知模式）
 类型：枚举；默认："Notify"
 说明：用于选择结果反馈方式。默认值 Notify 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：Off（关闭）；Notify（通知）；Chatter（弹幕）
- Chatter Color（弹幕颜色）
 类型：文本；默认："255;203;0;230"
 说明：用于选择结果反馈方式。默认值 255;203;0;230 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Operation（操作）
 类型：枚举；默认："Close Page"
 说明：这是选项型配置。默认值 Close Page 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Off（关闭）；Close Page（关闭页面）；Close Window（关闭窗口）
- Ctrl+W Internal Delay (ms)（Ctrl+W 内部延迟 (毫秒)）
 类型：数值；默认：100
 说明：这是数值型配置。默认值 100 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Check Cooldown（检查冷却）
 类型：数值；默认：500U
 说明：用于控制检测/刷新/动画节奏。默认值 500U 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
## 历史更新
- 12. 添加模块：Anti Webpage，发现浏览器网页标题中有奇怪的关键词后，进行操作。

## 备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

## 相关命令
无

## 相关模块
- [IRC (聊天室)](./IRC.md)
- [AntiRickroll (反诈骗)](./AntiRickroll.md)
- [AntiBrowser (反浏览器)](./AntiBrowser.md)
- [LiveChatter (直播弹幕)](./LiveChatter.md)
- [TcpMonitor (TCP监视)](./TcpMonitor.md)
- [TcpKiller (TCP杀手)](./TcpKiller.md)
- [LiveStream (直播间)](./LiveStream.md)
- [Streamer (主播模式)](./Streamer.md)

## 相关资料
无
