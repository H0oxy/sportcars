from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import gettext_lazy as _
from django.core.validators import RegexValidator
import re


# class PhoneValidator(re.compile(r"(?:\+7|8)(?:-\d{2,3}){4}"))



class UserProfile(AbstractUser):

    GENDER_MALE = 'm'
    GENDER_FEMALE = 'f'
    GENDER_CHOICES = (
        (GENDER_MALE, _('male')),
        (GENDER_FEMALE, _('female')),
    )

#    phone_pattern = RegexValidator(regex=r"(?:\+7|8)(\d{2,3}){4}")
    date_birth = models.DateField(_('birth date'), null=True)
    phone_number = models.CharField #(blank=True, max_length=12, validators=[phone_pattern])
    gender = models.CharField(_('gender'), max_length=1,
                              choices=GENDER_CHOICES, blank=True)

    def __str__(self):
        return f'{self.username}'