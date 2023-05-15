from rest_framework import serializers
from .models import *

class SurveySerializer(serializers.HyperLinkedModelSerializer):
    class Meta:
        model = Survey
        fields = ('name','published_on')

class ParticipantSerializer(serializers.HyperLinkedModelSerializer):
    class Meta:
        model = Participant
        fields = ('survey','participation_datetime')

class QuestionSerializer(serializers.HyperLinkedModelSerializer):
    class Meta:
        model = Question
        fields = ('survey','question_text','created_on')

class ChoiceSerializer(serializers.HyperLinkedModelSerializer):
    class Meta:
        model = Choice
        fields = ('question','choice_text','created_on','votes')