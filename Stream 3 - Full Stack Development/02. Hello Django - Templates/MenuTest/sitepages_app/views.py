from django.shortcuts import render
from django.http import HttpResponse
import datetime


def show_home(request):
    now = datetime.datetime.now()
    return render(request, "MenuTest/home.html", {"current_date": now})

def show_about(request):
    return render(request, "MenuTest/about.html")

def show_contact(request):
    return render(request, "MenuTest/contact.html")