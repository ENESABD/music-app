from django.contrib import admin

# Register your models here.
from .models import User, Rating, Artist, Detail

admin.site.register(User)
admin.site.register(Rating)
admin.site.register(Artist)
admin.site.register(Detail)
