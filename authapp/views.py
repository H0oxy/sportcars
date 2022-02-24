from django.contrib.auth.views import LoginView
from rest_framework.viewsets import ModelViewSet

from backend.authapp import MyAuthForm
from backend.authapp import UserProfile
from backend.authapp.serializers import UserProfileSerializer


class UserViewSet(ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer


class MyLogin(LoginView):
    template_name = 'authapp/login.html'
    form_class = MyAuthForm
