import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { Product } from './models/product';
import { ProductResource } from './product.resource';

@Injectable()
export class ProductService{


  constructor(private productResouce: ProductResource){}

  getProducts(): Observable<Product[]> {
    return this.productResouce.getProducts();
  }

  getProductById(id: number): Observable<Product> {
    return this.productResouce.getProductById(id);
  }


}
