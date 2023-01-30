from django.db import models
from django.utils.text import slugify
# Create your models here.

class Category(models.Model):
    name=models.CharField(max_length=40,unique=True)
    icon= models.ImageField(upload_to='category_icons')
    class Meta:
        verbose_name_plural = "categories"
    

    def __str__(self) -> str:
        return self.name