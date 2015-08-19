numbers = [0.333, 2.5, 0, 10]
for x in numbers:
    try:
        print 1.0 / x
    except ZeroDivisionError:
        print '*** has no inverse ***'
    else:
        print x
