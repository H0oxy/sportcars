from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import gettext_lazy as _
import re


# class PhoneValidator():
#     phone_pattern = re.compile(r"(?:\+7|8)(?:-\d{2,3}){4}")



class UserProfile(AbstractUser):

    GENDER_MALE = 'm'
    GENDER_FEMALE = 'f'
    GENDER_CHOICES = (
        (GENDER_MALE, _('male')),
        (GENDER_FEMALE, _('female')),
    )

    date_birth = models.DateField(_('birth date'), null=True)
    # phone_number = models.CharField(validators=[PhoneValidator])
    gender = models.CharField(_('gender'), max_length=1,
                              choices=GENDER_CHOICES, blank=True)