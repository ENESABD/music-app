# music-app

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
npm add bootstrap react-bootstrap
npm add axios
npm start
```


## Our features

For Problem 2, we have implemented two additional features. We have created a Search Bar, that allows the user to search for songs by Song Name or Artist Name. We have also created a Sorting functionality that lets the user sort the list of songs by Song Name, Rating, or the Year of Release. 
