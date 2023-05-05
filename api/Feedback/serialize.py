from rest_framework import serializers
from .models import *

class FeedSerializer(serializers.ModelSerializer):
    class Meta:
        model = FeedbackT
        fields = ('name','position','waiting_time','lab_courtesy','querry_response','lab_reliability','services_liked','services_unliked','suggestions')