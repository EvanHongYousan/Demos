/**
 * Created by yantianyu on 2015/3/11.
 */
var express = require('express');

var app = express();

app.get('*',function(request, response){
    console.log(request.path);
    console.log(request.url);
    response.send('req.host获取主机名，req.path获取请求路径名!');
});

app.listen(3000);