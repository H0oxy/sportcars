from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import gettext_lazy as _



class UserProfile(AbstractUser):

    GENDER_MALE = 'm'
    GENDER_FEMALE = 'f'
    GENDER_CHOICES = (
        (GENDER_MALE, _('male')),
        (GENDER_FEMALE, _('female')),
    )

    date_birth = models.DateField(_('birth date'), null=True)
    gender = models.CharField(_('gender'), max_length=1,
                              choices=GENDER_CHOICES, blank=True)

    def __str__(self):
        return f'{self.username}'