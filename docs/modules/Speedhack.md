# Speedhack
变速齿轮
分类：Process
描述：通过注入动态链接库，改变指定进程的运行速率。

## 需求
- Unsafe：是
- Malicious：否
- 需要管理员权限：否
- 需要系统权限：否
- 需要 TrustedInstaller 权限：否
- 驱动依赖：否
- 是否 WIP：否
- 是否需要联网：否
- 版本属性：普通可用

## 介绍
[观看视频 Timer/Speedhack | 任意应用的基础变速 [ft.Jackal]](https://www.bilibili.com/video/BV1LTMPzCEXK)
Speedhack 会向目标进程注入 `JDSpeedhack` 组件，让目标运行速度加快或减慢。启用时会先写入 `JDSpeedhack.ini`（速率与反卸载参数），再按目标位数注入 32/64 位 DLL；关闭时执行反向卸载。
模块开启后，`加速按键`/`减速按键`会在运行中动态改速。每次改速本质是“先卸载旧参数，再写新参数，再重新注入”，所以改速会有一次短暂重载过程。

## 配置项
- Process Name (Empty For Any)（进程名 (用空指代任何)）
类型：文本；默认："javaw.exe"；作用：按进程名筛选目标。建议：保持精确名称，避免误注入到无关进程。

- Process Id (Zero For Any)（进程ID (用0指代任何)）
类型：整数；默认：0；作用：按 PID 精确指定目标。建议：多实例场景优先用 PID。

- Speed（速率）
类型：浮点；默认：0.5；作用：目标速度系数（1.0 为原速，<1 降速，>1 加速）。建议：从 0.8~1.2 小步试，确认稳定后再扩大范围。

- Anti Unload（反卸载）
类型：布尔；默认：false；作用：写入 DLL 自保护策略，可能导致常规卸载失败。建议：除非明确需要防卸载，否则不要开启。

- Speed Change Step（每次变速差值）
类型：浮点；默认：0.1；作用：热键每按一次增减的速率步长。建议：日常用 0.05~0.2；步长过大容易出现体感突变。

- Speed Up Keybind（加速按键绑定）
类型：按键组合；默认：RAlt + =；作用：模块开启时触发“增速并重载注入”。建议：避免与输入法/系统快捷键冲突。

- Speed Down Keybind（减速按键绑定）
类型：按键组合；默认：RAlt + -；作用：模块开启时触发“减速并重载注入”。建议：与加速键保持同组，便于快速回调。

## 历史更新
- 15. 为 JDSpeedhack.dll 变速模块添加了一个针对 Sleep 的 hook，以便变速延时。
- 12. 为变速齿轮 Speedhack 模块添加配置项：Anti Unload。打开此项后，将会开启DLL自保护功能，无法通过正常方式卸载。所以如果要卸载只能关闭进程。相应的修改了JDSpeedhack.dll
- 11. 添加模块 Speedhack ，即变速器，通过注入DLL改变某一进程的速度。

## 备注
如果目标进程不存在或筛选为空，模块会直接回退并关闭。
当 `Anti Unload` 开启时，关闭模块可能出现“部分目标仍残留注入”的情况；这时模块会保持开启状态并提示剩余数量。

## 相关命令
无

## 相关模块
- [Injector (注入器)](./Injector.md)
- [RemoteRun (远程执行)](./RemoteRun.md)
- [ProcessManager (进程管理器)](./ProcessManager.md)

## 相关资料
- [Timer/Speedhack | 任意应用的基础变速 \[ft.Jackal\]](https://www.bilibili.com/video/BV1LTMPzCEXK)