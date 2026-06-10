# TcpTable
TCP列表
分类：Web
描述：一次性输出当前 TCP 连接表。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：可选
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
TcpTable（TCP列表）用于从 GUI 快速调用 TCP 连接表命令。
模块启用后会根据 Mode 输出一次结果，然后自动关闭，不会像 TcpMonitor 一样持续监视。
输出任务会在后台执行，避免查询连接表或外部 IP 信息时卡住主界面。

## 配置项
- Mode（模式）
 类型：枚举；默认："Basic"
 说明：选择输出详细程度。
 可选：Basic（基础，等价 `/tcptable1`）；Extra Info（额外信息，等价 `/tcptable2`）；All Info（全部信息，等价 `/tcptable3`）

## 历史更新
- 147. Tcp Table 输出改为后台执行，减少主界面卡顿风险。
- 146. 新增 Tcp Table 模块，并将 `/tcptable` 更名为 `/tcptable1`。

## 备注
Extra Info 与 All Info 可能触发外部 IP 位置信息查询，结果受网络状态影响。

## 相关命令
- `/tcptable1`
- `/tcptable2`
- `/tcptable3`

## 相关模块
- [TcpMonitor (TCP监视)](./TcpMonitor.md)
- [TcpKiller (TCP杀手)](./TcpKiller.md)

## 相关资料
无