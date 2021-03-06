from django.conf.urls import url
from . import views

app_name = "images" 
urlpatterns = [
    url(
        regex=r'^$',
        view=views.Images.as_view(),
        name='Feed'
    ),
    url(
        regex=r'^(?P<image_id>[0-9]+)/$',
        view=views.ImageDetail.as_view(),
        name='image_detail'
    ),
    url(
        regex=r'^(?P<image_id>[0-9]+)/likes/$',
        view=views.LikeImage.as_view(),
        name="LikeImage"
    ),
    url(
        regex=r'^(?P<image_id>[0-9]+)/unlikes/$',
        view=views.UnLikeImage.as_view(),
        name="UnLikeImage"
    ),
    url(
        regex=r'^(?P<image_id>[0-9]+)/comments/$',
        view=views.CommentOnImage.as_view(),
        name="CommentImage"
    ),
    url(
        regex=r'^comments/(?P<comment_id>[0-9]+)/$',
        view=views.Comment.as_view(),
        name="comments"
    ),
    url(
        regex=r'^search/$',
        view=views.Search.as_view(),
        name="search"
    ),
    url(
        regex=r'^(?P<image_id>[0-9]+)/comments/(?P<comment_id>[0-9]+)/$',
        view=views.ModerateComment.as_view(),
        name="moderate_comment"
    ),
]
