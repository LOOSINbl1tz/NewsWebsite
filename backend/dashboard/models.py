from django.db import models

# Create your models here.

class NewsTopics(models.Model):
    topic_name = models.CharField(max_length=255,unique=True)

    def __str__(self) -> str:
        return self.topic_name

class GetNews(models.Model):
    topic_id = models.ForeignKey(NewsTopics,on_delete=models.CASCADE)
    article_id = models.CharField(max_length=500,unique=True,null=True)
    news_title = models.CharField(max_length=255)
    news_body = models.TextField(max_length=10000)
    date_time = models.DateTimeField(auto_now_add=True)
    link = models.URLField(null=True)
    creator = models.CharField(max_length=500,null=True) 