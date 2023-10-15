from rest_framework import serializers
from .models import NewsTopics

class TopicsAllSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsTopics
        fields = '__all__'
        