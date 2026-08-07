# PrivacyProtect
隐私保护
分类：Misc
描述：集中保护敏感 UI、输入提示和日志显示，减少直播或录屏时泄露密码、密钥、Token 等内容的风险。

## 需求
- 安全级别：常规模块
- 权限需求：普通使用不需要管理员；Privacy UI Detection 依赖 Windows UI Automation / MSAA 查询当前前台窗口控件。
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用；Privacy UI Detection 为 PRO

## 介绍
PrivacyProtect 开启后会对客户端内的敏感字符串显示做隐藏处理，例如 API Key、Token、Secret、Auth 等字段。开启 Privacy UI Detection 后，模块会检测当前前台窗口中可能包含密码、密钥或验证码的输入控件，并临时阻止 Keystrokes、Keystrokes2、TypingEffects 等按键显示模块输出真实按键。

Privacy UI Detection 会优先检查当前焦点控件，并对前台窗口的完整 UI 树扫描做限频和限量处理，避免部分应用的 UI Automation provider 在持续扫描时造成内存占用持续上涨。

## 配置项
- String Filter（字符串过滤）
 类型：布尔
 说明：开启后在客户端 UI、日志或部分模块输出中隐藏敏感字段值。
- Privacy UI Detection (PRO)（隐私 UI 检测）
 类型：布尔
 说明：检测当前前台窗口是否存在敏感输入控件，并在命中时临时屏蔽按键展示类模块。
- Privacy UI Detection Level（隐私 UI 检测等级）
 类型：枚举
 说明：Low 主要检查焦点与当前控件；High 会在受限频率下额外扫描前台窗口控件树，识别更全面但开销更高。
- Privacy UI Query Cooldown (ms)（隐私 UI 查询冷却）
 类型：数值
 说明：两次隐私 UI 检测之间的最小间隔。调大可以进一步降低后台检测开销。
- Privacy UI Extra Keywords (Sep With Semicolon)（额外敏感关键词）
 类型：文本
 说明：追加自定义敏感关键词，多个关键词用英文分号分隔。
- Privacy UI Blacklist Processes (Sep With Semicolon)（隐私 UI 检测黑名单进程）
 类型：文本
 说明：这些进程会跳过隐私 UI 检测，适合加入误判或 UIA 开销较高的应用。
- Privacy UI Auto Black Capture（自动黑屏捕获）
 类型：枚举
 说明：检测到敏感 UI 时是否自动联动 BlackCapture。
