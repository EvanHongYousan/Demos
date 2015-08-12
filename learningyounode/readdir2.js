/**
 * Created by yantianyu on 15/8/11.
 */
var readdir = require('./readdir_module');
readdir(process.argv[2], process.argv[3], function (err, result) {
    var i;
    if (err) {
        console.log(err);
        return;
    }
    for (i = 0; i < result.length; i++) {
        console.log(result[i]);
    }
});