from django.contrib import admin
from django.contrib.admin.options import ModelAdmin
from django.db.models import fields
from django.db.models.base import Model

from .models import Activite, Actualite, Don, Adherant
from django.contrib.auth.admin import UserAdmin



class ActiviteAdmin(admin.ModelAdmin):
    class Meta:
        fields = ["title", "describe", "image", "date_add"]


class ActualiteAdmin(admin.ModelAdmin):
    class Meta:
        fields = ["title", "describe", "image", "date_add"]


class DonAdmin(admin.ModelAdmin):
    class Meta:
        fields = ['email', 'name', 'firt_name', 'adress', 'country', 'num_carte','date_add', 'cvv', 'morth', 'years', 'money']


class AdherantAdmin(admin.ModelAdmin):
    class Meta:
        fields = ['email', 'name', 'firt_name', 'adress', 'country', 'phone', 'city', 'payer']




admin.site.register(Don, DonAdmin)
admin.site.register(Activite,ActiviteAdmin)
admin.site.register(Actualite, ActualiteAdmin)
admin.site.register(Adherant, AdherantAdmin)

admin.site.site_header = 'ACS ADMIN'