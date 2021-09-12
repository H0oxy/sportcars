from django.db import models

from authapp.models import UserProfile


class Project(models.Model):
    name = models.CharField(max_length=128, unique=True)
    owner = models.ForeignKey('authapp.UserProfile', on_delete=models.PROTECT)
    desc = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    members = models.ManyToManyField('authapp.UserProfile', related_name='proj_members')

    def __str__(self):
        return f'{self.name}'


class ProjectTask(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    title = models.CharField(max_length=128)
    text = models.TextField()
    author = models.ForeignKey('authapp.UserProfile', on_delete=models.CASCADE)
    executors = models.ManyToManyField('authapp.UserProfile', related_name='proj_executors')
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    status = models.BooleanField(default=False)

    def __str__(self):
        return f'{self.project}: {self.title}'


class Manufacturer(models.Model):
    name = models.CharField(max_length=128, unique=True)

    def __str__(self):
        return f'{self.name}'



class Car(models.Model):
    car_brand = models.ForeignKey(Manufacturer, on_delete=models.CASCADE)
    model = models.CharField(max_length=128)
    max_speed = models.DecimalField(max_digits=3, decimal_places=2, default=0)
    price = models.DecimalField(verbose_name='цена', max_digits=7, decimal_places=2, default=0)
    release_date = models.DateTimeField(auto_now_add=True)
    desc = models.TextField(blank=True)

    def __str__(self):
        return f'{self.car_brand}: {self.model}'