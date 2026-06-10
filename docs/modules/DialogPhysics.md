# DialogPhysics
物理弹窗
分类：Window
描述：给对话框添加物理效果。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
DialogPhysics（对话框物理）为窗口拖拽与碰撞提供物理模拟效果。建议先用默认阻尼和重力，确认稳定后再调速度与惯性。
## 配置项
- Constant Mode（恒定模式）
 类型：枚举；默认："Float"
 说明：常量单位模式，影响参数解释方式。
 可选：Off（关闭）；Fall（下落）；Bounce（弹跳）；Float（飘浮）
- Collision（碰撞）
 类型：枚举；默认："Omnidirectional"
 说明：碰撞方向策略，决定反弹边界处理方式。
 可选：Off（关闭）；Orthogonal（正交）；Omnidirectional（全方向）
- Gravity（重力）
 类型：数值；默认：9.8f
 说明：重力强度，影响下落速度。
- Basic Friction（基础摩擦力）
 类型：数值；默认：0.03f
 说明：基础摩擦，控制横向滑动衰减。
- Step（步长）
 类型：数值；默认：0.1f
 说明：物理步进时间。过大可能抖动，过小计算量更高。
- Dialog Bounce Damping（对话框弹跳阻尼）
 类型：数值；默认：0.6f
 说明：碰撞反弹衰减，越大反弹损失越多。
- Pause When Menu On（打开菜单时暂停）
 类型：布尔；默认：true
 说明：菜单打开时暂停物理模拟，方便调整参数。
- Drag Inertia（拖拽惯性）
 类型：数值；默认：20.0f
 说明：拖拽惯性，越大越容易“甩动”。
- Drag Spring K（拖拽弹性系数）
 类型：数值；默认：20.0f
 说明：拖拽回弹弹性系数，越大越“紧”。
- Drag Damping（拖拽阻尼）
 类型：数值；默认：3.0f
 说明：拖拽阻尼，越大越快停下。
- Initial Velocity（初始速率）
 类型：布尔；默认：false
 说明：启用初速度注入，让窗口初始就有运动效果。
- Initial Min Velocity（初始最小速率）
 类型：数值；默认：4.0f
 说明：初速度下限。
- Initial Max Velocity（初始最大速率）
 类型：数值；默认：8.0f
 说明：初速度上限，应不小于最小值。
- Initial Random Degree（初始随机速率）
 类型：布尔；默认：true
 说明：初速度方向使用随机角度；关闭后使用自定义角度。
- Initial Custom Degree（初始自定义速率）
 类型：数值；默认：1.57f
 说明：固定初速度角度，仅在随机角度关闭时生效。
## 历史更新
- 34. 添加模块：Dialog Physics，对话框物理。给登记过的对话框施加物理效果。

## 备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

## 相关命令
无

## 相关模块
- [WindowTags (窗口标签)](./WindowTags.md)
- [WindowHighlight (窗口高亮)](./WindowHighlight.md)
- [WindowESP (窗口透视)](./WindowESP.md)
- [Tracers (追踪线)](./Tracers.md)
- [TargetESP (目标透视)](./TargetESP.md)
- [TargetHUD (目标显示)](./TargetHUD.md)
- [WindowMaster (窗口大师)](./WindowMaster.md)
- [PrivateWindow (隐私窗口)](./PrivateWindow.md)

## 相关资料
无
