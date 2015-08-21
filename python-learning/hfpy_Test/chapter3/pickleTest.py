__author__ = 'yantianyu'
import pickle

try:
    with open('data.txt', 'wb') as f:
        pickle.dump([1, 2, 'tree'], f)

    with open('data.txt', 'rb') as f:
        a_list = pickle.load(f)

    print(a_list)
except IOError as error:
    print('File error : '+str(error))
