/**
 * Created by yantianyu on 2015/4/9.
 */
var express = require('express');
var cheerio = require('cheerio');
var superagent = require('superagent');

var app = express();

app.get('/',function(request, response){
    superagent.get('https://cnodejs.org/')
        .end(function(err, sres){
            if(err){
                return next(err);
            }
            var $ = cheerio.load(sres.text);
            var items = [];
            $("#topic_list .topic_title").each(function(index,element){
                var $element = $(element);
                items.push({
                    title:$element.attr('title'),
                    href:$element.attr('href')
                });
            });
        })
});

var a = 1;
app.listen(3000,function(){
    console.log("app is running at port 3000");
});