__author__ = 'yantianyu'
x = int(input('Enter an integer:'))

result = ''

if x == 0:
    result = '0'
while x >= 2:
    result = str(x % 2) + result
    x = int(x / 2)

result = str(x) + result
print(result)
