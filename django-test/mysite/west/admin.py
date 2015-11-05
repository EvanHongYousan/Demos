from django.contrib import admin
from west.models import Character, Contanct, Tag

# Register your models here.

admin.site.register([Character, Contanct, Tag])
