from django.db import models

# Create your models here.
class User(models.Model):
    username = models.CharField(max_length = 255, unique = True)
    password = models.CharField(max_length = 255)

    def __str__(self):
        return self.username

class Artist(models.Model):
    title = models.CharField(max_length = 255)
    artist_name = models.CharField(max_length = 255)

    def __str__(self):
        return self.title


class Rating(models.Model):
    username = models.ForeignKey(User, on_delete = models.CASCADE)
    song = models.ForeignKey(Artist, on_delete = models.CASCADE)
    rating = models.IntegerField(default = 0)

    def __str__(self):
        return str(self.username)

class Detail(models.Model):
    song = models.ForeignKey(Artist, on_delete = models.CASCADE)
    genre = models.CharField(max_length = 255)
    year_of_release = models.IntegerField(default = 0)
    duration_of_song = models.CharField(max_length = 255)
    copyrighted = models.BooleanField()

    #def __str__(self):
     #   return str(self.song)
    
