# RepoWatcher
仓库监视
用于定期检查 GitHub 仓库状态变化，可监视 Stars、Forks、Issues、Subscribers、归档/禁用状态、更新时间以及 Release 下载量，并按配置方式发送通知。

## 常用配置

- `Repositories (Sep With Semicolon)`：仓库列表，使用英文分号分隔，支持 `owner/repo`、`github.com/owner/repo` 或完整 GitHub URL。
- `Notify Mode`：变化通知方式。
- `Update Cooldown (s)`：刷新间隔，实际请求间隔最低为 60 秒，避免过于频繁地访问 GitHub API。
- `Rate Limit Control`：速率限制保护，默认开启。
- `Rate Limit Pause Duration (min)`：触发 GitHub 风控或限流提示后的自动暂停时长，单位分钟。

## 速率限制保护

开启 `Rate Limit Control` 后，模块收到 GitHub API 的 403/429 限流响应，或响应内容提示 rate limit / secondary rate limit 时，会停止本轮仓库检查并进入暂停状态。若响应头提供 `retry-after` 或 `x-ratelimit-reset`，暂停时间会至少覆盖 GitHub 要求的等待时间；否则使用 `Rate Limit Pause Duration (min)`。触发暂停时客户端会弹出警告通知。API 请求冷却与限流暂停时间会写入 `Records.json`，客户端重启后仍会继续遵守剩余等待时间。
