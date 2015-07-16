var fs = require('fs');

fs.mkdir('d:/nodejs/rmdir',function(err){
	if(err){
		throw err;
	}
	console.log('rmdir success');
});