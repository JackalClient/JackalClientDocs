# SelfRestore
自我还原
分类：File
描述：从backup文件夹恢复资产。

## 需求
- 安全级别：常规模块
- 恶意标记：否
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定
- 版本属性：普通可用

## 介绍
SelfRestore 会从 `backup` 目录读取备份文件并恢复到对应目标目录，用于快速回滚客户端关键资产。
执行完成后会给出恢复数量；若没有可恢复文件会直接提示失败，避免误以为已经回滚成功。

## 配置项
- Async（异步）
  类型：布尔；默认：true；说明：开启后后台恢复，适合大批量文件回滚；关闭后同步恢复，更适合“恢复完成后再继续下一步”的运维流程。

## 历史更新
- 19. 为 Self Backup 与 Self Restore 增加 Async 配置。

## 备注
SelfRestore 基于现有 `backup` 内容恢复，不会自动生成备份。建议先执行 SelfBackup 再进行高风险操作，形成可回滚闭环。

## 相关命令
无

## 相关模块
- [SelfBackup (自我备份)](./SelfBackup.md)
- [AutoRestore (自动还原)](./AutoRestore.md)
- [FileManager (文件管理器)](./FileManager.md)
- [PrivacyDatabase (隐私数据库)](./PrivacyDatabase.md)

## 相关资料
无