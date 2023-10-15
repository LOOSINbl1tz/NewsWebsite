from rest_framework import serializers
from .models import NewsTopics, GetNews

class TopicsAllSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsTopics
        fields = '__all__'

class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = GetNews
        fields = '__all__'

        