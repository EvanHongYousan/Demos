/**
 * Created by yantianyu on 15/8/10.
 */
var assert = require('assert');

assert.notEqual(1, true, 'truthy');
console.log('cross');
assert.equal(1, true, 'truthy');
