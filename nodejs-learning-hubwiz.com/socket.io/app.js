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

io.on('connection',function(socket){

    socket.join('chat');
    console.log('socket connected...');
    //socket.send('welcome!');
    socket.emit('message','连接成功');
    socket.on('message',function(data){
        console.log("by message : "+data);
    });
    socket.on('message2',function(data){
        console.log("by message2 : "+data);
    });
    socket.on('disconnect',function(){
        console.log("客户端连接断开");
    });
});

io.of('chat').on('connection',function(socket){
    console.log('socket connected room chat...');
    //socket.send('welcome!');
    socket.emit('message','连接成功');
    socket.on('message',function(data){
        console.log("chat by message : "+data);
    });
    socket.on('message2',function(data){
        console.log("chat by message2 : "+data);
    });
    socket.on('disconnect',function(){
        console.log("chat 客户端连接断开");
    });
});

server.listen(80);