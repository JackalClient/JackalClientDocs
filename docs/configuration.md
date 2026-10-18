# 配置
本页面将介绍 JackalClient 的配置项及其界面。

## GUI 主窗口配置

以下选项位于 GUI 的 Main Window 分组：

- `Topmost Condition`：默认 `Usual`，沿用原有置顶策略；`Menu Off` 仅在菜单关闭时置顶，打开菜单时主动取消置顶；`Menu On` 仅在菜单开启时置顶，关闭菜单时主动取消置顶。显式菜单条件不会被 Better Topmost 或主窗口的自动置顶恢复覆盖，其他应用窗口可以正常交互。
- `Client Window Size Mode`：默认 `Always Work Area`。`Always Work Area` 始终使用系统工作区；`Work Area When Menu On` 在菜单打开时使用工作区，关闭时使用全屏预设；`Always Fullscreen` 始终使用全屏预设。位置与尺寸 Offset 仍会生效。
- `Black Screen Problem Fix`：启用时，全屏预设会在高度上保留 2 像素的非全屏余量，菜单切换和窗口恢复后仍维持该修复，避免透明区域因全屏优化变黑。

`Window Display Mode` 已移除，客户端统一使用 `Undecorated`，不再支持 `Borderless`。Neverlose 的点击外部关闭只在客户端可接收输入时判断，并按菜单的实际动画区域命中，不会把失去焦点期间的输入当作菜单外点击。

## 登录弹窗与手绘对话框

AuthGUI 支持拖动标题栏空白区域，暂时隐藏菜单后保留弹窗位置。AuthGUI 与 Msgbox2 手绘对话框随 `Menu Toggle Animation` 使用相同的动画类型、时长及缩放锚点；拖动允许部分移出屏幕，但会保留可操作的标题栏。

Msgbox2 的 Dark、Light、Fiction 风格均保护后方 GUI 的不透明度，不依赖 Shader 模块；按钮文字按当前语言和字体居中，类型图标不额外绘制彩色背景。按菜单快捷键（默认 RAlt）可暂时隐藏对话框并操作其它窗口，再次打开会恢复对话框；隐藏期间不会响应按钮、确认键或拖动，自动超时仍正常执行。

## 重置与模块启用确认

`GUI` 的 `Reset Button Confirmation` 开启时，点击模块或 Config、GUI、HUD、Sound 分区的重置按钮会弹出 Msgbox2，选择“是”才执行；选择“否”保留原配置，无需按住 Ctrl 或 Shift。Neverlose、Dropdown Old、Dropdown Integration 的重置入口共用该行为。关闭该选项仍会直接重置，搜索筛选模式仍只重置匹配项。

`Config` 的 `Privileges & Safety` 分组包含以下策略：

| 配置项 | 默认值 |
| --- | --- |
| `Driver-Used Modules` | Confirm |
| `Unsafe Modules` | Confirm |
| `Work-in-progress Modules` | Deny |

三项均可选 `Deny`（禁止）、`Shift + Click`（鼠标启用时需按住 Shift）、`Confirm`（通过 Msgbox2 确认启用）、`Allow`（直接通过此项策略）。同一模块涉及多项确认时合并为一个弹窗，确认前不尝试提权；确认后仍需满足权限和其他限制。确认只对当次启用有效，隐藏菜单后可继续回答；启动恢复已保存的开启状态不会重复弹窗。已有 Profile 保留原选择，可手动改为 Confirm 或重置配置使用新默认值。

## Neverlose 分类导航

以下选项位于 GUI 的 `Neverlose Categories` 分组，只在 `ClickGUI Style` 为 `Neverlose` 时显示：

| 配置项 | 默认值 | 作用 |
| --- | --- | --- |
| `NL Category Text Color` | White | 左栏分类名称的文字颜色。 |
| `NL Category Name Case Style` | Normal | 英文分类名称的大小写风格，不影响中文。 |
| `NL Category Icons` | true | 是否显示分类图标；关闭时始终显示名称，避免导航项不可见。 |
| `NL Category Icon Opacity (0~1)` | 0.8 | 分类图标的不透明度；仅在分类图标开启时显示，0 为透明，1 为不透明。 |
| `NL Category Text Display` | Always | 图标开启时可选 Always、Only Selected、Never；也可右键分类循环切换。 |
| `NL Category Icon Color Mode` | Theme | Theme 跟随 NL Theme Color，Color 使用自定义图标颜色。 |
| `NL Category Icon Color` | Blue | Color 模式的图标颜色。 |
| `NL Category Icon Theme Color Rate (0~1)` | 0.75 | Theme 模式由白色向当前主题色混合的比例；0 为白色，1 为主题色。 |
| `NL Category Background Color Mode` | Theme | Theme 跟随主题色，Color 使用自定义分类背景颜色。 |
| `NL Category Background Color` | Blue | Color 模式的背景颜色，也支持旧配置的 Rainbow 和 Flow。 |
| `NL Category Background Theme Color Rate (0~1)` | 0.7 | Theme 模式由白色向当前主题色混合的比例。 |
| `NL Category Background Opacity (0~1)` | 0.6 | 选中分类背景的不透明度；悬停背景使用相同颜色，最大不透明度为该值的 58%。 |

