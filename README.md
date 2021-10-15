# js-url

```javascript
assert.deepEqual(url('https://admin:root@www.chelaile.net.cn:80/abc/def?name=xesam#fragment?a=b#c=d'), {
    scheme: 'https',
    auth: 'admin:root',
    host: 'www.chelaile.net.cn',
    port: '80',
    path: '/abc/def',
    query: 'name=xesam',
    hash: 'fragment?a=b#c=d'
}, 'error');
```

## Changelog

### 20211015

1. 增加自定义处理函数。

### 20210901

1. 使用正则处理url