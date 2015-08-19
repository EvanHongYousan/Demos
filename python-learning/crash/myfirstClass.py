__author__ = 'yantianyu'


class MyClass:
    'simple class'
    i = 12345

    def f(x):
        return 'hihihihihi'

    def __init__(self):
        print 'init'


print MyClass.__doc__
print MyClass.i

x = MyClass()
x.counter = 1
while x.counter < 10:
    x.counter *= 2
print x.counter

del x.counter

print x.f()
