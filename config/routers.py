from rest_framework.routers import DefaultRouter

from backend.articles.views import ArticlesViewSet
from backend.users.views import UserViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'articles', ArticlesViewSet)

urlpatterns = router.urls
