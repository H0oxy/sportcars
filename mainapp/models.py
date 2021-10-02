from django.db import models


class Manufacturer(models.Model):
    name = models.CharField(max_length=128, unique=True)

    def __str__(self):
        return f'{self.name}'

    class Meta:
        verbose_name = 'Производитель'
        verbose_name_plural = 'Производители'


class Car(models.Model):
    car_brand = models.ForeignKey(Manufacturer, on_delete=models.CASCADE)
    model = models.CharField(max_length=128)
    max_speed = models.CharField(max_length=4, default=0)
    price = models.CharField(verbose_name='цена', max_length=11, default=0)
    release_date = models.DateTimeField(auto_now_add=True)
    desc = models.TextField(blank=True)

    def __str__(self):
        return f'{self.car_brand}: {self.model}'

    class Meta:
        verbose_name = 'Автомобиль'
        verbose_name_plural = 'Автомобили'
