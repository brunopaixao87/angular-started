import { ProductService } from './product.service';
import { Product } from './models/product';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { error } from 'util';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  _listFilter: string = '';
  errorMessage: any;

  productsFilter: Product[];
  products: Product[] = [];

  constructor(protected productService: ProductService) {
    this._listFilter = '';
  }

  ngOnInit(): void {
    this.productService
      .getProducts()
      .subscribe((products) => {
        this.products = products,
        this.productsFilter = this.products;
      }, error => this.errorMessage = <any>error);
  }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    if (!this._listFilter) {
      this.productsFilter = this.products;
      return;
    }
    this.performFilter(value.trim());


  }

  private toggleImage(): void {
    this.showImage = !this.showImage;
  }

  private performFilter(filterBy: string): void {
    filterBy = filterBy.toLocaleLowerCase();
    this.productsFilter = this.productsFilter.filter((p: Product) => p.productName.toLocaleLowerCase().indexOf(filterBy) !== -1)
  }

  private onRatingClicked(message: string): void {
    this.pageTitle = message;
  }

}
