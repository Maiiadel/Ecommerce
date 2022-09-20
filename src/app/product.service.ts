import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { Product } from './Models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:any;
  // products:Product[]=[{id:100,name:'camera',image:'./../../../assets/img/shop02.png',category:'electronics',description:'Taking photos and making memories',price:1000,stock:10}]
  constructor(private Myhttp: HttpClient) {}

  // to fetch products from Database 
 getAllProducts():Observable<any>/*Observable<Product>*/{
  // console.log(this.Myhttp.get("localhost:3000/products"));
    //  return this.Myhttp.get<Product>("localhost:3000/products");  /*for connecting with backend*/
    this.products=this.Myhttp.get(`http://localhost:3000/products`);    
    return this.products;
 }

 // getting single product
 getSingleProduct(id:string):Observable<any> /*Observable<Product>*/ {
  return this.Myhttp.get(`http://localhost:3000/products/${id}`);
}

//getting product by category
// getProductByCat(cat:string):Product /*Observable<Product>*/{
// // return this.Myhttp.get<Product>(`http://localhost:3000/products/category/${cat}`); /*for connecting with backend*/
//   return this.products[0];
// }

}
