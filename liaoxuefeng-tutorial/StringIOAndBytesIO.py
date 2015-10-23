__author__ = 'yantianyu'
from io import StringIO

f = StringIO()

f.write('fdsa')
f.write('fdsa')
f.write('fdsa')
f.write('fdsa')
f.write('fdsa')

print(f.getvalue())
