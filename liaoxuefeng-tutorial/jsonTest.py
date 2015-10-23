__author__ = 'yantianyu'

import json

# d = dict(name='Bob', age=20, score=88)
# json_str = '{"age": 20, "score": 88, "name": "Bob"}'
#
# print(json.loads(json_str))
# print(d)
# print(json.dumps(d))

class Student(object):
    def __init__(self, name, age, score):
        self._name = name
        self._age = age
        self._score = score


def student2dict(std):
    return {
        'name': std._name,
        'age': std._age,
        'score': std._score
    }


def dict2student(d):
    return Student(d['name'], d['age'], d['score'])


s = Student('bob', 55, 88)
sJson = json.dumps(s, default=lambda obj: obj.__dict__)

print(sJson)

s = json.loads(sJson, object_hook=lambda d: Student(d['_name'], d['_age'], d['_score']))
print(s)

