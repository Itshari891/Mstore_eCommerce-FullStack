from django.urls import path
from accounts.views import ( 
    SignUpView,
    UsersListView,
    MyTokenObtainPairView
)
from rest_framework_simplejwt.views import (
   
    TokenRefreshView,
)

    
urlpatterns=[
    path("signup",SignUpView.as_view(),name='signup'),
    path('signin', MyTokenObtainPairView.as_view(), name='signin'),
    path('refresh', TokenRefreshView.as_view(), name='token_refresh'),
    path('users',UsersListView.as_view(),name='all-users'),
]