from django.shortcuts import render
from rest_framework import generics
from .serialize import *
from .models import *

# Create your views here.

class ListFeed(generics.ListAPIView):
    queryset = FeedbackT.objects.all()
    serializer_class = FeedSerializer

class DetailFeed(generics.RetrieveAPIView):
    queryset = FeedbackT.objects.all()
    serializer_class = FeedSerializer

class CreateFeed(generics.CreateAPIView):
    queryset = FeedbackT.objects.all()
    serializer_class = FeedSerializer
    
class DeleteFeed(generics.DestroyAPIView):
    queryset = FeedbackT.objects.all()
    serializer_class = FeedSerializer