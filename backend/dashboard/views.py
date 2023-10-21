from rest_framework import viewsets
from .serializer import TopicsAllSerializer, NewsSerializer
from rest_framework.permissions import AllowAny
from .models import NewsTopics, GetNews
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from .news_api_call import NewsFetcher
from django.core.cache import cache
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.exceptions import APIException

class SomethingWentWrong(APIException):
    status_code = 504
    default_detail = 'Oops! Something went wrong.'


# Create your views here.
class TopicsGetAll(viewsets.ModelViewSet):
    serializer_class = TopicsAllSerializer
    http_method_names = ['get']
    # permission_classes = AllowAny
    queryset = NewsTopics.objects.all()

    @action(detail=True, methods=['get'])
    def news(self,request,pk=None):
        try:
            topic_name = str(NewsTopics.objects.get(pk=pk))
            cache_data = cache.get(topic_name)
            news_net_data = None
            
            if cache_data is None:
                news_net = NewsFetcher(topic_name)
                news_net_data = news_net.getNews()
                # save_data = {''}
                
                # save_news = GetNews()
                
                # save_news.save(news_net_data)
                cache.set(topic_name,news_net_data, timeout=21600)

            else:
                news_net_data = cache_data

            return Response(news_net_data)
        
        except ObjectDoesNotExist:
            return Response({
                'Error':NotFound.default_code,
            })
        
        except Exception as e:
            raise SomethingWentWrong

class TopicsCreate(viewsets.ModelViewSet):
    serializer_class = TopicsAllSerializer
    http_method_names = ['post']
    # permission_classes = AllowAny
    queryset = NewsTopics.objects.all()

class NewsGet(viewsets.ModelViewSet):
    serializer_class = NewsSerializer
    http_method_names = ['get','post']
    queryset = GetNews.objects.all()