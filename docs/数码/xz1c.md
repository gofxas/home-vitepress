Sony xz1c 优化一篇通  

酷安已有很多大佬写过关于 xz1c 的优化，大多比较分散
在倒腾 xz1c 的时候花费了大量的时间找资料，下软件，加群，看视频，翻动态
我希望下一个购买 xz1c 的你能够花最少的时间就能开始感受 xz1c 的美好，便有了这篇文章

购买前你需要知道：

> SO-02k 日版无法解锁 BL（除非使用 qunlocktool 付费 ¥200）  
> 鱼塘 300 以下屏幕普遍白色压痕  
> 进入工程模式 _#_#7378423#_#_ （可看气密性，电池情况）  
> 需要手动添加 APN 才可以上网  
> 想玩第三方固件别买日版，且 xda 上 sony 的三方固件开发者也很少  
> 待续（看评论补充）

#### 食用方式

用电信卡：0-6 必读

只做优化：7-10 捡有用的看

那么我们开始---------------------------------------------------

#### 0. 前期准备

0.1 下载/安装 「Sony_Mobile_Software_Update_Drivers_x64_Setup.msi」

> 0.1.1 [下载地址](https://pan.baidu.com/s/1Olsbug3qZ9B6JhyeOmfRIQ?pwd=8h68)

0.2 下载/解压 「日版 xz1c-so2k 刷电信-风骚哥数码.zip」（包含修改好的 8.0/9.0 rom/获取临时 Magrisk 工具）

> 0.2.1 [作者地址](https://pan.baidu.com/s/1cO3DzuRCP9Fg22bzhKghfA?pwd=x1e0)  
> 0.2.2 [转存地址](https://pan.baidu.com/s/1GyMonOdaCN9Jqntp-mMYLg?pwd=3gw6)

0.3 备份 xz1c 内属于你重要的资料  
0.4 **退出谷歌账号（切记！）**  
0.5 删除锁屏密码

#### 1. 进入「绿灯模式」

<div align=center>
<img src="https://raw.githubusercontent.com/opsnite/image-warehouse/main/img/1.%20%E8%BF%9B%E5%85%A5%E3%80%8C%E7%BB%BF%E7%81%AF%E6%A8%A1%E5%BC%8F%E3%80%8D.gif" width="200"></div>

1.1 关机  
1.2 按住「音量键下」后将「连接电脑的数据线」插入手机几秒后绿灯亮起

#### 2. 8.0 刷机

预计：3 分 50 秒（该操作将清空所有数据）

<div align=center>
<img src="https://github.com/opsnite/image-warehouse/raw/main/img/2.%208.0%E5%88%B7%E6%9C%BA%EF%BC%88%E8%AF%A5%E6%93%8D%E4%BD%9C%E5%B0%86%E6%B8%85%E7%A9%BA%E6%89%80%E6%9C%89%E6%95%B0%E6%8D%AE%EF%BC%89.gif" width="800"></div>

电脑操作  
2.1 进入 「/日版 xz1c 8.0 修改后 SO-02K_47.1.F.1.105_1311-8845_R14B」文件夹  
2.2 刷入 8.0 系统

> 2.2.1 打开 「newflasher.exe」  
> 2.2.2 在终端内输入「nnnn」 后 「回车」  
> 2.2.3 终端内显示「按任意键继续。。。」 刷机完成  
> 2.2.4 关闭 「newflasher.exe」

#### 3. 获得临时 Root 权限

手机操作  
3.1 拔掉数据线  
3.2 开机  
3.3 跳过开机引导（不插 SIM 卡不联网）

<div align=center>
<img src="https://raw.githubusercontent.com/opsnite/image-warehouse/main/img/3.3%20%E8%B7%B3%E8%BF%87%E5%BC%80%E6%9C%BA%E5%BC%95%E5%AF%BC%EF%BC%88%E4%B8%8D%E6%8F%92SIM%E5%8D%A1%E4%B8%8D%E8%81%94%E7%BD%91%EF%BC%89.gif"  width="200"> </div>

3.4 打开 USB 调试

<div align=center>
<img src="https://raw.githubusercontent.com/opsnite/image-warehouse/main/img/3.4%20%E6%89%93%E5%BC%80USB%E8%B0%83%E8%AF%95.gif"  width="200"></div>

> 3.4.1 进入「设定-系统-关于手机」点击「版本号」7 次 开启「开发者模式」  
> 3.4.2 进入「设定-系统-开发者选项」 打开「USB 调试」开关

3.5 允许 USB 调试

<div align=center>
<img src="https://raw.githubusercontent.com/opsnite/image-warehouse/main/img/3.5%20%E5%85%81%E8%AE%B8USB%E8%B0%83%E8%AF%95.gif"  width="200"></div>

> 3.5.1 将「连接电脑的数据线」插入手机  
> 3.5.2 等待片刻 弹窗提醒「允许 USB 调试吗？」

<div align=center>
<img src="https://raw.githubusercontent.com/opsnite/image-warehouse/main/img/3.5.2%20%E7%AD%89%E5%BE%85%E7%89%87%E5%88%BB%20%E5%BC%B9%E7%AA%97%E6%8F%90%E9%86%92%E3%80%8C%E5%85%81%E8%AE%B8USB%E8%B0%83%E8%AF%95%E5%90%97%EF%BC%9F%E3%80%8D.png"  width="200"></div>

> 3.5.3 勾选「一律允许使用这台计算机进行调试」 并 点击「确认」  
> 3.5.4 弹窗「允许访问？」 点击 「允许」

<div align=center>
<img src="https://raw.githubusercontent.com/opsnite/image-warehouse/main/img/3.5.4%20%E5%BC%B9%E7%AA%97%E3%80%8C%E5%85%81%E8%AE%B8%E8%AE%BF%E9%97%AE%EF%BC%9F%E3%80%8D%20%E7%82%B9%E5%87%BB%20%E3%80%8C%E5%85%81%E8%AE%B8%E3%80%8D.png"  width="200"></div>

电脑操作  
3.6 ADB 驱动安装确认

<div align=center>
<img src="https://github.com/opsnite/image-warehouse/raw/main/img/3.6%20ADB%E9%A9%B1%E5%8A%A8%E5%AE%89%E8%A3%85%E7%A1%AE%E8%AE%A4%20%20.png" width="800"></div>

> 3.6.1 进入 「/临时 Magisk_adb_shell」文件夹  
> 3.6.2 打开 「0ADB 驱动安装器.exe」  
> 3.6.3.1 设备前面显示「✅」则代表 ADB 驱动正确安装  
> 3.6.3.2 设备前面显示「❌」则代表 ADB 驱动未正确安装 点击右方「install」按钮 后 设备显示「✅」
> 3.6.4 关闭「0ADB 驱动安装器.exe」

3.7 安装 Magisk 至手机 预计：45 秒

<div align=center>
<img src="https://raw.githubusercontent.com/opsnite/image-warehouse/main/img/3.7%20%E5%AE%89%E8%A3%85Magisk%E8%87%B3%E6%89%8B%E6%9C%BA%20.gif"  width="800"></div>

> 3.7.1 进入 「/临时 Magisk_adb_shell」文件夹  
> 3.7.2 打开 「1 初始化文件.bat」此时只完成了 1 条指令  
> 手机操作  
> 3.7.3 弹窗提示「要开启 Play 保护机制吗？」

<div align=center>
<img src="https://raw.githubusercontent.com/opsnite/image-warehouse/main/img/3.7.3%20%E5%BC%B9%E7%AA%97%E6%8F%90%E7%A4%BA%E3%80%8C%E8%A6%81%E5%BC%80%E5%90%AFPlay%E4%BF%9D%E6%8A%A4%E6%9C%BA%E5%88%B6%E5%90%97%EF%BC%9F%E3%80%8D.png" width="200"></div>

> 3.7.4 选择 拒绝

电脑操作

> 3.7.5 在完成 3.7.4 操作后「1 初始化文件.bat」将继续进行执行指令  
> 3.7.6 打开「1 初始化文件.txt」复制全部内容  
> 3.7.7 关闭「1 初始化文件.txt」  
> 3.7.8 粘贴至 「1 初始化文件.bat」终端内 并「回车」  
> 3.7.9 关闭「1 初始化文件.bat」  
> 3.7.10 打开 「2 激活临时 Magisk.bat」  
> 3.7.11 等待终端显示「 go root，shell..」  
> 3.7.12 关闭「2 激活临时 Magisk.bat」

3.8 Magrisk 授予 Shell root 权限

<div align=center>
<img src="https://raw.githubusercontent.com/opsnite/image-warehouse/main/img/3.8%20Magrisk%E6%8E%88%E4%BA%88Shell%20root%E6%9D%83%E9%99%90.gif" width="800"></div>

> 3.8.1 进入 「/临时 Magisk_adb_shell」文件夹  
> 3.8.2 打开 「cmd.exe」  
> 3.8.3 输入「.\adb.exe shell」后「回车」  
> 3.8.4 输入「su」后「回车」（操作 3.8.4 前保证屏幕常亮）  
> 手机操作  
> 3.8.5 手机弹出「Shell-超级用户请求」

<div align=center>
<img src="https://raw.githubusercontent.com/opsnite/image-warehouse/main/img/3.8.5%20%E6%89%8B%E6%9C%BA%E5%BC%B9%E5%87%BA%E3%80%8CShell-%E8%B6%85%E7%BA%A7%E7%94%A8%E6%88%B7%E8%AF%B7%E6%B1%82%E3%80%8D.png" width="200"></div>

> 3.8.6 点击允许  
> 电脑操作  
> 3.8.7 输入「setprop persist.usb.eng 1」回车  
> 3.8.8 关闭「cmd.exe」

#### 4. 增加电信 votle 支持

4.1 安装高通驱动包

> 4.1.1 进入 「/日版 xz1c-so2k 刷电信-风骚哥数码」文件夹  
> 4.1.2 安装 「Qualcomm_USB_Driver_V1.0.exe」  
> 4.1.3 安装 「Qualcomm_Diag_QD_Loader_2016_driver.exe」

4.2 安装 QPST 调试程序

> 4.2.1 进入 「QPST.2.7.477」文件夹  
> 4.2.2 安装 「QPST.2.7.477.exe」

4.3 为 SO-02k 更新高通驱动 预计：1 分 32 秒

<div align=center>
<img src="https://raw.githubusercontent.com/opsnite/image-warehouse/main/img/4.3%20%E4%B8%BASO-02k%E6%9B%B4%E6%96%B0%E9%AB%98%E9%80%9A%E9%A9%B1%E5%8A%A8.gif" width="800"></div>

> 4.3.1 打开设备管理器  
> 4.3.2 点击「其他设备」可见 3 个「SO-02k」  
> 4.3.3 选中其中一个「SO-02K」右键点击「更新驱动程序（P）」  
> 4.3.5 点击 「浏览我的电脑以查找驱动程序（R）」  
> 4.3.6 点击 「让我从计算机上的可用驱动程序列表中选取（L）」  
> 4.3.7 点击 「下一页（N）」  
> 4.3.8 点击 「从磁盘安装（H）...」  
> （注：具体目录根据你下载的为止而定，下方目录将压缩包解压后作为根目录）  
> 4.3.9 点击「浏览（B）。..」 打开目录「/日版 xz1c-so2k 刷电信-风骚哥数码\Mi5_Qualcomm_Drivers\Mi5_Qualcomm_Drivers」  
> 4.3.10 选择 「qcmdm.inf」点击「打开（O）」  
> 4.3.11 点击「下一页（N）」  
> 4.3.12 点击「是（Y）」等待安装  
> 4.3.13 点击「关闭（C）」  
> 4.3.14 在其余两个「SO-02K」上重复 4.3.3 至 4.3.12  
> 4.3.15 完成后在调节器中可见三个「9018 设备」

4.4 使用 QPST 更改电信配置文件 预计：1 分 35 秒

<div align=center>
<img src="https://raw.githubusercontent.com/opsnite/image-warehouse/main/img/4.4%20%E4%BD%BF%E7%94%A8QPST%E6%9B%B4%E6%94%B9%E7%94%B5%E4%BF%A1%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6.gif" width="800"></div>

> 4.4.1 打开 「QPST configuration.exe」  
> 4.4.2 点击 「Ports」标签栏  
> 4.4.3 点击 「Add New Port...」  
> 4.4.4 点击 「第一条信息」后点击「OK」  
> 4.4.5 重复 4.4.4 至 4.4.5 两次 将 3 条都加入  
> 4.4.6 点击 「Start Clients」主菜单按钮  
> 4.4.7 点击 「EFS Explorer」  
> 4.4.8 选中 Phone 列内 名称为「MSM8998（0）」；ESN 列内 名称为「0」的设备  
> 4.4.9 点击 「OK」  
> 4.4.10 等待 加载完成  
> 4.4.11 点击左侧「policyman」选项  
> 4.4.12 将 「/日版 xz1c-so2k 刷电信-风骚哥数码」根目录下 「carrier_policy.xml」 拖入 「QPST configuration.exe」的「policyman」选项的右侧  
> 4.4.13 提示 「policyman/carrier_policy.xml alreadly exists. Do you want to replace it?」  
> 4.4.14 选择 「YES」  
> 4.4.15 关闭 「QPST configuration.exe」

#### 5. 9.0 刷机

（该操作将清空所有数据）预计：4 分 30 秒

<div align=center>
<img src="https://raw.githubusercontent.com/opsnite/image-warehouse/main/img/5.%209.0%E5%88%B7%E6%9C%BA%EF%BC%88%E8%AF%A5%E6%93%8D%E4%BD%9C%E5%B0%86%E6%B8%85%E7%A9%BA%E6%89%80%E6%9C%89%E6%95%B0%E6%8D%AE%EF%BC%89.gif" width="800"></div>

手机操作  
5.1 进入绿灯模式（参考：1. 进入「绿灯模式」)  
电脑操作  
5.2 进入 「/日版 xz1c 9.0 SO-02K_NTT DoCoMo JP_1311-8845_47.2.B.3.31_R11C」文件夹  
5.3 刷入 9.0 系统

> 5.3.1 打开 「newflasher.exe」软件  
> 5.3.2 在终端内输入「nnnn」 后 「回车」  
> 5.3.3 终端内显示如图 结束  
> 手机操作  
> 5.3.4 拔掉数据线  
> 5.3.5 开机

#### 6. 9.0 下打开 USB 调试

（参考：3.4 打开 USB 调试）

#### 7. 运营商 APN 设置

<div align=center>
<img src="https://raw.githubusercontent.com/opsnite/image-warehouse/main/img/7.%20%E8%BF%90%E8%90%A5%E5%95%86APN%E8%AE%BE%E7%BD%AE.gif" width="200"></div>

手机操作  
7.1 进入「设定-网络和互联网-移动网络-高级-接入点名称（APN）」  
7.2 点击右上角「+」  
7.3 中国电信设置

> 7.3.1 名称填写 「cnet」 点击「确认』  
> 7.3.2 APN 填写 「cnet」 点击「确认」

7.4 中国联通设置

> 7.4.1 名称填写 「3gnet」 点击「确认」  
> 7.4.2 中国联通 APN 填写 「3gnet」 点击「确认」

7.5 中国移动设置

> 7.5.1 名称填写 「cmnet」 点击「确认」  
> 7.5.2 APN 填写 「cmnet」 点击「确认」

7.6 其余内容不设置  
7.7 点击 返回  
7.8 弹窗提示「注意」 点击「确认」  
7.9 选中 刚添加的 「APN 配置」并处于选中状态

#### 8. 安装节点优能/应用权限管理软件

<div align=center>
<img src="https://raw.githubusercontent.com/opsnite/image-warehouse/main/img/8.%20%E5%AE%89%E8%A3%85%E8%8A%82%E7%82%B9%E4%BC%98%E8%83%BD:%E5%BA%94%E7%94%A8%E6%9D%83%E9%99%90%E7%AE%A1%E7%90%86%E8%BD%AF%E4%BB%B6.png" width="800"></div>

电脑操作（操作前确认已开启 USB 调试模式）  
8.1 下载/并解压 iO_Box_Xperia_byCZ_V1.4.0.zip（最新版 2.3.0 安装应用权限管理会导致崩溃）

> 8.1.1 作者地址：暂无  
> 8.1.2 [转存地址](https://pan.baidu.com/s/1t-MlZZSNfWuud3490dIfEQ?pwd=tfyy)

8.2 将「连接电脑的数据线」插入手机  
8.2 打开 「iO_Box_Xperia_byCZ_V1.4.0.exe」  
8.3 选择 「Android 版本」  
8.4 点击 「权限管理」  
8.5 点击 「节电优能」

#### 9. 手势操作

（选择任意一个）
9.1 晨钟助手安装导航首饰（药丸）（参考：8.1）  
9.2 PD1587 魔改版 lawnchair（药丸）

> 9.2.1 作者地址：暂无（作者群空间内有）  
> 9.2.2 [转存地址](https://pan.baidu.com/s/1wZ7147BBQWKhBro_MvykTQ?pwd=b6hx)

9.3 骚哥全面屏手势脚本（手势操作）

> 9.3.1 作者地址：暂无（作者群空间内有）  
> 9.3.2 [转存地址](https://pan.baidu.com/s/1mXN33r2Q4KVLy3CtGIVqmA?pwd=ma2q)

9.4 Play 版流体手势最新安装包

> 9.4.1 [作者链接](https://play.google.com/store/apps/details?id=com.fb.fluid&hl=en&gl=US)  
> 9.4.2 [转存地址](https://pan.baidu.com/s/1Lw9GoTjAfOk-2V5KiyECSQ?pwd=wtmh)

#### 10. 禁用/卸载无用软件

（选择任意一个）
10.1 可禁用列表分析（包含 9.0 所有包名）

> 10.1.1 [浏览地址](https://docs.qq.com/sheet/DS1lsRFFnbGplSml6)

10.2 风骚哥索尼全系列一步到极致精简（xz 系列通吃）

> 10.2.1 作者地址：暂无（作者群空间内有）  
> 10.2.2 [转存地址](https://pan.baidu.com/s/1cVjBluNjMlCy2pQNoocsTA?pwd=63ve)

10.3 Lstwwa adb 精简

> 10.3.1 [作者地址](https://lstwwa.top/51620c7a.html)  
> 10.3.2 [转存地址](https://pan.baidu.com/s/1KhEErdaqU-JXPuqjDYpQJg?pwd=jwzq)

10.4 祈芷洛合羽 adb 精简

> 10.4.1 [作者地址](https://www.bilibili.com/read/cv8250761)  
> 10.4.2 [转存地址](https://pan.baidu.com/s/1jE-au6wA749KUtyngaVr3Q?pwd=3vcn)

10.5 我的优化脚本（Mac 下可用，shell 指令）

> 10.5.1 [下载链接](https://pan.baidu.com/s/1Mdz44zkWjG32myiKidyzpA?pwd=ti5m)

#### 11. Sony-xz1c-资源集中包

[下载地址](https://pan.baidu.com/s/1zHKjQckE-4nIZHMFs83bjw?pwd=sp5z)

参考来源及感谢（排名不分先后，按文章相关内容排列）  
[风骚哥](http://www.coolapk.com/u/4145057) 提供修改好的 8.0/9.0 固件以及一键优化脚本，B 站有完整刷机视频  
[晨钟酱](https://www.jamcz.com/sonybox.html) 提供索尼优化工具  
[PD587](https://www.coolapk.com/feed/28651300?shareKey=ZTUzMzlhNjQ4NzFiNjIxOGE4YWU~&shareUid=627416&shareFrom=com.coolapk.market_12.0.2) 提供修改版 lawnchair 对 xz1c 的支持  
[Lstwwa](https://lstwwa.top/51620c7a.html) 提供 adb 精简脚本  
[祈芷洛合羽](https://www.bilibili.com/read/cv8250761) 提供 adb 精简思路
