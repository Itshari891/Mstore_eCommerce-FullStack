from django.urls import path
from .views import (
    ProductAddView,
    ProductListView,
    ProductDetailView,
    ProductDeleteView,
    ProductEditView,
    ReviewAddView,
    ReviewListView,
    ReviewDetailView
)

urlpatterns=[
    path('products/add',ProductAddView.as_view(),name='add-product'),
    path('products',ProductListView.as_view(),name='list-product'),
    path('products/<str:id>',ProductDetailView.as_view(),name='detail-product'),
    path('products/<str:id>/remove',ProductDeleteView.as_view(),name='remove-product'),
    path('products/<str:id>/edit',ProductEditView.as_view(),name='edit-product'),
    path('products/<str:id>/add_review',ReviewAddView.as_view(),name='add-review'),
    path('my_reviews',ReviewListView.as_view(),name='my-reviews'),
    path('my_reviews/<int:id>',ReviewDetailView.as_view(),name='my-reviews-detail')
]