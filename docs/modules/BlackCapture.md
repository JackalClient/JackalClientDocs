# BlackCapture
黑屏捕获
分类：Render
描述：暂无描述

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
BlackCapture（黑屏捕获）用于暂无描述。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：HUD、HUD Alignment、HUD X Rate。

## 配置项
- HUD（是否显示HUD。）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Hide When Menu On（菜单打开时不显示）
 类型：布尔；默认：false
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Console（控制台）
 类型：布尔；默认：true
 说明：用于选择结果反馈方式。默认值 true 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- HUD Alignment（HUD 对齐方式）
 类型：枚举；默认："Center"
 说明：这是选项型配置。默认值 Center 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Left（左侧）；Center（居中）；Right（右侧）
- HUD X Rate（HUD 横坐标比例）
 类型：数值；默认：0.5f
 说明：用于控制界面元素在屏幕中的相对位置。默认值 0.5f 一般是作者调过的稳定布局；建议每次只改一个轴，避免元素跑出可视区域。
- HUD Y Rate（HUD 纵坐标比例）
 类型：数值；默认：0.55f
 说明：用于控制界面元素在屏幕中的相对位置。默认值 0.55f 一般是作者调过的稳定布局；建议每次只改一个轴，避免元素跑出可视区域。
- HUD Font Size（HUD 字号）
 类型：数值；默认：30
 说明：用于控制文本可读性。默认字号 30 适合多数分辨率；高分屏可适当加大，低分辨率建议减少以免拥挤。
- HUD Opacity (0~1)（HUD 不透明度）
 类型：数值；默认：0.8f
 说明：用于控制透明度。默认值 0.8f 兼顾可见性和遮挡；如果你觉得挡视线可小幅下调，若看不清可小幅上调。
- HUD Color（HUD 颜色）
 类型：枚举；默认："Rainbow"
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
## 历史更新
- 61. 为 Anti Capture 和 Black Capture 添加配置：
- 13. 为 AntiCapture 和 BlackCapture 添加 HUD 相关的配置。
- 5. 发现 SetWindowDisplayAffinity 和 图腾动画不兼容。受影响的模块有：AntiCapture, BlackCapture。经过修改，这两个模块在启用的时候如果 AutoTotem 启用，则会启用失败。

## 备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

## 相关命令
无

## 相关模块
- [AntiCapture (反捕获)](./AntiCapture.md)
- [PrivateWindow (隐私窗口)](./PrivateWindow.md)

## 相关资料
视频：[神秘的窗口『反截屏』是什么原理？【SetWindowDisplayAffinity】](https://www.bilibili.com/video/BV1EkrwY7E5Z)