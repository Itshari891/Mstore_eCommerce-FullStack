from django.urls import path
from .views import (
    CartAddView,
    CartListView,
    CartRemoveView
)

urlpatterns=[
    path('products/<str:id>/add_to_cart',CartAddView.as_view(),name='add-to-cart'),
    path('cart',CartListView.as_view(),name='cart'),
    path('cart/<int:id>',CartRemoveView.as_view(),name='cart-item-remove'),
]