import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EcommerceService } from 'src/app/services/ecommerce.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  constructor(private service:EcommerceService,private activeroute:ActivatedRoute,private formBuilder: FormBuilder) { }
  product= new FormGroup({
    "name":new FormControl('',),
    "price":new FormControl('',),
    "description":new FormControl('',),
    "category":new FormControl('',)
  })
  file:File
  productdetail:any
  category:any
  ngOnInit(): void {
    let id=this.activeroute.snapshot.paramMap.get("id")
    this.service.productDetailService(id).then(res=>res.json()).then(data=>this.productdetail=data)
    this.service.categoryService().then(res=>res.json()).then(data=>this.category=data)
  }
  onChange(event:any) {
    this.file = event.target.files[0];
    }
    editProductFunction(id:any){
      this.service.productEditService(id,this.product.value,this.file).then(res=>res.json()).then(data=>this.productdetail=data)
    }
}
