# AudioIsolation
音频隔离
分类：Misc
描述：只有一个进程可以发出声音。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
AudioIsolation（音频隔离）用于只有一个进程可以发出声音。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Process Name (Empty For Any)、Process Id (Zero For Any)、Set Highlight Process Volume。

## 配置项
- Process Name (Empty For Any)（进程名 (用空指代任何)）
 类型：文本；默认："JackalClient.exe"
 说明：用于指定模块实际作用对象。建议先对单个目标测试通过，再扩大到多目标，降低误操作风险。
- Process Id (Zero For Any)（进程ID (用0指代任何)）
 类型：数值；默认：0
 说明：用于指定模块实际作用对象。建议先对单个目标测试通过，再扩大到多目标，降低误操作风险。
- Set Highlight Process Volume（设置高亮进程音量）
 类型：布尔；默认：false
 说明：用于指定模块实际作用对象。建议先对单个目标测试通过，再扩大到多目标，降低误操作风险。
- Highlight Process Volume (%%)（高亮进程音量 (%%)）
 类型：数值；默认：80
 说明：用于指定模块实际作用对象。建议先对单个目标测试通过，再扩大到多目标，降低误操作风险。
- Other Process Volume (%%)（其他进程音量 (%%)）
 类型：数值；默认：10
 说明：用于指定模块实际作用对象。建议先对单个目标测试通过，再扩大到多目标，降低误操作风险。
- Fade Duration (ms)（淡入淡出时长 (毫秒)）
 类型：数值；默认：1000L
 说明：用于控制检测/刷新/动画节奏。默认值 1000L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
## 历史更新
- 67. 修复 Audio Isolation 在程序启动时启用后无法恢复原来音量的问题。
- 32. 添加模块：Audio Isolation，音频隔离，只让一个进程发出声音（不会影响系统总音量）。

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
