__author__ = 'yantianyu'
from chapter6.util import *

james = get_coach_data('james2.txt')
julie = get_coach_data('julie2.txt')
mikey = get_coach_data('mikey2.txt')
sarah = get_coach_data('sarah2.txt')
#
# (sarah_name, sarah_dob) = sarah.pop(0), sarah.pop(0)
# print(sarah_name + "'s fastest times are : " +
#       str(sorted(set([sanitize(t) for t in sarah]))[0:3]))

print(james.top3())
print(julie.top3())
print(mikey.top3())
print(sarah.top3())
