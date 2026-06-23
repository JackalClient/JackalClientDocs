# MouseTrailsV2
鼠标轨迹V2
分类：Control
描述：在鼠标移动路径上绘制逐渐变细淡出的轨迹。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
Mouse Trails V2（鼠标轨迹V2）用于在鼠标移动时绘制半透明轨迹线条。
鼠标静止时不会追加新的轨迹节点，已有轨迹会停留在原位置并逐渐变细、淡出。
适合录屏演示、鼠标位置提示和桌面视觉增强场景。

## 配置项
- Preset（预设）
 类型：枚举；默认："Ghost Ribbon"
 说明：轨迹样式预设。Ghost Ribbon 会绘制半透明的鼠标移动缎带，线条会随时间逐渐变细并淡出。
 可选：Ghost Ribbon（幽灵缎带）
- Opacity (0~1)（不透明度 (0~1)）
 类型：数值；默认：0.46f
 说明：控制轨迹整体透明度。背景复杂时可适当提高，若遮挡内容可降低。
- Ribbon Thickness（缎带粗细）
 类型：数值；默认：10.0f
 说明：控制轨迹线条基础粗细。数值越大，鼠标移动后的缎带越宽。
- Blacklisted Window Processes (Sep With Semicolon)（窗口进程黑名单（用分号分隔））
 类型：字符串；默认："javaw.exe"
 说明：当前前台窗口进程名命中列表时，不再追加新的轨迹节点或粒子。多个进程名使用英文分号分隔。
- Not When Cursor Hidden（鼠标隐藏时禁用）
 类型：布尔；默认：true
 说明：鼠标隐藏时不再追加新的轨迹节点或粒子，已有轨迹会自然淡出。
- Color（颜色）
 类型：枚举；默认："Rainbow"
 说明：用于控制轨迹配色。建议先使用 Rainbow 观察动态效果，再按背景复杂度选择更高对比度的颜色。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)

## 历史更新
- v1.1.2：新增前台窗口进程黑名单和鼠标隐藏时禁用选项。
- v1.1.2：新增 Mouse Trails V2 模块，并补充 Opacity 与 Ribbon Thickness 配置。

## 备注
该模块只绘制客户端 HUD 视觉效果，不修改 Windows 原生鼠标轨迹设置。若与 MouseTrails 同时启用，两者效果可能叠加。

## 相关命令
无

## 相关模块
- [MouseTrails (鼠标轨迹)](./MouseTrails.md)
- [MouseESP (鼠标透视)](./MouseESP.md)
- [ClickEffects (点击效果)](./ClickEffects.md)
- [Crosshair (准星线)](./Crosshair.md)

## 相关资料
无
- Glow (PRO)：专业版独有，开启后为鼠标轨迹增加更粗的模糊叠加发光效果；专业版默认开启，免费版默认关闭。

- Triangle Particles：开启后，鼠标移动时会生成等边三角形粒子，经过后旋转并逐渐减速消失。
