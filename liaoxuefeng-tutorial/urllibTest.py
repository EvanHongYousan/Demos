__author__ = 'yantianyu'
from urllib import request

# with request.urlopen('https://api.douban.com/v2/book/2129650') as f:
#     data = f.read()
#     print('status:', f.status, f.reason)
#     for k, v in f.getheaders():
#         print('%s: %s' % (k, v))
#     print('Data:', data.decode('utf-8'))

req = request.Request('http://www.douban.com/')
req.add_header('User-Agent',
               'Mozilla/6.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/8.0 Mobile/10A5376e Safari/8536.25')
ft = open('doubanIndex.html', 'w')
with request.urlopen(req) as f:
    print('status: ', f.status, f.reason)
    for k, v in f.getheaders():
        print('%s:%s' % (k, v))
    print(f.read().decode('utf-8'), file=ft)
