__author__ = 'yantianyu'
import pickle

d = dict(name='bob', age=54, score=88)
f = open('pickTest2.txt', 'wb')
pickle.dump(d, f)
f.close()

# with open('pickTest.txt', 'a') as f:
# print(pkd, file=f)