分类背景的颜色设置也影响选中项左侧竖线；选中和悬停背景始终限制在左栏内，不会越过左右面板分界线。图标关闭时隐藏图标颜色和文本显示模式选项；Theme 与 Color 模式只显示各自适用的颜色参数，隐藏不会清空已有值。

旧 Profile 缺少新的 NL 分类字段时，会自动从 `Tab Icons`、`Tab Icon Color`、`Tab Name Case Style`、`Tab Theme Color` 和 `Tab Theme Color Mode` 迁移；已有 NL 字段不会被覆盖。旧 Single、Rainbow、Flow 背景模式分别保留为自定义颜色、Rainbow 和 Flow，旧 Tab 字段仍保留供 Dropdown 使用。`Tab...` 分类设置现在只在 Dropdown 中显示，两个 GUI 的分类外观可独立调整。

`NL Card Background Opacity (0~1)` 在 SystemOverview 中只调节页面与卡片背景，不会降低文字、图标、图表和控件的不透明度。

## 1. 配置项类型

客户端的配置项类型分为：

- `boolean`：布尔类型，用于表示开关。
- `string`：字符串类型，用于表示文本。
- `int`: 整数类型，用于表示数值。
- `float`: 浮点数类型，用于表示数值。可以填写整数类型。
- `combobox`: 下拉框类型，你可以点击后选择一个选项。
- `multi-combobox`：多选下拉框，可以同时选择多个选项。
- `editable combobox`：允许添加自定义候选值的下拉框扩展。
- `color`：统一颜色类型，支持颜色预设、RGBA、Sin 双端颜色和部分配置项的 Flow。
- `string list`：字符串列表类型，每一项都可以单独添加、编辑、清空或删除。
- `text area`：多行文本类型，用于提示词、模板和较长文本。
- `keybind`: 按键绑定类型，点击后按下键（支持组合键）即可。
- `button`: 按钮类型，无法编辑，点击后可以执行一条特定的命令。

## 2. 配置项界面

配置项界面分为好几种类型，下面都有图片参考。对于 `Dropdown` 下拉式界面，请调节 `GUI` 选项的 `Module Option Style` 模块配置风格 来调整。

### 2.1 Dropdown Old (下拉式界面的老式配置项界面)

在 `Module Option Style` = `Old` ，以及 `Config` `GUI` `HUD` `Sound` 配置项界面，配置项会显示在一个单独的页面里。

![Dropdown-Old](/dropdown-old.jpg)

多选、可编辑候选、颜色、字符串列表和多行文本使用独立弹窗；这些弹窗在 Dropdown Old、Dropdown Integration 和 Neverlose 中采用相同的值与操作规则。

### 2.2 Dropdown Integration (下拉式界面的集成配置项界面)

在 `Module Option Style` = `Integration 集成` 时，模块配置项会显示在模块的下方，类似于一个抽屉或者卡片，可以直接调节。

![Dropdown-Integration](/dropdown-intergration.jpg)

### 2.3 Neverlose Card (NL的卡片式配置项界面)
在 `NL Module Option Style` = `Card 卡片` 时，模块配置项会显示在模块的下方，类似于一个小卡片，可以直接调节。

![Neverlose-Card](/neverlose-card.jpg)

### 2.4 Neverlose Page (NL的页面式配置项界面)

(v1.1.2)
在 `NL Module Option Style` = `Page 页` 时，模块配置项会单独在右侧作为一列，方便调节。

![Neverlose-Page](/neverlose-page.jpg)

### 2.5 Neverlose Flyout (NL的飞出式配置项界面)

