# Bing Image API

一个Bing每日壁纸的API系统

---

开源代码：<https://github.com/AH-dark/bing-image-api>

## 每日图片

- API地址：`https://bing-image-api.vercel.app/api/new`
- CDN优化：`https://bing.ahdark.com/api/new`

会直接返回当天的原壁纸图片

---

## CDN

你可以使用AHdark部署的带有CDN的函数：
[bing.ahdark.com](https://bing.ahdark.com)

此站点使用腾讯云CDN、CloudFront CDN进行边缘网络加速，给予用户更好的体验。

---

## Config

由于中国网络的特殊性，你可以更改函数调用的Endpoint。

只需要设置环境变量`ENDPOINT`，例如`cn.bing.com`，默认为`www.bing.com`。

获取的图片地址、Redirect地址也会因此而改变。
