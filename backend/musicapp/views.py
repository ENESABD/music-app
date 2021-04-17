from django.shortcuts import render
from rest_framework import viewsets
from .serializers import UserSerializer, RatingSerializer, DetailSerializer, ArtistSerializer
from .models import User, Rating, Detail, Artist



# Create your views here.
class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

class RatingView(viewsets.ModelViewSet):
    serializer_class = RatingSerializer
    queryset = Rating.objects.all()

class ArtistView(viewsets.ModelViewSet):
    serializer_class = ArtistSerializer
    queryset = Artist.objects.all()

class DetailView(viewsets.ModelViewSet):
    serializer_class = DetailSerializer
    queryset = Detail.objects.all()
    