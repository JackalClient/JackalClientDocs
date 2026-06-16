# UIAccess
界面特权
分类：Combat
描述：重启客户端窃取UIAccess特权。（需要系统权限）

## 需求
- 安全级别：常规模块
- 权限需求：System
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

## 介绍
UIAccess（界面特权）
你需要在客户端拿到 `System 系统权限` 后才能使用这个模块。开启后会重启客户端，窃取`UIAccess` 进程令牌特权。此时客户端窗口具有最高层级的置顶级别 `UIAccess` (ZBID_UIACCESS)。

## 配置项
无（该模块在 default_settings.h 中未定义独立配置项）

## 历史更新
- 20. 【PRO】添加模块：SuperTopmost，动态设置客户端窗口为 UIAccess

## 备注


## 相关命令
- /uiaccess

## 相关模块
- [SuperTopmost (超级置顶)](./SuperTopmost.md)
- [BandSetter (Z序段设置)](./BandSetter.md)

## 相关资料
- [揭秘窗口置顶中的『等级制度』！窗口Z序和UIAccess又是什么?](https://www.bilibili.com/video/BV1HCwwegEVp)