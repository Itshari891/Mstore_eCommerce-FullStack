from rest_framework import serializers
from .models import (
    Product,
    Review
)
class ProductAddSerializer(serializers.ModelSerializer):
    class Meta:
        model=Product
        fields="__all__"
        extra_kwargs={
            "name":{"required":True},
            "description":{"required":True},
            "image":{"required":True},
            "price":{"required":True},
            "category":{"required":True}
        }
    
class ProductListSerializer(serializers.ModelSerializer):
    category=serializers.CharField(source="category.name",read_only=True)
    rating=serializers.CharField(read_only=True)
    class Meta:
        model=Product
        fields=[
            "id",
            "name",
            "description",
            "price",
            "image",
            "category",
            "rating"
        ]
        extra_kwargs={
            "name":{"read_only":True},
            "description":{"read_only":True},
            "price":{"read_only":True},
        }


class ProductEditSerializer(serializers.ModelSerializer):
    
    class Meta:
        model=Product
        fields="__all__"
        extra_kwargs={
            
        }
    
class ReviewSerializer(serializers.ModelSerializer):
    user=serializers.CharField(read_only=True)
    class Meta:
        model=Review
        fields=[
            "id",
            "user",
            "title",
            "description",
            "rating"
        ]
        extra_kwargs={
            "description":{"required":True},
            "rating":{"required":True},
        }

class ProductDetailSerializer(serializers.ModelSerializer):
    reviews=ReviewSerializer(many=True,read_only=True)
    rating=serializers.CharField(read_only=True)
    class Meta:
        model=Product
        fields=[
            "id",
            "name",
            "description",
            "price",
            "image",
            "rating",
            "reviews",
            

        ]
        extra_kwargs={
            "name":{"read_only":True},
            "description":{"read_only":True},
            "price":{"read_only":True},
        }

class ReviewListSerializer(serializers.ModelSerializer):
    product=serializers.CharField(read_only=True)
    user=serializers.CharField(read_only=True)
    class Meta:
        model=Review
        fields=[
            "id",
            "user",
            "product",
            "title",
            "description",
            "rating"
        ]
        extra_kwargs={
            "description":{"required":False},
            "rating":{"required":False},
        }
    