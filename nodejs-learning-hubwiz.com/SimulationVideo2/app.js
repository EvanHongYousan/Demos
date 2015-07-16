/**
 * Created by yantianyu on 2015/4/13.
 */
var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var fs = require('fs');

app.use(express.static(path.join(__dirname,'public')));

app.get('/',function(req, res){
    res.status(200).send("/draw:计时画图\n/play:模拟视频");
});

app.get('/draw',function(req, res){
    res.sendFile('draw.html',{root:__dirname});
});

app.get('/play',function(req, res){
    res.sendFile('play.html',{root:__dirname});
});

io.sockets.on('connection',function(socket){
    console.log('与前端连接成功！');
});
server.listen(300,function(){
    console.log('app is running at port 300')
});