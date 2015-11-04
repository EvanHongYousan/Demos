__author__ = 'yantianyu'

from django.http import HttpResponse

def first_page(request):
    return HttpResponse('<h1>ahahahahahaha</h1>')
