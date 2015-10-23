__author__ = 'yantianyu'
from collections import namedtuple, Counter

Point = namedtuple('Point', ['x', 'y'])
p = Point(1, 2)
print(type(p))

c = Counter()
for ch in 'programming':
    c[ch] = c[ch] + 1
print(c)
