# AutoDanmaku
自动弹幕
分类：Render
描述：根据xml文件自动发送弹幕。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
AutoDanmaku（自动弹幕）用于根据xml文件自动发送弹幕。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：File Selection Mode、Notify Danmaku File Name、Danmaku Font Size Mode。

## 配置项
- File Selection Mode（弹幕文件选择模式。）
 类型：枚举；默认："Single File"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 Single File ，确认稳定后再逐项切换比较效果。
 可选：Single File（单一文件）；Single File Loop（单一文件循环）；Folder Random Select（文件夹中随机选择）；Folder Sequential Select（文件夹中顺序选择）；Folder Loop Select（文件夹中循环选择）
- Path（路径）
 类型：文本；默认："danmaku_172423516.xml"
 说明：用于指定文件/目录路径。建议使用稳定的绝对路径并确认权限可访问，避免因路径变化导致功能失效。
- File Selection Max Attempts（文件选择最大尝试次数）
 类型：数值；默认：5
 说明：用于指定文件/目录路径。建议使用稳定的绝对路径并确认权限可访问，避免因路径变化导致功能失效。
- Recursive Selection in Folder（文件夹中选择文件时采用递归）
 类型：布尔；默认：false
 说明：这是开关型配置。默认值 false 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- List Current Index（列表当前索引）
 类型：数值；默认：0
 说明：这是数值型配置。默认值 0 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- File Gap Duration (ms)（文件间隔时间 (毫秒)）
 类型：数值；默认：0L
 说明：用于控制检测/刷新/动画节奏。默认值 0L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Correct /n to NewLine（纠正/n为换行符）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Notify Danmaku File Name（通知弹幕文件名）
 类型：布尔；默认：true
 说明：用于选择结果反馈方式。默认值 true 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Show Top Danmaku（展示顶部居中弹幕）
 类型：布尔；默认：true
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Show Bottom Danmaku（展示底部居中弹幕）
 类型：布尔；默认：true
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Show Reverse Danmaku（展示逆向弹幕）
 类型：布尔；默认：true
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Horizontal Reverse（横向翻转）
 类型：布尔；默认：false
 说明：这是开关型配置。默认值 false 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Vertical Reverse（纵向翻转）
 类型：布尔；默认：false
 说明：这是开关型配置。默认值 false 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Danmaku Font Size Mode（弹幕字号模式）
 类型：枚举；默认："Auto"
 说明：用于控制文本可读性。默认字号 Auto 适合多数分辨率；高分屏可适当加大，低分辨率建议减少以免拥挤。
 可选：Fixed（固定）；Auto（自动）；Manual（手动）
- White Danmaku Color（白色弹幕颜色）
 类型：枚举；默认："White"
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- White Danmaku Color Frozen（白色弹幕颜色是否冻结）
 类型：布尔；默认：false
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
- Danmaku Font Size Manual Scale（弹幕字号手动缩放）
 类型：数值；默认：1.0f
 说明：用于控制文本可读性。默认字号 1.0f 适合多数分辨率；高分屏可适当加大，低分辨率建议减少以免拥挤。
- Lazy Danmaku Pushing（懒汉式推送弹幕）
 类型：布尔；默认：false
 说明：这是开关型配置。默认值 false 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Hotkey (Next Danmaku File)（快捷键（下一个弹幕文件））
 类型：按键/复合；默认：`{ { "Keybind", {VK_LCONTROL, VK_LMENU, '2' } }`}
 说明：用于设置快捷键触发。建议避免与系统或常用软件冲突，优先使用组合键提高可控性。
## 历史更新
- v1.1.2：模块关闭时会自动清理当前场上已暂停的同步弹幕。
- 17. 修复 AutoDanmaku 模块因为编码而无法启动问题。
- 22. 修改 AutoDanmaku 的示例文件为 danmaku_172423516.xml
- 15. 添加模块：Auto Danmaku，用于自动解析B站弹幕 XML 文件并自动播放弹幕。

## 备注
模块关闭时会清理当前场上已暂停的同步弹幕，避免外部同步源暂停后留下静止弹幕。
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

## 相关命令
无

## 相关模块
- [Arraylist (模块列表)](./Arraylist.md)
- [Ambience (环境气氛)](./Ambience.md)
- [AutoTitle (自动标题)](./AutoTitle.md)
- [AutoTotem (自动图腾)](./AutoTotem.md)
- [AudioVisualizer (音频可视化)](./AudioVisualizer.md)
- [LyricsPhysics (物理歌词)](./LyricsPhysics.md)
- [BetterLyrics (更好的歌词)](./BetterLyrics.md)
- [MusicOverlay (音乐信息)](./MusicOverlay.md)

## 相关资料
无
