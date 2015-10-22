__author__ = 'yantianyu'


class Person():
    def __init__(self, name='kk', age=10):
        self.__name = name
        self.__age = age
    def getName(self):
        return self.__name
    def getAge(self):
        return self.__age

kk = Person()
print(kk.getName())
