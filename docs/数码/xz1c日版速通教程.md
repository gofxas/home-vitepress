# XZ1C Docomo 漏洞解锁方案速通版本

> 基于 @SOraWiND [原创教程](https://www.coolapk.com/feed/69454244?s=MWRkMmNhNGIxMDU4MDIxZzY5NWIyOGM4ega1571)，步骤简化

> 资源下载地址，需要的东西都准备了  链接：https://pan.quark.cn/s/844d886c5b49 提取码：NtTH  
## 📋 准备工作清单

在开始解锁前，请确保准备好以下文件和工具：

| 序号 | 文件/工具 | 说明 |
|------|-----------|------|
| 1 | **索尼驱动** | 手机连接电脑必备驱动 |
| 2 | **安卓8.0刷机包** | `xz1c_8.0_SO-02K_47.1.F.1.105_1311-8845_R14B` |
| 3 | **114版本Bootloader** | 用于漏洞利用的关键文件 |
| 4 | **BinderShell工具** | ADB调试和权限提升工具 |
| 5 | **漏洞XFL文件** | `xfl-o77.mbn`（包含解锁漏洞） |
| 6 | **XperableTool工具** | XZ1系列专用解锁工具 |

## 🚀 解锁详细步骤

### 步骤1：安装驱动
- 安装索尼手机驱动程序，确保电脑能正常识别设备

### 步骤2：进入刷机模式
1. **手机完全关机**
2. **按住音量减键**不放
3. **插入USB数据线**连接电脑
4. **等待设备识别**（指示灯显示绿色）
5. **松开音量减键**

### 步骤3：刷入安卓8.0系统
- 使用NewFlasher工具刷入准备好的8.0刷机包
- **等待刷机完成**，手机自动重启

### 步骤4：升级Bootloader
- 刷入114版本的Bootloader文件
- **再次等待刷机完成**

### 步骤5：开启开发者选项
1. 手机开机后进入**设置**
2. 找到**关于手机**，连续点击**版本号**7次开启开发者模式
3. 返回设置，进入**开发者选项**
4. 开启**USB调试**功能

### 步骤6：ADB调试操作

#### 6.1 检查设备连接
```bash
adb devices
```
> 💡 **注意**：手机上会弹出授权提示，请点击"允许"

#### 6.2 推送必要文件
将BinderShell文件夹中的两个关键文件推送到手机：
```bash
adb push bindershell /data/local/tmp/
adb push xfl-o77.mbn /data/local/tmp/
```

#### 6.3 进入Shell环境并提权
```bash
adb shell
```
进入后显示：

```
lilac:/ $  
```


再执行 `cd /data/local/tmp/` 进入到 tmp 目录，执行`ls`可以查看有 bindershell 和 xfl-o77.mbn 文件  
给 bindershell 添加可执行权限 `chmod 777 bindershell`   
运行 `./bindershell`   
此时跑完会出现如下，$符号变成了# 就成功   
```
lilac:/ #  
```

备份下ta分区 

```
dd if=/dev/block/bootdevice/by-name/TA of=/sdcard/TA-locked.img
```
恢复一下xfl分区 
```
dd if=xfl-o77.mbn of=/dev/block/bootdevice/by-name/xfl
```
此时 退出adb shell 环境，可以重新连接, 也可以执行 `exit` 。 
看到 `你的路径>` 的时候 ，说明退出成功。 此时把ta文件导出一下  
```
adb pull /sdcard/TA-locked.img 
```

7. 关机，按住音量加键，插入 USB 线，等待设备识别。此时显示蓝灯。松开音量加键。  
8. 进入 xperabletool 工具，选择 xz1c 系列，打开控制台。

运行命令,注意原版教程这里可能有错误，需要修改为 -4 ，-5是845系列手机的方案。
```
xperable -v -V -B -U -s 0xf49880 -4
```

如果出现 `LinuxLoader @ xxx patched successfully` ，说明漏洞成功，开始解锁。  

9. 解锁命令 
```
xperable.exe -v -V -c "oem unlock Y" -1 -c reboot -1    
```
执行完成找这句`Finished test1: res = 0` ，说明解锁成功。手机会显示解锁后的画面。   

10. 重新刷入 8.0刷机包，等待刷机完成。此时已经成功解锁，可以随便刷了。