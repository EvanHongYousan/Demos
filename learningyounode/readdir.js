var fs = require('fs');
fs.readdir(process.argv[2],function(err, list){
	if (err){
		console.log(err);
	}
	var i = 0;
	for (i = 0;i < list.length;i++){
		if (!list[i].indexOf(process.argv[3])){
			list.split(i, i-1);
		}
	}
	console.log(list);
});
