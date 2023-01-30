from rest_framework import serializers
from .models import Category
from product.serializers import ProductListSerializer

class CategorySerializer(serializers.ModelSerializer):
   
    class Meta:
        model=Category
        fields=[
            "id",
            "name",
            "icon",
            
        ]
        extra_kwargs={
            "name":{"required":True},
            "icon":{"required":True}
        }

class CategoryDetailSerializer(serializers.ModelSerializer):
    products=ProductListSerializer(many=True,read_only=True)
    class Meta:
        model=Category
        fields=[
            "id",
            "name",
            "icon",
            "products"
        ]
        