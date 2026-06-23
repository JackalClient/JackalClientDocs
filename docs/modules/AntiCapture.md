# AntiCapture
反捕获
分类：Combat
描述：从截屏或录屏中排除此客户端的窗口（至少需要 Win10）

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
AntiCapture（反捕获）会为客户端窗口设置防录屏/防截屏属性，核心目的是降低常见捕获手段对窗口内容的获取能力。使用时建议先确认系统版本兼容，再通过 HUD 参数把状态提示摆在不遮挡的位置。
当 ScreenCapture 模块启用且 Exclude Client 为 Keep 时，正在使用屏幕捕获的模块可能会保持 AntiCapture 开启。此时关闭 AntiCapture 后会出现通知，提示具体来源模块；请先关闭这些来源模块，再关闭 ScreenCapture。
## 配置项
- HUD（是否显示HUD。）
 类型：布尔；默认：false
 说明：显示模块状态HUD，便于确认当前防捕获是否处于有效状态。
- Hide When Menu On（菜单打开时不显示）
 类型：布尔；默认：false
 说明：菜单打开时隐藏提示层，避免界面重叠。
- Console（控制台）
 类型：布尔；默认：true
 说明：启用后会对控制台窗口也应用防捕获策略。录屏包含控制台时建议开启。
- HUD Alignment（HUD 对齐方式）
 类型：枚举；默认："Center"
 说明：控制状态HUD对齐方式。
 可选：Left（左侧）；Center（居中）；Right（右侧）
- HUD X Rate（HUD 横坐标比例）
 类型：数值；默认：0.5f
 说明：状态HUD横向位置比例。
- HUD Y Rate（HUD 纵坐标比例）
 类型：数值；默认：0.55f
 说明：状态HUD纵向位置比例。
- HUD Font Size（HUD 字号）
 类型：数值；默认：30
 说明：状态HUD字号。
- HUD Opacity (0~1)（HUD 不透明度）
 类型：数值；默认：0.8f
 说明：状态HUD透明度。
- HUD Color（HUD 颜色）
 类型：枚举；默认："Rainbow"
 说明：状态HUD颜色。
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
- [AntiClose (反关闭)](./AntiClose.md)
- [AntiDebug (反调试)](./AntiDebug.md)
- [AntiIntercept (反拦截)](./AntiIntercept.md)
- [AntiSpy (反间谍)](./AntiSpy.md)
- [AntiTaskkill (反进程杀手)](./AntiTaskkill.md)
- [AntiMouseHook (反鼠标钩子)](./AntiMouseHook.md)
- [AntiKeyHook (反键盘钩子)](./AntiKeyHook.md)
- [AutoStart (开机自启)](./AutoStart.md)

## 相关资料
无
