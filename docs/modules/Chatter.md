# Chatter
弹幕
分类：Render
描述：添加一条客户端弹幕后立即关闭。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
Chatter（弹幕）用于从 GUI 快速调用 `/chatter`，向客户端添加一条本地弹幕。
模块启用后会添加配置中的单条弹幕，然后自动关闭。

## 配置项
- Content（内容）
 类型：文本；默认："Hello, Jackal!"
 说明：要添加的弹幕正文。
- Color（颜色）
 类型：枚举；默认："Colorful"
 说明：本地弹幕颜色。该配置也会影响 `/chatter`、`/tchatter`、`/bchatter`、`/rchatter`、`/hchatter`、`/vchatter` 命令生成的弹幕颜色。不会影响其他模块生成的弹幕颜色（需要在相关模块配置项单独调节）。
 可选：Flow（流动）；Colorful（彩色）；见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Line Gap（行距）
 类型：整数；默认：10
 说明：弹幕行间距。
- Show Duration（显示时长）
 类型：整数；默认：10000
 说明：弹幕从出现到结束的持续时间，单位为毫秒。
- Font Size（字号）
 类型：整数；默认：60
 说明：本地弹幕字号，也用于计算滚动弹幕可用行数。
- Opacity (0~1)（不透明度）
 类型：小数；默认：0.8
 说明：弹幕基础不透明度。
- Give Way to Mouse（鼠标避让）
 类型：布尔；默认：开启
 说明：鼠标经过弹幕时，将弹幕不透明度平滑降低为基础不透明度的 20%，离开后恢复。
- Movement（运动方式）
 类型：枚举；默认：Linear
 说明：滚动弹幕的水平运动曲线。
 可选：Linear；EaseInOutSine
- Row Decision（行决定方式）
 类型：枚举；默认：Auto
 说明：滚动弹幕选择行的策略。
 可选：Auto；Random
- Outline（轮廓）
 类型：枚举；默认：Shadow
 说明：弹幕文本轮廓效果。
 可选：Off；Shadow；Stroke

## 历史更新
- 148. Chatter 接管原 HUD 中的弹幕显示选项，并新增 Give Way to Mouse 鼠标避让。
- 147. Chatter 新增 Color 配置，并统一影响本地弹幕命令颜色。
- 146. 新增 Chatter 模块，可通过图形界面快速添加单条本地弹幕。

## 备注
该模块对应本地客户端弹幕，不等同于直播间 `真弹幕(Real Chatter)` 发送。

## 相关命令
- /chatter <content...>
- /tchatter <content...>
- /bchatter <content...>
- /rchatter <content...>
- /hchatter <content...>
- /vchatter <content...>
发送一条弹幕。/tchatter 发送置顶弹幕。 /bchatter 发送置底弹幕。 /rchatter 发送反向弹幕。/hchatter 发送普通或反向弹幕。/vchatter 发送置顶或置底弹幕。

## 相关模块
- [Title (标题显示)](./Title.md)
- [AutoDanmaku (自动弹幕)](./AutoDanmaku.md)

## 相关资料
无