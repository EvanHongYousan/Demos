/**
 * Created by yantianyu on 2015/4/13.
 */
define(function(require, exports, module){
    var socket = io.connect();
    socket.on('connect',function(){
        socket.send('前端socket连接成功...');
    });
    return socket;
});