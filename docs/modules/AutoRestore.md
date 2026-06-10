# AutoRestore
自动还原
分类：File
描述：自动监视并恢复缺失的资产。

## 需求
- 安全级别：常规模块
- 恶意标记：否
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定
- 版本属性：普通可用

## 介绍
AutoRestore 会周期检查备份清单中的文件是否缺失，发现缺失后自动从 `backup` 目录解密恢复。
它适合“防误删/防意外丢失”场景。是否只依赖现有 backup 清单，取决于 Only Backup Folder 的设置。

## 配置项
- Only Backup Folder（仅backup文件夹）
  类型：布尔；默认：true；说明：开启时仅从 `backup` 目录中的 `.bak` 初始化监控清单；关闭时会按当前主目录、Release、Assets 实时文件生成清单。默认更保守，建议先保持开启，避免把不想自动恢复的新文件纳入监控。

## 历史更新
无（HISTORY 中暂无明确记录）

## 备注
AutoRestore 只会恢复“清单内缺失文件”，不会处理被篡改但仍存在的文件。若要覆盖损坏场景，建议结合 SelfRestore 手动回滚。

## 相关命令
无

## 相关模块
- [SelfBackup (自我备份)](./SelfBackup.md)
- [SelfRestore (自我还原)](./SelfRestore.md)
- [DiskMissing (磁盘丢失)](./DiskMissing.md)
- [FileMonitor (文件监视)](./FileMonitor.md)

## 相关资料
无