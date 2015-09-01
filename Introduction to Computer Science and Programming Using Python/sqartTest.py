__author__ = 'yantianyu'
x = 25
epsilon = 0.01
step = epsilon ** 2
numGuesses = 0
ans = 0.0
while (abs(ans ** 2 - x)) >= epsilon and ans <= x:
    ans += step
    numGuesses += 1

print('numGuesses:' + str(numGuesses))
print('ans:' + str(ans))
