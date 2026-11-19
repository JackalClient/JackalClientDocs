# InGame Renderer
游戏内渲染
分类：Render
模块与配置使用完整英文名 `InGame Renderer`；旧档案中的 `InGameRenderer` 会自动兼容迁移，保留原有设置。
描述：使用 Dear ImGui 将客户端状态直接绘制到目标 OpenGL 渲染器，改善 Minecraft Java 版独占全屏下覆盖层无法显示的问题。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 版本属性：常规

## 介绍
InGameRenderer ，自 `v1.2.2` 版本加入，向目标进程注入轻量 Dear ImGui OpenGL DLL，并在最终 `SwapBuffers` / `wglSwapBuffers` 前绘制客户端画面。首次启用前需要先下载 `in-game-renderer` 扩展，模块会从扩展目录加载与目标进程架构匹配的 DLL。

游戏内界面与桌面客户端共用 Dear ImGui ClickGUI 代码，包含 `Modules`、`Config`、`GUI`、`HUD`、`Sound`、`Search`、`IRC`、`Command`、`Profiles` 和 `About` 页签。支持模块启停、配置分组与显示条件、多选、文本、颜色、快捷键和按钮操作；IRC 与 Command 显示客户端聊天历史，并会把命令执行成功、失败或未知命令的提示发送到游戏内通知。Profiles 可直接加载现有配置档案，Command 输入框位于页面左下角。

`Jackal HUD` 使用多选配置，可同步 ArrayList、Chatter、Notification、Live Stream 观众、Music Overlay、Actionbar、Title、Session HUD、Performance HUD、Island、Chat Bar、Time Display、Desktop Lyrics、Audio Visualizer、Keystrokes、Keystrokes2、Watermark、Player List、Karaoke、Custom HUD 与 Clipboard ESP。HUD 只在对应桌面模块启用时显示，并随游戏 Present 帧更新；启用菜单隐藏选项时，打开游戏菜单或显示游戏内鼠标都会隐藏 HUD。所有 HUD 都支持 `Give Way to Mouse` 鼠标避让，HUD 后方的模糊层会同步淡出。游戏内右下角的 `HudEditor` 可拖动已显示 HUD，并同步到对应模块的位置配置；Custom HUD 每个文本元素使用独立编辑矩形，支持缩放的 HUD 可通过右下角手柄实时调整字号或 Scale。Player List 暂不绘制头像，Custom HUD 仅同步文本元素，Clipboard ESP 不绘制图片预览。

游戏内 Notification 与桌面端共用相同的弹性位移曲线、尺寸换算和消息类型颜色。Island、Desktop Lyrics 和 Audio Visualizer 保留主要布局、位置平滑、状态转场和频谱平滑。专业版 HUD Blur (PRO) 会捕获当前游戏 back buffer，通过多轮水平/垂直高斯 shader 在 HUD 与 ClickGUI 半透明背景下方生成圆角模糊，并支持采样次数、亮度、标准 Blur 与 Liquid Glass 模式；Liquid Glass 通过独立 shader 混合原始与模糊纹理并加入折射和边缘高光。每个 HUD 与按键使用自身范围裁切。ArrayList 的 `Text Glow` 使用多方向几何发光，桌面端图片和自定义 Shader 相关能力仍受纹理资源通道限制。

## 配置项
- Render Timing（渲染时机）
  类型：枚举；默认：After First Exclusive Fullscreen。
  `Exclusive Fullscreen Only` 在目标进入独占全屏时注入，退出全屏后自动卸载；`After First Exclusive Fullscreen` 在首次进入独占全屏后保持到目标进程退出；`Hotkey` 只在按下注入热键时附加。

- Inject Hotkey（注入热键）
  类型：快捷键；默认：Ctrl+Alt+I。

- Unload Hotkey（卸载热键）
  类型：快捷键；默认：Ctrl+Alt+U。

- Only Inject Minecraft（仅注入 Minecraft）
  类型：布尔；默认：开启。开启时忽略进程白名单和黑名单，只接受 Minecraft Java 版。

- Process Whitelist（进程白名单）
  类型：字符串集合；默认：空。非空时只允许列表中的进程映像名。

- Process Blacklist（进程黑名单）
  类型：字符串集合；默认包含系统关键进程与 `Snipaste.exe`。匹配项始终被拒绝，并优先于白名单。

- Persist Last Target（恢复上次目标）
  类型：布尔；默认：开启。Jackal Client 重启后恢复最后一个仍在运行的目标。

- In-Game HUD Enabled（游戏内 HUD）
  类型：布尔；默认：开启。控制游戏内 Jackal HUD 总开关。

- Jackal HUD
  类型：多选；专业版默认全选，免费版默认勾选所有免费 HUD。Performance HUD、Session HUD、Chat Bar、Karaoke、Player List、Desktop Lyrics 为专业版独有，选项以 `(PRO)` 标记。

