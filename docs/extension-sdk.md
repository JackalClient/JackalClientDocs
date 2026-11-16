---
outline: [2, 4]
---

# 扩展与 SDK

扩展可以为 JackalClient 添加模块、配置项和翻译词条。你可以选择 Lua、Jackal 批处理或 C++，读取客户端状态、观察快捷键、发送 HTTP 请求，以及管理 Custom HUD 元素。

**本页目录**

[[toc]]

## 1. 安装和管理扩展

打开 ClickGUI 的 **「扩展 (Extensions) 」** 页面，搜索扩展并下载。使用本地扩展时，点击右上角 **「导入本地 (Import local...)」**，选择 ZIP 压缩包或包含 `extension.json` 的扩展文件夹。

扩展可以只包含客户端必要的组件，也可以新增模块或其他数据。

内置模块缺少所需扩展时，可直接悬停下载按钮查看扩展名称并点击安装。Neverlose 的提示支持淡入淡出，显示在模块列表和设置面板上方，拖动窗口或调整左右栏宽度时跟随按钮移动。

对于注册自定义模块的扩展，首次安装后，新增模块立即出现在对应分类中，手动开启即可使用。Installed / Enabled 页优先显示有开关的扩展，同组内本地扩展优先；All 页保持本地扩展优先。本地导入的扩展带有 Local 标识。扩展更新、禁用和删除在重启客户端后生效。

扩展安装或更新下载期间，卡片底部会显示从左向右延伸的主题色进度线，并用缓动追赶实际下载进度；完成后短暂停留并淡出。

扩展模块的设置保存在当前配置档案。删除或禁用扩展后，这些设置继续保留，重新安装同名模块即可恢复；运行中重装的模块初始为关闭状态。

想先体验现成示例，可以安装 `example-module`，在 「其他 (Misc)」 分类开启 [示例扩展 ExampleExtension](/modules/ExampleExtension)。它能观察 时钟 (Clock) 模块的开关与配置变化，并在目标启用、停用时执行指定的客户端命令。

### 作者、仓库和安装目录

扩展卡片支持多个作者，每个名称均可单独点击；悬停名称时显示蓝色下划线。作者主页在进入 Extensions 时异步刷新，下载失败时继续使用已有链接。认证标识按作者分别显示，主页链接与认证名单独立维护。

鼠标移入卡片后，右侧按钮由左至右为 **升级 / 打开文件夹 / GitHub / 删除**，只显示当前可用操作。文件夹按钮打开已安装扩展的实际目录（包括本地导入扩展）；GitHub 按钮异步打开清单指定的项目仓库。

作者在 `extension.json` 中填写：

```json
{
  "publishers": ["First Author", "Second Author"],
  "github": "https://github.com/owner/repository"
}
```

`publishers` 按顺序列出 1–16 个互不重复的名称，每项最多 256 UTF-8 字节，不含控制字符或纯空格。单作者仍兼容 `publisher` 字符串，两者并存时使用 `publishers`。`github` 为可选的 HTTPS GitHub 仓库地址，可带末尾斜杠；省略或留空则隐藏按钮，作者主页放在下面的链接表中。

维护者在云控仓库 `data/ExtensionPublisherLinks.json` 按名称（区分大小写）配置主页：

```json
{
  "schemaVersion": 1,
  "publishers": {
    "First Author": "https://github.com/first",
    "Second Author": "https://example.com/author"
  }
}
```

值使用 HTTP/HTTPS 网页地址。每次进入扩展页请求完整列表，全部合法后替换并缓存，空对象清空链接；认证仍单独维护 `data/ExtensionTrustedPublishers.json`。暂未确认主页的 KALI_MC 使用带名称的 GitHub 用户搜索页，确认后可直接替换链接。GitHub 图标维护于云控 `img/runtime/gui/github.png`，文件夹图标使用客户端 `assets/folder.png`。

### 按需下载的语言组件

OpenCC（`opencc`）与 CppJieba（`cppjieba`）是内置扩展。首次实际使用中文简繁/地区转换或中文分词时自动下载；普通启动不预下载。安装后下一次调用即可使用，之后可离线处理。下载期间转换保留原文，分词暂用双字切分；手动命令可在安装通知后重新执行，歌词会在后续处理时使用已安装组件。

CppJieba 的分词实现和词典在独立 DLL 中运行。扩展作者使用客户端现有转换、分词入口即可触发下载；发布这些组件时，按架构登记 DLL、依赖运行库及配套数据，并为每个文件提供真实的 `size` 和 `sha256`。

### 旧组件清理

