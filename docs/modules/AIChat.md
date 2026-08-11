# AI Chat
AI聊天
分类：Web
描述：在 Apps 中提供一个经典的 AI 聊天界面，左侧为会话列表，右侧为聊天区。

## 需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
AI Chat（AI聊天）用于在 Apps 中直接与 AI 对话。
左侧显示会话列表，右侧显示消息区和输入区。
聊天参数完全复用 AI Settings，支持 `Shift+Enter` 换行、`Enter` 发送、`Ctrl+N` 新建会话，以及会话删除确认。
输入框支持多行编辑、中文输入法、键盘选择、鼠标定位光标、鼠标框选和滚轮滚动。
每个会话会保留独立输入草稿，并缓存在 `output/Cache/aichat_drafts.json`。

## 配置项
- `Render Markdown`：控制 AI 消息是否使用 Markdown 着色显示，默认开启。
- `Scroll Sensitivity`：控制右侧滚轮灵敏度，默认偏高。

## 历史更新
无

## 备注
会话记录与 `/chathistory` 命令共享。

## 相关命令
无

## 相关模块
- [AISettings (AI设定)](./AISettings.md)

## 相关资料
无
