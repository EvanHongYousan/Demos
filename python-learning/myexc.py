__author__ = 'yantianyu'
my_exc = 'my_exc'
var = 10
try:
    raise my_exc, 2 * 2
except my_exc, val:
    print 'My exception occurred, value:', val
