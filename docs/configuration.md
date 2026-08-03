# 配置
本页面将介绍 JackalClient 的配置项及其界面。

## 1. 配置项类型

客户端的配置项类型分为：

- `boolean`：布尔类型，用于表示开关。
- `string`：字符串类型，用于表示文本。
- `int`: 整数类型，用于表示数值。
- `float`: 浮点数类型，用于表示数值。可以填写整数类型。
- `combobox`: 下拉框类型，你可以点击后选择一个选项。
- `keybind`: 按键绑定类型，点击后按下键（支持组合键）即可。
- `button`: 按钮类型，无法编辑，点击后可以执行一条特定的命令。

## 2. 配置项界面

配置项界面分为好几种类型，下面都有图片参考。对于 `Dropdown` 下拉式界面，请调节 `GUI` 选项的 `Module Option Style` 模块配置风格 来调整。

### 2.1 Dropdown Old (下拉式界面的老式配置项界面)

在 `Module Option Style` = `Old` ，以及 `Config` `GUI` `HUD` `Sound` 配置项界面，配置项会显示在一个单独的页面里。

![Dropdown-Old](/dropdown-old.jpg)

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
