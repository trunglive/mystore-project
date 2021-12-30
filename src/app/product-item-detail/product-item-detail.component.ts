import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  productItem: Product = {
    id: 0,
    name: '',
    price: 0,
    url: '',
    description: '',
    quantity: 0,
  };
  productId: number = 0;

  constructor(
    private productService: ProductService,
    private activeRouter: ActivatedRoute
  ) {
    this.activeRouter.paramMap.subscribe((params: ParamMap) => {
      this.productId = Number(params.get('productId'));
    });
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.productItem = (products.find(
        (product) => product.id === this.productId
      ) as unknown) as Product;
    });
  }
}
