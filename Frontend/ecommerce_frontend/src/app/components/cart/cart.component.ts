import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EcommerceService } from 'src/app/services/ecommerce.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart:any
  product:any
  constructor(private service:EcommerceService,private router:Router) { }

  ngOnInit(): void {
    
    this.service.cartListservice().then(res=>res.json()).then(data=>{this.cart=data,console.log(data),this.product=data.product
    })
  }
  placeOrderCartFunction(id:any){
    localStorage.setItem("id",id)
    this.router.navigateByUrl('place-order')
  }
  removeFromCartFunction(id:any){
    this.service.removeFromCartService(id).then(res=>res.json()).then(data=>console.log(data))
    setTimeout(location.reload.bind(location), 1000)
  }
}
