var http = require('http');

var server = http.createServer(function (req, res) {
    res.setHeader('access-control-allow-origin', '*');
    res.end('beep boop\n');
});
server.listen(8642);
