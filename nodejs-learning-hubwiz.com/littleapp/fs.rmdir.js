var fs = require('fs');

fs.rmdir('d:/nodejs/rmdir',function(err){
	if(err){
		throw err;
	}
	console.log("rmdir success");
});