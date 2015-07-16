/**
 * Created by yantianyu on 2015/4/9.
 */
var express = require('express');
var utility = require('utility');

var app = express();

app.get('/',function(request, response){
    var q = request.query.q;

    var md5Val = utility.md5(q);

    response.send(md5Val);
});

app.listen(3000,function(){
    console.log('app is running at port 3000');
});