from rest_framework import serializers
from .models import User, Rating, Artist, Detail

# The serializer translates a Todo object into a format that
# can be stored in our database. We use the Todo model.
class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('username', 'password')

class RatingSerializer(serializers.ModelSerializer):
  class Meta:
    model = Rating
    fields = ['username', 'song', 'rating']

class ArtistSerializer(serializers.ModelSerializer):
  class Meta:
    model = Artist
    fields = ('id','no','title', 'artist_name')

class DetailSerializer(serializers.ModelSerializer):
  class Meta:
    model = Detail
    fields = ('song', 'genre', 'year_of_release', 'duration_of_song', 'copyrighted')