const pattern = /^([^:]*?):\/\/(?:([^:@]*?:[^:@]*)@)?(?:([^:\/\?#]*)?(?::(\d+))?)(\/[^#\?]*)?(?:\?([^#]*))?(?:#(.*))?/;

function fn(url) {
    if (!url) {
        return {};
    }
    const arr = url.match(pattern);

    return {
        scheme: arr[1],
        auth: arr[2],
        host: arr[3],
        port: arr[4],
        path: arr[5],
        query: arr[6],
        hash: arr[7]
    };
}

module.exports = fn;