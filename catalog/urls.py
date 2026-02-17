from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("test1/", views.test_one, name="test_one"),
    path("test2/", views.test_two, name="test_two"),
    path("test3/", views.test_three, name="test_three"),
    path("test4/", views.test_four, name="test_four"),
]
