import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';

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
    favorite: false,
  };
  productId: number = 0;
  quantity: number = 1;
  inventory: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(
    private productService: ProductService,
    private activeRouter: ActivatedRoute,
    private cartService: CartService
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

  addToCart(): void {
    this.productItem.quantity = Number(this.quantity);
    this.cartService.addToCart(this.productItem);
    alert(
      `${this.productItem.quantity} x ${this.productItem.name} added to your cart.`
    );
  }

  quantityChange(e: any) {
    this.quantity = e.target.value;
  }

  toggleFavorite(selected: boolean): void {
    alert('favorite toggled! ' + selected);
  }
}
