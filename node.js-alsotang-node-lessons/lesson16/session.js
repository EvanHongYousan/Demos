/**
 * Created by yantianyu on 2015/4/11.
 */
var express = require('express');
var session = require('express-session');

var app = express();

app.listen(3000,function(){
    console.log('app is running at port 3000');
});

app.use(session({
    secret: 'recommand 128 bytes random string', // 建议使用 128 个字符的随机字符串
    cookie: { maxAge: 60 * 1000 }
}));

app.get('/',function(req, res){
    if(req.session.isVisit){
        req.session.isVisit++;
        res.send('<p>第 '+req.session.isVisit+' 次来到次页面</p>');
    }else{
        req.session.isVisit = 1;
        res.send('<p>第 1 次来到次页面</p>');
        console.log(req.session.isVisit);
    }
});