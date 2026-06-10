# SelfBackup
自我备份
分类：File
描述：把所有资产备份到backup文件夹。

## 需求
- 安全级别：常规模块
- 恶意标记：否
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定
- 版本属性：普通可用

## 介绍
SelfBackup 会收集客户端关键文件清单（主目录/Release/Assets）并写入 `backup` 目录，备份文件使用 `.bak` 形式保存。
备份过程结束后会输出总文件数，适合在升级、清理或高风险操作前做一次快速快照。

## 配置项
- Async（异步）
  类型：布尔；默认：true；说明：开启后后台执行备份并立即返回，适合文件量较多时使用；关闭后同步执行，便于串行流程中确定备份完成时点。

## 历史更新
- 18. 修复 Self Backup 备份列表更新错误。
- 19. 为 Self Backup 与 Self Restore 增加 Async 配置。

## 备注
SelfBackup 每次执行会重新生成备份清单并覆盖对应 `.bak`。如果你要保留历史版本，建议先额外复制 `backup` 目录再做下一次备份。

## 相关命令
无

## 相关模块
- [SelfRestore (自我还原)](./SelfRestore.md)
- [AutoRestore (自动还原)](./AutoRestore.md)
- [FileManager (文件管理器)](./FileManager.md)
- [PrivacyDatabase (隐私数据库)](./PrivacyDatabase.md)

## 相关资料
无