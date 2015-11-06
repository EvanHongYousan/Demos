from django.contrib import admin
from west.models import Character, Contact, Tag

# Register your models here.

class TagInLine(admin.TabularInline):
    model = Tag


class ContactAdmin(admin.ModelAdmin):
    inlines = [TagInLine]
    fieldsets = (
        ['Main', {
            'fields': ('name', 'email')
        }],
        ['Advance', {
            'classes': ('collapse',),
            'fields': ('age',)
        }]
    )


admin.site.register(Contact, ContactAdmin)
admin.site.register([Character, Tag])
