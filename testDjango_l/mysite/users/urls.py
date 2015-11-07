__author__ = 'yantianyu'

from django.conf.urls import patterns, include, url

urlpatterns = patterns('',
                       url(r'^$', 'users.views.home'),
                       url(r'^login/', 'users.views.login'),
                       url(r'^logout/', 'users.views.logout'),
)
