from django.contrib import admin

from backend.articles.models import Article


@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    pass
