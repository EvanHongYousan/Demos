/**
 * Created by yantianyu on 2015/3/4.
 */
var url = require('url');

console.log(url.resolve('http://example.com/', '/one')); // 'http://example.com/one'
console.log(url.resolve('http://example.com/one', '/two'));// 'http://example.com/two'