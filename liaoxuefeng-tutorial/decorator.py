__author__ = 'yantianyu'

import functools

#
# def log(func):
# def wrapper(*args, **kw):
#         print('call %s()' % func.__name__)
#         return func(*args, **kw)
#
#     return wrapper

def log(text):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kw):
            print('%s %s()' % (text, func.__name__))
            return func(*args, **kw)

        return wrapper

    return decorator


@log('excute')
def now():
    print('2015-10-20')


now()

print(now.__name__)
