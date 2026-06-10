# SecurityESP
安全透视
分类：Process
描述：在右侧显示病毒和杀软列表。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
SecurityESP 会定期扫描当前进程列表，并根据内置进程画像把结果分为“恶意软件”和“杀毒软件”两组展示。
当检测到新增恶意进程或新增杀软进程时，会立即发出提醒；HUD 面板支持动态动画、鼠标让位、悬停说明和拖拽定位。
它适合做安全态势可视化，尤其在你同时运行对抗类模块时，能快速观察环境变化。

## 配置项
- Hide When Menu On（菜单打开时不显示）
 类型：布尔；默认：true；说明：菜单打开时隐藏 SecurityESP 面板，减少与 GUI 的叠层干扰。
- Give Way to Mouse（给鼠标让道）
 类型：布尔；默认：true；说明：鼠标进入面板区域时自动把面板平滑移开，避免遮挡操作；开启 HudEditor 时该行为会被自动禁用。
- Show Description When Mouse Hovering（在鼠标悬停时显示描述）
 类型：布尔；默认：true；说明：悬停在某个条目上时，用该进程的描述文本替换主文本显示；当 `Give Way to Mouse` 开启时此项会被抑制，避免交互冲突。
- Background（背景）
 类型：布尔；默认：true；说明：面板背景总开关，关闭后仅保留文字层。
- Background Round Corners（背景圆角）
 类型：布尔；默认：true；说明：背景是否启用圆角渲染。
- Background Roundness（背景圆滑程度）
 类型：数值；默认：0.2f；说明：背景圆角比例，建议在 0.15~0.35 之间微调。
- Background Opacity (0~1)（背景不透明度 (0~1)）
 类型：数值；默认：0.5f；说明：背景透明度；面板淡入淡出时会与动画透明度叠乘。
- Background Shadow（背景阴影）
 类型：布尔；默认：true；说明：背景阴影开关，能提升复杂桌面上的可读性。
- Background Shadow Thickness（背景阴影厚度）
 类型：数值；默认：26.0f；说明：阴影扩散宽度，值越大越柔和但占屏越多。
- Background Shadow Opacity (0~1)（背景阴影不透明度 (0~1)）
 类型：数值；默认：0.45f；说明：阴影透明度，建议与背景透明度一起调整。
- Background Color（背景颜色）
 类型：枚举；默认："Black"；说明：背景填充色，`Transparent` 可完全透底。可选：Flow（流动）；Transparent（透明）；其余颜色见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Background Shadow Color（背景阴影颜色）
 类型：枚举；默认："Black"；说明：阴影颜色。可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Title Color（标题颜色）
 类型：枚举；默认："Red"；说明：组标题颜色（如 Malware/Antivirus 标题）。可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Malware Text Color（恶意软件文本颜色）
 类型：枚举；默认："Red"；说明：恶意进程条目文本颜色，建议用高警示色。可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Antivirus Text Color（杀毒软件文本颜色）
 类型：枚举；默认："Gold"；说明：杀软进程条目文本颜色，建议与 Malware 颜色明显区分。可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Description Text Color（描述文本颜色）
 类型：枚举；默认："Aqua"；说明：悬停说明文本颜色。可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- HUD Font Size（HUD 字号）
 类型：数值；默认：30；说明：面板文本字号，含标题和条目。
- HUD Line Gap（HUD 行距）
 类型：数值；默认：5；说明：行间距，条目较多时可适当减小提升容纳量。
- X Rate（横坐标比例）
 类型：数值；默认：0.8；说明：面板横向锚点比例，支持拖拽回写。
- Mid Y Rate（中心纵坐标比例）
 类型：数值；默认：0.5；说明：面板纵向中心比例，面板会按高度自动居中到该位置。
## 历史更新
- 40. 为 ClipboardESP / SecurityESP 添加众多配置项，整改视觉，可以高度定制。支持 HudEditor 拖曳。添加为鼠标让位。
- 23. 为 Download HUD, Chat Bar, Clipboard ESP, Security ESP, Letter Graph 添加 HUD Editor 拖曳。
- 12. 为 Clipboard ESP, Security ESP 添加自定义位置。

## 备注
该模块每约 500ms 更新一次安全态势，并在“数量增加”时发送新增提示；如果你只想静态看板，可关闭通知模块而保留 HUD。
如果出现“鼠标悬停看不到描述”，优先检查 `Give Way to Mouse` 是否开启；开启时面板会优先执行让位逻辑。

## 相关命令
无

## 相关模块
- [ProcessManager (进程管理器)](./ProcessManager.md)
- [KillAV (击杀杀软)](./KillAV.md)
- [KillMalware (击杀病毒)](./KillMalware.md)
- [ProcessESP (进程透视)](./ProcessESP.md)
- [PPLESP (受保护进程透视)](./PPLESP.md)

## 相关资料
无
