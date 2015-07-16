var fs = require('fs');

fs.readFile('text2.txt',function(err, data){
	if(err){
		throw err;
	}
	console.log(data);
});