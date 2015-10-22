__author__ = 'yantianyu'

from types import MethodType


class Student():
    __slots__ = ('name', 'age', 'setAge')
    pass


def setAge(self, age):
    self.age = age


def setScore(self, score):
    self.score = score


Student.setScore = MethodType(setScore, Student)

s = Student()

s.name = 'Michael'
s.setAge = MethodType(setAge, s)
s.setAge(25)
print(s.name, s.age)

s2 = Student()
s2.setScore(55)
print(s2.score)
