const assert = require('assert');
const url = require('..');

assert.deepEqual(url(null), {}, 'error');
assert.deepEqual(url(' '), {
    protocol: undefined,
    auth: undefined,
    host: undefined,
    hostname: undefined,
    port: undefined,
    pathname: undefined,
    search: undefined,
    query: undefined,
    hash: undefined
}, 'error');

assert.deepEqual(url('https://xesam.github.io'), {
    auth: undefined,
    port: undefined,
    pathname: undefined,
    search: undefined,
    query: undefined,
    hash: undefined,
    protocol: 'https:',
    host: 'xesam.github.io',
    hostname: 'xesam.github.io'
}, 'error');

assert.deepEqual(url('https://xesam.github.io:443'), {
    auth: undefined,
    port: '443',
    pathname: undefined,
    search: undefined,
    query: undefined,
    hash: undefined,
    protocol: 'https:',
    host: 'xesam.github.io:443',
    hostname: 'xesam.github.io'
}, 'error');

assert.deepEqual(url('https://admin:root@xesam.github.io:443'), {
    auth: 'admin:root',
    port: '443',
    pathname: undefined,
    search: undefined,
    query: undefined,
    hash: undefined,
    protocol: 'https:',
    host: 'xesam.github.io:443',
    hostname: 'xesam.github.io'
}, 'error');

assert.deepEqual(url('https://admin:root@xesam.github.io:80/'), {
    auth: 'admin:root',
    port: '80',
    pathname: '/',
    search: undefined,
    query: undefined,
    hash: undefined,
    protocol: 'https:',
    host: 'xesam.github.io:80',
    hostname: 'xesam.github.io'
}, 'error');

assert.deepEqual(url('https://admin:root@xesam.github.io:80?name=xesam'), {
    protocol: 'https:',
    auth: 'admin:root',
    host: 'xesam.github.io:80',
    hostname: 'xesam.github.io',
    port: '80',
    pathname: undefined,
    search: '?name=xesam',
    query: 'name=xesam',
    hash: undefined
}, 'error');

assert.deepEqual(url('https://admin:root@xesam.github.io:80?name=xesam?age=18'), {
    protocol: 'https:',
    auth: 'admin:root',
    host: 'xesam.github.io:80',
    hostname: 'xesam.github.io',
    port: '80',
    pathname: undefined,
    search: '?name=xesam?age=18',
    query: 'name=xesam?age=18',
    hash: undefined
}, 'error');

assert.deepEqual(url('https://admin:root@xesam.github.io:80/abc/def'), {
    protocol: 'https:',
    auth: 'admin:root',
    host: 'xesam.github.io:80',
    hostname: 'xesam.github.io',
    port: '80',
    pathname: '/abc/def',
    search: undefined,
    query: undefined,
    hash: undefined
}, 'error');

assert.deepEqual(url('https://admin:root@xesam.github.io:80/?name=xesam?age=18'), {
    protocol: 'https:',
    auth: 'admin:root',
    host: 'xesam.github.io:80',
    hostname: 'xesam.github.io',
    port: '80',
    pathname: '/',
    search: '?name=xesam?age=18',
    query: 'name=xesam?age=18',
    hash: undefined
}, 'error');

assert.deepEqual(url('https://admin:root@xesam.github.io:80/abc/def?name=xesam'), {
    protocol: 'https:',
    auth: 'admin:root',
    host: 'xesam.github.io:80',
    hostname: 'xesam.github.io',
    port: '80',
    pathname: '/abc/def',
    search: '?name=xesam',
    query: 'name=xesam',
    hash: undefined
}, 'error');

assert.deepEqual(url('https://admin:root@xesam.github.io:80/abc/def?name=xesam#fragment?a=b'), {
    protocol: 'https:',
    auth: 'admin:root',
    host: 'xesam.github.io:80',
    hostname: 'xesam.github.io',
    port: '80',
    pathname: '/abc/def',
    search: '?name=xesam',
    query: 'name=xesam',
    hash: '#fragment?a=b'
}, 'error');

