NAMED_COLOR_BASE_LIST
命名颜色列表
这并不是一个模块，而是一个客户端颜色预设宏。
供各模块颜色类 Combobox 配置项复用的颜色预设集合

## 介绍
该列表用于颜色相关配置项（如 HUD Color、Text Color、Background Color）。当模块配置项可选值引用 NAMED_COLOR_BASE_LIST 时，默认表示可以在这些预设色中选择。

## 配置项
无

## 备注
为了避免在每个模块文档重复展开，本列表单独维护。

## 可选项

- Black（黑色）
- Gray（灰色）
- White（白色）
- Red（红色）
- Gold（金瓜子）
- Yellow（黄色）
- Green（绿色）
- Dark Green（深绿色）
- Aqua（淡蓝色）
- Blue（蓝色）
- Magenta（品红色）
- Pink（粉色）
- Purple（紫色）
- Pink-Magenta（粉-紫组合）
- Red-Orange（红-橙组合）
- White-Gray（白-灰组合）
- Aqua-Blue（浅蓝-蓝组合）
- Aqua-Pink（淡蓝-浅粉组合）
- Green-Red（红-绿组合）
- Astrolfo（未收录）
- Colorful（缤纷）：对于每一种元素，都映射一种不同的颜色。
- Rainbow（彩虹色）

有些模块会提供 `Flow`，这是一种基于`着色器`的流动颜色，非常华丽。你可以在 [Shader](/docs/modules/Shaders.md) 模块中找到相关配置项。
有些模块会提供 `Transparent`，意思是透明。

## 相关资料
无

