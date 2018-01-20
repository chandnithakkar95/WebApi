import { Component, OnInit } from '@angular/core';
import {ProductService} from '../shared/product.service';
import {Product} from '../shared/product.model';
  
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService:ProductService) { }

  ngOnInit() {
	  this.productService.getProductList();
  }
showForEdit(prod:Product){
	this.productService.selectedProduct=Object.assign({},prod);
}

onDelete(id:number){
	if(confirm('Are You Sure?')==true){
	this.productService.deleteProduct(id)
	.subscribe(x => {
		this.productService.getProductList();
	})
	}
}
}
