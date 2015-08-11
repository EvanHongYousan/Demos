/**
 * Created by yantianyu on 15/8/10.
 */
var http = require('http');
var server = http.createServer(function (req, res) {
    res.writeHead(200,{});
    res.end('fdsafdsaasdffdsa');
    console.log('http response');
    process.nextTick(function(){
        console.log('tick');
    });
});
server.listen(8000);
