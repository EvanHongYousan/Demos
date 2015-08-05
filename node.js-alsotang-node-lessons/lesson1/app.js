/**
 * Created by yantianyu on 2015/4/9.
 */
var express = require('express');

app = express();

app.get('/', function(request, response) {
	response.send("fdsa");
}).listen(3000, function() {
	console.log('app is listening at port 3000');
});