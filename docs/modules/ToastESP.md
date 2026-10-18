# ToastESP

通知透视。监视当前用户的 Windows 通知，将来源、标题和正文转发到客户端的通知、标题、语音、灵动岛等渠道。Free / Pro 均可使用。

## 配置项

| 配置 | 默认值 | 说明 |
| --- | --- | --- |
| Mode（模式） | WinRT | 置顶显示。WinRT 使用原生通知监听；Legacy 保留旧版 UIAutomation 采集。 |
| Install and Start WinRT（安装并启动 WinRT） | 命令按钮 | 仅在 WinRT 模式显示，直接调用 `toastesp install` 打开安装向导，成功后自动启动模块。 |
| Exclude Client（排除客户端） | true | 排除客户端自身通知，避免转发循环。WinRT 支持来源 AUMID 识别，并兼容旧版文本筛选。 |
| Debug Output（调试输出） | false | 开启后在控制台彩色输出每条通知的来源、AUMID、AppInfo 诊断、标题、正文、图标缓存文件、路径和解析失败原因。修改后会重启当前监听后端。 |
| Notify Mode（通知模式） | Notify | 可选择 Off、Notify、Chatter、Title、Speak、Island、Actionbar、ChatBar。 |

Mode 在模块开启期间修改也会生效：自动停止旧后端、清理旧会话消息，再启动所选后端，不会默认同时运行两种采集方式。

各通知转发渠道使用自身的显示或语音流程，不会把通知正文加入 FancyText 独立字体队列；仅转发通知而未显示花式文字时，不会触发花式字体加载或重载警告。

## WinRT 模式

原生后端由 `toast-native/JDToastBroker.exe` 和 `JDToastNotification.dll` 提供。客户端本体不直接加载监听 DLL，也不需要改成 MSIX 应用。

构建客户端时会通过项目引用依次构建两个原生组件，解决方案配置管理器中也默认勾选构建。两个项目保留客户端的 Free / Pro 配置名称：例如 `Release-Pro-StaticCRT` 输出至 `build/Release-Pro-StaticCRT/Release/toast-native/`，单独构建组件时也不会落入 Free 目录。Broker 构建后生成身份包；未指定签名证书时身份包仍未签名，不能直接安装。

- 需要 Windows 10 2004 或更新版本，并为实际运行客户端的用户安装通知身份包。
- 首先使用原生事件；事件订阅不可用时才尝试原生轮询，不会静默切换到 Legacy。
- 初始快照只建立基线，不转发历史通知；新增和更新正常转发，移除只维护缓存。
- 不删除、不清空用户通知中心里的通知。
- 优先通过来源 AUMID 获取应用 Logo；Jackal 自身无 AUMID 的通知直接使用受管客户端进程的 EXE 图标，其他非打包应用则记录 `AppInfo` 的 HRESULT / 标识，并按来源名称查找开始菜单快捷方式、进程名或文件版本信息，尝试提取对应 EXE 图标。图片按比例保存为最长边 64 像素的 PNG，缓存在客户端 `output/Cache/ToastIcons/` 下。只通过管道传递缓存文件名，不传图片数据；缓存或取图失败时仍转发通知正文，图标回退为默认图标。此图标不是联系人头像或通知内容配图。
- Windows 通知中心事件与屏幕上可见横幅不完全等价，免打扰及通知隐私设置可能影响内容和观察范围。

### 灵动岛输出

`Notify Mode = Island` 使用灵动岛的 `DIS_NOTIFY` 通知布局，按来源标题与正文显示，复用通知堆叠、进度和进退场动画，不再覆盖临时文本状态。显式 Island 输出使用独立的有界通知队列，不要求开启 Notification 模块、选择 Metro 样式或勾选 Island 的 Notify 状态同步。

每条消息可独立使用默认图标或自定义图片图标，WinRT 有应用图标时自动选择图片模式，按比例与原色显示。普通 `Notify` 输出也携带同一图标，启用原有通知同步链路后，灵动岛同步显示时同样生效。Legacy 直接输出到 Island 也使用通知布局，但未提供原生应用图片时保留默认图标。

