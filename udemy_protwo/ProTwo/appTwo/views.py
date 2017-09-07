from django.shortcuts import render
from django.http import HttpResponse
from appTwo.models import User


def index(request):
    return render(request,'appTwo/home.html')

def users(request):
    user_list = User.objects.order_by('user_lname')
    user_dict = {'users_info': user_list}
    return render(request, 'appTwo/users.html', context=user_dict)
