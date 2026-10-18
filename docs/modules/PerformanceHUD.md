# Performance HUD
性能 HUD
分类：Render

## 介绍
Performance HUD 用于显示客户端与系统的性能信息，可通过 HUD Editor 调整布局。

## 菜单与编辑器
- Hide When Menu On（菜单打开时不显示）：布尔，默认 true。
- 普通情况下，菜单开启且此选项为 true 时隐藏性能 HUD。
- HUD Editor 开启时优先保留显示，不受 Hide When Menu On 影响，便于查看和拖动位置；退出编辑器后恢复菜单隐藏行为。
- 仍需开启 Performance HUD 模块；这一例外不会自动启用已关闭的模块。

## 全屏窗口隐藏

- `Hide In Fullscreen Window`（全屏窗口时隐藏）：布尔，默认 `false`。
- 开启后，前台窗口为无边框全屏或独占全屏时自动隐藏显示；退出全屏或切换到普通窗口后恢复。普通带标题栏的最大化窗口不会触发，支持多显示器。
- 此选项只隐藏画面，不关闭模块或停止后台功能；HUD Editor 开启时保留显示，便于编辑布局。
