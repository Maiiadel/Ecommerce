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
  products:Product[]=[]
  @Input() productItem!: Product
  constructor(private productService:ProductService,private msg: MessangerService) { }

  ngOnInit(): void {
    // this.productService.getAllProducts().subscribe(next:(prods)=>{
    //   this.products=prods;
    // })
    this.products= this.productService.getAllProducts();

  }
  handleAddToCart(){
    this.msg.sendMsg(this.productItem)
  }
}
