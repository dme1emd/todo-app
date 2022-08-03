from django.shortcuts import render
from .serializers import *
from tasks.models import *
from rest_framework import decorators , response
# Create your views here.
@decorators.api_view(['GET','POST'])
def folderListCreateApiView(request , pk = None) : 
    if request.method == "GET" : 
        queryset= Folder.objects.filter(profile__id = pk).order_by('-id')
        serializer = FolderSerializer(queryset , many=True).data
        return response.Response(serializer)
    if request.method == 'POST' : 
        Folder.objects.create(name = request.data.get('name'),profile = Profile.objects.get(pk=pk))
        return response.Response(status=201)
@decorators.api_view(['GET','POST','DELETE','PATCH'])
def taskListCreateApiView(request , pk = None) : 
    if request.method == "GET" : 
        print(pk)
        queryset= Task.objects.filter(folder__id = pk).order_by('-id')
        serializer = TaskSerializer(queryset , many=True)
        return response.Response(data=serializer.data)
    if request.method == 'POST' : 
        Task.objects.create(title = request.data.get('title'),folder = Folder.objects.get(pk=pk))
        return response.Response(status=201)
    if request.method== 'DELETE':
        Task.objects.get(pk=pk).delete()
        return response.Response(status=204)
    if request.method == 'PATCH':
        instance = Task.objects.get(pk=pk)
        print(request.data)
        serializer = TaskSerializer(instance=instance , data=request.data ,partial = True)
        if serializer.is_valid():
            serializer.save()
            return response.Response(status = 200)
        return response.Response(status = 400)
        