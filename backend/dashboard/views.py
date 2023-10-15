from rest_framework import viewsets
from .serializer import TopicsAllSerializer, NewsSerializer
from rest_framework.permissions import AllowAny
from .models import NewsTopics, GetNews
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.exceptions import NotFound

# Create your views here.
class TopicsGetAll(viewsets.ModelViewSet):
    serializer_class = TopicsAllSerializer
    http_method_names = ['get']
    # permission_classes = AllowAny
    queryset = NewsTopics.objects.all()

    @action(detail=True, methods=['get'])
    def news(self,request,pk=None):
        try:
            topic_id = NewsTopics.objects.get(pk=pk)
            news_all = GetNews.objects.filter(topic_id=topic_id)
            news_all_serializer = NewsSerializer(news_all, many=True, context = {'request':request})
            return Response(news_all_serializer.data)
        except:
            return Response({
                'Error':NotFound.default_code,
            })

class TopicsCreate(viewsets.ModelViewSet):
    serializer_class = TopicsAllSerializer
    http_method_names = ['post']
    # permission_classes = AllowAny
    queryset = NewsTopics.objects.all()

class NewsGet(viewsets.ModelViewSet):
    serializer_class = NewsSerializer
    http_method_names = ['get','post']
    queryset = GetNews.objects.all()