from rest_framework import serializers

from backend.articles.models import Article


class ArticleSerializer(serializers.ModelSerializer):
    text = serializers.SerializerMethodField()

    def get_text(self, obj: Article) -> str:
        return obj.get_cropped_text

    class Meta:
        model = Article
        fields = (
            'id',
            'title',
            'text',
            'author',
            'created',
            'modified',
        )
