# Bing Image API

一个Bing每日壁纸的API系统

---

开源代码：<https://github.com/AH-dark/BingImageApi>

## 使用

### 每日图片

- API地址：`https://bing-image-api.vercel.app/api/new`
- CDN优化：`https://bing.ahdark.com/api/new`

会直接返回302请求到图片，实测可正常使用。 详见[www.alphapic.org.cn](https://www.alphapic.org.cn)壁纸

### 近期图片

- API地址：`https://bing-image-api.vercel.app/api/image`
- CDN优化：`https://bing.ahdark.com/api/image`

`GET`请求会直接返回302请求到图片，`POST`请求会输出bing获取的对应图片的json信息

可以通过Query参数进行不同查询

| **查询字符串** | **作用**          | **示例**        | **默认** |
|-----------|-----------------|---------------|--------|
| idx       | 返回图片的日期，在0-8范围内 | 0（今天） / 1（昨天） | 0      |

例如获取前一天的封面：`https://bing.ahdark.com/api/image?idx=1`

### 自定义图片

- API地址：https://bing-image-api.vercel.app/api/custom
- CDN优化：https://bing.ahdark.com/api/custom

| **查询字符串** | **作用**             | **示例**                            | **默认**   |
|-----------|--------------------|-----------------------------------|----------|
| method    | 返回值的方法，例如跳转、json   | json / plain / element / redirect | redirect |
| idx       | 返回图片的日期，在0-8范围内    | 0（今天） / 1（昨天）                     | 0        |
| key       | 返回json/element的key | image                             | url      |

你可以尝试访问一下

- [/api/custom?method=json](https://bing.ahdark.com/api/custom?method=json)
- [/api/custom?method=json&key=image](https://bing.ahdark.com/api/custom?method=json&key=image)
- [/api/custom?method=plain](https://bing.ahdark.com/api/custom?method=plain)
- [/api/custom?method=element&key=img](https://bing.ahdark.com/api/custom?method=element&key=img)

---

## CDN

你可以使用AHdark部署的带有CDN的函数：
[bing.ahdark.com](https://bing.ahdark.com)

此站点使用腾讯云CDN、CloudFront CDN进行边缘网络加速，给予用户更好的体验。

---

## Config

由于中国网络的特殊性，你可以更改函数调用的Endpoint。

只需要设置环境变量`endpoint`，例如`cn.bing.com`，默认为`www.bing.com`。

获取的图片地址、Redirect地址也会因此而改变。
