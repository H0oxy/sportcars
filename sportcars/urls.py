from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter

import authapp.views as authapp
import mainapp.views as mainapp

router = DefaultRouter()
router.register('users', authapp.UserViewSet)
router.register('projects', mainapp.ProjectViewSet)
router.register('project-tasks', mainapp.ProjectTaskViewSet)

urlpatterns = [
    path('', mainapp.ProjectList.as_view()),
    path('project/tasks/', mainapp.ProjectTaskList.as_view()),

    path('api/', include(router.urls)),

    path('admin/', admin.site.urls),
]