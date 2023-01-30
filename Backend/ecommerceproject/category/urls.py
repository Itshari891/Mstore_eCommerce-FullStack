from django.urls import path
from .views import (
    CategoryAddView,
    CategoryListView,
    CategoryDetailView,
    CategoryDeleteView
)

urlpatterns=[
    path("category/add",CategoryAddView.as_view(),name='category-add'),
    path('category',CategoryListView.as_view(),name='category-list'),
    path('category/<int:id>',CategoryDetailView.as_view(),name='category-detail'),
    path('category/<int:id>/remove',CategoryDeleteView.as_view(),name='category-remove')
]