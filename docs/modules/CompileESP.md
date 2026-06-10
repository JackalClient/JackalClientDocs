# CompileESP
编译透视
[PRO]
分类：Process
描述：监控编译器进程并通知编译开始/结束。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否（仅通知模式选 Real Chatter 时需要）
- 开发状态：稳定/常规
- 版本属性：PRO 独有

## 介绍
CompileESP 会识别常见编译链进程（MSVC/GCC/Clang/Java 等），在“编译开始”和“编译结束”两个阶段发出通知，并维护一个可视 HUD。
它不是简单看进程名，而是会结合命令行判断是否属于真实编译行为，避免把无关同名进程当作编译任务。
对于并行编译场景，模块会聚合多任务状态；结束通知采用防抖，减少子进程切换导致的误判“编译已结束”。

## 配置项
- Compile Start Notify Mode（编译开始通知模式）
 类型：枚举；默认："Notify"；说明：控制“检测到编译开始”时如何提示。若你希望低打扰建议 `Notify`，希望直播可见性更高可选 `Title/Island`。可选：Off（关闭）；Notify（通知）；Chatter（弹幕）；Title（标题）；Island（灵动岛）；Console Output（控制台输出）；WinToast（系统托盘提示）；Speak（语音播报）；Real Chatter（真实弹幕）
- Compile Finish Notify Mode（编译结束通知模式）
 类型：枚举；默认："Notify"；说明：控制“编译结束”提示，失败任务会按失败样式输出。建议与开始模式统一，便于连续观察一条编译会话。
- Show PID（显示进程ID）
 类型：布尔；默认：true；说明：在开始/结束通知附带 PID，便于你定位具体编译子进程，尤其在并行构建和多工具链并存时更有用。
- Show Command Line（显示命令行）
 类型：布尔；默认：false；说明：在通知中附带命令行原文，信息最全但会显著拉长消息文本；只建议在排查构建参数问题时临时开启。
- Show Duration（显示耗时）
 类型：布尔；默认：true；说明：在结束通知及 HUD 副文本中显示会话耗时；长构建场景建议保持开启，便于快速判断是否异常变慢。
- Arraylist Extra Info（模块列表额外信息）
 类型：枚举；默认："Type"；说明：控制 Arraylist 中 CompileESP 的附加信息来源；多任务时会自动折叠并附加 `+N`。若你看重产物定位，优先 `Target File` 或 `Type + File`。可选：Off（关闭）；Type（类型）；Tool（工具）；Target File（目标文件）；Type + File（类型 + 文件）
- HUD（是否显示HUD。）
 类型：布尔；默认：true；说明：总开关，关闭后仍可保留通知但不再绘制编译 HUD。
- Hide HUD When Menu On（打开菜单时隐藏HUD）
 类型：布尔；默认：false；说明：菜单打开时是否临时隐藏 HUD；录屏演示建议开，日常调试建议关以免遗漏状态。
- HUD Main Text（HUD主文本）
 类型：文本；默认："Compiling..."；说明：HUD 主标题文案；留空会自动回退到默认值。
- HUD Subtext（HUD副文本）
 类型：枚举；默认："Type + Duration"；说明：决定副文本展示维度；并行任务时会拆成多行，便于同时看到多个编译类型/工具。可选：Off（关闭）；Type（类型）；Tool（工具）；Duration（时长）；Type + Duration（类型 + 时长）；Type + Tool + Duration（类型 + 工具 + 时长）
- HUD Show Task Count（HUD显示任务数量）
 类型：布尔；默认：true；说明：并行构建时在主文本后附加任务数量（如 `+3`），推荐开启。
- HUD X Rate（HUD 横坐标比例）
 类型：数值；默认：0.5f；说明：HUD 横向锚点比例，支持 HudEditor 拖拽回写；通常保持居中更不遮挡编辑器输出。
- HUD Y Rate（HUD 纵坐标比例）
 类型：数值；默认：0.56f；说明：HUD 纵向锚点比例；若与其他 HUD 冲突可小步下移。
- HUD Text Font Size（HUD 文本字号）
 类型：数值；默认：24；说明：主副文本统一字号，过大可能导致多行副文本挤压布局。
- HUD Text Gap（HUD文本间隔）
 类型：数值；默认：8；说明：加载动画与文本区之间的垂直间隔。
- HUD Text Line Gap（HUD文本行间距）
 类型：数值；默认：3；说明：副文本多行时的行间距，任务多时建议略增提升可读性。
- HUD Padding（HUD内边距）
 类型：数值；默认：14；说明：整体内边距，影响背景框包裹感。
- HUD Extra Height（HUD额外高度）
 类型：数值；默认：12；说明：在自动计算高度上额外补充，适合避免个别字体被裁切。
