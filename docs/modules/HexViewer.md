# HexViewer
十六进制查看
分类：File
描述：以十六进制格式查看文件。

## 需求
- 安全级别：常规模块
- 恶意标记：否
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定
- 版本属性：普通可用

## 介绍
HexViewer 是十六进制可视化配置模块，本体不会常驻执行；启用时会提示你使用命令进行查看。
它支持多种着色策略：关闭、简易、类别、步长，以及命名色表模式。对于文本内容还会做 UTF-8 分析，并对 Unicode 字节做差异化上色，方便识别编码结构。

## 配置项
- Color Mode（颜色模式）
  类型：组合框；默认：Simple；说明：决定 Hex 输出着色策略。默认 Simple 可读性最稳，建议先用它排查数据结构，再切到 Category 或 Step 做细粒度分析。
  可选项：Off（关闭）、Simple（简易）、Category（类别）、Step（步长）、其余命名色见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Category Null Color（类别 Null 颜色）
  类型：颜色文本；默认："30;30;30"；说明：用于 `0x00` 的配色，建议用低亮度颜色区分空字节块。
- Category CR Color（类别 CR 颜色）
  类型：颜色文本；默认："&11"；说明：用于回车字符的配色，建议与 LF 形成明显对比，便于识别换行风格。
- Category LF Color（类别 LF 颜色）
  类型：颜色文本；默认："&10"；说明：用于换行字符的配色，配合 CR 颜色可快速识别 CRLF/LF。
- Category Control Color（类别 控制字符颜色）
  类型：颜色文本；默认："&6"；说明：用于不可打印控制字符，建议保留高对比色，避免与普通字节混淆。
- Category Space Color（类别 空格颜色）
  类型：颜色文本；默认："&12"；说明：用于空格字符，建议保持醒目，便于排查对齐或分隔问题。
- Category Punct Color（类别 标点颜色）
  类型：颜色文本；默认："&14"；说明：用于 ASCII 标点，适合在协议文本中识别分隔符。
- Category Alpha Color（类别 字母颜色）
  类型：颜色文本；默认："&7"；说明：用于 ASCII 字母，建议使用中性色，避免覆盖重点类别。
- Category Number Color（类别 数字颜色）
  类型：颜色文本；默认："&9"；说明：用于 ASCII 数字，建议与字母颜色区分，方便观察数值片段。
- Category Other Color（类别 其他颜色）
  类型：颜色文本；默认："&13"；说明：用于未命中类别字节与 Unicode 回退显示色，建议保留明显区分度。
- Category Punct Unicode Color (Strict)（类别 Unicode 严格标点颜色）
  类型：颜色文本；默认："255;80;80"；说明：用于严格判定为 Unicode 标点的字符，适合定位全角标点与特殊符号。
- Category Punct Unicode Color（类别 Unicode 宽松标点颜色）
  类型：颜色文本；默认："72;118;255"；说明：用于宽松规则下的 Unicode 标点，便于区分 strict 与 non-strict 结果。
- Category 2-Byte Unicode Color（类别 2 字节 Unicode 颜色）
  类型：颜色文本；默认："255;110;180"；说明：用于 UTF-8 双字节字符，常见于拉丁扩展字符。
- Category 3-Byte Unicode Color（类别 3 字节 Unicode 颜色）
  类型：颜色文本；默认："255;110;180"；说明：用于 UTF-8 三字节字符，常见于中文等 CJK 字符。
- Category 4-Byte Unicode Color（类别 4 字节 Unicode 颜色）
  类型：颜色文本；默认："255;110;180"；说明：用于 UTF-8 四字节字符，常见于 Emoji 或增补平面字符。
- Step Color Start（步长 颜色起点）
  类型：颜色文本；默认："30;30;30"；说明：Step 模式下的渐变起点，建议设置为较暗色以拉开字节值梯度。
- Step Color End（步长 颜色终点）
  类型：颜色文本；默认："255;255;255"；说明：Step 模式下的渐变终点，建议设置为亮色便于观察高字节值区域。

## 历史更新
- 9. 新增模块：Hex Viewer（需命令调用）。
- 35. 增强类别配色并支持 Unicode 解析。
- 1. 修复数字左对齐问题。

## 备注
HexViewer 对“文本”与“二进制”使用的解析路径不同。查看字符串建议用 `/hexview`，查看文件结构建议用 `/hexviewfile`，查看进程内存建议用 `/hexviewproc`。

## 相关命令
- `/hexview [text...]`：查看文本（不带参数时读取剪贴板文本）。
- `/hexviewfile &lt;filepath...&gt;`：查看文件十六进制内容。
- `/hexviewproc <pid/hprocess/hwnd>`：导出并查看进程十六进制内容。
- `/hexviewer`：打开 HexViewer 相关配置列表。

## 相关模块
- [FileManager (文件管理器)](./FileManager.md)
- [Everything (Everything)](./Everything.md)
- [ProcessManager (进程管理器)](./ProcessManager.md)
- [NAMED_COLOR_BASE_LIST (命名颜色表)](./NAMED_COLOR_BASE_LIST.md)

## 相关资料
无