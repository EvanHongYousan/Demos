var fs = require('fs');

fs.rename('D:/nodejs/text2.txt','D:/text2.txt',function(err){
	if (err) throw err;
	console.log('Successful modification,');
});