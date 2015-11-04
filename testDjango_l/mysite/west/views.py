from django.shortcuts import render
from django.http import HttpResponse
from west.models import Character

# Create your views here.

def first_page(request):
    return HttpResponse('<p>fdsfdsa</p>')

def staff(request):
    staff_list = Character.objects.all()
    staff_str = map(str, staff_list)
    return HttpResponse('<p>'+' '.join(staff_str)+'</p>')
