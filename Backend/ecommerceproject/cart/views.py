from django.shortcuts import render
from .models import Cart
from .serializers import CartSerializer,CartListSerializer
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import DestroyAPIView,ListAPIView
from product.models import Product
from rest_framework.views import APIView
from rest_framework.status import HTTP_404_NOT_FOUND


class CartAddView(APIView):
    permission_classes=[IsAuthenticated]

    def post(self,request,*args,**kwargs):
        serializer=CartSerializer(data=request.data)
        id=kwargs.get("id")
        product=Product.objects.get(id=id)
        user=request.user
        serializer.is_valid(raise_exception=True)  
        try:
             cart=Cart.objects.get(product=product,user=user)
             cart.quantity+=1
             cart.save()
             data={"message":"success"}
             return Response(data)

        except:
            serializer.save(user=user,product=product)
            return Response(serializer.data)


class CartListView(ListAPIView):

    serializer_class=CartListSerializer
    permission_classes=[IsAuthenticated]
    
    def get_queryset(self):
        user=self.request.user
        cart=user.cart_set.all()
        return cart

class CartRemoveView(DestroyAPIView):
    serializer_class=CartSerializer
    permission_classes=[IsAuthenticated]
    lookup_url_kwarg="id"
    
    def delete(self, request, *args, **kwargs):
        id=kwargs.get("id")
        try:
            user=request.user
            cartitem=user.cart_set.get(id=id)
            cartitem.delete()
            return Response({"message":"item removed successfully"})
        except:
            return Response({
                "message":"no such item"
            },status=HTTP_404_NOT_FOUND)