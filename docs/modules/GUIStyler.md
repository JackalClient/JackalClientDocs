# GUIStyler
GUI风格
分类：未分类
描述：用于调整 `Dropdown 下拉式` GUI 的风格。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
GUIStyler（GUI风格）用于调整 `Dropdown 下拉式` GUI 的风格。

## 配置项
- `Style Preset`: 风格预设
- 可选："Default", "Old", "Modern", "Vape", "LiquidBounce", "LiquidBounce NextGen", "Raven", "Meteor", "Future", "Opai"

## 历史更新
- 7. 修复 Imgui 风格的GUI的 ClickGUI Arrow Key Move Speed 忘记重命名的问题。
- 9. 完善 GUI ，添加更多视觉，默认预设被改为 Vape，完善了 GUIStyler 的预设，添加预设：Future, Opai
- 25. 添加模块：GUI Styler，可以应用一种GUI预设。预设也存在 DefaultSettings.dll 里面。目前还不是很还原。

## 备注
用法：选择一种预设，然后启用模块即可。
对其他 GUI 无效。

GUI 的颜色配置（包括 Tab Icon Color、描述、快捷键、模块背景、文字和选项颜色）支持预设、RGBA 自定义颜色及 Sin 渐变，兼容旧版颜色配置。Neverlose 与 Dropdown 均使用统一颜色读取，Flow、Transparent 和快捷键 Same 的原有效果保持不变。

## 相关命令

```bash

/gui style
查询现在的GUI风格。


/gui style <style>
设置现在的GUI风格（default/neverlose/dropdown/imgui）；default 使用 Neverlose，免费版也可使用 Neverlose。

```

## Neverlose 界面说明
- `NL Segmented Combobox` 默认 `More`：优先将键名与全部选项放在同一行，空间不足时分两行，第二行仍放不下时保留下拉框。`Less` 仅在同一行空间足够时使用分段外观；`Off` 使用原外观。未选中项文字和贴图亮度均为 80%，单选、多选均支持主题色选中背景淡入淡出，多选继续遵守数量限制并支持撤销。
- 分段选项支持文字、上图下文及纯图片三种变体，由 Ricochesta `data/NeverloseComboboxStyles.json` 按原分区/模块名、配置键与选项值配置；图片放在 `img/runtime/gui`，JSON 只填文件名。图片不可用时显示文字；规则运行时缓存使用 deflate256 japanese 加密。
- 分段图片样式规则每次启动都会在应用代理后异步更新一次，启动先使用缓存，下载和校验成功后立即应用；失败时继续使用原规则。Scope/Key 不能重复，校验失败原因可查看 `CLIENT.LOG` 中的 `[ModuleMetadata]` 记录。
- 规则被拒绝时同时输出 `DebugError`，包含文件名、从零开始的规则序号、Scope/Key 和具体原因；重复规则还会显示第一次出现的位置。图片失败用 `[NeverloseCombobox]` 显示下载或解码原因，并保留文字回退。控制台调试输出遵守 devmode 开关，日志保留完整原因。
- `ClickGUI Style` 默认选择 `Neverlose`，免费版与专业版均可使用；GUIStyler 预设仍只作用于 Dropdown。
- 免费版中的专业版模块使用灰色文字和暗色开关，模块列表及配置页保持一致；点击仍会提示版本限制。
- `Reset Button Confirmation` 开启时，重置按钮改为点击后通过 Msgbox2 确认，不再要求按住修饰键；取消保留原配置，确认只重置点击时的目标，搜索模式仍只重置匹配项。
- `NL Background Blur (PRO)`、`NL Background Parallax (PRO)` 仅供专业版使用。
- `NL User Icon` 的 `Auto` 使用本地 Windows 用户头像，没有可用头像时使用内置用户图标。
- 专业版可选择 `Custom (PRO)`，通过 `NL User Custom Icon Path` 指定图片；默认路径为空。相对路径可指向客户端资源目录或主目录。
- 未登录时，用户卡片显示 `Not Logged In`，不显示到期日期；用户页隐藏账户数据，仅提供 `Log in` 按钮。
- `Log in` 和 `Logout` 复用登录、注册、找回密码及激活界面，在主窗口内居中显示，不创建新的认证窗口；此模式不显示最小化和控制台切换按钮。
- 专业版确认 `Logout` 后立即进入重新认证，暂停模块更新并隐藏所有 HUD；只有登录已激活且专业版授权有效的账号后才能恢复使用，管理员账号也不能绕过激活检查；关闭或取消认证会退出客户端。
- 免费版点击 `Log in` 同样打开主窗口认证界面，无需激活账号，模块更新、后台任务和 HUD 保持运行；可以关闭或取消认证，继续使用免费版。
- 未登录时 IRC 面板隐藏输入框，显示半透明蓝色 `Please log in.`。
- BiliLive 未设置直播间或未登录 B 站时隐藏输入框；未设置直播间时，顶部提示 `Please select a room in livestream module`。

## 相关模块
无

## 相关资料
[Windows 合法外纪又一次更新了它的GUI](https://www.bilibili.com/video/BV1Hq21BmEwq)
