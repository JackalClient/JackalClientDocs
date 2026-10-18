# TextInjector
文本注入器
分类：Control
描述：将剪贴板、固定文本或 UTF-8 文件内容逐字符输入到目标窗口。

## 需求
- 安全级别：会向目标窗口模拟输入，使用前应确认焦点与文本内容
- 权限需求：无需管理员权限；向更高权限窗口输入可能受系统限制
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用；智能打字和光标静止保护为 PRO 功能

## 介绍
TextInjector 位于 AutoCopy 下方，英文配置名为 `Text Injector`。
将剪贴板、固定文本或 UTF-8 文件内容逐字符输入到目标窗口，不需要驱动或管理员权限。免费版可以使用普通输入模式，专业版增加智能打字和光标静止保护。

## 使用

默认开启模块后等待 `LAlt+LShift+V` 触发，获取本次文本，准备完成且组合键松开后，锁定此时的前台窗口并开始输入。快捷键模式默认无需倒计时；开启 `Hotkey Mode Countdown` 后使用默认 5 秒倒计时，结束前切换到目标输入框。倒计时、准备和输入期间重复按快捷键不会排队或再次启动。

`Once` 在开启模块时开始倒计时，每次开启只运行一次，完成、失败或停止后自动关闭。`Stop Hotkey` 默认 `LCtrl+LAlt`，按下立即中断倒计时、准备或输入；Hotkey 模式仍保持开启，松开后可再次触发。关闭模块也会取消任务，输入时目标窗口失去焦点会停止。文本为空、文件不存在或无法读取等源错误会报错，不会输入部分源文本。

文件使用 UTF-8，可含 BOM，路径支持中文。CRLF 和 CR 换行统一作为一个换行字符计数，换行和制表符分别模拟 Enter 和 Tab，因此应选择支持它们的目标输入框。源内容和输入配置在触发时固定，本次运行不受随后编辑配置影响。

## 文本源与触发

| 配置项 | 默认值 | 说明 |
| --- | --- | --- |
| Source | Clipboard | Clipboard / Fixed / File Content |
| Fixed Source | 空 | 多行固定文本，仅 Fixed 显示 |
| File Source Path | 空 | UTF-8 文本文件，仅 File Content 显示 |
| Trigger Mode | Hotkey | Hotkey / Once |
| Hotkey Mode Countdown | false | 仅 Hotkey 显示，开启后快捷键触发也使用倒计时 |
| Trigger Hotkey | LAlt+LShift+V | 仅 Hotkey 显示 |
| Stop Hotkey | LCtrl+LAlt | 随时中断当前任务，Once 同时关闭模块 |
| Trigger Countdown (s) | 5.0 | 仅 Once 或快捷键倒计时开启时显示，0 表示无需倒计时 |
| Break If Caret Still (PRO) | Free: Off，Pro: Normal | Off / Normal / Strict |
| Caret Still Tolerance (ms) (PRO) | 300.0 | 光标位置变化的容忍时间，仅保护开启时显示 |

光标检测复用 TypingEffects 的异步接口，无需开启 TypingEffects 模块。Normal 每输入五个字符以及输入末尾检查一次；Strict 每个字符检查一次，并等待光标位置变化。只比较同一目标窗口的新采样，无法取得位置时跳过保护。检测到光标持续静止会警告并中断，Once 同时关闭模块。只接收文本而不暴露光标的窗口，无法用此机制判断文本是否被接收。

## 输入节奏

| 配置项 | 默认值 | 说明 |
| --- | --- | --- |
| Input Interval Mode | Free: Random，Pro: Smart (PRO) | Fast / Fixed / Random / Smart (PRO) |
| Input Fixed Interval (ms) | 10.0 | Fixed 字符间隔 |
| Input Min Interval (ms) | 10.0 | Random 间隔下限 |
| Input Max Interval (ms) | 20.0 | Random 间隔上限，小于下限时使用下限 |
| Input Smart Interval Rate | 1.0 | 智能延迟系数，越大越慢 |
| Input Smart Chinese Cut Word Mode | Jieba | Jieba / Single / Double / API / API 2 / Bili Suggestion，与 FancyText 相同 |
| Input Smart Min Segment Characters | 16 | 最少为 8，避免频繁分段 |
| Input Smart Max Segment Characters | 48 | 片段目标长度，必要时延长以保持中文词完整或避免尾段过短 |
| Input Smart Simulate Typos | false | 模拟打错并纠正，默认关闭 |
| Input Smart Typo Chance (%) | 2.0 | 每个英文字母或已准备中文词的打错概率，仅模拟打错开启时显示 |
| Input Smart Typo Correction Delay (ms) | 250.0 | 发觉错字后退格纠正的等待时间，仅模拟打错开启时显示 |

Fast 使用 1ms 字符间隙。Fixed、Random 和 Smart 分别显示相应子配置；实际间隔还会受到 Windows 调度及光标检查等待的影响。

