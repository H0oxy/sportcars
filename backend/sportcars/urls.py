from django.contrib import admin
from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

import backend.authapp.views as authapp
from backend import mainapp as mainapp

router = DefaultRouter()
router.register('users', authapp.UserViewSet)
router.register('manufacturer', mainapp.ManufacturerViewSet)
router.register('car', mainapp.CarViewSet)

urlpatterns = [
    path('', mainapp.ManufacturerList.as_view()),
    path('manufacturer/car/', mainapp.CarList.as_view()),

    path('auth/login', authapp.MyLogin.as_view(), name='login'),
    path('api-token-auth/', obtain_auth_token),

    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('api/', include(router.urls)),

    path('admin/', admin.site.urls),
]