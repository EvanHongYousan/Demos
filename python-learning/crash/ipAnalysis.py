__author__ = 'yantianyu'

from urllib import request
import json
import time

url = 'http://ip.taobao.com/service/getIpInfo.php?ip='


def checkTaobaoIP(ip):
    try:
        response = request.urlopen(url + ip, timeout=5)
        result = response.readlines()
        data = json.loads(result[0])
        return "%15s: %s-%s-%s" % (ip, data['data']['isp'], data['data']['region'], data['data']['city'])
    except:
        return "%15s: timeout" % ip


if __name__ == "__main__":
    f = open('ip.txt')
    ips = f.readlines()
    f.close()

    f = open('ip-check.txt', 'w')
    for ip in ips:
        line = checkTaobaoIP(ip.strip())
        if line:
            print(line.encode('utf-8'))
            f.write(line.encode('utf-8') + '\n')
        else:
            print(line)
            f.write(line + '\n')
    f.close()
    print("Done!")
