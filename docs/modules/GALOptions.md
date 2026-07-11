# GALOptions
GAL 选项
分类：Web
描述：为直播弹幕与 B 站评论生成多候选 AI 回复，并以 HUD 对话框形式选择发送。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
GALOptions（GAL 选项）用于在直播弹幕和 B 站评论场景中生成多个 AI 回复候选，并在 HUD 对话框中快速选择发送。
它适合需要保留人工确认、但又希望明显提高回复效率的场景。

## 配置项
- Live Chatter Reply Enabled（启用直播弹幕回复）
 类型：布尔；默认：true
 说明：控制是否对直播弹幕生成回复候选。
- Do Not Trigger Live Chatter In Other's Room（不在别人的直播间触发直播弹幕回复）
 类型：布尔；默认：true
 说明：开启后，当前房间不是自己的直播间时不触发直播弹幕回复；若关闭且当前正在回复别人的直播间，HUD 底部会显示淡红色警告提示。
- Blacklist Window Enabled（启用窗口进程黑名单）
 类型：布尔；默认：true
 说明：开启后，当前前台窗口进程命中黑名单时，不再触发新的 GALOptions 对话。
- Blacklist Window Processes (Sep With Semicolon)（窗口进程黑名单，用分号分隔）
 类型：文本；默认："A Dance of Fire and Ice.exe;Minecraft.Windows.exe;MuseDash.exe"
 说明：配置不会触发新 GALOptions 的前台窗口进程名，多个进程用英文分号分隔，匹配时忽略大小写和首尾空白。
- Live Chatter Reply Count（直播弹幕回复数量）
 类型：数值；默认：3
 说明：控制一次生成多少条直播弹幕候选回复。
- Bili Reply Enabled（启用 B 站评论回复）
 类型：布尔；默认：true
 说明：控制是否对 B 站评论生成回复候选。
- Bili Reply Count（B 站评论回复数量）
 类型：数值；默认：3
 说明：控制一次生成多少条评论候选回复。
- Dialog Animation（对话框动画）
 类型：枚举；默认值以实际版本为准
 说明：控制对话框入场与退场动画。当前退场阶段使用 `EaseInExpo`，视觉上会越退越快。
- Faster Dialog（更快显示对话框）
 类型：布尔；默认值以实际版本为准
 说明：开启后，等待 AI 结果时可先显示带加载动画的对话框。
- Multi Dialog Policy（多对话策略）
 类型：枚举；默认："Queue"
 说明：控制已有 GALOptions 对话框时新对话的处理方式。`Queue` 按顺序排队；`Available` 仅在当前无对话时接受新对话；`Together` 会同时显示多个对话框，并按显示顺序把候选项映射到数字快捷键上。候选项超过 9 个时会使用补零数字码，例如第 1 项为 `01`，第 10 项为 `10`，避免 `1` 与 `11` 这类前缀冲突。
 可选：Queue；Available；Together

行为说明
- AI 生成候选时，会尽量要求不同候选呈现明显不同的立场或观点，而不是同义改写。
- 直播弹幕与 B 站评论回复结果会在发送前做基础清理，以避免多余句末标点影响观感。
- 直播弹幕触发时会直接判断当前直播间是否为账号自己的直播间，不再受直播弹幕发送保护开关状态影响。
- 若启用了 HUD 对话框，倒计时、来源信息和额外操作项会一起显示。
- `Multi Dialog Policy=Together` 时，对话框会以配置的 `Dialog X Rate` / `Dialog Y Rate` 为锚点生成网格布局，并自动夹在屏幕范围内，避免任一 HUD 离开屏幕区域；对话框数量变化时，已有对话框会平滑移动到新的网格位置。
- LiveChatter 可选择使用 `GALOptions` 作为向他人直播间发送弹幕时的确认 HUD，选项为“发送”和“取消”，10 秒超时视为取消，并仍遵守 `Multi Dialog Policy`。

关联模块
- LiveChatter：直播弹幕来源、房间判断与发送能力依赖该模块链路。
- BiliNotifier：部分 B 站评论上下文与通知体验可联动。
