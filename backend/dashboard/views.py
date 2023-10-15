from rest_framework import viewsets
from .serializer import TopicsAllSerializer
from rest_framework.permissions import AllowAny
from .models import NewsTopics
# Create your views here.
class TopicsGetAll(viewsets.ModelViewSet):
    serializer_class = TopicsAllSerializer
    http_method_names = ['get']
    # permission_classes = AllowAny
    queryset = NewsTopics.objects.all()

class TopicsCreate(viewsets.ModelViewSet):
    serializer_class = TopicsAllSerializer
    http_method_names = ['post']
    # permission_classes = AllowAny
    queryset = NewsTopics.objects.all()
