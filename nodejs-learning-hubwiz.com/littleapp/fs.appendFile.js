var fs = require('fs');

var html = '<html><body>fdsasdffdsaasdffdsaasdffdsaasdf</body></html>';

fs.appendFile('text.txt','fdsaasdf',function(err){
  if(err){
    throw err;
  }
  console.log('Append successfully');
});