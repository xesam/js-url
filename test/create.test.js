const assert = require('assert');
const url = require('..').create(function (data) {
    if (data.scheme) {
        data.scheme = data.scheme.toUpperCase();
    }
    return data;
});

assert.deepEqual(url('https://xesam.github.io:443'), {
    scheme: 'HTTPS',
    auth: undefined,
    host: 'xesam.github.io',
    port: 443,
    path: undefined,
    query: undefined,
    hash: undefined
}, 'error');