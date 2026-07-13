# 客户端命令行参数

对于普通用户而言，不需要关心客户端的命令行参数。本文档仅面向高级用户，例如开发者和软件爱好者。

`COMMANDS.txt` 中已经有客户端的命令行参数帮助信息，里面的重点我会用中文标注：

```bash
JackalClient.exe [--help] [--open] [--system] [--ti] [--admin] [--enable:<id1;id2;...>] [--shell] [--diagnose] [--nostderr] [--nocolor] [--rtitle] [--protect] [--command command...] [--command-keep command...]


 --help
  -? : Show this help message and quit. 显示本帮助消息
  
 --shell
 -s : Run JackalClient in immersive shell mode. CLIENT WON'T CREATE THE WINDOW. IF YOU WANT TO SHOW THE HUD, DON'T ADD THIS PARAMETER. 
 表示在沉浸式命令行模式下运行 JackalClient。客户端不会创建主窗口，也就是说GUI、任何覆盖层和效果都不会显示，只能使用命令控制客户端。如果你想在启动后显示 HUD，不要添加此参数。

 --diagnose : Enable verbose startup/auth diagnostic logs. 1.1.3 开始新增的参数，表示会输出客户端一开始的详细日志，包括认证过程，可以用来调试。
  
 --open
  -o : Open JackalClient after startup. 启动时立即打开 GUI。
  
 --system
  -y : Run JackalClient as SYSTEM. 以系统权限启动。
  
 --ti
  -t : Run JackalClient as TrustedInstaller. 以 TrustedInstaller 权限启动。
  
 --admin
  -a : Run JackalClient as Administrator. 以管理员权限启动。
  
 --enable:<id1;id2;...>
  -e:<id1;id2;...> : Enable the specified modules at startup. 启动时启用指定的模块。
  
 --rtitle : Randomize the console window caption text. 启动时随机化控制台窗口标题。
 
 --protect : Enable the (self-)protection module. 启动时启用自保护模块。
 
 --command command... 
  -c command... : Execute the specified command after startup and quit. 启动后执行指定的命令并退出。
  
 --command-keep command... 
 -k command... : Execute the specified command after startup and do not quit. 启动后执行指定的命令，但不会退出。
 
 --nostderr
 -n : Disable the standard error output. 禁用 STDERR 标注错误输出流。
 
 --nocolor
 -b : Disable the colorful output. 禁用控制台彩色输出。
 

```

对于其他未提及的命令行参数，为客户端内部使用，用户不需要关心。

# 启动器命令行参数

Launcher.exe

以下命令行均为内部和实验性用途，不推荐使用。

```bash

Launcher.exe [--launcher-help] [--apply-package <zip_or_tgz_path>] [--target-dir <dir>] [--start-client] [--client-args <args...>] [--kill-client] [--wait-client-seconds <n>] [--keep-package]

 --launcher-help
 --help : Show launcher command line help and quit.

 --apply-package <zip_or_tgz_path>
 --install-package <zip_or_tgz_path> : Run headless install mode, extract the package to target directory and replace client files.

 --target-dir <dir> : Override install target directory (default: launcher directory).

 --start-client : Start Release\\JackalClient.exe after install.

 --client-args <args...> : Extra command line arguments for JackalClient.exe (used with --start-client).

 --kill-client : Force kill JackalClient.exe before install if it is running.

 --wait-client-seconds <n> : Wait up to n seconds for JackalClient.exe to exit before install (default: 20).

 --keep-package : Keep package file after successful install.
```
