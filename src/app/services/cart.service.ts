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
    console.log({ foundCart });
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
    console.log(this.cartList);
    console.log(this.calculateCartTotal());
  }

  calculateCartTotal() {
    const result = this.cartList.reduce(
      (prev, next) => prev + next.price * next.quantity,
      0
    );

    // add additional shipping cost: $20
    const shippingCost = 20;

    // and round to 2 decimal places
    const roundedResult = Math.round((result + shippingCost) * 100) / 100;
    return roundedResult;
  }
}
