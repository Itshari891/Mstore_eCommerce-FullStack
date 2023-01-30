import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EcommerceService } from 'src/app/services/ecommerce.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private service:EcommerceService,private router:Router) { }

 
  category:any
  ngOnInit(): void {
    this.service.categoryService().then(res=>res.json()).then(data=>this.category=data)

  }
  addProductFunction(){
    this.router.navigateByUrl('admin/dashboard/product')
  }
  categoryDetail(id:any){
    this.router.navigate(['admin/dashboard/category/',id])
  }
  categoryAddFunction(){
    this.router.navigateByUrl('admin/dashboard/category_new')
  }
}
