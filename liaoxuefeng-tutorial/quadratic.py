__author__ = 'yantianyu'

# import math
#
#
# def quadratic(a, b, c):
# m = 2 * b - 4 * a * c
#     if (m < 0):
#         return 'no result'
#     else:
#         x1 = (-b + math.sqrt(m)) / 2 / a
#         x2 = (-b - math.sqrt(m)) / 2 / a
#     return x1, x2
#
#
# print(quadratic(1, 9, 1))

L = ['Hello', 'World', 18, 'Apple', None]
print([s.lower() for s in L if isinstance(s, str)])
