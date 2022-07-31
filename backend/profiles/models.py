from django.db import models
from django.contrib.auth.models import AbstractBaseUser , BaseUserManager , PermissionsMixin
# Create your models here.
class ProfileManager(BaseUserManager):
    def create_user(self , email , username ,password = None):
        if not email :
            raise ValueError('email required')
        email = self.normalize_email(email)
        user = self.model(email = email , username = username)
        user.set_password(password)
        user.save(using = self._db)
        return user
    def create_superuser(self , email , username=None, password=None):
        user = self.create_user(email = email,username= username ,password= password)
        user.is_superuser = True
        user.is_staff = True
        user.save(using = self._db)
        return user
class Profile(AbstractBaseUser , PermissionsMixin):
    email = models.EmailField(unique=True , max_length=255)
    username = models.CharField(max_length=40 , null=True)
    objects = ProfileManager()
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    USERNAME_FIELD = 'email'
    def __str__(self):
        return self.email