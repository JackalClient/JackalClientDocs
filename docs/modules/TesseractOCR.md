# TesseractOCR
TesseractOCR
分类：Misc
描述：Tesseract 文字识别设置。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
TesseractOCR（TesseractOCR）用于Tesseract 文字识别设置。
初次使用可优先调整：Executable Path、Language。

## 配置项
- Executable Path（可执行文件路径）
 类型：文本；默认：""
 说明：用于指定文件/目录路径。建议使用稳定的绝对路径并确认权限可访问，避免因路径变化导致功能失效。
- Language（语言）
 类型：文本；默认："chi_sim"
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
## 历史更新
- 37. 给 TesseractOCR 识别函数添加了自动扫描路径（在Program Files /Program Files (x86)中自动查找）
- 30. 添加模块：TesseractOCR，文字识别设定。你需要手动下载好它然后指定可执行程序的路径。

## 备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

## 相关命令
无

## 相关模块
- [AutoTranslate (自动翻译)](./AutoTranslate.md)
- [BetterLyrics (更好的歌词)](./BetterLyrics.md)
- [Screenshot (截图工具)](./Screenshot.md)

## 相关资料
无
