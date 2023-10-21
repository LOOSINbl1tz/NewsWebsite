from django.db import models
from dashboard.models import GetNews
# Create your models here.
class SummerizedData(models.Model):
    id = models.TextField(max_length=1000,primary_key=True,unique=True)
    sum_content = models.TextField(max_length=500, null=False)
    news_topic = models.TextField(max_length=500,null=False)