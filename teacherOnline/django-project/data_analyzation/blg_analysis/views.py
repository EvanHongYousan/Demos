from django.shortcuts import render
from django.http import HttpResponse
from blg_analysis import cfg

import struct
import socket
import json
from qqwry import QQWry, MQQWry

# Create your views here.

def ip_ntoa(n):
    return socket.inet_ntoa(struct.pack(">L", n))


def home(request):
    conn = cfg.get_conn()
    cursor = conn.cursor()
    sql = '''
      select reg_ip
      from user_ext
      '''
    v = {}
    v['blg_data'] = []
    k = {}
    q = MQQWry()
    try:
        cursor.execute(sql)
        data = cursor.fetchall()
        print('拿到所有加密ip')
        for item in data:
            v['blg_data'].append(q[ip_ntoa(item[0])][2])
        print('ip解密、分析完毕')
        for item in v['blg_data']:
            pick = False
            for item2 in k:
                if item2 == item:
                    k[item2] += 1
                    pick = True
                    break
            if pick == False:
                k[item] = 1
    except Exception as err:
        print(err)
        raise err
    print(k)
    print(k.items())
    s = {'k': sorted(k.items())}
    return render(request, 'blg_analysis.html', s)


def echarts(request):
    return render(request, 'echarts.html')


def echartsGetData(request):
    k = {}
    k['aa'] = 'aa'
    k['bb'] = 'bb'
    return HttpResponse(json.dumps(k), content_type='application/json')
