__author__ = 'yantianyu'
from html.parser import HTMLParser
from html.entities import name2codepoint


class MyHtmlParser(HTMLParser):
    def handle_starttag(self, tag, attrs):
        print('<%s>' % tag, end=' ')

    def handle_endtag(self, tag):
        print('</%s>' % tag, end=' ')

    def handle_startendtag(self, tag, attrs):
        print('<%s/>' % tag, end=' ')

    def handle_data(self, data):
        print(data, end=' ')

    def handle_comment(self, data):
        print('<!--', data, '-->', end=' ')

    def handle_entityref(self, name):
        print('&%s' % name, end=' ')

    def handle_charref(self, name):
        print('&#%s;' % name, end=' ')


parser = MyHtmlParser()
parser.feed('''<html>
<head></head>
<body>
<!-- test html parser -->
    <p>Some <a href=\"#\">html</a> HTML&nbsp;tutorial...<br>END</p>
</body><br/></html>''')
