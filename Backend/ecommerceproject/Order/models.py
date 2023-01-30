from django.db import models
from product.models import Product
from django.contrib.auth import get_user_model
User=get_user_model()
# Create your models here.

class Order(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    product=models.ForeignKey(Product,on_delete=models.CASCADE)
    options=(
        ("order-placed","order-placed"),
        ("on-transit","on-transit"),
        ("order-cancelled","order-cancelled"),
        ("order-delivered","order-delivered")
    )
    status=models.CharField(max_length=30,choices=options,default="order-placed")
    ordered_date=models.DateTimeField(auto_now_add=True)
    billing_address=models.CharField(max_length=300,default="address")
    payment_options=(
        ("Paypal","Paypal"),
        ("cash-on-delivery","cash-on-delivery"),
        ("bank-Transfer","bank-Transfer")
    )
    payment_method=models.CharField(max_length=50,choices=payment_options,default="Paypal")

    def __str__(self) -> str:
        return self.product.name