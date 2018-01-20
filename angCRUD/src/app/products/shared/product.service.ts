import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestOptions,RequestMethod} from '@angular/http';
import {Observable} from 'rxjs/Observable'
import { Product } from './product.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class ProductService {
  selectedProduct:Product;
  productList:Product[];
  constructor(private http:Http) { }
postProduct(prod :Product){
	var body=JSON.stringify(prod);
	var headerOptions=new Headers({'Content-Type':'application/json'});
	var requestOptions = new RequestOptions({method:RequestMethod.Post,headers:headerOptions});
	return this.http.post('http://localhost:53170/api/Products',body,requestOptions).map(x=> x.json());
}
getProductList(){
	this.http.get('http://localhost:53170/api/Products',)
		.map((data : Response)=>{
			return data.json() as Product[];
		}).toPromise().then(x => {
			this.productList=x;
		})
		
}
putProduct(id,prod){
	var body=JSON.stringify(prod);
	var headerOptions=new Headers({'Content-Type':'application/json'});
	var requestOptions = new RequestOptions({method:RequestMethod.Put,headers:headerOptions});
	return this.http.post('http://localhost:53170/api/Products/'+id,body,requestOptions).map(x=> x.json());
}
deleteProduct(id:number){
	return this.http.delete('http://localhost:53170/api/Products/'+id).map(res=>res.json());
}
}
