from django.db import models
from category.models import Category
import uuid
from django.contrib.auth import get_user_model
User=get_user_model()
from django.core.validators import MinValueValidator,MaxValueValidator 
from django.db.models import Avg
# Create your models here.

class Product(models.Model):
    id=models.UUIDField(default=uuid.uuid4,primary_key=True,editable=False)
    name=models.CharField(max_length=100)
    image=models.ImageField(upload_to="product_images")
    description=models.CharField(max_length=300)
    price=models.DecimalField(max_digits=20,decimal_places=2)
    category=models.ForeignKey(Category,related_name='products',on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.name

    def rating(self):
        return self.reviews.aggregate(Avg('rating'))['rating__avg']

class Review(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    product=models.ForeignKey(Product,on_delete=models.CASCADE,related_name='reviews')
    title=models.CharField(max_length=50,blank=True)
    description=models.CharField(max_length=300)
    rating=models.PositiveIntegerField(validators=[MinValueValidator(0),MaxValueValidator(5)])

    def __str__(self) -> str:
        return self.description

#check