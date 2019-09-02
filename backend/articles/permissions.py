from rest_framework.permissions import BasePermission, SAFE_METHODS


class UserIsAuthorOrReadOnly(BasePermission):
    """
    Object-level permission to only allow owners of an object to edit it.
    Assumes the model instance has an `author` attribute.
    """

    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request,
        # so we'll always allow GET, HEAD or OPTIONS requests.
        if request.method in SAFE_METHODS:
            return True

        if hasattr(obj, "author"):
            return obj.author == request.user


class UserIsAuthorOrAdmin(BasePermission):
    def has_permission(self, request, view) -> bool:
        return request.user and request.user.is_authenticated

    def check_object_permission(self, user, obj) -> bool:
        return user and user.is_authenticated and (user.is_staff or obj.author == user)

    def has_object_permission(self, request, view, obj) -> bool:
        return self.check_object_permission(request.user, obj)
