from django.conf import settings
from django.conf.urls import url
from django.contrib import admin
from django.urls import include, path
from rest_framework_jwt.views import refresh_jwt_token, obtain_jwt_token

from .routers import urlpatterns as api_urlpatterns
from rest_framework import permissions

urlpatterns = [
    path("api/v1/", include(api_urlpatterns)),
    path(settings.ADMIN_URL, admin.site.urls),
    path("api/v1/auth/", include('rest_auth.urls')),
    path("api/v1/auth/registration/", include('rest_auth.registration.urls')),
    path("api/v1/auth/refresh_token/", refresh_jwt_token),
    path("api/v1/auth/obtain_token/", obtain_jwt_token),

]

if settings.DEBUG:
    from drf_yasg.views import get_schema_view
    from drf_yasg import openapi

    schema_view = get_schema_view(
        openapi.Info(
            title="API",
            default_version='v0.1',
        ),
        public=True,
        permission_classes=(permissions.AllowAny,),
    )

    urlpatterns += [
        url(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
        url(r'^swagger/$', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
        url(r'^redoc/$', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    ]
