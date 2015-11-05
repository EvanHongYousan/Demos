__author__ = 'yantianyu'

from django.conf.urls import patterns, include, url

urlpatterns = patterns('',
                       url(r'^$', r'west.views.first_page'),
                       )
