const assert = require('assert');
const url = require('..').create(function (data) {
    if (data.scheme) {
        data.scheme = data.scheme.toUpperCase();
    }
    return data;
});

assert.deepEqual(url(null), {}, 'error');
assert.deepEqual(url(' '), {
    scheme: undefined,
    auth: undefined,
    host: undefined,
    port: undefined,
    path: undefined,
    query: undefined,
    hash: undefined
}, 'error');

assert.deepEqual(url('https://www.chelaile.net.cn'), {
    scheme: 'HTTPS',
    auth: undefined,
    host: 'www.chelaile.net.cn',
    port: undefined,
    path: undefined,
    query: undefined,
    hash: undefined
}, 'error');

assert.deepEqual(url('https://www.chelaile.net.cn:80'), {
    scheme: 'HTTPS',
    auth: undefined,
    host: 'www.chelaile.net.cn',
    port: '80',
    path: undefined,
    query: undefined,
    hash: undefined
}, 'error');

assert.deepEqual(url('https://admin:root@www.chelaile.net.cn:80'), {
    scheme: 'HTTPS',
    auth: 'admin:root',
    host: 'www.chelaile.net.cn',
    port: '80',
    path: undefined,
    query: undefined,
    hash: undefined
}, 'error');

assert.deepEqual(url('https://admin:root@www.chelaile.net.cn:80?name=xesam'), {
    scheme: 'HTTPS',
    auth: 'admin:root',
    host: 'www.chelaile.net.cn',
    port: '80',
    path: undefined,
    query: 'name=xesam',
    hash: undefined
}, 'error');

assert.deepEqual(url('https://admin:root@www.chelaile.net.cn:80?name=xesam?age=18'), {
    scheme: 'HTTPS',
    auth: 'admin:root',
    host: 'www.chelaile.net.cn',
    port: '80',
    path: undefined,
    query: 'name=xesam?age=18',
    hash: undefined
}, 'error');

assert.deepEqual(url('https://admin:root@www.chelaile.net.cn:80/'), {
    scheme: 'HTTPS',
    auth: 'admin:root',
    host: 'www.chelaile.net.cn',
    port: '80',
    path: '/',
    query: undefined,
    hash: undefined
}, 'error');

assert.deepEqual(url('https://admin:root@www.chelaile.net.cn:80/?name=xesam'), {
    scheme: 'HTTPS',
    auth: 'admin:root',
    host: 'www.chelaile.net.cn',
    port: '80',
    path: '/',
    query: 'name=xesam',
    hash: undefined
}, 'error');

assert.deepEqual(url('https://admin:root@www.chelaile.net.cn:80/abc/def'), {
    scheme: 'HTTPS',
    auth: 'admin:root',
    host: 'www.chelaile.net.cn',
    port: '80',
    path: '/abc/def',
    query: undefined,
    hash: undefined
}, 'error');

assert.deepEqual(url('https://admin:root@www.chelaile.net.cn:80/abc/def?name=xesam'), {
    scheme: 'HTTPS',
    auth: 'admin:root',
    host: 'www.chelaile.net.cn',
    port: '80',
    path: '/abc/def',
    query: 'name=xesam',
    hash: undefined
}, 'error');

assert.deepEqual(url('https://admin:root@www.chelaile.net.cn:80/abc/def?name=xesam#fragment?a=b'), {
    scheme: 'HTTPS',
    auth: 'admin:root',
    host: 'www.chelaile.net.cn',
    port: '80',
    path: '/abc/def',
    query: 'name=xesam',
    hash: 'fragment?a=b'
}, 'error');

assert.deepEqual(url('https://admin:root@www.chelaile.net.cn:80/abc/def?name=xesam#fragment?a=b#c=d'), {
    scheme: 'HTTPS',
    auth: 'admin:root',
    host: 'www.chelaile.net.cn',
    port: '80',
    path: '/abc/def',
    query: 'name=xesam',
    hash: 'fragment?a=b#c=d'
}, 'error');

assert.deepEqual(url('https://www.chelaile.net.cn:8080/ab/c/?name=xesam&age=18#t=123456?a[0]=100&a[1]=200&b='), {
    scheme: 'HTTPS',
    auth: undefined,
    host: 'www.chelaile.net.cn',
    port: '8080',
    path: '/ab/c/',
    query: 'name=xesam&age=18',
    hash: 't=123456?a[0]=100&a[1]=200&b='
}, 'error');


assert.deepEqual(url('https://www.chelaile.net.cn/ab/c/?name=xesam&age=18#t=123456?a[0]=100&a[1]=200&b='), {
    scheme: 'HTTPS',
    auth: undefined,
    host: 'www.chelaile.net.cn',
    port: undefined,
    path: '/ab/c/',
    query: 'name=xesam&age=18',
    hash: 't=123456?a[0]=100&a[1]=200&b='
}, 'error');

assert.deepEqual(url('https://www.chelaile.net.cn?name=xesam&age=18#t=123456?a[0]=100&a[1]=200&b='), {
    scheme: 'HTTPS',
    auth: undefined,
    host: 'www.chelaile.net.cn',
    port: undefined,
    path: undefined,
    query: 'name=xesam&age=18',
    hash: 't=123456?a[0]=100&a[1]=200&b='
}, 'error');

assert.deepEqual(url('https://www.chelaile.net.cn/#t=123456?a[0]=100&a[1]=200&b='), {
    scheme: 'HTTPS',
    auth: undefined,
    host: 'www.chelaile.net.cn',
    port: undefined,
    path: '/',
    query: undefined,
    hash: 't=123456?a[0]=100&a[1]=200&b='
}, 'error');

assert.deepEqual(url('https://www.chelaile.net.cn#t=123456?a[0]=100&a[1]=200&b='), {
    scheme: 'HTTPS',
    auth: undefined,
    host: 'www.chelaile.net.cn',
    port: undefined,
    path: undefined,
    query: undefined,
    hash: 't=123456?a[0]=100&a[1]=200&b='
}, 'error');

assert.deepEqual(url('/abc#t=123456?a[0]=100&a[1]=200&b='), {
    scheme: undefined,
    auth: undefined,
    host: undefined,
    port: undefined,
    path: '/abc',
    query: undefined,
    hash: 't=123456?a[0]=100&a[1]=200&b='
}, 'error');

assert.deepEqual(url('/abc?name=xesam#t=123456?a[0]=100&a[1]=200&b='), {
    scheme: undefined,
    auth: undefined,
    host: undefined,
    port: undefined,
    path: '/abc',
    query: 'name=xesam',
    hash: 't=123456?a[0]=100&a[1]=200&b='
}, 'error');

assert.deepEqual(url('/abc?'), {
    scheme: undefined,
    auth: undefined,
    host: undefined,
    port: undefined,
    path: '/abc',
    query: '',
    hash: undefined
}, 'error');
