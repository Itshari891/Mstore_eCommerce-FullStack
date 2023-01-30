from django.shortcuts import render
from rest_framework.generics import (
    CreateAPIView,
    ListAPIView,
    RetrieveAPIView,
    DestroyAPIView,
    UpdateAPIView,
    RetrieveUpdateDestroyAPIView,
)
from rest_framework.response import Response
from .models import (
    Product,
    Review
)
from . serializers import (
    ProductAddSerializer,
    ProductListSerializer,
    ProductEditSerializer,
    ReviewSerializer,
    ProductDetailSerializer,
    ReviewListSerializer
)
from rest_framework.permissions import (
    IsAdminUser,
    IsAuthenticated
)
# Create your views here.

class ProductAddView(CreateAPIView):
    serializer_class=ProductAddSerializer
    queryset=Product.objects.all()
    permission_classes=[IsAdminUser]

    def perform_create(self,serializer):
        category=serializer.validated_data["category"]
        serializer.save(category=category)
    
class ProductListView(ListAPIView):
    serializer_class=ProductListSerializer
    queryset=Product.objects.all()

class ProductDetailView(RetrieveAPIView):
    serializer_class=ProductDetailSerializer
    queryset=Product.objects.all()
    lookup_url_kwarg="id"

class ProductDeleteView(DestroyAPIView):
    serializer_class=ProductListSerializer
    queryset=Product.objects.all()
    lookup_url_kwarg="id"
    permission_classes=[IsAdminUser]
    
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response({"message":"deleted"})

class ProductEditView(UpdateAPIView):

    serializer_class=ProductEditSerializer
    queryset=Product.objects.all()
    permission_classes=[IsAdminUser]
    lookup_url_kwarg='id'



"""----------------Review Views---------------------"""
class ReviewAddView(CreateAPIView):
    serializer_class=ReviewSerializer
    permission_classes=[IsAuthenticated]
    queryset=Review.objects.all()

    def create(self, request, *args, **kwargs):
        serializer=ReviewSerializer(data=request.data)
        user=request.user
        product=Product.objects.get(id=kwargs.get("id"))
        serializer.is_valid(raise_exception=True)
        serializer.save(user=user,product=product)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data)
    
class ReviewListView(ListAPIView):

    serializer_class=ReviewListSerializer
    permission_classes=[IsAuthenticated]
    

    def get_queryset(self):
        user=self.request.user
        reviews=user.review_set.all()
        return reviews

class ReviewDetailView(RetrieveUpdateDestroyAPIView):

    serializer_class=ReviewListSerializer
    permission_classes=[IsAuthenticated]
    lookup_url_kwarg="id"
    

    def get_queryset(self):
        user=self.request.user
        reviews=user.review_set.all()
        return reviews