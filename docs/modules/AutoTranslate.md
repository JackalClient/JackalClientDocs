# AutoTranslate
自动翻译
分类：Window
描述：自动翻译并展示目标窗口的文本。

## 需求
- 安全级别：常规模块
- 恶意属性：否
- 权限需求：无
- 驱动依赖：否
- 联网需求：是（语言检测与翻译链路依赖在线服务）
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
AutoTranslate 会对目标窗口（或全屏）截图做 OCR，再按阈值过滤、可选文本合并，并把结果翻译后叠加显示。
推荐调参顺序：先定 Target/Trigger，再定识别质量（置信度与合并），最后再调视觉样式。

## 配置项

> 配置界面说明（v1.1.7）：配置项按触发、识别、翻译、原文和译文分组，无效的合并及背景子项会自动隐藏。
- Async（异步）
  类型：布尔；默认：true。开启后识别流程在异步线程执行，减少主界面阻塞。
- Target（目标）
  类型：组合框；默认："Foreground"。决定抓图来源。
  可选：Screen（屏幕）；Foreground（前端）；PointAt（指向）。
- Screen Mode Exclude Client（屏幕模式排除客户端）
  类型：布尔；默认：true。Screen 模式时临时排除客户端自身窗口，避免 HUD/菜单文字被重复识别。
- Action（行为）
  类型：组合框；默认："Translate"。决定是否只做识别或识别+翻译。
  可选：Translate（翻译）；Recognize（识别）。
- Source Language（源语言）
  类型：组合框；默认："English"。用于 OCR 语言包与后续翻译判定。
  可选：English（英语）；Chinese（中文）。
- Text Color（文本颜色）
  类型：组合框；默认："Rainbow"。普通文本颜色。
  可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)。
- Text Color (Pointed At)（文本颜色 (指向)）
  类型：组合框；默认："Green"。鼠标指向文本时的颜色。
  可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)。
- Translation Result Color（翻译结果颜色）
  类型：组合框；默认："Yellow"。译文文本颜色。
  可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)。
- Text Background Color（文本背景颜色）
  类型：组合框；默认："Red"。普通文本背景色。
  可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)。
- Text Background Color (Pointed At)（文本背景颜色 (指向)）
  类型：组合框；默认："Dark Green"。指向文本背景色。
  可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)。
- Translation Result Background Color（翻译结果背景颜色）
  类型：组合框；默认："Black"。译文背景色。
  可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)。
- Translation Max Thread Count（翻译最大线程数）
  类型：数值；默认：20。翻译并发上限；越大吞吐越高，但瞬时占用也更高。
- Texts Pointed At（指向文本显示）
  类型：组合框；默认："Raw"。鼠标指向文本时显示策略。
  可选：Hidden（隐藏）；Raw（原始）；Result（结果）。
- Show Texts（显示文本）
  类型：布尔；默认：true。HUD 渲染总开关。
- Text Background（文本背景）
  类型：布尔；默认：true。是否绘制文本底板。
- Text Background Opacity (0~1)（文本背景不透明度 (0~1)）
  类型：数值；默认：0.5f。普通文本底板透明度。
- Text Background Opacity (Mouse Pointed At) (0~1)（文本背景不透明度 (鼠标指向) (0~1)）
  类型：数值；默认：0.5f。指向文本底板透明度。
- Text Min Size（文本最小字号）
  类型：数值；默认：20。原文最小字号。
- Text Max Size（文本最大字号）
  类型：数值；默认：80。原文最大字号。
- Translation Result Min Size（翻译结果最小字号）
  类型：数值；默认：30。译文最小字号。
- Translation Result Max Size（翻译结果最大字号）
  类型：数值；默认：100。译文最大字号。
- Text Opacity (0~1)（文本不透明度 (0~1)）
  类型：数值；默认：0.8f。文本本体透明度。
