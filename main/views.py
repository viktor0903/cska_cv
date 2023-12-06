
from django.shortcuts import render
from django.http import JsonResponse


def cv_page(request):


    return render(request, 'home.html')


def calendar_page(request):
    return render(request, 'calendar.html')


