__author__ = 'yantianyu'
from django.conf.urls import patterns, include, url

urlpatterns = patterns('',
                       # Examples:
                       # url(r'^$', 'data_analyzation.views.home', name='home'),
                       # url(r'^blog/', include('blog.urls')),

                       url(r'^$', r'blg_analysis.views.home'),
                       url(r'^echarts/$', r'blg_analysis.views.echarts'),
                       url(r'^echarts_getData', r'blg_analysis.views.echartsGetData'),
)
