__author__ = 'yantianyu'
# Function defined outside the class
def f1(self, x, y):
    return min(x, x + y)


def min(x, y):
    if x > y:
        return x
    else:
        return y


class C:
    f = f1

    def g(self):
        return 'hello world'

    h = g


class E:
    def k(self):
        return 'helaofda'


class D(C, E):
    a = 2


d = D();
print(d.g())
print(d.k())


