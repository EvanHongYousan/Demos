__author__ = 'yantianyu'
import os
from ipip import IP
from ipip import IPX

IP.load(os.path.abspath('ipdb.dat'))
print(IP.find('118.28.8.8'))
