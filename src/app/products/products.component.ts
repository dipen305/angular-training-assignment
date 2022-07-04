import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productList: any[] = [];
  productDefault: any;
  isGrid:boolean = false;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get('./assets/json/product.json').subscribe((result: any) => {
      this.productList = result;
      this.productDefault = [...result];
    })
  }
  priceFilter(event:any){
    this.productList = [...this.productDefault];
    if(event.target.value !='')  {
      this.productList = this.productList.filter(element => element.Price > event.target.value)
    }
  }

}
