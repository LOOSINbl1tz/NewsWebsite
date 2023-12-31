from django.contrib import admin
from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import TopicsGetAll,TopicsCreate,NewsGet
router = DefaultRouter()
router.register('readtopics',viewset=TopicsGetAll,basename='getTopics')
router.register('createtopics',viewset=TopicsCreate,basename='createTopics')
router.register('getnews',viewset=NewsGet,basename='getNews')

urlpatterns = [
    path('', include(router.urls)),
]