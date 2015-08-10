/**
 * Created by yantianyu on 15/8/7.
 */

var http = require('http');
var options = {
    host: 'www.baidu.com',
    port: 80,
    path: '',
    method: 'POST'
};
var req = http.request(options, function(res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
    });
});
req.write("my data");
req.write("more of my data");
req.end();