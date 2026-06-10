# MachineLock
锁机
分类：Combat
描述：锁定这台计算机（谨慎使用）。

## 需求
- 安全级别：不安全模块（高风险）
- 恶意属性：是
- 权限需求：部分配置需要管理员权限（如 Disable Logoff）
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
MachineLock 启用后会接管输入与界面控制：按配置联动静音、禁输入法、鼠标/键盘限制、隐藏任务栏与强制前台，并在退出时尽量恢复启用前状态。
该模块属于高风险能力，建议先在可恢复环境验证“进入-紧急退出-自动恢复”全链路。

## 配置项
- Title（标题）
  类型：文本；默认："计算机已锁定"。锁机主标题文本。
- Subtitle（副标题）
  类型：文本；默认："你需要输入密码"。锁机副标题文本。
- Title Display（展示标题）
  类型：布尔；默认：true。是否显示主标题。
- Subtitle Display（展示副标题）
  类型：布尔；默认：true。是否显示副标题。
- Background Color（背景颜色）
  类型：文本；默认："40;0;0;250"。锁机界面背景色。
- Title Color（标题颜色）
  类型：文本；默认："yellow"。主标题颜色。
- Subtitle Color（副标题颜色）
  类型：文本；默认："aqua"。副标题颜色。
- Password Color（密码颜色）
  类型：文本；默认："green"。密码显示（星号）颜色。
- Title Font Size（标题字号）
  类型：数值；默认：180。主标题字号。
- Subtitle Font Size（副标题字号）
  类型：数值；默认：100。副标题字号。
- Password Font Size（密码字号）
  类型：数值；默认：220。密码区域字号。
- Mute（静音）
  类型：布尔；默认：true。启用锁机时自动启用 Mute。
- Disable IME（禁用输入法）
  类型：布尔；默认：true。启用锁机时自动启用 NoIME。
- Keep Active（保持活动）
  类型：布尔；默认：true。启用锁机时自动启用 Active，保持客户端前台。
- Force Topmost（强制置顶）
  类型：布尔；默认：true。启用锁机时自动启用 ForceTopmost。
- Hide Taskbar（隐藏任务栏）
  类型：布尔；默认：true。启用锁机时自动启用 HideTaskbar。
- Disable KeyLogger（关闭键盘记录）
  类型：布尔；默认：true。锁机时关闭 KeyLogger，减少口令泄露风险。
- Disable Logoff（禁用注销）
  类型：布尔；默认：true。锁机时启用 NoLogOff；若无管理员权限且策略要求检查权限，可能导致锁机直接启用失败。
- Pause Keystrokes2（暂停按键显示II）
  类型：布尔；默认：true。暂停按键可视化更新，避免输入轨迹暴露。
- Mouse Lock（鼠标锁定）
  类型：组合框；默认："Allow Move"。鼠标限制策略。
  可选：Off（关闭）；Allow Move（允许移动）；Disable All（禁用所有）。
- Keyboard Lock (Ctrl, Win, Alt)（键盘锁定 (Ctrl, Win, Alt)）
  类型：布尔；默认：true。启用后切换 KeyDisabler 到 `Ctrl, Win, Alt` 模式。
- Disable Client Other Control（禁用客户端其他控制）
  类型：布尔；默认：true。锁机期间禁止客户端其他控制逻辑。
- Disable Client Other HUD（禁用客户端其他HUD）
  类型：布尔；默认：true。锁机期间隐藏客户端其他 HUD。
- Emergency Escape Method（紧急退出方法）
  类型：组合框；默认："Custom Hotkey (Notice Keyboard Lock)"。紧急退出通道。
  可选：Off（关闭）；Esc (Press 20 seconds)（Esc 键 (长按 20 秒)）；Custom Hotkey (Notice Keyboard Lock)（自定义快捷键 (注意键盘锁)）。
- Custom Escape Hotkey（自定义退出快捷键）
  类型：按键/复合；默认：`&#123;&#123;"Keybind", {VK_OEM_3}&#125;&#125;`。紧急退出热键，建议先实测在当前键盘锁策略下可触发。
- Exit Condition（退出条件）
  类型：组合框；默认："Password"。常规退出条件。
  可选：Password（密码）；Wait Duration（等待一段时间）。
- Password (Must Alpha or Num)（密码 (必须字母或数字)）
  类型：文本；默认："0721"。密码解锁口令（仅字母数字输入路径）。
- Wait Duration (min)（等待多久 (分钟)）
  类型：数值；默认：30U。等待模式自动退出时长。
- AUTO ENABLE WHEN CLIENT LAUNCHED（客户端启动时自动启用）
  类型：布尔；默认：false。客户端启动后自动启用 MachineLock。

## 历史更新
- 28. 添加模块：MachineLock，用于锁机。
- 17. 为 MachineLock 添加配置。
- 20. 继续为 MachineLock 添加配置。

## 备注
如果同时开启 `Keyboard Lock (Ctrl, Win, Alt)`，紧急热键不要依赖这些修饰键。
`AUTO ENABLE WHEN CLIENT LAUNCHED` 风险很高，启用前务必确认紧急退出通道可用。

## 相关命令
无

## 相关模块
- [NoLogOff (禁止注销)](./NoLogOff.md)
- [KeyDisabler (键盘限制)](./KeyDisabler.md)
- [MouseDisabler (鼠标限制)](./MouseDisabler.md)
- [Active (保持前台)](./Active.md)
- [ForceTopmost (强制置顶)](./ForceTopmost.md)
- [HideTaskbar (隐藏任务栏)](./HideTaskbar.md)

## 相关资料
无