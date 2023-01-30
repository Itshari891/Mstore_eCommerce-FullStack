from rest_framework import serializers
from . models import Cart
from product.serializers import ProductDetailSerializer

class CartSerializer(serializers.ModelSerializer):
    user = serializers.CharField(read_only=True)
    product = serializers.CharField(read_only=True)
    
    class Meta:
        model=Cart
        fields=[
            "id",
            "user",
            "product",
            "quantity",
            "created_date",
            
        ]

class CartListSerializer(serializers.ModelSerializer):
    user = serializers.CharField(read_only=True)
    product = ProductDetailSerializer()
    
    class Meta:
        model=Cart
        fields=[
            "id",
            "user",
            "product",
            "quantity",
            "created_date", 
        ]
    