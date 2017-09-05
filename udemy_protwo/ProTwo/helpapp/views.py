from django.shortcuts import render

def help(request):
    help_dict = {'insert_me':"Hi! This is the help page"}
    return render(request, 'help/help_page.html', context = help_dict)

# Create your views here.
