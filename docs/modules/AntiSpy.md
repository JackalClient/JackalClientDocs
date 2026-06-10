# AntiSpy
反间谍
分类：Combat
描述：暂无描述

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
AntiSpy（反间谍）会周期性清理“近期记录/活动轨迹/剪贴板历史”等留痕数据，并可按白黑名单处理 Prefetch。建议先启用常规清理项，再谨慎开启 Prefetch 全量清理。
## 配置项
- Async（异步）
 类型：布尔；默认：true
 说明：异步执行清理任务，减少前台卡顿。
- Check Cooldown (ms)（检查冷却 (毫秒)）
 类型：数值；默认：1000U
 说明：AntiSpy 主循环间隔。调小会更及时，但磁盘/注册表操作更频繁。
- Toggle Anti Microphone（联动反麦克风）
 类型：布尔；默认：false
 说明：启用后会同步切换“反麦克风”模块，适合一次性加强隐私防护。
- Clear Recent File History（清空近期文件历史）
 类型：布尔；默认：true
 说明：清理系统“最近使用文件”相关快捷方式记录。
- Clear Recent Office History（清空近期Office历史）
 类型：布尔；默认：true
 说明：清理 Office 最近文档记录目录。
- Clear Recent Activity Timeline (PRO)（清空最近活动时间轴（专业版））
 类型：布尔；默认：true
 说明：清理活动时间线相关数据（PRO）。
- Clear Run History (PRO)（清空运行历史（专业版））
 类型：布尔；默认：true
 说明：清理运行（RunMRU）历史（PRO）。
- Clear Explorer Search History (PRO)（清空资源管理器搜索历史（专业版））
 类型：布尔；默认：true
 说明：清理资源管理器路径输入历史（TypedPaths）（PRO）。
- Disable Clipboard History（禁用剪贴板历史）
 类型：布尔；默认：true
 说明：将系统剪贴板历史开关关闭，减少复制内容留痕。
- Anti Prefetch (PRO)（反预取（专业版））
 类型：枚举；默认："Filtered"
 说明：Prefetch 处理策略：`Off` 关闭，`Filtered` 按名单筛选删除，`All` 清理全部 Prefetch 文件。
 可选：Off（关闭）；Filtered（已过滤）；All（所有）
- Anti Prefetch Deletion Notify（反预取删除通知）
 类型：布尔；默认：false
 说明：删除 Prefetch 成功时显示通知。大量清理时可关闭以减少提示噪声。
- Anti Prefetch Check Cooldown (ms)（Anti Prefetch Check 冷却 (ms)）
 类型：数值；默认：50000L
 说明：Prefetch 扫描与删除间隔。过小会显著增加磁盘 IO。
- Anti Prefetch Whitelist Processes Enabled（反预取启用进程白名单）
 类型：布尔；默认：true
 说明：启用白名单筛选：仅处理白名单中的进程 Prefetch。
- Anti Prefetch Whitelist Processes (Sep With Semicolon)（反预取进程白名单（用分号分隔））
 类型：文本；默认："JackalClient.exe;loader.exe;Inject.exe;Injector.exe;liquidlauncher.exe;Vape_V4.exe;Vape_Lite.exe;patcher.exe;Kangaroo Patcher.exe;我的世界布吉岛启动器.exe ...
 说明：Prefetch 白名单进程名（分号分隔，支持不带 `.exe` 自动补全）。
- Anti Prefetch Blacklist Processes Enabled（反预取启用进程黑名单）
 类型：布尔；默认：false
 说明：启用黑名单剔除：命中黑名单的进程不会被处理。
- Anti Prefetch Blacklist Processes (Sep With Semicolon)（反预取进程黑名单（用分号分隔））
 类型：文本；默认：""
 说明：Prefetch 黑名单进程名（分号分隔），用于排除不希望触碰的项。
- Notify（通知）
 类型：布尔；默认：true
 说明：通用提示开关（当前版本该项使用较少，可按个人偏好保留默认）。
## 历史更新
- 79. 为 Anti Spy 添加配置项：
- 33. 为 Anti Spy 添加配置：
- 8. 添加模块： Anti Spy，反间谍。

## 备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

## 相关命令
无

## 相关模块
- [AntiCapture (反捕获)](./AntiCapture.md)
- [AntiClose (反关闭)](./AntiClose.md)
- [AntiDebug (反调试)](./AntiDebug.md)
- [AntiIntercept (反拦截)](./AntiIntercept.md)
- [AntiTaskkill (反进程杀手)](./AntiTaskkill.md)
- [AntiMouseHook (反鼠标钩子)](./AntiMouseHook.md)
- [AntiKeyHook (反键盘钩子)](./AntiKeyHook.md)
- [AutoStart (开机自启)](./AutoStart.md)

## 相关资料
无
