import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ProductService} from '../shared/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService:ProductService) { }

  ngOnInit() {
	  this.resetForm();
  }
resetForm(form?:NgForm){
	if(form!=null){
		form.reset();
	}
	
this.productService.selectedProduct={
	Id:null,
	ProductName:'',
	Price:null
}	
}
onSubmit(form:NgForm){
	if(form.value.Id==null){
	this.productService.postProduct(form.value)
	.subscribe(data=>{
		this.resetForm(form);
		this.productService.getProductList();
	})
	}else{
			this.productService.putProduct(form.value.Id,form.value)
	.subscribe(data=>{
		this.resetForm(form);
		this.productService.getProductList();
	})
	}
}
}
