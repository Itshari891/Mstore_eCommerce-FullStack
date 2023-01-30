import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,ReactiveFormsModule,FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { EcommerceService } from 'src/app/services/ecommerce.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signup=new FormGroup({
    "username":new FormControl('',Validators.required),
    "email":new FormControl('',[Validators.required]),
    "password":new FormControl('',Validators.required),
    "confirm_password":new FormControl('',Validators.required),
  })
  usernameError:any
  emailError:any
  passwordError:any
  value:any
  constructor(private service:EcommerceService,private router:Router) { }

  ngOnInit(): void {
  }

  signupFunction(){
    if (this.signup.valid) {
    let data=this.signup.value
    this.service.registrationService(data).then(res=>res.json()).then(data=>{ 
    if(data.username=="A user with that username already exists."){
        this.usernameError=data.username
    } 
    else if(data.email=="Enter a valid email address."){
      this.emailError=data.email  
    }
    else if(data.password=="password not matching"){
      this.passwordError=data.password
    }
    else{
      this.router.navigateByUrl('signin')
    }
   })
  this.emailError=''
  this.usernameError=''
  this.passwordError=''
  }
  else{
    alert('User form is not valid!!')
  }
}
}
