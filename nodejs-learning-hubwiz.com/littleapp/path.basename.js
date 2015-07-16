/**
 * Created by yantianyu on 2015/3/5.
 */
var path = require('path');

var data1 = path.basename('fds/fdsa/asdf/fdsa/jkl.html');
var data2 = path.basename('fds/fdsa/asdf/fdsa/jkl.html','.html');

console.log(data1+"\n"+data2);