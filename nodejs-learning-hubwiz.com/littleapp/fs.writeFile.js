var fs = require('fs');

var html = '<html><body>fdsasdffdsaasdffdsaasdffdsaasdf</body></html>';

fs.writeFile('text.html',html,function(err){
  if(err){
    throw err;
  }
  console.log('Saved successfully');
});