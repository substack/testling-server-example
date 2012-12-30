var http = require('http');
var tape = require('tape');

tape('xhr request', function (t) {
    t.plan(1);
    
    var opts = { path : '/', host : 'ci.testling.com', port : 8642 };
    http.get(opts, function (res) {
        var data = '';
        res.on('data', function (buf) { data += buf });
        res.on('end', function () {
            t.equal(data, 'beep boop\n');
        });
    });
});
