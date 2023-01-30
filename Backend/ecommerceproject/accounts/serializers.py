from rest_framework import serializers
from django.contrib.auth import get_user_model
User=get_user_model()

class UserSerializer(serializers.ModelSerializer):
    confirm_password=serializers.CharField(write_only=True,required=True)
    class Meta:
        model=User
        fields=[
            "username",
            "email",
            "password",
            "confirm_password"
        ]
        extra_kwargs={
            "email":{"required":True},
            "password":{"write_only":True} 
        }
        
    
    def save(self):
        account=User(
            username=self.validated_data["username"],
            email=self.validated_data["email"]
        )
        password=self.validated_data["password"]
        confirm_password=self.validated_data["confirm_password"]
        if password != confirm_password:
            raise serializers.ValidationError({"password":"password not matching"})
        account.set_password(password)
        account.save()
        return account