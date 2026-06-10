# 快速开始
<TkVpContainer type="tip" title="使用前确认" text="首次使用建议先阅读安全说明页，并确认仅在授权场景下运行。" />

<TkVpContainer type="info" title="官网" text="应用官网入口： https://www.wormwake.com/jackalclient/" />
<TkVpContainer type="info" title="Pro购买" text="Pro专业版购买入口： https://afdian.com/item/1eda4ca6ca2511f0a7ae52540025c377/" />

JackalClient 客户端作者，请支持我们！

- UP主-主要开发：
- [@Wormwaker](https://space.bilibili.com/3494361276877525)
  
- 辅助开发：
- [@涟幽Alex](https://space.bilibili.com/1270641296)
  
- 驱动支持：
- [@KeBugCheck](https://space.bilibili.com/1632975427)
- [@Stars_Azusa](https://space.bilibili.com/670866766)

- JackalClient 是一个 `Windows` 平台的工具箱，并非游戏外挂。
- 没有 Linux 版。没有 Mac 版。没有手机版。

Free 免费版下载：
- 蓝奏云: [wormwake.lanzout.com/b00mq8dxcb](https://wormwake.lanzout.com/b00mq8dxcb) 访问密码 d1lu
- Github Releases: [github.com/noexcept2005/JackalClient/releases](https://github.com/noexcept2005/JackalClient/releases)
- QQ群聊中获取: `196218959` 进群先看公告
- 电脑小白请单击此处查看 → [如何下载并运行 JackalClient 说明书](/download-and-run)
- 解压密码统一 `Wormwake`

## 1. 启动方式

常见启动文件：

- `Launcher.exe`：一个简易的启动器（可检查**免费版**的更新），如果有启动问题，请运行本体：
- `Release/JackalClient.exe`：客户端主程序（本体）

## 2. GUI （用户界面/ClickGUI）基本操作

客户端最主要的特点就是在 GUI 关闭时，可以以 `「HUD (用户抬头显示）」`或者说`「Overlay (叠加层)」` 的形式出现，且不影响你使用鼠标进行对其他应用的操作。

默认打开或关闭界面（ClickGUI）快捷键：

- 旧版(<v1.0.4)：右 `Ctrl` / 右 `Shift`；
- 新版(>=v1.0.4): 右 `Alt` /    左 `Ctrl` + 左 `Alt` + `Insert`  （这个记不住算了，应急用的）

打开 GUI 后，鼠标穿透就会被关闭，意味着除了任务栏的其他区域都是客户端的窗口，无法点击空白处和后面的窗口交互，你只能操纵客户端窗口，除非关闭 GUI。
客户端的主窗口大多数情况下都是置顶的，这意味着始终显示。如果被其他普通桌面程序窗口盖住了，可以尝试打开 `ForceTopmost / 强制置顶` 模块。

如何开启汉化：`GUI选项 - Language/语言` 选择你所需要的中文类型。

下面是GUI风格：
（这个GUI风格可以在 `GUI选项 - ClickGUI风格` 调整）

### 下拉式 (Dropdown) 界面【默认】：

仿照传统 `Minecraft 作弊端` 视觉实现。模块被分类成许多列存在，每一列都可以展开/折叠/拖动。

- 左键：打开或关闭模块
- 右键（或点击右侧标识）：展开或折叠模块配置

辅助操作：

- `Ctrl + 滚轮`: 全局缩放
- `Ctrl + F`：进入模块或模块配置项搜索界面
- `Ctrl + Tab`: 切换顶部标签页。注意，这可能和「应用」中的「文件管理器」冲突。
- `Esc`：也可以关闭 GUI
- ↑↓←→方向键/滚轮：移动和滚动内容。按↑↓←→移动整个GUI。`滚轮`可以上下滚动，`Shift+滚轮`可以左右滚动。当然横纵的滚动条也可以用鼠标拉。

### Neverlose 界面【PRO专有】：

把模块分类做成了左侧的标签页，右侧的每一页的主体内容。

- 左键开关：打开或关闭模块
- 左键模块的其他位置：展开或折叠模块配置

辅助操作：

- `Ctrl + 滚轮`: 全局缩放
- `Ctrl + F`：进入模块或模块配置项搜索界面
- `Ctrl + Tab`: 切换顶部标签页。注意，这可能和「应用」中的「文件管理器」冲突。
- `Esc`：也可以关闭 GUI
- 滚轮：上下滚动当前页面。
- 上下箭头↑↓：可以代替滚轮滚动。
- `Home` / `End`：快速跳转到页面的顶部或底部。

### Imgui:
这个界面已被废弃，不建议使用。设置为本样式后，需要重启客户端应用。

### 右下角会有两个按钮：
第一个绿色的表示 `ModuleEditor / 模块编辑器` ，点一下后就可以修改模块显示状态了，左侧具有绿色竖线的模块表示显示在GUI上，如果你想隐藏，点一下即可。修改完毕后点击下面的完成按钮。
第二个蓝色的表示 `HUD Editor / HUD编辑器` ，点一下后你可以用鼠标中键（滚轮往下按）拖动任意HUD元素（例如灵动岛、目标显示、模块列表等）。注意，HUD编辑器打开的时候任何“给鼠标让道”选项都会暂时失效。

## 3. Shell「命令行」 基本操作

打开命令行模块后，控制台就可以输入客户端命令。客户端命令可以不以斜杠开头。
命令示例：

- `/help`：查看帮助。例如 `/help module` 表示查找以 `module` 字样开头的命令用法。
- `/list`：列出所有模块列表
- `/enable <模块名>` 或 `/e <模块名>`：启用模块
- `/disable <模块名>` 或 `/d <模块名>`：禁用模块
- `/enables`：输出已打开的模块
- `/gui`: 打开 ClickGUI
- `/break`：退出命令行
- `/exit`：退出客户端

## 4. 托盘

客户端会在任务栏右下角创建一个托盘，你可以 `左键` 打开 GUI，`右键` 打开托盘菜单进行快捷操作。

## 5. 建议先做的举措

1. 如果不满意 GUI 的默认按键，可以在 `GUI 选项 → 开关菜单键 1/2` (`Menu Toggle Key 1/2`) 设置不同的按键绑定（支持组合键）。
2. 随意开关一些模块，然后退出客户端，检查是否能正常自动保存配置。配置目前存放在 `config` 文件夹中，以 `.json` 结尾，默认以「profile-」开头。新版本 (>=v1.0.4) 会有定期备份，以 「.backup.json」 结尾。注意，「Records.json」 是客户端的记录文件，存储一些临时数据，删除会导致清除一些记忆，不建议私自编辑。
3. 如果不想看到黑色窗口（即控制台），可以在「Misc 其他」一列关闭 `「Console 控制台」`模块，会直接隐藏控制台。
4. 如果想使用命令，可以在「Misc 其他」一列打开`「Shell 命令行」`模块，会自动打开控制台和命令行，就可以开始输入命令了，支持强大的 `Tab自动补全` 和 `参数高亮`。
5. 如何更换语言：`GUI 选项` → `Language/语言`

## 6. 常见问题入口

- [常见问题](/faq/)
- [安全说明](/safety/)
- [文件介绍](/client-files/)
- [BetterLyrics 更好的歌词模块专题](/betterlyrics/)
