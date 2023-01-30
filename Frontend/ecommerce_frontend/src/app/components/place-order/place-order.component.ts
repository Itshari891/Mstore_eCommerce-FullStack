import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validator, Validators,FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EcommerceService } from 'src/app/services/ecommerce.service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {
  order=new FormGroup({
    "billing_address":new FormControl('',Validators.required),
    "payment_method":new FormControl('',Validators.required)
  })
  constructor(private service:EcommerceService,private activeroute:ActivatedRoute,private router:Router) { }
  product:any
  product_id:any=localStorage.getItem("id")
  ngOnInit(): void {
    this.service.productDetailService(this.product_id).then(res=>res.json()).then(data=>this.product=data)
  }

  orderform(){
    console.log(this.order.value);
    let id=localStorage.getItem("id")
    this.service.placeOrderService(id,this.order.value).then(res=>res.json()).then(data=>console.log(data))
    if(this.order.valid){
      this.router.navigateByUrl('order')
    }
  }


}
