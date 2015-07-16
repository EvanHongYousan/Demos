/**
 * Created by yantianyu on 2015/4/10.
 */
var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();

app.listen(3000,function(){
    console.log('app is running at port 3000...');
});

app.use(cookieParser());

app.get('/',function(request, response){
    if(request.cookies.isVisit){
        response.send('再次访问')
    }else{
        response.cookie('isVisit', 1, {maxAge: 60 * 1000});
        response.send('初次访问');
    }
});
