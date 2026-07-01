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

配置项界面分为好几种类型。对于 `Dropdown` 下拉式界面，请调节 `GUI` 选项的 `Module Option Style` 模块配置风格 来调整。

### 2.1 Dropdown Old (下拉式界面的老式配置项界面)

在 `Module Option Style` = `Old` ，以及 `Config` `GUI` `HUD` `Sound` 配置项界面，配置项会显示在一个单独的页面里。

### 2.2 Dropdown Integration (下拉式界面的集成配置项界面)

在 `Module Option Style` = `Integration` 时，模块配置项会显示在模块的下方，类似于一个抽屉或者卡片，可以直接调节。

### 2.3 Neverlose Card (NL的卡片式配置项界面)
在 `NL Module Option Style` = `Card` 时，模块配置项会显示在模块的下方，类似于一个小卡片，可以直接调节。

### 2.4 Neverlose Page (NL的页面式配置项界面)

(v1.1.2)
在 `NL Module Option Style` = `Card` 时，模块配置项会单独在右侧作为一列，方便调节。

### 2.5 Neverlose Flyout (NL的飞出式配置项界面)

(v1.1.2)
在 `NL Module Option Style` = `Flyout` 时，模块配置项会单独在`GUI`窗口的右侧作为独立的小窗口，开启和关闭具有飞出和飞入动画，非常好看。这个配置项窗口默认吸附在`GUI`窗口的右侧；你也可以拖动标题栏进行移动。注意，`GUI`窗口最大化时，该窗口将自动关闭。