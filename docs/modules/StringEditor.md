# StringEditor

字符串编辑器，分类：Misc，英文模块名为 `String Editor`，专业版可用。

开启模块或执行 `/str ui` 进入交互式编辑器，初始文本来自字符串类型的 `it`，否则读取剪贴板。支持撤销、重做、剪贴板、文件保存和多种文本变换。

分词菜单使用本地 Jieba，词典和模型随客户端放在 `assets/jieba`，无需联网。提供四种输出：以 ` / ` 连接、每词一行、JSON 字符串列表、空格连接，与 `/str transform cut_words` 及 `cut_word_to_lines`、`cut_word_to_list`、`cut_word_to_spaces` 共用入口。

旧 B站分词菜单已合并到 Jieba；命令 `cut_words_bili` 和别名 `cut_bili` 保留兼容，同样使用本地分词。其他在线文本转换仍可能需要联网。

## 历史更新

- v1.2.0：所有分词入口统一使用 Jieba 本地分词。
