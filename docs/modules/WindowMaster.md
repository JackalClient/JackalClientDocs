WindowMaster
窗口大师
分类：Window
描述：显示一个简易的窗口面板，你可以通过快捷键控制前端窗口。

需求
- 安全级别：常规模块
- 恶意属性：否
- 权限需求：无（部分动作对高权限目标可能失败）
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
WindowMaster 是窗口操作中枢：它用统一目标选择 + 快捷键动作来完成隐私、冻结、置顶、隐藏、结束、下沉等操作，并提供 HUD 展示当前目标与快捷键状态。
建议先完成“目标模式 + 快捷键冲突检查”，再启用高风险动作（Kill/EndTask/Destroy）。

配置项
- Hide HUD When Menu On（打开菜单时隐藏HUD）
  类型：布尔；默认：true。菜单打开时隐藏 WindowMaster HUD。
- HUD Font Size（HUD 字号）
  类型：数值；默认：20。HUD 主文本字号。
- HUD Line Gap（HUD 行距）
  类型：数值；默认：5。HUD 行间距，影响一屏信息密度。
- HUD Background（HUD背景）
  类型：组合框；默认："Fancy"。HUD 背景风格。
  可选：Off（关闭）；Simple（简易）；Fancy（优美）。
- Easing（缓动）
  类型：布尔；默认：true。HUD 位置切换是否启用平滑过渡。
- Easing Speed (0~1)（缓动速率 (0~1)）
  类型：数值；默认：0.1。HUD 跟随速度。
- HUD Color（HUD 颜色）
  类型：组合框；默认："Rainbow"。HUD 文本/强调色方案。
  可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)。
- Target（目标）
  类型：组合框；默认："Foreground"。决定全部动作作用对象。
  可选：Foreground（前端）；PointAt（指向）。
- Privacy Mode（隐私模式）
  类型：组合框；默认："Invisible (>= Win10)"。Privacy/U 动作使用的亲和模式。
  可选：Black（黑色）；Invisible (>= Win10)（隐形(>=Win10)）。
- HUD（HUD）
  类型：组合框；默认："Follow"。HUD 展示位置策略。
  可选：Off（关闭）；Follow（追随）；BottomRight（右下）；BottomLeft（左下）。
- HUD Paging（HUD 分页）
  类型：组合框；默认："Off"。控制 HUD 是否分页显示动作项。
  可选：Off（关闭）；Multiple Pages（多页）；Only Show Page 1（只显示第一页）。
- HUD Item Count Per Page（HUD 每页显示的项数量）
  类型：数值；默认：11U。分页时每页条目数。
- HUD Next Page（HUD 下一页）
  类型：按键/复合；默认：`{ { "Keybind", {VK_LMENU, VK_RIGHT } }`}。下一页热键。
- HUD Prev Page（HUD 上一页）
  类型：按键/复合；默认：`{ { "Keybind", {VK_LMENU, VK_LEFT } }`}。上一页热键。
- Phantom Window Opacity (0~1)（Phantom 窗口 Opacity (0~1)）
  类型：数值；默认：0.1f。幻影窗口透明度；修改后会批量刷新现有幻影窗口。
- Privacy/U Keybind（设为/取消隐私窗口快捷键）
  类型：按键/复合；默认：`{ { "Keybind", {VK_LMENU, VK_F1 } }`}。切换窗口捕获亲和状态。
- Privacy Overlay/U Keybind（设为/取消隐私窗口(覆盖模式)快捷键）
  类型：按键/复合；默认：`{ { "Keybind", {VK_LMENU, VK_F2 } }`}。切换透明覆盖层隐私模式。
- Toggle Phantom Window Keybind（切换幻影窗口按键绑定）
  类型：按键/复合；默认：`{ { "Keybind", {0 } }`}。切换窗口“可穿透+透明+置顶”的幻影态。
- Kill Process Keybind（结束进程快捷键）
  类型：按键/复合；默认：`{ { "Keybind", {VK_LMENU, VK_F3 } }`}。直接结束目标窗口所属进程。
- EndTask Keybind（暴力结束任务快捷键）
  类型：按键/复合；默认：`{ { "Keybind", {VK_LMENU, VK_F9 } }`}。调用系统 EndTask 路径结束目标。
