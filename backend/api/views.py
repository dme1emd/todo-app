from django.shortcuts import render
from .serializers import *
from tasks.models import *
from rest_framework import decorators , response
# Create your views here.
@decorators.api_view(['GET','POST','DELETE'])
def folderListCreateApiView(request , pk = None) : 
    if request.method == "GET" : 
        queryset= Folder.objects.filter(profile__id = pk).order_by('-id')
        serializer = FolderSerializer(queryset , many=True).data
        return response.Response(serializer)
    if request.method == 'POST' : 
        Folder.objects.create(name = request.data.get('name'),profile = Profile.objects.get(pk=pk))
        return response.Response(status=201)
    if request.method == 'DELETE':
        Folder.objects.get(pk=pk).delete()
        return response.Response(status=200)
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
        serializer = TaskSerializer(instance=instance , data=request.data ,partial = True)
        if serializer.is_valid():
            serializer.save()
            return response.Response(status = 200)
        return response.Response(status = 400)
@decorators.api_view(['POST'])
def ProfileCreate(request,pk=None):
    if request.method == 'POST':
        email = request.data.get("email")
        password = request.data.get("password")
        username = request.data.get("username")
        if Profile.objects.filter(email = email) :
            return response.Response(status=409)
        Profile.objects.create_user(email = email ,username = username,password = password)
        return response.Response(status=200)