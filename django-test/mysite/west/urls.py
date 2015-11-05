__author__ = 'yantianyu'

from django.conf.urls import patterns, include, url

urlpatterns = patterns('',
                       url(r'^$', r'west.views.first_page'),
                       url(r'^staff/', r'west.views.staff'),
                       url(r'^templay/', r'west.views.templay'),
                       url(r'^form/', r'west.views.form'),
                       url(r'^investigate/', r'west.views.investigate'),
                       )
