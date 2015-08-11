/**
 * Created by yantianyu on 15/8/10.
 */
var http = require('http');

var server = http.createServer(function (req, res) {
    res.writeHead(200, {});
    res.write('fdsafdsfads');
    //badLoggingCall('send response');
    console.log('send response');
});

//process.on('uncaughtException', function (e) {
//    console.log(e);
//});

server.listen(8070);