__author__ = 'yantianyu'

# import logging
#
# try:
# print('try...')
#     r = 10 / int('a')
#     print('result is ', r)
# except Exception as e:
#     # print('except:', e)
#     logging.exception(e)
# finally:
#     print('Finally...')
# print('END')

class FooError(ValueError):
    pass


def foo(s):
    n = int(s)
    if n == 0:
        raise FooError('invalid value : %s' % s)
    return 10 / n


foo('0')
