import json
from rest_framework.viewsets import ModelViewSet
from .serializer import GetSumSerializer
from .models import SummerizedData
from dashboard.models import NewsTopics
from dashboard.serializer import TopicsAllSerializer
from rest_framework.decorators import action
from rest_framework.response import Response

# Create your views here.

# 127.0.0.1:8000/nlp/news/<category>/<id>
class NlpNewsGet(ModelViewSet):
    serializer_class = GetSumSerializer
    http_method_names = ['get']
    queryset = SummerizedData.objects.all()

class NlpCategory(ModelViewSet):
    serializer_class = TopicsAllSerializer
    queryset = NewsTopics.objects.all()
    http_method_names = ['get']

    @action(detail=True,methods=['get'])
    def summerize(self,request,pk=None):
        topic_name = str(NewsTopics.objects.get(pk=pk))
        filtered_news = SummerizedData.objects.filter(news_topic = topic_name)
        sum_dict = {}

        for i in filtered_news:
            sum_dict['id'] = i.id
            sum_dict['data'] = i.sum_content
            sum_dict['topic'] = i.news_topic
            
        return Response(sum_dict)