# Generated by Django 3.2 on 2021-04-25 05:19

from django.db import migrations, models


class Migration(migrations.Migration):
    atomic = False

    dependencies = [
        ('musicapp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='artist',
            name='title',
            field=models.CharField(max_length=255, unique=True),
        ),
    ]
