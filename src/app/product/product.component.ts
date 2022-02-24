import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: any[] = [
    { id: 1, name: "Shoes", price: 900, display: "../assets/1.jpg" },
    { id: 2, name: "Shirts", price: 850, display: "../assets/2.jfif" },
    { id: 3, name: "Socks", price: 910, display: "../assets/3.jfif" },
    { id: 4, name: "Tee", price: 890, display: "../assets/4.jpg" },
    { id: 5, name: "Bag", price: 990, display: "../assets/1.jpg" },
    { id: 6, name: "Shoes", price: 1090, display: "../assets/1.jpg" },
    { id: 7, name: "Shoes", price: 900, display: "../assets/1.jpg" },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
