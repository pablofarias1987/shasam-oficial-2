from django.db import models
from django.conf import settings
User = settings.AUTH_USER_MODEL
from apps.orders.communes import Communes

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    address_line_1 = models.CharField(max_length=255, default='')
    address_line_2 = models.CharField(max_length=255, default='')
    phone = models.CharField(max_length=255, default='')
    commune = models.CharField(
        max_length=255, choices=Communes.choices, default=Communes.Melipilla)

    def __str__(self):
        return self.user
