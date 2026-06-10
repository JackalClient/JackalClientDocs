# Title
标题显示
分类：Render
描述：在屏幕中央显示一个标题。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
Title（标题显示）用于在屏幕中央显示一个标题。和MC的很像。
初次使用可优先调整：Title Text Mode。

## 配置项
- Module Status Auto Switch（模块状态自动切换）
 类型：布尔；默认：true
 说明：在播放标题时，是否自动静默启用该模块。
 
- Hide When Menu On（菜单打开时不显示）
 类型：布尔；默认：false
 说明：
- Force Previous Fade Out（强制先前的淡出）
 类型：布尔；默认：true
 说明：
- Force Exit Speed Boost（强制退出速度加成）
 类型：数值；默认：2.0f
 说明：
- Title Text Mode（标题文本模式）
 类型：枚举；默认："Fixed"
 说明：用于选择结果反馈方式。默认值 Fixed 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：Fixed（固定）；List Random Element（列表中随机的元素）；List Loop（列表循环）；Clipboard Text（剪贴板文本）
- Main Title Enabled（启用主标题）
 类型：布尔；默认：true
 说明：
- Subtitle Enabled（启用副标题）
 类型：布尔；默认：true
 说明：这个选项启用时，才会显示副标题文本。
- Fixed Subtitle Text（固定副标题文本）
 类型：文本；默认："yee~"
 说明：
- Fixed Title Text（标题固定文本）
 类型：文本；默认："JackalClient"
 说明：
- Title Text List（标题文本列表）
 类型：文本；默认："你好，陌生人;GRW团队招生了;无论你是跑酷大神;还是生存大师;还是PVP大佬;又或是起床大佬;还是PVP大佬;又或是建筑大佬;还是PVP大佬;又或是红石大佬;还是PVP大佬;还是什么都不知道的小白;还是PVP大佬;还是PVP大佬 ...
 说明：用英文分号分隔。
- List Current Index（列表当前索引）
 类型：数值；默认：0
 说明：这个数值会动态变化。
- Title Color（标题颜色）
 类型：枚举；默认："White"
 说明：用于选择结果反馈方式。默认值 White 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：Flow（流动）；其余颜色见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Subtitle Color（副标题颜色）
 类型：枚举；默认："White"
 说明：用于选择结果反馈方式。默认值 White 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：Flow（流动）；其余颜色见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Title Base Opacity (0~1)（标题基准不透明度 (0~1)）
 类型：数值；默认：1.0f
 说明：标题基础不透明度。
- Title Easing Speed (0~1)（标题缓动速率 (0~1)）
 类型：数值；默认：0.02f
 说明：
- Subtitle Easing Speed (0~1)（副标题缓动速率 (0~1)）
 类型：数值；默认：0.02f
 说明：
- Animation Type (Enter)（动画类型 (进入)）
 类型：枚举；默认："Slide (Bottom
 说明：
- Animation Type (Exit)（动画类型 (离开)）
 类型：枚举；默认："Slide (Top
 说明：
- Animation Slide Fade（滑动动画淡入淡出）
 类型：布尔；默认：true
 说明：
- Title Size（标题尺寸）
 类型：枚举；默认："Auto"
 说明：
 可选：Auto（自动）；Fixed（固定）
- Auto Title Size Scale（标题自动尺寸缩放比例）
 类型：数值；默认：1.0f
 说明：
- Check Topmost（检查置顶）
 类型：布尔；默认：true
 说明：打开后会自动检查客户端窗口是否置顶。
- Auto Focus（自动取得焦点）
 类型：布尔；默认：false
 说明：播放标题时自动获取焦点，注意在Minecraft启动时，不应该启用这个选项，否则可能会导致游戏崩溃。
- Console Output（控制台输出）
 类型：布尔；默认：true
 说明：同步到控制台。
- Random Rotation（随机旋转）
 类型：布尔；默认：true
 说明：
- Random Rotation Max Value（随机旋转角最大值）
 类型：数值；默认：100.0f
 说明：
- Text Stroke（文本描边）
 类型：枚举；默认："Shadow"
 说明：
 可选：Off（关闭）；Shadow（阴影）；Glow（未收录）
- Text Glow Size Rate（文本发光大小比例）
 类型：数值；默认：1.3f
 说明：
- Text Glow Amount（文本发光数量）
 类型：数值；默认：5U
 说明：
- Blur Effect（模糊效果）
 类型：布尔；默认：true
 说明：
- Blur Strength Max（模糊力度最大值）
 类型：数值；默认：20.0f
 说明：
- Blur Samples Max（模糊最大取样数）
 类型：数值；默认：10
 说明：
- Shake Enabled（启用抖动）
 类型：布尔；默认：true
 说明：
- Shake Amplitude（抖动振幅）
 类型：数值；默认：60.0f
 说明：
- Shake Speed（抖动速率）
 类型：数值；默认：2.0f
 说明：
- Brightness Pulse（亮度脉冲）
 类型：布尔；默认：true
 说明：
- Brightness Speed (Hz)（亮度速率 (赫兹)）
 类型：数值；默认：0.72f
 说明：
- Brightness Min（最小亮度）
 类型：数值；默认：0.66f
 说明：
- Brightness Max（最大亮度）
 类型：数值；默认：1.0f
 说明：
- Fixed Title Size（标题固定尺寸）
 类型：数值；默认：200
 说明：
- Fixed Subtitle Size（固定副标题字号）
 类型：数值；默认：90
 说明：
- Title Duration（标题持续时间）
 类型：数值；默认：5000L
 说明：
- Title Stay Time (0~1)（标题停留时间 (0~1)）
 类型：数值；默认：0.5f
 说明：
- Title Subtitle Line Gap（主副标题行距）
 类型：数值；默认：30
 说明：
- Mask Enabled（启用遮罩）
 类型：布尔；默认：false
 说明：遮罩指的是整个客户端窗口的暗背景。
- Mask Fade Speed (0~1)（遮罩淡入速率 (0~1)）
 类型：数值；默认：0.05f
 说明：
- Mask Alpha (0~1)（遮罩不透明度 (0~1)）
 类型：数值；默认：0.5f
 说明：
- Debug Gizmos（未收录）
 类型：布尔；默认：false
 说明：用于调试，可以不用开启。
## 历史更新
- 38. 添加模块：Title，实现标题显示功能。注意：命令 /title 发出的标题的颜色请在 Shell 模块中设置。

## 备注


## 相关命令
无

## 相关模块
- [AutoDanmaku (自动弹幕)](./AutoDanmaku.md)
- [AutoTitle (自动标题)](./AutoTitle.md)

## 相关资料
无
