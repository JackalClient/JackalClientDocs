# SuperTopmost
超级置顶
[PRO]
分类：Combat
描述：动态设置客户端窗口为超级置顶。（专业版）

## 需求
- 安全级别：不安全模块（谨慎使用）
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：PRO 独有

## 介绍
SuperTopmost（超级置顶）
会动态地将客户端窗口设置为`超级置顶`，使其在所有窗口之上显示，不受其他窗口遮挡，包括屏幕键盘、任务管理器等。

## 配置项
- Main Window（主窗口）
 类型：布尔；默认：true
 说明：是否设置主窗口的 `Z-Order Band`
- Console Window（控制台窗口）
 类型：布尔；默认：false
 说明：是否尝试设定控制台窗口的 `Z-Order Band`

## 历史更新
- 20. 【PRO】添加模块：SuperTopmost，动态设置客户端窗口为 `UIAccess`

## 备注
依赖 `WindowTopMost.dll` `IAMKeyHacker.dll`

## 相关命令
- /bands
- 了解所有Z序段的信息。

- /getband [hwnd]
- 获取窗口的Z序段。hwnd 不填，则为客户端主窗口，如果主窗口不存在则为控制台窗口

- /setband [hwnd] [zorderband]
- 【PRO】动态设置窗口的Z序段。hwnd不填，则为客户端主窗口，如果主窗口不存在则为控制台窗口，- zorderband不填则为 `ZBID_UIACCESS（值为2）`

## 相关模块
- [BandSetter (Z序段设置)](./BandSetter.md)
- [UIAccess (界面特权)](./UIAccess.md)
  
## 相关资料
- [揭秘窗口置顶中的『等级制度』！窗口Z序和UIAccess又是什么?](https://www.bilibili.com/video/BV1HCwwegEVp)