__author__ = 'yantianyu'
x_float = float(input('Enter a float:'))

p = 0

while 2 ** p * x_float % 1 != 0:
    print("Remainder = " + str(2 ** p * x_float - int(2 ** p * x_float)))
    p += 1

num = 2 ** p * x_float

result = ''
if num == 0:
    result = '0'
print('num:'+str(num))
while num > 0:
    result = str(num % 2) + result
    num /= 2

for i in range(p - len(result)):
    result = '0' + result
print("mid result:"+str(result))
result = result[0:-p] + '.' + result[-p:]

print(result)
