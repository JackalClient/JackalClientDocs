# 文件命令

> 本页由 `test/COMMANDS.txt` 自动拆分生成。

共 32 组命令。

## 枚举当前目录文件（`/ls`）

```bash
/ls
```

::: details 点击查看说明
枚举当前目录文件。
:::

## 同步解释执行一个客户端批处理文件(（`/interpret &lt;path...&gt;`）

```bash
/interpret <path...>
```

::: details 点击查看说明
同步解释执行一个客户端批处理文件(.jbat)或者宏文件(.jm)。
:::

## 异步解释执行一个客户端批处理文件(（`/perform &lt;path...&gt;`）

```bash
/perform <path...>
```

::: details 点击查看说明
异步解释执行一个客户端批处理文件(.jbat)或者宏文件(.jm)。
:::

## 输出当前工作目录（`/pwd`）

```bash
/pwd
```

::: details 点击查看说明
输出当前工作目录。
:::

## 切换当前工作目录（`/cd [path...]`）

```bash
/cd [path...]
/chdir [path...]
```

::: details 点击查看说明
切换当前工作目录。注意，不需要指定/d参数，如果有会自动去除。后面的路径可以不加双引号。如果要切换到上一个目录，可以使用 /chdir .. 命令。/chdir 命令成功执行后，会输出当前工作目录，而 /cd 不会。
:::

## 删除文件或目录（`/rm &lt;path...&gt;`）

```bash
/rm <path...>
/remove <path...>
/rmcom <path...>
/removecom <path...>
```

::: details 点击查看说明
删除文件或目录。后两个使用COM接口（支持撤销）。前两者如果目标为文件夹，则必须保证文件夹为空。
:::

## 十六进制查看指定文件（`/hexviewfile &lt;filepath...&gt;`）

```bash
/hexviewfile <filepath...>
```

::: details 点击查看说明
十六进制查看指定文件。
:::

## 十六进制查看进程并输出到文件（`/hexviewproc <pid/hprocess/hwnd>`）

```bash
/hexviewproc <pid/hprocess/hwnd>
```

::: details 点击查看说明
十六进制查看进程并输出到文件。
:::

## 清空客户端崩溃转储文件 (crashlog\*（`/cleardumps`）

```bash
/cleardumps
/clearcrashlogs
```

::: details 点击查看说明
清空客户端崩溃转储文件 (crashlog\*.dmp)
:::

## 根据文件内容辨别文件类型，较为基础，只能判断一小…（`/file &lt;path...&gt;`）

```bash
/file <path...>
```

::: details 点击查看说明
根据文件内容辨别文件类型，较为基础，只能判断一小部分类型。
:::

## 通过 Everything 软件搜索指定的文件（`/findfile &lt;keywords...&gt;`）

```bash
/findfile <keywords...>
/findfileb <keywords...>
```

::: details 点击查看说明
通过 Everything 软件搜索指定的文件。 /findfileb 命令只显示文件名， /findfile 显示文件名和绝对路径。
:::

## 切换 Everything 模块（`/everything`）

```bash
/everything
```

::: details 点击查看说明
切换 Everything 模块。
:::

## 查看 Everything 状态（进程、版本、请…（`/everything status`）

```bash
/everything status
```

::: details 点击查看说明
【PRO】查看 Everything 状态（进程、版本、请求参数等）。
:::

## 启动 Everything（`/everything start`）

```bash
/everything start
```

::: details 点击查看说明
【PRO】启动 Everything.exe 并初始化接口。
:::

## 关闭 Everything 并清理接口（`/everything exit`）

```bash
/everything exit
```

::: details 点击查看说明
【PRO】关闭 Everything 并清理接口。
:::

## 通过 findfile 搜索指定文件（`/everything search &lt;keywords...&gt;`）

```bash
/everything search <keywords...>
```

::: details 点击查看说明
【PRO】通过 /findfile 搜索指定文件。
:::

## 重置 Everything 搜索状态（`/everything reset`）

```bash
/everything reset
```

::: details 点击查看说明
【PRO】重置 Everything 搜索状态。
:::

## 请求 Everything 重新建立索引数据库（`/everything rebuild`）

```bash
/everything rebuild
```

::: details 点击查看说明
【PRO】请求 Everything 重新建立索引数据库。
:::

## 请求 Everything 更新文件夹索引（`/everything update`）

```bash
/everything update
```

::: details 点击查看说明
【PRO】请求 Everything 更新文件夹索引。
:::

## 保存 Everything 数据库（`/everything savedb`）

```bash
/everything savedb
```

::: details 点击查看说明
【PRO】保存 Everything 数据库。
:::

## 保存 Everything 运行历史（`/everything savehistory`）

```bash
/everything savehistory
```

::: details 点击查看说明
【PRO】保存 Everything 运行历史。
:::

## 清空 Everything 运行历史（`/everything clearhistory`）

```bash
/everything clearhistory
```

::: details 点击查看说明
【PRO】清空 Everything 运行历史。
:::

## 查看或设置匹配路径（Match Path）（`/everything matchpath [on/off]`）

```bash
/everything matchpath [on/off]
```

::: details 点击查看说明
【PRO】查看或设置匹配路径（Match Path）。
:::

## 查看或设置大小写匹配（Match Case）（`/everything matchcase [on/off]`）

```bash
/everything matchcase [on/off]
```

::: details 点击查看说明
【PRO】查看或设置大小写匹配（Match Case）。
:::

## 查看或设置全词匹配（Whole Word）（`/everything wholeword [on/off]`）

```bash
/everything wholeword [on/off]
```

::: details 点击查看说明
【PRO】查看或设置全词匹配（Whole Word）。
:::

## 查看或设置正则匹配（Regex）（`/everything regex [on/off]`）

```bash
/everything regex [on/off]
```

::: details 点击查看说明
【PRO】查看或设置正则匹配（Regex）。
:::

## 查看或设置最大返回数量（`/everything max [number]`）

```bash
/everything max [number]
```

::: details 点击查看说明
【PRO】查看或设置最大返回数量。
:::

## 查看或设置结果偏移（`/everything offset [number]`）

```bash
/everything offset [number]
```

::: details 点击查看说明
【PRO】查看或设置结果偏移。
:::

## 查看或设置排序方式（`/everything sort [type]`）

```bash
/everything sort [type]
```

::: details 点击查看说明
【PRO】查看或设置排序方式。示例：name-asc、name-desc、size-asc、size-desc。
:::

## 查看或设置请求字段（`/everything request [default/all/flags...]`）

```bash
/everything request [default/all/flags...]
```

::: details 点击查看说明
【PRO】查看或设置请求字段。可选：name path full ext size created modified accessed attributes filelist runcount rundate recent hname hpath hfull
:::

## 加载指定位置的DLL（`/load &lt;dllpath...&gt;`）

```bash
/load <dllpath...>
```

::: details 点击查看说明
加载指定位置的DLL。
:::

## 卸载已加载的DLL（`/unload &lt;dllname&gt;`）

```bash
/unload <dllname>
```

::: details 点击查看说明
卸载已加载的DLL。
:::
