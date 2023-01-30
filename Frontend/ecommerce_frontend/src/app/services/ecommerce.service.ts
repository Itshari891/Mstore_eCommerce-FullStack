import { Injectable } from '@angular/core';



const signupURL='http://127.0.0.1:8000/api/signup';
const signinURL='http://127.0.0.1:8000/api/signin';
const productsURL='http://127.0.0.1:8000/api/products';
@Injectable({
  providedIn: 'root'
})

export class EcommerceService {
  
  
  constructor() { }
  
  fetchToken(){
    return localStorage.getItem('token')
  }
  registrationService(data:any){
    let header=new Headers
    header.append('Content-Type','application/json')
    let options={
      method:"POST",
      headers:header,
      body:JSON.stringify(data)
    }
    return fetch(signupURL,options)
  }
  
  signinService(data:any){
    let header=new Headers
    header.append('Content-Type','application/json')
    let options={
      method:"POST",
      body:JSON.stringify(data),
      headers:header
    }
    return fetch(signinURL,options)
  }
  ProductsService(){
    let header=new Headers
    header.append('Content-Type','application/json')
    let options={
      method:"GET",
      headers:header
    }
    return fetch(productsURL,options)
  }
  productDetailService(id:any){
    let header=new Headers
    header.append('Content-Type','application/json')
    let options={
      method:"GET",
      headers:header
    }
    return fetch(`http://127.0.0.1:8000/api/products/${id}`,options)
  }
  addToCartService(id:any){
    let header=new Headers
    header.append('Content-Type','application/json')
    let token =this.fetchToken()
    if(token){
      header.append('Authorization',token)
    }
    let options={
      method:"POST",
      headers:header
    }
    return fetch(`http://127.0.0.1:8000/api/products/${id}/add_to_cart`,options)
  }
  cartListservice(){
    let header=new Headers
    header.append('Content-Type','application/json')
    let token =this.fetchToken()
    if(token){
      header.append('Authorization',token)
    }
    let options={
      method:"GET",
      headers:header
    }
    return fetch(`http://127.0.0.1:8000/api/cart`,options)
  }
  placeOrderService(id:any,data:any){
    let header=new Headers
    header.append('Content-Type','application/json')
    let token =this.fetchToken()
    if(token){
      header.append('Authorization',token)
    }
    let options={
      method:"POST",
      headers:header,
      body:JSON.stringify(data)
    }
    return fetch(`http://127.0.0.1:8000/api/products/${id}/place_order`,options)
  }
  OrderListService(){
    let header=new Headers
    header.append('Content-Type','application/json')
    let token =this.fetchToken()
    if(token){
      header.append('Authorization',token)
    }
    let options={
      method:"GET",
      headers:header
    }
    return fetch(`http://127.0.0.1:8000/api/orders`,options)
  }
  orderCancelservice(id:any){
    let header=new Headers
    header.append('Content-Type','application/json')
    let token =this.fetchToken()
    if(token){
      header.append('Authorization',token)
    }
    let options={
      method:"PUT",
      headers:header
    }
    return fetch(`http://127.0.0.1:8000/api/orders/${id}/cancel`,options)
  }
  removeFromCartService(id:any){
    let header=new Headers
    header.append('Content-Type','application/json')
    let token =this.fetchToken()
    if(token){
      header.append('Authorization',token)
    }
    let options={
      method:"DELETE",
      headers:header
    }
    return fetch(`http://127.0.0.1:8000/api/cart/${id}`,options)
  }
  categoryService(){
    let header=new Headers
    header.append('Content-Type','application/json')
    let options={
      method:"GET",
      headers:header
    }
    return fetch(`http://127.0.0.1:8000/api/category`,options)
  }
  categoryDetailService(id:any){
    let header=new Headers
    header.append('Content-Type','application/json')
    let options={
      method:"GET",
      headers:header
    }
    return fetch(`http://127.0.0.1:8000/api/category/${id}`,options)
  }
  addReviewService(id:any,data:any){
    let header=new Headers
    header.append('Content-Type','application/json')
    let token =this.fetchToken()
    if(token){
      header.append('Authorization',token)
    }
    let options={
      method:"POST",
      headers:header,
      body:JSON.stringify(data)
    }
    return fetch(`http://127.0.0.1:8000/api/products/${id}/add_review`,options)
  }
  addProductService(data:any,file:any){
   

    var formdata=new FormData()
    for ( const key of Object.keys(data) ) {
      var value = data[key];
      formdata.append(key,value);
      }
    formdata.append("image", file, file.name);
    let header=new Headers
    let token =this.fetchToken()
    if(token){
      header.append('Authorization',token)
    }
    
    let options={
      method:"POST",
      headers:header,
      body:formdata
    }
    return fetch(`http://127.0.0.1:8000/api/products/add`,options)
  }
  productRemoveService(id:any){
    let header=new Headers
    header.append('Content-Type','application/json')
    let token =this.fetchToken()
    if(token){
      header.append('Authorization',token)
    }
    let options={
      method:"DELETE",
      headers:header
    }
    return fetch(`http://127.0.0.1:8000/api/products/${id}/remove`,options)
  }
  productEditService(id:any,data:any,file:any){
    let header=new Headers
    
    let token =this.fetchToken()
    if(token){
      header.append('Authorization',token)
    }
    var formdata=new FormData()
    for ( const key of Object.keys(data) ) {
      var value = data[key];
      formdata.append(key,value);
      }
    formdata.append("image", file, file.name);
    let options={
      method:"PUT",
      headers:header,
      body:formdata
    }
    return fetch(`http://127.0.0.1:8000/api/products/${id}/edit`,options)
  }

  categoryAddService(data:any,file:any){
    let header=new Headers
    
    let token =this.fetchToken()
    if(token){
      header.append('Authorization',token)
    }
    var formdata=new FormData()
    for ( const key of Object.keys(data) ) {
      var value = data[key];
      formdata.append(key,value);
      }
    formdata.append("icon", file, file.name);
    let options={
      method:"POST",
      headers:header,
      body:formdata
    }
    return fetch(`http://127.0.0.1:8000/api/category/add`,options)
  }
  categoryRemoveService(id:any){
    let header=new Headers
    header.append('Content-Type','application/json')
    let token =this.fetchToken()
    if(token){
      header.append('Authorization',token)
    }
    let options={
      method:"DELETE",
      headers:header
    }
    return fetch(`http://127.0.0.1:8000/api/category/${id}/remove`,options)
  }
}
