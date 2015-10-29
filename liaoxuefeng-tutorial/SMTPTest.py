__author__ = 'yantianyu'
from email import encoders
from email.header import Header
from email.mime.text import MIMEText
from email.utils import parseaddr, formataddr

import smtplib


def _format_addr(s):
    name, addr = parseaddr(s)
    return formataddr((Header(name, 'utf-8').encode(), addr))


from_addr = input('From:')
password = input('password:')
to_addr = input('To:')
# smtp_server = input('SMTP server:')
smtp_server = 'smtp.qq.com'

msg = MIMEText('<html><body><h1>Hello</h1>' +
               '<p>send by <a href="http://www.python.org">Python</a>...</p>' +
               '</body></html>', 'html', 'utf-8')
msg['From'] = _format_addr('Evan <%s>' % from_addr)
msg['To'] = _format_addr('ME <%s>' % to_addr)
msg['Subject'] = Header('say hi from SMTP', 'utf-8').encode()

server = smtplib.SMTP(smtp_server, 25)
server.set_debuglevel(1)
server.login(from_addr, password)
server.sendmail(from_addr, [to_addr], msg.as_string())
server.quit()