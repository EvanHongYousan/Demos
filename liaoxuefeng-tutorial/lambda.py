__author__ = 'yantianyu'

a = map(lambda x: x * x, [1, 2, 3, 4, 5, 6, 7])

print(list(a))


def sum(*args):
    p = 0
    for n in args:
        p += n
    return p


k = sum

print(sum.__name__, k.__name__)
