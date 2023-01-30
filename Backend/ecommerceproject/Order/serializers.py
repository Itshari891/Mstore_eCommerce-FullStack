from rest_framework import serializers
from .models import Order
from product.serializers import ProductListSerializer

class OrderSerializer(serializers.ModelSerializer):
    product=serializers.CharField(read_only=True)
    status=serializers.CharField(read_only=True)
    payment_method=serializers.ChoiceField(choices=Order.payment_options)
    class Meta:
        model=Order
        fields=[
            "id",
            "product",
            "status",
            "ordered_date",
            "billing_address",
            "payment_method"
        ]
        extra_kwargs={
            "billing_address":{"required":True},
        }

class OrderListSerializer(serializers.ModelSerializer):
    product=serializers.CharField(read_only=True)
    status=serializers.CharField(read_only=True)
    payment_method=serializers.CharField(read_only=True)
    product=ProductListSerializer()
    class Meta:
        model=Order
        fields=[
            "id",
            "product",
            "status",
            "ordered_date",
            "billing_address",
            "payment_method"
        ]
        
