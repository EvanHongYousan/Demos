/**
 * Created by yantianyu on 2015/3/13.
 */
var express = require('express');
var app = express();

app.get('/',function(req, res){
    res.status(200).send("哈哈哈哈哈哈");
});

app.get('/index',function(req, res){
    res.sendFile('index.html',{root:__dirname});
});

var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.sockets.on('connection',function(socket){
    socket.emit('message','连接成功');
    socket.on('message',function(data){
        //console.log(data);
        socket.broadcast.emit('message',data);
    });
});
server.listen(80);