from rest_framework.routers import DefaultRouter

from backend.users.views import UserViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet)

urlpatterns = router.urls
