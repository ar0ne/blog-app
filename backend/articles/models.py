from ckeditor.fields import RichTextField
from django.contrib.auth.models import User
from django.db import models
from django.db.models import ForeignKey, CASCADE
from django.utils.html import strip_tags
from django.utils.translation import ugettext_lazy as _
from model_utils.models import TimeStampedModel


class Article(TimeStampedModel):
    MAX_PREVIEW_TEXT_LENGTH = 250
    MAX_PREVIEW_TITLE_LENGTH = 45

    title = models.CharField(max_length=150)
    text = RichTextField()
    author = ForeignKey(
        User,
        verbose_name=_("Author"),
        related_name="articles",
        on_delete=CASCADE,
    )

    @property
    def get_cropped_text(self):
        cropped_text = strip_tags(self.text).replace('\n', ' ').replace('\r', '').strip()
        if len(cropped_text) > Article.MAX_PREVIEW_TEXT_LENGTH:
            cropped_text = cropped_text[:Article.MAX_PREVIEW_TEXT_LENGTH]
        return f"{cropped_text}..."

    def __str__(self) -> str:
        return self.title[:Article.MAX_PREVIEW_TITLE_LENGTH] + (
            "..." if len(self.title) > Article.MAX_PREVIEW_TITLE_LENGTH else "")
