from django.shortcuts import render
from .serializers import *
from tasks.models import *
from rest_framework import decorators , response
# Create your views here.
@decorators.api_view(['GET','POST'])
def folderListCreateApiView(request , pk = None) : 
    if request.method == "GET" : 
        print(pk)
        queryset= Folder.objects.filter(profile__id = pk)
        print(queryset)
        serializer = FolderSerializer(queryset , many=True).data
        return response.Response(serializer)
    if request.method == 'POST' : 
        Folder.objects.create(name = request.data.get('name'),profile = Profile.objects.get(pk=pk))
        return response.Response(status=201)
@decorators.api_view(['GET','POST'])
def taskListCreateApiView(request , pk = None) : 
    if request.method == "GET" : 
        print(pk)
        queryset= Task.objects.filter(folder__id = pk)
        serializer = TaskSerializer(queryset , many=True)
        return response.Response(data=serializer.data)
    if request.method == 'POST' : 
        Task.objects.create(title = request.data.get('title'),content = request.data.get('content'),folder = Folder.objects.get(pk=pk))
        return response.Response(status=201)
