from rest_framework.serializers import ModelSerializer

from backend.mainapp.models import Manufacturer, Car


class ManufacturerSerializer(ModelSerializer):
    class Meta:
        model = Manufacturer
        fields = '__all__'


class CarSerializer(ModelSerializer):
    class Meta:
        model = Car
        fields = '__all__'


