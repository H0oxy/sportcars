from django.views.generic import ListView
from rest_framework.viewsets import ModelViewSet

from mainapp.models import Manufacturer, Car
from mainapp.serializers import ManufacturerSerializer, CarSerializer


class ManufacturerList(ListView):
    model = Manufacturer


class CarList(ListView):
    model = Car


class ManufacturerViewSet(ModelViewSet):
    queryset = Manufacturer.objects.all()
    serializer_class = ManufacturerSerializer


class CarViewSet(ModelViewSet):
    queryset = Car.objects.all()
    serializer_class = CarSerializer
