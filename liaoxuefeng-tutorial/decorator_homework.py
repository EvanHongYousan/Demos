__author__ = 'yantianyu'
import functools


def log(param=''):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kw):
            print('%s begin' % func.__name__)
            func(*args, **kw)
            print('%s end' % func.__name__)

        return wrapper

    return decorator


@log
def now():
    print('2015-10-20')


now()
