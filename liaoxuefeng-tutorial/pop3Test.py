__author__ = 'yantianyu'
import poplib

email = input('Email:')
password = input('Password:')
pop3_server = 'pop.qq.com'

server = poplib.POP3(pop3_server)
server.set_debuglevel(1)
print()
