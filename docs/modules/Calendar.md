Calendar
日历
分类：Misc
描述：一次性输出日历。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
Calendar（日历）用于从 GUI 快速调用 `/calendar`，输出当前月份、指定日期所在月份或全年日历。
模块启用后会按配置执行一次命令，然后自动关闭，不会长期驻留。

配置项
- Arguments（参数）
 类型：文本；默认：""
 说明：传给 `/calendar` 的参数。留空时等价于 `/calendar`；可填写 `year`、`2027/1/1`、`3/4`、`15`、`April` 等命令支持的格式。

历史更新
- 146. 新增 Calendar 模块，可通过图形界面快速调用 `/calendar`。

备注
该模块输出到命令行/控制台；启用后会自动关闭。

相关命令
- `/calendar [date/month/day/year]`

相关模块
- [ScreenCapture (屏幕捕获)](./ScreenCapture.md)
- [AsciiArtConvert (字符画转换)](./AsciiArtConvert.md)

相关资料
无
