from rest_framework import serializers
from taggit_serializer.serializers import (TagListSerializerField, TaggitSerializer)
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


class ImageSerializer(TaggitSerializer, serializers.ModelSerializer):

    comments = CommentSerializer(many=True)
    creator = FeedUserSerializer()

    tags = TagListSerializerField()
    is_liked = serializers.SerializerMethodField()

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
            'natural_time',
            'tags',
            'is_liked'
        )

    def get_is_liked(self, obj):
        if 'request' in self.context:
            request = self.context['request']
            try:
                models.Like.objects.get(creator__id=request.user.id, image__id=obj.id)
                return True
            except:
                return False
        else:
            return False


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


class InputImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Image
        fields = (
            'file',
            'location',
            'caption',
        )
