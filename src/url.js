const pattern = /^(?:([^:]*?):\/\/(?:([^:@]*?:[^:@]*)@)?(?:([^:\/\?#]*)?(?::(\d+))?))?(\/[^#\?]*)?(?:\?([^#]*))?(?:#(.*))?/;

function parse(url) {
    if (!url) {
        return {};
    }
    const groups = url.match(pattern) || [];
    return {
        scheme: groups[1],
        auth: groups[2],
        host: groups[3],
        port: groups[4],
        path: groups[5],
        query: groups[6],
        hash: groups[7]
    };
}

module.exports = parse;