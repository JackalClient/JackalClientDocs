# Vignette

Vignette（晕影）在屏幕边缘叠加可配置的暗角效果。

- Width（宽度）：Static 模式下的晕影宽度。
- Opacity (0~1)（不透明度）：晕影透明度。
- Style（风格）：Circle（圆形）或 Rectangle（矩形）。
- Width Mode（宽度模式）：Static（静态）或 Dynamic（动态）。
- Min Width / Max Width（最小/最大宽度）：Dynamic 模式下的宽度范围。
- Period (ms)（周期）：Dynamic 模式下正弦变化周期。
- Color（颜色）：晕影颜色，默认 Black。

## 全屏窗口隐藏

- `Hide In Fullscreen Window`（全屏窗口时隐藏）：布尔，默认 `true`。
- 开启后，前台窗口为无边框全屏或独占全屏时自动隐藏显示；退出全屏或切换到普通窗口后恢复。普通带标题栏的最大化窗口不会触发，支持多显示器。
- 此选项只隐藏画面，不关闭模块或停止后台功能；HUD Editor 开启时保留显示，便于编辑布局。
