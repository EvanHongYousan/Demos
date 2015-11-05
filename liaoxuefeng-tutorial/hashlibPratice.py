__author__ = 'yantianyu'
import hashlib


def calc_md5(password):
    md5 = hashlib.md5()
    md5.update(password.encode('utf-8'))
    return md5.hexdigest()


def login(user, password):
    password = calc_md5(password)
    if password == db[user]:
        return True
    else:
        return False


db = {
    'michael': '912ec803b2ce49e4a541068d495ab570',
    'bob': '878ef96e86145580c38c87f0410ad153',
    'alice': '99b1c2188db85afee403b1536010c2c9'
}

username = input('输入用户名:')
password = input('输入密码:')

if login(username, password) is True:
    print('登录成功！')
else:
    print('登录失败！')
