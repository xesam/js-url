# js-url

Parse url with RegExp.

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