- Recognize Min Confidence (0~100)（识别最小置信度 (0~100)）
  类型：数值；默认：80.0f。低于阈值的 OCR 结果会被过滤。
- Trigger Mode（触发模式）
  类型：组合框；默认："Manual"。决定识别触发时机。
  可选：Periodic（周期性）；On Window Change（窗口变化时）；Manual（手动）。
- Merge Texts Into Groups（合并文本为组）
  类型：布尔；默认：true。把碎片化 OCR 框合并后再翻译，减少断词断句。
- Merge Texts Vertical Gap Threshold（Merge Texts 纵向 Gap Threshold）
  类型：数值；默认：0.5f。纵向合并阈值。
- Merge Texts Horizontal Gap Threshold（合并文本横向空隙阈值）
  类型：数值；默认：3.0f。横向合并阈值。
- Recognize Cooldown (ms)（识别冷却（毫秒））
  类型：数值；默认：3000L。Periodic 模式下的最小触发间隔。
- Toggle Texts Hotkey（切换文本快捷键）
  类型：按键/复合；默认：`{ { "Keybind", {0 } }`}。切换 Show Texts。
- Trigger Hotkey（触发快捷键）
  类型：按键/复合；默认：`{ { "Keybind", {0 } }`}。手动触发一次识别/翻译。
- Re-merge Texts Hotkey（重新合并文本快捷键）
  类型：按键/复合；默认：`{ { "Keybind", {0 } }`}。不重新 OCR，仅对现有结果重做合并/翻译流程。
- Clear Hotkey（清除快捷键）
  类型：按键/复合；默认：Caps Lock。清空结果并强制重新显示文本。

## 历史更新
- 49. 添加模块：AutoTranslate，自动识别文本并翻译展示。

## 备注
`Action=Recognize` 很适合先调 OCR 质量；确认文本框准确后再切回 `Translate`，调翻译显示参数。
若 Screen 模式出现“自己翻自己”，优先检查 `Screen Mode Exclude Client` 是否开启。

## 相关命令
无

## 相关模块
- [PrivateWindow (隐私窗口)](./PrivateWindow.md)
- [WindowMaster (窗口大师)](./WindowMaster.md)
- [TargetHUD (目标显示)](./TargetHUD.md)

## 相关资料
无 
## 新手安装与首次配置

AutoTranslate 由 Tesseract OCR 和在线翻译服务组成。Tesseract 负责从截图中识别文字，在线服务负责语言检测和翻译。两部分都正常时，HUD 才会显示译文。

### 安装 Tesseract OCR

请从可信来源下载 Tesseract 的 Windows 安装包，推荐使用默认目录：

    C:\Program Files\Tesseract-OCR\tesseract.exe

安装时至少准备以下模型文件：

- eng.traineddata：英语
- chi_sim.traineddata：简体中文

模型必须位于安装目录的 tessdata 子目录：

    C:\Program Files\Tesseract-OCR\tessdata\eng.traineddata
    C:\Program Files\Tesseract-OCR\tessdata\chi_sim.traineddata

如果安装程序没有安装中文模型，请下载与 Tesseract 版本兼容的 chi_sim.traineddata 后放入 tessdata。不要把模型文件放在 tesseract.exe 同级目录。

> [图片占位：Tesseract Windows 安装程序和语言包选择页面]

打开 ClickGUI，进入 Tesseract OCR 模块，把 Executable Path 设置为 tesseract.exe 的完整路径。留空时客户端会尝试自动查找：

    C:\Program Files\Tesseract-OCR\tesseract.exe
    C:\Program Files (x86)\Tesseract-OCR\tesseract.exe

自定义安装目录或自动查找失败时必须手动填写。Language 填写模型名 eng 或 chi_sim，不要填写“英语”或“简体中文”。可在 PowerShell 执行以下命令确认模型：

    tesseract --list-langs

当前调用只支持单个模型，不要填写 eng;chi_sim 这样的多语言值；多个值只会使用第一个。

