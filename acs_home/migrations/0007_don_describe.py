# Generated by Django 3.1.4 on 2021-09-13 23:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('acs_home', '0006_auto_20210913_2345'),
    ]

    operations = [
        migrations.AddField(
            model_name='don',
            name='describe',
            field=models.TextField(default='', max_length=200, verbose_name='description'),
        ),
    ]