import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  product:any;
  products: any[] = [
    { id: 1, name: "Shoes", price: 900, display: "../assets/1.jpg" },
    { id: 2, name: "Shirts", price: 850, display: "../assets/2.jfif" },
    { id: 3, name: "Socks", price: 910, display: "../assets/3.jfif" },
    { id: 4, name: "Tee", price: 890, display: "../assets/4.jpg" },
    { id: 5, name: "Bag", price: 990, display: "../assets/1.jpg" },
    { id: 6, name: "Shoes", price: 1090, display: "../assets/1.jpg" },
    { id: 7, name: "Shoes", price: 900, display: "../assets/1.jpg" },
  ]
  constructor(private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(data=>{
      this.product = this.products[data['id']]
    })
  }

}
