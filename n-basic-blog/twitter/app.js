var express = require('express');
var app = express();

var tweets = [];

app.get('/', function (req, res) {
    res.send('Twitter Test!');
});

app.get('/send', /*express.bodyParser(),*/ function (req, res) {
    console.log(req.body);
    if (req.body && req.body.tweet) {
        tweets.push(req.body.tweet);
        res.send({status: 'ok', message: 'Tweet received'});
    } else {
        res.send({status: 'not ok', message: 'no tweet received'});
    }
});

app.get('/tweets', function (req, res) {
    res.send(tweets);
});

app.listen(8000, function () {
    console.log('正在监听8000端口...');
});