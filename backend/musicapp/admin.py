from django.contrib import admin

# Register your models here.
from .models import User, Rating, Song, Detail


class UserAdmin(admin.ModelAdmin):
    list_display = ('username', 'password')

class RatingAdmin(admin.ModelAdmin):
    list_display = ('username', 'song', 'rating')

class SongAdmin(admin.ModelAdmin):
    list_display = ('id','no','song_name', 'artist_name')

class DetailAdmin(admin.ModelAdmin):
    list_display = ('song', 'genre', 'year_of_release', 'duration_of_song', 'copyrighted')

admin.site.register(User)
admin.site.register(Rating)
admin.site.register(Song)
admin.site.register(Detail)
