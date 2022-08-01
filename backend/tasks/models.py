from django.db import models
from profiles.models import Profile
# Create your models here.
class Folder(models.Model):
    name = models.CharField(max_length=30)
    profile = models.ForeignKey(Profile,related_name='sender',on_delete=models.CASCADE)
class Task(models.Model):
    title = models.CharField(max_length=30)
    folder =models.ForeignKey(Folder ,related_name='folder',on_delete=models.CASCADE)