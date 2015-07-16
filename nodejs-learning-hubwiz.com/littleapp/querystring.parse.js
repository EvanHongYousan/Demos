/**
 * Created by yantianyu on 2015/3/5.
 */
var querystring = require('querystring');

var result = querystring.parse('sa=890&sa=009&fdsa=fdsa');

var result2 = querystring.parse('foo@bar$cool@xux$cool@yys','@','$');

console.log(result);

console.log(result2);