- Freeze/U Keybind（冻结/解冻窗口快捷键）
  类型：按键/复合；默认：`{ { "Keybind", {VK_LMENU, VK_F6 } }`}。切换窗口 Enable 状态实现冻结/解冻。
- Process Freeze/U Keybind（冻结/解冻进程快捷键）
  类型：按键/复合；默认：`{ { "Keybind", {VK_LMENU, VK_F7 } }`}。切换目标进程挂起/恢复。
- Topmost/U Keybind（置顶/取消置顶快捷键）
  类型：按键/复合；默认：`{ { "Keybind", {VK_LMENU, VK_F8 } }`}。切换 TOPMOST。
- Hide/Show Keybind（隐藏/显示快捷键）
  类型：按键/复合；默认：`{ { "Keybind", {VK_LMENU, VK_F5 } }`}。切换窗口可见性。
- Destroy Keybind（发送销毁消息快捷键）
  类型：按键/复合；默认：`{ { "Keybind", {VK_LMENU, VK_F11 } }`}。发送销毁消息。
- Update Keybind（更新窗口快捷键）
  类型：按键/复合；默认：`{ { "Keybind", {0 } }`}。触发窗口刷新/重绘。
- Lock Update Keybind（锁定更新快捷键）
  类型：按键/复合；默认：`{ { "Keybind", {VK_LMENU, VK_F10 } }`}。调用 LockWindowUpdate 锁定更新。
- EndSession Keybind（发送结束会话消息快捷键）
  类型：按键/复合；默认：`{ { "Keybind", {VK_LMENU, VK_F12 } }`}。发送结束会话消息。
- Sink Keybind（沉没窗口快捷键）
  类型：按键/复合；默认：`{ { "Keybind", {0 } }`}。把窗口下沉到底层。

历史更新
- 9. 为 WindowMaster 添加注入式隐私设置功能。
- 9. WindowMaster HUD 不再超出左侧和顶部边缘。
- 21. Window Master 添加 Target 配置。
- 19. 修复默认按键冲突问题。

备注
WindowMaster 部分动作会改变窗口扩展样式或可见性，建议优先绑定不常用组合键，并先在非关键窗口演练。
若 `Phantom Window Opacity` 改动后视觉未变化，通常是目标不在幻影窗口列表；先执行一次 Toggle Phantom Window。

相关命令

/aim
打开窗口锁定器，按下 Esc 取消，按下 Ctrl 锁定前端窗口，按下 Alt 锁定鼠标指向的窗口。
倒计时 30 秒，超时后自动取消。

/foreground
/fore
五秒后自动锁定前端窗口并赋值给 it.

/pointat
/here
/there
五秒后自动锁定鼠标指向的窗口并赋值给 it.

/foregroundproc
/foreproc
五秒后自动锁定前端窗口所属的进程并赋值给 it.

/pointatproc
/hereproc
/thereproc
五秒后自动锁定鼠标指向的窗口所属的进程并赋值给 it.

/focus [hwnd]
/focus2 [hwnd]
聚焦窗口。后者不会使用 SW_RESTORE 还原窗口。如果不填参数，则为客户端主窗口。

/close [hwnd]
向窗口发送关闭消息。超时时间为1秒。若不填参数则启用 Hidden 模块。

/destroy <hwnd>
向窗口发送销毁消息。超时时间为1秒。	

/max [hwnd]
最大化窗口。

/min [hwnd]
最小化窗口。

/show [hwnd]
显示窗口。

/shownormal [hwnd]
正常显示窗口。

/hide [hwnd]
隐藏窗口。

/invisible [hwnd]
将窗口不透明度改为1（完全不透明是255）

/screenshot [hwnd]
只给指定窗口截图。如果不指定参数，则切换 Screenshot 模块。 

/ocr file <path...>
对指定路径的图片进行文字识别。

/ocr window <hwnd>
对指定的窗口内容进行文字识别。

/ocr windowex <hwnd>
对指定的窗口内容进行文字识别。将会输出更详细的信息，包括坐标等。

相关模块
- [PrivateWindow (隐私窗口)](./PrivateWindow.md)
- [WindowTags (窗口标签)](./WindowTags.md)
- [WindowHighlight (窗口高亮)](./WindowHighlight.md)
- [WindowESP (窗口透视)](./WindowESP.md)
- [TargetHUD (目标显示)](./TargetHUD.md)

相关资料
无
