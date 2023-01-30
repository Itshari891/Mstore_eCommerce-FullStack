import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EcommerceService } from 'src/app/services/ecommerce.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
products:any
categories:any
  constructor(private service:EcommerceService,private router:Router) { }

  ngOnInit(): void {
    this.service.ProductsService().then(res=>res.json()).then(data=>this.products=data)
    this.service.categoryService().then(res=>res.json()).then(data=>this.categories=data)
  }

  fetchId(id:any){
    this.service.productDetailService(id).then(res=>res.json()).then(data=>console.log(data))
    this.router.navigate(['product/',id])
  }
  addtocartHomeFunction(id:any){
    let token=localStorage.getItem('token')
    if(token){
      this.service.addToCartService(id).then(res=>res.json()).then(data=>console.log(data))
      this.router.navigateByUrl('cart')
    }
    else{
      this.router.navigateByUrl('signin')
    }
  }
  navigateToCategoryFunction(id:any){
    this.service.categoryDetailService(id).then(res=>res.json()).then(data=>data)
    this.router.navigate(['category/',id])
  }  
}
