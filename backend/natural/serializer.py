from rest_framework.serializers import ModelSerializer
from .models import SummerizedData
class GetSumSerializer(ModelSerializer):
    class Meta:
        model = SummerizedData
        fields = '__all__'