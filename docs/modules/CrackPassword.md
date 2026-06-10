# CrackPassword
破解密码
分类：Combat
描述：凭借字典，暴力破解计算机当前用户的密码。

## 需求
- 安全级别：恶意模块（高风险）
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
CrackPassword（破解密码）会读取密码字典并尝试登录验证，支持多线程与生日组合扩展，同时会检查账户锁定阈值策略以降低把账户锁死的风险。建议先确认阈值策略再开始跑字典。
## 配置项
- Async（异步）
 类型：布尔；默认：true
 说明：模块开启后异步执行破解任务，避免阻塞主线程。
- Multithread（多线程）
 类型：布尔；默认：true
 说明：启用后按CPU线程并行尝试密码，速度更高但资源占用也更高。
- Memorize Prev Password（记住上一次的密码）
 类型：布尔；默认：true
 说明：破解成功后记录结果，下次会先尝试上次密码以缩短时间。
- HUD（是否显示HUD。）
 类型：布尔；默认：true
 说明：显示破解进度 HUD（总尝试数、进度条等）。
- HUD Show Current Password Attempt（在HUD中显示当前的密码尝试）
 类型：布尔；默认：true
 说明：在 HUD 中显示当前尝试的密码文本。演示环境建议关闭以避免敏感信息外露。
- Hide HUD When Menu On（打开菜单时隐藏HUD）
 类型：布尔；默认：false
 说明：菜单打开时暂时隐藏破解 HUD，避免界面重叠。
- Use Strong Password Dictionary（使用强口令字典）
 类型：布尔；默认：true
 说明：在基础字典外追加强口令字典，命中率更高但尝试总量会显著增加。
- Try Birthdays（尝试生日）
 类型：布尔；默认：true
 说明：额外生成常见生日组合（如 `YYMMDD`）并加入尝试队列。
- Notify Password（通知密码）
 类型：布尔；默认：true
 说明：破解成功后是否直接提示明文密码。
- Notify Speed（通知速率）
 类型：布尔；默认：true
 说明：是否提示破解速度统计（ms/attempt）。
- Account Lockout Threshold Policy（账户锁定阈值策略）
 类型：枚举；默认："Query"
 说明：当检测到账户锁定阈值不足时如何处理：`Ignore` 忽略风险继续跑；`Safe` 尝试自动调整阈值；`Query` 弹窗确认后再决定。
 可选：Ignore（忽略）；Safe（安全）；Query（询问）
- Threshold Setting Confirmation MessageBox Timeout (ms)（阈值设置确认提示框超时时间 (毫秒)）
 类型：数值；默认：20000
 说明：`Query` 模式下确认弹窗的超时时间。超时会按默认选项执行。
- Threshold Setting Default Option（阈值设置默认选项）
 类型：枚举；默认："Cancel"
 说明：确认弹窗超时或无响应时采用的默认按钮，直接影响流程是否继续。
 可选：Yes（是）；No（否）；Cancel（取消）
## 历史更新
- 18. 添加了 CrackPassword 破解密码时的HUD。
- 19. 修复 CrackPassword 中配置 Notify Password 无效的问题。
- 7. 添加模块：CrackPassword，用于暴力破解当前用户登录密码。使用一个字典。

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
