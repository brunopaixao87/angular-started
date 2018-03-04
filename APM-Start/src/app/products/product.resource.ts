import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './models/product';
import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import  'rxjs/add/operator/catch';
import  'rxjs/add/operator/do';
import  'rxjs/add/operator/map';

@Injectable()
export class ProductResource {

  private _productUrl = './../../api/products/products.json';

  constructor(private _http: HttpClient) {}

  getProducts(): Observable<Product[]> {
   return this._http.get<Product[]>(this._productUrl)
   .do(data => console.log(`All: ${JSON.stringify(data)}`))
   .catch(this.handleError);
  }

  getProductById(id: number): Observable<Product> {
    return this.getProducts()
        .map((products: Product[]) => products.find(p => p.productId === id));
}

  private handleError(err: HttpErrorResponse){
     console.log(err.message);
     return Observable.throw(err.message);
  }

}
