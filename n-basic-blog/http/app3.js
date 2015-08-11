/**
 * Created by yantianyu on 15/8/10.
 */
var http = require('http');
var opts = {
    host: 'www.baidu.com',
    port: 80,
    path: '/'
};
var req = http.get(opts, function(res) {
    //console.log(res);
    res.setEncoding('utf8');
    res.on('data', function(data) {
        console.log(data);
    });
});
