import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartList: Product[] = [];

  constructor() {}

  getCart() {
    return this.cartList;
  }

  addToCart(product: Product) {
    let foundCart = this.cartList.find((cart) => cart.id === product.id);
    if (foundCart) {
      let currentQuantity: number = foundCart.quantity;
      let newQuantity: number = currentQuantity + product.quantity;
      let index: number = this.cartList.findIndex(
        (cart) => cart.id === product.id
      );
      this.cartList[index].quantity = newQuantity;
    } else {
      this.cartList.push(product);
    }
  }

  removeFromCart(productItem: Product) {
    this.cartList = this.cartList.filter((cart) => cart.id !== productItem.id);
  }

  calculateCartTotal() {
    const result = this.cartList.reduce(
      (prev, next) => prev + next.price * next.quantity,
      0
    );

    // add additional shipping cost: $20
    const shippingCost = this.getCart().length > 0 ? 20 : 0;

    // and round to 2 decimal places
    const roundedResult = Math.round((result + shippingCost) * 100) / 100;
    return roundedResult;
  }
}
