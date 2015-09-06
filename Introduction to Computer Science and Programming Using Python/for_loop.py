__author__ = 'yantianyu'
x = int(input('Enter a number:'))
for i in range(0, abs(x) + 1):
    if i ** 3 == abs(x):
        break
if i ** 3 != abs(x):
    print('not equal')
else:
    if i < 0:
        i = -i
    print('equal')

f = 0
for ans in range(1,end +1):
    f+=ans

print(f)
