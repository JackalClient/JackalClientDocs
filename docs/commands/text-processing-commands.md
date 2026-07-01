# 文本处理命令

> 本页由 `test/COMMANDS.txt` 自动拆分生成。

共 41 组命令。

## 回显文本（`/echo &lt;string...&gt;`）

```bash
/echo <string...>
```

::: details 点击查看说明
回显文本。
:::

## Edge 翻译功能（`/translate [content...=clipboard]`）

```bash
/translate [content...=clipboard]
/translatecopy [content...=clipboard]
/translateto <lang> [content...=clipboard]
/translatetocopy <lang> [content...=clipboard]
/translateloop <times> [content...=clipboard]
/translateloopcopy <times> [content...=clipboard]
```

::: details 点击查看说明
Edge 翻译功能。translateto 可指定目标语言， translateloop 将会把文本按每一种语言轮流进行翻译，最后翻回原先的语言，共翻译 times 次。
如果结尾是copy，则会将结果复制到剪贴板。
:::

## opencc 离线翻译（`/translateoffline &lt;from&gt; &lt;to&gt; [content...=clipboard]`）

```bash
/translateoffline <from> <to> [content...=clipboard]
```

::: details 点击查看说明
opencc 离线翻译。
支持的语言缩写有：s简体中文，t繁体中文，hk香港，tw台湾繁体，jp日本汉字
:::

## 汉字转拼音（`/pinyin &lt;all|normal|notone|numtone|caps&gt; [content...=clipboard]`）

```bash
/pinyin <all|normal|notone|numtone|caps> [content...=clipboard]
```

::: details 点击查看说明
汉字转拼音。`normal` 输出正常音调，例如 `nǐ hǎo`；`notone` 输出无音调，例如 `ni hao`；`numtone` 输出数字音调，例如 `ni3 hao3`；`caps` 输出首字母，例如 `n h`；`all` 会依次输出上述四种形式，每种占一行。

如果不填写 content，则读取剪贴板文本；如果填写 `it` 且 `it` 当前是字符串变量，则使用代词变量 `it` 的文本。
:::

## 生草机翻译（`/memeizer [content...=clipboard]`）

```bash
/memeizer [content...=clipboard]
```

::: details 点击查看说明
生草机翻译。相关设置请到生草机模块进行配置。
:::

## 前者如果参数不填，则异步启动一个计算器（`/calc [expr...]`）

```bash
/calc [expr...]
/calculate <expr...>
/calccopy <expr...>
/getcalc <expr...>
```

::: details 点击查看说明
前者如果参数不填，则异步启动一个计算器。
否则，计算并输出数学表达式 expr 的值。支持四则运算、**乘方运算、三角函数、反三角函数、双曲三角函数、expr、sqrt、pow、random()、randint(a,b)、uniform(a,b)
部分函数会先由客户端预计算再交给 PowerShell：avg、median、mode、min、max、range、sum、prod、var、svar、std、sstd、pct、quartile、gmean、hmean、corr、cov、linreg、gcd、lcm、prime、factor、fact、perm、comb。
示例：std(1,2,3,4,5)。pct(p, values...) 中 p 支持 0..1 或 0..100；quartile(q, values...) 中 q 为 0..4；corr/cov/linreg 使用成对点参数，例如 corr(x1,y1,x2,y2,...)，linreg 返回斜率；prime(n) 返回 1/0，factor(n) 返回最小非 1 因子。
当输入内容无法匹配为已知命令时，会尝试作为数学表达式计算，例如直接输入 sin(1+1)。
注意这其实是调用 PowerShell 进行最终运算，并非所有计算都由 PowerShell 完成。

calculate 命令会输出转化后的PowerShell表达式并输出用时。
calccopy 命令如果成功，将会将结果写入剪贴板。
getcalc 命令如果成功，将会将结果以字符串形式写入it
:::

## 从文本数据库获取文本（`/textdatabase get &lt;key&gt;`）

