# JackalClientPro 新版IRC和验证系统说明

>
> [语雀文档链接，已弃用](https://www.yuque.com/wormwaker/tkpgqw/pzx8qe24d90ildn4)
> 如果这个界面无法加载图片，请考虑移步 [Github 仓库](https://github.com/JackalClient/JackalClientDocs/edit/main/docs/pro-auth.md) 查看
>

三月加入了新的聊天室和验证系统。

## 验证界面

初次打开PRO专业版客户端<font style="color:#DF2A3F;">【注意需要网络】</font>，可以看到下面的界面：

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/54044512/1779383900411-da1f0759-2168-4825-aa1c-f05f44dba1c9.png)

当然如果你点击 `Use Console`使用控制台界面：

  
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/54044512/1774087271391-7aefded0-6b57-44ce-8e18-8ca3973b03a8.png)

你可以选择<font style="color:#D22D8D;"> [L] 登陆，  [R] 注册，   [O] 语言,    [Esc] 退出</font>

注册：

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/54044512/1779383970095-24a82cce-b7eb-4b5e-9863-0e4c19dcb395.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/54044512/1774087376997-47ee2124-c32e-4e91-b5fe-3a7f9c845880.png)

用上下箭头进行选择，按下Enter回车进入字段的编辑。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/54044512/1774087406588-73b0f9c0-5daf-48c3-a724-e267138f4bc3.png)

输入cancel可以取消。输入完毕回车即可。

输入你的用户名。用户名不得包含特殊字符，不得过长或过短。不得使用保留字。不得与他人重名。<font style="color:#DF2A3F;">注意用户名是唯一id，不等于用户昵称。用户昵称以后是可以随时调整的。</font>

输入你的邮箱地址。不得使用无效邮箱。不得与别的账号邮箱重复。

输入好邮箱后，你需要按下 <font style="color:#EDCE02;">[V] 键发送验证码</font>。查看你的邮箱，获取<font style="color:#EDCE02;">六位验证码</font>后填写进去。

输入你的密码。不得输入非ASCII字符。不要忘记你的密码。

按下 <font style="color:#8CCF17;">[R] 完成注册</font>，注册成功后会让你输入<font style="color:#01B2BC;">激活码</font>，粘贴进去回车即可。如果激活失败或者暂时不知道，下一次你可以在登陆界面登陆后输入激活码，无需重新注册。



如果按下L进入登陆：

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/54044512/1774087690609-f23c0462-65d2-464c-8050-1e93ad487c67.png)

输入你的用户名和密码即可。

如果密码忘了，你可以输入cancel取消输入，并在下面的界面按下 <font style="color:#D22D8D;">[F] 忘记密码，</font>

会在用户名对应的邮箱发送验证码，你输入验证码后，就会<font style="color:#1DC0C9;">重置</font>这个账号的密码为随机值，并发送至邮箱。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/54044512/1774087711457-d3e96876-39df-45ee-a00d-a9c8cbb54bc1.png)

然后按下 <font style="color:#8CCF17;">[L] 完成登陆</font>。 会输出登陆结果。

如果账号是普通账号，会要求你输入激活码。激活成功才能进入PRO客户端。

登陆成功会有一条登入消息被发送出去，别的IRC用户可以看见（例如：IRC Global> [PRO] jackaluser joined.）



_旧版IRC采用的是在线文本数据库，非常慢，且不安全，在v1.0.6版本已经被降级为IRC Legacy旧版聊天室模块，并从GUI中隐藏。你可以用/irclegacy命令继续使用。更老的客户端只能接收这个旧版聊天室的消息。_



新版IRC命令：

打开IRC模块，一般来说会自动登陆或者恢复登陆。如果输出No token或者 Login required，则是登陆凭证失效，需要你重新登陆。你可以重启客户端回到上面那个界面，或者用命令快捷操作：



## IRC 相关命令


`/irc login <username> [password=input...]`

账户为 username，密码为 password 发送登陆请求。**建议不填写密码，这样回车后会让你输入密码，此时就是用*遮挡了，防止泄露。**



