from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import NlpNewsGet, NlpCategory
router = DefaultRouter()
router.register('news',viewset=NlpNewsGet, basename='processnews')
router.register('category',viewset= NlpCategory,basename='category')
urlpatterns = [
    path('', include(router.urls)),
]