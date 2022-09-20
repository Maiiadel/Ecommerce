import { Component, OnInit } from '@angular/core';
import { MessangerService } from 'src/app/messanger.service';
import { Product } from 'src/app/Models/product';
import { TakefromcartService } from 'src/app/takefromcart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems : any[] = [
    // { id: 1, productId: 1, productName: 'Test 1', qty: 4, price: 100 },
    // { id: 2, productId: 3, productName: 'Test 3', qty: 6, price: 100 },
    // { id: 3, productId: 4, productName: 'Test 2', qty: 3, price: 100 },
    // { id: 4, productId: 2, productName: 'Test 4', qty: 2, price: 100 }
  ];
  cartTotal = 0;
  cartQty = 0;
  constructor(private msg: MessangerService, private msg1: TakefromcartService) { }

  ngOnInit(): void {
    this.msg.getMsg().subscribe((product: any) => { // ANY IS JUST FOR SYNTAX CORRECTION IT FOLLOWS THE PRODUCT MODEL
      this.addProductToCart(product);
      this.msg1.sendMsg(this.cartQty);
    })
  }

  addProductToCart(product: Product) {

    let productExists = false

    for (let i in this.cartItems) {
      if (this.cartItems[i].productId === product.id) {
        this.cartQty++
        this.cartItems[i].qty++
        productExists = true
        break;
      }
    }

    if (!productExists) {
      this.cartQty++
      this.cartItems.push({
        productId: product.id,
        productName: product.name,
        qty: 1,
        price: product.price
      })
    }
    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }


}
