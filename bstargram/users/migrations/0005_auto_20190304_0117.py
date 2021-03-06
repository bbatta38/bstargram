# Generated by Django 2.0.13 on 2019-03-04 01:17

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_user_profile_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='followers',
            field=models.ManyToManyField(null=True, related_name='_user_followers_+', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='user',
            name='followings',
            field=models.ManyToManyField(null=True, related_name='_user_followings_+', to=settings.AUTH_USER_MODEL),
        ),
    ]
