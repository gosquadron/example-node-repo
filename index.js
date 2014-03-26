var http = require("http");
var url = require("url");
var _ = require("underscore");

http.createServer(function(request, response) {
    var query = url.parse(request.url, true).query;

    var total = _.reduce(_.filter(_.map(Object.keys(query), function(q) {
        return query[q];
    }), function(n) {
        return !isNaN(n);
    }), function(memo, n) {
        return memo + parseInt(n);
    }, 0);

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Total is " + total);
    response.end();
}).listen(8888);
