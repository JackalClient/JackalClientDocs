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

## 2. 配置项界面

配置项界面分为好几种类型，下面都有图片参考。对于 `Dropdown` 下拉式界面，请调节 `GUI` 选项的 `Module Option Style` 模块配置风格 来调整。

### 2.1 Dropdown Old (下拉式界面的老式配置项界面)

在 `Module Option Style` = `Old` ，以及 `Config` `GUI` `HUD` `Sound` 配置项界面，配置项会显示在一个单独的页面里。

![Dropdown-Old](/dropdown-old.jpg)

### 2.2 Dropdown Integration (下拉式界面的集成配置项界面)

在 `Module Option Style` = `Integration` 时，模块配置项会显示在模块的下方，类似于一个抽屉或者卡片，可以直接调节。

![Dropdown-Integration](/dropdown-intergration.jpg)

### 2.3 Neverlose Card (NL的卡片式配置项界面)
在 `NL Module Option Style` = `Card` 时，模块配置项会显示在模块的下方，类似于一个小卡片，可以直接调节。

![Neverlose-Card](/neverlose-card.jpg)

### 2.4 Neverlose Page (NL的页面式配置项界面)

(v1.1.2)
在 `NL Module Option Style` = `Card` 时，模块配置项会单独在右侧作为一列，方便调节。

![Neverlose-Page](/neverlose-page.jpg)

### 2.5 Neverlose Flyout (NL的飞出式配置项界面)

(v1.1.2)
在 `NL Module Option Style` = `Flyout` 时，模块配置项会单独在`GUI`窗口的右侧作为独立的小窗口，开启和关闭具有飞出和飞入动画，非常难看。这个配置项窗口默认吸附在`GUI`窗口的右侧；你也可以拖动标题栏进行移动。注意，`GUI`窗口最大化时，该窗口将自动关闭。

![Neverlose-Flyout](/neverlose-flyout.jpg)

## 3. 配置项编辑

### 3.1 布尔类型

点击即可切换。具有切换动画和音效。

![Boolean](/boolean.jpg)

### 3.2 字符串类型

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

### 3.3 整数类型

点击即可编辑。下面具有滑动条，可以滑动。也可以用鼠标滚轮进行微调。

![Int](/int-option.jpg)

### 3.4 浮点数类型

浮点数就是小数的意思。点击即可编辑。支持使用整数，将自动转换为浮点数。下面具有滑动条，可以滑动。也可以用鼠标滚轮进行微调。

![Float](/float-option.jpg)

### 3.5 下拉框类型

点击即可选择。具有切换动画和音效。

![Combobox](/combobox.jpg)

### 3.6 按键绑定类型

点击即可编辑。下面具有滑动条，可以滑动。也可以用鼠标滚轮进行微调。

![Keybind](/keybind.jpg)
