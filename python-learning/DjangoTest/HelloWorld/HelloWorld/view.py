__author__ = 'yantianyu'
from django.http import HttpResponse

def hello(request):
    return HttpResponse("Hello world!")

print(__name__)