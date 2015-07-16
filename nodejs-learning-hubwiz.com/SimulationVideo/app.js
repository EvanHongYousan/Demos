/**
 * Created by yantianyu on 2015/4/1.
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

io.sockets.on('connection',function(socket){

    fs.readFile('drawData.txt',{encoding:'UTF-8'},function(err, data){
        if(err){
            throw err;
        }
        var strs = data.split("*");
        socket.emit('playMedia',JSON.stringify(strs));
    });

    socket.on('message',function(data){
        socket.broadcast.emit('message',data);
        fs.appendFile("drawData.txt",data+"*",{encoding:'UTF-8'});
    });
    socket.on('play',function(data){
        fs.readFile('drawData.txt',{encoding:'UTF-8'},function(err, data){
            if(err){
                throw err;
            }
            var strs = data.split("*");
            var i = 0;
            while(i<strs.length){
                socket.emit('message',strs[i]);
                i++;
            }
        });
    });
    socket.on('clear',function(data){
        fs.writeFile('drawData.txt','',function(){
            socket.emit('clear',"历史记录清除成功!");
        });
    });
    socket.on('audioControl',function(data){
        var currentTime =parseInt(JSON.parse(data).time);
        fs.readFile('drawData.txt',{encoding:'UTF-8'},function(err, data){
            if(err){
                throw err;
            }
            socket.emit('message',JSON.stringify({clearCanvas:"clearCanvas"}));
            var strs = data.split("*");
            var i = 0;
            while(i<currentTime){
                socket.emit('message',strs[i]);
                i++;
            }
            socket.emit('message',JSON.stringify({closePath:"closePath"}));
        });
    });
    socket.on('timeupdate',function(data){
        var currentTime =parseInt(JSON.parse(data).time);
        fs.readFile('drawData.txt',{encoding:'UTF-8'},function(err, data){
            if(err){
                throw err;
            }
            var strs = data.split("*");
            if(currentTime == 0){
                socket.emit('audioPlay',JSON.stringify({beginPath:"beginPath"}));
                socket.emit('audioPlay',strs[currentTime]);
                socket.emit('audioPlay',JSON.stringify({closePath:"closePath"}));
            }else{
                var strA = JSON.parse(strs[currentTime-1]);
                var strB = JSON.parse(strs[currentTime]);
                socket.emit('audioPlay',JSON.stringify({beginPath:"beginPath"}));
                socket.emit('audioPlay',JSON.stringify({sx:(strA.sx||strA.ex) , sy:(strA.sy||strA.ey)}));
                socket.emit('audioPlay',strs[currentTime]);
                socket.emit('audioPlay',JSON.stringify({closePath:"closePath"}));
            }
        });
    });
});
server.listen(250,function(){
    console.log("app is running at port 250");
});

function sleep(milliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds);
}