第一次进入 Extensions 时检查 Release 等旧分发位置；之后仅在再次进入且距上次检查至少一小时后检查。发现遗留组件时，弹窗显示总大小，每行列出一个组件名称，可选择 **清理 / 取消 / 不再提示**。清理完成后显示通知；不再提示会持续保存。

客户端启动时还会按云端 `data/OutdatedComponents.json` 自动清理完全弃用的文件及目录，删除目录时包含其内容，成功删除的项目记录在客户端日志中。自动清理与上述确认提示分别管理。维护者在 `automatic` 中按 `Release`、`assets` 和 `files`、`directories` 列出名称；需用户确认的组件放在 `extensions`，附 `id`、`name` 与 `targets`。仅填写指定目录的直接子项名称，发布前确认其中没有用户数据；完整格式见客户端仓库 `docs/module-metadata.zh-CN.md`。

### 1.1. 命令行管理

使用 `/extension` 查看用法，也可在命令行管理扩展：

```text
/extension list [ps=20] [pn=1]
/extension installed [ps=20] [pn=1]
/extension enabled [ps=20] [pn=1]
/extension search <keyword...>
/extension info <name...>
/extension install <name...>
/extension uninstall <name...>
/extension update <name...>
/extension enable <name...>
/extension disable <name...>
/extension disableall
/extension enableall
```

分页参数可以写成 `20 2` 或 `ps=20 pn=2`，每页 1～1000 项，页码从 1 开始。名称可以包含空格，支持准确 ID、名称及唯一部分匹配；有多个匹配项时，按提示使用准确 ID。搜索覆盖名称、ID、作者、双语描述和标签。

安装与更新进入后台队列，结果通过通知显示；首次安装后即可使用，更新、删除及扩展开关在重启后应用。批量启停只处理有开关的已安装扩展，模块开关另行管理。首次读取市场列表或搜索时会提示后台加载，稍后重复命令即可查看完整结果；已安装与已启用列表支持离线查询。详细说明见[扩展管理命令](/commands/system-commands)。

## 2. Lua 与批处理扩展

客户端内置 Lua 引擎，可以使用 Lua 脚本编写扩展。Lua 脚本中等复杂程度的功能。
而 Jackal 批处理则是复用客户端命令行系统，逐句进行命令执行，适合没有复杂逻辑的简单功能。
两种运行时都由客户端提供，安装扩展即可运行。

### 2.1. Lua 扩展

#### 2.1.1. 从现成示例开始

