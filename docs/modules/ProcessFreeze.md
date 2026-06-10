# ProcessFreeze
进程冻结
分类：Process
描述：冻结指定进程。

## 需求
- 安全级别：常规模块
- 恶意标记：否
- 权限需求：无（目标受保护时可能需要更高权限）
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定
- 版本属性：普通可用

## 介绍
ProcessFreeze 会按 PID 优先、名称回退的规则定位目标，然后执行冻结或解冻。
Keep 开启时模块会在周期任务中持续保持冻结；关闭模块时会触发一次解冻流程，避免目标长期保持冻结状态。

## 配置项
- Freeze Name（冻结名称）
  类型：文本；默认："1.exe"；说明：当 Freeze PID 无效时用于回退匹配目标进程名。
- Freeze PID（冻结PID）
  类型：整数；默认：0；说明：非 0 时优先按 PID 精确定位，建议优先使用该项减少误操作。
- Notify Freeze（通知冻结）
  类型：布尔；默认：true；说明：控制冻结/解冻成功与失败通知输出，排障阶段建议开启。
- Disable After Attempt（尝试之后关闭）
  类型：布尔；默认：false；说明：开启后在执行一次冻结尝试后自动关闭模块，适合临时操作。
- Keep（保持）
  类型：布尔；默认：true；说明：开启后周期性重复冻结，防止目标线程恢复；关闭后仅执行单次冻结逻辑。

## 历史更新
- 13. 完善 ProcessFreeze：关闭模块时会自动解冻。

## 备注
当目标不存在或句柄获取失败时，模块会自动回滚状态（启用失败则关闭，解冻失败则重新开启）以提示当前状态未达成。

## 相关命令
- `/freeze <hprocess/pid/name>`：冻结目标进程。
- `/unfreeze <hprocess/pid/name>`：解冻目标进程。

## 相关模块
- [ProcessKill (进程击杀)](./ProcessKill.md)
- [ProcessManager (进程管理器)](./ProcessManager.md)
- [WindowMaster (窗口大师)](./WindowMaster.md)
- [Run (运行)](./Run.md)

## 相关资料
无