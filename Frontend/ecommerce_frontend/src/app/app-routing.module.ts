import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './admin_components/add-product/add-product.component';
import { AdminproductsComponent } from './admin_components/adminproducts/adminproducts.component';
import { DashboardComponent } from './admin_components/dashboard/dashboard.component';
import { NewcategoryComponent } from './admin_components/newcategory/newcategory.component';
import { ProductEditComponent } from './admin_components/product-edit/product-edit.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoryComponent } from './components/category/category.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OrderComponent } from './components/order/order.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path:"signup",component:RegisterComponent},
  {path:"signin",component:LoginComponent},
  {path:'products',component:HomeComponent},
  {path:'product/:id',component:ProductDetailComponent},
  {path:'cart',component:CartComponent},
  {path:'order',component:OrderComponent},
  {path:'place-order',component:PlaceOrderComponent},
  {path:'category/:id',component:CategoryComponent},
  {path:'admin/dashboard',component:DashboardComponent},
  {path:'admin/dashboard/product',component:AddProductComponent},
  {path:'admin/dashboard/category/:id',component:AdminproductsComponent},
  {path:'admin/dashboard/product/:id',component:ProductEditComponent},
  {path:'admin/dashboard/category_new',component:NewcategoryComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
