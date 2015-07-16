var fs = require('fs');

fs.readdir('d:/nodejs',function(err, files){
	if(err){
		throw err;
	}
	for(attr in files){
		console.log(attr+" : "+files[attr]);
	}
});