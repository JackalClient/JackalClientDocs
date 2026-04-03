Totem
不死图腾
分类：Render
描述：播放不死图腾的动画。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
Totem（不死图腾）用于播放不死图腾的动画。新版采用着色器绘制三维的不死图腾，旧版采用播放视频（兼容性不好）。

配置项

- Brightness (0~1)
 控制亮度。
 
- Roll
 控制图腾的翻滚值。
 
- Scale
 控制图腾的缩放。
 
- Speed
 控制动画速率。
 
- Thickness
 控制图腾厚度。
 
- Volume
 控制音效音量。
 
- Particle Count
 控制图腾爆出来的粒子的数量
 
- Particle Size
 控制粒子大小。
 
- Particle Speed
 控制粒子的速率
 
- Particle Gravity
 控制粒子的重力大小。
 
- Particle Opacity (0~1)
 控制粒子不透明度。
 
- Cooldown (ms)（冷却 (毫秒)）
 类型：数值；默认：5000L
 说明：用于控制检测/刷新/动画节奏。默认值 5000L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
 
 
**【注意：下面的配置项已在 v1.0.7 被废弃，属于旧版播放视频的配置项】 **


- Transparent Color Key (For Cutout)（透明颜色键（用于抠图））
 类型：文本；默认："16;16;16"
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
- Transparent Color Alpha（透明颜色不透明度）
 类型：数值；默认：0
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
- Chatter New Advancement（新进度弹幕）
 类型：枚举；默认："Only First Time"
 说明：用于选择结果反馈方式。默认值 Only First Time 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：Off（关闭）；Only First Time（只在第一次显示）；Always（总是）
历史更新
- 6. 稍微修改了一下不死图腾的触发动画视频。
- 45. 为 Totem 不死图腾模块添加冷却时间：Cooldown (ms)，防止刷屏导致卡死。

相关命令
无

相关模块
- [Arraylist (模块列表)](./Arraylist.md)
- [Ambience (环境气氛)](./Ambience.md)
- [AutoDanmaku (自动弹幕)](./AutoDanmaku.md)
- [AutoTitle (自动标题)](./AutoTitle.md)
- [AutoTotem (自动图腾)](./AutoTotem.md)
- [AudioVisualizer (音频可视化)](./AudioVisualizer.md)
- [LyricsPhysics (物理歌词)](./LyricsPhysics.md)
- [BetterLyrics (更好的歌词)](./BetterLyrics.md)

相关资料
无

