__author__ = 'yantianyu'


def isOdd(para):
    if (para % 2 == 0):
        return True
    else:
        return False


print(list(filter(isOdd, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])))