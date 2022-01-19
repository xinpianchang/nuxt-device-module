# nuxt-device-module
device-module for nuxt


## 扩展增加如下

* isWeibo
* isWeixin
* isIosWeixin
* isAndroidWeixin
* isXpcApp
* isVmovierApp


## UA 

### 安卓 微信

```
Mozilla/5.0 (Linux; Android 9; PBEM00 Build/PKQ1.190519.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/78.0.3904.62 XWEB/2691 MMWEBSDK/200901 Mobile Safari/537.36 MMWEBID/4773 MicroMessenger/7.0.19.1760(0x27001335) Process/toolsmp WeChat/arm64 NetType/4G Language/zh_CN ABI/arm64
```

### iOS 微信

```
Mozilla/5.0 (iPhone; CPU iPhone OS............bile/14D27 MicroMessenger/7.0.8(0x17000820) NetType/3G Language/zh_CN
```

### 安卓 XpcApp

```
NewStudios/1.9.6 (com.xinpianchang.newstudios; build:841; Android 9)
```

### iOS XpcApp

```
Mozilla/5.0 (iPhone; CPU iPhone OS 15_0_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 NewStudios/1.9.1 (com.xinpianchang.newstudios; build:856; iOS 15.0.2)
```

## 依赖项

* defu

地址：https://github.com/unjs/defu

> Assign default properties, recursively. Lightweight and Fast!

目前线上是 `5.0.1`，暂时我们还是使用的 `3.2.2`
