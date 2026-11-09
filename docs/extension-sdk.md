# 扩展与 SDK

扩展可以为 JackalClient 添加模块、配置项和翻译词条。原生扩展还可读取客户端状态、观察快捷键、发送 HTTP 请求，以及管理 Custom HUD 元素。

## 安装和管理扩展

打开 ClickGUI 的 **Extensions** 页面，搜索扩展并下载。使用本地扩展时，点击右上角 **Import local...**，选择 ZIP 或包含 `extension.json` 的文件夹。

首次安装后，新增模块立即出现在对应分类中，手动开启即可使用。本地导入的扩展在 All、Installed 列表置顶，并带有 Local 标识。扩展更新、禁用和删除在重启客户端后生效。

扩展模块的设置保存在当前 Profile。删除或禁用扩展后，这些设置继续保留，重新安装同名模块即可恢复；运行中重装的模块初始为关闭状态。

想先体验现成示例，可以安装 `example-module`，在 Misc 分类开启 [ExampleExtension](/modules/ExampleExtension)。它能观察 Clock 的开关与配置变化，并在目标启用、停用时执行指定的客户端命令。

## 从示例开始开发

准备 Windows、Visual Studio C++、CMake，以及 vcpkg 中的 nlohmann-json。客户端源码仓库提供：

| 路径 | 用途 |
| --- | --- |
| `extensions/example-module/` | 示例源码、清单、导出表和构建配置 |
| `extensions/sdk/jackal_extension.h` | C ABI，适合 C 或其他语言 FFI |
| `extensions/sdk/jackal_extension.hpp` | C++17 的 `jackal::Host` 便捷接口 |
| `docs/extension-sdk.zh-CN.md` | 完整请求格式与参数说明 |

在客户端仓库根目录运行：

```powershell
cmake -S extensions/example-module -B build/example-module-x86 -A Win32 -DCMAKE_PREFIX_PATH="$env:VCPKG_ROOT/installed/x86-windows-static"
cmake --build build/example-module-x86 --config Release
cmake -S extensions/example-module -B build/example-module-x64 -A x64 -DCMAKE_PREFIX_PATH="$env:VCPKG_ROOT/installed/x64-windows-static"
cmake --build build/example-module-x64 --config Release
py -3 scripts/extension-package.py publish --id example-module --destination temp/sdk-preview
```

构建后，源码目录内直接生成 `example-module-x86.dll` 和 `example-module-x64.dll`。最后一条命令生成带实际大小和 SHA-256 的安装清单。将 `temp/sdk-preview/example-module` 文件夹导入客户端，即可测试自己的修改。修改源码后重复构建与打包；替换已加载的本地版本时，先删除扩展并重启，再导入新版。

## 第一个模块

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

## 读取模块、变量和客户端状态

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

## 快捷键和窗口

```cpp
const bool ctrlO = host.keyDown(std::vector<int>{17, 79});
const bool clientCtrlO = host.keyDown(std::vector<int>{17, 79}, true);
const auto foreground = host.foregroundWindow();
const auto privateWindows = host.privateWindows();
```

键码使用 Windows 虚拟键码，组合中所有键同时按住时返回 true；第二个参数为 true 时，要求前台窗口属于客户端。检测单次触发时，像上面的完整示例一样比较本轮和上一轮状态。

窗口信息包含 `handle`、`valid`、`pid`、`title`、`className`、`visible`。句柄使用十进制字符串；`privateWindows()` 返回客户端隐私窗口列表，已失效条目标记为 `valid:false`。

## 查询结果与异步操作

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

## 发送 HTTP 请求

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

## 管理 Custom HUD

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

## 为扩展补充翻译

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

## 使用原始 JSON 接口

C++ 便捷方法封装了 `host.get(request)` 和 `host.post(request)`。例如：

```cpp
const auto exists = host.get({{"method", "module.exists"}, {"module", "Clock"}});
const uint64_t ticket = host.post({
    {"method", "customhud.update"}, {"index", 0}, {"patch", {{"Text", "Updated"}}}
});
```

通过 `host.info().at("capabilities")` 获取当前客户端的 query、post 方法列表。C 或其他语言可直接调用 `JcExtensionApiV1.query` / `.post`，请求和响应均为 UTF-8 JSON；查询的 value、修改操作的票据和后续结果格式与上文一致。
