from django.shortcuts import render
from rest_framework.generics import ListAPIView,CreateAPIView,RetrieveAPIView,RetrieveUpdateAPIView,DestroyAPIView
# Create your views here.
from .models import Category
from .serializers import CategorySerializer,CategoryDetailSerializer
from rest_framework.permissions import IsAdminUser,IsAuthenticated


class CategoryAddView(CreateAPIView):
    serializer_class=CategorySerializer
    queryset=Category.objects.all()
    permission_classes=[IsAdminUser]

class CategoryListView(ListAPIView):
    serializer_class=CategorySerializer
    queryset=Category.objects.all()

 
    

class CategoryDetailView(RetrieveUpdateAPIView):
    lookup_url_kwarg="id"
    serializer_class=CategoryDetailSerializer
    queryset=Category.objects.all()
    
class CategoryDeleteView(DestroyAPIView):
    serializer_class=CategoryDetailSerializer
    permission_classes=[IsAdminUser]
    lookup_url_kwarg="id"
    queryset=Category.objects.all()
