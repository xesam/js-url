# js-url

```javascript
assert.deepEqual(url('https://www.chelaile.net.cn/ab/c/?name=xesam&age=18#t=123456?a[0]=100&a[1]=200&b='), {
    scheme: 'https',
    auth: undefined,
    host: 'www.chelaile.net.cn',
    port: undefined,
    path: '/ab/c/',
    query: 'name=xesam&age=18',
    hash: 't=123456?a[0]=100&a[1]=200&b='
}, 'error');
```