(v1.1.2)
在 `NL Module Option Style` = `Flyout 飞入飞出` 时，模块配置项会单独在`GUI`窗口的右侧作为独立的小窗口，开启和关闭具有飞出和飞入动画，非常难看。这个配置项窗口默认吸附在`GUI`窗口的右侧；你也可以拖动标题栏进行移动。注意，`GUI`窗口最大化时，该窗口将自动关闭。

![Neverlose-Flyout](/neverlose-flyout.jpg)

## 3. 配置项分组与条件显示

(v1.1.4)
客户端配置项支持分组折叠和条件显示。配置项很多的模块可以把一部分选项收进一个分组里，界面上会用右向箭头标出折叠分组，点击后箭头旋转并显示组内选项。

条件显示表示：某些配置项只有在另一个配置项开启，或者某个下拉选项处于指定值时才会出现。比如开启 `Use Custom Path（是否使用自定义路径）` 后才显示 `Custom Path（自定义路径）`，选择 `Advanced（高级）` 模式后才显示高级参数。

这个机制只改变配置界面的显示方式，不会清空或重置被隐藏的值。把条件重新切回满足状态后，之前设置过的值仍会保留。

搜索模块配置项时，如果搜索命中了折叠分组里的配置项，客户端会临时展开对应分组，方便直接定位和修改。

如果你不希望配置项被条件隐藏，可以在 `Config` 中关闭 `Enable Module Option VisibleWhen（启用模块配置条件显示）`，关闭后相关配置项会直接显示。

## 4. 配置项编辑

### 4.1 布尔类型

点击即可切换。具有切换动画和音效。

![Boolean](/boolean.jpg)

### 4.2 字符串类型

- 点击输入框即可编辑。这个输入框是 Jackal 统一的输入函数：
  
  **√ 支持:**
  - `←/→` 左右移动光标
  - `Home/End` 跳转光标到首/尾
  - `Backspace` 删除光标前的字符
  - `Delete` 删除光标后的字符
  - `Shift+Delete` 清空
  - `Shift+←/→` 从光标处往左或右选择/取消选择一个字符（很实用）
  - `Shift+Home/End` 从光标处选择到首/尾
  - `CapsLock` 大写锁定判定
  - 输入法输入支持（包括坐标定位）
  - `Ctrl+V` 粘贴
  - `Ctrl+A` 全选
  - `Ctrl+T` 新的输入框窗口进行编辑
  - `Ctrl+G` 在新的取色器窗口中选择一种RGB颜色
  - `Ctrl+O` 打开文件选择器，选择一个文件路径
  - `Ctrl+Shift+O` 打开文件选择器，选择一个文件夹路径
  - `Ctrl+U` 反转义（已废弃）
  - `Ctrl+E` 转义（已废弃）
  - `Ctrl+Q` 加双引号（已废弃）
  
  
  **× 不支持:**
  - `Ctrl+C` 复制（即将添加支持）
  - 鼠标定位光标
  - 鼠标拖动已选择文本
  - 右键菜单

- `Esc` 或者 `GUI按键` 取消编辑，`Enter` 确认编辑。
- 你可以看到按键提示。

![String](/string-option.jpg)

### 4.3 整数类型

点击即可编辑。下面具有滑动条，可以滑动。也可以用鼠标滚轮进行微调。

![Int](/int-option.jpg)

### 4.4 浮点数类型

浮点数就是小数的意思。点击即可编辑。支持使用整数，将自动转换为浮点数。下面具有 `滑动条 (Slider)` ，可以滑动。也可以用鼠标滚轮进行微调。
滑动条的取值范围并非绝对，你仍可以单击数字进行手动修改，回车确认编辑。

![Float](/float-option.jpg)

### 4.5 下拉框类型

点击即可选择。具有切换动画和音效。

![Combobox](/combobox.jpg)

### 4.6 按键绑定类型

点击即可编辑。下面具有滑动条，可以滑动。也可以用鼠标滚轮进行微调。

![Keybind](/keybind.jpg)

### 4.7 按钮类型

v1.1.4 新加入的配置项类型，允许你点击后执行相应的命令。鼠标停在上方可以显示介绍。

### 4.8 多选下拉框

多选下拉框外观接近普通下拉框，但允许同时保留多个选项。关闭弹窗时，配置行会显示前两个已选项及其余数量；未选择任何项目时显示 `None`。

- 点击项目可以选中或取消选中，弹窗不会立即关闭。
- 底部的全选和清空按钮会遵守该配置项允许的最少、最多选择数量。
- 选项较多时可以使用鼠标滚轮或右侧滚动条。
- `↑`、`↓` 移动当前项目，`PageUp`、`PageDown` 翻页，`Home`、`End` 跳到首尾，`Enter` 切换当前项目。
- 点击确定后统一保存；取消或按 `Esc` 不保留本次修改。

