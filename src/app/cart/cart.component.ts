import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartList: Product[] = [];
  cartTotal: number = 0;
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phoneNumber: string = '';
  shippingAddress: string = '';

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartList = this.cartService.getCart();
    this.getCartTotal();
  }

  onSubmit(): void {
    this.router.navigate(['success']);
  }

  getCartTotal() {
    this.cartTotal = this.cartService.calculateCartTotal();
  }

  removeFromCart(productItem: Product): void {
    this.cartService.removeFromCart(productItem);
    this.cartList = this.cartService.getCart();
    this.getCartTotal();
    alert(
      `${productItem.quantity} x ${productItem.name} removed from your cart.`
    );
  }
}
