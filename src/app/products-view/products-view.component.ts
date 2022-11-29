import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css']
})
export class ProductsViewComponent {
  constructor(private api:ApiService){api.fetchProducts().subscribe(
    (response)=>{this.productData=response}
  )}
  productData:any = []

}
