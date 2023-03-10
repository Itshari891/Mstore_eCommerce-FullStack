# Generated by Django 4.0.6 on 2023-01-18 06:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Order', '0003_alter_order_payment_method'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='payment_method',
            field=models.CharField(choices=[('order-placed', 'order-placed'), ('on-transit', 'on-transit'), ('order-cancelled', 'order-cancelled'), ('order-delivered', 'order-delivered')], max_length=50),
        ),
    ]