[example-lua](https://github.com/JackalClient/example-lua) 是可直接导入的 Lua 入门示例。下载示例文件夹或 ZIP 后导入，在 Misc 分类开启 **Lua 入门示例**：启用时显示欢迎语和 FPS，切换 Clock 会收到通知。示例 README 包含安装、文件说明、修改与发布步骤。

复制该目录，修改清单中的扩展 `id`、名称及模块 `name`，就可以创建自己的扩展。Lua 和批处理模块的清单使用 `schemaVersion: 2`，脚本文件按 `data`、`any` 登记，适用于两种客户端架构。

#### 2.1.2. 写第一个 Lua 模块

创建一个文件夹，放入以下两个文件。`extension.json`：

```json
{
  "schemaVersion": 2,
  "id": "my-lua",
  "name": "My Lua Extension",
  "version": "1.0.0",
  "publisher": "Your Name",
  "files": {"main": {"path": "main.lua", "kind": "data", "architecture": "any"}},
  "script": {"language": "lua", "entry": "main"},
  "modules": [{
    "key": "hello", "name": "MyLuaHello", "category": "Misc",
    "displayName": {"en": "My Lua Hello", "zh": "我的 Lua 模块"},
    "description": {"en": "Displays FPS when enabled.", "zh": "启用时显示 FPS。"},
    "defaults": {"Enabled": false},
    "behaviors": {"enable": "on_enable", "disable": "on_disable"}
  }]
}
```

`main.lua`：

```lua
function on_enable(config, context)
    jackal.notify("FPS: " .. jackal.variables.get("fps"), "success", context.module)
    jackal.sleep(500)
    jackal.notify("Ready")
end

function on_disable(config, context)
    jackal.notify("Stopped", "info", context.module)
end
```

导入这个文件夹，在 Misc 分类启用“我的 Lua 模块”。`jackal` 是全局 SDK 表，`enable` 和 `disable` 分别关联启用、停用函数。需要周期运行时，新增 `update` 函数并在 behaviors 登记，通过 `pollIntervalMs` 设置 100～60000 毫秒间隔。

每个回调接收配置快照 `config`，以及包含 `extension`、`module`、`key`、`action`、`directory` 的上下文 `context`。启用回调完成后开始 update，回调串行执行。`jackal.sleep(ms)` 挂起当前回调，0 表示让出本次调度，适合分块计算。

#### 2.1.3. 调用客户端接口

| 功能 | Lua 写法 |
| --- | --- |
| 获取变量 | `jackal.variables.get("fps")` |
| 查询模块 | `jackal.modules.exists("Clock")`、`jackal.modules.get("Clock")` |
| 开关模块 | `jackal.modules.set("Clock", true)` |
| 获取配置 | `jackal.config.get("Clock")` 或 `jackal.config.get("Clock", key)` |
| 修改配置 | `jackal.config.set("Clock", key, value)`，修改现有同类型标量项 |
| 查询快捷键 | `jackal.input.key_down({17, 16, 72})`，即 Ctrl+Shift+H |
| 权限与路径 | `jackal.client.permissions()`、`jackal.client.paths()` |
| 隐私窗口 | `jackal.windows.private_list()` |
| 前台窗口 | `jackal.windows.foreground()` |
| 翻译与变量展开 | `jackal.text.translate(text)`、`jackal.text.expand(text)` |
| 执行命令 | `jackal.command("/about")` |
| HTTP 请求 | `jackal.http.get(url, {timeoutMs=5000})` |
| Custom HUD | `jackal.hud.list()`、`.add(element)`、`.update(index, patch)`、`.remove(index)` |

查询直接返回值，写入、命令和 HTTP 方法自动等待结果。等待时客户端继续绘制与更新。网络回复包含 `status`、`body`、`headers`、`url`，传输错误可使用 `pcall` 处理。

```lua
function on_enable(config, context)
    local ok, response = pcall(jackal.http.get, "https://example.org/status", {timeoutMs=5000})
    if ok then
        jackal.notify("HTTP " .. response.status)
    else
        jackal.notify(response, "error")
    end
end
```

需要原始接口时，使用 `jackal.query(request)`、`jackal.post(request)`、`jackal.await(ticket)`，或让 `jackal.call(request)` 自动选择。JSON 转换使用 `jackal.json_encode`、`jackal.json_decode`；空数组用 `jackal.array()`，null 用 `jackal.null`。Lua 数组从 1 开始，HUD 接口的 index 从 0 开始。

客户端提供 base、table、string、math、utf8 标准库，同一扩展中的模块共享 Lua 全局状态。脚本顶层用于定义函数和少量初始化，等待操作写在回调中。运行出错会显示脚本位置与调用栈，并关闭出错模块。

### 2.2. Jackal 批处理扩展

#### 2.2.1. 准备清单和脚本

下载并导入 [example-batch](https://github.com/JackalClient/example-batch) 示例文件夹或 ZIP，在 Misc 分类开启 **批处理入门示例**。示例 README 介绍配置引用、顺序命令和延时。自建扩展时，创建 `extension.json`、`enable.jbat`、`disable.jbat`。

```json
{
  "schemaVersion": 2,
  "id": "my-batch",
  "name": "My Batch Extension",
  "version": "1.0.0",
  "publisher": "Your Name",
  "script": {"language": "jbat"},
  "files": {
    "start": {"path": "enable.jbat", "kind": "data", "architecture": "any"},
    "stop": {"path": "disable.jbat", "kind": "data", "architecture": "any"}
  },
  "modules": [{
    "key": "hello", "name": "MyBatchHello", "category": "Misc",
    "displayName": {"en": "My Batch Hello", "zh": "我的批处理模块"},
    "defaults": {"Enabled": false, "Message": "Hello"},
    "behaviors": {"enable": "start", "disable": "stop"}
  }]
}
```

behaviors 的值是文件逻辑键。需要周期运行时，添加指向 `.jbat` 的 update 行为和轮询间隔。

#### 2.2.2. 顺序动作和接口结果

在 `enable.jbat` 写入：

```text
# Show message and FPS in sequence.
/api {"method":"notify","text":{"$ref":"/config/Message"},"level":"success"}
/sleep 300
/api {"method":"variable.get","name":"fps"}
/let fps {"$ref":"/last"}
/api {"method":"notify","text":{"$ref":"/vars/fps"},"title":"FPS"}
```

在 `disable.jbat` 写入：

```text
/api {"method":"notify","text":"Stopped"}
```

普通行按客户端命令执行，支持省略 `/`；空行和 `#` 注释会跳过。扩展批处理提供：

| 指令 | 用途 |
| --- | --- |
| `/api JSON` | 调用客户端 query/post 接口，结果保存到 `/last` |
| `/let name JSON` | 保存本次回调的局部变量，通过 `/vars/name` 读取 |
| `/sleep ms`、`/sleepms ms` | 等待指定毫秒 |
| `/sleeps seconds`、`/sleepsec seconds` | 等待指定秒数 |

单键对象 `{"$ref":"/路径"}` 按 JSON Pointer 读取 `/config`、`/context`、`/vars`、`/last`，保留原值类型。配置键含 `/` 时写作 `~1`，含 `~` 时写作 `~0`。普通命令和接口串行完成；错误通知包含脚本文件与行号。

这些扩展指令用于模块行为脚本。命令行的 `/interpret`、 `/perform` 继续使用普通批处理解释方式。

### 2.3. 调试和发布

Lua 或批处理扩展首次导入后，模块立即加入分类。编辑脚本后，删除扩展并重启，再导入修改后的目录。模块配置保存在当前 Profile。

停用模块会取消旧回调和待执行请求，再执行 disable。已经开始的普通命令按其自身规则结束。每个脚本最多 2 MiB，每个 Lua 扩展最多使用 16 MiB 内存；长计算可通过 `jackal.sleep(0)` 分块。

Lua 与批处理示例附带的清单已为全部运行文件登记 `size`、`sha256`。独立下载后可直接导入；修改脚本、词典或图标时，需要更新对应校验值。自建扩展发布时，也需给 `files` 中每个条目填写实际的大小与 SHA-256。可在扩展目录查询：

```powershell
(Get-Item -LiteralPath ./main.lua).Length
(Get-FileHash -LiteralPath ./main.lua -Algorithm SHA256).Hash.ToLowerInvariant()
```

为每个登记文件替换文件名并填写结果。发布包根目录放 `extension.json` 及其登记的所有文件；本地开发时可省略这两个校验字段，由导入器计算。修改带校验值的文件后，需要同步更新校验值。

新版客户端也允许下载缺少 `size`、`sha256` 的扩展，提供的字段仍须与文件匹配。没有 SHA-256 就无法验证下载内容是否与作者原始文件一致，只有大小也不能验证内容完整；客户端下载后补齐的本地计算值仅用于后续检查。缺省时直接省略键，不要填写 `null`、零或空字符串；哈希字段名为 `sha256`，不是 `hash`。旧客户端仍依赖完整字段，因此正式发布包继续提供两项校验信息。

单文件受到源站大小限制时，可在清单顶层使用 `splitFiles`。逻辑文件仍在 `files` 中登记完整 `size` 与 `sha256`，`splitFiles` 关联其键并列出最大 9,900,000 字节的 `.001`、`.002`、`.003` 分片，每片也要提供大小和 SHA-256。客户端逐片校验后按顺序拼装，再校验完整文件；安装目录只保留最终文件。完整源码仓库可运行 `py -3 scripts/extension-package.py split --source <仓库> --id <id>` 自动拆分已登记的大文件并更新清单。

检查 `files` 中的每一项，包括 SYS、DLL、另一种架构的文件、许可证、词典、图标和压缩包，不能只填写主文件或图标的校验值。

如果使用完整客户端源码仓库，可自动打包：

```powershell
py -3 scripts/extension-package.py publish --id example-lua --destination temp/script-preview
py -3 scripts/extension-package.py publish --id example-batch --destination temp/script-preview
py -3 scripts/extension-package.py validate --source temp/script-preview --require-integrity
```

工具生成带实际大小和 SHA-256 的清单，输出目录可用于本地导入或扩展市场发布。扩展自己的配置词条可按第 5 节加入 Dictionary 文件。

普通 `validate` 允许开发清单缺少校验字段；发布前使用 `validate --require-integrity`，检查所有文件是否存在、两项字段是否完整及是否与实际文件一致。同步发布目录后对目标目录再运行一次严格校验，确保上传的是校验通过的文件和清单。修改资源后重新打包，并保持 Git 不转换资源换行，避免许可证、脚本的字节内容发生变化。

## 3. C++ 原生扩展


### 3.1. 从示例开始开发

准备 Windows、Visual Studio C++、CMake，以及 vcpkg 中的 nlohmann-json。下载 [C++ 示例 example-module](https://github.com/JackalClient/example-module)，提前下载 `JackalExtensionSDK`，将两个目录放在同一父目录：

```text
workspace/
├─ JackalExtensionSDK/
│  ├─ README.md
│  ├─ jackal_extension.h
│  └─ jackal_extension.hpp
├─ example-module/
│  ├─ CMakeLists.txt
│  ├─ example.cpp
│  ├─ example.def
│  └─ extension.json
├─ example-lua/
└─ example-batch/
```

三个示例与 SDK 并列放置。原生示例的 CMake 通过 `../JackalExtensionSDK/` 搜索头文件，源码使用 `#include "jackal_extension.hpp"`；自建工程也可直接包含 `../JackalExtensionSDK/jackal_extension.hpp`。Lua 和批处理通过客户端内置接口运行，开发时可查阅同级 `JackalExtensionSDK/README.md`。

独立 SDK 仓库的 README 提供开发方式选择、接入步骤和发布说明。完整客户端源码仓库中对应：

| 路径 | 用途 |
| --- | --- |
| `extensions/example-module/` | 示例源码、清单、导出表和构建配置 |
| `extensions/JackalExtensionSDK/README.md` | 独立 SDK 的入门与使用说明 |
| `extensions/JackalExtensionSDK/jackal_extension.h` | C ABI，适合 C 或其他语言 FFI |
| `extensions/JackalExtensionSDK/jackal_extension.hpp` | C++17 的 `jackal::Host` 便捷接口 |
| `docs/extension-sdk.zh-CN.md` | 完整请求格式与参数说明 |

独立下载示例后，在 `example-module` 目录运行，将 vcpkg 前缀换成自己的位置：

```powershell
vcpkg install nlohmann-json:x86-windows-static nlohmann-json:x64-windows-static
cmake -S . -B ../build/example-module-x86 -A Win32 -DCMAKE_PREFIX_PATH="$env:VCPKG_ROOT/installed/x86-windows-static"
cmake --build ../build/example-module-x86 --config Release
cmake -S . -B ../build/example-module-x64 -A x64 -DCMAKE_PREFIX_PATH="$env:VCPKG_ROOT/installed/x64-windows-static"
cmake --build ../build/example-module-x64 --config Release
```

构建后，扩展目录直接生成 `example-module-x86.dll` 和 `example-module-x64.dll`，中间文件保存在上级 `build/`。清单同时登记两种架构，发布和导入时需要提供两份 DLL，并更新对应的文件大小与 SHA-256。

如果使用完整客户端源码仓库，在仓库根目录运行：

```powershell
cmake -S extensions/example-module -B build/example-module-x86 -A Win32 -DCMAKE_PREFIX_PATH="$env:VCPKG_ROOT/installed/x86-windows-static"
cmake --build build/example-module-x86 --config Release
cmake -S extensions/example-module -B build/example-module-x64 -A x64 -DCMAKE_PREFIX_PATH="$env:VCPKG_ROOT/installed/x64-windows-static"
cmake --build build/example-module-x64 --config Release
py -3 scripts/extension-package.py publish --id example-module --destination temp/sdk-preview
```

构建后，源码目录内直接生成 `example-module-x86.dll` 和 `example-module-x64.dll`。最后一条命令生成带实际大小和 SHA-256 的安装清单。将 `temp/sdk-preview/example-module` 文件夹导入客户端，即可测试自己的修改。修改源码后重复构建与打包；替换已加载的本地版本时，先删除扩展并重启，再导入新版。

### 3.2. 第一个 C++ 模块

下面的代码可替换示例的 `example.cpp`。启用时显示当前 FPS，运行期间按 **Ctrl+Shift+H** 显示时间。

```cpp
#include "jackal_extension.hpp"
#include <vector>

namespace {
jackal::Host host;
bool enabled = false;
bool shortcutWasDown = false;
}

extern "C" uint32_t __cdecl JcExtensionAbiVersion() {
    return JC_EXTENSION_ABI_VERSION;
}

extern "C" int __cdecl JcExtensionInitialize(const JcExtensionHostV1* environment) {
    return host.initialize(environment);
}

extern "C" int __cdecl ExampleEnable(const char*) {
    try {
        host.notify("FPS: " + host.variable("fps"), "success", "My extension");
        enabled = true;
        shortcutWasDown = false;
        return 1;
    } catch (...) { return 0; }
}

extern "C" int __cdecl ExampleDisable() {
    enabled = false;
    return 1;
}

extern "C" int __cdecl ExampleIsEnabled() {
    return enabled ? 1 : 0;
}

extern "C" int __cdecl ExampleUpdate(const char*) {
    if (!enabled) return 1;
    try {
        const bool shortcutDown = host.keyDown(std::vector<int>{17, 16, 72});
        if (shortcutDown && !shortcutWasDown) {
            host.notify(host.expand("Time: %time%"), "info", "My extension");
        }
        shortcutWasDown = shortcutDown;
        return 1;
    } catch (...) { return 0; }
}
```

示例的 `example.def` 已登记这些导出名。清单 `modules[].behaviors` 把 enable、disable、isEnabled、update 分别关联到这些函数，`pollIntervalMs` 设置轮询间隔，范围为 100～60000 毫秒。希望快捷键更灵敏时，可将其设为 100。

创建自己的扩展时，为清单的 `id`、模块 `name` 和显示名称使用自己的命名，并同步修改构建产物名。模块的 `defaults` 定义配置项，`displayName`、`description`、`optionDescriptions` 提供中英文显示内容。

### 3.3. 注册命令与处理回调

原生扩展可以在 `extension.json` 顶层添加命令。主命令和子命令分别写完整路径，`/example echo` 会作为 `/example` 的子命令参与匹配、高亮、帮助和补全：

```json
{
  "commands": [
    {
      "path": "/example",
      "aliases": ["/ex"],
      "handler": "ExampleCommand",
      "help": {
        "summary": {"en": "Example command.", "zh": "示例命令。"},
        "usage": ["/example echo <text>"]
      }
    },
    {
      "path": "/example echo",
      "aliases": ["/ex echo"],
      "handler": "ExampleCommand",
      "arguments": [{"name": "text", "type": "string", "required": true}]
    }
  ]
}
```

`handler` 是对外导出名。所有命令和钩子使用同一回调原型：

```cpp
extern "C" int __cdecl ExampleCommand(
    const char* requestUtf8, char* responseUtf8,
    uint32_t capacity, uint32_t* required) {
    try {
        const auto request = nlohmann::json::parse(requestUtf8);
        const auto text = request.at("arguments").at("text").get<std::string>();
        return jackal::WriteResponse(
            jackal::CommandResult(true, text, "success"), responseUtf8, capacity, required);
    } catch (const std::exception& error) {
        return jackal::WriteResponse(
            {{"ok", false}, {"error", error.what()}}, responseUtf8, capacity, required);
    }
}
```

参数按清单顺序解析，支持 `string`、`integer`、`number`、`boolean`、`enum`、`enum-list`、`json`、`path`、`module` 和 `command`。`enum` / `enum-list` 使用 `choices`，`module` 在回调前按当前模块列表校验。最后一项可以设置 `multiple:true` 收集剩余参数；可选参数使用同类型 `default`。包含空格的单个参数可以使用双引号或单引号。

客户端发送的请求包含原始 `command`、规范化 `path`、命中的 `alias`、类型化 `arguments`、`positional` 和 `phase`。普通命令响应使用 `jackal::CommandResult()`；失败时返回 `{"ok":false,"error":"..."}`。回调请求上限 64 KiB，响应上限 1 MiB，容量不足时返回 `JC_EXTENSION_BUFFER_TOO_SMALL` 并填写 `required`。

### 3.4. 追加帮助、补全和原命令行为

`commandHelp` 向现有主命令或子命令追加说明，`commandCompletions` 追加 Tab 候选。静态候选使用 `values`；参数类型或规则中的 `type:path/module/command/hwnd` 会复用客户端补全来源：

```json
{
  "commandHelp": [
    {"command": "/version", "text": {"en": "Example note.", "zh": "示例补充。"}}
  ],
  "commandCompletions": [
    {"command": "/example echo", "argument": 0, "values": ["hello", "world"]},
    {"command": "/about", "argument": 0, "values": ["version", "license"]}
  ]
}
```

`commandHooks` 用于给已有命令添加行为。`before` 在原命令执行前运行，`after` 接收原结果。父路径匹配其子命令，`priority` 越小越先执行：

```json
{
  "commandHooks": [
    {"command": "/version", "phase": "before", "handler": "ExampleCommandHook", "priority": 0},
    {"command": "/version", "phase": "after", "handler": "ExampleCommandHook", "priority": 10}
  ]
}
```

钩子返回 `jackal::HookContinue()` 继续；before 阶段可返回 `HookReplace("/other command")` 修改本次调用；before 或 after 可返回 `HookOverride(result, message, level)` 接管或改写最终布尔结果。直接返回 `{"action":"deny","result":false}` 可拒绝原命令。命令回调与钩子在客户端命令执行线程同步运行，应快速返回；网络、文件扫描等耗时操作通过 `host.http()` 或后台任务完成。

命令名与内置命令冲突时不会覆写内置命令，需要改变行为时使用钩子。命令贡献属于原生 `schemaVersion:1`；首次安装并热激活后，客户端会在下一次输入、补全或帮助查询时刷新扩展命令表，无需重启。扩展更新、禁用和删除仍在重启后应用。可编译的完整示例见 `extensions/example-module/`：`/example types` 覆盖全部参数类型，`/version` 演示前后钩子、替换与覆写。

## 4. 客户端接口

### 4.1. 读取模块、变量和客户端状态

```cpp
if (host.moduleExists("Clock")) {
    const bool clockOn = host.moduleEnabled("Clock");
    const auto settings = host.config("Clock");
    host.setModule("Clock", !clockOn);
}

const auto names = host.variables();
const std::string fps = host.variable("fps");
const std::string text = host.expand("%date% %time% | FPS %fps%");
const auto access = host.permissions();
const auto client = host.state();
const auto paths = host.paths();
```

模块名使用原始英文名称，例如 `Clock`、`Custom HUD`。`variables()` 与 `/variables` 共用变量列表，`variable()` 返回字符串，接受 `fps` 和 `%fps%` 两种写法。

| C++ 接口 | 返回内容 |
| --- | --- |
| `info()` | API 版本、扩展 ID、语言和可用接口列表 |
| `modules()` / `moduleExists(name)` | 已注册模块列表 / 是否存在 |
| `moduleEnabled(name)` / `config(name)` | 模块实际开关 / 完整配置 JSON |
| `config(name, key)` | 单个配置项的原始 JSON |
| `variables()` / `variable(name)` | 变量名列表 / 变量值 |
| `permissions()` | admin、system、trustedInstaller、uiAccess、professional |
| `state()` | 当前 Profile、进程 ID、界面和屏幕尺寸、缩放、已启用模块 |
| `paths()` | home、assets、release、config、extension 的 UTF-8 路径 |
| `translate(text)` / `expand(text)` | 按当前语言查询词典 / 展开内置变量 |

`paths().extension` 是当前扩展的安装目录。配置中的颜色、列表、多选和长文本按原始 JSON 返回，可按对应结构读取。

### 4.2. 快捷键和窗口

```cpp
const bool ctrlO = host.keyDown(std::vector<int>{17, 79});
const bool clientCtrlO = host.keyDown(std::vector<int>{17, 79}, true);
const auto foreground = host.foregroundWindow();
const auto privateWindows = host.privateWindows();
```

键码使用 Windows 虚拟键码，组合中所有键同时按住时返回 true；第二个参数为 true 时，要求前台窗口属于客户端。检测单次触发时，像上面的完整示例一样比较本轮和上一轮状态。

窗口信息包含 `handle`、`valid`、`pid`、`title`、`className`、`visible`。句柄使用十进制字符串；`privateWindows()` 返回客户端隐私窗口列表，已失效条目标记为 `valid:false`。

### 4.3. C++ 查询结果与异步操作

查询接口返回当前状态；修改接口返回一个 `uint64_t` 票据。保存票据，在后续 update 回调中通过 `requestResult(ticket)` 获取结果：

```cpp
const auto reply = host.requestResult(ticket);
if (reply.value("ready", false)) {
    const auto& result = reply.at("result");
    if (result.value("ok", false)) {
        const auto& value = result.at("value");
    } else {
        host.notify(result.at("error").get<std::string>(), "error");
    }
}
```

每次完成后清除自己保存的票据，为等待设置合理期限。结果缓存最多保留 256 项、合计 16 MiB。常规状态查询在客户端生命周期回调中使用；`post()` 和 `requestResult()` 也可在扩展自己的线程中调用。

### 4.4. C++ 发送 HTTP 请求

HTTP 在后台执行。可设置请求方式、请求头、正文和超时：

```cpp
uint64_t pendingHttp = host.http("https://example.org/api/status", {
    {"verb", "POST"},
    {"headers", {{"Content-Type", "application/json"}}},
    {"body", nlohmann::json({{"message", "Hello"}}).dump()},
    {"timeoutMs", 5000},
    {"maxResponseBytes", 1024 * 1024}
});
```

将地址替换为自己的服务。在后续 update 中检查：

```cpp
if (pendingHttp) {
    const auto reply = host.requestResult(pendingHttp);
    if (reply.value("ready", false)) {
        pendingHttp = 0;
        const auto& result = reply.at("result");
        if (result.value("ok", false)) {
            const auto& response = result.at("value");
            const int status = response.at("status").get<int>();
            const std::string body = response.at("body").get<std::string>();
            host.notify("HTTP " + std::to_string(status));
        } else {
            host.notify(result.at("error").get<std::string>(), "error");
        }
    }
}
```

支持 HTTP/HTTPS，verb 可选 GET、POST、PUT、PATCH、DELETE、HEAD、OPTIONS。超时默认 15000 毫秒，范围 100～30000；正文上限默认 1 MiB，可设置为 1～4 MiB。代理沿用客户端 Web Settings，HTTPS 使用证书校验。

响应包含 `status`、UTF-8 文本 `body`、`headers` 和 `url`。headers 的键统一小写，值为字符串数组，保留重复响应头。3xx 原样返回，可读取 `headers.location`；4xx、5xx 也通过 status 判断。超时和传输错误在 result.error 中给出。

### 4.5. C++ 管理 Custom HUD

使用 `hudElements()` 读取列表，使用以下接口修改：

| 操作 | C++ 接口 |
| --- | --- |
| 新增元素 | `addHudElement(element)` |
| 整项替换 | `setHudElement(index, element)` |
| 修改部分字段 | `updateHudElement(index, patch)` |
| 删除元素 | `removeHudElement(index)` |
| 替换完整列表 | `replaceHudElements(elements)` |

```cpp
const uint64_t addTicket = host.addHudElement({
    {"Type", "Text"}, {"X", 40}, {"Y", 80}, {"Size", 24},
    {"Text", "FPS: %fps%"}, {"Color", "white"},
    {"ExtensionTag", "my-extension-status"}
});
host.setModule("Custom HUD", true);
```

addTicket 的成功结果包含 `count` 和新增元素的 `index`。随后可调用 `host.updateHudElement(index, {{"Text", "Updated"}})` 修改文本。下标从 0 开始，删除后后续下标前移；持续更新时，可先查列表，按自有 `ExtensionTag` 定位元素。

元素 Type 支持 Text、Image、Timer、Preset，以及 Exhibition、Adjust、Vape、LiquidBounce、SigmaJello、Rise、Jackal、Neverlose 等内置样式。X、Y 为整数，Color 支持颜色名、RGB(A) 数组和颜色对象。列表最多 4096 项、合计 2 MiB。修改立即更新 HUD 列表及当前 Profile 的内存配置，保存配置档案即可持久化。详细字段可参考 [CustomHUD](/modules/CustomHUD)。

## 5. 为扩展补充翻译

在扩展中添加 UTF-8 的 `Dictionary.txt`，每行使用 `English;中文`：

```text
My Status;我的状态
Show Status;显示状态
```

然后在清单中登记并引用：

```json
{
  "files": {
    "dictionary": {"path": "Dictionary.txt", "kind": "data", "architecture": "any"}
  },
  "contributes": {"Dictionary": ["dictionary"]}
}
```

词典随扩展一起安装。英文键区分大小写，每行用一个分号分隔两侧文本，同一扩展中的键保持唯一。公共词条优先；扩展之间的同名词条按扩展 ID 排序采用第一项。

## 6. 发布运行包与安装后设置

文件很多的运行环境可以打包成一个 ZIP，注册为 `archive` 并用 `unpack` 指定解压目录。安装和本地导入会在校验压缩包哈希后自动解压，不需要逐个登记文件：

```json
{
  "files": {"bundle": {"path": "Runtime.zip", "kind": "archive", "architecture": "any"}},
  "unpack": [{"file": "bundle", "path": "runtime"}],
  "setup": {
    "environment": {"RUNTIME_PREFIX": "runtime"},
    "config": [{"module": "Example OCR", "key": "Executable Path", "path": "runtime/tool.exe"}]
  }
}
```

`unpack` 最多 8 项，目标目录必须在扩展目录内且不能与登记文件重叠；压缩包沿用本地导入限制（最多 1024 项、单文件 128 MiB、合计 512 MiB，不支持加密、多卷和 ZIP64）。`setup.environment` 安装时设置当前进程环境变量并写入当前用户环境，`setup.config` 只在配置为空时填入扩展内绝对路径，不覆盖用户已有路径。官方 `tesseract-ocr` 扩展即用此方式发布整个 Tesseract 运行目录；用户也可以不安装它，改为在 TesseractOCR 模块中填写本机路径。

## 7. 原始 JSON 接口与能力检查

C++ 便捷方法封装了 `host.get(request)` 和 `host.post(request)`。例如：

```cpp
const auto exists = host.get({{"method", "module.exists"}, {"module", "Clock"}});
const uint64_t ticket = host.post({
    {"method", "customhud.update"}, {"index", 0}, {"patch", {{"Text", "Updated"}}}
});
```

通过 `host.info().at("capabilities")` 获取当前客户端的 query、post 方法列表。C 或其他语言可直接调用 `JcExtensionApiV1.query` / `.post`，请求和响应均为 UTF-8 JSON；查询的 value、修改操作的票据和后续结果格式与上文一致。
