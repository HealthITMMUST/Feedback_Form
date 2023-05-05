from django.db import models
from django.utils import timezone
import datetime


class Survey(models.Model):
    """Class to encapsulate Survey entity
    Attributes:
        name: character field with max_length=200
        published_on: datetime field

    """
    name = models.CharField(max_length=200)
    published_on = models.DateTimeField('Published DateTime')

    def __str__(self):
        return self.name

    def was_published_recently(self):
        now = timezone.now()
        return now - datetime.timedelta(days=1) <= self.published_on <= now

    was_published_recently.admin_order_field = 'published_on'
    was_published_recently.boolean = True
    was_published_recently.short_description = 'Published recently?'


class Participant(models.Model):
    """Class to encapsulate Participant entity
    Attributes:
        survey: foreign key to Survey
        participation_datetime: datetime field

    """
    survey = models.ForeignKey(Survey, on_delete=models.CASCADE)
    participation_datetime = models.DateTimeField('Participation DateTime')

    def __str__(self):
        return "Participant "+str(self.participation_datetime)


class Question(models.Model):
    """Class to encapsulate Participant entity
    Attributes:
        survey: foreign key to Survey
        question_text: character field with max_length=200
        created_on: datetime field

    """
    survey = models.ForeignKey(Survey, on_delete=models.CASCADE)
    question_text = models.CharField(max_length=200)
    created_on = models.DateTimeField('Creation DateTime')

    def __str__(self):
        return self.question_text


class Choice(models.Model):
    """Class to encapsulate Participant entity
    Attributes:
        survey: foreign key to Question
        choice_text: character field with max_length=200
        created_on: datetime field
        votes: number with default 0

    """
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    created_on = models.DateTimeField('Creation DateTime')
    votes = models.IntegerField(default=0)

    def __str__(self):
        return self.choice_text
