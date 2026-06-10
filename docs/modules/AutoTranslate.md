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
  类型：组合框；默认："Periodic"。决定识别触发时机。
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
  类型：按键/复合；默认：`{ { "Keybind", {VK_CAPITAL } }`}。清空结果并强制重新显示文本。

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