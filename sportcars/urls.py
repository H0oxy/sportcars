from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter

import authapp.views as authapp
import mainapp.views as mainapp

router = DefaultRouter()
router.register('users', authapp.UserViewSet)
router.register('manufacturer', mainapp.ManufacturerViewSet)
router.register('car', mainapp.CarViewSet)

urlpatterns = [
    path('', mainapp.ManufacturerList.as_view()),
    path('manufacturer/car/', mainapp.CarList.as_view()),

    path('api/', include(router.urls)),

    path('admin/', admin.site.urls),
]