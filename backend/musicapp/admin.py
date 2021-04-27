from django.contrib import admin

# Register your models here.
from .models import User, Rating, Artist, Detail


class UserAdmin(admin.ModelAdmin):
    list_display = ('username', 'password')

class RatingAdmin(admin.ModelAdmin):
    list_display = ('username', 'song', 'rating')

class ArtistAdmin(admin.ModelAdmin):
    list_display = ('id','no','title', 'artist_name')

class DetailAdmin(admin.ModelAdmin):
    list_display = ('song', 'genre', 'year_of_release', 'duration_of_song')

admin.site.register(User)
admin.site.register(Rating)
admin.site.register(Artist)
admin.site.register(Detail)
