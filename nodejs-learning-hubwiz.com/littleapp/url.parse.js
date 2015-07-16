var url = require('url');

var parse = url.parse('http://www.baidu.com?a=asdf&b=bnm',true,true);

console.log(parse);

console.log(url.format(parse));