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
from natural.models import SummerizedData
from natural.text_summerizer import summerizer

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
                news_net = NewsFetcher(topic_name,pk)
                news_net_data = news_net.getNews()
                news_topic_instance  = NewsTopics.objects.get(pk=pk)

                for i in news_net_data:
                    try:
                        data_sum = {}
                        data_sum['id'] = i['article_id']
                        sum_data = i['news_body']
                        sum_data = summerizer(sum_data)
                        data_sum['sum_content'] = sum_data
                        data_sum['news_topic'] = topic_name
                        save_sum_news = SummerizedData(**data_sum)
                        save_sum_news.save()
                    except:
                        raise Exception

                for i in news_net_data:
                    try:
                        save_news = GetNews(topic_id = news_topic_instance,**i)
                        save_news.save()
                    except Exception as e:
                        raise e
                cache.set(topic_name,news_net_data, timeout=21600)

            else:
                news_net_data = cache_data

            return Response(news_net_data)
        
        except ObjectDoesNotExist:
            return Response({
                'Error':NotFound.default_code,
            })
        
        # except Exception as e:
        #     raise SomethingWentWrong

class TopicsCreate(viewsets.ModelViewSet):
    serializer_class = TopicsAllSerializer
    http_method_names = ['post']
    # permission_classes = AllowAny
    queryset = NewsTopics.objects.all()

class NewsGet(viewsets.ModelViewSet):
    serializer_class = NewsSerializer
    http_method_names = ['get','post']
    queryset = GetNews.objects.all()