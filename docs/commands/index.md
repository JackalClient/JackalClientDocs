# 命令手册总览

> 本手册由 `test/COMMANDS.txt` 自动拆分生成，按章节收录全部命令。

<TkTitleTag text="章节导航" type="vp-info" /> <TkTitleTag text="普通版 / 专业版（Pro）" type="vp-success" />

- 👉 [命令目录页（全章节入口）](/commands-catalogue)

## 章节快速入口（按用途）

| 你的目标 | 先看章节 | 风险等级 | 适合人群 |
| :-- | :-- | :-- | :-- |
| 管理窗口、进程、权限、系统状态 | [系统命令](/commands/system-commands) | 中-高 | 进阶 |
| 复制/删除/移动/监控文件 | [文件命令](/commands/file-commands) | 低-中 | 新手/进阶 |
| 网络连接、代理、IP、端口相关 | [网络命令](/commands/network-commands) | 中 | 进阶 |
| B站账号/视频/评论/直播流程 | [B站命令](/commands/bili-commands) | 低-中 | 新手/内容创作 |
| 文本转换、提取、批处理 | [文本处理命令](/commands/text-processing-commands) | 低 | 新手 |

## 版本分级说明（普通版 / 专业版（Pro））

- <Badge type="tip" text="普通可用" /> 默认版本可直接使用。
- <Badge type="warning" text="专业版（Pro）" /> 需要专业版（Pro）或特定构建支持。
- <Badge type="danger" text="高风险" /> 涉及系统策略、权限、进程注入等，建议先阅读 [安全说明](/safety)。

::: details 为什么要做分级？
命令原始数据量大、历史跨度长。直接按字母或原文阅读，难以判断“我该先看哪段”。
分级能帮助你先做低风险任务，再逐步进入高阶能力，减少误操作。
:::

## 作者提示

这段话是 Wormwaker 亲自写的，一定要阅读：
1. 查询命令用法可以直接用 `/help <keyword>`，例如 `/help bili live` 如果你开了汉化且不想等待翻译时间就用`/helpraw`查看原文
2. 一定要学会用`Tab`获取补全信息，例如你要设置直播间标题，你可以`bil`<Tab> `li`<Tab> `sett`<Tab> `test`
3. 我加入了命令的自动高亮和提示信息，希望你能喜欢

## 章节入口

<div class="command-card-grid">
  <a href="/commands/system-commands" class="command-card">
    <div class="command-card-title">系统命令 <Badge type="warning" text="含专业版（Pro）" /></div>
    <div class="command-card-count">📎 共 322 组命令</div>
  </a>
  <a href="/commands/file-commands" class="command-card">
    <div class="command-card-title">文件命令 <Badge type="tip" text="新手友好" /></div>
    <div class="command-card-count">📎 共 32 组命令</div>
  </a>
  <a href="/commands/network-commands" class="command-card">
    <div class="command-card-title">网络命令 <Badge type="warning" text="进阶" /></div>
    <div class="command-card-count">📎 共 26 组命令</div>
  </a>
  <a href="/commands/bili-commands" class="command-card">
    <div class="command-card-title">B站命令 <Badge type="tip" text="内容创作" /></div>
    <div class="command-card-count">📎 共 62 组命令</div>
  </a>
  <a href="/commands/text-processing-commands" class="command-card">
    <div class="command-card-title">文本处理命令 <Badge type="tip" text="高频" /></div>
    <div class="command-card-count">📎 共 40 组命令</div>
  </a>
</div>
