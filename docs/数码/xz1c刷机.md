# XZ1C刷入REC和linageOS20  


[rec和包在此处下载。](https://www.coolapk.com/feed/39860835?shareKey=YzNkZDEwMzRkY2E2NjU4YmQ4N2M~&shareUid=2386998&shareFrom=com.coolapk.market_13.4.1)

rec的刷入我采用线刷模式，使用adb与fastboot工具包，手机蓝灯模式连接电脑（按住音量上键不放，插电），听到登的一声则连接成功，之后在工作框  
输入命令 fastboot flash recovery 对应版本rec的存放目录  
（此处可直接将镜像文件拖入，会自动识别路径）  
注意，先刷老版rec不要直接刷入大佬包内rec，请看问题二  
此处附工具 0407  
因为文件都不大，所以使用百度网盘不会很久

[[链接]百度网盘 提取码0407](https://pan.baidu.com/s/1aOanbjEqI_K6W9zVe41Tyg)

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f91397fa00be46cba48ccc73085d10fb~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=720&h=404&s=19009&e=jpg&b=070707)

  
问题:为啥我日版机器刷了twrp3.6.2进不去啊  
  
解答:我也不知道为啥!但可以解决，由老哥原帖评论区老哥得出的解决方法[@王上都懂](https://www.coolapk.com/u/%E7%8E%8B%E4%B8%8A%E9%83%BD%E6%87%82) 。首先你要使用adb与fastboot工具刷入老版rec，在老版rec中清除数据，再在rec里刷入3.6版本!亲测有效!
若已经刷入3.6则采用线刷rec刷为老版即可。此处附老版rec链接   
 提取码0407  
 新版rec大佬那有

[[链接]百度网盘 请输入提取码](https://pan.baidu.com/s/1LMXavWFz0pRVWm9nkUMZeQ)

注意:不要用老版rec刷包  
  
问题:进rec怎么全是乱码啊😅为啥电脑上的文件不能复制进去手机啊! 
解决方法:清除data分区即可解决，若还是不能传输文件，重启进rec即可解决。  
  
到这里终于成功进入rec!  
可以开始刷包了!
接下来清除数据点击刷机包立即刷入即可。我是先五清，再连电脑传输刷机包!
  
注意:原帖要求一定要使用3.6.2版本rec刷入!，老版直刷会无限重启!  
我就是那个懒鬼老版直接刷   
  
然后，终于进入系统了啊  
  
问题四:为啥我在twrp里刷入面具会无限重启啊  
解决办法:因为大佬的包内置了kernelsu，通过rec刷入面具会导致冲突，只能返回上一步，重新刷机，你要root权限直接下载kernelsu就好
  
问题五:为啥进系统让我重启之后就不读卡了啊  
IMEI也没了  
解决办法:进入设置，关闭Xperia parts里的IMS features，手机自动重启之后即可解决，并没有掉基带!  

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/07f2713ef43d452b8568137dd30a58a3~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=720&h=960&s=86435&e=jpg&b=adb8c2)

到这里，终于可以体验lineage OS了。  
  
第三大步 系统美化  

其实本来就挺好看的了  
  
首先刷入zygisk-next和lsposed，然后下载lconify并激活模块，若提示未激活，说明你未在ksu里授权root给icoify或者没在lsp里激活模块。此处附zygisk-next

[[链接]文件](https://mypans.lanzoue.com/i4vE51csrw5g)

以及lsp资源贴，感谢老哥分享  

[[链接]@叮叮20喱米的评论...](https://www.coolapk.com/feed/33759485?shareKey=MTNjZDE0OWIwMjlmNjU4YmU0OWE~&shareFrom=com.coolapk.market_13.1.1)

注意:一般先刷入next再刷lsp!  
我是小白，不知道为啥  
  
现在你终于可以通过lconify来修改你的手机界面了  
来几张改好的图。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/57d80211601a46eea78641f18d75124c~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=720&h=1517&s=96554&e=jpg&b=b8bfcc)

此处附原帖修改教程

[[链接]@绪山真寻的图文...](https://www.coolapk.com/feed/51793162?shareKey=MTJmNzlkYjNkODc5NjU4YmU2Yzg~&shareUid=2386998&shareFrom=com.coolapk.market_13.4.1)

到这里，终于折腾完了  
本来想换个轻雨图标，但lineage OS桌面不支持换图标