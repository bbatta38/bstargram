# Generated by Django 2.0.13 on 2019-03-05 07:13

import bstargram.images.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('notifications', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='notification',
            name='comment',
            field=models.TextField(blank=True, null=True, verbose_name=bstargram.images.models.Comment),
        ),
    ]