> [图片占位：ClickGUI 中 Tesseract OCR 的 Executable Path 和 Language 配置]

### 第一次使用

建议先设置 Target=Foreground、Action=Recognize、Trigger Mode=Manual、Merge Texts Into Groups=true。为 Trigger Hotkey 绑定按键后，把目标窗口置于前台并按键触发。确认原文位置和内容正确后，再将 Action 改为 Translate。

默认 Trigger Mode 是 Manual，Trigger Hotkey 默认未绑定，因此首次使用不能只打开模块等待结果。

> [图片占位：绑定触发快捷键、识别原文、显示译文的完整流程]

## 配置项详细说明

### 识别与触发

#### Async（异步）

默认 true。开启后识别流程通过后台更新任务执行，减少 OCR 和网络请求对主界面的影响。关闭后便于调试，但耗时操作可能造成短暂卡顿。通常保持开启；它不会让 Tesseract 本身变快，也不会取消翻译并发限制。

#### Target（目标）

默认 Foreground，可选 Screen、Foreground、PointAt。Screen 截取整个屏幕，适合全屏游戏或多窗口文字；Foreground 截取当前前台窗口，最容易调试；PointAt 截取鼠标当前指向的窗口，适合在窗口间移动鼠标后识别。多显示器或 Windows 缩放可能造成框位置轻微偏移。

#### Screen Mode Exclude Client（屏幕模式排除客户端）

默认 true，只对 Screen 生效。截图期间暂时排除 Jackal Client 自身窗口，避免 HUD、菜单和通知被再次识别。建议保持开启；仍然识别到客户端内容时改用 Foreground。

#### Action（行为）

默认 Translate，可选 Translate 和 Recognize。Recognize 只运行 OCR，适合安装检查和调参；Translate 还会进行语言检测和在线翻译。排查问题时先用 Recognize。

#### Source Language（源语言）

默认 English，可选 English 和 Chinese。English 使用 eng 模型，Chinese 使用 chi_sim 模型，并且只翻译检测为所选语言的文字。Chinese 指简体中文，繁体中文、日文和大量中英混排不一定能被当前配置正确处理。

#### Trigger Mode（触发模式）

默认 Manual，可选 Periodic、On Window Change、Manual。Periodic 按冷却时间重复截图，适合持续变化字幕但会增加请求；On Window Change 只在目标窗口句柄变化时识别；Manual 不自动识别，只能由 Trigger Hotkey 触发。所有模式下 Trigger Hotkey 都可以手动触发一次。

#### Recognize Cooldown (ms)（识别冷却）

默认 3000，主要用于 Periodic。数值越小越及时，但截图、OCR 和翻译请求越频繁；静态窗口可提高到 5000 或更大，不建议盲目降低。

#### Translation Max Thread Count（翻译最大线程数）

默认 20，限制同时进行的翻译任务数。值大完成更快，但会增加网络并发和服务限流风险。翻译失败或网络拥堵时可降低到 4 到 8。

#### Recognize Min Confidence (0~100)（最小识别置信度）

默认 80，有效范围 0 到 100。低于阈值的 OCR 结果会被过滤，也不会进入合并和翻译。值高可减少乱码但容易漏小字，值低能保留更多内容但噪声增加。建议从 60 到 80 开始，漏字时降低，错误文字太多时提高。

#### Merge Texts Into Groups（合并文本为组）

默认 true。把同一段中被 Tesseract 拆开的文字框合并后再翻译，通常能减少断词和逐词翻译。关闭后保留原始文字框，适合检查 OCR 底层结果。

#### Merge Texts Vertical Gap Threshold（纵向间距阈值）

默认 0.5，是相对于参考文字高度的倍数而非固定像素。提高可能把相邻行合并，降低可能把同一行拆开。通常保持默认，仅在出现跨行合并或同一行拆分时调整。

