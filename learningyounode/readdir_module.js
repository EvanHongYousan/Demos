/**
 *
 * Created by yantianyu on 15/8/11.
 */
var fs = require('fs');
var path = require('path');
function a(dir, extName, callBack) {
    var result = [], i;
    fs.readdir(dir, function (err, list) {
        if (err) {
            callBack(err, null);
            return;
        }
        for (i = 0; i < list.length; i++) {
            if (path.extname(list[i]) == '.' + extName) {
                result.push(list[i]);
            }
        }
        callBack(null, result);
    });
}
module.exports = a;