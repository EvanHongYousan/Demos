__author__ = 'yantianyu'

import os

man = []
other = []
i = 0
try:
    f = open('sketch.txt')
    out = open('data.out', 'w')
    for each_line in f:
        try:
            (role, line_splken) = each_line.split(":")
            line_splken = line_splken.strip()
            if i % 2 == 0:
                man.append(line_splken)
            else:
                other.append(line_splken)
            i = i + 1
            # print(role, end='')
            # print(' said: ', end='')
            # print(line_splken, end='')
        except ValueError:
            print("error", file=out)
    out.close()
    f.close()
except IOError:
    print('the file missing')

manText = open('manText.txt', 'w')
otherText = open('otherText.txt', 'w')
print(man, file=manText)
print(other, file=otherText)
manText.close()
otherText.close()
