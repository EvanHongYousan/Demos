__author__ = 'yantianyu'

import base64

oriStr = b'qwerasdffdsfdsfdawerbgurt'

b64Str = base64.urlsafe_b64encode(oriStr)

reStr = base64.urlsafe_b64decode(b64Str)

print('oriStr:', oriStr, 'b64Str', b64Str, 'reStr', reStr)