```bash
/textdatabase get <key>
/textdatabase query <key>
/textdatabase copy <key>
/textdatabase obtain <key>
/tdb get <key>
/tdb query <key>
/tdb copy <key>
/tdb obtain <key>
/pastebin get <key>
/pastebin query <key>
/pastebin copy <key>
/pastebin obtain <key>
```

::: details 点击查看说明
从文本数据库获取文本。key 为秘钥。其中 copy 会把结果存入剪贴板，obtain 会把结果存入 it 代词中。/pastebin 会使用某种客户端的算法加密你的key以减少冲突的可能性。
:::

## 文本数据库中设置文本（`/textdatabase set &lt;key&gt;`）

```bash
/textdatabase set <key>
/textdatabase update <key>
/tdb set <key>
/tdb update <key>
/pastebin set <key>
/pastebin update <key>
```

::: details 点击查看说明
文本数据库中设置文本。key 为秘钥。/pastebin 会使用某种客户端的算法加密你的key以减少冲突的可能性。
:::

## 文本数据库中清空文本（`/textdatabase clear &lt;key&gt;`）

```bash
/textdatabase clear <key>
/textdatabase delete <key>
/tdb clear <key>
/tdb delete <key>
/pastebin clear <key>
/pastebin delete <key>
```

::: details 点击查看说明
文本数据库中清空文本。key 为秘钥。/pastebin 会使用某种客户端的算法加密你的key以减少冲突的可能性。
:::

## 根据内容生成二维码并打开（`/qrcode [content...]`）

```bash
/qrcode [content...]
```

::: details 点击查看说明
根据内容生成二维码并打开。如果不写参数，则读取剪贴板内容（必须是文本类型）。
:::

## 为 it 赋值字符串（`/string [content...]`）

```bash
/string [content...]
```

::: details 点击查看说明
为 it 赋值字符串。
:::

## 为 it 赋值字符串（`/string2 [content...]`）

```bash
/string2 [content...]
```

::: details 点击查看说明
为 it 赋值字符串。但会弹出一个高级输入框让你编辑。content 将作为输入框的初始内容。
:::

## 为 it 赋值字符串（`/string3 [content...]`）

```bash
/string3 [content...]
```

::: details 点击查看说明
为 it 赋值字符串。但会弹出一个聊天框让你编辑。content 将作为输入框的初始内容。
:::

## 复制字符串，但先弹出一个高级输入框让你编辑（`/copystr [content...]`）

```bash
/copystr [content...]
```

::: details 点击查看说明
复制字符串，但先弹出一个高级输入框让你编辑。content 作为输入框的初始内容。
:::

## 字符串功能（`/str &lt;params...&gt;`）

```bash
/str <params...>
```

::: details 点击查看说明
字符串功能。params 为相关参数。
:::

## 交互式字符串编辑器（`/str ui`）

```bash
/str ui
```

::: details 点击查看说明
【PRO】进入交互式字符串编辑器。支持剪贴板、it、转义、分词、替换、混淆、标点、字母、简繁、删除、过滤、拼接、Romaji、反转、字符切分、撤销/重做和加密保存编辑器状态。
:::

## 获取字符串长度与字符数（`/str size [content=it...]`）

```bash
/str size [content=it...]
```

::: details 点击查看说明
获取字符串长度与字符数。
:::

## 字符串转小写（`/str transform lower [content=it...]`）

```bash
/str transform lower [content=it...]
```

::: details 点击查看说明
字符串转小写。
:::

## 字符串转大写（`/str transform upper [content=it...]`）

```bash
/str transform upper [content=it...]
```

::: details 点击查看说明
字符串转大写。
:::

## 字符串反转（`/str transform reverse [content=it...]`）

```bash
/str transform reverse [content=it...]
```

::: details 点击查看说明
字符串反转。注意基本单位为字符而不是字节。
:::

## 交换字符串大小写（`/str transform swapcase [content=it...]`）

```bash
/str transform swapcase [content=it...]
```

::: details 点击查看说明
交换字符串大小写。
:::

## 混写字符串大小写（`/str transform annoycase [content=it...]`）

```bash
/str transform annoycase [content=it...]
```

::: details 点击查看说明
混写字符串大小写。
:::

