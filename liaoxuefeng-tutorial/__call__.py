__author__ = 'yantianyu'

class Person():
    def __init__(self,name):
        self.name = name

    def __call__(self):
        print('My name is %s.' % self.name)


s = Person('fdsa')

s()
