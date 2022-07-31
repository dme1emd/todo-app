from pyexpat import model
from attr import fields
from rest_framework import serializers
from tasks.models import *
class FolderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Folder
        fields = '__all__'
class TaskSerializer(serializers.ModelSerializer):
    class Meta : 
        model = Task
        fields = '__all__'