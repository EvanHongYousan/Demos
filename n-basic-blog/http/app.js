require('http').createServer(function(req, res){
    res.writeHead(200, {});
    res.end('hfdsafdsafdsafsdaf');
}).listen(8125, function(){
    console.log('正在监听8125端口...');
});