- HUD Blur (PRO)
  类型：枚举；专业版默认 Sync，免费版固定 Never。`Never` 关闭游戏内模糊；`Sync` 跟随桌面 HUD Blur 模块开关；`Always` 即使关闭 HUD Blur 模块，也会在 HUD 与 InGame ClickGUI 背景后应用模糊。

- HUD Blur Strength（HUD 模糊强度）
  类型：数值；默认：30。控制游戏内 HUD 模糊的采样半径，数值越高越模糊，GPU 开销也越高；仅在 `HUD Blur (PRO)` 不是 `Never` 时显示。

- HUD Blur Taps（HUD 模糊采样次数）
  类型：整数；默认：6。控制累积的可分离模糊轮数，数值越高画面越柔和，GPU 开销也越高。

- HUD Blur Brightness（HUD 模糊亮度）
  类型：数值；默认：0.5。调整捕获背景在 HUD 合成前的亮度，仅在 `HUD Blur (PRO)` 不是 `Never` 时显示。

- HUD Blur Mode（HUD 模糊模式）
  类型：枚举；默认：Blur。`Blur` 使用标准高斯模糊；`Liquid Glass` 额外加入边缘折射、冷色高光、色散和饱和度处理。

- HUD Glass Refraction / Edge Highlight / Chromatic Aberration / Saturation
  类型：数值。分别控制液态玻璃的折射、边缘高光、红蓝色散和饱和度，仅在 `HUD Blur Mode` 为 `Liquid Glass` 时显示。

- ClickGUI Simplified Modules（ClickGUI 简化模块列表）
  类型：枚举；默认：Fold。Never 显示完整模块；Fold 默认只显示云控 InGame 名单，可点击标题下方的 Display Complete GUI 临时展开，关闭菜单后恢复简化；Always 始终显示简化列表。模块仍按原类别排列，空类别自动隐藏；搜索也使用相同名单。名单维护于 Ricochesta 的 data/ModuleAttributes.json，不改变模块权限。

- ClickGUI Scale（ClickGUI 缩放）
  类型：数值；默认：2.0。只影响游戏内 ClickGUI，可使用 Ctrl+滚轮调整并持久化。

- Font（字体）
  类型：枚举；默认：Client。`Client` 使用桌面客户端当前字体文件，包括资源市场字体；`Legacy` 使用内置系统字体回退；`Custom` 使用 `Custom Font Path`。

- Custom Font Path（自定义字体路径）
  类型：字符串；默认：空。仅 `Font` 为 `Custom` 时显示，支持 UTF-8 路径下的 TTF/OTF；无效路径回退到 Legacy。

- Prevent Duplicate Overlay（避免桌面与游戏内重复显示）
  类型：布尔；默认：开启。非独占全屏且桌面 HUD 已显示时，不再同时绘制游戏内 HUD。

- Release Mouse Cursor（释放鼠标）
  类型：布尔；默认：开启。游戏内菜单打开时释放系统鼠标限制。

- Disallow GUI Open When Cursor Hidden（光标隐藏时禁止打开 GUI）
  类型：布尔；默认：开启。游戏鼠标隐藏时菜单键不会打开 ClickGUI，并显示警告通知。

