#Music App

Run with: 

shell:

python3 -m venv my-venv
source my-venv/bin/activate
pip3 install Django

python3 manage.py shell 

from musicapp.models import User, Artist, Rating, Detail

user1 = User(username = "Amelia-Earhart", password = "123")
user1.save()

user2 = User(username = "Otto", password = "1232")
user2.save()


a = Artist(title = "These Walls", artist_name = "Kendrick Lamar")
a.save()

b = Artist(title = "Days of Wine and Roses", artist_name = "Bill Evans")
b.save()

c = Artist(title = "Freeway", artist_name = "Aimee Mann")
c.save()


d = Rating(username = user1, song = a, rating = 4)
d.save()

e = Rating(username = user2, song = b, rating = 5)
e.save()

f = Rating(username = user1, song = b, rating = 4)
f.save()

g = Rating(username = user1, song = c, rating = 3)
g.save()


h = Detail(song = c, genre = "Rock,Pop", year_of_release = 2008, duration_of_song = "3:56", copyrighted = True)
h.save()

i = Detail(song = a, genre = "Neo soul, Hip-Hop/Rap", year_of_release = 2015, duration_of_song = "8:11", copyrighted = True)
i.save()

j = Detail(song = b, genre = "Easy Listening", year_of_release = 2017, duration_of_song = "2:10", copyrighted = True)
j.save()

exit() #this exits the python3 shell


python3 manage.py runserver

``` 


Then, in your browser, go to: 

url: 

http://127.0.0.1:8000/musicapp/



This is the admin page of our app: 

http://127.0.0.1:8000/admin/

Username: ileghari
Password: ilegeabd 






