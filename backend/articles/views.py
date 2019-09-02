from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from backend.articles.models import Article
from backend.articles.permissions import UserIsAuthorOrAdmin
from backend.articles.serializers import ListArticleSerializer, DetailsArticleSerializer


class ArticlesViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all().order_by('-created')

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

    def get_permissions(self) -> list:
        if self.action in ['update', 'destroy', 'partial_update']:
            permission_classes = [UserIsAuthorOrAdmin]
        elif self.action == 'create':
            permission_classes = [IsAuthenticated]
        else:
            permission_classes = []
        return [permission() for permission in permission_classes]

    def get_serializer_class(self):
        if self.action == 'list':
            return ListArticleSerializer
        return DetailsArticleSerializer
