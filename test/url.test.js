const assert = require('assert');
const url = require('..');

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

assert.deepEqual(url('https://xesam.github.io'), {
    scheme: 'https',
    auth: undefined,
    host: 'xesam.github.io',
    port: undefined,
    path: undefined,
    query: undefined,
    hash: undefined
}, 'error');

assert.deepEqual(url('https://xesam.github.io:443'), {
    scheme: 'https',
    auth: undefined,
    host: 'xesam.github.io',
    port: '443',
    path: undefined,
    query: undefined,
    hash: undefined
}, 'error');

assert.deepEqual(url('https://admin:root@xesam.github.io:80'), {
    scheme: 'https',
    auth: 'admin:root',
    host: 'xesam.github.io',
    port: '80',
    path: undefined,
    query: undefined,
    hash: undefined
}, 'error');

assert.deepEqual(url('https://admin:root@xesam.github.io:80?name=xesam'), {
    scheme: 'https',
    auth: 'admin:root',
    host: 'xesam.github.io',
    port: '80',
    path: undefined,
    query: 'name=xesam',
    hash: undefined
}, 'error');

assert.deepEqual(url('https://admin:root@xesam.github.io:80?name=xesam?age=18'), {
    scheme: 'https',
    auth: 'admin:root',
    host: 'xesam.github.io',
    port: '80',
    path: undefined,
    query: 'name=xesam?age=18',
    hash: undefined
}, 'error');

assert.deepEqual(url('https://admin:root@xesam.github.io:80/'), {
    scheme: 'https',
    auth: 'admin:root',
    host: 'xesam.github.io',
    port: '80',
    path: '/',
    query: undefined,
    hash: undefined
}, 'error');

assert.deepEqual(url('https://admin:root@xesam.github.io:80/?name=xesam'), {
    scheme: 'https',
    auth: 'admin:root',
    host: 'xesam.github.io',
    port: '80',
    path: '/',
    query: 'name=xesam',
    hash: undefined
}, 'error');

assert.deepEqual(url('https://admin:root@xesam.github.io:80/abc/def'), {
    scheme: 'https',
    auth: 'admin:root',
    host: 'xesam.github.io',
    port: '80',
    path: '/abc/def',
    query: undefined,
    hash: undefined
}, 'error');

assert.deepEqual(url('https://admin:root@xesam.github.io:80/abc/def?name=xesam'), {
    scheme: 'https',
    auth: 'admin:root',
    host: 'xesam.github.io',
    port: '80',
    path: '/abc/def',
    query: 'name=xesam',
    hash: undefined
}, 'error');

assert.deepEqual(url('https://admin:root@xesam.github.io:80/abc/def?name=xesam#fragment?a=b'), {
    scheme: 'https',
    auth: 'admin:root',
    host: 'xesam.github.io',
    port: '80',
    path: '/abc/def',
    query: 'name=xesam',
    hash: 'fragment?a=b'
}, 'error');

assert.deepEqual(url('https://admin:root@xesam.github.io:80/abc/def?name=xesam#fragment?a=b#c=d'), {
    scheme: 'https',
    auth: 'admin:root',
    host: 'xesam.github.io',
    port: '80',
    path: '/abc/def',
    query: 'name=xesam',
    hash: 'fragment?a=b#c=d'
}, 'error');

assert.deepEqual(url('https://xesam.github.io:8080/ab/c/?name=xesam&age=18#t=123456?a[0]=100&a[1]=200&b='), {
    scheme: 'https',
    auth: undefined,
    host: 'xesam.github.io',
    port: '8080',
    path: '/ab/c/',
    query: 'name=xesam&age=18',
    hash: 't=123456?a[0]=100&a[1]=200&b='
}, 'error');


assert.deepEqual(url('https://xesam.github.io/ab/c/?name=xesam&age=18#t=123456?a[0]=100&a[1]=200&b='), {
    scheme: 'https',
    auth: undefined,
    host: 'xesam.github.io',
    port: undefined,
    path: '/ab/c/',
    query: 'name=xesam&age=18',
    hash: 't=123456?a[0]=100&a[1]=200&b='
}, 'error');

assert.deepEqual(url('https://xesam.github.io?name=xesam&age=18#t=123456?a[0]=100&a[1]=200&b='), {
    scheme: 'https',
    auth: undefined,
    host: 'xesam.github.io',
    port: undefined,
    path: undefined,
    query: 'name=xesam&age=18',
    hash: 't=123456?a[0]=100&a[1]=200&b='
}, 'error');

assert.deepEqual(url('https://xesam.github.io/#t=123456?a[0]=100&a[1]=200&b='), {
    scheme: 'https',
    auth: undefined,
    host: 'xesam.github.io',
    port: undefined,
    path: '/',
    query: undefined,
    hash: 't=123456?a[0]=100&a[1]=200&b='
}, 'error');

assert.deepEqual(url('https://xesam.github.io#t=123456?a[0]=100&a[1]=200&b='), {
    scheme: 'https',
    auth: undefined,
    host: 'xesam.github.io',
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
