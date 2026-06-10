# System
系统
分类：Combat
描述：重启客户端窃取系统权限。

## 需求
- 安全级别：常规模块
- 权限需求：管理员
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
System（系统）建议先按默认配置运行一段时间，确认对目标窗口/系统行为的影响后，再从关键开关项开始逐步微调。
## 配置项
- System Privilege Check Method（系统权限检查方式）
 类型：枚举；默认："Whoami"
 说明：该项决定执行策略。建议先用默认策略验证稳定性，再逐个切换比较效果与副作用。
 可选：Membership（成员资格）；Whoami（俺是谁）
- Use NSudo（使用 NSudo）
 类型：布尔；默认：false
 说明：该项会影响模块行为，建议基于默认值小步调整。
- Exit After Run（运行后退出）
 类型：布尔；默认：true
 说明：该项会影响模块行为，建议基于默认值小步调整。
## 历史更新
- 36. 修改所有的 _wsystem 调用改为自定义的 CreateProcess，其中 bInheritHandle为FALSE，避免自保护下的拒绝访问。
- 4. 添加模块：System Proxy，系统因特网代理设置
- 24. 为 System 模块添加配置：

## 备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

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