## 移除子串（`/str transform remove &lt;substr&gt; [content=it...]`）

```bash
/str transform remove <substr> [content=it...]
```

::: details 点击查看说明
移除子串。
:::

## 替换字符串（`/str transform replace &lt;old&gt; &lt;new&gt; [content=it...]`）

```bash
/str transform replace <old> <new> [content=it...]
```

::: details 点击查看说明
替换字符串。
:::

## 分隔字符串（`/str transform split &lt;sep&gt; [content=it...]`）

```bash
/str transform split <sep> [content=it...]
```

::: details 点击查看说明
分隔字符串。
:::

## 在字符串每个字符间添加字符（`/str transform join &lt;sep&gt; [content=it...]`）

```bash
/str transform join <sep> [content=it...]
```

::: details 点击查看说明
在字符串每个字符间添加字符。
:::

## 删除字符串标点符号（`/str transform delpunct [content=it...]`）

```bash
/str transform delpunct [content=it...]
```

::: details 点击查看说明
删除字符串标点符号。
:::

## 根据字符串标点符号换行（`/str transform punctcutline [content=it...]`）

```bash
/str transform punctcutline [content=it...]
```

::: details 点击查看说明
根据字符串标点符号换行。
:::

## 将字符串的标点符号全部改为英文标点（`/str transform toengpunct [content=it...]`）

```bash
/str transform toengpunct [content=it...]
```

::: details 点击查看说明
将字符串的标点符号全部改为英文标点。
:::

## 将字符串的标点符号全部改为中文标点（`/str transform tochnpunct [content=it...]`）

```bash
/str transform tochnpunct [content=it...]
```

::: details 点击查看说明
将字符串的标点符号全部改为中文标点。
:::

## 使用 mode 模式混淆字符串（`/str transform obfuscate &lt;mode&gt; [content=it...]`）

```bash
/str transform obfuscate <mode> [content=it...]
```

::: details 点击查看说明
使用 mode 模式混淆字符串。
:::

## 添加双引号（`/str transform quote [content=it...]`）

```bash
/str transform quote [content=it...]
```

::: details 点击查看说明
添加双引号。
:::

## 移除首尾双引号（`/str transform unquote [content=it...]`）

```bash
/str transform unquote [content=it...]
```

::: details 点击查看说明
移除首尾双引号。
:::

## 转义字符串（`/str transform escape [content=it...]`）

```bash
/str transform escape [content=it...]
```

::: details 点击查看说明
转义字符串。例如将换行符替换为\n（写成这样）。
:::

## 反转义字符串（`/str transform unescape [content=it...]`）

```bash
/str transform unescape [content=it...]
```

::: details 点击查看说明
反转义字符串。
:::

## 转义字符串（`/str transform escapehtml [content=it...]`）

```bash
/str transform escapehtml [content=it...]
```

::: details 点击查看说明
转义字符串。但是是 HTML 转义规则。
:::

## 反转义字符串（`/str transform unescapehtml [content=it...]`）

```bash
/str transform unescapehtml [content=it...]
```

::: details 点击查看说明
反转义字符串。但是是 HTML 转义规则。
:::

## 提取文件路径扩展名（`/str transform extractext [content=it...]`）

```bash
/str transform extractext [content=it...]
```

::: details 点击查看说明
提取文件路径扩展名。
:::

## 去除文件路径扩展名（`/str transform delext [content=it...]`）

```bash
/str transform delext [content=it...]
```

::: details 点击查看说明
去除文件路径扩展名。
:::

## 对字符串进行屏蔽词过滤（`/str transform filter [content=it...]`）

```bash
/str transform filter [content=it...]
```

::: details 点击查看说明
对字符串进行屏蔽词过滤。
:::

## 中文分词（`/str transform cut [content=it...]`）

```bash
/str transform cut [content=it...]
```

::: details 点击查看说明
中文分词。使用在线API。
:::

## 中文分词（`/str transform cut_bili [content=it...]`）

```bash
/str transform cut_bili [content=it...]
```

::: details 点击查看说明
中文分词。使用B站搜索推荐词。
:::
