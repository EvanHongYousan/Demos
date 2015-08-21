from django.conf.urls import *
from HelloWorld.views import hello

urlpatterns = patterns("",
	('^hello/$', hello),
)