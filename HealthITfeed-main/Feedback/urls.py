from django.urls import path
from .views import *

urlpatterns = [
    path('<int:pk>/',DetailFeed.as_view()),
    path('', ListFeed.as_view()),
    path('create/', CreateFeed.as_view()),
    path('delete/<int:pk>/', DeleteFeed.as_view())
]