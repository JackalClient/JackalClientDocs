# Alt Snap
Alt Snap
分类：Window
描述：按住 Alt 后可在窗口任意位置拖动窗口或调整窗口大小。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
Alt Snap 提供类似 AltSnap 的全局窗口操作。模块开启后，按住默认热键 Alt，可在窗口任意位置按住左键拖动窗口，或按住右键从距离鼠标最近的窗口角调整大小。

## 配置项
- Hotkey（热键）
  类型：按键/复合；默认：LAlt
  说明：按住该热键后启用鼠标窗口操作。
- Move With Left Button（左键拖动窗口）
  类型：布尔；默认：true
  说明：允许使用热键加左键拖动窗口。
- Resize With Right Button（右键调整窗口大小）
  类型：布尔；默认：true
  说明：允许使用热键加右键调整窗口大小。
- Focus Target On Drag（拖动时聚焦目标窗口）
  类型：布尔；默认：true
  说明：开始移动或调整大小时将目标窗口切换到前台。
- Freeze Mouse（冻结鼠标）
  类型：布尔；默认：true
  说明：移动或调整窗口时将鼠标固定在开始操作的位置；关闭后鼠标会跟随操作移动。
- Keep Title Bar On Screen（保持标题栏在屏幕内）
  类型：布尔；默认：true
  说明：移动窗口时保证一部分标题栏保留在目标显示器工作区内，避免窗口移动到无法再次拖动的位置；无需让整个标题栏保持可见。
- Ignore Maximized Window（忽略最大化窗口）
  类型：布尔；默认：true
  说明：忽略最大化窗口，以及宽高均达到目标显示器工作区大小的窗口。
- Ignore Fullscreen Window（忽略全屏窗口）
  类型：布尔；默认：true
  说明：前台存在独占全屏窗口时不接管鼠标窗口操作。
- Ignore Processes (Sep With Semicolon)（忽略进程）
  类型：字符串；默认：YuanShen.exe;BH3.exe;StarRail.exe;ZenlessZoneZero.exe
  说明：忽略指定进程的窗口，多个进程名使用英文分号分隔，不区分大小写。
- Resize Minimum Width（调整大小最小宽度）
  类型：数值；默认：120
  说明：右键调整大小时允许的最小窗口宽度。
- Resize Minimum Height（调整大小最小高度）
  类型：数值；默认：80
  说明：右键调整大小时允许的最小窗口高度。
- HUD
  类型：布尔；默认：true
  说明：操作期间显示窗口标题、进程名和当前坐标或尺寸，并在操作开始和结束时淡入淡出。
- HUD Color（HUD 颜色）
  类型：枚举；默认：White
  说明：HUD 文本颜色，使用客户端颜色预设。
- HUD Title Max Characters（HUD 标题最大字符数）
  类型：数值；默认：10
  说明：窗口标题最多显示的字符数，超出部分使用省略号截断。
- HUD Scale（HUD 缩放）
  类型：数值；默认：1.0
  说明：HUD 文本缩放比例。
- HUD Opacity (0~1)（HUD 不透明度）
  类型：数值；默认：0.9
  说明：HUD 文本及阴影透明度。
- HUD Background（HUD 背景）
  类型：布尔；默认：true
  说明：是否显示 HUD 背景。
- HUD Background Opacity (0~1)（HUD 背景不透明度）
  类型：数值；默认：0.8
  说明：HUD 背景透明度。
- HUD Background Color（HUD 背景颜色）
  类型：枚举；默认：Black
  说明：HUD 背景颜色，使用客户端颜色预设。
- HUD Position（HUD 位置）
  类型：枚举；默认：Center
  可选：Center（工作区中心）；Cursor（鼠标下方）；Window（目标窗口中心）；Midpoint（鼠标与窗口中心的中点）。
  说明：HUD 坐标带缓动效果，并会根据文字实际尺寸限制在屏幕范围内。
- HUD Number Flip (PRO)（HUD 数字翻动）
  类型：布尔；专业版默认：true
  说明：只对 HUD 中发生变化的坐标或尺寸数字应用与 Time Display 一致的上下 Flip 翻动动画。

## 相关命令
无

## 相关模块
- [OpacityChanger (透明度调节)](./OpacityChanger.md)
- [WindowMaster (窗口大师)](./WindowMaster.md)
- [WindowManager (窗口管理器)](./WindowManager.md)
- [WindowHighlight (窗口高亮)](./WindowHighlight.md)
- [AntiMouseHook (反鼠标钩子)](./AntiMouseHook.md)

## 相关资料
- [AltSnap](https://github.com/RamonUnch/AltSnap)

## 兼容性
Alt Snap 与 Anti MouseHook 冲突。开启 Anti MouseHook 时会自动关闭 Alt Snap；Anti MouseHook 已开启时尝试启用 Alt Snap，会提示冲突并关闭 Alt Snap。
