from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from . import models, serializers
from bstargram.images import serializers as UserProfile_serializers


class ExploreUsers(APIView):

    def get(self, request, format=None):

        lastest_user = models.User.objects.all().order_by('-date_joined')[:5]

        serializer = serializers.ExploreUserSerializer(lastest_user, many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)


class FollowUsers(APIView):

    def post(self, request, user_id, format=None):

        user = request.user

        try:
            user_to_follow = models.User.objects.get(id=user_id)
        except models.User.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        user.followers.add(user_to_follow)

        user.save()

        return Response(status=status.HTTP_200_OK)


class UnFollowUsers(APIView):

    def post(self, request, user_id, format=None):

        user = request.user

        try:
            user_to_follow = models.User.objects.get(id=user_id)
        except models.User.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        user.followers.remove(user_to_follow)

        user.save()

        return Response(status=status.HTTP_200_OK)


class UserProfile(APIView):

    def get(self, request, user_name, format=None):

        try:
            selected_user = models.User.objects.get(username=user_name)
        except models.User.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = UserProfile_serializers.UserProfileSerializer(selected_user)
        
        return Response(data=serializer.data, status=status.HTTP_200_OK)
