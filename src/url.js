const pattern = /^(?:([^:]*?):\/\/(?:([^:@]*?:[^:@]*)@)?(?:([^:\/\?#]*)?(?::(\d+))?))?(\/[^#\?]*)?(?:\?([^#]*))?(?:#(.*))?/;

function parse(url) {
    if (!url) {
        return {};
    }
    const matches = url.match(pattern) || [];

    return {
        scheme: matches[1],
        auth: matches[2],
        host: matches[3],
        port: matches[4],
        path: matches[5],
        query: matches[6],
        hash: matches[7]
    };
}

module.exports = parse;