import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderComponent } from './components/order/order.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { CategoryComponent } from './components/category/category.component';
import { DashboardComponent } from './admin_components/dashboard/dashboard.component';
import { AddProductComponent } from './admin_components/add-product/add-product.component';
import { AdminproductsComponent } from './admin_components/adminproducts/adminproducts.component';
import { ProductEditComponent } from './admin_components/product-edit/product-edit.component';
import { NewcategoryComponent } from './admin_components/newcategory/newcategory.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ProductDetailComponent,
    CartComponent,
    OrderComponent,
    PlaceOrderComponent,
    CategoryComponent,
    DashboardComponent,
    AddProductComponent,
    AdminproductsComponent,
    ProductEditComponent,
    NewcategoryComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
