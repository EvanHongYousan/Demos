__author__ = 'yantianyu'
import smtplib
from email.mime.text import MIMEText
from email.header import Header

sender = '1370204201@qq.com'
receiver = '1370204201@qq.com'
subject = 'python email test'
smtpserver = 'smtp.qq.com'
username = '1370204201@qq.com'
password = 'yty199107041234'

msg = MIMEText(u'你好22222', 'plain', 'utf-8')  # 中文需参数‘utf-8'，单字节字符不需要
msg['Subject'] = Header(subject, 'utf-8')

smtp = smtplib.SMTP()
smtp.connect(smtpserver)
smtp.login(username, password)
smtp.sendmail(sender, receiver, msg.as_string())
smtp.quit()