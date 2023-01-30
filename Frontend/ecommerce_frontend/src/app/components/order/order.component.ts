import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EcommerceService } from 'src/app/services/ecommerce.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
orders:any
  constructor(private service:EcommerceService,private activerouter:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.service.OrderListService().then(res=>res.json()).then(data=>this.orders=data)
  }
 orderCancelFunction(id:any){
  this.service.orderCancelservice(id).then(res=>res.json()).then(data=>console.log(data))
  window.location.reload()
}
}
