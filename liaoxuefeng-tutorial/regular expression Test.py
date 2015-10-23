__author__ = 'yantianyu'
import re

m = re.match(r'^(\d{3})-(\d{3,8})$', '010-432432')
print(m)
print(m.group(0), m.group(1), m.group(2))
