/**
 * Created by yantianyu on 2015/4/17.
 */
var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var fs = require('fs');

app.use(express.static(path.join(__dirname,'public')));

app.get('/',function(req, res){
    res.status(200).send("哈哈哈哈哈哈");
});

app.get('/index',function(req, res){
    res.sendFile('index.html',{root:__dirname});
});

app.get('/play',function(req, res){
    res.sendFile('play.html',{root:__dirname});
});

io.sockets.on('connection',function(socket){
//    socket.on('drawData',function(data){
//        //console.log(data);
//        socket.broadcast.emit('drawData',data);
//    });
//    socket.on('nextPage',function(){
//        console.log('nextPage');
//        socket.broadcast.emit('nextPage');
//    });
//    socket.on('prePage',function(){
//        socket.broadcast.emit('prePage');
//    });
    socket.on('canvasData',function(canvasData){
        fs.writeFile("canvasData.txt",canvasData,{encoding:'UTF-8'});
    });

    socket.on('drawData',function(drawData){
        //console.log(drawData);
        socket.broadcast.emit('drawData',drawData);
    });

    fs.readFile('canvasData.txt',{encoding:'UTF-8'},function(err, data){
        if(err){
            throw err;
        }
        socket.emit('canvasData',data);
    });
});
server.listen(260,function(){
    console.log('app is running at port 260');
});