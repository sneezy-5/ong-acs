# Generated by Django 3.1.4 on 2021-09-14 12:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('acs_home', '0008_don_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='adherant',
            name='code_postal',
            field=models.CharField(default='', max_length=20, verbose_name='code postal'),
        ),
    ]
