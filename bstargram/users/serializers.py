from rest_framework import serializers
from . import models
from bstargram.images import serializers as image_serializer

class ListUserSerializer(serializers.ModelSerializer):

  class Meta:
    model = models.User
    fields = (
      'id',
      'username',
      'name',
      'profile_image'
    )


class UserProfileSerializer(serializers.ModelSerializer):

  images = image_serializer.CountImageSerializer(many=True)

  class Meta:
    model = models.User
    fields = (
        'id',
        'username',
        'name',
        'bio',
        'website',
        'profile_image',
        'posts_count',
        'followers_count',
        'following_count',
        'images',

    )
