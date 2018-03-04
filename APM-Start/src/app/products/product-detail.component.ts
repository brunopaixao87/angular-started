import { Component, OnInit } from '@angular/core';
import { Product } from './models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail';
  product: Product;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router ) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.productService.getProductById(id).subscribe((product) => {
      this.product = product
    }, error => console.log(error));
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
