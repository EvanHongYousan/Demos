__author__ = 'yantianyu'

import time, functools


def log(func):
    @functools.wraps(func)
    def wrapper(*args, **kw):
        print("call %s" % func.__name__)
        return func(*args, **kw)

    return wrapper


def log2(text):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kw):
            print(text, func.__name__)
            return func(*args, **kw)

        return wrapper

    return decorator


@log2('execute')
def now():
    print(time.strftime('%Y-%m-%d %H:%M:%S', time.localtime()))


now()

print(now.__name__)
