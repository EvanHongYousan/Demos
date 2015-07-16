var fs = require('fs');

fs.unlink('111.txt',function(err){
	if (err) throw err;
	console.log('successfully deleted');
});