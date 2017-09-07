from django.db import models


class User(models.Model):
    user_fname = models.CharField(max_length=50)
    user_lname = models.CharField(max_length=50)
    user_email = models.EmailField(unique=True)

    def __str__(self):
        return self.user_fname + ' ' + self.user_lname

