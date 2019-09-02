from rest_framework import viewsets

from backend.articles.models import Article
from backend.articles.serializers import ArticleSerializer


class ArticlesViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all().order_by('-created')
    serializer_class = ArticleSerializer
