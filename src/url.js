const pattern = /^(?:([^:]*?):\/\/(?:([^:@]*?:[^:@]*)@)?(?:([^:\/\?#]*)?(?::(\d+))?))?(\/[^#\?]*)?(?:\?([^#]*))?(?:#(.*))?/;

function parse(url, process = x => x) {
    if (!url) {
        return {};
    }
    const matches = url.match(pattern) || [];
    return process({
        scheme: matches[1],
        auth: matches[2],
        host: matches[3],
        port: matches[4],
        path: matches[5],
        query: matches[6],
        hash: matches[7]
    });
}

parse.create = function (process) {
    return function (url) {
        return parse(url, process);
    }
};

module.exports = parse;