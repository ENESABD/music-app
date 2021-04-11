from django.shortcuts import render
from .models import User

# Create your views here.
from django.http import HttpResponse
from django.template import loader
from django.db import IntegrityError
from .models import User, Rating, Detail, Artist


def index(request):
    
    if request.method == "POST":
        if request.POST.get("submit0"):
            try:
                if request.POST.get("username") and request.POST.get("password"): #checks if the fields are not empty
                    user = User()
                    user.username = request.POST.get('username')
                    user.password = request.POST.get('password')
                    user.save()
                    context = {
                        "messages" : "You are now registered",
                    }

                    return render(request, 'musicapp/index.html',context)
                
                else:
                    messages = "The Username and/or Password field cannot be empty"
                    context = {
                        "messages" : messages,
                    }
                    return render(request, 'musicapp/index.html', context)

            except IntegrityError:
                messages = "The username is taken"
                context = {
                    "messages" : messages,
                }
                return render(request, 'musicapp/index.html', context)



        elif request.POST.get("submit1"):
                name = request.POST.get("username")
                if name:
                    everything = Rating.objects.all()
                    target = []
                    for thing in everything:
                        if thing.username.username == name:
                            target.append(thing.song.title + '->' + str(thing.rating))
                    if target == []:
                        target = ['The username you have entered does not exist!']
                    context = {
                        'songrating': target,
                        'messages' : ''
                    }
                

                    return render(request, 'musicapp/index.html', context)

                else:
                    messages1 = "The Username field cannot be empty"
                    context = {
                        "messages1" : messages1,
                        'messages' : ''
                    }
                return render(request, 'musicapp/index.html', context)

        elif request.POST.get("submit2"):
                song = request.POST.get("song")
                if song:
                    everything = Detail.objects.all()
                    target = ''
                    for thing in everything:
                        if thing.song.title == song:
                            if thing.copyrighted == True:
                                target = 'Yes it is!'
                            else:
                                target = 'No it is not!'
                    if target == '':
                        target = ['The song you have entered does not exist!']
                    context = {
                        'copyright': target,
                        'messages' : ''
                    }
                

                    return render(request, 'musicapp/index.html', context)

                else:
                    messages2 = "The Song field cannot be empty"
                    context = {
                        "messages2" : messages2,
                        'messages' : ''
                    }
                return render(request, 'musicapp/index.html', context)

    else:
        context = {
            "messages" : "",
        }
        return render(request, 'musicapp/index.html',context)



    