## 输入与显示行为
- 点击右下角 HudEditor 会隐藏 ClickGUI 主面板，保留 HUD 拖动和缩放交互；再次点击 HudEditor 返回面板，按菜单键可退出编辑。
- 菜单打开时，游戏窗口收到的鼠标、滚轮和键盘消息由游戏内界面处理，输入框不会因游戏重新捕获鼠标而丢失焦点。
- 多选下拉显示配置键名、已选数量和独立复选项；右侧配置页支持横向滚动。
- Music Overlay 的长标题循环滚动，卡片宽度随文字内容变化，时间轴与时间只在数据有效时显示；SMTC 艺人未知时显示播放来源，网易云音乐使用自己的有效时间轴。状态、标题、艺人和时间轴分别占独立行，时间轴不会与艺人文字重叠。`Auto Hide` 支持 `Off`、`Paused` 和 `Idle`，隐藏时沿最近屏幕边缘滑出，并在播放状态或歌曲变化后恢复。
- Notification 使用黑色卡片、消息类型色底部进度条、自动换行和自适应高度，并采用桌面端的 EaseInExpo 位移与淡出节奏。启动、错误和交互提示统一进入该通道，不再使用旧的右下角消息卡。
- Chat Bar 的新消息按桌面的 `appearLerp` 从左侧进入；动态背景按当前可见内容计算高度，过期消息由背景裁剪，不再保留长时间淡出的空白行。Desktop Lyrics 使用稳定的歌词序号隔离相同歌词的动画状态，当前行滚动和换行按配置缓动，修复重复歌词塌缩和行距异常，并支持逐字状态、高级高亮和暂停显示策略。
- Island 不自动换行，超长文本直接裁剪；普通状态宽度使用桌面端按 Smooth/Elastic 曲线计算的结果，idle 状态则使用游戏内 ImGui 字体重新测量文本，按内容生成刚好容纳左右内边距的宽度，必要时只为 idle 文本适度缩小字号。通知标题与正文使用同一份当前颜色过渡，进度条按文字宽度绘制并使用配置高度，圆角随高度增加而相对收缩；未完整进入显示区域的通知不会绘制。Island 支持多通知堆叠、歌词居中滚动、关键词高亮与逐句入场，并同步歌词译文；Garble、Sine、Stagger、Cascade、Converge、Soft Reveal、Tilt、Float 和 Flip 等 PRO 入场效果按配置与持续时间分别执行。按住隐藏快捷键时岛体会持续移出屏幕。Audio Visualizer 支持 Bar Graph 与 Line Wave 的平滑频谱。
- Live Stream 的标题与顶部信息使用桌面字号的 70% 和更紧凑行距。观众 HUD 第二行显示 `[V 财富等级]`、用户等级和带纯色背景的粉丝牌；财富文字使用桌面端财富颜色，用户等级使用深红色，在线人数标签显示为 `Online`。Title HUD 使用主 ImGui 字体绘制，不使用多重偏移文字模拟模糊。
- HUD Blur 为每个 HUD 按自身 UV 范围裁切，并按背景圆角生成遮罩；Keystrokes 与 Keystrokes2 的每个按键单独模糊，模块关闭时对应模糊也会停止。模糊纹理按正确上下方向采样，并保留接近原始画面的亮度。`HUD Blur Strength` 可调整采样半径，`HUD Blur Taps` 可增加多轮累积以减轻块状和生硬边缘。Liquid Glass 使用自定义显示 shader，不再退化为普通模糊图片。
- Desktop Lyrics 的当前行与历史行使用稳定的歌词序号进行缓动，不再因列表重排突然跳到新位置；`X Rate` 使用桌面端锚点语义，Left 从该点向右、Right 从该点向左、Center 以该点居中，主歌词和译文均裁剪在对应文本区域内。`Translation Position=Override` 直接以译文替换当前歌词。`Give Way to Mouse Mode` 支持逐行淡出和整块淡出。Tint、Fade、Karaoke 和 Animation 模式优先使用真实歌词时间轴，没有时间轴时才使用逐字计时。ArrayList 条目带缓动入场、退场与 `Text Glow` 发光，Music Overlay 始终限制在游戏窗口边界内。
- HUD 使用独立高分辨率字体图集改善大字号清晰度。Give Way to Mouse 使用游戏客户区实时鼠标坐标。Island idle 宽度扣除未绘制的图标槽；Live Stream 的 Host 和 Mod 标识分别使用粉色和黄色；Karaoke 长英文按窗口宽度缩放。ClickGUI 会保留正在编辑的文本草稿，避免再次打开菜单后输入框立即失焦。
- 字体根据模块、HUD、IRC 和命令内容动态扩展中文字形，切换字体后会重新构建字形图集。

## 菜单快捷键
渲染器就绪且目标游戏窗口处于前台时，客户端菜单快捷键交由游戏内界面处理；切换到其他窗口后，快捷键恢复为桌面客户端菜单开关。开启 `Disallow GUI Open When Cursor Hidden` 后，需先显示游戏鼠标才能打开游戏内菜单。

## 生命周期与故障处理
DLL 持续检查 Owner PID 与心跳。客户端崩溃或长时间失联后，DLL 会停止绘制并尝试移除 Hook、自行卸载；如果卸载失败，会隐藏全部 HUD，只保留右下角英文断开提示，不会继续显示最后一份旧快照。

OpenGL Present hook 安装时优先更新当前线程与游戏窗口所属渲染线程，找不到窗口线程时才回退到全进程线程枚举。大型 Java/Modpack 进程最多等待 20 秒完成 hook 安装，避免线程数较多时被 5 秒超时误判为失败。

## 当前限制
- 主要支持 Windows 与 OpenGL 2.1 兼容上下文；Bedrock、D3D、Vulkan 和非 Windows 平台不在支持范围。
- 独占全屏下暂不支持外部输入框、文件选择器和 MessageBox，相关操作会提示先退出独占全屏。
- 当前游戏内覆盖层不具备纹理资源通道，实际图片渲染尚未支持：直播头像、音乐封面、聊天图片和 Island 图片会隐藏占位符，不会显示成 `{wolf.png}` 等文字。Dear ImGui 本身支持纹理，后续需要由客户端解码并通过共享内存传输像素，或在注入端增加受控的纹理资源协议。
- HUD Blur (PRO) 已提供按区域裁切、圆角、亮度、强度和后处理式 Liquid Glass，但仍需针对 sRGB、MSAA 和多 FBO 模组继续验证。ArrayList 文字发光已通过几何多遍绘制实现，独立的 bloom framebuffer 和任意桌面自定义 Shader 尚未接入；文字、几何、圆角、裁剪、透明度、颜色和逐帧动画可以正常使用。