`/irc resume`

在本地保存token的情况下，尝试恢复登陆。如果输出 No token，则需要你重新登陆。



`/irc register <username> <password> <email> <code> <card>  `
PRO版直接注册账户的命令。不推荐用这个命令。因为你都进入客户端了肯定已经注册成功了。



`/irc status`

查看现在的连接状态，以及一些用户信息。你也可以在 `Neverlose GUI` 左下角点击后的界面查看。



`/irc setname <nickname>`

设置你的昵称。每天只能设置一次。不得包含保留字。不得太长不得太短。



`/irc list`

查看聊天室在线的用户。你也可以在 `Neverlose GUI` 右上角的徽标上鼠标悬停查看。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/54044512/1774089509991-cd014102-508e-4940-917e-8583821da097.png)



`/irc email send register <email>`

向指定邮箱发送用于注册的验证码。



`/irc email send reset <email>  `
向指定邮箱发送用于重置密码的验证码。忘记密码时，第一步做的就是这个。第二步就是用下面这条命令。



`/irc password reset <user/email> <code>`

在不知晓密码而无法登陆时，使用 `code` 验证码作为凭证，重置指定用户的密码为随机密码并发送至邮箱。



`/irc password change <newPassword>`

需要你登陆成功，然后用这条命令进行设置新密码。



`/irc send <message...>`

发送聊天室消息。当然你可以用<font style="color:#117CEE;">#message</font>这样的形式直接快捷发送消息【需要开启IRC模块的 <font style="color:#117CEE;">Fast Send With # Prefix Command </font>配置项】，和很多挂端相似。聊天室消息会被所有开启IRC模块并登陆的用户接收。请不要发送违法信息。



`/irc announce list [page=1]`

查看聊天室公告。page为页数，默认第一页。



`/irc block <name>`

【PRO】屏蔽指定用户的消息。你可以在IRC模块的配置项中查看和修改已屏蔽用户列表。



`/irc unblock <name>`

取消屏蔽指定用户。



`/irc logout`

退出登陆。删除本地保存的凭证。



## 注意事项
<u>如果相关模块有问题，请第一时间和作者反馈。或者在JackalClient的Github仓库创建issue，或者直接在群里交流，或者在Bilibili联系我Wormwaker，或者向我的邮箱wormwake@qq.com发送邮件说明。</u>

<u></u>

1. 对于每一个PRO用户，我们没有添加任何IP地址限制，因为IP地址更改是常有的事情。但是，机器码相似度如果低于阈值，对于没有hwid-bypass权限的用户，将无法登陆客户端。且如果成功登陆，同一用户只能登陆一台机器的一个客户端。尽量不要在第二台机器上使用，如果违反多次，可能会被系统后台封禁。用户绑定的机器码通常会在首次注册登陆时自动绑定，无需手动绑定。

<u></u>

2. 加入验证系统并不意味着可以外传PRO版，你也不能做下面的任一行为：



· 用调试器调试客户端，修改客户端进程内存

· 用反编译软件逆向客户端

· 对客户端程序做静态补丁

· 向客户端注入DLL挂钩相关函数进行篡改

· 篡改网络协议的数据包

· 对服务端做出不友好或过量的请求

· 传播任何违法或者开发者认为不合理的信息



违反上述规则的用户，如果被成功检测，我们有权（并且很快）对其采取<font style="color:#DF2A3F;">惩罚</font>，包括且不限于<font style="color:#8CCF17;">禁言、封禁、移出群聊、禁止后续购买</font>等。



3. PRO 客户端虽然具有网络连接，但是也不具有任何后门，没有<font style="color:#ED740C;">远程执行（RAT，俗称老鼠）</font>的相关代码，请用户放心。
4. 免费版客户端也具有新版聊天室，但是用户需要用命令注册。且免费版用户可以使用访客登陆（但是没法发言）

## 后续规划
以后可能还会加入下面相关的内容：

用户经验和等级、小游戏、~~~~真实的云参系统等。







JackalClient 开发团队

