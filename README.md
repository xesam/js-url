# js-url

a simple function to parse url by js.

```javascript
const comps = url('https://admin:root@www.chelaile.net.cn:80/abc/def?name=xesam#fragment?a=b#c=d')
console.log(comps);
```
output:
```json5
{
    scheme: 'https',
    auth: 'admin:root',
    host: 'www.chelaile.net.cn',
    port: '80',
    path: '/abc/def',
    query: 'name=xesam',
    hash: 'fragment?a=b#c=d'
}
```

```javascript
const parse = url.create(function (data) {
                      if (data.scheme) {
                          data.scheme = data.scheme.toUpperCase();
                      }
                      return data;
                  });
const comps = parse('https://admin:root@www.chelaile.net.cn:80/abc/def?name=xesam#fragment?a=b#c=d')
console.log(comps);
```
output:
```json5
{
    scheme: 'HTTPS',
    ...
}
```
## Changelog

### 20211015

1. 增加自定义处理函数。

### 20210901

1. 使用正则处理url