import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EcommerceService } from 'src/app/services/ecommerce.service';
import { FormGroup,Validators,FormControl } from '@angular/forms'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private service:EcommerceService,private activerouter:ActivatedRoute,private router:Router) { }

  reviewform=new FormGroup({
    "description":new FormControl('',Validators.required),
    "rating":new FormControl('',Validators.required),
    "title": new FormControl('')
  })

  product:any
  reviews:any

  ngOnInit(): void {
    let id=this.activerouter.snapshot.paramMap.get("id")
    this.service.productDetailService(id).then(res=>res.json()).then(data=>{this.product=data ,console.log(data) 
      this.reviews=this.product.reviews
  })
  }

  addToCartFunction(id:any){
    
    let token=localStorage.getItem("token")
    if(token){
      this.service.addToCartService(id).then(res=>res.json()).then(data=>console.log(data))
      setTimeout(window.location.href='cart',1000)
    }
    else{
      this.router.navigateByUrl('signin')
    }
    
  }
  placeorderFunction(id:any){
    let token=localStorage.getItem("token")
    if(token){
    localStorage.setItem("id",id)
    this.router.navigateByUrl('place-order')
    }
    else{
      this.router.navigateByUrl('signin')
    }
  }


  addReviewFunction(id:any){
    let token=localStorage.getItem("token")
    if(token){
    this.service.addReviewService(id,this.reviewform.value).then(res=>res.json()).then(data=>data)
    setTimeout(location.reload.bind(location), 1000)
    }
    else{
      this.router.navigateByUrl('signin')
    }
  }
}

