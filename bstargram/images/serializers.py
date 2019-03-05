from rest_framework import serializers
from . import models
from bstargram.users import models as user_models


class FeedUserSerializer(serializers.ModelSerializer):

  class Meta:
    model = user_models.User
    fields = (
        'username',
        'profile_image',
    )


class CommentSerializer(serializers.ModelSerializer):

  creator = FeedUserSerializer(read_only=True)

  class Meta:
    model = models.Comment
    fields = (
      'id',
      'message',
      'creator',
    )


class LikeSerializer(serializers.ModelSerializer):

  class Meta:
    model = models.Like
    fields = '__all__'


class ImageSerializer(serializers.ModelSerializer):

  comments = CommentSerializer(many=True)
  creator = FeedUserSerializer()

  class Meta:
    model = models.Image
    fields = (
        'id',
        'file',
        'location',
        'caption',
        'comments',
        'likes_count',
        'creator',
    )

class CountImageSerializer(serializers.ModelSerializer):
  class Meta:
    model = models.Image
    fields = (
      'id',
      'file',
      'likes_count',
      'comments_count',
    )


class SmallImageSerializer(serializers.ModelSerializer):

  class Meta:
    model = models.Image
    fields = (
      'file',
    )