from account.models import Account
from typing import FrozenSet
from django.db import models
from django.contrib.auth.models import User

from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.core.files.storage import FileSystemStorage
from django.conf import settings
import os
from django.db.models.signals import post_save
from django.dispatch import receiver

TITLE_MORTH = [
    ('JANVIER', 'JANVIER'),
    ('FEVRIER', 'Fevrier'),
    ('MARS', 'Mars'),
    ('AVRIL', 'Avril'),
    ('MAI', 'Mai'),
    ('JUIN', 'Juin'),
    ('JUILLER', 'Juiller'),
    ('AOUT', 'Aout'),
    ('SEPTEMBRE', 'Septembre'),
    ('OCTOBRE', 'Octobre'),
    ('NOVEMBRE', 'Novembre'),
    ('DECEMBRE', 'Decembre'),
]


TITLE_YAERS = [
    ("DEFAULT", "CHOICE"),
    (2020, 2002),
    (2021, 2021),
    (2022, 2022),
    (2023, 2023),
    (2024, 2024),
    (2025, 2025),
 
]


TITLE_CI = [
    ('CIVILITE', 'CIVILITE'),
    ('Mr', 'M.'),
    ('MM', 'Mm.'),
    ('MLLE', 'Mlle.'),
   
]


TITLE_C = [
    ('PAYS', 'PAYS'),
    ('France', 'France'),
    ('Cote d\'ivoire', 'Cote d\'ivoire'),
    ('Belgique', 'belgique'),
   
]
# Activity model
class Activite(models.Model):
    title = models.CharField('titre', max_length=200)
    describe = models.TextField('description', max_length=200)
    image = models.ImageField(null=True, blank=True, upload_to="activity_image/")
    date_add = models.DateField('date ajout')

#actuality 
class Actualite(models.Model):
    title = models.CharField('titre', max_length=200)
    describe = models.TextField('description', max_length=200)
    image = models.ImageField(null=True, blank=True, upload_to="actu_image/")
    date_add = models.DateField('date ajout')


class Don(models.Model):
    email = models.EmailField('email', max_length=200) 
    name = models.CharField('nom', max_length=200)
    firt_name = models.CharField('prenom', max_length=200)
    adress = models.CharField('adress', max_length=200)
    country = models.CharField('pays', max_length=200)
    date_add = models.DateField('date ajout',auto_now_add=True)
    civilite = models.CharField('civilité', max_length=200, choices=TITLE_CI, default="")
    money = models.IntegerField('somme payer')
    image = models.ImageField(null=True, blank=True, upload_to="don_image/")
    describe = models.TextField('description', max_length=200, default="")


class Adherant(models.Model):
    email = models.EmailField('email', max_length=200)
    name = models.CharField('nom', max_length=200)
    firt_name = models.CharField('prenom', max_length=200)
    adress = models.CharField('adress', max_length=200)
    country = models.CharField('pays', max_length=200, choices=TITLE_C, default="")
    city = models.CharField('ville', max_length=100, default="")
    phone =models.IntegerField('annee telephone', default=0)
    civilite = models.CharField('civilité', max_length=200, choices=TITLE_CI, default="")
    payer = models.BooleanField(default=False)
    code_postal = models.CharField('code postal', max_length=20, default='')







"""@receiver(post_save, sender=Account)
def user_save(sender, instance, **kwargs):
    #FriendList.objects.get_or_create(user=instance)"""