# Generated by Django 3.1.4 on 2021-09-13 14:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('acs_home', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='adherant',
            name='country',
            field=models.CharField(choices=[('FRANCE', 'FRANCE'), ("Cote d'ivoire", "Cote d'ivoire"), ('Belgique', 'belgique')], max_length=200, verbose_name='pays'),
        ),
    ]