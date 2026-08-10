# Gatekeeper
看门人
分类：Combat
描述：通过注入动态链接库，拦截 Winlogon 事件（需要管理员和特权）

## 需求
- 安全级别：常规模块
- 权限需求：管理员
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
Gatekeeper（看门人）通过把组件注入到 `winlogon` 来拦截系统级快捷动作和会话事件，并把策略写入配置文件供内核侧逻辑读取。建议先从 `Query` 启动，观察误拦截情况后再收紧为 `Deny`。
## 配置项
- Use Loader to Inject (Suggested)（使用加载器注入（推荐））
 类型：布尔；默认：true
 说明：使用 `loader` 执行注入/卸载与工作状态检查。默认路径更稳，失败率通常更低。
- Check Working Cooldown（检查工作状态冷却）
 类型：数值；默认：5000U
 说明：检查 Gatekeeper 是否仍在工作中的周期。调小可更快恢复失效状态，调大会更省资源。
- Disable When Quit（退出时关闭）
 类型：布尔；默认：true
 说明：客户端退出时自动尝试卸载注入组件，避免策略残留在系统会话中。
- Comm File Check Cooldown (ms)（通信文件检查冷却 (毫秒)）
 类型：数值；默认：200L
 说明：通信临时文件轮询间隔（用于与其它模块联动时读取拒绝事件）。
- Admin（管理员）
 类型：枚举；默认："Allow"
 说明：管理员权限相关动作的策略。`Allow` 放行，`Query` 弹确认，`Deny` 直接拒绝。
- Shutdown（关机）
 类型：枚举；默认："Query"
 说明：关机动作策略。日常建议 `Query`，防止误触造成直接关机。
- Reboot（重启）
 类型：枚举；默认："Query"
 说明：重启动作策略：Allow/Query/Deny 三态。
- Logoff（注销）
 类型：枚举；默认："Query"
 说明：注销动作策略：Allow/Query/Deny 三态。
- Win + L（未收录）
 类型：枚举；默认："Query"
 说明：系统锁屏快捷键策略：Allow/Query/Deny 三态。
- Ctrl Shift Esc（未收录）
 类型：枚举；默认："Allow"
 说明：任务管理器快捷键策略。默认允许，避免影响日常运维。
- Ctrl Alt Del（未收录）
 类型：枚举；默认："Query"
 说明：安全选项入口快捷键策略：Allow/Query/Deny 三态。
- Sticky Keys（粘滞键）
 类型：枚举；默认："Query"
 说明：粘滞键入口策略：Allow/Query/Deny 三态。
- Filter Keys（筛选键）
 类型：枚举；默认："Query"
 说明：筛选键入口策略：Allow/Query/Deny 三态。
- Magnifier（放大镜）
 类型：枚举；默认："Query"
 说明：放大镜入口策略：Allow/Query/Deny 三态。
- Narrator（讲述人）
 类型：枚举；默认："Query"
 说明：讲述人入口策略：Allow/Query/Deny 三态。
- Projection Menu（投影菜单）
 类型：枚举；默认："Query"
 说明：投影菜单策略：Allow/Query/Deny 三态。
- Accessibility（辅助功能）
 类型：枚举；默认："Query"
 说明：辅助功能入口策略：Allow/Query/Deny 三态。
## 历史更新
- 7. 为 JDGatekeeper.dll 添加了新的注销（一个）、关机（两个）和重启（一个）筛选。
- 11. 现在 Gatekeeper 模块弹出的选择是否的对话框默认落在否上。
- 16. 为 JDGatekeeper.dll 添加了几个事件：

## 备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。
状态检查遇到系统模块快照临时失败时会保持当前开关状态，并仅写入诊断日志，不会弹出错误通知。

## 相关命令
无

## 相关模块
- [AntiCapture (反捕获)](./AntiCapture.md)
- [AntiClose (反关闭)](./AntiClose.md)
- [AntiDebug (反调试)](./AntiDebug.md)
- [AntiIntercept (反拦截)](./AntiIntercept.md)
- [AntiSpy (反间谍)](./AntiSpy.md)
- [AntiTaskkill (反进程杀手)](./AntiTaskkill.md)
- [AntiMouseHook (反鼠标钩子)](./AntiMouseHook.md)
- [AntiKeyHook (反键盘钩子)](./AntiKeyHook.md)

## 相关资料
无