磁盘图标缓存有效期 24 小时；`output/Cache/ToastIcons/` 中最后修改时间超过三天的 PNG 自动删除，启动约十分钟后首次清理，之后每小时检查。获取失败在当前后台会话内缓存 5 分钟，避免重复查询。重新构建时需要同时更新客户端、Broker 和通知监听 DLL，v4 管道协议包含 AppInfo 诊断字段，旧版组件不兼容新增字段。

## 首次安装

先关闭正在运行的 WinRT 通知透视，点击模块中的“安装并启动 WinRT”按钮，或执行 `/toastesp install`。两者共用同一个向导入口：检查组件与签名 → 必要时展示发布者、证书指纹和目录，明确确认后请求 Windows UAC 信任匹配公钥 → 原普通用户注册身份 → 客户端自动选择 WinRT 并启用模块 → Windows 请求通知访问时选择允许。

不会为用户生成签名密钥，不会静默导入证书或卸载已有注册。相同目录、版本和架构已注册时直接启动；迁移或更新需再次确认，并要求关闭所有客户端的通知监听。拒绝或取消后不会启动模块，重复调用不会并行安装。

组件目录仅保留 EXE、DLL、MSIX、公钥 CER、安装脚本和中英文 `README.txt`。不分发 PDB / LIB / EXP / ILK、身份包暂存目录或 PFX 私钥。

若提示身份包未签名，请向作者索取完整的已签名发行版本；普通用户无需编译或自行生成证书。开发者可使用 `build-toast-winrt.ps1 -SkipBuild -CreateDevelopmentCertificate` 为现有组件重新打包签名，并指定正确的配置、平台和运行目录。正式分发应使用正式签名证书，不应分发开发私钥。

客户端的 `toast-native` 目录必须包含完整组件、已签名的 `JDToastIdentity.msix` 及 `Install-ToastWinRT.ps1`。以目标用户的普通 PowerShell 运行：

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\toast-native\Install-ToastWinRT.ps1 -Guided
```

手动运行脚本后回到客户端选择 WinRT 并开启 ToastESP；通过客户端向导安装则自动启动。首次请求时允许 Windows 通知访问。

开发自签名包额外需要先在管理员 PowerShell 执行 `Install-ToastWinRT.ps1 -TrustDevelopmentCertificate`，该步骤只信任匹配包签名的公钥到 `LocalMachine\TrustedPeople`，不会代替目标用户注册包；随后再回到目标用户执行普通安装。私钥 PFX 不应分发。

移动客户端目录或更新同名身份注册时，先关闭所有 ToastESP，再显式运行 `Install-ToastWinRT.ps1 -ReplaceRegistration`。脚本拒绝在 helper 仍运行时替换注册。`-Remove` 仅移除此后端的身份包，不删除客户端文件或用户通知。

## Legacy 模式

无需安装 WinRT 身份包，使用原有约 400ms UIAutomation 轮询，读取可见通知窗口。保留 QQ 聚合内容解析、特殊 Z-band 窗口识别和任务栏菜单噪声排除，适合兼容或排查原生后端问题。

## 后台退出与组件更新

关闭 ToastESP、切换后端或退出客户端时，WinRT 后台会自动停止。Broker 除了受客户端 Job 管理，还独立监控对应客户端的进程句柄与管道断开；优先释放监听，授权或释放卡住时在退出信号后的 2 秒宽限后结束自身，避免残留占用 DLL。

重新构建或覆盖组件前，先关闭使用同一 `toast-native` 目录的所有客户端或 WinRT 监听，再等待后台退出。若旧版本留下后台，请在任务管理器核对程序路径后只结束对应的 `JDToastBroker.exe`，不要结束其他目录或仍在使用的客户端实例。DLL 输出文件占用导致的链接失败，可能连带造成 Broker 所需的 LIB 缺失；LIB 属于构建中间文件，不应放回用户组件目录。

## 错误处理

缺少组件、身份包未注册、通知权限被拒绝或后端启动失败时，会显示具体原因并关闭 ToastESP，避免持续弹错。修复安装或权限后重新开启；也可以明确切换到 Legacy 后再开启。Mode 默认仍是 WinRT，不会因为失败而自动修改配置。
