from django.conf.urls import url
from . import views

app_name = "images" 
urlpatterns = [
    url(
        regex=r'^$',
        view=views.Feed.as_view(),
        name='Feed'
    ),
    url(
        regex=r'(?P<image_id>[0-9]+)/like/',
        view=views.LikeImage.as_view(),
        name="LikeImage"
    )
]