#### Merge Texts Horizontal Gap Threshold（横向间距阈值）

默认 3.0，同样相对于参考文字高度。英文句子被拆开时逐步提高；相邻按钮或两列文字被连在一起时降低。修改后可使用 Re-merge Texts Hotkey，无需重新 OCR。

### 显示与快捷键

- Show Texts：默认 true，控制结果是否绘制到 HUD。关闭只隐藏，不停止识别或翻译。
- Text Background：默认 true，控制文字背景矩形，遮挡画面时可关闭。
- Text Background Opacity (0~1)：默认 0.5，普通文字背景透明度。
- Text Background Opacity (Mouse Pointed At) (0~1)：默认 0.5，鼠标指向文字时的背景透明度。
- Text Opacity (0~1)：默认 0.8，文字本体透明度，不影响背景。
- Text Min Size / Text Max Size：默认 20 / 80，原文字号上下限。
- Translation Result Min Size / Translation Result Max Size：默认 30 / 100，译文字号上下限。
- Texts Pointed At：默认 Raw，可选 Hidden、Raw、Result。Hidden 隐藏指向文字；Raw 指向时显示原文，移开后显示译文；Result 始终优先显示译文。

颜色选项包括 Text Color、Text Color (Pointed At)、Translation Result Color、Text Background Color、Text Background Color (Pointed At) 和 Translation Result Background Color，默认依次为 Rainbow、Green、Yellow、Red、Dark Green、Black。颜色来自 NAMED_COLOR_BASE_LIST，调试时建议使用高对比度组合。

快捷键默认值为 {0} 时表示未绑定：

- Trigger Hotkey：触发一次截图、OCR 和后续处理；Manual 模式必须使用。
- Toggle Texts Hotkey：切换 Show Texts，只影响显示。
- Re-merge Texts Hotkey：用已保存 OCR 结果重新过滤、合并和翻译，不重新截图。
- Clear Hotkey：默认 Caps Lock，清空结果并重新开启 Show Texts。

### Notify Result（通知结果）

该键存在于默认配置中，但当前 AutoTranslate 的运行流程不会读取它来控制通知；识别开始、失败等提示仍按客户端既有流程显示。

## Tesseract OCR 模块

- Executable Path：tesseract.exe 完整路径；留空时自动搜索常见 Program Files 目录。
- Language：其他 OCR 功能默认使用的模型名，例如 eng 或 chi_sim；AutoTranslate 以自身 Source Language 为准。
- Documentation：打开相关 OCR 文档。
- Where is Tesseract.exe：通过命令行查找 PATH 中的可执行文件。
- 简体中文：将默认 Language 改为 chi_sim。

## 常见问题

### 识别结果为空

依次检查 Executable Path、tessdata 模型、Source Language 和截图范围。将 Action 改为 Recognize，把置信度临时降到约 60，并确认文字足够大、清晰且有对比度。

### 识别错误、漏字或句子被拆开

确认语言模型正确。漏字时降低置信度；噪声多时提高。保持合并开启并调整横向阈值。完全识别不到时先改善图像质量，单纯降低阈值通常无效。

### 有原文但没有译文

确认 Action=Translate，检查网络和语言检测。模块只翻译检测语言与 Source Language 匹配的文本。可先使用客户端普通翻译功能验证在线翻译链路。

### 识别到客户端自己或位置不对

确认 Screen Mode Exclude Client=true；仍有问题时改用 Foreground。开启 Text Background 检查 OCR 框；多显示器和 Windows 显示缩放可能导致坐标偏移。

## 使用注意

- AutoTranslate 读取屏幕截图，不适合密码、验证码等敏感信息；不要把敏感内容提交给在线翻译服务。
- Periodic 会重复截图并可能重复请求翻译，建议只在需要实时识别时使用。
- 修改目标、语言或触发模式后，建议清除旧结果并重新触发，避免不同截图的结果混在一起。
