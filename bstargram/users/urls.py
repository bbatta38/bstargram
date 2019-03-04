from django.conf.urls import url
from . import views

app_name = "users"
urlpatterns = [
    url(
        regex = r"^explore/$",
        view = views.ExploreUsers.as_view(),
        name="exploreusers",
    ),
    url(
        regex = r"^(?P<user_id>[0-9]+)/follow/$",
        view=views.FollowUsers.as_view(),
        name="follow_users",
    ),
    url(
        regex=r"^(?P<user_id>[0-9]+)/unfollow/$",
        view=views.UnFollowUsers.as_view(),
        name="unfollow_users",
    ),
    url(
        regex=r"^(?P<user_name>\w+)/$",
        view=views.UserProfile.as_view(),
        name="user_profile",
    ),
    url(
        regex=r"^(?P<user_name>\w+)/followers/$",
        view=views.UserFollowers.as_view(),
        name="user_followers",
    ),
    url(
        regex=r"^(?P<user_name>\w+)/following/$",
        view=views.UserFollowing.as_view(),
        name="user_following",
    ),
]
