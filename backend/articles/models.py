from ckeditor.fields import RichTextField
from django.db import models
from model_utils.models import TimeStampedModel


class Article(TimeStampedModel):
    title = models.CharField(max_length=150)
    text = RichTextField()

    def __str__(self) -> str:
        return self.title[:45] + ("..." if len(self.title) > 45 else "")
