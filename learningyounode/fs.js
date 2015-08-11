var fs = require('fs');

var data = fs.readFileSync(process.argv[2]);

var dataStr = data.toString().split('\n'); 
console.log(dataStr.length - 1);