- HUD Opacity (0~1)（HUD 不透明度）
 类型：数值；默认：0.92f；说明：作用于整体前景层，且会与淡入淡出动画叠乘。
- HUD Text Color（HUD文本颜色）
 类型：枚举；默认："White"；说明：主文本颜色，`Flow` 为动态流光。可选：Flow（流动）；其余颜色见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- HUD Subtext Color（HUD副文本颜色）
 类型：枚举；默认："Aqua"；说明：副文本颜色，建议与主文本保持层级对比。可选：Flow（流动）；其余颜色见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- HUD Background（HUD背景）
 类型：布尔；默认：true；说明：背景框开关，关闭后仅保留动画和文字层。
- HUD Background Color（HUD 背景颜色）
 类型：枚举；默认："Black"；说明：背景填充颜色；`Transparent` 可仅保留阴影/前景，`Flow` 可做动态背景。可选：Flow（流动）；Transparent（透明）；其余颜色见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- HUD Background Opacity (0~1)（HUD 背景不透明度 (0~1)）
 类型：数值；默认：0.35f；说明：背景层透明度，与淡入淡出同样叠乘。
- HUD Background Roundness（HUD背景圆角度）
 类型：数值；默认：0.3f；说明：背景圆角比例，越大越圆。
- HUD Loading Radius（HUD加载动画半径）
 类型：数值；默认：18.0f；说明：中心加载环半径，决定 HUD 视觉重心大小。
- HUD Loading Thickness（HUD加载动画粗细）
 类型：数值；默认：5.0f；说明：加载环线宽，过大可能压缩文本空间。
- HUD Loading Period (ms)（HUD加载动画周期 (毫秒)）
 类型：数值；默认：1800L；说明：加载环动画周期，内部下限为 300ms；过小会显得过快抖动。
- HUD Loading Color 1（HUD加载动画颜色1）
 类型：枚举；默认："Aqua"；说明：加载环渐变起始色。可选：Flow（流动）；其余颜色见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- HUD Loading Color 2（HUD加载动画颜色2）
 类型：枚举；默认："Sky Blue"；说明：加载环渐变结束色，建议与 Color 1 保持同色系。可选：Flow（流动）；其余颜色见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- HUD Fade In Duration (ms)（HUD淡入时长 (毫秒)）
 类型：数值；默认：2000L；说明：检测到编译活跃后的 HUD 淡入时间，值越小出现越快。
- HUD Fade Out Duration (ms)（HUD淡出时长 (毫秒)）
 类型：数值；默认：1000L；说明：编译结束后的淡出时间，若希望“结束即消失”可调低。
- Compiler Process Blacklist Enabled（编译器进程黑名单是否启用）
 类型：布尔；默认：false；说明：对编译器识别结果再做一层排除；命中后该进程不参与会话统计。
- Compiler Process Blacklist (Regex Sep With Semicolon)（编译器进程黑名单（用分号分隔的正则表达式））
 类型：文本；默认：""；说明：按分号分隔正则，整串匹配进程名；建议仅填少量精确规则。
- Compiler Process Whitelist (Regex Sep With Semicolon)（编译器进程扩展列表（用分号分隔的正则表达式））
 类型：文本；默认：""；说明：用于补充内置编译器名单，适合接入自定义构建包装器；即使为空也会识别内置编译器集合。
- Check Cooldown (ms)（检查冷却 (毫秒)）
 类型：数值；默认：300L；说明：编译事件检测周期；调小可提升起止响应速度，调大可降低频繁扫描开销。
## 历史更新
- 34. 【PRO】添加 CompileESP 模块：监控常见编译器进程（Java / C / C++，支持 MSVC/GCC/Clang），在编译开始和结束时发送通知。
- 35. 【PRO】为 CompileESP 添加可配置项：开始/结束通知模式、PID/命令行/耗时显示、编译器进程白名单/黑名单、检查间隔。以及各种HUD配置项。

## 备注
若你开启了 `Real Chatter` 但没有看到结果，优先检查直播房间号与网络状态；该模式会走直播弹幕发送链路。
多项目并行编译时，建议保留 `Show PID` 与 `HUD Show Task Count`，并把 `Arraylist Extra Info` 设为 `Type + File`，最容易快速定位当前主任务。

## 相关命令
无

## 相关模块
- [ProcessManager (进程管理器)](./ProcessManager.md)
- [ProcessESP (进程透视)](./ProcessESP.md)
- [SecurityESP (安全透视)](./SecurityESP.md)
- [Arraylist (模块列表)](./Arraylist.md)

## 相关资料
[『CompileESP（编译透视）』insane bypass showcase](https://www.bilibili.com/video/BV1rNftBfErt)