assert.deepEqual(url('https://admin:root@xesam.github.io:80/abc/def?name=xesam#fragment?a=b#c=d'), {
    protocol: 'https:',
    auth: 'admin:root',
    host: 'xesam.github.io:80',
    hostname: 'xesam.github.io',
    port: '80',
    pathname: '/abc/def',
    search: '?name=xesam',
    query: 'name=xesam',
    hash: '#fragment?a=b#c=d'
}, 'error');

assert.deepEqual(url('https://xesam.github.io:80/abc/def?name=xesam&age=18#t=123456?a[0]=100&a[1]=200&b='), {
    protocol: 'https:',
    auth: undefined,
    host: 'xesam.github.io:80',
    hostname: 'xesam.github.io',
    port: '80',
    pathname: '/abc/def',
    search: '?name=xesam&age=18',
    query: 'name=xesam&age=18',
    hash: '#t=123456?a[0]=100&a[1]=200&b='
}, 'error');

assert.deepEqual(url('https://xesam.github.io/ab/c/?name=xesam&age=18#t=123456?a[0]=100&a[1]=200&b='), {
    protocol: 'https:',
    auth: undefined,
    host: 'xesam.github.io',
    hostname: 'xesam.github.io',
    port: undefined,
    pathname: '/ab/c/',
    search: '?name=xesam&age=18',
    query: 'name=xesam&age=18',
    hash: '#t=123456?a[0]=100&a[1]=200&b='
}, 'error');

assert.deepEqual(url('https://xesam.github.io?name=xesam&age=18#t=123456?a[0]=100&a[1]=200&b='), {
    protocol: 'https:',
    auth: undefined,
    host: 'xesam.github.io',
    hostname: 'xesam.github.io',
    port: undefined,
    pathname: undefined,
    search: '?name=xesam&age=18',
    query: 'name=xesam&age=18',
    hash: '#t=123456?a[0]=100&a[1]=200&b='
}, 'error');

assert.deepEqual(url('https://xesam.github.io/#t=123456?a[0]=100&a[1]=200&b='), {
    protocol: 'https:',
    auth: undefined,
    host: 'xesam.github.io',
    hostname: 'xesam.github.io',
    port: undefined,
    pathname: '/',
    search: undefined,
    query: undefined,
    hash: '#t=123456?a[0]=100&a[1]=200&b='
}, 'error');

assert.deepEqual(url('https://xesam.github.io#t=123456?a[0]=100&a[1]=200&b='), {
    protocol: 'https:',
    auth: undefined,
    host: 'xesam.github.io',
    hostname: 'xesam.github.io',
    port: undefined,
    pathname: undefined,
    search: undefined,
    query: undefined,
    hash: '#t=123456?a[0]=100&a[1]=200&b='
}, 'error');

assert.deepEqual(url('/abc#t=123456?a[0]=100&a[1]=200&b='), {
    protocol: undefined,
    auth: undefined,
    host: undefined,
    hostname: undefined,
    port: undefined,
    pathname: '/abc',
    search: undefined,
    query: undefined,
    hash: '#t=123456?a[0]=100&a[1]=200&b='
}, 'error');

assert.deepEqual(url('/abc?name=xesam#t=123456?a[0]=100&a[1]=200&b='), {
    protocol: undefined,
    auth: undefined,
    host: undefined,
    hostname: undefined,
    port: undefined,
    pathname: '/abc',
    search: '?name=xesam',
    query: 'name=xesam',
    hash: '#t=123456?a[0]=100&a[1]=200&b='
}, 'error');

assert.deepEqual(url('/abc?'), {
    protocol: undefined,
    auth: undefined,
    host: undefined,
    hostname: undefined,
    port: undefined,
    pathname: '/abc',
    search: '?',
    query: '',
    hash: undefined
}, 'error');
