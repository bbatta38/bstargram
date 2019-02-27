from django.db import models
from bstargram.users import models as user_models

# Create your models here.
class TimeStampedModel(models.Model):

  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

  class Meta:
    abstract = True


class Image(TimeStampedModel):

  """ Image Models"""
  file = models.ImageField()
  location = models.CharField(max_length=140)
  caption = models.TextField()
  creator = models.ForeignKey(user_models.User, on_delete=models.CASCADE, null=True)


class Comment(TimeStampedModel):

  """ Comment Models """
  message = models.TextField()
  creator = models.ForeignKey(user_models.User, on_delete=models.CASCADE, null=True)
  image = models.ForeignKey(Image, on_delete=models.CASCADE, null=True)


class Like(TimeStampedModel):

  """ Like Models """
  creator = models.ForeignKey(user_models.User, on_delete=models.CASCADE, null=True)
  image = models.ForeignKey(Image, on_delete=models.CASCADE, null=True)