Smart 将文本划为较长片段，在片段内部逐渐加速，并带少量随机波动。在标点处更容易停下来思考；只有已输入片段和剩余文本都达到最小长度时才加入分段停顿。中文同一词内的字符间隙为 1ms，词间保持智能节奏。默认 Jieba 使用 `assets/jieba` 中的本地词典和模型，无需联网；Single 和 Double 也为本地模式。在线分词在输入前完成，中文片段会发送至所选服务，倒计时结束仍未准备好时显示“准备文本中”；服务失败或本地 Jieba 资源缺失时回退到双字切分。

模拟打错先发送临时错误内容，再退格并发送正确原文。当 `Fake Chinese IME Candidate Generator != Same` 时，除英文字母外，也会从已准备好的中文候选中抽取错误词；等长候选权重更高，候选越靠前越容易选中。中文候选准备独立于视觉面板，即使假输入法关闭也能模拟中文打错；尚无错误候选时直接输入原文。临时中文仅选取基本多文种平面汉字，以确保逐字退格纠正。HUD 只计原文字符。纠错中按停止快捷键、关闭模块或切换窗口可能留下尚未纠正的临时文本。

## HUD

| 配置项 | 默认值 | 说明 |
| --- | --- | --- |
| HUD | true | 显示倒计时和输入进度 |
| HUD Position | Caret Position | Fixed / Caret Position，无法取得有效光标位置时回退 Fixed |
| HUD Fixed X Rate | 0.5 | Fixed 横向位置 |
| HUD Fixed Y Rate | 0.8 | Fixed 纵向位置 |
| HUD Scale | 1.0 | 字号缩放 |
| HUD Opacity (0~1) | 1.0 | 不透明度 |
| HUD Countdown Color | Red | 统一颜色类型 |
| HUD Progress Color | Pink | 统一颜色类型 |

进度格式为 `已输入字符数 / 总字符数 (百分比%)`，按 Unicode 字符计数，中文和补充平面字符都只计一个字符。倒计时只显示剩余秒数，字号为进度 HUD 的 200%；外围同心圆环以实心弧表示剩余时间、空心弧表示已走时间。HUD 位于输入光标下方并限制在屏幕内，位置跟随、固定坐标调整和位置回退均使用缓动。关闭 HUD 后隐藏全部 HUD 子选项；Fixed 坐标仅在 Fixed 模式下显示。

## 假中文输入法（PRO）

`Fake Chinese IME (PRO)` 默认关闭，独立于进度 HUD。开启后，在输入光标下方显示上方拼音、下方候选两个矩形框，位置跟随带缓动；无法取得光标时使用 HUD 固定坐标，字号跟随 HUD Scale。

| 配置项 | 默认值 | 说明 |
| --- | --- | --- |
| Fake Chinese IME (PRO) | false | 专业版视觉输入面板 |
| Fake Chinese IME Style | Classic | Classic / Dark |
| Fake Chinese IME Text Opacity (0~1) | 1.0 | 所有文本的不透明度 |
| Fake Chinese IME Background Opacity (0~1) | 0.9 | 矩形背景的不透明度 |
| Fake Chinese IME Shadow | true | 背景阴影 |
| Fake Chinese IME Shadow Opacity (0~1) | 0.5 | 仅阴影开启时显示 |
| Fake Chinese IME Shadow Thickness | 30.0 | 仅阴影开启时显示 |
| Fake Chinese IME Animation | Enlarge | Off / Enlarge / Slide (Bottom)，兼容旧 true / false 配置 |
| Fake Chinese IME Animation Duration (ms) | 50 | 仅动画开启时显示 |
| Fake Chinese IME Pinyin Laziness (0~1) | 0.5 | 每个词采用简写的概率 |
| Fake Chinese IME Candidate Count | 5 | 最大候选数量 |
| Fake Chinese IME Candidate Generator | Bili Suggestion | Same / Bili Suggestion |
| Fake Chinese IME Candidate Strict Rendering | true | 按当前显示的拼音前缀逐帧生成候选，仅假输入法开启时显示 |
| Fake Chinese IME Candidate Bili Suggestion Tolerance (0~1) | 0.0 | B站候选字数比例上限由 1.5 线性提高至 15，仅 Bili Suggestion 显示 |
| Fake Chinese IME Candidate Supplement | true | 从云端补充常用同音词，Same 模式忽略并隐藏 |

Classic 使用白色背景、黑色拼音；Dark 使用黑色背景、白色拼音。两种风格均使用红色首选项、蓝色其他候选。绘制选项在开启主开关后显示，阴影与动画关闭后隐藏相应附属项。候选配置放在 IME Candidates 分组，在开启假输入法或 Smart 模式的模拟打错时显示。

音节以单引号分隔，例如 `ce'shi`。简写遵循 `ceshi → ces / cs` 示例，显示为 `ce's` 或 `c's`；双字词两种方式比例为 5:1，词语越长，全部首字母方式的概率越高。拼音字符按词的总输入时长均分间隔显示，随后快速输入原文汉字。拼音和候选只在客户端绘制，不向目标发送。

Smart 使用所选分词模式，其他输入模式使用 Jieba。拼音复用现有接口、缓存并分批异步准备，候选使用独立后台任务；准备不会阻塞开始输入。尚未取得拼音的词继续按原方式输入，缓存命中的词可立即显示面板。停止、关闭模块或目标失去焦点会结束当前面板。

