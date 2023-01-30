import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EcommerceService } from 'src/app/services/ecommerce.service';

@Component({
  selector: 'app-newcategory',
  templateUrl: './newcategory.component.html',
  styleUrls: ['./newcategory.component.css']
})
export class NewcategoryComponent implements OnInit {
file:File
category=new FormGroup({
  "name":new FormControl('',Validators.required)
})
  constructor(private service:EcommerceService) { }
  categorylist:any
  ngOnInit(): void {
    this.service.categoryService().then(res=>res.json()).then(data=>this.categorylist=data)
   
  }
  onChange(event:any) {
    this.file = event.target.files[0];
    }
  
  newCategoryFunction(){
    console.log(this.category,this.file);
    this.service.categoryAddService(this.category.value,this.file).then(res=>res.json()).then(data=>console.log(data)
    )
    setTimeout(window.location.reload.bind(location),1000)
  }
  categoryRemoveFunction(id:any){
    this.service.categoryRemoveService(id).then(res=>res.json()).then(data=>console.log(data)
    )
    setTimeout(window.location.reload.bind(location),1000)
  }
}
