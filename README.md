# music-app

This app is deployed with some slight changes at the following link: https://the-music-rating-app.herokuapp.com/ . Please allow about 30 seconds for the server to wake up.

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
