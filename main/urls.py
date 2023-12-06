
from django.urls import path
from . import views

urlpatterns = [

    path('home/', views.cv_page, name='cv_page'),
    path('calendar/', views.calendar_page, name='calendar_page'),


]
