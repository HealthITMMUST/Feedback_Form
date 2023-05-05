from django.db import models

# Create your models here.

class FeedbackT(models.Model):
    name = models.CharField(max_length=100)
    position = models.CharField(max_length=30)
    waiting_time = models.IntegerField()
    lab_courtesy = models.IntegerField()
    querry_response = models.IntegerField()
    lab_reliability = models.IntegerField()
    services_liked = models.TextField()
    services_unliked = models.TextField()
    suggestions = models.TextField()
    
     

