var http = require('http');

http.createServer(function(request, response) {
	response.writeHead(200, {'Content-Type':'text-plain'});
	response.end('fdsasadffdsaasdf');
}).listen(8124,function(){
	console.log("Listern to port 8124");
});