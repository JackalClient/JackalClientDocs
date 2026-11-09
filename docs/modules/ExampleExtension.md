# ExampleExtension
示例扩展
分类：Misc
描述：观察另一个模块的开关和配置变化，可分别在目标开启、关闭时执行命令，并演示可选的模块联动。

编写自己的扩展可查看《[扩展与 SDK](/extension-sdk)》，其中包含示例构建、变量查询、快捷键、HTTP 和 Custom HUD 的用法。

## 安装与使用
在 Extensions 下载 `example-module`，或导入已构建的示例扩展目录。首次安装后立即出现在 Misc，默认关闭，手动开启即可，无需重启。扩展更新、禁用和删除仍在重启后生效。

扩展包同时包含 x86 和 x64 两份 DLL，位于扩展目录根部，客户端按自身架构加载。原生扩展与客户端拥有相同权限，只安装可信来源。

## 配置项
- Watched Module：原始英文模块名，默认 `Clock`；更换目标后重新启用本扩展。
- Notify Changes：通知目标开关和布尔等配置的变化，配置通知只显示变化项名称。
- Control Watched Module：启动本扩展时请求开启目标；关闭联动仍能观察目标变化。
- Restore On Disable：开启联动后，停用本扩展时请求恢复目标原来的开关状态。
- Run Command On Enable / Enable Command：目标由关变开时执行以 `/` 开头的单条客户端命令，不是在启动本扩展时执行。
- Run Command On Disable / Disable Command：目标由开变关时执行指定命令。
- Message / Notification Level：启动提示正文及通知级别。
- Activation Count：本扩展模块的启用次数。

命令触发不依赖联动开关或变化通知。权限和危险操作确认仍走客户端正常流程。变化以轮询检测，短时间内变化后立即恢复原状可能不会被观察到。

## 翻译与词典
配置词条保存在扩展自己的 `Dictionary.txt` 中，随 DLL 和图标一起安装，补充内存词典，不修改公共 `Dictionary.txt`。模块译名、模块描述及配置项描述来自扩展清单，不需要登记到公共模块元数据中。

清单通过 `contributes.Dictionary` 引用已登记的数据文件。词条采用 UTF-8 `English;中文` 格式，英文键区分大小写，每行只能有一个分号，同一扩展内不能重复键。公共词条优先；不同扩展同键时按扩展 ID 排序采用第一项。
