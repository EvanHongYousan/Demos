var fs = require('fs');

fs.exists('text.txts',function(exists){
	console.log(exists?"存在":"不存在");
});