import { Component, Input, OnInit } from '@angular/core';
import { MessangerService } from 'src/app/messanger.service';
import { Product } from 'src/app/Models/product';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:any;
  @Input() productItem!: Product
  constructor(private productService:ProductService,private msg: MessangerService) { }

  ngOnInit(): void {
    // this.productService.getAllProducts().subscribe(next:(prods)=>{
    //   this.products=prods;
    // })
  this.productService.getAllProducts().subscribe(data=>{
    this.products=data;
    // console.log(data);
    });
  }

  handleAddToCart(){
    this.msg.sendMsg(this.productItem)
  }
}
