from django.shortcuts import render
from .models import Order
from .serializers import OrderSerializer,OrderListSerializer
from rest_framework.generics import CreateAPIView,ListAPIView,UpdateAPIView
from rest_framework.permissions import IsAuthenticated
from product.models import Product
from rest_framework.response import Response
from rest_framework import status
from cart.models import Cart

class OrderView(CreateAPIView):
    serializer_class=OrderSerializer
    queryset=Order.objects.all()
    permission_classes=[IsAuthenticated]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        user=request.user
        product=Product.objects.get(id=kwargs.get("id"))
        serializer.is_valid(raise_exception=True)
        serializer.save(user=user,product=product)
        cart=user.cart_set.filter(product=product)
        cart.delete()
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data)

class OrderListView(ListAPIView):

    serializer_class=OrderListSerializer
    queryset=Order.objects.all()
    permission_classes=[IsAuthenticated]

    def list(self, request, *args, **kwargs):
        user=request.user
        orders=user.order_set.all()
        serializer=OrderListSerializer(orders,many=True)
        return Response(serializer.data)
    
class OrderCancelView(UpdateAPIView):

    serializer_class=OrderSerializer
    queryset=Order.objects.all()
    permission_classes=[IsAuthenticated]
    lookup_url_kwarg="id"

    def update(self, request, *args, **kwargs):
        try:
            user=request.user
            order=user.order_set.get(id=kwargs.get("id"))
            order.status="order-cancelled"
            order.save()
            serializer=OrderSerializer(order)
            return Response(serializer.data)
        except:
            return Response({"message":"No order with this id"},status=status.HTTP_404_NOT_FOUND)