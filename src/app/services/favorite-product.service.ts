import { Injectable } from '@angular/core';
import { FavoriteProduct } from '../models/FavoriteProduct';

@Injectable({
  providedIn: 'root',
})
export class FavoriteProductService {
  favoriteProductList: FavoriteProduct[] = [];

  constructor() {}

  getFavoriteProductList() {
    return this.favoriteProductList;
  }

  // check if a product is available in favorite list
  getFavoriteStatus(productId: number) {
    const foundProduct = this.favoriteProductList.some(
      (item) => item.id === productId
    );
    return foundProduct;
  }

  saveFavoriteProduct(productName: string, productId: number) {
    const favoriteStatus = this.getFavoriteStatus(productId);
    if (favoriteStatus) {
      // if item found, then remove it from favorite
      this.favoriteProductList = this.favoriteProductList.filter(
        (item) => item.id !== productId
      );
    } else {
      // if item not found, then add it to favorite
      this.favoriteProductList.push({ name: productName, id: productId });
    }
    console.log({ favoriteList: this.favoriteProductList });
  }
}
