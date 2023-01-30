from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet
from rest_framework.generics import CreateAPIView,ListAPIView
from .serializers import UserSerializer
from django.contrib.auth import get_user_model
User=get_user_model()
from rest_framework.permissions import IsAdminUser



class SignUpView(CreateAPIView):
    serializer_class=UserSerializer
    queryset=User.objects.all()


class UsersListView(ListAPIView):
    serializer_class=UserSerializer
    queryset=User.objects.all()
    permission_classes=[IsAdminUser]


from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        refresh = self.get_token(self.user)

        # Add extra responses here
        data['jwt']=self.user.is_superuser
        return data


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer