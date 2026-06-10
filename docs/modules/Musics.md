# Musics
音乐
分类：Misc
描述：播放音乐。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
Musics（音乐）用于播放音乐。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Filename、When、Style。

## 配置项
- Filename（文件名）
 类型：文本；默认："FunkyStars.mp3"
 说明：用于指定文件/目录路径。建议使用稳定的绝对路径并确认权限可访问，避免因路径变化导致功能失效。
- When（何时）
 类型：枚举；默认："Menu On"
 说明：这是选项型配置。默认值 Menu On 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Menu On（打开菜单）；Menu Off（关闭菜单）；Always（总是）
- Style（风格）
 类型：枚举；默认："Normal"
 说明：这是选项型配置。默认值 Normal 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Normal（普通）；Damaged（损坏）
- MCI Mp3 Volume（MCI Mp3 音量）
 类型：数值；默认：100
 说明：这是数值型配置。默认值 100 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
## 历史更新
无（HISTORY 中暂无明确记录）

## 备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

## 相关命令
无

## 相关模块
- [Active (活动)](./Active.md)
- [AutoSpeak (自动讲述)](./AutoSpeak.md)
- [AntiMicrophone (反麦克风)](./AntiMicrophone.md)
- [Console (控制台)](./Console.md)
- [Shell (命令行)](./Shell.md)
- [QuickCommand (快速命令)](./QuickCommand.md)
- [ForceTopmost (强制置顶)](./ForceTopmost.md)
- [MemeTrigger (梗触发)](./MemeTrigger.md)

## 相关资料
无
