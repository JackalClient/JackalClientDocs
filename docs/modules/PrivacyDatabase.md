# PrivacyDatabase
隐私数据库
[PRO]
分类：File
描述：一个有用的隐私数据库。（专业版）

## 需求
- 安全级别：常规模块
- 恶意标记：否
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定
- 版本属性：PRO 独有

## 介绍
`PrivacyDatabase` 是本地 SQLite 隐私数据管理模块，用于结构化保存人员信息（姓名、学号、电话、邮箱、证件号等）。
模块本体是配置入口，实际操作主要通过 `/pdb` 系列命令完成，适合需要离线、可检索的人员信息整理场景。
所有数据均由用户导入完成，和第三方无关，因此可以放心使用。

## 配置项
- Database Directory（数据库目录）
  类型：文本；默认："D:\\Program Files (x86)\\Jackal\\Privacy"；说明：数据库目录会用于创建和读取 `data_0.db`。建议放在稳定、可备份的位置，并保证当前账号有写入权限。

## 历史更新
- 4. 【PRO】添加模块：Privacy Database。

## 备注
首次使用建议先执行 `/pdb init` 初始化库结构；修改目录后也应重新确认数据库是否已创建，避免出现“命令可用但无数据文件”的情况。

## 相关命令

/privacydatabase &lt;args...&gt;
/privacydb &lt;args...&gt;
/pdb &lt;args...&gt;
隐私数据库命令。请使用 /help pdb 命令查看详细帮助。

/pdb init
初始化数据库。请在 Privacy Database 模块中设定目录路径。 

/pdb add [人名]
添加人员信息。输入命令后开启一个控制台的交互式菜单，如果指定人名参数，则菜单中人名就被填写；然后你可以选择菜单多种的某几个数据项进行填写。选择“保存”则录入退出。

/pdb delete/remove <人名>
移除人员信息。

/pdb list/enum/show/ls
输出所有人员信息。

/pdb list2d/table
以二维表形式输出所有人员信息。

/pdb query <人名>
查询人员的所有信息。每行都是键：值的格式。

/pdb search
根据指定信息查询人员信息。开启一个控制台交互式菜单，选择填写什么数据项筛选器，然后选择“开始筛选”筛选，然后输出结果。

/pdb set &lt;name&gt; &lt;key&gt; [value]
设置指定人员信息。value 为空时清空该项 key。

/pdb upsert &lt;name&gt; &lt;key&gt; [value]
设置指定人员信息。value 为空时清空该项 key。如果 name 不存在，则自动创建新纪录。

/pdb paste &lt;format&gt;
从剪贴板以指定格式导入数据。例如一百行学号空格姓名，输入/pdb paste student_id name即可批量录入。

/pdb exec &lt;command&gt;
执行数据库命令。

/pdb uninstall
移除数据库。

...
详情输入 `/help pdb` 查看帮助。

## 相关模块
- [PrivacySpy (隐私密探)](./PrivacySpy.md)

## 相关资料
无