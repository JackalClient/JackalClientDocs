# WidgetESP
组件透视
分类：Window

描述：读取 UIAutomation/MSAA 组件信息，并在屏幕上绘制组件边界、标签与提示。

WidgetESP（组件透视）用于检查鼠标所在窗口或前台窗口中的 UI 组件。它支持 Accurate、Point At、Foreground、Screen 等模式，可显示组件名称、角色、类名、描述、值、框架和 Automation Id。

## 常用配置

- Mode（模式）
  类型：枚举；默认：`Accurate`。
  说明：选择组件查询范围。`Accurate` 只查询鼠标所在组件；`Point At` 查询鼠标所在窗口；`Foreground` 查询前台窗口；`Screen` 查询整屏。
- Info Source（信息来源）
  类型：枚举；默认：`UIAutomation + MSAA`。
  说明：选择组件信息读取接口。默认会同时尝试 UIAutomation 与 MSAA。
- Query Cooldown (ms)（查询冷却）
  类型：整数；默认：`120`。
  说明：控制组件信息刷新间隔。遇到大型窗口或异常应用时可适当调大。
- Smart Query Frequency（智能查询频率）
  类型：布尔；默认：`true`。
  说明：根据鼠标移动、组件数量和文本量自动降低查询频率，减少高负载窗口造成的卡顿。
- Notify Query Errors（提示查询错误）
  类型：布尔；默认：`true`。
  说明：读取组件信息或绘制异常时弹出提示，并自动清理本次状态；关闭后仍会尽量记录调试错误。
- Pause When Menu On（菜单打开时暂停）
  类型：布尔；默认：`true`。
  说明：打开 ClickGUI 时暂停组件透视，方便调整配置。
- Disable In Private Windows（隐私窗口中禁用）
  类型：布尔；默认：`true`。
  说明：组件位于受显示亲和保护的隐私窗口时跳过读取和绘制。

## 使用建议

如果开启后遇到异常提示或性能波动，优先把 `Mode` 改为 `Accurate`，并适当提高 `Query Cooldown (ms)`。对兼容性较差的软件，可将 `Info Source` 切换为单独的 `UIAutomation` 或 `MSAA`。

## 相关模块

- [WindowESP (窗口透视)](./WindowESP.md)
- [WindowHighlight (窗口高亮)](./WindowHighlight.md)
- [PrivateWindow (隐私窗口)](./PrivateWindow.md)
