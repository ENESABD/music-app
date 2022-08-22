# music-app

This app is deployed with some slight changes at the following link: https://the-music-rating-app.herokuapp.com/ . This is a Heroku app; so, please allow about 30 seconds for the page to load at first.

# Instructions to run our app

```
python3 -m venv django-react
source django-react/bin/activate
pip3 install django
pip3 install djangorestframework django-cors-headers
```

## To run our backend 

```
cd backend
python3 manage.py runserver
```


## To run our frontend 

```
cd frontend
npm add axios
npm start
```
