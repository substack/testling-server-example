var http = require('http');

var server = http.createServer(function (req, res) {
    res.setHeader('access-control-allow-origin', '*');
    res.write(process.argv.slice(3).join(' ') || 'beep boop');
    res.end('\n');
});
server.listen(process.argv[2] || 8642);