### 4.9 可编辑候选下拉框

部分单选或多选下拉框允许使用候选列表以外的值。这类下拉框底部会显示黄色的“自定义...”入口。

1. 点击“自定义...”打开输入区域。
2. 输入新值并确认后，新值会加入当前配置的候选列表并自动选中。
3. 用户添加的候选项可以通过列表右侧的删除图标移除。

客户端会保留旧 Profile 中已经存在、但不属于当前默认候选列表的值，不会在加载配置时自动删除。

### 4.10 颜色类型

颜色配置行会显示文字摘要和实时颜色方块。预设名称使用接近实际颜色、并向白色提亮后的文字显示；RGBA 使用空格分隔，例如 `20 24 31 180`，Alpha 为 255 时省略最后一项。Sin 的两个端点都是预设时显示为 `Aqua-Pink`，否则显示 `(Double)`。

颜色弹窗顶部使用标签页切换模式。并非所有配置项都会开放全部模式：

- `Preset`：选择内置颜色预设。纯色直接显示实际颜色，Rainbow 显示并移动完整彩虹周期，Transparent 使用白灰棋盘格表示完全透明。
- `RGBA`：左侧大色板调节饱和度和明度，右侧色相条选择 Hue，下方透明度条调节 Alpha；最下方可直接输入 R、G、B、A 的 0–255 数值。
- `Sin`：在“颜色 1”和“颜色 2”之间切换，每个端点都可以使用预设或 RGBA，并可调节 200–10000 ms 周期和 0–1 相位。
- `Flow`：仅在配置项明确支持流动颜色时显示，配置行和弹窗会实时预览 Flow 着色效果。

RGBA 模式中的透明度条以白灰棋盘格为底。若配置项不支持透明通道，A 固定为 255，相关控件不可编辑。选择颜色时可以拖动色板、色相条和透明度条；确定后保存，取消后恢复打开弹窗前的颜色。

### 4.11 字符串列表

字符串列表用于进程名、关键词、扩展名等多条文本。配置行会显示第一项和其余项目数量，例如 `Minecraft.Windows.exe +2`。

- 每个条目独占一个输入框，左侧 `#N` 表示序号。
- 点击最后一项下方的加号可以新增输入框。
- 输入框有焦点且内容非空时，右侧的 `×` 可以清空当前项；垃圾桶图标用于删除该项。
- 列表较长时可使用鼠标滚轮、滚动条、`↑`、`↓`、`PageUp`、`PageDown`、`Home` 和 `End` 浏览。
- 标题栏中的原始内容按钮可以一次编辑全部项目，各项用英文分号分隔。单个项目本身不能包含英文分号。
- `Ctrl+Enter` 确认编辑，`Esc` 取消。

旧配置名中可能保留 `(Sep With Semicolon)` 后缀以兼容 Profile；界面显示时会自动隐藏这段备注。

### 4.12 多行文本

多行文本用于提示词、模板和长消息。点击配置行后会打开独立编辑弹窗，正文区域支持完整的鼠标和键盘光标操作：

- 单击定位光标，拖动选择文本，`Shift+单击` 扩展选择区间。
- 方向键移动光标，按住 `Shift` 配合方向键选择文本。
- `Home`、`End` 在当前行首尾移动；`Ctrl+Home`、`Ctrl+End` 跳到全文首尾。
- 支持 `Ctrl+A` 全选、`Ctrl+C` 复制、`Ctrl+X` 剪切和 `Ctrl+V` 粘贴。
- `Ctrl+Enter` 确认并关闭，`Esc` 取消本次修改。

鼠标位于正文区域时会显示文本光标。光标移动后会保持短暂可见，再继续正常闪烁。

## 5. 旧配置兼容性

新配置界面继续兼容旧 Profile 中的普通颜色下拉框、`R;G;B` / `R;G;B;A` 字符串、英文分号字符串列表和普通长字符串。打开配置弹窗或切换 Profile 不会自动重写全部旧值；只有在旧格式无法表示新功能时，当前修改的配置项才会升级为新格式。

因此，同一个配置项在不同 Profile 的配置文件中可能采用不同存储形式，但在 GUI 中具有相同的显示和编辑方式。建议通过客户端界面修改配置，不要依赖某一种内部 JSON 形态。
