__author__ = 'yantianyu'

# f = open('11.txt', 'r')
#
# print('fd fdsjf ds fdsjafdks fds fdsajfsa', file=f)
#
# print(f.read())
#
# f.close()

with open('11.txt', 'r', encoding='UTF-8', errors='ignore') as f:
    print(f.read())
