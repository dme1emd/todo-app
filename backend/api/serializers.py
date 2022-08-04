from pyexpat import model
from attr import fields
from rest_framework import serializers
from tasks.models import *
from profiles.models import Profile
class FolderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Folder
        fields = '__all__'
class TaskSerializer(serializers.ModelSerializer):
    class Meta : 
        model = Task
        fields = '__all__'
class ProfileSerializer(serializers.ModelSerializer):
    class Meta :
        model = Profile
        fields = ['email','password']