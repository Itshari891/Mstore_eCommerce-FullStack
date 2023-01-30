import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EcommerceService } from 'src/app/services/ecommerce.service';

@Component({
  selector: 'app-adminproducts',
  templateUrl: './adminproducts.component.html',
  styleUrls: ['./adminproducts.component.css']
})
export class AdminproductsComponent implements OnInit {

  constructor(private activeroute:ActivatedRoute,private service:EcommerceService,private router:Router) { }
  category:any
  products:any
  ngOnInit(): void {
    let id=this.activeroute.snapshot.paramMap.get("id")
    this.service.categoryDetailService(id).then(res=>res.json()).then(data=>{this.category=data,
      this.products=this.category.products
      })
  }
  
  productRemoveFunction(id:any){
    console.log(id);
    this.service.productRemoveService(id).then(res=>res.json()).then(data=>console.log(data))
    setTimeout(location.reload.bind(location), 1000)
  }
  editProduct(id:any){
    this.router.navigate(['admin/dashboard/product/',id])
  }
}
