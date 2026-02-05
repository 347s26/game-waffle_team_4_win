from django.contrib import admin

from .models import letters, user_stats, word

# Register your models here.
admin.site.register(word)
admin.site.register(user_stats)
admin.site.register(letters)
