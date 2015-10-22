__author__ = 'yantianyu'
from collections import Iterable

d = {'a': 1, 'b': 2, 'c': 3}
for k, v in d.items():
    print('key:' + k + ', value:' + str(v))

print(Iterable)

print(enumerate(['a', 'b', 'c']))
