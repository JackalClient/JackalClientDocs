# Key Mapper
按键映射
分类：Control
描述：将一个按键或组合键映射到另一个按键。

## 需求
- 安全级别：常规模块
- 权限需求：Simulation 无；Virtual 修改注册表时需要管理员权限
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
Key Mapper 提供 Simulation 与 Virtual 两种模式。Simulation 在客户端运行期间模拟按键映射；Virtual 使用 Windows `Scancode Map` 注册表值，修改后通常需要注销或重启 Windows 才能完全生效。

Virtual 模式会将 `Custom Mappings` 整体写入注册表。修改前应确认映射内容有效，并以管理员身份运行客户端。

## 配置项
- Mode（模式）
 类型：下拉选项；可选：Simulation、Virtual；默认：Virtual
 说明：选择运行时模拟或系统扫描码映射。
- Custom Mappings（自定义映射）
 类型：JSON 文本；默认：`[]`
 说明：保存源按键、目标按键、启用状态与编号。Virtual 模式仅支持单键映射。
- Disable LWin（禁用左 Win 键）
 类型：布尔；默认：false；仅在 Mode 为 Virtual 时显示
 说明：开启时立即向 Custom Mappings 加入 `LWin -> F24` 并尝试写入注册表；关闭时立即移除 LWin 源映射并重新写入注册表。写入失败时，开关和 Custom Mappings 都会恢复到修改前状态。
- System Mappings (READONLY)（系统映射，只读）
 类型：JSON 文本；仅在 Mode 为 Virtual 时显示
 说明：显示当前从 Windows 注册表读取的扫描码映射。

## 备注
- Virtual 模式修改注册表通常需要管理员权限。
- `Disable LWin` 使用很少由常规键盘触发的 F24 作为目标键。
- 注册表写入成功不代表当前登录会话会立即采用新扫描码映射，通常仍需注销或重启系统。

## 相关命令
- `/keymapper`
- `/keymapper add <src> <dst>`
- `/keymapper list`
- `/keymapper remove <id>`
