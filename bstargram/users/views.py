from rest_auth.registration.views import SocialLoginView
from allauth.socialaccount.providers.facebook.views import FacebookOAuth2Adapter
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

            return Response(status=status.HTTP_400_BAD_REQUEST)

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


class ChangePassword(APIView):

    def put(self, request, user_name, format=None):

        user = request.user

        if user.username == user_name:

            current_password = request.data.get('current_password', None)

            if current_password is not None:

                password_match = user.check_password(current_password)

                if password_match:

                    new_password = request.data.get('new_password', None)

                    if new_password is not None:

                        user.set_password(new_password)

                        user.save()

                        return Response(status=status.HTTP_200_OK)

                    else:

                        return Response(status=status.HTTP_400_BAD_REQUEST)

                else:

                    return Response(status=status.HTTP_400_BAD_REQUEST)

            else:

                return Response(status=status.HTTP_400_BAD_REQUEST)

        else:

            return Response(status=status.HTTP_400_BAD_REQUEST)


class FacebookLogin(SocialLoginView):
    adapter_class = FacebookOAuth2Adapter
