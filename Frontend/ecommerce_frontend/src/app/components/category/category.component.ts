import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EcommerceService } from 'src/app/services/ecommerce.service';
import {} from 'src/app/components/home/home.component'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category:any
  products:any
  constructor(private service:EcommerceService,private router:Router,private activeroute:ActivatedRoute) { }

  ngOnInit(): void {
    let id=this.activeroute.snapshot.paramMap.get("id")
    this.service.categoryDetailService(id).then(res=>res.json()).then(data=>{this.category=data,
      this.products=this.category.products
      })
    
  }
  fetchId(id:any){
    this.service.productDetailService(id).then(res=>res.json()).then(data=>console.log(data))
    this.router.navigate(['product/',id])
  }
  addtocartCategoryFunction(id:any){
    this.service.addToCartService(id).then(res=>res.json()).then(data=>console.log(data))
    this.router.navigateByUrl('cart')
  }

}
