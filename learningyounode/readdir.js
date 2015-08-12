//var fs = require('fs');
//var result = [];
//fs.readdir(process.argv[2], function (err, list) {
//    if (err) {
//        console.log(err);
//    }
//    var i = 0;
//    for (i = 0; i < list.length; i++) {
//        if (list[i].indexOf('.' + process.argv[3]) != -1) {
//            result.push(list[i]);
//        }
//    }
//    for (i = 0; i < result.length; i++) {
//        console.log(result[i]);
//    }
//});

var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function (err, list) {
    if (err) {
        console.log(err);
    }
    list.forEach(function (file) {
        if (path.extname(file) == '.' + process.argv[3]) {
            console.log(file);
        }
    });
});
