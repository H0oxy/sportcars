from django.views.generic import ListView
from rest_framework.permissions import AllowAny
from rest_framework.viewsets import ModelViewSet

from backend.mainapp.models import Manufacturer, Car
from backend.mainapp.serializers import ManufacturerSerializer, CarSerializer


class ManufacturerList(ListView):
    model = Manufacturer


class CarList(ListView):
    model = Car


class ManufacturerViewSet(ModelViewSet):
    # queryset = Manufacturer.objects.all()
    queryset = Manufacturer.objects.filter(is_active=True)
    serializer_class = ManufacturerSerializer


class CarViewSet(ModelViewSet):
    permission_classes = [AllowAny]
    queryset = Car.objects.all()
    serializer_class = CarSerializer
