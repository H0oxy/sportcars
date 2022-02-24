from django.contrib import admin

from backend.mainapp.models import Manufacturer, Car

admin.site.register(Manufacturer)
admin.site.register(Car)