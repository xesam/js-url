const assert = require('assert');
const url = require('../src/url');

assert.deepEqual(url('https://www.chelaile.net.cn'), {
    scheme: 'https',
    auth: undefined,
    host: 'www.chelaile.net.cn',
    port: undefined,
    path: undefined,
    query: undefined,
    hash: undefined
}, 'error');

assert.deepEqual(url('https://www.chelaile.net.cn:80'), {
    scheme: 'https',
    auth: undefined,
    host: 'www.chelaile.net.cn',
    port: '80',
    path: undefined,
    query: undefined,
    hash: undefined
}, 'error');

assert.deepEqual(url('https://admin:root@www.chelaile.net.cn:80'), {
    scheme: 'https',
    auth: 'admin:root',
    host: 'www.chelaile.net.cn',
    port: '80',
    path: undefined,
    query: undefined,
    hash: undefined
}, 'error');

assert.deepEqual(url('https://admin:root@www.chelaile.net.cn:80/'), {
    scheme: 'https',
    auth: 'admin:root',
    host: 'www.chelaile.net.cn',
    port: '80',
    path: '/',
    query: undefined,
    hash: undefined
}, 'error');

assert.deepEqual(url('https://admin:root@www.chelaile.net.cn:80/abc/def'), {
    scheme: 'https',
    auth: 'admin:root',
    host: 'www.chelaile.net.cn',
    port: '80',
    path: '/abc/def',
    query: undefined,
    hash: undefined
}, 'error');

assert.deepEqual(url('https://admin:root@www.chelaile.net.cn:80/abc/def?name=xesam'), {
    scheme: 'https',
    auth: 'admin:root',
    host: 'www.chelaile.net.cn',
    port: '80',
    path: '/abc/def',
    query: 'name=xesam',
    hash: undefined
}, 'error');

assert.deepEqual(url('https://admin:root@www.chelaile.net.cn:80/abc/def?name=xesam#fragment?a=b'), {
    scheme: 'https',
    auth: 'admin:root',
    host: 'www.chelaile.net.cn',
    port: '80',
    path: '/abc/def',
    query: 'name=xesam',
    hash: 'fragment?a=b'
}, 'error');

assert.deepEqual(url('https://xpy:12345@www.chelaile.net.cn:8080/ab/c/?name=xesam&age=18#t=123456?a[0]=100&a[1]=200&b='), {
    scheme: 'https',
    auth: 'xpy:12345',
    host: 'www.chelaile.net.cn',
    port: '8080',
    path: '/ab/c/',
    query: 'name=xesam&age=18',
    hash: 't=123456?a[0]=100&a[1]=200&b='
}, 'error');

assert.deepEqual(url('https://www.chelaile.net.cn:8080/ab/c/?name=xesam&age=18#t=123456?a[0]=100&a[1]=200&b='), {
    scheme: 'https',
    auth: undefined,
    host: 'www.chelaile.net.cn',
    port: '8080',
    path: '/ab/c/',
    query: 'name=xesam&age=18',
    hash: 't=123456?a[0]=100&a[1]=200&b='
}, 'error');


assert.deepEqual(url('https://www.chelaile.net.cn/ab/c/?name=xesam&age=18#t=123456?a[0]=100&a[1]=200&b='), {
    scheme: 'https',
    auth: undefined,
    host: 'www.chelaile.net.cn',
    port: undefined,
    path: '/ab/c/',
    query: 'name=xesam&age=18',
    hash: 't=123456?a[0]=100&a[1]=200&b='
}, 'error');

assert.deepEqual(url('https://www.chelaile.net.cn?name=xesam&age=18#t=123456?a[0]=100&a[1]=200&b='), {
    scheme: 'https',
    auth: undefined,
    host: 'www.chelaile.net.cn',
    port: undefined,
    path: undefined,
    query: 'name=xesam&age=18',
    hash: 't=123456?a[0]=100&a[1]=200&b='
}, 'error');

assert.deepEqual(url('https://www.chelaile.net.cn/#t=123456?a[0]=100&a[1]=200&b='), {
    scheme: 'https',
    auth: undefined,
    host: 'www.chelaile.net.cn',
    port: undefined,
    path: '/',
    query: undefined,
    hash: 't=123456?a[0]=100&a[1]=200&b='
}, 'error');

assert.deepEqual(url('https://www.chelaile.net.cn#t=123456?a[0]=100&a[1]=200&b='), {
    scheme: 'https',
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