候选严格渲染默认开启。每帧按当前实际显示的拼音前缀生成候选，例如 `ce'shi` 在 `c`、`ce`、`ce'` 阶段排除原文“测试”，到 `ce's`（末字拼音首字母）或完整拼音后才允许显示。补充词表预先索引完整拼音、末字简写和全首字母简拼的各个前缀；B站异步预取当前和后续词的拼音阶段，查询时移除用于显示的音节分隔符。相同前缀复用缓存，绘制不进行网络请求。没有对应结果或字形未就绪时显示空候选区，不显示完整词的答案，也不沿用上一拼音阶段的结果。停止后的淡出保留最后显示的拼音与候选。

Same 在答案允许出现后重复显示原词，提前阶段候选为空，不补充候选或模拟中文打错。Bili Suggestion 在严格模式下查询拼音前缀，关闭严格渲染后查询完整原词并沿用原来的固定候选。推荐结果的字数筛选区间为 `1.0～(1.5 + 13.5 × Tolerance)` 倍：严格模式以当前已输入音节数为基准，普通模式以原词字数为基准。与启用的同音补充合并去重后，其他候选从短到长排序；答案允许出现且推荐结果包含原词时，尽量保留其返回索引，否则原词放在首位。候选不足或请求失败时只显示已有候选，不等待网络。中文打错仍使用完整词候选。

B站推荐结果在内存及 `output/Cache/BiliSuggestion/` 中按查询词缓存，命中后可跨触发和跨客户端启动复用。非空结果有效期一天，成功的空结果缓存五分钟；网络或解析失败保留有效旧结果，三十秒内不重复请求。同一查询的并发请求合并，缓存校验查询原文、格式和大小，并以临时文件原子替换。

输入前在渲染线程预先登记当前及后续词语、已准备拼音阶段候选的汉字。异步结果在字形登记后才显示，字体重载冷却期间隐藏当前阶段中尚未就绪的候选。关闭严格模式时继续使用已有候选，无法显示当前字形的面板暂缓显示；输入流程继续运行。

Enlarge 入场使用 EaseOutCubic 淡入及 0.7→1.0 缩放，出场使用 EaseInExpo 淡出及 1.0→0.7 缩放。Slide (Bottom) 从面板下方使用 EaseOutCubic 滑入并淡入，反向滑出并淡出。Off 直接显示或隐藏。动画反转或切换模式时，从当帧透明度、缩放和位移继续，避免跳帧；旧 true 映射为 Enlarge，false 映射为 Off。

### 同音候选补充词表

客户端后台读取 Ricochesta `main` 分支的 `data/FakeChineseIMECandidates.json`，缓存位于 `output/Cache/TextInjector/FakeChineseIMECandidates.json`，有效期一天。首次下载与过期刷新均不阻塞输入；下载或完整校验失败时保留有效旧词表，并在五分钟后允许重试。没有缓存且无法下载时使用原有候选。
本地候选缓存使用受保护格式保存，下载内容校验后直接编码写入，使用时自动解码。旧明文缓存自动转换，保留原修改时间与一天有效期；损坏缓存会重新下载。

词表原件仅维护在 `D:\Wormwaker\IMAGES\Ricochesta\data`，发布到云端后客户端才可下载。格式如下：

```json
{
  "Version": 1,
  "Candidates": {
    "wo": ["我", "窝", "握", "卧"],
    "ni": ["你", "拟", "泥", "妮"],
    "ta": ["他", "她", "它", "塔"],
    "ce'shi": ["测试", "侧视"]
  }
}
```

键为小写、无声调的完整拼音，音节以 `'` 分隔，匹配不受拼音简写影响；同音包括不同声调。候选支持汉字、自定义短语、英文和符号等 Unicode 文本，不含控制字符，每项最多 128 个字符。补充候选不受 B站字数容差限制。数组顺序表示同长候选的优先顺序，客户端按此顺序合并去重；最多 10,000 组，每组 64 项、32 个音节，文件上限 2MiB。只有字数等于音节数的纯汉字候选参与离线拼音反查；反查存在多种读音时不猜测，仍使用已有拼音接口。

## 历史更新

- v1.2.0：新增文本注入器、单次与快捷键触发、进度 HUD，以及专业版智能打字和光标静止保护。
- v1.2.0：HUD 位置支持缓动，倒计时使用双倍字号和同心圆环；快捷键模式默认无需倒计时，增加停止快捷键，默认使用 Jieba 本地分词。
- v1.2.0：专业版新增默认关闭的假中文输入法，支持后台拼音准备、简写、候选、两种配色、透明度、阴影和连续动画。
- v1.2.0：候选字形提前登记，增加推荐字数容差、每日同音候选补充、底部滑入动画及中文候选打错纠正。
- v1.2.0：默认开启候选严格渲染，拼音逐帧驱动候选并延迟显示答案；B站推荐结果增加磁盘缓存。

## 相关模块

- [AutoCopy](./AutoCopy.md)
- [TypingEffects](./TypingEffects.md)
- [FancyText](./FancyTexts.md)
- [Typewriter](./Typewriter.md)
