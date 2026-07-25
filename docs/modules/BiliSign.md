# BiliSign
B站个签
分类：Web
描述：自动管理你的B站个性签名。（专业版）

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：PRO 专属

## 介绍
BiliSign（B站个签）是一个 PRO 专属模块，用于自动管理你的哔哩哔哩个性签名。
支持定时自动更新签名内容，可从多种来源（固定文本、列表循环/随机、文件随机行）获取内容，并支持内置变量与环境变量替换。
可配置字符长度限制，超长时自动折叠并省略。
启用时会保存原始签名；禁用时可选自动还原，且支持自动清除 Steam 游戏展示行。
使用前请确认已在 Bili Settings 中登录 B 站账号，并确认网络可用。

## 配置项
- Steam Game Display（Steam游戏展示）
 类型：布尔；默认：true
 说明：启用后，SteamStatus 模块的 Steam 游戏信息会同步写入个签的第一行；禁用模块时该行会自动清除。

- Steam Game Language（Steam游戏语言）
 类型：枚举；默认："Follow Global"
 说明：控制 Steam 游戏展示行使用的语言。
 可选：Follow Global（跟随全局）；Chinese（中文）；Chinese Strict（严格中文）；English（英文）

- Length Limit Mode（长度限制模式）
 类型：枚举；默认："Auto"
 说明：控制签名内容超长时的处理方式。Auto 模式会根据签名其余行自动计算可用字符数。
 可选：Off（关闭）；Custom（自定义上限）；Auto（自动计算）

- Length Custom Limit（自定义长度上限）
 类型：整数；默认：32
 说明：仅在 Length Limit Mode 为 Custom 时生效，指定允许的最大字符数。

- Global Cooldown (s)（全局冷却 (秒)）
 类型：整数；默认：60
 说明：两次实际向 B 站 API 提交签名更新之间的最短间隔（秒）。避免频繁调用触发风控。

- Auto Update Mode（自动更新模式）
 类型：枚举；默认："Off"
 说明：控制签名是否以及如何定时自动更新。
 可选：Off（关闭）；All（替换全部签名）；Custom Line（只更新指定行）

- Auto Update Custom Line（自动更新目标行）
 类型：整数；默认：1
 说明：仅在 Auto Update Mode 为 Custom Line 时生效，指定要更新的签名行号（从 1 开始）。

- Auto Update Cooldown (min)（自动更新冷却 (分钟)）
 类型：整数；默认：1440
 说明：两次自动更新内容之间的间隔（分钟）。默认 1440 分钟即每天更新一次。

- Auto Update Content Source（自动更新内容来源）
 类型：枚举；默认："Fixed"
 说明：指定自动更新时内容的来源方式。
 可选：Fixed（固定文本，取 Auto Update List 中指定行）；List Loop（列表循环，依次轮流）；List Random Element（列表随机元素）；File Random Line（文件随机行）

- Auto Update List（自动更新内容列表）
 类型：字符串；默认："Hello world!;Bye cruel world!;Feat. JackalClient"
 说明：供 Fixed、List Loop、List Random Element 来源使用的内容列表，多个条目之间用英文分号（;）分隔。

- Auto Update File Path（自动更新文件路径）
 类型：路径；默认：""
 说明：仅在 Auto Update Content Source 为 File Random Line 时使用，指定包含候选签名行的文本文件路径，每行视为一个候选项。

- Using Builtin Variables（使用内置变量）
 类型：布尔；默认：true
 说明：启用后，生成的签名内容会替换客户端内置变量（如时间、版本等）。

- Using Environment Variables（使用环境变量）
 类型：布尔；默认：true
 说明：启用后，生成的签名内容会替换系统环境变量。

- Restore When Disabled（禁用时还原签名）
 类型：布尔；默认：true
 说明：启用时会保存启用前的原始签名（Base64 存入 Records.json）；模块禁用时自动还原原始签名。

- Current Sign (READONLY)（当前签名（只读））
 类型：字符串；默认：""
 说明：只读显示项，定期从 B 站 API 拉取并展示你当前的个性签名内容，不可手动编辑。

## 历史更新
- 64. 新增模块 Bili Sign（B站个签，PRO）：自动管理 B 站个性签名，支持定时自动更新、多内容来源、内置变量替换、长度限制与自动折叠，以及禁用时自动还原原始签名。

## 备注
该模块需要在 Bili Settings 中完成 B 站账号登录后才能正常使用。
若功能未生效，优先检查账号登录状态、网络连通性与 Global Cooldown 配置。

## 相关命令
无

## 相关模块
- [BiliSettings (B站设置)](./BiliSettings.md)
- [SteamStatus (Steam状态)](./SteamStatus.md)
- [BiliProfile (B站用户信息)](./BiliProfile.md)
