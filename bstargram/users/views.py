from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from . import models, serializers
from bstargram.notifications import views as notification_views


class ExploreUsers(APIView):

    def get(self, request, format=None):

        lastest_user = models.User.objects.all().order_by('-date_joined')[:5]

        serializer = serializers.ListUserSerializer(lastest_user, many=True)

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

        notification_views.create_notification(user, user_to_follow, 'follow')

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

    def get_user(self, user_name):

        try:
            selected_user = models.User.objects.get(username=user_name)
            return selected_user
        except models.User.DoesNotExist:
            return None

    def get(self, request, user_name, format=None):

        selected_user = self.get_user(user_name)

        if selected_user is None:

            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = serializers.UserProfileSerializer(selected_user)
        
        return Response(data=serializer.data, status=status.HTTP_200_OK)


    def put(self, request, user_name, format=None):

        user = request.user

        selected_user = self.get_user(user_name)

        if selected_user is None:

            return Response(status=status.HTTP_404_NOT_FOUND)
        
        elif selected_user != user:

            return Response(status=status.HTTP_401_UNAUTHORIZED)

        else:
            serializer = serializers.UserProfileSerializer(selected_user, data=request.data, partial=True)

            if serializer.is_valid():

                serializer.save()

                return Response(data=serializer.data, status=status.HTTP_200_OK)
            
            else:

                return Response(status=status.HTTP_400_BAD_REQUEST)


class UserFollowers(APIView):

    def get(self, request, user_name, format=None):

        try:
            selected_user = models.User.objects.get(username=user_name)
        except models.User.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        follower_users = selected_user.followers.all()

        serializer = serializers.ListUserSerializer(follower_users, many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)


class UserFollowing(APIView):

    def get(self, request, user_name, format=None):

        try:
            selected_user = models.User.objects.get(username=user_name)
        except models.User.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        following_users = selected_user.followings.all()

        serializer = serializers.ListUserSerializer(following_users, many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)


class Search(APIView):

    def get(self, request, format=None):

        username = request.query_params.get('username')

        if username is not None:

            users = models.User.objects.filter(username__icontains=username)

            serializer = serializers.ListUserSerializer(users, many=True)

            return Response(data=serializer.data, status=status.HTTP_200_OK)
        
        else:

            return Response(status=status.HTTP_400_BAD_REQUEST)
