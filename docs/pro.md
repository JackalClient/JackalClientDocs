# JackalClient 专业版说明

>
> [对应的语雀文档已弃用](https://www.yuque.com/wormwaker/tkpgqw/kplgxdgxv3ry3a52)
>

- 专业版更新速度会比免费版频繁，能使用的模块、命令、主题、配置项也更多！
- 通用问题请见：[JackalClient 常见问题](/faq.md)

Q: 如何调成 `Neverlose` 风格的 GUI？
A: GUI 选项找到 `ClickGUI Style (Restart to Apply)` / `ClickGUI风格（重新打开后应用）`，改成 `Neverlose (PRO)` 就行，不用重新打开客户端。当然也是在这里改回之前的下拉式UI风格。

![Neverlose GUI](/neverlose-gui.jpg)

## Neverlose GUI 说明

- 拖动这个窗口的顶端可以移动；拖动四条边就可以调整大小
- 按 `Win+↑` 可以最大化窗口，`Win+↓` 还原窗口，再按一次关闭 `GUI`。
- 按 `Ctrl+Tab` 可以快捷切换标签页，鼠标放在左边可以用滚轮滚动。
- 在右侧区域`滚轮`，`↑↓`，`Home/End` 都可以滚动或跳转。
- 点击窗口外的区域，或者按下右上角的按钮，都可以关闭 `GUI`
- 对于每一个模块卡片，左键右键均可展开或折叠。如果配置项很多，就具有内部滚动，同样也支持 `↑↓` 和 `Home/End`。
- 上方的搜索是全局搜索，从所有模块中搜索。点击搜索框后右侧出现搜索模式，你可以搜索模块名称，也可以搜索配置项。按下 `Ctrl+M` 快速切换。
- 右上角会显示在线人数，如果你把鼠标放在上面，还可以看到有哪些用户在线。
- 右上角还有几个按钮，分别是保存、设置和关闭。
- 所有 GUI 状态都会保存到 `Records`，下一次打开仍能恢复
- `Settings` 是设置界面，把 `Config/GUI/HUD/Sound` 放在这里了。
- `Profiles` 是选择配置界面。
- 点击左上角 `Logo` 进入 `关于` 界面。
- 点击左下角可以进入`用户信息`界面，查看你的个人信息，可以修改密码、修改昵称、退出登陆等。下面有一个框，你可以快捷输入聊天室消息以及直播间弹幕。

![User Profile](/neverlose-user-profile.jpg)

## 常见问题

Q: 如何做到下图的效果，把模块简介放入模块卡片中？
A: GUI 选项找到 `Description Position （简介位置）` 改为 `Inside（内部）` 即可。这个选项仅供 `Neverlose` 风格界面使用。

![Description Inside](/neverlose-desc-inside.jpg)


Q: 为什么没联网无法启动客户端
A: 加了验证系统，因此专业版启动时必须联网。

Q: 是否添加卡密验证系统
A: 二六年三月下旬已添加。详见 [《JackalClient 新版IRC和验证系统说明》](./pro-auth.md)。

Q: 专业版有无其他额外内容
A: 自二五年十二月开始，已经陆陆续续在添加了，你可以在 `HISTORY.TXT` 中查找 `“【PRO】”`，你可以看到非常多的结果，都是专业版独有的内容。专业版独有的模块在免费版是灰色完全不可用的。专业版也有很多独有的配置项，这些配置项名称通常以 `(PRO)` 结尾。

Q: 如何更换 `Neverlose GUI` 的界面主题色
A: 点击右上角齿轮，展开 `GUI` 选项，在顶部找到 `NL Theme Color` （`NL主题色`)，更改为你喜欢的主题。其中 `Spectrum Day` (`光谱日`) 选项会在一天中变化颜色。

## Neverlose GUI 相关配置项介绍

以下配置项均在 GUI 选项中：

- NL Card Hover Fade Duration (ms)：NL 卡片悬停淡入时长（毫秒）
- NL Category Text Display：NL分类文本显示
- 这个用于调节左栏的文本显示风格。分为 `Always（始终）`, `Only Selected（仅选择）` 和 `Never（从不）` 三种。可按需调节。值得注意的是，从 `v1.1.4` 起，你可以右键左栏任意位置切换这个风格。下面两张图展示了后两种样式：

![Only-Selected](/neverlose-category-only-selected.jpg)
![Never](/neverlose-category-never.jpg)

- NL Close Menu When Click Outside：NL点击外面时关闭菜单
- 这个如果开启，你单击窗口以外的空白部分就会自动关闭 GUI。
- NL Module Option Flyout Duration (ms)：NL模块配置飞出时长（毫秒）
- NL Module Option Max Items：NL模块配置最大项数
- NL Module Option Style：NL模块配置样式
- 分为 `Card（卡片）`， `Page（页）` 和 `Flyout（飞入飞出）` 三种，请详见 [配置](/configuration.md)
- NL Module Option Wheel Sensitivity：NL模块配置滚轮灵敏度
- NL Page Column Count：NL页面列数
- 这个用于决定右侧模块的列数。`Auto（自动）` 表示根据窗口宽度自动决定。
- NL Page Transition：NL页面转场动画类型
- 可以调节转场的类型。
- NL Page Transition Duration (ms)：NL页面转场时长（毫秒）
- NL Panel Background Opacity (0~1)：NL 面板背景不透明度（0~1）
- NL Panel Font Size Scale：NL 右栏字号缩放
- NL Roundness Global Scale：NL圆角全局比例
- 影响窗口的圆角。
- NL Tab Font Size Scale：NL 左栏字号缩放
- NL Title Texture：NL标题纹理
- 标题纹理指的是左上角的图片。
- NL User Icon：NL用户图标
- NL User Icon Circle：NL用户图标是否为圆形
- NL Window Shadow：NL窗口阴影
- NL Window Shadow Thickness：NL窗口阴影厚度
- NL Window Shadow Opacity (0~1)：NL窗口阴影不透明度 (0~1)
- NL Window Shadow Color：NL 窗口阴影颜色

## 传送门
[《JackalClient 新版IRC和验证系统说明》](./pro-auth.md)

Have a good time with Jackal Pro! :)
