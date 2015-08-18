__author__ = 'yantianyu'
import sys
try:
    for arg in sys.argv[1]:
        try:
            print arg
        except IndexError:
            print 'error'
        else:
            print 'finish'
except IndexError:
    print 'error'
