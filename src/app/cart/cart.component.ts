import { Component, OnInit } from '@angular/core';
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

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartList = this.cartService.getCart();
    this.getCartTotal();
  }

  onSubmit(): void {
    console.log('submit success!');
  }

  getCartTotal() {
    this.cartTotal = this.cartService.calculateCartTotal();
  }
}
