# BiliRelation
B站关系
分类：Web
描述：按指定 UID 自动维护当前账号与目标用户的关注、黑名单和粉丝关系。

## 需求
- 安全级别：专业版模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：是
- 开发状态：常规
- 版本属性：PRO 可用

## 介绍
BiliRelation（B站关系）用于处理当前登录 B 站账号和指定用户之间的关系。
模块需要先登录 B 站；未登录时无法启用，若运行过程中登录状态失效，模块会自动关闭。

模块会按 `Query Cooldown (s)` 分成四组错峰查询：自动取关、自动关注、自动拉黑、自动解除粉丝关系。默认 60 秒时，每组大约间隔 15 秒检查一次，降低连续请求触发风控的概率。

## 配置项
- Unfollowing Users（自动取关）
 类型：布尔；默认：false
 说明：开启后，如果当前账号仍关注指定用户，会自动取消关注。

- Unfollowing User IDs (Sep With Semicolon)（自动取关用户ID（用分号分隔））
 类型：文本；默认：""
 说明：需要自动取关的 UID 列表，多个 UID 使用英文分号分隔。

- Following Users（自动关注）
 类型：布尔；默认：false
 说明：开启后，如果当前账号尚未关注指定用户，会自动关注。

- Following User IDs (Sep With Semicolon)（自动关注用户ID（用分号分隔））
 类型：文本；默认：""
 说明：需要自动关注的 UID 列表，多个 UID 使用英文分号分隔。

- Blacklist Users（自动拉黑）
 类型：布尔；默认：false
 说明：开启后，如果指定用户未在黑名单中，会自动拉黑。

- Blacklist User IDs (Sep With Semicolon)（自动拉黑用户ID（用分号分隔））
 类型：文本；默认：""
 说明：需要自动拉黑的 UID 列表，多个 UID 使用英文分号分隔。

- Cancel Fans（自动取消粉丝）
 类型：布尔；默认：false
 说明：开启后，如果指定用户仍关注当前账号，会自动解除粉丝关系。

- Cancel Fans IDs (Sep With Semicolon)（自动取消粉丝ID（用分号分隔））
 类型：文本；默认：""
 说明：需要自动解除粉丝关系的 UID 列表，多个 UID 使用英文分号分隔。

- Notify Changes Mode（关系变化通知模式）
 类型：枚举；默认："Notify"
 说明：当查询发现目标关系已经符合要求时的提示方式。
 可选：Off；Notify；Chatter；Speak；WinToast；Actionbar；Console Output

- Notify Success Mode（成功通知模式）
 类型：枚举；默认："Notify"
 说明：自动操作成功后的提示方式。
 可选：Off；Notify；Chatter；Speak；WinToast；Actionbar；Console Output

- Notify Error Mode（失败通知模式）
 类型：枚举；默认："Console Output"
 说明：自动操作失败后的提示方式。
 可选：Off；Notify；Chatter；Speak；WinToast；Actionbar；Console Output

- Query Cooldown (s)（查询冷却（秒））
 类型：数值；默认：60
 说明：四组关系任务各自的检查周期；模块会按周期四分之一错开查询。

## 历史更新
- 新增专业版模块 `BiliRelation`，可自动关注、取关、拉黑和解除指定粉丝关系。

## 备注
- 自动关系操作会修改当前登录 B 站账号状态，请先确认 UID 列表无误。
- 通知内容会包含目标用户昵称和 UID；昵称查询失败时仍会显示 UID。

## 相关命令
- `/bili follow <uid1/name1;uid2/name2;...>`
- 关注指定用户。
- `/bili unfollow <uid1/name1;uid2/name2;...>`
- 取关指定用户。
- `/bili black <uid1/name1;uid2/name2;...>`
- 拉黑指定用户。
- `/bili cancelfans <uid1/name1;uid2/name2;...>`
- 取消指定用户粉丝关系。

## 相关模块
- [BiliFans (B站粉丝)](./BiliFans.md)
- [BiliFollowGraph (B站关注图)](./BiliFollowGraph.md)
- [BiliSettings (B站设定)](./BiliSettings.md)

## 相关资料
无
