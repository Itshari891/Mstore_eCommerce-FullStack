import { Component, OnInit } from '@angular/core';
import { EcommerceService } from 'src/app/services/ecommerce.service';
import {FormGroup,ReactiveFormsModule,FormsModule,Validators,FormControl} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signin=new FormGroup({
    "username": new FormControl('',Validators.required),
    "password":new FormControl('',Validators.required)
  })
  usernameError:any
  passwordError:any
  username:any
  
  constructor(private service:EcommerceService,private router:Router) { }

  ngOnInit(): void {
  }

  signinFunction(){
    if (this.signin.valid) {
    let data=this.signin.value
    this.service.signinService(data).then(res=>res.json()).then(data=>{
      if(data.detail){
        this.usernameError="no user with provided credentials"
      }
      else{
        let accesstoken=data.access
        let token="Bearer "+accesstoken
        let jwt=data.jwt
        console.log(token);
        localStorage.setItem("token",token)
        localStorage.setItem("jwt",jwt)
        localStorage.setItem("user",this.username)
        if (data.jwt==true){
          setTimeout(window.location.href="/admin/dashboard",500)
        }
        else{
          setTimeout(window.location.href="/",500)
        }
        
      } 
    }
    )
  }
  else{
  
      alert('User form is not valid!!')
    
  }
}
}
