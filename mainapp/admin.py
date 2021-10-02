from django.contrib import admin

from mainapp.models import Manufacturer, Car

admin.site.register(Manufacturer)
admin.site.register(Car)