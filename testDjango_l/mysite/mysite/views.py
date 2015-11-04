__author__ = 'yantianyu'

from django.http import HttpResponse

def first_page(request):
    return HttpResponse("<p>世界好</p>")
