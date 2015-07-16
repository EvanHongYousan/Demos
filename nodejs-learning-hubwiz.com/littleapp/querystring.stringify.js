/**
 * Created by yantianyu on 2015/3/5.
 */
var querystring= require('querystring');

var result = querystring.stringify({foo:'bar',cool:['xux', 'yys']},"#","@");

console.log(result);